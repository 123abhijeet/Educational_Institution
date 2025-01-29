@extends('backend.layouts.master')
@section('title','Fees | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Fees</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Fees</span></li>
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
                                            <th>Name</th>
                                            <th>Enrollment No</th>
                                            <th>Course</th>
                                            <th>Payment Date</th>
                                            <th>Fee Paid</th>
                                            <th>Total Fee</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($admission as $key=>$item)
                                        @php
                                        $course = App\Models\Backend\Course::where('id',$item->course)->first();
                                        $admission_date = \Carbon\Carbon::parse($item->created_at);
                                        @endphp
                                        <tr>
                                            <td>{{++$key}}</td>
                                            <td>{{$item->student_name}}</td>
                                            <td>{{$item->enrollment_no}}</td>
                                            <td>{{$course->course_name}}</td>
                                            <td>{{$admission_date->format('d F Y')}}</td>
                                            <td>{{$item->paid_amount}}</td>
                                            <td>{{$item->total_amount}}</td>
                                            <td>
                                                <a href="" data-toggle="modal" data-target="#transaction_{{$item->id}}"><i class="fas fa-eye m-r-5"></i></a>
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
@foreach($admission as $key=>$item)
<div class="modal custom-modal fade" id="transaction_{{$item->id}}">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">All Transactions</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <div class="table-responsive">
                    <table class="table custom-table datatable">
                        <thead class="thead-light">
                            <tr>
                                <th>#</th>
                                <th>Payment Date</th>
                                <th>Fee Paid</th>
                                <th>Fee Due</th>
                                <th>Total Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php
                            $branch_fees = App\Models\Backend\Branchfee::where('admission_id',$item->id)->orderby('id','desc')->get();
                            @endphp
                            @foreach($branch_fees as $key=>$branch_fee)
                            @php
                            $transaction_date = \Carbon\Carbon::parse($branch_fee->created_at);
                            @endphp
                            <tr>
                                <td>{{++$key}}</td>
                                <td>{{$transaction_date->format('d F Y')}}</td>
                                <td>{{$branch_fee->paid_amount}}</td>
                                <td>{{$branch_fee->due_amount}}</td>
                                <td>{{$branch_fee->total_amount}}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <div class="submit-section text-center mt-2 float-right">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
@endforeach
@endsection