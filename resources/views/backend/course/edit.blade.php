@extends('backend.layouts.master')
@section('title','Course | Soft Campus')
@section('body')
<div class="page-wrapper">
	<div class="content container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h5 class="text-uppercase mb-0 mt-0 page-title">Edit Course</h5>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<ul class="breadcrumb float-right p-0 mb-0">
						<li class="breadcrumb-item">
							<a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
						</li>
						<li class="breadcrumb-item">
							<a href="{{route('courses.index')}}">Course</a>
						</li>
						<li class="breadcrumb-item"><span> Edit Course</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="page-content">
			<div class="row">
				<div class="col-lg-12 col-md-12 col-sm-12 col-12">
					<div class="card">
					<span class="text-danger ml-2">* marks fields are compulsory</span>
						<div class="card-body">
							<div class="row">
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<form method="post" action="{{route('courses.update',$course->id)}}" enctype="multipart/form-data">
										@csrf
										@method('put')
										<div class="form-group">
											<label>Course Category</label>
											<select class="form-control" name="course_category">
												@foreach($category as $item)
												<option value="{{$item->id}}" @if($course->course_category == $item->id) selected @endif>{{$item->category_name}}</option>
												@endforeach
											</select>
										</div>
										<div class="form-group">
											<label>Course ID <span class="text-danger">*</span></label>
											<input type="text" class="form-control @error('course_uid') is-invalid @enderror" name="course_uid" value="{{$course->course_uid}}" />
											@error('course_uid')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
											@enderror
										</div>
										<div class="form-group">
											<label>Course Name <span class="text-danger">*</span></label>
											<input type="text" class="form-control @error('course_name') is-invalid @enderror" name="course_name" value="{{ $course->course_name}}" />
											@error('course_name')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
											@enderror
										</div>
								</div>
								<div class="col-lg-6 col-md-6 col-sm-6 col-12">
									<div class="form-group">
										<label>Course Duration <span class="text-danger">(days)</span> <span class="text-danger">*</span></label>
										<input type="text" class="form-control @error('course_duration') is-invalid @enderror" name="course_duration" value="{{ $course->course_duration}}" />
										@error('course_duration')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<div class="form-group">
										<label>Course Video URL</label>
										<input type="text" class="form-control @error('course_video_url') is-invalid @enderror" name="course_video_url" value="{{ $course->course_video_url}}" />
										@error('course_video_url')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<div class="form-group">
										<label>Course Status</label>
										<select class="form-control" name="status">
											<option value="1" @if($course->status == "1") selected @endif>Active</option>
											<option value="0" @if($course->status == "0") selected @endif>Inactive</option>
										</select>
									</div>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label>Course Banner <span class="text-danger">*</span> <span class="text-danger">(maximum length of 500 kb)</span></label>
										<input type="file" name="course_banner" accept="image/*" class="form-control @error('course_banner') is-invalid @enderror" value="{{ $course->course_banner}}" />
										@error('course_banner')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
									<img src="{{asset('Course Banner/'.$course->course_banner)}}" alt="" width="60px" height="60px">

								</div>
								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label>Course Short Description <span class="text-danger">*</span> <span class="text-danger">(maximum length of 255 characters)</span></label>
										<textarea class="form-control @error('course_short_description') is-invalid @enderror" rows="3" name="course_short_description">{{ $course->course_short_description}}</textarea>
										@error('course_short_description')
										<span class="invalid-feedback" role="alert">
											<strong>{{ $message }}</strong>
										</span>
										@enderror
									</div>
								</div>
								<div class="col-lg-12 col-md-12 col-sm-12 col-12">
									<div class="form-group">
										<label>Course Description  <span class="text-danger">*</span><span class="text-danger">(maximum length of 4000 characters)</span></label>
										<textarea class="form-control @error('course_description') is-invalid @enderror" rows="6" name="course_description">{{ $course->course_description}}</textarea>
										@error('course_description')
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
										<a href="{{route('courses.index')}}" class="btn btn-secondary">Cancel</a>
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