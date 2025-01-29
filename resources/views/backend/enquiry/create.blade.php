@extends('backend.layouts.master')
@section('title','Enquiry | Soft Campus')
@section('body')
<style>
    .fontsize {
        font-size: 12px;
    }
</style>
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h5 class="text-uppercase mb-0 mt-0 page-title">add Enquiry</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('enquiry.index')}}">Enquiry</a>
                        </li>
                        <li class="breadcrumb-item"><span> Add Enquiry</span></li>
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
                                    <form method="post" action="{{route('enquiry.store')}}">
                                        @csrf
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{old('name')}}" />
                                            @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{old('email')}}" />
                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Choose Course</label>
                                            <select name="course" id="course" class="form-control">
                                                @foreach($course as $item)
                                                <option value="{{$item->id}}">{{$item->course_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Fathers Name</label>
                                        <input type="text" class="form-control @error('fathers_name') is-invalid @enderror" name="fathers_name" value="{{old('fathers_name')}}" />
                                        @error('fathers_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile</label>
                                        <input type="text" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{old('mobile')}}" />
                                        @error('mobile')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Last Qualification</label>
                                        <select name="last_qualification" class="form-control">
                                            <option value="10th">10th</option>
                                            <option value="10+2">10+2</option>
                                            <option value="Graduation">Graduation</option>
                                            <option value="Post Graduation">Post Graduation</option>
                                        </select>
                                        @error('last_qualification')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Address</label>
                                        <textarea class="form-control @error('address') is-invalid @enderror" rows="4" name="address">{{old('address')}}</textarea>
                                        @error('address')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group text-center custom-mt-form-group">
                                        <button class="btn btn-primary mr-2" type="submit">
                                            Submit
                                        </button>
                                        <a href="{{route('enquiry.index')}}" class="btn btn-secondary">Cancel</a>
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
</div>
@endsection