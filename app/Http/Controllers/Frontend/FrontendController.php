<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Admission;
use App\Models\Backend\Branch;
use App\Models\Backend\Student;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index()
    {
        return view('frontend.index');
    }
    public function contact()
    {
        return view('frontend.contact');
    }
    public function branch(Request $request)
    {
        // Fetch unique cities for the dropdown
        $cities = Branch::select('branch_city')->distinct()->pluck('branch_city');

        // Get selected city from the request
        $selectedCity = $request->input('city');

        // Fetch branches based on selected city, or all branches if no city is selected
        $branches = Branch::join('directors', 'branches.id', 'directors.branch_id')
            ->select(
                'directors.director_name as director_name',
                'branches.branch_name as branch_name',
                'branches.branch_email as branch_email',
                'branches.branch_phone as branch_phone',
                'branches.branch_mobile as branch_mobile',
                'branches.branch_address as branch_address',
                'branches.branch_city as branch_city',
                'branches.branch_state as branch_state',
                'branches.branch_pin as branch_pin',
            );

        if ($selectedCity) {
            $branches = $branches->where('branch_city', $selectedCity);
        }

        $branches = $branches->get();

        return view('frontend.branch', compact('branches', 'cities'));
    }

    public function course()
    {
        return view('frontend.course');
    }
    public function feedback()
    {
        return view('frontend.feedback');
    }
    public function gallery()
    {
        return view('frontend.gallery');
    }
    public function studentzone()
    {
        return view('frontend.studentzone');
    }
    public function get_enrollment_info(Request $request)
    {
        $student_details = Student::where('enrollment_id', $request->enrollment_id)->first();
        if ($student_details) {
            $admission_details = Admission::with(['course', 'branch'])
                ->where('email', $student_details->email)
                ->get();
            // $admission_details = Admission::where('email', $student_details->email)->get();
            return response()->json(['admission_details' => $admission_details, 'student_details' => $student_details]);
        } else {
            return response()->json(['status' => 'Invalid Enrollment ID']);
        }
    }
}
