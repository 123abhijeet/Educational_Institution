@extends('frontend.layouts.master')
@section('title','Home | Soft Campus')
@section('body')
<!----- banner-slider start----->
<div class="rev_slider_wrapper bg-arrows">
	<div id="rev_slider" class="rev_slider fullscreenbanner">
		<ul>
			<li data-delay="5000" data-transition="slotzoom-horizontal" data-slotamount="7" data-masterspeed="1000" data-fsmasterspeed="1000">
				<img src="{{asset('frontend/images/slider/home-banner.jpg')}}" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg">
				<div class="slide-title tp-caption tp-resizeme white-color text-center" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-90','-90', '-150', '-350']" data-fontsize="['70','70', '70', '125']" data-fontweight="600" data-lineheight="['85','85', '80', '135']" data-width="['800','800','650']" data-height="none" data-color="#fff" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:50px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="500" data-splitin="chars" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">WE DEVELOP TO INNOVATE </div>
				<div class="slide-subtitle tp-caption tp-resizeme text-center" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','25', '15', '15']" data-fontsize="['18', '18', '18', '18']" data-fontweight="300" data-lineheight="['30']" data-width="['1200','1000','550']" data-whitespace="nowrap" data-color="#fff" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;" data-transform_out="opacity:0;s:1000;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none" data-splitout="none">Let’s develop your dream projects with Revolution TechHead. Our team members are expert in <br />developing websites and mobile applications as per your needs </div>
				<div class="tp-caption btn-brand decoration-none btn shadow-none" id="slide-1081-layer-13" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['100','100','100','30']" data-fontsize="['15','15','15','15']" data-fontweight="600" data-lineheight="['18','18','18','18']" data-width="['200','200','200','200']" data-height="none" data-whitespace="nowrap" data-start="1500" data-type="button" data-actions='[{"event":"click","action":"scrollbelow","offset":"-70px","delay":"","speed":"2500","ease":"Power1.easeInOut"}]' data-responsive_offset="on" data-splitin="none" data-splitout="none" data-frames='[{"delay":900,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:10px;fbr:100;","to":"o:1;fb:0;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;fbr:110%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]' data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
					<a style="color:#ffffff" href="#"> Lets Talk </a>
				</div>
			</li>
			<li data-delay="5000" data-transition="slotzoom-horizontal" data-slotamount="7" data-masterspeed="1000" data-fsmasterspeed="1000">
				<img src="{{asset('frontend/images/services/home-banner.jpg')}}" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg">
				<div class="slide-title tp-caption tp-resizeme text-center" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-90','-90', '-150', '-350']" data-fontsize="['70','60', '60', '125']" data-fontweight="600" data-lineheight="['80','70', '70', '135']" data-width="['800','700','650']" data-height="none" data-color="#fff" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power2.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:50px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="500" data-splitin="chars" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05">MARKET YOUR BUSINESS EFFICIENTLY</div>
				<div class="slide-subtitle tp-caption tp-resizeme text-center" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['45','25', '15', '15']" data-fontsize="['18', '18', '18', '18']" data-fontweight="300" data-lineheight="['30']" data-width="['1200','1000','550']" data-whitespace="nowrap" data-color="#fff" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1200;e:Power1.easeInOut;" data-transform_out="opacity:0;s:1000;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-start="1500" data-splitin="none" data-splitout="none">Would you like to hold your presence in online market? Our strong e-commerce development team <br /> and digital marketingexperts help you to build your brand successfully. </div>
				<div class="tp-caption btn-brand decoration-none btn shadow-none" id="slide-1081-layer-13" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['100','100','100','30']" data-fontsize="['15','15','15','15']" data-fontweight="600" data-lineheight="['18','18','18','18']" data-width="['200','200','200','200']" data-height="none" data-whitespace="nowrap" data-start="1500" data-type="button" data-actions='[{"event":"click","action":"scrollbelow","offset":"-70px","delay":"","speed":"2500","ease":"Power1.easeInOut"}]' data-responsive_offset="on" data-splitin="none" data-splitout="none" data-frames='[{"delay":900,"speed":1000,"frame":"0","from":"y:50px;opacity:0;fb:10px;fbr:100;","to":"o:1;fb:0;fbr:100;","ease":"Power4.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;fbr:100;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"200","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;fb:0;fbr:110%;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]' data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]">
					<a style="color:#ffffff" href="#"> Lets Talk </a>
				</div>
			</li>
		</ul>
	</div>
</div>
<!----- banner-slider end----->

<!----- about-section start----->
<div class="about-section">
	<div class="container">
		<div class="section-heading text-center pb-lg-5 pb-3">
			<h2 class="fw-700 w-max-content m-auto text-capitalize mb-lg-3 pe-3 mb-2">Welcome to Soft Campus</h2>
			<div class="divider-line-3"></div>
			<br>
			<p class="fs-18 fw-400"> Soft Campus Technologies Pvt. Ltd. has been a pioneer in computer education, training, and research since January 23, 2006. Our goal is to digitally empower students with the latest IT skills, making India a digitally proficient nation. With a strong presence of over 750+ franchise centers across India and international operations in the US, Armenia, and Russia, we are committed to excellence in IT education.</p>
		</div>
		<div class="row  align-items-stretch numbers-row">
			<div class="col-md-4 align-items-center gap-3 ">
				<img src="{{asset('frontend/images/years-badge.png')}}" alt="Years-Badge" class="ps-md-4 badge-img ps-0">
				<p class="text-white fw-600 ps-3 ">18 Years in the field of IT Training &amp; Placement Industry</p>
			</div>
			<div class="col-md-8 py-md-3 ps-md-5">
				<div class="row ps-md-4">
					<div class="col-md-3 py-3 py-md-0 col-6 text-center">
						<p class="text-yellow mb-3">
							<i class="fa fa-users fa-2x"></i>
						</p>
						<h3 class="text-brand fw-700 mb-0">1 Lac+</h3>
						<p class="mb-0 text-brand fw-600">Student Trained</p>
					</div>
					<div class="col-md-3 py-3 py-md-0 col-6 text-center">
						<p class="text-yellow mb-3">
							<i class="fa fa-handshake fa-2x"></i>
						</p>
						<h3 class="text-brand fw-700 mb-0">30+</h3>
						<p class="mb-0 text-brand fw-600">Franchisees</p>
					</div>
					<div class="col-md-3 py-3 py-md-0 col-6 text-center">
						<p class="text-yellow mb-3">
							<i class="fa fa-building fa-2x"></i>
						</p>
						<h3 class="text-brand fw-700 mb-0">3+</h3>
						<p class="mb-0 text-brand fw-600">Offices in India</p>
					</div>
					<div class="col-md-3 py-3 py-md-0 col-6 text-center">
						<p class="text-yellow mb-3">
							<i class="fa fa-chalkboard fa-2x"></i>
						</p>
						<h3 class="text-brand fw-700 mb-0">50+</h3>
						<p class="mb-0 text-brand fw-600">Industry Courses</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!----- about-section end----->

<!----- notification-section start----->
<div class="notification-section border-top">
	<div class="container">
		<div class="row bg-row">
			<div class="col-md-6 text-end px-0 d-md-none">
				<img src="{{asset('frontend/images/placement-inner-bg.png')}}" class="notification-banner img-fluid" alt="Placement Banner" loading="lazy">
			</div>
			<div class="col-md-6 p-md-4 p-3 text-md-start text-center inquiry-cta-left">
				<div class="action-box">
					<div class="head">
						<h4 class="title" style="color: #ff7426;">Notification</h4>
					</div>
					<div class="action-area marquee1">
						<ul>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
							<li>
								<a href="#">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!----- notification-section end----->

