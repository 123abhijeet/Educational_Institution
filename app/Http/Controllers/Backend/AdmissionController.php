<?php

namespace App\Http\Controllers\Backend;

use App\Helpers\certificate_no_helper;
use App\Http\Controllers\Controller;
use App\Models\Backend\Admission;
use App\Models\Backend\Branchfeedetail;
use App\Models\Backend\Course;
use App\Models\Backend\Student;
use App\Models\Backend\Studenteducation;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\Backend\Branch;
use App\Models\Backend\Certificate;
use App\Models\Backend\Idcard;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Picqer\Barcode\BarcodeGeneratorPNG;
use Illuminate\Support\Facades\File;

class AdmissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roleName = Auth::user()->getRoleNames()->first();
        if ($roleName == 'Admin') {
            $admission = Admission::orderby('id', 'desc')->get();
        } else {
            $admission = Admission::where('branch', Auth::user()->branch)->orderby('id', 'desc')->get();
        }

        return view('backend.admission.index', compact('admission'));
    }

    /**
     * Show the form for creating a new resource.
     */

    public function getReceiptNo()
    {
        $branch = Branch::where('id', Auth::user()->branch)->first();
        $current_date = date('dmY'); // Date format: ddmmyyyy

        $latest_admission_receipt = Admission::where('branch', Auth::user()->branch)
            ->whereDate('created_at', Carbon::today())
            ->orderBy('receipt_no', 'desc')
            ->first();

        // Initialize the next numeric part to 1
        $next_numeric_part = 1;

        if ($latest_admission_receipt) {
            $admission_numeric_part = $latest_admission_receipt ? intval(substr($latest_admission_receipt->receipt_no, 14)) : 0;

            $next_numeric_part = $admission_numeric_part + 1;
        }

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

        // Initialize the next numeric part to 1
        $next_numeric_part = 1;
        if ($latest_admission_enrollment) {
            $admission_numeric_part = $latest_admission_enrollment ? intval(substr($latest_admission_enrollment->enrollment_no, 6)) : 0;
            // Use the highest numeric part between both tables
            $next_numeric_part = $admission_numeric_part + 1;
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
        return view('backend.admission.create', compact('course', 'receipt_no', 'enrollment_no'));
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

        Admission::create([
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

            $student = Student::create([
                'user_id' => $user->id,
                'enrollment_no' => $request->enrollment_no,
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

            $course_detail = Course::where('id', $request->course)->first();
            $student_detail = Student::where('enrollment_no', $request->enrollment_no)->first();
            $branch = Branch::where('id', Auth::user()->branch)->first();
            // Generate PDF

            $pdf = Pdf::loadView('payment_receipt', [
                'branch_name' => $branch->branch_name,
                'branch_address' => $branch->branch_address,
                'branch_mobile' => $branch->branch_mobile,
                'branch_email' => $branch->branch_email,
                'student_name' => $student_detail->student_name,
                'enrollment_no' => $student_detail->enrollment_no,
                'email' => $student_detail->email,
                'mobile' => $student_detail->mobile,
                'purchase_date' => now()->format('F d, Y'),
                'course_name' => $course_detail->course_name,
                'course_fee' => $request->course_fee,
                'admission_fee' => $course_detail->course_fee,
                'registration_fee' => $request->registration_fee,
                'fee_paid' => $request->paid_amount,
                'fee_due' => ($request->course_fee + $request->registration_fee) - ($request->paid_amount),
                'concession' => $request->concession,
                'sub_total' => ($request->course_fee + $request->registration_fee),
                'course_duration' => $course_detail->course_duration,
                'amount' => $request->total_amount,
                'receipt_number' =>  $request->receipt_no,
            ]);

            $pdf_content = $pdf->output();

            $relativePdfPath = 'Payment Receipt/' . $request->receipt_no . '.pdf';

            // Ensure the directory exists
            if (!file_exists(public_path('Payment Receipt'))) {
                mkdir(public_path('Payment Receipt'), 0755, true);
            }

            // Save the generated PDF content to the public folder
            file_put_contents($relativePdfPath, $pdf_content);
        }
        return redirect()->route('admissions.index')->with('success', 'Data Stored Successfully');
    }
    /**
     * Display the specified resource.
     */
    public function show(Admission $admission)
    {
        $course = Course::all();
        $student = Student::where('email', $admission->email)->first();
        $student_education = Studenteducation::where('student_id', $student->id)->get();
        $course_duration = Course::where('id', $admission->course)->value('course_duration');
        return view('backend.admission.view', ['admission' => $admission, 'course' => $course, 'student_education' => $student_education, 'course_duration' => $course_duration]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admission $admission)
    {
        $course = Course::all();
        $student = Student::where('email', $admission->email)->first();
        $student_education = Studenteducation::where('student_id', $student->id)->get();
        $course_duration = Course::where('id', $admission->course)->value('course_duration');
        return view('backend.admission.edit', ['admission' => $admission, 'course' => $course, 'student_education' => $student_education, 'course_duration' => $course_duration]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Admission $admission)
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

        Admission::where('id', $admission->id)->update([
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
    public function destroy(Admission $admission)
    {
        $current_picture = $admission->picture;
        if ($current_picture) {
            unlink(public_path('Student Picture') . '/' . $current_picture);
        }
        $admission->delete();
        return redirect()->route('admissions.index')->with('error', 'Data Removed Successfully');
    }
    public function fetch_fee_details(Request $request)
    {
        $fee_details = Branchfeedetail::join('courses', 'branchfeedetails.course_id', '=', 'courses.id')
            ->where('branchfeedetails.course_id', $request->course_id)
            ->where('branchfeedetails.branch_id', Auth::user()->branch)
            ->select('branchfeedetails.*', 'courses.*')
            ->first();
        return response()->json(["fee_details" => $fee_details]);
    }
    public function generate_course_certificate($enrollment_no)
    {
        $student_details = Admission::where('enrollment_no', $enrollment_no)->first();

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
        return redirect()->route('admissions.index')->with('success', 'Certificate Generated Successfully');
    }
    public function generate_admit_card($enrollment_no)
    {
        $student_details = Admission::where('enrollment_no', $enrollment_no)->first();

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
        return redirect()->route('admissions.index')->with('success', 'Certificate Generated Successfully');
    }
    public function generate_id_card($enrollment_no)
    {
        $student_details = Admission::where('enrollment_no', $enrollment_no)->first();

        $course = Course::where('id', $student_details->course)->first();

        $branch = Branch::where('id', $student_details->branch)->first();

        $id_card_details = Idcard::where('enrollment_no', $enrollment_no)->first();



        if (!$id_card_details) {

            // Generate Barcode
            $generator = new BarcodeGeneratorPNG();
            $barcodeData = $student_details->student_name . '|' . $course->course_name . '|' . $student_details->enrollment_no;
            $barcodeImage = $generator->getBarcode($barcodeData, $generator::TYPE_CODE_128);

            // Ensure the directory exists
            if (!file_exists(public_path('BARCODE'))) {
                mkdir(public_path('BARCODE'), 0755, true);
            }
            // Save Barcode Image to a file
            $barcodePath = public_path('BARCODE/' . $enrollment_no . '_barcode.png');
            File::put($barcodePath, $barcodeImage);

            // Generate PDF
            $pdf = Pdf::loadView('id_card', [
                'student_name' => $student_details->student_name,
                'course_name' => $course->course_name,
                'enrollment_no' => $student_details->enrollment_no,
                'date_of_admission' => $student_details->date_of_admission,
                'center' => $branch->branch_name,
                'student_address' => $student_details->address,
                'dob' => $student_details->dob,
                'office_address' => $branch->branch_address,
                'barcode_path' => $barcodePath,
            ]);

            $pdf_content = $pdf->output();

            $relativePdfPath = 'IDCARD/' . $enrollment_no . '.pdf';

            // Ensure the directory exists
            if (!file_exists(public_path('IDCARD'))) {
                mkdir(public_path('IDCARD'), 0755, true);
            }

            // Save the generated PDF content to the public folder
            file_put_contents($relativePdfPath, $pdf_content);

            Idcard::create([
                'enrollment_no' => $enrollment_no,
                'id_card' => $relativePdfPath,
                'bar_code' => $barcodePath,
            ]);
        }
        return redirect()->route('admissions.index')->with('success', 'ID Card Generated Successfully');
    }
    public function all_certificates()
    {
        if (Auth::user()->hasRole('Admin')) {
            $certificates = Certificate::orderBy('id', 'desc')->get();
        } else {
            $certificates = Certificate::where('branch_id', Auth::user()->branch)->orderBy('id', 'desc')->get();
        }
        return view('backend.certificates.index', compact('certificates'));
    }
}
