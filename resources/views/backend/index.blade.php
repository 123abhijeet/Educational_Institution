@extends('backend.layouts.master')
@section('title','Dashboard | Soft Campus')
@section('body')
<!-- index start -->
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Dashboard</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Dashboard</span></li>
                    </ul>
                </div>
            </div>
        </div>

        @role('Admin')
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info text-left d-inline-block">
                        <span>Regional Directors</span>
                        <h3>{{$total_rd}}</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-2.png')}}" width="80" alt="" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info text-left d-inline-block">
                        <span>Branches</span>
                        <h3>{{$total_branch}}</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-2.png')}}" width="80" alt="" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <span class="float-left"><img src="{{asset('backend/img/dash/dash-1.png')}}" alt="" width="80" /></span>
                    <div class="dash-widget-info text-right">
                        <span>Students</span>
                        <h3>{{$total_students}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info text-left d-inline-block">
                        <span>Course Category</span>
                        <h3>{{$total_category}}</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-2.png')}}" width="80" alt="" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <span class="float-left"><img src="{{asset('backend/img/dash/dash-3.png')}}" alt="" width="80" /></span>
                    <div class="dash-widget-info text-right">
                        <span>Courses</span>
                        <h3>{{$total_course}}</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <span class="float-left"><img src="{{asset('backend/img/dash/dash-1.png')}}" alt="" width="80" /></span>
                    <div class="dash-widget-info text-right">
                        <span>Admissions</span>
                        <h3>{{$total_admission}}</h3>
                    </div>
                </div>
            </div>


        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info d-inline-block text-left">
                        <span>This Weeks Earnings</span>
                        <h3>Rs 20,000</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-4.png')}}" alt="" width="80" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info d-inline-block text-left">
                        <span>This Months Earnings</span>
                        <h3>Rs 60,000</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-4.png')}}" alt="" width="80" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info d-inline-block text-left">
                        <span>Total Earnings</span>
                        <h3>Rs 1,20,000</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-4.png')}}" alt="" width="80" /></span>
                </div>
            </div>
        </div>
        @endrole

        @role('Branch Director')
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <span class="float-left"><img src="{{asset('backend/img/dash/dash-1.png')}}" alt="" width="80" /></span>
                    <div class="dash-widget-info text-right">
                        <span>Students</span>
                        <h3>{{$branch_student}}</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <span class="float-left"><img src="{{asset('backend/img/dash/dash-3.png')}}" alt="" width="80" /></span>
                    <div class="dash-widget-info text-right">
                        <span>Admissions</span>
                        <h3>{{$branch_admission}}</h3>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <span class="float-left"><img src="{{asset('backend/img/dash/dash-3.png')}}" alt="" width="80" /></span>
                    <div class="dash-widget-info text-right">
                        <span>Enquiry</span>
                        <h3>{{$branch_enquiry}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info d-inline-block text-left">
                        <span>This Weeks Earnings</span>
                        <h3>Rs {{$thisWeekEarning}}</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-4.png')}}" alt="" width="80" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info d-inline-block text-left">
                        <span>This Months Earnings</span>
                        <h3>Rs {{$thisMonthEarning}}</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-4.png')}}" alt="" width="80" /></span>
                </div>
            </div>
            <div class="col-md-6 col-sm-6 col-lg-6 col-xl-4">
                <div class="dash-widget dash-widget5">
                    <div class="dash-widget-info d-inline-block text-left">
                        <span>Total Earnings</span>
                        <h3>Rs {{$totalEarning}}</h3>
                    </div>
                    <span class="float-right"><img src="{{asset('backend/img/dash/dash-4.png')}}" alt="" width="80" /></span>
                </div>
            </div>
        </div>
        @endrole

        <!-- <div class="row">
            <div class="col-lg-6 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="page-title">Students Survay</div>
                            </div>
                            <div class="col text-right">
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="chart1"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="page-title">Student Performance</div>
                            </div>
                            <div class="col text-right">
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="chart2"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="page-title">Events</div>
                            </div>
                            <div class="col text-right">
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="calendar" class="overflow-hidden"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="page-title">Total Member</div>
                            </div>
                            <div class="col text-right">
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body d-flex align-items-center justify-content-center overflow-hidden">
                        <div id="chart3"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-md-12 col-12 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="page-title">Income Monthwise</div>
                            </div>
                            <div class="col text-right">
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div id="chart4"></div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 d-flex">
                <div class="card flex-fill">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="page-title">Exam List</div>
                            </div>
                            <div class="col text-right">
                                <div class="mt-sm-0 mt-2">
                                    <button class="btn btn-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div role="separator" class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table custom-table">
                                        <thead class="thead-light">
                                            <tr>
                                                <th>Exam Name</th>
                                                <th>Subject</th>
                                                <th>Class</th>
                                                <th>Section</th>
                                                <th>Time</th>
                                                <th>Date</th>
                                                <th class="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-green">C</a>
                                                </td>
                                                <td>English</td>
                                                <td>5</td>
                                                <td>B</td>
                                                <td>10.00am</td>
                                                <td>20/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-purple">C</a>
                                                </td>
                                                <td>English</td>
                                                <td>4</td>
                                                <td>A</td>
                                                <td>10.00am</td>
                                                <td>2/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-green">C</a>
                                                </td>
                                                <td>Maths</td>
                                                <td>6</td>
                                                <td>B</td>
                                                <td>10.00am</td>
                                                <td>2/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-dark">C</a>
                                                </td>
                                                <td>Science</td>
                                                <td>3</td>
                                                <td>B</td>
                                                <td>10.00am</td>
                                                <td>20/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-green">C</a>
                                                </td>
                                                <td>Maths</td>
                                                <td>6</td>
                                                <td>B</td>
                                                <td>10.00am</td>
                                                <td>20/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-dark">C</a>
                                                </td>
                                                <td>English</td>
                                                <td>7</td>
                                                <td>B</td>
                                                <td>10.00am</td>
                                                <td>20/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="exam-detail.html" class="avatar bg-purple">C</a>
                                                </td>
                                                <td>Science</td>
                                                <td>5</td>
                                                <td>B</td>
                                                <td>10.00am</td>
                                                <td>20/1/2019</td>
                                                <td class="text-right">
                                                    <a href="edit-exam.html" class="btn btn-primary btn-sm mb-1">
                                                        <i class="far fa-edit"></i>
                                                    </a>
                                                    <button type="submit" data-toggle="modal" data-target="#delete_employee" class="btn btn-danger btn-sm mb-1">
                                                        <i class="far fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        @role('Admin')
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="page-title">All Branches</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div>
                                    <div class="table-responsiveness">
                                        <table class="table custom-table DataTable" style="width: 100%;">
                                            <thead class="thead-light">
                                                <tr>
                                                    <th>Regional Director</th>
                                                    <th>Branch Name</th>
                                                    <th>Branch Code</th>
                                                    <th>Email</th>
                                                    <th>Mobile</th>
                                                    <th>Address</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach($branches as $item)
                                                @php
                                                $regional_director = App\Models\Backend\Reginaldirector::where('id',$item->regional_director)->first();
                                                @endphp
                                                <tr>
                                                    <td>{{$regional_director->first_name}} {{$regional_director->last_name}}</td>
                                                    <td>{{$item->branch_name}}</td>
                                                    <td>{{$item->branch_code}}</td>
                                                    <td>{{$item->branch_email}}</td>
                                                    <td>{{$item->branch_mobile}}</td>
                                                    <td>{{$item->branch_address}}</td>
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
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="page-title">All Students</div>
                            </div>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsiveness">
                            <table class="table custom-table DataTable" style="width: 100%;">
                                <thead class="thead-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Student ID</th>
                                        <th>Date Of Admission</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($students as $item)
                                    <tr>
                                        <td>
                                            <h2>
                                                {{$item->student_name}}
                                            </h2>
                                        </td>
                                        <td>SFT-00{{$item->id}}</td>
                                        <td>{{$item->date_of_admission}}</td>
                                        <td>{{$item->email}}</td>
                                        <td>{{$item->mobile}}</td>
                                        <td>{{$item->address}}</td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        @endrole
    </div>
</div>
<!-- index end -->
@endsection