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
    public function about()
    {
        return view('frontend.about');
    }
    public function teachers()
    {
        return view('frontend.teachers');
    }
    public function gallery()
    {
        return view('frontend.gallery');
    }
    public function contact()
    {
        return view('frontend.contact');
    }
}