<!-- about-us-section start-->
<section class="e-learning-section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 text-center">
				<!-- Updated image path -->
				<img src="{{asset('frontend/images/e-learn-center.html')}}" alt="E learning center" class="img-fluid" />
			</div>
			<div class="col-lg-6 px-md-5 mt-4 mt-md-0">
				<!-- Section Title -->
				<h2 class="fw-700 mb-lg-3 mb-2 label-color-2">India's Most-Trusted IT Training Institute </h2>
				<div class="divider-line-3 ms-0"></div>
				<br>
				<!-- Section Description -->
				<p class="fs-16 fw-400 mb-3 lh-26 label-color-1">Soft Campus is recognized as one of India's most trusted IT training institutes.</p>
				<!-- List of Key Points -->
				<ul class="mb-4 pt-0 ps-0 list-unstyled">
					<li class="fs-18 fw-600 mb-3 label-color-2 mb-2">
						<i class="fas fa-star me-2 text-yellow"></i>We are offering high-quality education tailored to industry needs.
					</li>
					<li class="fs-18 fw-600 mb-3 label-color-2 mb-2">
						<i class="fas fa-star me-2 text-yellow"></i>Our mission is to make every student employable by equipping them with the latest computer skills.
					</li>
					<li class="fs-18 fw-600 mb-3 label-color-2 mb-2">
						<i class="fas fa-star me-2 text-yellow"></i> We provide globally recognized certifications, ensuring that our students stand out in the competitive job market.
					</li>
					<li class="fs-18 fw-600 mb-3 label-color-2">
						<i class="fas fa-star me-2 text-yellow"></i>Our state-of-the-art training methods, experienced faculty, and extensive course offerings make us a preferred choice for aspiring IT professionals.
					</li>
				</ul>
				<!-- Learn More Button -->
				<div class="ps-4 text-center text-md-start">
					<a class="btn decoration-none btn-brand fs-16 fw-500" title="Learn More" href="{{route('Contact')}}">Learn More</a>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- about-us-section end-->

