@extends('frontend.layouts.master')
@section('title','Course | Soft Campus')
@section('body')
<!-- banner-section start -->
<section class="py-5 bg-light-blue about-us-section font-inter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h1 class="fw-700 mb-2 mx-auto">Our Courses</h1>
					<ul class="list-unstyled d-flex align-items-center justify-content-center breadcrumb-ul">
						<li class="mx-1">
							<a href="index.html" title="Home" class="fs-16 label-color-1 fw-500 decoration-none">Home</a>
						</li>
						<li class="mx-1">/</li>
						<li class="mx-1 fs-16 label-color-3 fw-500 decoration-none">Our Courses</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- banner-section end -->

<!-- training-center-section start -->
<section class="training-centers py-5" id="training-centers">
	<div class="container">
		<div class="row">

			<div class="col-lg-12 pr-50 md-pr-14">


				<div class="course-part clearfix">
					<div class="row">
						<div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
							<a href="#" class="d-block decoration-none explore-card bg-white" title="Full-Stack Web Development Course">
								<div>
									<img src="images/course-01.jpg" class="card-img-top" alt="Image" />
								</div>
								<div class="p-3">
									<div class="my-3">
										<span class="web-design-tag">Web Development </span>
									</div>
									<h3 class="fs-21 mb-3 fw-700 label-color-2">Full-Stack Web Development Course</h3>
									<ul class="ps-3">
										<li class="label-color-1 fs-16 fw-400 mb-2">4 months training</li>
										<li class="label-color-1 fs-16 fw-400 mb-2">29K+ students trained</li>
									</ul>
								</div>
							</a>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
							<a href="#" class="d-block decoration-none explore-card bg-white" title="Full-Stack Web Development Course">
								<div>
									<img src="images/course-01.jpg" class="card-img-top" alt="Image" />
								</div>
								<div class="p-3">
									<div class="my-3">
										<span class="web-design-tag">Web Development </span>
									</div>
									<h3 class="fs-21 mb-3 fw-700 label-color-2">Full-Stack Web Development Course</h3>
									<ul class="ps-3">
										<li class="label-color-1 fs-16 fw-400 mb-2">4 months training</li>
										<li class="label-color-1 fs-16 fw-400 mb-2">29K+ students trained</li>
									</ul>
								</div>
							</a>
						</div>
						<div class="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
							<a href="#" class="d-block decoration-none explore-card bg-white" title="Full-Stack Web Development Course">
								<div>
									<img src="images/course-01.jpg" class="card-img-top" alt="Image" />
								</div>
								<div class="p-3">
									<div class="my-3">
										<span class="web-design-tag">Web Development </span>
									</div>
									<h3 class="fs-21 mb-3 fw-700 label-color-2">Full-Stack Web Development Course</h3>
									<ul class="ps-3">
										<li class="label-color-1 fs-16 fw-400 mb-2">4 months training</li>
										<li class="label-color-1 fs-16 fw-400 mb-2">29K+ students trained</li>
									</ul>
								</div>
							</a>
						</div>
					</div>

				</div>
				<div class="pagination-area orange-color text-center mt-30 md-mt-0">
					<ul class="pagination-part">
						<li class="active"><a href="#">1</a></li>
						<li><a href="#">2</a></li>
						<li><a href="#">Next <i class="fa fa-long-arrow-right"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- training-center-section end -->
@endsection