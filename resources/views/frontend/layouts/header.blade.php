<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Meta tags for character set, viewport, and favicon -->
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="shortcut icon" href="#" />
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>@yield('title')</title>
	<!-- Favicon -->
	<link rel="shortcut icon" href="{{ asset('logos/softcampus1.png')}}" />
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<meta content="Complete IT Solutions" name="keywords">
	<meta content="Complete IT Solutions" name="description">
	<!-- External Fonts -->
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet preload" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;family=Lexend+Deca:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet preload" />
	<!-- Font Awesome -->
	<link rel="stylesheet preload" as="style" href="https://pro.fontawesome.com/releases/v5.8.2/css/all.css" />
	<!-- Bootstrap -->
	<link href="{{asset('frontend/css/bootstrap.css')}}" rel="stylesheet preload" />
	<!-- Owl Carousel -->
	<link rel="stylesheet preload" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
	<link rel="stylesheet preload" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
	<link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
	<!-- Lightbox -->
	<link rel="stylesheet preload" href="{{asset('frontend/css/lightbox.min.css')}}" />
	<!-- intlTelInput -->
	<link rel="stylesheet preload" type="text/css" href="{{asset('frontend/css/intlTelInput.min.css')}}">
	<!-- Custom Styles -->
	<link rel="stylesheet preload" href="{{asset('frontend/css/base.css')}}" />
	<link rel="stylesheet preload" href="{{asset('frontend/css/header.css')}}" />
	<link rel="stylesheet preload" href="{{asset('frontend/css/home.css')}}" />
	<link rel="stylesheet" href="{{asset('frontend/css/rev-settings.css')}}">
	<link rel="stylesheet" href="{{asset('frontend/css/custome.css')}}">
	<!-- Canonical link -->
	<link rel="canonical" href="" />
	<!-- Clear console -->
	<script type="text/javascript">
		console.clear();
	</script>
</head>

<style>
	/* Hides the element by default */
	.mobile-only {
		display: none;
	}

	/* Displays the element only on screens smaller than 768px (mobile devices) */
	@media screen and (max-width: 768px) {
		.mobile-only {
			display: block;
		}

		.shift-down {
			margin-top: 20px;
		}
	}
</style>

<body>
	<!-- header start -->
	<header class="home-navbar header-section bg-white position-sticky top-0">
		<div class="topbar-area">
			<div class="container text-white">
				<p class="text-center mb-1">
					<i class="fas fa-bell text-yellow me-1"></i> New Admissions Open for Career and Placement Courses.
				</p>
			</div>
		</div>
		<!-- Navigation Bar -->
		<nav class="navbar navbar-expand-lg py-0">
			<div class="container">
				<!-- Soft Campus Logo -->
				<a href="{{route('Home')}}">
					<img src="{{asset('logos/softcampus1.png')}}" alt="logo" width="140" height="60">
				</a>
				<!-- Mobile Toggle Button -->
				<button class="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<!-- Open Menu Icon -->
					<img src="{{asset('frontend/images/menubar-icon.svg')}}" width="35" height="35" alt="Menu" class="img-fluid open-icon" />
					<!-- Close Menu Icon (initially hidden) -->
					<img src="{{asset('frontend/images/close-menu.svg')}}" width="35" height="35" alt="Menu" class="img-fluid close-icon d-none" />
				</button>
				<!-- Navigation Bar Collapse Section -->
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<!-- Main Navbar Items -->
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0 ws-main-menu">
						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Home')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Home">Home</a>
						</li>
						<!-- Student's Zone -->
						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Studentzone')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Student's Zone">Student's Zone</a>
						</li>
						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Branch')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Branch Details">Branch Details</a>
						</li>
						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Course')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Course">Course</a>
						</li>
						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Gallery')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Gallery">Gallery</a>
						</li>
						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Feedback')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Feedback">Feedback</a>
						</li>

						<li class="nav-item position-relative mx-lg-1">
							<a href="{{route('Contact')}}" class="nav-link cursor-pointer label-color-1 fs-15" title="Contact">Contact</a>
						</li>

						<li class="nav-item position-relative mx-lg-1 mobile-only">
							@if(Auth::check())
							<a href="{{route('Admin-Dashboard')}}" class="btn btn-sm btn-success">Dashboard</a>
							<form action="{{route('logout')}}" method="POST">
								@csrf
								<button type="submit" class="decoration-none btn btn-sm" style="margin-top:6px; margin-right: -80px; background-color:red; color:white;">Log Out</button>
							</form>
							@else
							<a class="btn-brand decoration-none btn shadow-none" href="{{route('login')}}" style="margin-right: -65px;">Log In</a>
							@endif
						</li>

					</ul>

					@if(Auth::check())
					<div class="d-lg-flex d-none py-2 mx-3">
						<a href="{{route('Admin-Dashboard')}}" style="margin-right: 10px; background-color:green; color:white; padding: 10px !important; margin-bottom: 16px; border-radius: 7%;">Dashboard</a>
						<form action="{{route('logout')}}" method="POST">
							@csrf
							<button type="submit" class="decoration-none btn" style="margin-right: -80px; background-color:red; color:white;">Log Out</button>
						</form>
						@else
						<div class="d-lg-flex d-none py-2 mx-3">
							<form role="search">
								<a class="btn-brand decoration-none btn shadow-none" href="{{route('Contact')}}" title="Reach us">Reach us</a>
							</form>
						</div>
						<a class="btn-brand decoration-none btn shadow-none" href="{{route('login')}}" style="margin-right: -65px;">Log In</a>
					</div>
					@endif
				</div>
				<div class="d-none position-fixed w-100 h-100 overflow-hidden menu-backdrop left-0"></div>
			</div>
		</nav>
	</header>
	<!-- header end -->