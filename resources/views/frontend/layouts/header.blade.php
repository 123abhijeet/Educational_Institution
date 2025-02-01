<!doctype html>
<html class="no-js" lang="en">

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>@yield('title')</title>
	<!-- Place favicon.ico in the root directory -->
	<link rel="shortcut icon" type="image/png" href="{{asset('frontend/images/icon/favicon.ico')}}">
	<!-- all css here -->
	<link rel="stylesheet" href="{{asset('frontend/css/bootstrap.min.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/font-awesome.min.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/owl.carousel.min.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/magnific-popup.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/slicknav.min.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/typography.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/default-css.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/styles.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/responsive.css')}}">
	<!--color css-->
	<link rel="stylesheet" id="triggerColor" href="{{asset('frontend/css/triggerplate/color-0.css')}}">
	<!-- modernizr css -->
	<script src="{{asset('frontend/js/vendor/modernizr-2.8.3.min.js')}}"></script>
</head>

<body>
	<!-- preloader area start -->
	<div id="preloader">
		<div class="loader"></div>
	</div>
	<!-- prealoader area end -->
	<!-- header area start -->
	<header id="header">
		<!-- header top area start -->
		<div class="header-top">
			<div class="container">
				<div class="row d-flex flex-center">
					<div class="col-sm-8">
						<div class="ht-address">
							<ul>
								<li><i class="fa fa-phone"></i>+ 88 01916 444137</li>
								<li><i class="fa fa-envelope"></i>info@example.com</li>
							</ul>
						</div>
					</div>
					<div class="col-sm-4">
						<div class="ht-social">
							<ul>
								<li><a href="#"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- header top area end -->
		<!-- header bottom area start -->
		<div class="header-bottom">
			<div class="container">
				<div class="header-bottom-inner">
					<div class="row align-items-center">
						<div class="col-lg-3 col-sm-9">
							<div class="logo">
								<a href="{{route('Home')}}"><img src="{{asset('frontend/images/icon/logo.png')}}" alt="logo"></a>
							</div>
						</div>
						<div class="col-xl-8 col-lg-7 d-none d-lg-block">
							<div class="main-menu">
								<nav>
									<ul id="m_menu_active">
										<li class="{{Route::is('Home') ? 'active' : '' }}"><a href="{{route('Home')}}">Home</a></li>
										<li class="{{Route::is('About') ? 'active' : '' }}"><a href="{{route('About')}}">About</a></li>
										<li class="{{Route::is('Teachers') ? 'active' : '' }}"><a href="{{route('Teachers')}}">Teachers</a></li>
										<li class="{{Route::is('Gallery') ? 'active' : '' }}"><a href="{{route('Gallery')}}">Gallery</a></li>
										<li class="{{Route::is('Contact') ? 'active' : '' }}"><a href="{{route('Contact')}}">Contact</a></li>
									</ul>
								</nav>
							</div>
						</div>
						<div class="col-xl-1 col-lg-2 col-sm-3">
							<div class="hb-right">
								<ul>
									<li class="search_btn"><i class="fa fa-search"></i></li>
								</ul>
							</div>
						</div>
						<div class="col-12 d-block d-lg-none">
							<div id="mobile_menu"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- header bottom area end -->
	</header>
	<!-- header area end -->
	<!-- offset search area start -->
	<div class="offset-search">
		<form action="#">
			<input type="text" name="search" placeholder="Sarch here...">
			<button type="submit"><i class="fa fa-search"></i></button>
		</form>
	</div>
	<!-- offset search area end -->

	<!-- body overlay area start -->
	<div class="body_overlay"></div>
	<!-- body overlay area end -->