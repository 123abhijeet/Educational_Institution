@extends('backend.layouts.master')
@section('title','My Profile | Soft Campus')
@section('body')
<div class="page-wrapper">
	<div class="content container-fluid">
		<div class="page-header">
			<div class="row">
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<h5 class="text-uppercase mb-0 mt-0 page-title">my Profile</h5>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-12">
					<ul class="breadcrumb float-right p-0 mb-0">
						<li class="breadcrumb-item"><a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a></li>
						<li class="breadcrumb-item"><a href="#">Pages</a></li>
						<li class="breadcrumb-item"><span> Profile</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="card-box m-b-0">
			<div class="row">
				<div class="col-md-12">
					<div class="profile-view">
						<div class="profile-img-wrap">
							<div class="profile-img">
								<a href=""><img class="avatar" src="{{asset('backend/img/user.jpg')}}" alt=""></a>
							</div>
						</div>
						<div class="profile-basic">
							<h2 class="text-center">Welcome to Soft Campus</h2> <br>
							<div class="row">
								<div class="col-md-5">
									<div class="profile-info-left">
										<h3 class="user-name m-t-0">{{Auth::user()->name}}</h3>
										<h5 class="company-role m-t-0 m-b-0 font-weight-bold">Designation: {{Auth::user()->user_role}}</h5>
										@php
										$branch = App\Models\Backend\Branch::where('id',Auth::user()->branch)->first();
										$roleName = Auth::user()->getRoleNames()->first();
										@endphp
										@if($roleName == 'Admin')
										@else
										<span class="title font-weight-bold">Branch:</span>
										<span class="text font-weight-bold">{{$branch->branch_name}}</span>
										@endif
									</div>
								</div>
								<div class="col-md-7">
									<ul class="personal-info">
										@role('Branch Director')
										<li>
											<span class="title">Branch Code :</span>
											<span class="text">{{$branch->branch_code}}</span>
										</li>
										@endrole
										@role('Branch Manager')
										<li>
											<span class="title">Branch Code :</span>
											<span class="text">{{$branch->branch_code}}</span>
										</li>
										@endrole
										<li>
											<span class="title">Phone:</span>
											<span class="text">{{Auth::user()->mobile}}</span>
										</li>
										<li>
											<span class="title">Email:</span>
											<span class="text">{{Auth::user()->email}}</span>
										</li>

									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="notification-box">
		<div class="msg-sidebar notifications msg-noti">
			<div class="topnav-dropdown-header">
				<span>Messages</span>
			</div>
			<div class="drop-scroll msg-list-scroll">
				<ul class="list-box">
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">R</span>
								</div>
								<div class="list-body">
									<span class="message-author">Richard Miles </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item new-message">
								<div class="list-left">
									<span class="avatar">J</span>
								</div>
								<div class="list-body">
									<span class="message-author">Ruth C. Gault</span>
									<span class="message-time">1 Aug</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">T</span>
								</div>
								<div class="list-body">
									<span class="message-author"> Tarah Shropshire </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">M</span>
								</div>
								<div class="list-body">
									<span class="message-author">Mike Litorus</span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">C</span>
								</div>
								<div class="list-body">
									<span class="message-author"> Catherine Manseau </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">D</span>
								</div>
								<div class="list-body">
									<span class="message-author"> Domenic Houston </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">B</span>
								</div>
								<div class="list-body">
									<span class="message-author"> Buster Wigton </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">R</span>
								</div>
								<div class="list-body">
									<span class="message-author"> Rolland Webber </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">C</span>
								</div>
								<div class="list-body">
									<span class="message-author"> Claire Mapes </span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">M</span>
								</div>
								<div class="list-body">
									<span class="message-author">Melita Faucher</span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">J</span>
								</div>
								<div class="list-body">
									<span class="message-author">Jeffery Lalor</span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">L</span>
								</div>
								<div class="list-body">
									<span class="message-author">Loren Gatlin</span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
					<li>
						<a href="chat.html">
							<div class="list-item">
								<div class="list-left">
									<span class="avatar">T</span>
								</div>
								<div class="list-body">
									<span class="message-author">Tarah Shropshire</span>
									<span class="message-time">12:28 AM</span>
									<div class="clearfix"></div>
									<span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
								</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="topnav-dropdown-footer">
				<a href="chat.html">See all messages</a>
			</div>
		</div>
	</div> -->
</div>
@endsection