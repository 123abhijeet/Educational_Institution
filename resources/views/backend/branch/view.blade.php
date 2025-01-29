@extends('backend.layouts.master')
@section('title','Branch | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h5 class="text-uppercase mb-0 mt-0 page-title">View Branch</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('branches.index')}}">Branch</a>
                        </li>
                        <li class="breadcrumb-item"><span> View Branch</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <!-- Branch Details -->
                            <div class="card mb-4 border-danger">
                                <div class="card-header bg-danger text-white" style="border-radius: 8px 8px 0 0 !important;">
                                    <h5 class="mb-0">Branch Details</h5>
                                </div>
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Choose Regional Director</label>
                                                <select name="regional_director" id="" class="form-control">
                                                    @foreach($regional_director as $item)
                                                    <option value="{{$item->id}}" disabled @if($branch->regional_director == $item->id) selected @endif>{{$item->first_name}} {{$item->last_name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Branch Name</label>
                                                <input type="text" class="form-control" name="branch_name" value="{{$branch->branch_name}}" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label>Branch Mobile</label>
                                                <input type="text" class="form-control" name="branch_mobile" value="{{$branch->branch_mobile}}" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label>Branch Fax</label>
                                                <input type="text" class="form-control" name="branch_fax" value="{{$branch->branch_fax}}" readonly />
                                            </div>

                                        </div>

                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">

                                            <div class="form-group">
                                                <label>Branch Code</label>
                                                <input type="text" class="form-control" name="branch_code" value="{{$branch->branch_code}}" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label>Branch Email</label>
                                                <input type="text" class="form-control" name="branch_email" value="{{$branch->branch_email}}" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label>Branch Phone</label>
                                                <input type="text" class="form-control" name="branch_phone" value="{{$branch->branch_phone}}" readonly />
                                            </div>

                                            <div class="form-group">
                                                <label>Branch Logo</label>
                                                <img src="{{asset('Branch Banner/'.$branch->branch_banner)}}" alt="" height="100px" width="100px">
                                            </div>
                                        </div>

                                        <div class="col-lg-4 col-md-4 col-sm-4 col-4">
												<div class="form-group">
													<label>City <span class="text-danger">*</span></label>
													<input type="text" class="form-control" name="city" value="{{$branch->branch_city}}" />
												</div>
											</div>
											<div class="col-lg-4 col-md-4 col-sm-4 col-4">
												<div class="form-group">
													<label>State <span class="text-danger">*</span></label>
													<input type="text" class="form-control" name="state" value="{{$branch->branch_state}}" />
												</div>
											</div>
											<div class="col-lg-4 col-md-4 col-sm-4 col-4">
												<div class="form-group">
													<label>Pin <span class="text-danger">*</span></label>
													<input type="text" class="form-control" name="pin" value="{{$branch->branch_pin}}" />
												</div>
											</div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="form-group">
                                                <label>Branch Address <span class="text-danger">maximum length of 255 characters</span></label>
                                                <textarea class="form-control" rows="2" name="branch_address" readonly>{{$branch->branch_address}}</textarea>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <!-- Director's Details -->
                            <div class="card mb-4 border-danger">
                                <div class="card-header bg-danger text-white" style="border-radius: 8px 8px 0 0 !important;">
                                    <h5 class="mb-0">Director's Details</h5>
                                </div>
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" name="director_name" value="{{$director->director_name}}" readonly />
                                            </div>

                                            <div class="form-group">
                                                <label>Mobile</label>
                                                <input type="text" class="form-control" name="director_mobile" value="{{$director->director_mobile}}" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label>Aadhar</label>
                                                <a href="{{asset('Director Document/'.$director->director_aadhar)}}" class="form-control" download="">Download</a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="text" class="form-control" name="director_email" value="{{$director->director_email}}" readonly />
                                            </div>
                                            <div class="form-group">
                                                <label>PAN</label>
                                                <a href="{{asset('Director Document/'.$director->director_pan)}}" class="form-control" download="">Download</a>
                                            </div>
                                            <div class="form-group">
                                                <label>Signature</label>
                                                <img src="{{asset('Director Document/'.$director->signature)}}" alt="" height="60px" width="100px">
                                            </div>
                                        </div>

                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div class="form-group">
                                                <label>Address <span class="text-danger">maximum length of 255 characters</span></label>
                                                <textarea class="form-control" rows="2" name="director_address" readonly>{{$director->director_address}}</textarea>
                                            </div>
                                        </div>

                                        <div class="card-header m-2">
                                            <h5 class="mb-0">Director's Acedemic Details</h5>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table custom-table">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>Degree</th>
                                                        <th>Institute</th>
                                                        <th>Board/ University</th>
                                                        <th>Percent</th>
                                                        <th>Certificate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach($acedemics as $item)
                                                    <tr>
                                                        <td><input type="text" class="form-control" value="{{$item->degree}}" readonly></td>
                                                        <td><input type="text" class="form-control" value="{{$item->institute}}" readonly></td>
                                                        <td><input type="text" class="form-control" value="{{$item->board_university}}" readonly></td>
                                                        <td><input type="text" class="form-control" value="{{$item->percent}}" readonly></td>
                                                        <td><a href="{{asset('Director Acedemic Certificate/'.$item->certificate)}}" class="form-control" download="">Download</a></td>
                                                    </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="card-header m-2">
                                            <h5 class="mb-0">Branch Managers Details</h5>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table custom-table">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Manager Name</th>
                                                        <th>Manager Email</th>
                                                        <th>Manager Mobile(Password)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach($managers = App\Models\User::where('user_role','Branch Manager')->get(); as $key=>$item)
                                                    <tr>
                                                        <td>{{++$key}}</td>
                                                        <td><input type="text" class="form-control" value="{{$item->name}}" readonly></td>
                                                        <td><input type="text" class="form-control" value="{{$item->email}}" readonly></td>
                                                        <td><input type="text" class="form-control" value="{{$item->mobile}}" readonly></td>
                                                    </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                                <div class="form-group text-center custom-mt-form-group">
                                    <a href="{{route('branches.index')}}" class="btn btn-secondary">Cancel</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endsection