@extends('frontend.layouts.master')
@section('title','Branch | Soft Campus')
@section('body')
<!-- banner-section start -->
<section class="py-5 bg-light-blue about-us-section font-inter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h1 class="fw-700 mb-2 mx-auto">Branch</h1>
					<ul class="list-unstyled d-flex align-items-center justify-content-center breadcrumb-ul">
						<li class="mx-1">
							<a href="{{route('Home')}}" title="Home" class="fs-16 label-color-1 fw-500 decoration-none">Home</a>
						</li>
						<li class="mx-1">/</li>
						<li class="mx-1 fs-16 label-color-3 fw-500 decoration-none">Branch</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- banner-section end -->

<!-- search-section start -->
<section class="py-md-5 py-3">
	<div class="container">
		<div class="row">
			<div class="col-md-6 mx-auto">
				<div class="search-box">
					<!-- Filter form to select city -->
					<form method="GET" action="{{ route('Branch') }}" class="form-inline d-flex align-items-center gap-3">
						<div class="form-group mb-2 flex-grow-1">
							<label for="city" class="sr-only">Select District</label>
							<select class="form-select" name="city" id="city">
								<option value="" selected disabled>Select District</option>
								@foreach($cities as $city)
									<option value="{{ $city }}" {{ request('city') == $city ? 'selected' : '' }}>
										{{ $city }}
									</option>
								@endforeach
							</select>
						</div>
						<button type="submit" class="btn btn-brand">Search</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- search-section end -->

<!-- training-center start -->
<section class="training-centers py-5 bg-light" id="training-centers">
	<div class="container">
		<h2 class="tfw-700 text-black w-75 text-center mx-auto mb-lg-3 pe-3 mb-2">Our Training Centers in India</h2>
		<div class="divider-line-3"></div>
		<br>
		<div class="row">
			@if($branches->isEmpty())
				<div class="col-12">
					<p class="text-center">No branches found for the selected district.</p>
				</div>
			@else
				@foreach($branches as $item)
				<div class="col-lg-4 col-sm-6 my-4">
					<div class="position-relative mg-10 d-flex align-items-stretch h-100">
						<div class="card w-100">
							<div class="card-body p-0 px-6 py-2 text-center">
								<h4 class="my-1"> {{$item->branch_name}} </h4>
								<p class="my-2"><b style="color: #123e69;">Director</b>: {{$item->director_name}}</p>
								<p class="mb-0 fs-14">Email: {{$item->branch_email}}</p>
								<a class="mt-1 fs-16 text-dark d-inline-block">Contact : {{ '+91 '. $item->branch_mobile}} , {{ '+91 '. $item->branch_phone}} </a>
								<p class="mb-0 fs-14">Address: {{$item->branch_address}} {{$item->branch_city}} {{$item->branch_state}} {{$item->branch_pin}} </p>
							</div>
						</div>
					</div>
				</div>
				@endforeach
			@endif
		</div>
	</div>
</section>
<!-- training-center end -->
@endsection
