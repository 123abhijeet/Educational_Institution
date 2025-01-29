<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\enrollment_id_helper;
use App\Http\Controllers\Controller;
use App\Models\Backend\Branch;
use App\Models\Backend\Student;
use App\Models\Backend\Studenteducation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $student = Student::orderby('id', 'desc')->get();
        return view('backend.student.index', compact('student'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $branch = Branch::all();
        return view('backend.student.create', compact('branch'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'date_of_admission' => ['required'],
            'student_name' => ['required'],
            'fathers_name' => ['required'],
            'fathers_occupation' => ['required'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users', 'email')],
            'mobile' => ['required'],
            'dob' => ['required'],
            'address' => ['required'],
            'picture' => ['required', 'max:200'], // Maximum size in kilobytes
            'aadhar' => ['required', 'max:200'], // Maximum size in kilobytes
            'signature' => ['required', 'max:200'], // Maximum size in kilobytes
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        if ($request->picture) {
            $picture = time() . 'picture' . '.' . $request->picture->extension();
            $request->picture->move(public_path('Student Picture'), $picture);
        }
        if ($request->aadhar) {
            $aadhar = time() . 'aadhar' . '.' . $request->aadhar->extension();
            $request->aadhar->move(public_path('Student Document'), $aadhar);
        }
        if ($request->signature) {
            $signature = time() . 'signature' . '.' . $request->signature->extension();
            $request->signature->move(public_path('Student Document'), $signature);
        }

        $digitPassword = mt_rand(1000, 9999); // Generate a random 4-digit number
        $stringPassword = Str::random(4); // Generate a random 4-character string

        $combinedPassword = $digitPassword . $stringPassword;

        $newEnrollmentId = enrollment_id_helper::nextEnrollmentId();
        $student = Student::create([
            'branch' => $request->branch,
            'enrollment_id' => $newEnrollmentId,
            'student_name' => $request->student_name,
            'fathers_name' => $request->fathers_name,
            'fathers_occupation' => $request->fathers_occupation,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'dob' => $request->dob,
            'category' => $request->category,
            'address' => $request->address,
            'professionl_qualification' => $request->professionl_qualification,
            'date_of_admission' => $request->date_of_admission,
            'bpl_nonbpl' => $request->bpl_nonbpl,
            'picture' => $picture,
            'aadhar' => $aadhar,
            'signature' => $signature,
        ]);

        if (!empty($request->certificate)) {
            foreach ($request->certificate as $key => $item) {
                if ($request->certificate[$key]) {
                    // Generate a unique file name
                    $certificateFileName = time() . '_' . uniqid(mt_rand(), true) . '_certificate.' . $request->certificate[$key]->extension();
                    // Move the certificate file to the desired location
                    $request->certificate[$key]->move(public_path('Student Certificate'), $certificateFileName);
                }
                Studenteducation::create([
                    'student_id' => $student->id,
                    'education' => $request->education[$key],
                    'passing_year' => $request->passing_year[$key],
                    'board_university' => $request->board_university[$key],
                    'division' => $request->division[$key],
                    'percent' => $request->percent[$key],
                    'certificate' => $certificateFileName, // Save the unique file name in the database
                ]);
            }
        }

        $user = User::create([
            'name' => $request->student_name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'password' =>  Hash::make($combinedPassword),
            'user_role' => 'Student'
        ]);
        $user->assignRole('Student');
        return redirect()->route('students.index')->with('success', 'Data Stored Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        $branch = Branch::all();
        $student_education = Studenteducation::where('student_id', $student->id)->get();
        return view('backend.student.view', ['student' => $student, 'branch' => $branch, 'student_education' => $student_education]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        $branch = Branch::all();
        $student_education = Studenteducation::where('student_id', $student->id)->get();
        return view('backend.student.edit', ['student' => $student, 'branch' => $branch, 'student_education' => $student_education]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $validator = Validator::make($request->all(), [
            'enrollment_no' => ['required'],
            'date_of_admission' => ['required'],
            'student_name' => ['required'],
            'fathers_name' => ['required'],
            'fathers_occupation' => ['required'],
            'mobile' => ['required'],
            'dob' => ['required'],
            'address' => ['required'],
            'picture' => ['max:200'], // Maximum size in kilobytes
            'aadhar' => ['max:200'], // Maximum size in kilobytes
            'signature' => ['max:200'], // Maximum size in kilobytes
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $current_signature = Student::findOrFail($student->id)->signature;
        $current_aadhar = Student::findOrFail($student->id)->aadhar;
        $current_picture = Student::findOrFail($student->id)->picture;

        if ($request->hasFile('signature') && $request->file('signature')->isValid()) {
            $signature = time() . 'signature' . '.' . $request->signature->extension();
            $request->signature->move(public_path('Student Document'), $signature);

            if ($current_signature) {
                unlink(public_path('Student Document') . '/' . $current_signature);
            }
        } else {
            $signature = $current_signature;
        }
        if ($request->hasFile('aadhar') && $request->file('aadhar')->isValid()) {
            $aadhar = time() . 'aadhar' . '.' . $request->aadhar->extension();
            $request->aadhar->move(public_path('Student Document'), $aadhar);

            if ($current_aadhar) {
                unlink(public_path('Student Document') . '/' . $current_aadhar);
            }
        } else {
            $aadhar = $current_aadhar;
        }
        if ($request->hasFile('picture') && $request->file('picture')->isValid()) {
            $picture = time() . 'picture' . '.' . $request->picture->extension();
            $request->picture->move(public_path('Student Picture'), $picture);

            if ($current_picture) {
                unlink(public_path('Student Picture') . '/' . $current_picture);
            }
        } else {
            $picture = $current_picture;
        }
        Student::where('id', $student->id)->update([
            'branch' => $request->branch,
            'enrollment_no' => $request->enrollment_no,
            'student_name' => $request->student_name,
            'fathers_name' => $request->fathers_name,
            'fathers_occupation' => $request->fathers_occupation,
            'mobile' => $request->mobile,
            'dob' => $request->dob,
            'category' => $request->category,
            'address' => $request->address,
            'professionl_qualification' => $request->professionl_qualification,
            'date_of_admission' => $request->date_of_admission,
            'bpl_nonbpl' => $request->bpl_nonbpl,
            'picture' => $picture,
            'aadhar' => $aadhar,
            'signature' => $signature,
        ]);

        User::where('email', $request->email)->update([
            'name' => $request->student_name,
        ]);
        return redirect()->route('students.index')->with('success', 'Data Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $current_picture = $student->picture;
        if ($current_picture) {
            unlink(public_path('Student Picture') . '/' . $current_picture);
        }
        $current_signature = $student->signature;
        if ($current_signature) {
            unlink(public_path('Student Document') . '/' . $current_signature);
        }
        $current_aadhar = $student->aadhar;
        if ($current_aadhar) {
            unlink(public_path('Student Document') . '/' . $current_aadhar);
        }

        // Find and delete education details related to the student
        $education_details = Studenteducation::where('student_id', $student->id)->get();
        foreach ($education_details as $detail) {
            if ($detail->certificate) {
                unlink(public_path('Student Certificate') . '/' . $detail->certificate);
            }
            $detail->delete();
        }

        // Delete User
        User::where('email', $student->email)->delete();
        $student->delete();

        return redirect()->route('students.index')->with('error', 'Data Removed Successfully');
    }
}
