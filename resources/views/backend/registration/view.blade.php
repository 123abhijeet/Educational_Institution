@extends('backend.layouts.master')
@section('title','Registration | Soft Campus')
@section('body')
<div class="page-wrapper">
	<div class="content container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h5 class="text-uppercase mb-0 mt-0 page-title">View Registration</h5>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<ul class="breadcrumb float-right p-0 mb-0">
						<li class="breadcrumb-item">
							<a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
						</li>
						<li class="breadcrumb-item">
							<a href="{{route('registrations.index')}}">Registration</a>
						</li>
						<li class="breadcrumb-item"><span> View Registration</span></li>
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
									<div class="form-group">
										<label>Choose Course</label>
										<select name="course" id="course" class="form-control" disabled>
											@foreach($course as $item)
											<option value="{{$item->id}}" @if($registration->course == $item->id) selected @endif>{{$item->course_name}}</option>
											@endforeach
										</select>
									</div>
									<div class="form-group">
										<label>Name</label>
										<input type="text" class="form-control" name="student_name" value="{{$registration->student_name}}" readonly />
									</div>
									<div class="form-group">
										<label>Fathers Occupation</label>
										<input type="text" class="form-control" name="fathers_occupation" value="{{$registration->fathers_occupation}}" readonly />
									</div>
									<div class="form-group">
										<label>DOB</label>
										<input type="date" class="form-control" name="dob" value="{{$registration->dob}}" readonly />
									</div>
									<div class="form-group">
										<label>Aadhar No</label>
										<input type="text" class="form-control" name="mobile" value="{{$registration->aadhar_no}}" readonly />
									</div>
									<div class="form-group">
										<label>Category</label>
										<div class="row">
											<div class="col-sm-3">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="category" id="General" value="General" @if($registration->category === 'General') checked @endif>
													<label class="form-check-label" for="General">
														General
													</label>
												</div>
											</div>
											<div class="col-sm-3">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="category" id="OBC" value="OBC" @if($registration->category === 'OBC') checked @endif>
													<label class="form-check-label" for="OBC">
														OBC
													</label>
												</div>
											</div>
											<div class="col-sm-3">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="category" id="SC" value="SC" @if($registration->category === 'SC') checked @endif>
													<label class="form-check-label" for="SC">
														SC
													</label>
												</div>
											</div>
											<div class="col-sm-3">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="category" id="ST" value="ST" @if($registration->category === 'ST') checked @endif>
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
										<label>Date Of Admission</label>
										<input type="date" class="form-control" name="date_of_admission" value="{{$registration->date_of_admission}}" readonly />
									</div>
									<div class="form-group">
										<label>Fathers Name</label>
										<input type="text" class="form-control" name="fathers_name" value="{{$registration->fathers_name}}" readonly />
									</div>
									<div class="form-group">
										<label>Email</label>
										<input type="text" class="form-control" name="email" value="{{$registration->email}}" readonly />
									</div>
									<div class="form-group">
										<label>Mobile number</label>
										<input type="text" class="form-control" name="mobile" value="{{$registration->mobile}}" readonly />
									</div>
									<br>
									<div class="form-group">
										<label>Picture</label>
										<img src="{{asset('Student Picture/'.$registration->picture)}}" alt="" height="50px" width="50px">
									</div>
									<div class="form-group" style="margin-top: 40px;">
										<div class="row">
											<div class="col-sm-6">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="bpl_nonbpl" id="BPL" value="BPL" @if($registration->bpl_nonbpl === 'BPL') checked @endif>
													<label class="form-check-label" for="BPL">
														BPL
													</label>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="bpl_nonbpl" id="NotinBPL" value="NotinBPL" @if($registration->bpl_nonbpl === 'NotinBPL') checked @endif>
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
													@foreach($student_education as $key => $item)
													<tr>
														<td class="fontsize">{{++$key}}</td>
														<td><input type="text" class="form-control fontsize" value="{{$item->education}}" readonly></td>
														<td><input type="text" class="form-control fontsize" value="{{$item->board_university}}" readonly></td>
														<td><input type="text" class="form-control fontsize" value="{{$item->passing_year}}" readonly></td>
														<td><input type="text" class="form-control fontsize" value="{{$item->division}}" readonly></td>
														<td><input type="text" class="form-control fontsize" value="{{$item->percent}}" readonly></td>
														<td><input type="text" class="form-control fontsize" value="{{!empty($item->certificate) ? 'Uploaded' : 'N/A'}}" readonly></td>
													</tr>
													@endforeach
												</tbody>
											</table>
										</div>
									</div>
								</div>

								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label>Professional Qualification</label>
										<textarea class="form-control" rows="1" name="professionl_qualification" readonly>{{$registration->professionl_qualification}}</textarea>
									</div>
								</div>

								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label>Address</label>
										<textarea class="form-control" rows="4" name="address" readonly>{{$registration->address}}</textarea>
									</div>
								</div>

								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label style="margin-left: 40%;"> <b>FOR OFFICE USE ONLY</b></label>
									</div>
								</div>

								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="form-group">
										<label>Total Course Fee <span class="text-danger">*</span></label>
										<input type="text" id="course_fee" class="form-control" name="course_fee" value="{{$registration->course_fee}}" readonly />
									</div>
									<div class="form-group">
										<label>Receipt No <span class="text-danger">*</span></label>
										<input type="text" class="form-control" name="receipt_no" value="{{$registration->receipt_no}}" readonly />
									</div>

									<div class="form-group">
										<label>Registration Fee ₹ <span class="text-danger">*</span></label>
										<input type="text" id="registration_fee" class="form-control" name="registration_fee" value="{{$registration->registration_fee}}" readonly />
									</div>
									<div class="form-group">
										<label>Enrollment No</label>
										<input type="text" class="form-control" name="enrollment_no" value="{{$registration->enrollment_no}}" readonly />
									</div>
									<div class="form-group">
										<label>Course Duration <span class="text-danger">(in Days)</span></label>
										<input type="text" class="form-control" name="course_duration" id="course_duration" value="{{$course_duration}}" readonly />
									</div>

								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">

									<div class="form-group">
										<label>registration Fee (Deposited) ₹ <span class="text-danger">*</span></label>
										<input type="text" id="paid_amount" class="form-control" name="paid_amount" value="{{$registration->paid_amount}}" readonly />
									</div>
									<div class="form-group">
										<label>Concession (if any) ₹ <span class="text-danger">*</span></label>
										<input type="text" id="concession" class="form-control" name="concession" value="{{$registration->concession}}" readonly />
									</div>
									<div class="form-group">
										<label>Examination Fee ₹ <span class="text-danger">*</span></label>
										<input type="text" id="examination_fee" class="form-control" name="examination_fee" value="{{$registration->examination_fee}}" readonly />
									</div>
									<div class="form-group">
										<label>Total Amount ₹ <span class="text-danger">*</span></label>
										<input type="text" id="total_amount" class="form-control" name="total_amount" value="{{$registration->total_amount}}" readonly />
									</div>
									<div class="form-group">
										<label>Certificate Due Date</label>
										<input type="date" id="certificate_due_date" class="form-control" name="certificate_due_date" value="{{$registration->certificate_due_date}}" readonly />
									</div>

								</div>

								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group text-center custom-mt-form-group">
										<a href="{{route('registrations.index')}}" class="btn btn-secondary">Cancel</a>
									</div>
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
		var course_id = $('#course').val();
		$.ajax({
			url: "{{ route('Fee.Fetch') }}",
			type: "GET",
			data: {
				course_id: course_id
			},
			success: function(response) {
				$.each(response, function(index, fee_details) {
					$('#course_duration').val(fee_details.course_duration);
				});
			},
			error: function(xhr, status, error) {
				console.error(error);
			}
		});
	});
</script>
@endsection