<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Category;
use App\Models\Backend\Course;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $course = Course::all();
        return view('backend.course.index', compact('course'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $category = Category::all();
        return view('backend.course.create', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Course $course)
    {
        $validator = Validator::make($request->all(), [
            'course_uid' => ['required'],
            'course_name' => ['required', 'string', 'max:255', Rule::unique('courses', 'course_name')],
            'course_duration' => ['required'],
            'course_short_description' => ['required', 'string', 'max:255'],
            'course_description' => ['required', 'string', 'max:4000'],
            'course_banner' => ['required', 'max:500'], // Maximum size in kilobytes
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        $data = $request->all();
        if ($request->course_banner) {
            $course_banner = time() . 'course_banner' . '.' . $request->course_banner->extension();
            $request->course_banner->move(public_path('Course Banner'), $course_banner);
            $data['course_banner'] = $course_banner;
        }
        Course::create($data);
        return redirect()->route('courses.index')->with('success', 'Data Stored Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        $category = Category::all();
        return view('backend.course.view', ['course' => $course, 'category' => $category]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        $category = Category::all();
        return view('backend.course.edit', ['course' => $course, 'category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Course $course)
    {
        $validator = Validator::make($request->all(), [
            'course_name' => ['required', 'string', 'max:255'],
            'course_duration' => ['required', 'string', 'max:255'],
            'course_fee' => ['required'],
            'course_short_description' => ['required', 'string', 'max:255'],
            'course_description' => ['required', 'string', 'max:4000'],
            'course_video_url' => ['required', 'string', 'max:255'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        $data = $request->all();
        $current_course_banner = Course::findOrFail($course->id)->course_banner;

        if ($request->hasFile('course_banner') && $request->file('course_banner')->isValid()) {
            $course_banner = time() . 'course_banner' . '.' . $request->course_banner->extension();
            $request->course_banner->move(public_path('Course Banner'), $course_banner);
            $data['course_banner'] = $course_banner;
            if ($current_course_banner) {
                unlink(public_path('Course Banner') . '/' . $current_course_banner);
            }
        } else {
            $course_banner = $current_course_banner;
            $data['course_banner'] = $course_banner;
        }
        $course->update($data);
        return redirect()->route('courses.index')->with('success', 'Data Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        $current_course_banner = Course::findOrFail($course->id)->course_banner;
        if ($current_course_banner) {
            unlink(public_path('Course Banner') . '/' . $current_course_banner);
        }
        $course->delete();
        return redirect()->route('courses.index')->with('error', 'Data Removed Successfully');
    }
}