<!-- why-choose-us-section start -->
<section class="learn-ease-section">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<div class="text-center">
					<!-- Section Title -->
					<h2 class="fw-700 w-max-content m-auto  mb-lg-3 mb-2 pe-3">Why To Join Us ?</h2>
					<div class="divider-line-3"></div>
					<br>
					<!-- Section Subtitle -->
					<p class="fs-18 fw-400 label-color-1 mb-0">We provide complete IT services, including website development, customized software, e-commerce solutions, and digital marketing.Learn from industry leaders, experienced IT professionals, and reputed professors.
						All our operations are CBS-enabled, ensuring seamless and eco-friendly management.Once you join Soft Campus, you get lifetime access to learning resources.
						We provide free software to manage computer training institutes efficiently.We serve clients internationally, including in the US, Armenia, and Russia.
						Awarded as the No.1 Computer Training Institute in the Educational Award 2017.
					</p>
				</div>
			</div>
			<div class="col-12 pt-lg-5 pt-4">
				<style>
					.faq-box-wrapper {
						margin-bottom: 20px;
					}

					.panel-group .panel {
						border-radius: 39px !important;
					}

					.faq-box-wrapper .faq-box-item .panel-heading {
						border-radius: 80px !important;
					}

					.faq-box-wrapper .faq-box-item .panel-heading {
						border-radius: 0;
						padding: 0;
						color: #123e69;
					}

					.panel-default>.panel-heading {
						background-color: #123e69;
						border-color: #123e69;
					}

					.panel-title {
						margin-top: 0;
						margin-bottom: 0;
						font-size: 16px;
						color: inherit;
					}

					.faq-box-wrapper .faq-box-item .faq-box-title h3 {
						margin-bottom: 0;
						position: relative;
						font-size: 16px;
					}

					.faq-box-wrapper .faq-box-item .faq-box-title h3 a {
						display: block;
						position: relative;
						padding: 15px 10px 15px 60px;
						color: #fff;
						font-weight: 500;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.faq-box-wrapper .faq-box-item .faq-box-title h3 a span {
						position: absolute;
						left: 5px;
						top: 5px;
						z-index: 1;
						border-radius: 50%;
						height: 40px;
						width: 40px;
						line-height: 40px;
						display: inline-block;
						text-align: center;
						font-size: 20px;
						background: #f39113;
						color: #ffffff;
						-webkit-transition: all .5s ease-out;
						-moz-transition: all .5s ease-out;
						-ms-transition: all .5s ease-out;
						-o-transition: all .5s ease-out;
						transition: all .5s ease-out;
					}
				</style>
				<div class="row panel-group" id="faq-accordian">
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse1" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">1</span> Complete IT Solutions Under One Roof
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse1" class="panel-collapse collapse">
									<div class="panel-body">
										We provide complete IT services, including website development, customized software, e-commerce solutions, and digital marketing.
									</div>
								</div>
							</div>
						</div>
						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse2" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">2</span> Expert Faculty
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse2" class="panel-collapse collapse">
									<div class="panel-body">
										Learn from industry leaders, experienced IT professionals, and reputed professors.
									</div>
								</div>
							</div>
						</div>
						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse3" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">3</span>100% Paperless Operations
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse3" class="panel-collapse collapse">
									<div class="panel-body">
										All our operations are CBS-enabled, ensuring seamless and eco-friendly management.
									</div>
								</div>
							</div>
						</div>
						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse4" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">4</span> Lifetime Membership
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse4" class="panel-collapse collapse">
									<div class="panel-body">
										Once you join Soft Campus, you get lifetime access to learning resources.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse5" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">5</span> Free Institute Management Software
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse5" class="panel-collapse collapse">
									<div class="panel-body">
										We provide free software to manage computer training institutes efficiently.
									</div>
								</div>
							</div>
						</div>
						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse6" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">6</span> Global Reach
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse6" class="panel-collapse collapse">
									<div class="panel-body">
										We serve clients internationally, including in the US, Armenia, and Russia.
									</div>
								</div>
							</div>
						</div>
						<div class="faq-box-wrapper" id="accordion">
							<div class="faq-box-item panel panel-default">
								<div class="panel-heading">
									<div class="panel-title faq-box-title">
										<h3>
											<a href="#collapse7" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion">
												<span class="faq-box-count">7</span> Recognized & Awarded
											</a>
										</h3>
									</div>
								</div>
								<div id="collapse7" class="panel-collapse collapse">
									<div class="panel-body">
										Awarded as the No.1 Computer Training Institute in the Educational Award 2017.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- why-choose-us-section end -->

<!-- explore-course-section start-->
<section class="explore-courses-section">
	<div class="section-title">
		<h2 class="me-auto fw-700 w-max-content mb-lg-3 mb-2 pe-3">Our Trending Courses </h2>
		<div class="divider-line-3 ms-0 mb-3"></div>
	</div>
	<div class=" ">
		<div class="owl-slider mt-lg-5 mt-4">
			<div id="exploreCourse" class="owl-carousel d-flex align-items-center">
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Python Programming Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Programming</span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Python Programming Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">45 days training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">25K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Android App Development Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">App Development </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Android App Development Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">4 months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">23K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Full-Stack Web Development Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
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
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Digital Marketing Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Digital Marketing </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Digital Marketing Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">3 months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">89K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Ethical Hacking Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Cybersecurity </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Ethical Hacking Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">60 days training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">14K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Penetration Testing Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Cybersecurity </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Penetration Testing Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">4 months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">21K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Data Science Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Professional </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Data Science Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">6 months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">400+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="SEO Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Digital Marketing </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">SEO Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">45 days training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">75K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Content Writing Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Digital Marketing </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Content Writing Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">60 days training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">500+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="WordPress Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Web Development </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">WordPress Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">50 days training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">24K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="MERN Stack Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Web Development </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">MERN Stack Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2"> 5-6 Months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">28K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="Full Online Ads Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Digital Marketing</span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Full Online Ads Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">2.5 Months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">21K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="YouTube Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">Digital Marketing</span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">YouTube Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">5 days training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">14K+ students trained</li>
						</ul>
					</div>
				</a>
				<a href="#" class="d-block decoration-none explore-card bg-white" title="YouTube Course">
					<div>
						<img src="{{asset('frontend/images/course-01.jpg')}}" class="card-img-top" alt="Image" />
					</div>
					<div class="p-3">
						<div class="my-3">
							<span class="web-design-tag">App Development </span>
						</div>
						<h3 class="fs-21 mb-3 fw-700 label-color-2">Flutter App Development Course</h3>
						<ul class="ps-3">
							<li class="label-color-1 fs-16 fw-400 mb-2">3 months training</li>
							<li class="label-color-1 fs-16 fw-400 mb-2">10K+ students trained</li>
						</ul>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
<!-- explore-course-section end -->

<!-- certificate-section start-->
<div class="services-section">
	<div class="container">
		<div class="section-heading text-center pb-lg-5 pb-3">
			<h2 class="fw-700 w-75 mx-auto mb-lg-3 pe-3 mb-2">Get Training Certificate by Government Recognized NSDC/Skill India</h2>
			<div class="divider-line-3"></div>
			<br>
		</div>
		<div class="row">
			<div class="col-md-6">
				<img src="{{asset('frontend/images/nsdc.png')}}" alt="Certificate Demo Image" draggable="false" class="ps-5 nsdc-img img-fluid" loading="lazy">
				<ul class="fa-ul mt-4">
					<li class="text-brand ps-2 my-2">
						<span class="fa-li text-green">
							<i class="fas fa-check-circle"></i>
						</span>National Skill Development Corporation
					</li>
					<li class="text-brand ps-2 my-2">
						<span class="fa-li text-green">
							<i class="fas fa-check-circle"></i>
						</span>Supported by the vision of PM Shri Narendra Modi
					</li>
					<li class="text-brand ps-2 my-2">
						<span class="fa-li text-green">
							<i class="fas fa-check-circle"></i>
						</span>Certification by NSDC SkillIndia
					</li>
					<li class="text-brand ps-2 my-2">
						<span class="fa-li text-green">
							<i class="fas fa-check-circle"></i>
						</span>Valid for all Jobs and College Training
					</li>
					<li class="text-brand ps-2 my-2">
						<span class="fa-li text-green">
							<i class="fas fa-check-circle"></i>
						</span>International Recognition
					</li>
				</ul>
			</div>
			<div class="col-md-6">
				<img src="https://img.freepik.com/premium-vector/modern-certificate-achievement-appreciation-template-design_555116-258.jpg" class="img-fluid" draggable="false" alt="Certificate Demo Image" loading="lazy">
			</div>
		</div>
	</div>
</div>
<!-- certificate-section end-->

<!--opportunities-section start-->
<section class="founder-section bg-light">
	<!-- Container for Founder Section -->
	<div class="container">
		<div class="section-heading text-center pb-lg-5 pb-3">
			<h2 class="fw-700 m-auto mb-lg-3 pe-3">Explore Exciting Opportunities with Us</h2>
			<div class="divider-line-3"></div>
			<br>
			<p class="fs-18 fw-400 label-color-1 mb-0">Soft Campus is not just an education provider; we are a gateway to endless career opportunities. Whether you want to upskill, start a new career in IT, or grow your computer training institute, we have the right solutions for you. Join our team as a franchise partner or enroll as a student to access world-class IT training.</p>
			<ul class="nav nav-pills gap-md-3 justify-content-md-center mt-3" id="pills-tab" role="tablist">
				<li class="nav-item mb-3 me-md-0 me-3" role="presentation">
					<button class="nav-link active" id="pills-tab1" data-bs-toggle="pill" data-bs-target="#pill1" type="button" role="tab" aria-controls="pill1" aria-selected="false" tabindex="-1">Join as a Student</button>
				</li>
				<li class="nav-item mb-3 me-md-0 me-3" role="presentation">
					<button class="nav-link" id="pills-tab2" data-bs-toggle="pill" data-bs-target="#pill2" type="button" role="tab" aria-controls="pill2" aria-selected="true">Explore Franchise Opportunities</button>
				</li>
			</ul>
		</div>
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane fade show active" id="pill1" role="tabpanel" aria-labelledby="pills-tab1">
				<!-- Row for Founder Information -->
				<div class="row owner-box">
					<!-- Founder Information Column -->
					<div class="col-md-12 col-lg-7 text-brand">
						<div class="">
							<!-- Student Message Heading -->
							<h2 class="mb-4 fw-700">Unlock Your Potential with Soft Campus</h2>
							<!-- Student Message Text -->
							<p>Our courses are designed to help you achieve your career goals. We provide personalized student logins where learners can access e-study materials, practice exams, and engage in interactive learning activities. With our focus on practical training and industry-driven curricula, we ensure that every student is job-ready upon course completion.
								Join Soft Campus Technologies Pvt. Ltd. today and be part of a digital revolution that is shaping the future of IT education!
							</p>
							<!-- <ul class="">
								<li class="my-3">Access to cutting-edge courses and training programs.</li>
								<li class="my-3">Engage in mentorship programs for personalized guidance.</li>
								<li class="my-3">Connect with industry experts and broaden your network.</li>
							</ul> -->
							<div class="d-flex gap-md-4 mt-4 cta-div">
								<a href="{{route('Course')}}" class="btn btn-outline-brand">Explore Courses</a>
							</div>
						</div>
					</div>
					<div class="col-md-12 col-lg-4 mx-auto">
						<div class="registration-form">
							<div class="form-banner row">
								<div class="col-md-12 col-lg-8 form-banner-head">
									<h3 class=" fw-700">Join as Student</h3>
								</div>
							</div>
							<div class="">
								<form class="form inqForm">
									<div class="inqAlertDiv"></div>
									<input type="text" class="form-control my-4" name="name" id="inq_name" placeholder="Name">
									<input type="email" class="form-control my-4" name="email" id="inq_email" placeholder="Email Address">
									<input type="hidden" name="isd_code" class="isd_code" id="isd_code" value="91">
									<input type="text" maxlength="10" autocomplete="off" class="form-control my-4 validate_contact inquiry_contact" name="contact" id="inq_contact" placeholder="Contact Number">
									<input type="hidden" name="source" id="inq_source" value="Home Page">
									<input type="hidden" name="source_value" id="inq_source_value" value="Placement Initiative">
									<input type="hidden" name="type" id="inq_type" value="job_fest">
									<input type="hidden" name="course_category" id="course_category" value="">
									<div class="text-center">
										<a href="javascript:;" type="button" class="btn btn-brand btn-brand-lg inqFormSubmit mb-3">Send Inquiry</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-pane fade" id="pill2" role="tabpanel" aria-labelledby="pills-tab2">
				<div class="row owner-box">
					<!-- Founder Information Column -->
					<div class="col-md-12 col-lg-7 text-brand">
						<div class="">
							<!-- Franchise Message Heading -->
							<h2 class="mb-4 fw-700">Join Soft Campus: Your Gateway to Franchise Success</h2>
							<!-- Franchise Message Text -->
							<p>Embark on a rewarding journey by becoming a Soft Campus franchisee through our partnership with TOPS Technologies.</p>
							<ul class="">
								<li class="my-3">Exclusive access to proven business models and resources.</li>
								<li class="my-3">Comprehensive training and ongoing support for your franchise.</li>
								<li class="my-3">Tap into a vast network of successful franchisees for collaboration.</li>
							</ul>
							<div class="d-flex gap-md-4 mt-4 cta-div">
								<a href="#" class="btn btn-outline-brand">Learn More</a>
							</div>
						</div>
					</div>
					<div class="col-md-12 col-lg-4 mx-auto registration-form">
						<div class="form-banner row">
							<div class="col-md-12 col-lg-8 form-banner-head">
								<h3 class="fw-700">Apply for Franchisees</h3>
							</div>
						</div>
						<div class="">
							<form class="form inqForm">
								<div class="inqAlertDiv"></div>
								<input type="text" class="form-control my-4" name="name" id="inq_name" placeholder="Name">
								<input type="email" class="form-control my-4" name="email" id="inq_email" placeholder="Email Address">
								<input type="hidden" name="isd_code" class="isd_code" id="isd_code" value="91">
								<input type="text" maxlength="10" autocomplete="off" class="form-control my-4 validate_contact inquiry_contact" name="contact" id="inq_contact" placeholder="Contact Number">
								<input type="hidden" name="source" id="inq_source" value="Home Page">
								<input type="hidden" name="source_value" id="inq_source_value" value="Placement Initiative">
								<input type="hidden" name="type" id="inq_type" value="job_fest">
								<input type="hidden" name="course_category" id="course_category" value="">
								<div class="text-center">
									<a href="javascript:;" type="button" class="btn btn-brand btn-brand-lg inqFormSubmit mb-3">Send Inquiry</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--opportunities-section end-->

<!--training-center-section start-->
<section class="training-centers py-5" id="training-centers">
	<div class="container">
		<h2 class="tfw-700 text-black w-75 text-center mx-auto mb-lg-3 pe-3 mb-2">Our Training Centers in India</h2>
		<div class="divider-line-3"></div>
		<br>
		<div class="row justify-content-center  scroll-carousel">
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-sm-12 col-md-4 col-lg-3 p-2">
				<div class="location-card" style="border: 2px solid #123e69; border-radius: 8px;">
					<div class="position-relative">

						<div class="location-link">
							<a href="#" class="btn btn-sm btn-yellow m-auto">Visit Us</a>
						</div>
					</div>
					<div class="location-card-footer py-2 px-3 ">
						<h6 class="mb-0 text-center">
							<i class="fa fa-location"></i> Ahmedabad (C.G.Road)
						</h6>
						<div class="d-flex justify-content-between mt-1">
							<div class="location-contact">
								<a href="#">
									<span class="pe-1">
										<i class="fa fa-phone"></i>
									</span>+91 99747 55006 </a>
							</div>
							<div class="location-direction">
								<a href="#" target="_blank">
									<span class="pe-1">
										<i class="fa fa-location-arrow"></i>
									</span> Get Direction </a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--training-center-section end-->

<!-- acheivments-section start -->
<section class="placement-support-section bg-light">
	<!-- Container for Placement Support Section -->
	<div class="container">
		<div class="section-heading mb-5">
			<h2 class="tfw-700 text-black w-75 text-center mx-auto mb-lg-3 pe-3 mb-2">Our Acheivments</h2>
			<div class="divider-line-3"></div>
			<br>
		</div>
		<div class="owl-carousel" id="award-carousel">
			<div>
				<div class="award-block">
					<img src="{{asset('frontend/images/award-1.jpg')}}" alt="All Image-5" class="gallery-img" loading="lazy" draggable="false">
					<div class="award-block-footer">
						<p class="text-center px-2 py-1 mb-0 small">Award 2017</p>
					</div>
				</div>
			</div>
			<div>
				<div class="award-block">
					<img src="{{asset('frontend/images/award-1.jpg')}}" alt="All Image-5" class="gallery-img" loading="lazy" draggable="false">
					<div class="award-block-footer">
						<p class="text-center px-2 py-1 mb-0 small">Award 2017</p>
					</div>
				</div>
			</div>
			<div>
				<div class="award-block">
					<img src="{{asset('frontend/images/award-1.jpg')}}" alt="All Image-5" class="gallery-img" loading="lazy" draggable="false">
					<div class="award-block-footer">
						<p class="text-center px-2 py-1 mb-0 small">Award 2017</p>
					</div>
				</div>
			</div>
			<div>
				<div class="award-block">
					<img src="{{asset('frontend/images/award-1.jpg')}}" alt="All Image-5" class="gallery-img" loading="lazy" draggable="false">
					<div class="award-block-footer">
						<p class="text-center px-2 py-1 mb-0 small">Award 2022</p>
					</div>
				</div>
			</div>
			<div>
				<div class="award-block">
					<img src="{{asset('frontend/images/award-1.jpg')}}" alt="All Image-5" class="gallery-img" loading="lazy" draggable="false">
					<div class="award-block-footer">
						<p class="text-center px-2 py-1 mb-0 small">Award 2022</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- acheivments-section end -->

<!-- alumni-section start-->
<section class="our-alimini-section home-alimini-section">
	<!-- Container for Alumni Section -->
	<div class="container">
		<!-- Row for Alumni Content -->
		<div class="row">
			<!-- Heading and Subheading -->
			<div class="col-lg-12 text-center">
				<div class="w-75 mx-auto">
					<!-- Section Title -->
					<h2 class="text-white mb-lg-4 mb-2">What Learners Say About Soft Campus&apos;s Courses!</h2>
					<!-- Section Description -->
					<p class="fs-18 fw-400 text-white"> We are proud to have positively influenced the career foundations for thousands of learners across India and Asian countries. </p>
				</div>
			</div>
			<!-- Testimonials Section -->
			<div class="col-12 pt-5">
				<!-- Owl Slider for Testimonials -->
				<div class="owl-slider">
					<div id="testimonial-review" class="owl-carousel d-flex align-items-center">
						<!-- Testimonial 1 -->
						<div class="card bg-transparent text-white border-0 mb-4 mb-lg-0">
							<div class="top-img-box position-relative d-block rounded p-4">
								<!-- Testimonial Content -->
								<p class="card-text label-color-4 fw-400 fs-16 line-clamp-7"> “After my graduation, I had decided to make my career in Python. Soft Campus became my companion in this. In addition to the quality training, I also found proper career guidance, internship opportunities, and placement assistance. I’m so grateful to my Python trainer at Soft Campus.” </p>
								<!-- Testimonial User Info -->
								<div class="d-flex align-items-center justify-content-start testimonial-user pt-2">
									<img src="{{asset('frontend/images/user.png')}}" alt="User Placeholder" class="img-fluid rounded-circle me-3" width="50" height="50">
									<h5 class="card-title m-0">Dakshesh Rajpurohit</h5>
								</div>
							</div>
						</div>
						<!-- Testimonial 2 -->
						<!-- (Repeat similar structure for Testimonials 2-8) -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- alumni-section end-->

<!-- instructor-section start-->
<section class="subscribers-section">
	<div class="container">
		<!-- Main Container for Subscribers Section -->
		<div class="container">
			<!-- Row for Two Subscriber Boxes -->
			<div class="row">
				<!-- First Subscriber Box (Become An Instructor) -->
				<div class="col-md-6">
					<div class="subscriber-box position-relative p-5">
						<!-- Heading for Become An Instructor Box -->
						<h4>Become An Instructor</h4>
						<!-- Inner Row for Content Layout -->
						<div class="row">
							<!-- Left Column for Text Content -->
							<div class="col-lg-7 col-md-12">
								<div class="top-instructors">
									<!-- Text Content for Become An Instructor -->
									<p>Top instructors from around the world teach millions of students on Mentoring.</p>
								</div>
							</div>
							<!-- Right Column for Image -->
							<div class="col-lg-5 col-md-12">
								<div class="mentor-img">
									<!-- Image for Become An Instructor -->
									<img class="img-fluid" alt="" src="{{asset('frontend/images/01.png')}}">
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Second Subscriber Box (Transform Access To Education) -->
				<div class="col-md-6">
					<div class="subscriber-box position-relative p-5" style="background-color: #F5F9FE;">
						<!-- Heading for Transform Access To Education Box -->
						<h4>Transform Access To Education</h4>
						<!-- Inner Row for Content Layout -->
						<div class="row">
							<!-- Left Column for Text Content -->
							<div class="col-lg-7 col-md-12">
								<div class="top-instructors">
									<!-- Text Content for Transform Access To Education -->
									<p>Create an account to receive our newsletter, course recommendations and promotions.</p>
								</div>
							</div>
							<!-- Right Column for Image -->
							<div class="col-lg-5 col-md-12">
								<div class="mentor-img">
									<!-- Image for Transform Access To Education -->
									<img class="img-fluid" alt="" src="{{asset('frontend/images/02.png')}}">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End of Row -->
		</div>
		<!-- End of Main Container -->
	</div>
</section>
<!-- instructor-section end -->
@endsection