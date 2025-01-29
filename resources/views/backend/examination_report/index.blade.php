@extends('backend.layouts.master')
@section('title','Admission | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-md-6">
                    <h3 class="page-title mb-0">Admission</h3>
                </div>
                <div class="col-md-6">
                    <ul class="breadcrumb mb-0 p-0 float-right">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item"><span>Admission</span></li>
                    </ul>
                </div>
            </div>
        </div>
        @role('Branch Director')
        <div class="row">
            <div class="col-sm-4 add-btn-col" style="margin-left: -90px;">
                <a href="{{route('Generate-Monthly-Report')}}" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus"></i> Create Monthly Report</a>
            </div>
            <div class="col-sm-4 text-right add-btn-col" style="margin-left: 60px;">
                <a href="{{route('Generate-Examination-Report')}}" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus"></i> Create Examination Report</a>
            </div>
            <div class="col-sm-4 text-right add-btn-col" style="margin-left: 30px;">
                <a href="{{route('admissions.create')}}" class="btn btn-primary btn-rounded float-right"><i class="fas fa-plus"></i> Create Admission</a>
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
                                        @foreach($admission as $key=>$item)
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
                                                        <a class="dropdown-item" href="{{route('admissions.show',$item->id)}}"><i class="fas fa-eye m-r-5"></i> View</a>
                                                        <a class="dropdown-item" href="" data-toggle="modal" data-target="#update_payment_{{$item->id}}"><i class="fas fa-money-bill m-r-5"></i> Payment</a>
                                                        @role('Admin')
                                                        <a class="dropdown-item" href="{{route('admissions.edit',$item->id)}}"><i class="fas fa-pencil-alt m-r-5"></i> Edit</a>
                                                        <a class="dropdown-item" href="{{route('Generate-Course-Certificate',$item->enrollment_no)}}"><i class="fas fa-certificate m-r-5"></i> Generate Certificate</a>
                                                        <form action="{{ route('admissions.destroy', $item->id) }}" method="POST" class="d-inline">
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
@foreach($admission as $key=>$item)
<div class="modal custom-modal fade" id="update_payment_{{$item->id}}">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Update Payment</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
                <form action="{{route('Update-Payment-Amount')}}" method="post">
                    @csrf
                    <input type="hidden" name="admission_id" value="{{$item->id}}">
                    <input type="hidden" name="branch" value="{{$item->branch}}">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Total Amount</label>
                                <input type="text" class="form-control form-white" value="{{$item->total_amount}}" readonly>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Paid Amount</label>
                                <input type="text" class="form-control form-white" value="{{$item->paid_amount}}" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Amount Due</label>
                                <input type="text" class="form-control form-white" value="{{$item->total_amount - $item->paid_amount}}" readonly>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Amount<span class="text-danger">*</span></label>
                                <input type="text" class="form-control form-white" name="amount" value="0" required>
                            </div>
                        </div>
                    </div>
                    <div class="submit-section text-center">
                        <button type="submit" class="btn btn-primary save-category submit-btn">Save</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endforeach
@endsection