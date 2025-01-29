@extends('backend.layouts.master')
@section('title','Registration | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Registration</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Registration</span></li>
                    </ul>
                </div>
            </div>
        </div>
        @role('Branch Director')
        <div class="row">
            <div class="col-sm-4 col-12"></div>
            <div class="col-sm-8 col-12 text-right add-btn-col">
                <a href="{{route('registrations.create')}}" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus"></i> Create Registration</a>
            </div>
        </div>
        @endrole
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
                                            <th>Course</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($registrations as $key=>$item)
                                        @php
                                        $branch = App\Models\Backend\Branch::where('id',$item->branch)->first();
                                        $course = App\Models\Backend\Course::where('id',$item->course)->first();
                                        @endphp
                                        <tr>
                                            <td>{{++$key}}</td>
                                            @role('Admin')
                                            <td>{{$branch->branch_name}}</td>
                                            @endrole
                                            <td>{{$item->enrollment_no}}</td>
                                            <td>{{$course->course_name}}</td>
                                            <td>{{$item->student_name}}</td>
                                            <td>{{$item->email}}</td>
                                            <td>{{$item->mobile}}</td>
                                            <td class="text-right">
                                                <div class="dropdown-action">
                                                    <a href="#" class="action-icon dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="{{route('registrations.show',$item->id)}}"><i class="fas fa-eye m-r-5"></i> View</a>
                                                        @role('Admin')
                                                        <a class="dropdown-item" href="{{route('registrations.edit',$item->id)}}"><i class="fas fa-pencil-alt m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" href="{{route('Generate-Certificate',$item->enrollment_no)}}"><i class="fas fa-certificate m-r-5"></i> Generate Certificate</a>
                                                        <form action="{{ route('registrations.destroy', $item->id) }}" method="POST" class="d-inline">
                                                            @csrf
                                                            @method('delete')
                                                            <button type="submit" class="dropdown-item"><i class="fas fa-trash-alt m-r-5"></i> Delete</button>
                                                        </form>
                                                        @endrole
                                                    </div>
                                                </div>
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