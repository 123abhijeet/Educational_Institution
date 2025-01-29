<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Admission;
use App\Models\Backend\Branch;
use App\Models\Backend\Category;
use App\Models\Backend\Course;
use App\Models\Backend\Director;
use App\Models\Backend\Enquiry;
use App\Models\Backend\Reginaldirector;
use App\Models\Backend\Student;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BackendController extends Controller
{
    public function index()
    {
        $total_students = Student::count();
        $total_course = Course::count();
        $total_branch = Branch::count();
        $total_category = Category::count();
        $total_admission = Admission::count();
        $total_rd = Reginaldirector::count();
        $total_director = Director::count();
        $branch_student = Student::where('branch', Auth::user()->branch)->count();
        $branch_admission = Admission::where('branch', Auth::user()->branch)->count();
        $branch_enquiry = Enquiry::where('branch', Auth::user()->branch)->count();

        // Total Earning
        $totalEarning = Admission::where('branch', Auth::user()->branch)->sum('paid_amount');

        // This Month's Earning
        $thisMonthStart = Carbon::now()->startOfMonth();
        $thisMonthEnd = Carbon::now()->endOfMonth();
        $thisMonthEarning = Admission::where('branch', Auth::user()->branch)
            ->whereBetween('created_at', [$thisMonthStart, $thisMonthEnd])
            ->sum('paid_amount');

        // This Week's Earning
        $thisWeekStart = Carbon::now()->startOfWeek();
        $thisWeekEnd = Carbon::now()->endOfWeek();
        $thisWeekEarning = Admission::where('branch', Auth::user()->branch)
            ->whereBetween('created_at', [$thisWeekStart, $thisWeekEnd])
            ->sum('paid_amount');

        $students = Student::all();
        $branches = Branch::all();
        return view('backend.index', compact(
            'total_students',
            'total_course',
            'total_branch',
            'total_admission',
            'total_rd',
            'total_category',
            'total_director',
            'branch_student',
            'branch_admission',
            'branch_enquiry',
            'totalEarning',
            'thisMonthEarning',
            'thisWeekEarning',
            'students',
            'branches'
        ));
    }
}
