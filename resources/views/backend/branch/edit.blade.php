@extends('backend.layouts.master')
@section('title','Branch | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h5 class="text-uppercase mb-0 mt-0 page-title">Edit Branch</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('branches.index')}}">Branch</a>
                        </li>
                        <li class="breadcrumb-item"><span> Edit Branch</span></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="page-content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <form method="post" action="{{route('branches.update',$branch->id)}}" enctype="multipart/form-data">
                                @csrf
                                @method('put')

                                <!-- Branch Details -->
                                <div class="card mb-4 border-danger">
                                    <div class="card-header bg-danger text-white" style="border-radius: 8px 8px 0 0 !important;">
                                        <h5 class="mb-0">Branch Details <span>(* marks fields are compulsory)</span></h5>
                                    </div>
                                    <div class="card-body">

                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div class="form-group">
                                                    <label>Choose Regional Director</label>
                                                    <select name="regional_director" id="" class="form-control">
                                                        @foreach($regional_director as $item)
                                                        <option value="{{$item->id}}" @if($branch->regional_director == $item->id) selected @endif>{{$item->first_name}} {{$item->last_name}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <label>Branch Name <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('branch_name') is-invalid @enderror" name="branch_name" value="{{$branch->branch_name}}" />
                                                    @error('branch_name')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                                <div class="form-group">
                                                    <label>Branch Mobile <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('branch_mobile') is-invalid @enderror" name="branch_mobile" value="{{$branch->branch_mobile}}" />
                                                    @error('branch_mobile')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                                <div class="form-group">
                                                    <label>Branch Fax</label>
                                                    <input type="text" class="form-control @error('branch_fax') is-invalid @enderror" name="branch_fax" value="{{$branch->branch_fax}}" />
                                                    @error('branch_fax')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>

                                            </div>

                                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">

                                                <div class="form-group">
                                                    <label>Branch Code <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('branch_code') is-invalid @enderror" name="branch_code" value="{{$branch->branch_code}}" />
                                                    @error('branch_code')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                                <div class="form-group">
                                                    <label>Branch Email <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('branch_email') is-invalid @enderror" name="branch_email" value="{{$branch->branch_email}}" />
                                                    @error('branch_email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                                <div class="form-group">
                                                    <label>Branch Phone</label>
                                                    <input type="text" class="form-control @error('branch_phone') is-invalid @enderror" name="branch_phone" value="{{$branch->branch_phone}}" />
                                                    @error('branch_phone')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>

                                                <div class="form-group">
                                                    <label>Branch Logo <span class="text-danger">*</span> <small class="text-danger">maximum size allowed is 500 kb (png,jpeg,jpg)</small></label>
                                                    <input type="file" name="branch_banner" accept="image/x-png,image/jpeg,image/jpg" class="form-control @error('branch_banner') is-invalid @enderror" />
                                                    @error('branch_banner')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
												<div class="form-group">
													<label>City <span class="text-danger">*</span></label>
													<input type="text" class="form-control @error('branch_city') is-invalid @enderror" name="branch_city" value="{{$branch->branch_city}}" />
													@error('branch_city')
													<span class="invalid-feedback" role="alert">
														<strong>{{ $message }}</strong>
													</span>
													@enderror
												</div>
											</div>
											<div class="col-lg-4 col-md-4 col-sm-4 col-4">
												<div class="form-group">
													<label>State <span class="text-danger">*</span></label>
													<input type="text" class="form-control @error('branch_state') is-invalid @enderror" name="branch_state" value="{{$branch->branch_state}}" />
													@error('branch_state')
													<span class="invalid-feedback" role="alert">
														<strong>{{ $message }}</strong>
													</span>
													@enderror
												</div>
											</div>
											<div class="col-lg-4 col-md-4 col-sm-4 col-4">
												<div class="form-group">
													<label>Pin <span class="text-danger">*</span></label>
													<input type="text" class="form-control @error('branch_pin') is-invalid @enderror" name="branch_pin" value="{{$branch->branch_pin}}" />
													@error('branch_pin')
													<span class="invalid-feedback" role="alert">
														<strong>{{ $message }}</strong>
													</span>
													@enderror
												</div>
											</div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="form-group">
                                                    <label>Branch Address <span class="text-danger">*</span> <span class="text-danger">maximum length of 255 characters</span></label>
                                                    <textarea class="form-control @error('branch_address') is-invalid @enderror" rows="2" name="branch_address">{{$branch->branch_address}}</textarea>
                                                    @error('branch_address')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <!-- Director's Details -->
                                <div class="card mb-4 border-danger">
                                    <div class="card-header bg-danger text-white" style="border-radius: 8px 8px 0 0 !important;">
                                        <h5 class="mb-0">Director's Details <span>(* marks fields are compulsory)</span></h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="row">

                                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div class="form-group">
                                                    <label>Name <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('director_name') is-invalid @enderror" name="director_name" value="{{$director->director_name}}" />
                                                    @error('director_name')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>

                                                <div class="form-group">
                                                    <label>Mobile <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('director_mobile') is-invalid @enderror" name="director_mobile" value="{{$director->director_mobile}}" />
                                                    @error('director_mobile')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>

                                                <div class="form-group">
                                                    <label>Aadhar Card <span class="text-danger">*</span> <small class="text-danger">maximum size allowed is 200 kb</small></label>
                                                    <input type="file" name="director_aadhar" accept="application/pdf" class="form-control @error('director_aadhar') is-invalid @enderror" />
                                                    @error('director_aadhar')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-12">

                                                <div class="form-group">
                                                    <label>Email <span class="text-danger">*</span></label>
                                                    <input type="text" class="form-control @error('director_email') is-invalid @enderror" name="director_email" readonly value="{{$director->director_email}}" />
                                                    @error('director_email')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>

                                                <div class="form-group">
                                                    <label>PAN Card <span class="text-danger">*</span> <small class="text-danger">maximum size allowed is 200 kb (pdf)</small></label>
                                                    <input type="file" name="director_pan" accept="application/pdf" class="form-control @error('director_pan') is-invalid @enderror" />
                                                    @error('director_pan')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                                <div class="form-group">
													<label>Signature<span class="text-danger">*</span> <small class="text-danger">maximum size allowed is 200 kb (png,jpeg,jpg)</small></label>
													<input type="file" name="signature" accept="image/x-png,image/jpeg,image/jpg" class="form-control @error('signature') is-invalid @enderror" />
													@error('signature')
													<span class="invalid-feedback" role="alert">
														<strong>{{ $message }}</strong>
													</span>
													@enderror
												</div>
                                            </div>

                                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div class="form-group">
                                                    <label>Address <span class="text-danger">*</span> <span class="text-danger">maximum length of 255 characters</span></label>
                                                    <textarea class="form-control @error('director_address') is-invalid @enderror" rows="2" name="director_address">{{$director->director_address}}</textarea>
                                                    @error('director_address')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                            </div>

                                            <div class="card-header m-2">
                                                <h5 class="mb-0">Director's Acedemic Details <span class="text-danger">This section is uneditable</span></h5>
                                            </div>
                                            <div class="table-responsive">
                                                <table class="table custom-table">
                                                    <thead class="thead-light">
                                                        <tr>
                                                            <th>Degree</th>
                                                            <th>Institute</th>
                                                            <th>Board/ University</th>
                                                            <th>Percent</th>
                                                            <th>Certificate (upto 200kb in pdf)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @foreach($acedemics as $item)
                                                        <tr>
                                                            <td><input type="text" class="form-control" value="{{$item->degree}}" readonly></td>
                                                            <td><input type="text" class="form-control" value="{{$item->institute}}" readonly></td>
                                                            <td><input type="text" class="form-control" value="{{$item->board_university}}" readonly></td>
                                                            <td><input type="text" class="form-control" value="{{$item->percent}}" readonly></td>
                                                            <td><input type="text" class="form-control" value="{{ !empty($item->certificate) ? 'Uploaded' : 'Not Uploaded' }}" readonly></td>
                                                        </tr>
                                                        @endforeach
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group text-center custom-mt-form-group">
                                        <button class="btn btn-primary mr-2" type="submit">
                                            Submit
                                        </button>
                                        <a href="{{route('branches.index')}}" class="btn btn-secondary">Cancel</a>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    function validateMobileNumber(input) {
        input.value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (input.value.length > 10) {
            input.value = input.value.slice(0, 10);
        }
    }
</script>
@endsection