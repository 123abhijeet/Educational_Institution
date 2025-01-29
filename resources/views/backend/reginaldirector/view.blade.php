@extends('backend.layouts.master')
@section('title','Reginal Director | Soft Campus')
@section('body')
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h5 class="text-uppercase mb-0 mt-0 page-title">View reginal director</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('reginaldirectors.index')}}">Reginal Director</a>
                        </li>
                        <li class="breadcrumb-item"><span> View Reginal Director</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <form method="post" action="" enctype="multipart/form-data">
                                        <div class="form-group">
                                            <label>First Name</label>
                                            <input type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{$reginal_director->first_name}}" readonly />
                                            @error('first_name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{$reginal_director->email}}" readonly />
                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Gender</label>
                                            <select class="form-control select" name="gender">
                                                <option value="male" @if($reginal_director->gender == 'male') selected @endif>Male</option>
                                                <option value="female" @if($reginal_director->gender == 'female') selected @endif>Female</option>
                                            </select>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Last Name</label>
                                        <input type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{$reginal_director->last_name}}" readonly />
                                        @error('last_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile number</label>
                                        <input type="text" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{$reginal_director->mobile}}" readonly />
                                        @error('mobile')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>ID Proof <small class="text-danger">Aadhar,PAN,Driving Licence</small></label>
                                        <a href="{{asset('Identity Proof/'. $reginal_director->identity_proof)}}" class="form-control" download="">Download</a>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Premanent Address</label>
                                        <textarea class="form-control @error('address') is-invalid @enderror" rows="4" name="address" readonly>{{$reginal_director->address}}</textarea>
                                        @error('address')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group text-center custom-mt-form-group">
                                        <a href="{{route('reginaldirectors.index')}}" class="btn btn-secondary">Cancel</a>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection