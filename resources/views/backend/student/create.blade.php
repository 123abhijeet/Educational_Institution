@extends('backend.layouts.master')
@section('title','Student | Soft Campus')
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
                    <h5 class="text-uppercase mb-0 mt-0 page-title">add Student</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('students.index')}}">Student</a>
                        </li>
                        <li class="breadcrumb-item"><span> Add Student</span></li>
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
                                    <form method="post" action="{{route('students.store')}}" enctype="multipart/form-data">
                                        @csrf
                                        <div class="form-group">
                                            <label>Choose Branch</label>
                                            <select name="branch" id="branch" class="form-control">
                                                @foreach($branch as $item)
                                                <option value="{{$item->id}}">{{$item->branch_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control @error('student_name') is-invalid @enderror" name="student_name" value="{{old('student_name')}}" />
                                            @error('student_name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
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
                                            <label>Email</label>
                                            <input type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{old('email')}}" />
                                            @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>DOB</label>
                                            <input type="date" class="form-control @error('dob') is-invalid @enderror" name="dob" value="{{old('dob')}}" />
                                            @error('dob')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Picture <span class="text-danger">maximum file size allowed is 200 kb</span></label>
                                            <input type="file" name="picture" accept="image/x-png,image/gif,image/jpeg" class="form-control @error('picture') is-invalid @enderror" />
                                            @error('picture')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Category</label>
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="category" id="General" value="General" checked>
                                                        <label class="form-check-label" for="General">
                                                            General
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="category" id="OBC" value="OBC">
                                                        <label class="form-check-label" for="OBC">
                                                            OBC
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="category" id="SC" value="SC">
                                                        <label class="form-check-label" for="SC">
                                                            SC
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="col-sm-3">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="radio" name="category" id="ST" value="ST">
                                                        <label class="form-check-label" for="ST">
                                                            ST
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Date of Admission</label>
                                        <input type="date" class="form-control @error('date_of_admission') is-invalid @enderror" name="date_of_admission" value="{{old('date_of_admission')}}" />
                                        @error('date_of_admission')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Enrollment No</label>
                                        <input type="text" class="form-control @error('enrollment_no') is-invalid @enderror" name="enrollment_no" value="{{old('enrollment_no')}}" />
                                        @error('enrollment_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Fathers Occupation</label>
                                        <input type="text" class="form-control @error('fathers_occupation') is-invalid @enderror" name="fathers_occupation" value="{{old('fathers_occupation')}}" />
                                        @error('fathers_occupation')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile number</label>
                                        <input type="text" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{old('mobile')}}" />
                                        @error('mobile')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Aadhar <span class="text-danger">maximum file size allowed is 200 kb</span></label>
                                        <input type="file" name="aadhar" accept="application/pdf" class="form-control @error('aadhar') is-invalid @enderror" />
                                        @error('aadhar')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Signature <span class="text-danger">maximum file size allowed is 200 kb</span></label>
                                        <input type="file" name="signature" accept="image/x-png,image/gif,image/jpeg" class="form-control @error('signature') is-invalid @enderror" />
                                        @error('signature')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group" style="margin-top: 40px;">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="bpl_nonbpl" id="BPL" value="BPL" checked>
                                                    <label class="form-check-label" for="BPL">
                                                        BPL
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="bpl_nonbpl" id="NotinBPL" value="NotinBPL">
                                                    <label class="form-check-label" for="NotinBPL">
                                                        Not in BPL
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Educational Qualification</label>
                                        <div class="table-responsive">
                                            <table class="table custom-table">
                                                <thead class="thead-light">
                                                    <tr class="fontsize">
                                                        <th>S.No</th>
                                                        <th>Education</th>
                                                        <th>Board/ University</th>
                                                        <th>Year of Passing</th>
                                                        <th>Division</th>
                                                        <th>Percent</th>
                                                        <th>Certificate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="fontsize">1</td>
                                                        <td><input type="text" class="form-control fontsize" name="education[]" value="10th" readonly></td>
                                                        <td><input type="text" class="form-control fontsize" name="board_university[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="passing_year[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="division[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="percent[]"></td>
                                                        <td><input type="file" class="form-control fontsize" name="certificate[]" accept="application/pdf"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fontsize">2</td>
                                                        <td><input type="text" class="form-control fontsize" name="education[]" value="10+2" readonly></td>
                                                        <td><input type="text" class="form-control fontsize" name="board_university[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="passing_year[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="division[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="percent[]"></td>
                                                        <td><input type="file" class="form-control fontsize" name="certificate[]" accept="application/pdf"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fontsize">3</td>
                                                        <td><input type="text" class="form-control fontsize" name="education[]" value="Graduation" readonly></td>
                                                        <td><input type="text" class="form-control fontsize" name="board_university[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="passing_year[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="division[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="percent[]"></td>
                                                        <td><input type="file" class="form-control fontsize" name="certificate[]" accept="application/pdf"></td>
                                                    </tr>
                                                    <tr>
                                                        <td class="fontsize">4</td>
                                                        <td><input type="text" class="form-control fontsize" name="education[]" value="Others" readonly></td>
                                                        <td><input type="text" class="form-control fontsize" name="board_university[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="passing_year[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="division[]"></td>
                                                        <td><input type="text" class="form-control fontsize" name="percent[]"></td>
                                                        <td><input type="file" class="form-control fontsize" name="certificate[]" accept="application/pdf"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label>Professional Qualification</label>
                                        <textarea class="form-control @error('professionl_qualification') is-invalid @enderror" rows="1" name="professionl_qualification">{{old('professionl_qualification')}}</textarea>
                                        @error('professionl_qualification')
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
                                        <a href="{{route('students.index')}}" class="btn btn-secondary">Cancel</a>
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