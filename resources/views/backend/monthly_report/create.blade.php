@extends('backend.layouts.master')
@section('title','Monthly Report | Soft Campus')
@section('body')
<style>
    .fontsize {
        font-size: 12px;
    }
</style>
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="page-header">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h5 class="text-uppercase mb-0 mt-0 page-title">Monthly Report</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <ul class="breadcrumb float-right p-0 mb-0">
                        <li class="breadcrumb-item">
                            <a href="{{route('Admin-Dashboard')}}"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="{{route('admissions.index')}}">Monthly Report</a>
                        </li>
                        <li class="breadcrumb-item"><span> Monthly Report</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="page-content">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table custom-table datatable">
                                    <thead class="thead-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Enrollment No</th>
                                            <th>Course</th>
                                            <th>Name</th>
                                            <th>Fathers Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @php
                                        $total_amount = 0;
                                        @endphp
                                        @foreach($reports as $key=>$item)
                                        @php
                                        $branch = App\Models\Backend\Branch::where('id',$item->branch)->first();
                                        $course = App\Models\Backend\Course::where('id',$item->course)->first();
                                        $total_amount += $item->registration_fee;
                                        @endphp
                                        <tr>
                                            <td>{{++$key}}</td>
                                            <td>{{$item->enrollment_no}}</td>
                                            <td>{{$course->course_name}}</td>
                                            <td>{{$item->student_name}}</td>
                                            <td>{{$item->fathers_name}}</td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <span class="text-danger">* If payment is failed then generate report again.</span>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group text-center custom-mt-form-group">
                                    <button class="btn btn-primary mr-2" type="submit" id="check_out">
                                        Pay & Generate Report
                                    </button>
                                    <a href="{{route('admissions.index')}}" class="btn btn-secondary">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
	$(document).ready(function() {

		$('#check_out').click(function(e) {
			e.preventDefault();

			var amount = {{	$total_amount * 100}};
			var options = {
				"key": "{{ env('RAZORPAY_KEY') }}", // Enter the Key ID generated from the Dashboard
				"amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 10 refers to 1000 paise
				"currency": "INR",
				"name": "SoftCampus",
				// "description": "Test Transaction",
				"image": "{{ asset('frontend/images/logo.jpeg') }}",
				"handler": function(response) {
					$.ajax({
						type: 'POST',
						url: "{{ route('Payment-Complete') }}",
						data: {
							"_token": "{{ csrf_token() }}",
							razorpay_payment_id: response.razorpay_payment_id,
							amount: amount,
						},
						dataType: 'json',
						beforeSend: function() {
							$('#check_out').text('Processing....');
							$('#check_out').prop("disabled", true);
						},
						success: function(data) {
							console.log(data);
							if (data.status == 'success') {
								$('#check_out').text('Checkout');
								$('#check_out').prop("disabled", false);
								successMsg("{{ session('success') }}")
								window.location.href = 'All-Monthly-Report';
							}
						},
						error: function(error) {
							console.log(error)
							errorMsg("{{ session('error') }}")
							$('#check_out').text('Checkout');
							$('#check_out').prop("disabled", false);
						}
					});
				},

				"prefill": {
					"name": "{{Auth::user()->name}}",
					"email": "{{Auth::user()->email}}",
					"contact": "{{Auth::user()->mobile_number}}"
				},
				"theme": {
					"color": "#F37254"
				}
			};
			var rzp1 = new Razorpay(options);
			rzp1.open();
		});
	});
</script>
@endsection