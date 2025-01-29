<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\certificate_no_helper;
use App\Helpers\enrollment_id_helper;
use App\Http\Controllers\Controller;
use App\Models\Backend\Admission;
use App\Models\Backend\Branch;
use App\Models\Backend\Course;
use App\Models\Backend\Registration;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Backend\Certificate;
use App\Models\Backend\Student;
use App\Models\Backend\Studenteducation;
use App\Models\User;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roleName = Auth::user()->getRoleNames()->first();
        if ($roleName == 'Admin') {
            $registrations = Registration::orderBy('id', 'desc')->get();
        } else {
            $registrations = Registration::where('branch', Auth::user()->branch)->orderby('id', 'desc')->get();
        }

        return view('backend.registration.index', compact('registrations'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getReceiptNo()
    {
        $branch = Branch::where('id', Auth::user()->branch)->first();
        $current_date = date('dmY'); // Date format: ddmmyyyy

        // Fetch the latest receipt from both Admission and Registration tables for today
        $latest_admission_receipt = Admission::where('branch', Auth::user()->branch)
            ->whereDate('created_at', Carbon::today())
            ->orderBy('receipt_no', 'desc')
            ->first();

        $latest_registration_receipt = Registration::where('branch', Auth::user()->branch)
            ->whereDate('created_at', Carbon::today())
            ->orderBy('receipt_no', 'desc')
            ->first();

        // Initialize the next numeric part to 1
        $next_numeric_part = 1;

        // Determine the highest numeric part from both tables
        if ($latest_admission_receipt || $latest_registration_receipt) {
            // Get the numeric parts from both tables
            $admission_numeric_part = $latest_admission_receipt ? intval(substr($latest_admission_receipt->receipt_no, 14)) : 0;
            $registration_numeric_part = $latest_registration_receipt ? intval(substr($latest_registration_receipt->receipt_no, 14)) : 0;

            // Use the highest numeric part between both tables
            $next_numeric_part = max($admission_numeric_part, $registration_numeric_part) + 1;
        }

        // Format the receipt number as: branch_code + current_date + sequential_number
        $next_receipt_no = $branch->branch_code . $current_date . sprintf('%03d', $next_numeric_part);

        return $next_receipt_no;
    }

    public function getEnrollmentNo()
    {
        $branch = Branch::where('id', Auth::user()->branch)->first();

        // Fetch the latest enrollment number from both Admission and Registration tables
        $latest_admission_enrollment = Admission::where('branch', Auth::user()->branch)
            ->orderBy('enrollment_no', 'desc')
            ->first();

        $latest_registration_enrollment = Registration::where('branch', Auth::user()->branch)
            ->orderBy('enrollment_no', 'desc')
            ->first();

        // Initialize the next numeric part to 1
        $next_numeric_part = 1;

        // Determine the highest numeric part from both tables
        if ($latest_admission_enrollment || $latest_registration_enrollment) {
            // Get the numeric parts from both tables
            $admission_numeric_part = $latest_admission_enrollment ? intval(substr($latest_admission_enrollment->enrollment_no, 6)) : 0;
            $registration_numeric_part = $latest_registration_enrollment ? intval(substr($latest_registration_enrollment->enrollment_no, 6)) : 0;

            // Use the highest numeric part between both tables
            $next_numeric_part = max($admission_numeric_part, $registration_numeric_part) + 1;
        }

        // Format the enrollment number as: branch_code + sequential_number
        $next_enrollment_no = $branch->branch_code . sprintf('%03d', $next_numeric_part);

        return $next_enrollment_no;
    }

    public function create()
    {
        $receipt_no = $this->getReceiptNo();
        $enrollment_no = $this->getEnrollmentNo();
        $course = Course::all();
        return view('backend.registration.create', compact('course', 'receipt_no', 'enrollment_no'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'enrollment_no' => ['required'],
            'date_of_admission' => ['required'],
            'student_name' => ['required'],
            'fathers_name' => ['required'],
            'fathers_occupation' => ['required'],
            'email' => ['required'],
            'mobile' => ['required'],
            'dob' => ['required'],
            'address' => ['required'],
            'aadhar_no' => ['required'],
            'picture' => ['required', 'max:200'], // Maximum size in kilobytes
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        if ($request->picture) {
            $picture = time() . 'picture' . '.' . $request->picture->extension();
            $request->picture->move(public_path('Student Picture'), $picture);
        }

        $digitPassword = mt_rand(1000, 9999); // Generate a random 4-digit number
        $stringPassword = Str::random(4); // Generate a random 4-character string

        $combinedPassword = $digitPassword . $stringPassword;

        Registration::create([
            'branch' => Auth::user()->branch,
            'course' => $request->course,
            'enrollment_no' => $request->enrollment_no,
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
            'aadhar_no' => $request->aadhar_no,
            'picture' => $picture,
            'course_fee' => $request->course_fee,
            'registration_fee' => $request->registration_fee,
            'examination_fee' => $request->examination_fee,
            'total_amount' => $request->total_amount,
            'paid_amount' => $request->paid_amount,
            'receipt_no' => $request->receipt_no,
            'concession' => $request->concession,
            'certificate_due_date' => $request->certificate_due_date
        ]);

        $user_exists = Student::where('email', $request->email)->first();

        if (!$user_exists) {

            $user = User::create([
                'branch' => Auth::user()->branch,
                'name' => $request->student_name,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'password' =>  Hash::make($combinedPassword),
                'user_role' => 'Student'
            ]);
            $user->assignRole('Student');
            $newEnrollmentId = enrollment_id_helper::nextEnrollmentId();

            $student = Student::create([
                'user_id' => $user->id,
                'enrollment_id' => $newEnrollmentId,
                'branch' => Auth::user()->branch,
                'student_name' => $request->student_name,
                'fathers_name' => $request->fathers_name,
                'fathers_occupation' => $request->fathers_occupation,
                'aadhar_no' => $request->aadhar_no,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'dob' => $request->dob,
                'picture' => $picture,
                'category' => $request->category,
                'address' => $request->address,
                'professionl_qualification' => $request->professionl_qualification,
                'date_of_admission' => $request->date_of_admission,
                'bpl_nonbpl' => $request->bpl_nonbpl,
                'password' => $combinedPassword
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
        }
        return redirect()->route('registrations.index')->with('success', 'Data Stored Successfully');
    }
    /**
     * Display the specified resource.
     */
    public function show(Registration $registration)
    {
        $course = Course::all();
        $student = Student::where('email', $registration->email)->first();
        $student_education = Studenteducation::where('student_id', $student->id)->get();
        $course_duration = Course::where('id', $registration->course)->value('course_duration');
        return view('backend.registration.view', ['registration' => $registration, 'course' => $course, 'student_education' => $student_education, 'course_duration' => $course_duration]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Registration $registration)
    {
        $course = Course::all();
        $student = Student::where('email', $registration->email)->first();
        $student_education = Studenteducation::where('student_id', $student->id)->get();
        $course_duration = Course::where('id', $registration->course)->value('course_duration');
        return view('backend.registration.edit', ['registration' => $registration, 'course' => $course, 'student_education' => $student_education, 'course_duration' => $course_duration]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Registration $registration)
    {
        $validator = Validator::make($request->all(), [
            'student_name' => ['required'],
            'fathers_name' => ['required'],
            'fathers_occupation' => ['required'],
            'mobile' => ['required'],
            'dob' => ['required'],
            'address' => ['required'],
            'aadhar_no' => ['required'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Registration::where('id', $registration->id)->update([
            'course' => $request->course,
            'student_name' => $request->student_name,
            'fathers_name' => $request->fathers_name,
            'fathers_occupation' => $request->fathers_occupation,
            'mobile' => $request->mobile,
            'dob' => $request->dob,
            'category' => $request->category,
            'address' => $request->address,
            'professionl_qualification' => $request->professionl_qualification,
            'bpl_nonbpl' => $request->bpl_nonbpl,
            'aadhar_no' => $request->aadhar_no,
            'course_fee' => $request->course_fee,
            'registration_fee' => $request->registration_fee,
            'examination_fee' => $request->examination_fee,
            'total_amount' => $request->total_amount,
            'paid_amount' => $request->paid_amount,
            'concession' => $request->concession,
            'certificate_due_date' => $request->certificate_due_date
        ]);
        Student::where('email', $request->email)->update([
            'student_name' => $request->student_name,
            'fathers_name' => $request->fathers_name,
            'fathers_occupation' => $request->fathers_occupation,
            'mobile' => $request->mobile,
            'dob' => $request->dob,
            'category' => $request->category,
            'address' => $request->address,
            'professionl_qualification' => $request->professionl_qualification,
            'bpl_nonbpl' => $request->bpl_nonbpl,
            'aadhar_no' => $request->aadhar_no
        ]);

        User::where('email', $request->email)->update([
            'name' => $request->student_name,
        ]);
        return redirect()->route('admissions.index')->with('success', 'Data Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Registration $registration)
    {
        $current_picture = $registration->picture;
        if ($current_picture) {
            unlink(public_path('Student Picture') . '/' . $current_picture);
        }
        $registration->delete();
        return redirect()->route('registrations.index')->with('error', 'Data Removed Successfully');
    }
    public function generate_certificate($enrollment_no)
    {
        $student_details = Registration::where('enrollment_no', $enrollment_no)->first();

        $course = Course::where('id', $student_details->course)->first();

        $certificate_no = certificate_no_helper::nextCertificateNo();

        $certificate_details = Certificate::where('enrollment_no', $enrollment_no)->where('course_id', $student_details->course)->first();

        if (!$certificate_details) {
            // Generate PDF
            $pdf = Pdf::loadView('certificate', [
                'student_name' => $student_details->student_name,
                'course_name' => $course->course_name,
                'course_start_date' => $student_details->created_at->format('F d, Y'),
                'course_end_date' => Carbon::now()->format('F d, Y'),
                'certificate_issued_date' => Carbon::now()->format('F d, Y'),
                'certificate_no' => $certificate_no
            ]);

            $pdf_content = $pdf->output();

            $relativePdfPath = 'Certificates/' . $certificate_no . '.pdf';

            // Ensure the directory exists
            if (!file_exists(public_path('Certificates'))) {
                mkdir(public_path('Certificates'), 0755, true);
            }

            // Save the generated PDF content to the public folder
            file_put_contents($relativePdfPath, $pdf_content);

            Certificate::create([
                'certificate_no' => $certificate_no,
                'enrollment_no' => $enrollment_no,
                'course_id' => $course->id,
                'branch_id' => $student_details->branch,
                'course_start_date' => $student_details->created_at,
                'course_end_date' => Carbon::now(),
                'certificate_issued_date' => Carbon::now(),
                'certificate' => $relativePdfPath
            ]);
        }
        return redirect()->route('registrations.index')->with('success', 'Certificate Generated Successfully');
    }
}
