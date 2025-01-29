@extends('backend.layouts.master')
@section('title','Branch Fee | Soft Campus')
@section('body')
<div class="page-wrapper">
	<div class="content container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h5 class="text-uppercase mb-0 mt-0 page-title">add Branch Fee</h5>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<ul class="breadcrumb float-right p-0 mb-0">
						<li class="breadcrumb-item">
							<a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
						</li>
						<li class="breadcrumb-item">
							<a href="{{route('branches.index')}}">Branch</a>
						</li>
						<li class="breadcrumb-item"><span> Add Branch Fee</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="page-content">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="card">
						<div class="card-body">
							<form method="post" action="{{route('Store-Branch-Fee')}}">
								@csrf
								<input type="hidden" name="branch_id" value="{{$branch_id}}">
								<div class="card mb-4 border-danger">
									<div class="card-header bg-danger text-white" style="border-radius: 8px 8px 0 0 !important;">
										<h5 class="mb-0">Branch Fee Details</h5>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table class="table custom-table">
												<thead class="thead-light">
													<tr>
														<th>Choose Course</th>
														<th>Registration Fee</th>
														<th>Examination Fee</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody>
													@if(!empty($fee_details))
													@foreach($fee_details as $item)
													<tr>
														<td><select name="course_id[]" id="course_id" class="form-control">
																<option value="" disabled selected>Select Course</option>
																@foreach($course as $course_item)
																<option value="{{$course_item->id}}" @if($item->course_id == $course_item->id) selected @endif>{{$course_item->course_name}}</option>
																@endforeach
															</select></td>
														<td><input type="text" class="form-control" name="registration_fee[]" value="{{$item->registration_fee}}"></td>
														<td><input type="text" class="form-control" name="examination_fee[]" value="{{$item->examination_fee}}"></td>
														<td><button type="button" class="btn btn-danger" disabled><i class="fa fa-trash"></i></button></td>
													</tr>
													@endforeach
													<tr>
														<td><select name="course_id[]" id="course_id" class="form-control">
																<option value="" disabled selected>Select Course</option>
																@foreach($course as $item)
																<option value="{{$item->id}}">{{$item->course_name}}</option>
																@endforeach
															</select></td>
														<td><input type="text" class="form-control" name="registration_fee[]"></td>
														<td><input type="text" class="form-control" name="examination_fee[]"></td>
														<td><button type="button" onclick="addRow()" class="btn btn-primary"><i class="fa fa-plus"></i></button></td>
													</tr>
													@else
													<tr>
														<td><select name="course_id[]" id="course_id" class="form-control">
																<option value="" disabled selected>Select Course</option>
																@foreach($course as $item)
																<option value="{{$item->id}}">{{$item->course_name}}</option>
																@endforeach
															</select></td>
														<td><input type="text" class="form-control" name="registration_fee[]"></td>
														<td><input type="text" class="form-control" name="examination_fee[]"></td>
														<td><button type="button" onclick="addRow()" class="btn btn-primary"><i class="fa fa-plus"></i></button></td>
													</tr>
													@endif
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
	function populateCourses() {
		$.ajax({
			url: "{{ route('courses.fetch') }}", // Replace with your route to fetch courses
			type: "GET",
			success: function(response) {
				var options = '<option value="">Select Course</option>';
				// Append each course to options
				$.each(response.courses, function(index, course) {
					options += '<option value="' + course.id + '">' + course.course_name + '</option>';
				});
				// Append options to select element
				$('.course-select').html(options);
			},
			error: function(xhr, status, error) {
				// Handle error
				console.error(error);
			}
		});
	}

	// Call populateCourses() when the page loads
	$(document).ready(function() {
		populateCourses();
	});

	// Add row function
	function addRow() {
		// Clone the first row
		var newRow = $('.custom-table tbody tr:first').clone();

		// Clear input values in the cloned row
		newRow.find('input').val('');

		// Append the remove button to the new row
		var removeButton = '<button type="button" onclick="removeRow(this)" class="btn btn-danger"><i class="fa fa-trash"></i></button>';
		newRow.find('td:last').html(removeButton);

		// Append the new row to the table
		$('.custom-table tbody').append(newRow);
	}


	// Remove row function
	function removeRow(btn) {
		$(btn).closest('tr').remove();
	}
</script>
@endsection