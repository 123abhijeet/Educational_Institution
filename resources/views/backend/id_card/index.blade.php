@extends('backend.layouts.master')
@section('title','ID Cards | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">ID Cards</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>ID Cards</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div>
                            <div class="table-responsiveness">
                                <table class="table custom-table DataTable" style="width: 100%;">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>#</th>
                                            @role('Admin')
                                            <th>Branch</th>
                                            @endrole
                                            <th>Enrollment No</th>
                                            <th>Name</th>
                                            <th>Course</th>
                                            <th>ID Card</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($idcards as $key=>$item)
                                        @php
                                        $admission = App\Models\Backend\Admission::where('enrollment_no',$item->enrollment_no)->first();
                                        $branch = App\Models\Backend\Branch::where('id',$admission->branch)->first();
                                        $course = App\Models\Backend\Course::where('id',$admission->course)->first();
                                        @endphp
                                        <tr>
                                            <td>{{++$key}}</td>
                                            @role('Admin')
                                            <td>{{$branch->branch_name}}</td>
                                            @endrole
                                            <td>{{$item->enrollment_no}}</td>
                                            <td>{{$admission->student_name}}</td>
                                            <td>{{$course->course_name}}</td>
                                            <td><a target="_blank" href="{{ asset('IDCARD/'.$item->enrollment_no.'.pdf') }}">Download</a></td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection