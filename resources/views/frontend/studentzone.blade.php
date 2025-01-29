@extends('frontend.layouts.master')
@section('title','Student Zone | Soft Campus')
@section('body')
<!-- banner-section start -->
<section class="py-5 bg-light-blue about-us-section font-inter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h1 class="fw-700 mb-2 mx-auto">Verify Student</h1>
					<ul class="list-unstyled d-flex align-items-center justify-content-center breadcrumb-ul">
						<li class="mx-1">
							<a href="index.html" title="Home" class="fs-16 label-color-1 fw-500 decoration-none">Home</a>
						</li>
						<li class="mx-1">/</li>
						<li class="mx-1 fs-16 label-color-3 fw-500 decoration-none">Verify Student</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- banner-section end -->

<!-- search-section start -->
<section class="py-md-5 py-4">
	<div class="container">
		<div class="row mb-5">
			<div class="col-md-6 mx-auto">
				<div class="search-box">
					<form class="form-inline d-flex align-items-center gap-3">
						<div class="form-group mb-2 flex-grow-1">
							<label for="enrollment_id" class="sr-only">Enter Enrollment ID</label>
							<input type="text" class="form-control" id="enrollment_id" placeholder="Enter Enrollment ID">
						</div>
						<button type="button" class="btn btn-brand" id="search_student">Search</button>
					</form>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div class="card" style="box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15); border: none;">
					<div class="card-header bg-brand text-white">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<i class="fa fa-users"></i> Student Details
							</div>
						</div>
					</div>
					<div class="card-body" id="studentzone_details">


					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- search-section end -->
@endsection
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
	$(document).ready(function() {
		$('#search_student').on('click', function() {
			var enrollment_id = $('#enrollment_id').val();
			$('#studentzone_details').html('');
			$.ajax({
				type: "GET",
				url: "{{ route('Get-Enrollment-Info') }}",
				data: {
					enrollment_id: enrollment_id
				},
				success: function(response) {
					if ('status' in response && response.status === 'Invalid Enrollment ID') {
						$('#studentzone_details').html('<p class="text-danger text-center">Invalid Enrollment ID.</p>');
					} else {
						var admissionDetails = response.admission_details;
						var studentDetails = response.student_details;
						var studentDetailsHtml = ''; // Initialize HTML string

						// Generate HTML for student details
						studentDetailsHtml += '<div class="row align-items-center">' +
							'<div class="col-lg-3">' +
							'<center>' +
							'<div class="text-left">' +
							'<img src=" /Student Picture/' + studentDetails.picture + '" class="img-fluid img-thumbnail" height="100" width="100">' +
							'</div>' +
							'</center>' +
							'</div>' +
							'<div class="col-lg-9">' +
							'<table class="table table-bordered mb-0">' +
							'<tbody>' +
							'<tr>' +
							'<th>Name</th>' +
							'<td>' + studentDetails.student_name + '</td>' +
							'</tr>' +
							'<tr>' +
							'<th>Father\'s Name</th>' +
							'<td>' + studentDetails.fathers_name + '</td>' +
							'</tr>' +
							'<tr>' +
							'<th>Mobile</th>' +
							'<td>' + studentDetails.mobile + '</td>' +
							'</tr>' +
							'<tr>' +
							'<th>Address</th>' +
							'<td>' + studentDetails.address + '</td>' +
							'</tr>' +
							'</tbody>' +
							'</table>' +
							'</div>' +
							'</div>';

						// Append student details HTML to the container
						$('#studentzone_details').html(studentDetailsHtml);

						// Generate HTML for admission details
						var admissionDetailsHtml = '<div class="row">';
						admissionDetails.forEach(function(admission) {
							admissionDetailsHtml += '<div class="col-lg-3">' +
								'<center>' +
								'<div class="text-left">' +
								'<img src="/Course Banner/' + admission.course.course_banner + '" class="img-fluid img-thumbnail" height="100" width="100">' +
								'</div>' +
								'</center>' +
								'</div>' +
								'<div class="col-lg-9" style="margin-top:10px;">' +
								'<table class="table table-bordered mb-0">' +
								'<tbody>' +
								'<tr>' +
								'<th>Course Name</th>' +
								'<td>' + admission.course.course_name + '</td>' +
								'</tr>' +
								'<tr>' +
								'<th>Course Duration</th>' +
								'<td>' + admission.course.course_duration + ' Days' + '</td>' +
								'</tr>' +
								'<tr>' +
								'<th>Branch</th>' +
								'<td>' + admission.branch.branch_name + '</td>' +
								'</tr>' +
								'<tr>' +
								'<th>Course Status</th>' +
								'<td>' + (admission.course_status ? 'Completed' : 'Ongoing') + '</td>' +
								'</tr>' +
								'</tbody>' +
								'</table>' +
								'</div>';
						});
						admissionDetailsHtml += '</div>';

						// Append admission details HTML to the container
						$('#studentzone_details').append(admissionDetailsHtml);
					}
				}
			});
		});
	});
</script>