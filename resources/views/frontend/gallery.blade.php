@extends('frontend.layouts.master')
@section('title','Gallery | Soft Campus')
@section('body')
<!-- banner-section start -->
<section class="py-5 bg-light-blue about-us-section font-inter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h1 class="fw-700 mb-2 mx-auto">Our Gallery</h1>
					<ul class="list-unstyled d-flex align-items-center justify-content-center breadcrumb-ul">
						<li class="mx-1">
							<a href="index.html" title="Home" class="fs-16 label-color-1 fw-500 decoration-none">Home</a>
						</li>
						<li class="mx-1">/</li>
						<li class="mx-1 fs-16 label-color-3 fw-500 decoration-none">Gallery</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- banner-section end -->

<!-- gallery-section start -->
<section class="training-centers py-5" id="training-centers">
	<div class="container">
		<h2 class="tfw-700 text-black w-75 text-center mx-auto mb-lg-3 pe-3 mb-2">Life At SoftCampus</h2>
		<div class="divider-line-3"></div> <br>
		<div class="row">
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="images/gallery/1.jpg" data-fancybox="gallery" data-caption="Educational Award 2017">
							<img src="images/gallery/1.jpg" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="images/gallery/2.jpg" data-fancybox="gallery" data-caption="Educational Award 2017">
							<img src="images/gallery/2.jpg" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="images/gallery/3.jpg" data-fancybox="gallery" data-caption="Educational Award 2017">
							<img src="images/gallery/3.jpg" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="images/gallery/4.jpg" data-fancybox="gallery" data-caption="Caption Images 1">
							<img src="images/gallery/4.jpg" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="https://source.unsplash.com/1280x720/?nature" data-fancybox="gallery" data-caption="Caption Images 1">
							<img src="https://source.unsplash.com/1280x720/?nature" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="https://source.unsplash.com/1280x720/?nature" data-fancybox="gallery" data-caption="Caption Images 1">
							<img src="https://source.unsplash.com/1280x720/?nature" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="https://source.unsplash.com/1280x720/?nature" data-fancybox="gallery" data-caption="Caption Images 1">
							<img src="https://source.unsplash.com/1280x720/?nature" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="gallery-card">
					<div class="gallery-card-image">
						<a href="https://source.unsplash.com/1280x720/?nature" data-fancybox="gallery" data-caption="Caption Images 1">
							<img src="https://source.unsplash.com/1280x720/?nature" alt="Image Gallery">
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- gallery-section end -->
@endsection