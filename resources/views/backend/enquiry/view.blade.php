@extends('backend.layouts.master')
@section('title','Enquiry | Soft Campus')
@section('body')
<div class="page-wrapper">
	<div class="content container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h5 class="text-uppercase mb-0 mt-0 page-title">View Enquiry</h5>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<ul class="breadcrumb float-right p-0 mb-0">
						<li class="breadcrumb-item">
							<a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
						</li>
						<li class="breadcrumb-item">
							<a href="{{route('enquiry.index')}}">Enquiry</a>
						</li>
						<li class="breadcrumb-item"><span> View Enquiry</span></li>
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
									<form method="post">
										<div class="form-group">
											<label>Name</label>
											<input type="text" class="form-control" name="name" value="{{$enquiry->name}}" readonly/>
										</div>
										<div class="form-group">
											<label>Email</label>
											<input type="text" class="form-control" name="email" value="{{$enquiry->email}}" readonly/>
										</div>
										<div class="form-group">
											<label>Choose Course</label>
											<select name="course" id="course" class="form-control">
												@foreach($course as $item)
												<option value="{{$item->id}}" disabled @if($enquiry->course == $item->id) selected @endif>{{$item->course_name}}</option>
												@endforeach
											</select>
										</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="form-group">
										<label>Fathers Name</label>
										<input type="text" class="form-control" name="fathers_name" value="{{$enquiry->fathers_name}}" readonly/>
									</div>
									<div class="form-group">
										<label>Mobile</label>
										<input type="text" class="form-control" name="mobile" value="{{$enquiry->mobile}}" readonly/>
									</div>
									<div class="form-group">
										<label>Last Qualification</label>
										<select name="last_qualification" class="form-control">
											<option value="10th" @if($enquiry->last_qualification == '10th') selected @endif>10th</option>
											<option value="10+2" @if($enquiry->last_qualification == '10+2') selected @endif>10+2</option>
											<option value="Graduation" @if($enquiry->last_qualification == 'Graduation') selected @endif>Graduation</option>
											<option value="Post Graduation" @if($enquiry->last_qualification == 'Post Graduation') selected @endif>Post Graduation</option>
										</select>
									</div>

								</div>
								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label>Address</label>
										<textarea class="form-control" rows="4" name="address" readonly>{{$enquiry->address}}</textarea>
									</div>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group text-center custom-mt-form-group">
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