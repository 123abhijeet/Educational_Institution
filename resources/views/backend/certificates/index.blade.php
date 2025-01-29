@extends('backend.layouts.master')
@section('title','Certificates | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Certificates</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Certificates</span></li>
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
                                            <th>Certificate No</th>
                                            <th>Enrollment No</th>
                                            <th>Course Name</th>
                                            <th>Course Duration</th>
                                            <th>Issued On</th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($certificates as $key=>$item)
                                        @php
                                        $course_detail = App\Models\Backend\Course::where('id',$item->course_id)->first();
                                        $issued_at = Carbon\Carbon::parse($item->certificate_issued_date)->format('M d, Y');
                                        @endphp
                                        <tr>
                                            <td>{{++$key}}</td>
                                            <td>{{$item->certificate_no}}</td>
                                            <td>{{$item->enrollment_no}}</td>
                                            <td>{{$course_detail->course_name}}</td>
                                            <td>{{$course_detail->course_duration}} Days</td>
                                            <td>{{$issued_at}}</td>
                                            <td class="text-right">
                                                <a href="{{ asset($item->certificate) }}" download>Download</a>
                                            </td>
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