@extends('backend.layouts.master')
@section('title','Admission | Soft Campus')
@section('body')
<div class="page-wrapper">
	<div class="content container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h5 class="text-uppercase mb-0 mt-0 page-title">Edit Admission</h5>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<ul class="breadcrumb float-right p-0 mb-0">
						<li class="breadcrumb-item">
							<a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
						</li>
						<li class="breadcrumb-item">
							<a href="{{route('admissions.index')}}">Admission</a>
						</li>
						<li class="breadcrumb-item"><span> Edit Admission</span></li>
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
									<form method="post" action="{{route('admissions.update',$admission->id)}}">
										@csrf
										@method('put')

										<div class="form-group">
											<label>Choose Course</label>
											<input type="hidden" name="course" value="{{ $admission->course }}">
											<select name="" id="course" class="form-control" disabled>
												@foreach($course as $item)
												<option value="{{$item->id}}" @if($admission->course == $item->id) selected @endif>{{$item->course_name}}</option>
												@endforeach
											</select>
										</div>
										<div class="form-group">
											<label>Name <span class="text-danger">*</span></label>
											<input type="text" class="form-control @error('student_name') is-invalid @enderror" name="student_name" value="{{$admission->student_name}}" />
											@error('student_name')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
											@enderror
										</div>
										<div class="form-group">
											<label>Fathers Occupation <span class="text-danger">*</span></label>
											<input type="text" class="form-control @error('fathers_occupation') is-invalid @enderror" name="fathers_occupation" value="{{$admission->fathers_occupation}}" />
											@error('fathers_occupation')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
											@enderror
										</div>
										<div class="form-group">
											<label>DOB <span class="text-danger">*</span></label>
											<input type="date" class="form-control" name="dob" value="{{$admission->dob}}" />
										</div>
										<div class="form-group">
											<label>Aadhar No <span class="text-danger">*</span></label>
											<input type="text" class="form-control @error('aadhar_no') is-invalid @enderror" name="aadhar_no" value="{{$admission->aadhar_no}}" />
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
														<input class="form-check-input" type="radio" name="category" id="General" value="General" @if($admission->category === 'General') checked @endif>
														<label class="form-check-label" for="General">
															General
														</label>
													</div>
												</div>
												<div class="col-sm-3">
													<div class="form-check">
														<input class="form-check-input" type="radio" name="category" id="OBC" value="OBC" @if($admission->category === 'OBC') checked @endif>
														<label class="form-check-label" for="OBC">
															OBC
														</label>
													</div>
												</div>
												<div class="col-sm-3">
													<div class="form-check">
														<input class="form-check-input" type="radio" name="category" id="SC" value="SC" @if($admission->category === 'SC') checked @endif>
														<label class="form-check-label" for="SC">
															SC
														</label>
													</div>
												</div>
												<div class="col-sm-3">
													<div class="form-check">
														<input class="form-check-input" type="radio" name="category" id="ST" value="ST" @if($admission->category === 'ST') checked @endif>
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
										<label>Date Of Admission <span class="text-danger">*</span></label>
										<input type="date" class="form-control" name="date_of_admission" value="{{$admission->date_of_admission}}" readonly />
									</div>
									<div class="form-group">
										<label>Fathers Name <span class="text-danger">*</span></label>
										<input type="text" class="form-control @error('fathers_name') is-invalid @enderror" name="fathers_name" value="{{$admission->fathers_name}}" />
										@error('fathers_name')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<div class="form-group">
										<label>Email <span class="text-danger">*</span></label>
										<input type="text" class="form-control" name="email" value="{{$admission->email}}" readonly />
									</div>
									<div class="form-group">
										<label>Mobile number <span class="text-danger">*</span></label>
										<input type="text" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{$admission->mobile}}" />
										@error('mobile')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<br>
									<div class="form-group">
										<label>Picture <span class="text-danger">*</span></label>
										<img src="{{asset('Student Picture/'.$admission->picture)}}" alt="" height="50px" width="50px">
									</div>
									<div class="form-group" style="margin-top: 40px;">
										<div class="row">
											<div class="col-sm-6">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="bpl_nonbpl" id="BPL" value="BPL" @if($admission->bpl_nonbpl === 'BPL') checked @endif>
													<label class="form-check-label" for="BPL">
														BPL
													</label>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="form-check">
													<input class="form-check-input" type="radio" name="bpl_nonbpl" id="NotinBPL" value="NotinBPL" @if($admission->bpl_nonbpl === 'NotinBPL') checked @endif>
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
										<textarea class="form-control @error('professionl_qualification') is-invalid @enderror" rows="1" name="professionl_qualification">{{$admission->professionl_qualification}}</textarea>
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
										<textarea class="form-control @error('address') is-invalid @enderror" rows="4" name="address">{{$admission->address}}</textarea>
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

								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="form-group">
										<label>Total Course Fee <span class="text-danger">*</span></label>
										<input type="text" id="course_fee" class="form-control @error('course_fee') is-invalid @enderror" name="course_fee" value="{{$admission->course_fee}}" readonly/>
										@error('course_fee')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<div class="form-group">
										<label>Receipt No <span class="text-danger">*</span></label>
										<input type="text" class="form-control" name="receipt_no" value="{{$admission->receipt_no}}" readonly />
									</div>

									<div class="form-group">
										<label>Registration Fee ₹ <span class="text-danger">*</span></label>
										<input type="text" id="registration_fee" class="form-control" name="registration_fee" value="{{$admission->registration_fee}}" readonly />
									</div>
									<div class="form-group">
										<label>Enrollment No</label>
										<input type="text" class="form-control" name="enrollment_no" value="{{$admission->enrollment_no}}" />
									</div>
									<div class="form-group">
										<label>Course Duration <span class="text-danger">(in Days)</span></label>
										<input type="text" class="form-control" name="course_duration" id="course_duration" value="{{$course_duration}}" readonly />
									</div>

								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">

									<div class="form-group">
										<label>Admission Fee (Deposited) ₹ <span class="text-danger">*</span></label>
										<input type="text" id="paid_amount" class="form-control @error('paid_amount') is-invalid @enderror" name="paid_amount" value="{{$admission->paid_amount}}" readonly/>
										@error('paid_amount')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<div class="form-group">
										<label>Concession (if any) ₹ <span class="text-danger">*</span></label>
										<input type="text" id="concession" class="form-control @error('concession') is-invalid @enderror" name="concession" value="{{$admission->concession}}" readonly/>
										@error('concession')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<div class="form-group">
										<label>Examination Fee ₹ <span class="text-danger">*</span></label>
										<input type="text" id="examination_fee" class="form-control" name="examination_fee" value="{{$admission->examination_fee}}" readonly />
									</div>
									<div class="form-group">
										<label>Total Amount ₹ <span class="text-danger">*</span></label>
										<input type="text" id="total_amount" class="form-control" name="total_amount" value="{{$admission->total_amount}}" readonly />
									</div>
									<div class="form-group">
										<label>Certificate Due Date</label>
										<input type="date" id="certificate_due_date" class="form-control" name="certificate_due_date" value="{{$admission->certificate_due_date}}" readonly />
									</div>

								</div>


								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group text-center custom-mt-form-group">
										<button class="btn btn-primary mr-2" type="submit">
											Submit
										</button>
										<a href="{{route('admissions.index')}}" class="btn btn-secondary">Cancel</a>
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
			var course_fee = parseFloat($('#course_fee').val());
			var paid_amount = parseFloat($('#paid_amount').val());
			var concession = parseFloat($('#concession').val());
			var examination_fee = parseFloat($('#examination_fee').val());
			var registration_fee = parseFloat($('#registration_fee').val());
			var total_amount = (course_fee + examination_fee + registration_fee) - concession;
			console.log(course_fee, paid_amount, concession, examination_fee, registration_fee, total_amount);
			$('#total_amount').val(total_amount);
		});
	});

	function validateamountfields(input) {
		input.value = input.value.replace(/\D/g, '');
	}
</script>
@endsection