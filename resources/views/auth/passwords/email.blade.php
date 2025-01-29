<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Reset Password | Soft Campus</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0">

	<!-- Favicon -->
	<link rel="shortcut icon" href="{{ asset('logos/softcampus1.png')}}" />

	<link href="../../../../css?family=Roboto:300,400,500,700,900" rel="stylesheet">

	<link rel="stylesheet" href="{{asset('backend/css/bootstrap.min.css')}}">

	<link rel="stylesheet" href="{{asset('backend/plugins/fontawesome/css/all.min.css')}}">
	<link rel="stylesheet" href="{{asset('backend/plugins/fontawesome/css/fontawesome.min.css')}}">

	<link rel="stylesheet" href="{{asset('backend/css/style.css')}}">

</head>

<body>
	<div class="main-wrapper">
		<div class="account-page">
			<div class="container">
				@if (session('status'))
				<div class="alert alert-success" role="alert">
					{{ session('status') }}
				</div>
				@endif
				<h3 class="account-title text-white">Reset Password</h3>
				<div class="account-box">
					<div class="account-wrapper">
						<div class="account-logo">
							<a href="/"><img src="{{ asset('logos/softcampus1.png')}}" alt="soft campus"></a>
						</div>
						<form method="POST" action="{{ route('password.email') }}">
							@csrf
							<div class="form-group">
								<label>Email</label>
								<input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
								@error('email')
								<span class="invalid-feedback" role="alert">
									<strong>{{ $message }}</strong>
								</span>
								@enderror
							</div>
							<div class="form-group text-center custom-mt-form-group">
								<button class="btn btn-primary btn-block account-btn" type="submit">Send Password Reset Link</button>
							</div>
							<a href="{{route('login')}}" class="text-primary">Back to Login</a>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<script src="{{asset('backend/js/jquery-3.6.0.min.js')}}"></script>

	<script src="{{asset('backend/js/bootstrap.bundle.min.js')}}"></script>

	<script src="{{asset('backend/js/jquery.slimscroll.js')}}"></script>

	<script src="{{asset('backend/js/app.js')}}"></script>
</body>

</html>