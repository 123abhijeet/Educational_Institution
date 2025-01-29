@extends('frontend.layouts.master')
@section('title','Contact | Soft Campus')
@section('body')
<!-- banner start -->
<section class="py-5 bg-light-blue about-us-section font-inter">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<h1 class="fw-700 fs-50 mb-2 mx-auto">Contact Us</h1>
					<ul class="list-unstyled d-flex align-items-center justify-content-center breadcrumb-ul">
						<li class="mx-1">
							<a href="" title="Home" class="fs-16 label-color-1 fw-500 decoration-none">Home</a>
						</li>
						<li class="mx-1">/</li>
						<li class="mx-1 fs-16 label-color-3 fw-500 decoration-none">Contact Us</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- banner end -->

<!-- about-section start -->
<section>
	<div class="container py-5 contact-us-section">
		<div class="row justify-content-center">
			<div class="col-12 mb-3">
				<div class="text-center w-75 mx-auto">
					<h2 class="fw-600 intern-heading label-color-2 mb-3 mx-auto">How Can We Help You? </h2>
					<p class="fs-16 fw-400 lh-26 label-color-1 mb-lg-3 mb-2 intern-content">Our team is here to
						help.
						Whether your
						inquiry is about our courses, services, or support, simply fill out the contact form below.
					</p>
					<p class="fs-16 fw-400 lh-26 label-color-1 mb-lg-3 mb-2 intern-content">We look forward to
						hearing
						from you!
					</p>
				</div>
			</div>
			<div class="col-lg-12">
				<div class="contact-us-box p-4 h-100">
					<div class="row align-items-center">
						<div class="col-lg-6 ">
							<div class="success_message"></div>
							<div class="services-form shadow-none">
								<form class="row formReset" id="contactForm" autocomplete="off">
									<div class="col-lg-6 mb-3">
										<label for="contactName" class="form-label label-color-2 f7-15">Name</label>
										<input type="text" class="form-control fs-15 label-color-1" name="contactName" id="contactName" placeholder="Enter your name" />
									</div>
									<div class="col-lg-6 mb-3">
										<label for="contactMobile" class="form-label label-color-2 fs-15">Mobile
											Number</label> <input class="form-control fs-15 label-color-1 mobile_country_code numeric" type="number" id="contactMobile" name="contactMobile" placeholder="Enter your mobile" />
									</div>
									<input type="hidden" id="mobile_country_code" name="mobile_country_code" value="+91" />
									<div class="col-lg-6 mb-3">
										<label for="contactEmail" class="form-label label-color-2 fs-15">Email
											Address</label> <input type="email" class="form-control fs-15 label-color-1" name="contactEmail" id="contactEmail" placeholder="Enter your email" />
									</div>
									<div class="col-lg-6 mb-3">
										<label for="contactWebsiteName" class="form-label label-color-2 fs-15">Purpose</label>
										<select name="contactWebsiteName" id="contactWebsiteName" class="form-select" required>
											<option value="">Select Purpose</option>
											<option value="Course"> Course</option>
											<option value="Services"> Services</option>
											<option value="Support"> Support</option>
											<option value="Job Application"> Job Application</option>
											<option value="Media"> Media</option>
											<option value="Others"> Others</option>
										</select>
									</div>
									<div class="col-lg-12 mb-3">
										<label for="contactMessage" class="form-label label-color-2 fs-15">Message</label>
										<textarea name="contactMessage" id="contact7essage" class="form-control fs-15 label-color-1 resize-none" cols="30" rows="4" placeholder="Message"></textarea>
									</div>
									<!-- <div class="col-xl-12">
                            <div id='contact_recaptcha'>
                              <div class="g-recaptcha" data-sitekey="6LdUTgMiAAAAAGIfhmGxwlqN7S6zHvFBQiWJD9z_"></div>
                            </div>
                            <small class="help-block" id="google_captcha_contact"></small>
                          </div> -->
									<div class="col-12 text-end my-3 d-flex flex-column justify-content-center">
										<button class="blue-btn px-5 fs-17 fw-500 mx-auto services-btn btn submit_loader" type="submit" title="Send Message">Send Message</button>
									</div>
								</form>
							</div>
						</div>
						<div class="col-lg-6 d-lg-block d-none">
							<div class="p-4">
								<img src="{{asset('frontend/images/contect-us.html')}}" class="img-fluid" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- about-section end -->

<!-- map-section start -->
<section class="py-md-5 py-4 bg-light-blue">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h2 class="fw-600 intern-heading label-color-2 mb-2 mx-auto text-center">
					Contact Information</h2>
			</div>
			<div class="col-md-12">
				<div class="contact-us-box mt-3 bg-white">
					<ul class="list-unstyled mb-0">
						<li class="p-2">
							<div class="d-md-flex align-items-stretch">
								<div class="w-50 d-flex flex-column justify-content-center contact-map">
									<div class="ps-3 mt-2">
										<div class="mb-3">
											<h3 class="label-color-2 fs-26 fw-600 mb-1">Ahmedabad Center </h3>
											<p class="fs-15 fw-400 lh-26 mb-2 label-color-1 pe-md-5">Lorem, ipsum
												dolor sit amet consectetur adipisicing elit. Delectus, ab? </p>
										</div>
										<div class="mb-3">
											<h3 class="label-color-2 fs-17 fw-600 mb-2">Mobile Numbers</h3>
											<a class="fs-15 fw-400 lh-26 label-color-1" href="#">+91
												12345-67890,</a> <a class="fs-15 fw-400 lh-26 label-color-1" href="#">+91
												12345-67890 </a>
										</div>
										<div class="mb-4">
											<h3 class="label-color-2 fs-17 fw-600 mb-2">Email Address</h3>
											<a class="fs-15 fw-400 lh-26 label-color-1" href="#">learner@techbuddy.com</a>
										</div>
										<div class="mb-lg-2 mb-4">
											<a href="#" title="view details" class="blue-btn mb-md-0">View
												Details <span class="ms-1"><i class="far fa-arrow-right"></i></span></a>
										</div>
									</div>
								</div>
								<div class="w-50 contact-map">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.933473029912!2d72.57136291589822!3d23.02250578489462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8480e4d78ad7%3A0x263d3f975e24b7!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1645040042706" width="100%" height="310" frameborder="0" style="border:0" allowfullscreen=""></iframe>

								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- map-section end -->
@endsection