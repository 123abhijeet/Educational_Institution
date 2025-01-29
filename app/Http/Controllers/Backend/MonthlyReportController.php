<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Admission;
use App\Models\Backend\Branch;
use App\Models\Backend\Monthlyreport;
use App\Models\Backend\Monthlyreportitem;
use Barryvdh\DomPDF\Facade\Pdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Razorpay\Api\Api;

class MonthlyReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roleName = Auth::user()->getRoleNames()->first();
        if ($roleName == 'Admin') {
            $all_reports = Monthlyreport::orderby('id', 'desc')->get();
        } else {
            $all_reports = Monthlyreport::where('branch', Auth::user()->branch)->orderby('id', 'desc')->get();
        }
        return view('backend.monthly_report.index', compact('all_reports'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $reports = Admission::where('branch', Auth::user()->branch)->whereDate('created_at', Carbon::today())->get();
        return view('backend.monthly_report.create', compact('reports'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function test()
    {
        // Check for internet connectivity
        try {
            return \Illuminate\Support\Facades\Http::head('https://www.google.com')->successful();
        } catch (\Exception $e) {
            return '0';
        }
    }
    public function payment_complete(Request $request)
    {
        $amount = $request->amount / 100;
        $input = $request->all();

        $api = new Api(env('RAZORPAY_KEY'), env('RAZORPAY_SECRET'));

        try {
            // Check for internet connectivity
            if (!$this->hasInternetConnection()) {
                throw new \Exception('No internet connection');
            }

            // Fetch payment details from Razorpay
            $payment = $api->payment->fetch($request->razorpay_payment_id);

            // Check if the payment was successful
            if (count($input) && !empty($input['razorpay_payment_id'])) {

                $student_details = Admission::join('students', 'admissions.enrollment_no', 'students.enrollment_no')
                    ->where('admissions.branch', Auth::user()->branch)
                    ->whereDate('admissions.created_at', Carbon::today())
                    ->get();

                $total_student = $student_details->count();
                $monthly_report = Monthlyreport::create([
                    'branch' => Auth::user()->branch,
                    'transaction_id' => $request->razorpay_payment_id,
                    'amount' => $amount,
                    'total_student' => $total_student,
                    'payment_status' => 'success'
                ]);

                foreach ($student_details as $item) {
                    Monthlyreportitem::create([
                        'monthly_report_id' => $monthly_report->id,
                        'enrollment_no' => $item->enrollment_no,
                        'course_id' => $item->course,
                        'registration_fee' => $item->registration_fee,
                    ]);
                }

                $reportItems = Monthlyreportitem::where('monthly_report_id', $monthly_report->id)->get();
                $branch_details = Branch::where('id', Auth::user()->branch)->first();
                // Generate PDF

                $pdf = Pdf::loadView('monthly_report', [
                    'report_date' => now()->format('M d, Y'),
                    'reportItems' => $reportItems,
                    'amount' => $amount
                ]);

                $pdf_content = $pdf->output();

                $relativePdfPath = 'Monthly Report/' . $branch_details->branch_name . '_' . now()->format('M d, Y') . '.pdf';

                // Ensure the directory exists
                if (!file_exists(public_path('Monthly Report'))) {
                    mkdir(public_path('Monthly Report'), 0755, true);
                }

                // Save the generated PDF content to the public folder
                file_put_contents($relativePdfPath, $pdf_content);

                Monthlyreport::where('id', $monthly_report->id)->update([
                    'monthly_report' => $relativePdfPath
                ]);

                $response = [
                    'status' => 'success',
                    'message' => 'Payment is Successful!',
                ];
            } else {
                throw new \Exception('Invalid payment details');
            }
        } catch (\Exception $e) {
            // Handle the payment failure
            $this->handleProductPaymentFailure($e->getMessage());

            $response = ['status' => 'failed', 'message' => $e->getMessage()];
        }
        echo json_encode($response);
    }
    private function handleProductPaymentFailure($errorMessage)
    {
        // Log the payment failure details
        \Log::error('Payment failed: ' . $errorMessage);
        echo json_encode($errorMessage);
    }

    private function hasInternetConnection()
    {
        try {
            // Check for internet connectivity
            return \Illuminate\Support\Facades\Http::head('https://www.google.com')->successful();
        } catch (\Exception $e) {
            return false;
        }
    }
}
