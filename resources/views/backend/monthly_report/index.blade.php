@extends('backend.layouts.master')
@section('title','Monthly Report | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Monthly Report</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Monthly Report</span></li>
                    </ul>
                </div>
            </div>
        </div>
        @role('Branch Director')
        <div class="row">
            <div class="col-sm-6 add-btn-col" style="margin-left: 48%;">
                <a href="{{route('Generate-Monthly-Report')}}" class="btn btn-primary btn-rounded"><i class="fas fa-plus"></i> Create Monthly Report</a>
                <a href="{{route('Generate-Examination-Report')}}" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus"></i> Create Examination Report</a>
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
                                            <th>Transaction ID</th>
                                            <th>Amount</th>
                                            <th>Payment Status</th>
                                            <th>Total Student</th>
                                            <th>Generated On</th>
                                            <th class="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($all_reports as $key=>$item)
                                        @php
                                        $branch = App\Models\Backend\Branch::where('id',$item->branch)->first();
                                        $formatted_date = \Carbon\Carbon::parse($item->created_at)->format('M, d Y');
                                        @endphp
                                        <tr>
                                            <td>{{++$key}}</td>
                                            @role('Admin')
                                            <td>{{$branch->branch_name}}</td>
                                            @endrole
                                            <td>{{$item->transaction_id}}</td>
                                            <td>{{$item->amount}}</td>
                                            <td>{{$item->payment_status}}</td>
                                            <td>{{$item->total_student}}</td>
                                            <td>{{$formatted_date}}</td>
                                            <td class="text-right">
                                                <a href="{{ asset($item->monthly_report) }}" download="">Download</a>
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