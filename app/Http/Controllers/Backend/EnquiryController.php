<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Course;
use App\Models\Backend\Enquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class EnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enquiry = Enquiry::orderby('id', 'desc')->where('branch',Auth::user()->branch)->get();
        return view('backend.enquiry.index', compact('enquiry'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $course = Course::all();
        return view('backend.enquiry.create', compact('course'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required'],
            'fathers_name' => ['required'],
            'email' => ['required'],
            'mobile' => ['required'],
            'address' => ['required']
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        Enquiry::create([
            'branch' => Auth::user()->branch,
            'name' => $request->name,
            'course' => $request->course,
            'fathers_name' => $request->fathers_name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'last_qualification' => $request->last_qualification,
            'address' => $request->address
        ]);
        return redirect()->route('enquiry.index')->with('success', 'Data Stored Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Enquiry $enquiry)
    {
        $course = Course::all();
        return view('backend.enquiry.view', ['course' => $course,'enquiry' => $enquiry]);

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
    public function destroy(Enquiry $enquiry)
    {
        $enquiry->delete();

        return redirect()->route('enquiry.index')->with('error', 'Data Removed Successfully');
    }
}
