@extends('backend.layouts.master')
@section('title','Admission | Soft Campus')
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
                    <h5 class="text-uppercase mb-0 mt-0 page-title">add Admission</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('admissions.index')}}">Admission</a>
                        </li>
                        <li class="breadcrumb-item"><span> Add Admission</span></li>
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
                                    <form method="post" action="{{route('admissions.store')}}" enctype="multipart/form-data">
                                        @csrf
                                        <div class="form-group">
                                            <label>Choose Course <span class="text-danger">*</span></label>
                                            <select name="course" id="course" class="form-control">
                                                <option value="" selected disabled>Choose Course</option>
                                                @foreach($course as $item)
                                                <option value="{{$item->id}}" {{ old('course') == $item->id ? 'selected' : '' }}>{{$item->course_name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Name <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control @error('student_name') is-invalid @enderror" name="student_name" value="{{old('student_name')}}" />
                                            @error('student_name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Fathers Occupation <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control @error('fathers_occupation') is-invalid @enderror" name="fathers_occupation" value="{{old('fathers_occupation')}}" />
                                            @error('fathers_occupation')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>DOB <span class="text-danger">*</span></label>
                                            <input type="date" class="form-control @error('dob') is-invalid @enderror" name="dob" value="{{old('dob')}}" />
                                            @error('dob')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Aadhar No<span class="text-danger">*</span></label>
                                            <input type="text" name="aadhar_no" class="form-control @error('aadhar_no') is-invalid @enderror" value="{{old('aadhar_no')}}" />
                                            @error('aadhar_no')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label>Category <span class="text-danger">*</span></label>
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
                                        <label>Date of Admission <span class="text-danger">*</span></label>
                                        <input type="date" class="form-control @error('date_of_admission') is-invalid @enderror" name="date_of_admission" value="{{ old('date_of_admission', date('Y-m-d')) }}" />
                                        @error('date_of_admission')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Fathers Name <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control @error('fathers_name') is-invalid @enderror" name="fathers_name" value="{{old('fathers_name')}}" />
                                        @error('fathers_name')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Email <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{old('email')}}" />
                                        @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Mobile number <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{old('mobile')}}" />
                                        @error('mobile')
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
                                        <label>Address <span class="text-danger">*</span></label>
                                        <textarea class="form-control @error('address') is-invalid @enderror" rows="4" name="address">{{old('address')}}</textarea>
                                        @error('address')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label style="margin-left: 40%;"> <b>FOR OFFICE USE ONLY</b></label>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div class="form-group">
                                        <label>Registration<span class="text-danger">*</span></label>
                                        <input type="checkbox" id="registration_check" class="form-control" name="registration_check" checked disabled style="margin: -35px; height: calc(0.5em + .75rem + 2px);" />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div class="form-group">
                                        <label>Examination<span class="text-danger">*</span></label>
                                        <input type="checkbox" id="examination_check" class="form-control" name="examination_check" style="margin: -35px; height: calc(0.5em + .75rem + 2px);" />
                                    </div>
                                </div>

                                <br>
                                <br>
                                <br>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Total Course Fee <span class="text-danger">*</span></label>
                                        <input type="text" id="course_fee" class="form-control @error('course_fee') is-invalid @enderror" oninput="validateamountfields(this)" name="course_fee" value="{{ old('course_fee') ? old('course_fee') : '0' }}" />
                                        @error('course_fee')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Receipt No <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control @error('receipt_no') is-invalid @enderror" name="receipt_no" value="{{$receipt_no}}" readonly />
                                        @error('receipt_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                    <div class="form-group">
                                        <label>Registration Fee ₹ <span class="text-danger">*</span></label>
                                        <input type="text" id="registration_fee" class="form-control @error('registration_fee') is-invalid @enderror" name="registration_fee" value="{{ old('registration_fee') ? old('registration_fee') : '0' }}" readonly />
                                        @error('registration_fee')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Enrollment No <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control @error('enrollment_no') is-invalid @enderror" name="enrollment_no" value="{{$enrollment_no}}" readonly />
                                        @error('enrollment_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Course Duration <span class="text-danger">(in Days)</span></label>
                                        <input type="text" class="form-control @error('course_duration') is-invalid @enderror" name="course_duration" id="course_duration" value="{{ old('course_duration') ? old('course_duration') : '0' }}" readonly />
                                        @error('course_duration')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>

                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <label>Admission Fee (Deposited) ₹ <span class="text-danger">*</span></label>
                                        <input type="text" id="paid_amount" class="form-control @error('paid_amount') is-invalid @enderror" oninput="validateamountfields(this)" name="paid_amount" value="{{ old('paid_amount') ? old('paid_amount') : '0' }}" />
                                        @error('paid_amount')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Concession (if any) ₹ <span class="text-danger">*</span></label>
                                        <input type="text" id="concession" class="form-control @error('concession') is-invalid @enderror" oninput="validateamountfields(this)" name="concession" value="{{ old('concession') ? old('concession') : '0' }}" />
                                        @error('concession')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group" id="examination_fee_group" style="display: none;">
                                        <label>Examination Fee ₹ <span class="text-danger">*</span></label>
                                        <input type="text" id="examination_fee" class="form-control @error('examination_fee') is-invalid @enderror" name="examination_fee" value="{{ old('examination_fee') ? old('examination_fee') : '0' }}" readonly />
                                        @error('examination_fee')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Total Amount ₹ <span class="text-danger">*</span></label>
                                        <input type="text" id="total_amount" class="form-control @error('total_amount') is-invalid @enderror" name="total_amount" value="{{ old('total_amount') ? old('total_amount') : '0' }}" readonly />
                                        @error('total_amount')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <div class="form-group">
                                        <label>Certificate Due Date</label>
                                        <input type="date" id="certificate_due_date" class="form-control @error('certificate_due_date') is-invalid @enderror" name="certificate_due_date" value="{{ old('certificate_due_date') ? old('certificate_due_date') : '0' }}" readonly />
                                        @error('certificate_due_date')
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
                                        <a href="{{route('admissions.index')}}" class="btn btn-secondary">Cancel</a>
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
<script src="{{ asset('backend/js/jquery-3.6.0.min.js')}}"></script>
<script>
    $(document).ready(function() {
        $('#course').on('change', function() {
            var course_id = $(this).val();
            $.ajax({
                url: "{{ route('Fee.Fetch') }}",
                type: "GET",
                data: {
                    course_id: course_id
                },
                success: function(response) {
                    $.each(response, function(index, fee_details) {
                        $('#examination_fee').val(fee_details.examination_fee);
                        $('#registration_fee').val(fee_details.registration_fee);
                        $('#course_duration').val(fee_details.course_duration);
                        // Calculate certificate due date
                        var today = new Date();
                        var courseDurationDays = parseInt(fee_details.course_duration);
                        var certificateDueDate = new Date(today.getTime() + (courseDurationDays * 24 * 60 * 60 * 1000));
                        var formattedCertificateDueDate = certificateDueDate.toISOString().split('T')[0];
                        $('#certificate_due_date').val(formattedCertificateDueDate);
                    });
                },
                error: function(xhr, status, error) {
                    console.error(error);
                }
            });
        });
        $('#total_amount').on('click', function() {
            calculateTotalAmount();
        });
    });

    function validateamountfields(input) {
        input.value = input.value.replace(/\D/g, '');
    }

    document.getElementById('examination_check').addEventListener('change', function() {
        calculateTotalAmount();
        var feeGroup = document.getElementById('examination_fee_group');
        if (this.checked) {
            feeGroup.style.display = 'block'; // Show the fee input
        } else {
            feeGroup.style.display = 'none'; // Hide the fee input
        }
    });

    function calculateTotalAmount() {
        var course_fee = parseFloat($('#course_fee').val());
        var paid_amount = parseFloat($('#paid_amount').val());
        var concession = parseFloat($('#concession').val());
        var registration_fee = parseFloat($('#registration_fee').val());

        var isChecked = document.getElementById('examination_check').checked;

        if (isChecked) {
            var examination_fee = parseFloat($('#examination_fee').val());
        } else {
            var examination_fee = 0;
        }
        var total_amount = (course_fee + examination_fee + registration_fee) - concession;
        console.log(course_fee, paid_amount, concession, examination_fee, registration_fee, total_amount);
        $('#total_amount').val(total_amount);
    }
</script>
@endsection