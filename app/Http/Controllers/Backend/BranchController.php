<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Mail\ManagerRegistered;
use App\Mail\UserRegistered;
use App\Models\Backend\Branch;
use App\Models\Backend\Branchfeedetail;
use App\Models\Backend\Course;
use App\Models\Backend\Director;
use App\Models\Backend\Directoracedemicdetail;
use App\Models\Backend\Reginaldirector;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use Exception;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $branch = Branch::orderBy('id', 'desc')->get();
        return view('backend.branch.index', compact('branch'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $regional_director = Reginaldirector::all();
        return view('backend.branch.create', compact('regional_director'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'branch_code' => ['required'],
            'branch_name' => ['required'],
            'branch_email' => ['required'],
            'branch_mobile' => ['required'],
            'branch_address' => ['required'],
            'branch_banner' => ['required', 'max:200'], // Maximum size in kilobytes
            'director_name' => ['required'],
            'director_email' => ['required', 'string', 'email', 'max:255', Rule::unique('users', 'email')],
            'director_mobile' => ['required'],
            'director_address' => ['required'],
            'director_aadhar' => ['required', 'max:200'], // Maximum size in kilobytes
            'director_pan' => ['required', 'max:200'], // Maximum size in kilobytes
            'signature' => ['required', 'max:200'], // Maximum size in kilobytes
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        if ($request->branch_banner) {
            $branch_banner = time() . 'branch_banner' . '.' . $request->branch_banner->extension();
            $request->branch_banner->move(public_path('Branch Banner'), $branch_banner);
        }
        if ($request->director_aadhar) {
            $director_aadhar = time() . 'director_aadhar' . '.' . $request->director_aadhar->extension();
            $request->director_aadhar->move(public_path('Director Document'), $director_aadhar);
        }
        if ($request->director_pan) {
            $director_pan = time() . 'director_pan' . '.' . $request->director_pan->extension();
            $request->director_pan->move(public_path('Director Document'), $director_pan);
        }
        if ($request->signature) {
            $signature = time() . 'signature' . '.' . $request->signature->extension();
            $request->signature->move(public_path('Director Document'), $signature);
        }

        $branch = Branch::create([
            'regional_director' => $request->regional_director,
            'branch_code' => $request->branch_code,
            'branch_name' => $request->branch_name,
            'branch_email' => $request->branch_email,
            'branch_mobile' => $request->branch_mobile,
            'branch_phone' => $request->branch_phone,
            'branch_fax' => $request->branch_fax,
            'branch_city' => $request->branch_city,
            'branch_state' => $request->branch_state,
            'branch_pin' => $request->branch_pin,
            'branch_address' => $request->branch_address,
            'branch_banner' => $branch_banner,
        ]);
        Director::create([
            'branch_id' => $branch->id,
            'director_name' => $request->director_name,
            'director_email' => $request->director_email,
            'director_mobile' => $request->director_mobile,
            'director_address' => $request->director_address,
            'director_pan' => $director_pan,
            'director_aadhar' => $director_aadhar,
            'signature' => $signature,
        ]);
        if (!empty($request->certificate)) {
            foreach ($request->certificate as $key => $item) {
                if ($request->certificate[$key]) {
                    // Generate a unique file name
                    $certificateFileName = time() . '_' . uniqid(mt_rand(), true) . '_certificate.' . $request->certificate[$key]->extension();
                    // Move the certificate file to the desired location
                    $request->certificate[$key]->move(public_path('Director Acedemic Certificate'), $certificateFileName);
                }
                Directoracedemicdetail::create([
                    'branch_id' => $branch->id,
                    'degree' => $request->degree[$key],
                    'institute' => $request->institute[$key],
                    'board_university' => $request->board_university[$key],
                    'percent' => $request->percent[$key],
                    'certificate' => $certificateFileName, // Save the unique file name in the database
                ]);
            }
        }

        $user = User::create([
            'branch' => $branch->id,
            'name' => $request->director_name,
            'email' => $request->director_email,
            'mobile' => $request->director_mobile,
            'user_role' => 'Branch Director',
            'password' =>  Hash::make($request->password),
        ]);
        $user->assignRole('Branch Director');
        try {
            Mail::to($request->director_email)->send(new UserRegistered($request->director_name, $request->director_email, $request->password));
        } catch (Exception $exception) {
            \Log::error('Mail sending error: ' . $exception->getMessage());
        }
        return redirect()->route('branches.index')->with('success', 'Data Stored Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Branch $branch)
    {
        $regional_director = Reginaldirector::all();
        $director = Director::where('branch_id', $branch->id)->first();
        $acedemics = Directoracedemicdetail::where('branch_id', $branch->id)->get();
        return view('backend.branch.view', ['branch' => $branch, 'regional_director' => $regional_director, 'director' => $director, 'acedemics' => $acedemics]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Branch $branch)
    {
        $regional_director = Reginaldirector::all();
        $director = Director::where('branch_id', $branch->id)->first();
        $acedemics = Directoracedemicdetail::where('branch_id', $branch->id)->get();
        return view('backend.branch.edit', ['branch' => $branch, 'regional_director' => $regional_director, 'director' => $director, 'acedemics' => $acedemics]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Branch $branch)
    {
        $validator = Validator::make($request->all(), [
            'branch_code' => ['required'],
            'branch_name' => ['required'],
            'branch_email' => ['required'],
            'branch_mobile' => ['required'],
            'branch_address' => ['required'],
            'branch_city' => ['required'],
            'branch_state' => ['required'],
            'branch_pin' => ['required'],
            'branch_banner' => ['max:500'], // Maximum size in kilobytes
            'director_name' => ['required'],
            'director_mobile' => ['required'],
            'director_address' => ['required'],
            'director_aadhar' => ['max:200'], // Maximum size in kilobytes
            'director_pan' => ['max:200'], // Maximum size in kilobytes
            'signature' => ['max:200'], // Maximum size in kilobytes
        ]);
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $current_branch_banner = Branch::findOrFail($branch->id)->branch_banner;
        $current_director_aadhar = Director::findOrFail($branch->id)->director_aadhar;
        $current_director_pan = Director::findOrFail($branch->id)->director_pan;
        $current_signature = Director::findOrFail($branch->id)->signature;

        if ($request->hasFile('branch_banner') && $request->file('branch_banner')->isValid()) {
            $branch_banner = time() . 'branch_banner' . '.' . $request->branch_banner->extension();
            $request->branch_banner->move(public_path('Branch Banner'), $branch_banner);

            if ($current_branch_banner) {
                unlink(public_path('Branch Banner') . '/' . $current_branch_banner);
            }
        } else {
            $branch_banner = $current_branch_banner;
        }
        if ($request->hasFile('director_aadhar') && $request->file('director_aadhar')->isValid()) {
            $director_aadhar = time() . 'director_aadhar' . '.' . $request->director_aadhar->extension();
            $request->director_aadhar->move(public_path('Director Document'), $director_aadhar);

            if ($current_director_aadhar) {
                unlink(public_path('Director Document') . '/' . $current_director_aadhar);
            }
        } else {
            $director_aadhar = $current_director_aadhar;
        }
        if ($request->hasFile('director_pan') && $request->file('director_pan')->isValid()) {
            $director_pan = time() . 'director_pan' . '.' . $request->director_pan->extension();
            $request->director_pan->move(public_path('Director Document'), $director_pan);

            if ($current_director_pan) {
                unlink(public_path('Director Document') . '/' . $current_director_pan);
            }
        } else {
            $director_pan = $current_director_pan;
        }
        if ($request->hasFile('signature') && $request->file('signature')->isValid()) {
            $signature = time() . 'signature' . '.' . $request->signature->extension();
            $request->signature->move(public_path('Director Document'), $signature);

            if ($current_signature) {
                unlink(public_path('Director Document') . '/' . $current_signature);
            }
        } else {
            $signature = $current_signature;
        }
        Branch::where('id', $branch->id)->update([
            'regional_director' => $request->regional_director,
            'branch_code' => $request->branch_code,
            'branch_name' => $request->branch_name,
            'branch_email' => $request->branch_email,
            'branch_mobile' => $request->branch_mobile,
            'branch_phone' => $request->branch_phone,
            'branch_fax' => $request->branch_fax,
            'branch_city' => $request->branch_city,
            'branch_state' => $request->branch_state,
            'branch_pin' => $request->branch_pin,
            'branch_address' => $request->branch_address,
            'branch_banner' => $branch_banner,
        ]);
        Director::where('branch_id', $branch->id)->update([
            'director_name' => $request->director_name,
            'director_mobile' => $request->director_mobile,
            'director_address' => $request->director_address,
            'director_pan' => $director_pan,
            'director_aadhar' => $director_aadhar,
            'signature' => $signature,
        ]);
        User::where('email', $request->director_email)->update([
            'name' => $request->director_name,
        ]);
        return redirect()->route('branches.index')->with('success', 'Data Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Branch $branch)
    {
        // Delete branch banner if exists
        $current_branch_banner = $branch->branch_banner;
        if ($current_branch_banner) {
            unlink(public_path('Branch Banner') . '/' . $current_branch_banner);
        }

        // Find and delete directors related to the branch
        $director = Director::where('branch_id', $branch->id)->first();
        // Delete director documents if they exist
        if ($director->director_aadhar) {
            unlink(public_path('Director Document') . '/' . $director->director_aadhar);
        }
        if ($director->director_pan) {
            unlink(public_path('Director Document') . '/' . $director->director_pan);
        }
        if ($director->signature) {
            unlink(public_path('Director Document') . '/' . $director->signature);
        }
        // Find and delete academic details related to the director
        $academic_details = Directoracedemicdetail::where('branch_id', $branch->id)->get();
        foreach ($academic_details as $detail) {
            if ($detail->certificate) {
                unlink(public_path('Director Acedemic Certificate') . '/' . $detail->certificate);
            }
            $detail->delete();
        }
        // Delete User
        User::where('email', $director->director_email)->delete();
        // Delete director record
        $director->delete();

        // Finally, delete the branch itself
        $branch->delete();

        return redirect()->route('branches.index')->with('error', 'Data Removed Successfully');
    }

    public function course_fetch()
    {
        $courses = Course::select('id', 'course_name')->get();
        return response()->json(['courses' => $courses]);
    }
    public function get_branch_fee($branch_id)
    {
        $course = Course::all();
        $exists = Branchfeedetail::where('branch_id', $branch_id)->exists();

        if ($exists) {
            $fee_details = Branchfeedetail::where('branch_id', $branch_id)->get();
            return view('backend.branch.branch_fee', ['course' => $course, 'branch_id' => $branch_id, 'fee_details' => $fee_details]);
        } else {
            return view('backend.branch.branch_fee', ['course' => $course, 'branch_id' => $branch_id]);
        }
    }
    public function branch_fee(Request $request)
    {
        $exists = Branchfeedetail::where('branch_id', $request->branch_id)->exists();

        if ($exists) {
            Branchfeedetail::where('branch_id', $request->branch_id)->delete();
        }
        foreach ($request->course_id as $key => $item) {
            if (empty($request->registration_fee[$key] && $request->examination_fee[$key])) {
                return redirect()->back()->with('error', 'Something went wrong! Try again');
            } else {
                Branchfeedetail::create([
                    'branch_id' => $request->branch_id,
                    'course_id' => $request->course_id[$key],
                    'registration_fee' => $request->registration_fee[$key],
                    'examination_fee' => $request->examination_fee[$key],
                ]);
            }
        }
        return redirect()->route('branches.index')->with('success', 'Data Stored Successfully');
    }
    public function update_branch_fee(Request $request)
    {
        return redirect()->route('branches.index')->with('success', 'Data Updated Successfully');
    }
    public function add_manager(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => ['required'],
            "email" => ['required', Rule::unique('users', 'email')],
            "mobile" => ['required']
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->getMessageBag()->toArray()]);
        } else {
            $user = User::create([
                'branch' => $request->branch_id,
                'name' => $request->name,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'password' =>  Hash::make($request->mobile),
                'user_role' => 'Branch Manager'
            ]);
        }
        $user->assignRole('Branch Manager');
        try {
            Mail::to($request->email)->send(new ManagerRegistered($request->name, $request->email, $request->mobile));
        } catch (Exception $exception) {
            \Log::error('Mail sending error: ' . $exception->getMessage());
        }
        return response()->json(['success' => 'Data Added Successfully']);
    }
}
