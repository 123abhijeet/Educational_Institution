<style>
	.sidebar-menu li a {
		text-transform: uppercase;
		color: #373d3f;
		display: block;
		font-size: 13px;
		height: auto;
		line-height: 40px;
		min-height: 40px;
		padding: 10px 10px;
		border-radius: 0;
		border-top: 1px solid #e7e7e7;
	}
</style>
<!-- aside start -->
<div class="sidebar" id="sidebar" style="overflow-y: scroll;">
	<div class="sidebar-inner slimscroll">
		<div id="sidebar-menu" class="sidebar-menu">
			<div class="header-left">
				<a href="{{route('Admin-Dashboard')}}" class="logo">
					<img src="{{ asset('logos/softcampus1.png')}}" width="150" height="70" alt="" />
				</a>
			</div>
			<ul class="sidebar-ul">
				<li class="menu-title">Menu</li>
				<li class="{{ Route::is('Admin-Dashboard') ? 'active' : ''}}">
					<a href="{{route('Admin-Dashboard')}}"><img src="{{ asset('backend/img/sidebar/icon-1.png')}}" alt="icon" /><span>Dashboard</span></a>
				</li>

				@role('Admin')
				<li class="submenu">
					<a href="#"><img src="{{ asset('backend/img/sidebar/icon-4.png')}}" alt="icon" />
						<span> Classes</span> <span class="menu-arrow"></span></a>
					<ul class="list-unstyled" style="display: none">
						<li>
							<a href="{{route('branches.index')}}" class="{{ Route::is('branches.index','branches.edit','branches.show','Branch-Fee') ? 'active' : ''}}"><span>All</span></a>
						</li>
						<li>
							<a href="{{route('branches.create')}}" class="{{ Route::is('branches.create') ? 'active' : ''}}"><span>Add</span></a>
						</li>
					</ul>
				</li>

				<li class="submenu">
					<a href="#"><img src="{{ asset('backend/img/sidebar/icon-3.png')}}" alt="icon" />
						<span> Admissions</span> <span class="menu-arrow"></span></a>
					<ul class="list-unstyled" style="display: none">
						<li>
							<a href="{{route('admissions.index')}}" class="{{ Route::is('admissions.index','admissions.edit','admissions.show') ? 'active' : ''}}"><span>All</span></a>
						</li>
						<li>
							<a href="{{route('admissions.create')}}" class="{{ Route::is('admissions.create') ? 'active' : ''}}"><span>Create</span></a>
						</li>
					</ul>
				</li>

				<li class="submenu">
					<a href="#"><img src="{{ asset('backend/img/sidebar/icon-3.png')}}" alt="icon" />
						<span> Fee Collection</span> <span class="menu-arrow"></span></a>
					<ul class="list-unstyled" style="display: none">
						<li>
							<a href="{{route('admissions.index')}}" class="{{ Route::is('admissions.index','admissions.edit','admissions.show') ? 'active' : ''}}"><span>All</span></a>
						</li>
						<li>
							<a href="{{route('admissions.create')}}" class="{{ Route::is('admissions.create') ? 'active' : ''}}"><span>Create</span></a>
						</li>
					</ul>
				</li>

				<li class="{{ Route::is('All-Monthly-Report') ? 'active' : ''}}">
					<a href="{{route('All-Monthly-Report')}}"><img src="{{ asset('backend/img/sidebar/icon-11.png')}}" alt="icon" />
						<span>Reports</span></a>
				</li>

				<li class="{{ Route::is('All-Monthly-Report') ? 'active' : ''}}">
					<a href="{{route('All-Monthly-Report')}}"><img src="{{ asset('backend/img/sidebar/icon-11.png')}}" alt="icon" />
						<span>Enquiry</span></a>
				</li>
				@endrole
			</ul>
		</div>
	</div>
</div>
<!-- aside end -->