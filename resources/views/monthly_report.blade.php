<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Monthly Report</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f4f4f4;
			margin: 0;
			padding: 20px;
		}

		.receipt {
			max-width: 700px;
			margin: 0 auto;
			background-color: #fff;
			padding: 20px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
			position: relative;
			box-sizing: border-box;
			/* Ensure padding is included in the height calculation */
		}

		.receipt-header {
			display: table;
			width: 100%;
			margin-bottom: 20px;
		}

		.logo-container {
			text-align: center;
		}

		.tiny-logo {
			height: 50px;
			width: 65px;
		}

		.company-details,
		.student-details {
			display: table-cell;
			/* width: 65%; */
			vertical-align: top;
		}

		.receipt-info {
			margin: 20px 0;
			border-bottom: 2px solid #333;
			padding-bottom: 20px;
		}

		.receipt-items table {
			width: 100%;
			border-collapse: collapse;
		}

		.receipt-items th,
		.receipt-items td {
			text-align: left;
			padding: 10px;
			border: 1px solid #ddd;
		}

		.receipt-items th {
			background-color: #f4f4f4;
		}

		.receipt-footer {
			position: relative;
			text-align: right;
			margin-top: 20px;
			padding-bottom: 10px;
		}

		.receipt-footer .total {
			font-size: 18px;
			font-weight: bold;
		}
	</style>
</head>

<body>
	<div class="receipt">
		<div class="logo-container">
			<!-- Centered Logo -->
			<h2>Monthly Report</h2>
		</div>
		<div class="receipt-header">
			<!-- Left side: Company details -->
			<div class="company-details">
				<img src="logos/softcampus1.png" alt="Logo" class="tiny-logo" />
				<h3>Soft Campus</h3>
				<p>
					Pandav Nagar,New Delhi, Postcode/Zip 110092 <br />
					Phone: +91 9122991666 <br>
					Alternate: +91 9308541738 <br />
					Email: infosoftcampus@gmail.com <br>
					Fax:
				</p>
			</div>
			<!-- Right side: Student details -->
			<div class="student-details">
				@php
				$branch_detail = App\Models\Backend\Branch::where('id',Auth::user()->branch)->first();
				@endphp
				<img src="{{ public_path('Branch Banner/' . $branch_detail->branch_banner) }}" alt="Logo" class="tiny-logo" style="margin-left: 65%" />
				<h3 style="margin-left: 60%">{{$branch_detail->branch_name}}</h3>
				<p>{{$branch_detail->branch_address}} <br>
					Mobile: +91 {{$branch_detail->branch_mobile}} <br>
					Phone:  {{$branch_detail->branch_phone}} <br>
					Email: {{$branch_detail->branch_email}} <br>
					Fax : {{$branch_detail->branch_fax}}
				</p>

			</div>
		</div>

		<div class="receipt-info">
			<div><strong>Report Date : </strong>{{$report_date}}</div>
		</div>

		<div class="receipt-items">
			<table>
				<thead>
					<tr>
						<th>Enrollment No</th>
						<th>Name</th>
						<th>Fathers Name</th>
						<th>Course</th>
						<th>Registration Fee</th>
					</tr>
				</thead>
				<tbody>
					@foreach($reportItems as $item)
					@php
					$course_detail = App\Models\Backend\Course::where('id',$item->course_id)->first();
					$student_detail = App\Models\Backend\Student::where('enrollment_no',$item->enrollment_no)->first();
					@endphp
					<tr>
						<td>{{$student_detail->enrollment_no}}</td>
						<td>{{$student_detail->student_name}}</td>
						<td>{{$student_detail->fathers_name}}</td>
						<td>{{$course_detail->course_name}}</td>
						<td>{{$item->registration_fee}}</td>
					</tr>
					@endforeach
				</tbody>
			</table>
		</div>

		<div class="receipt-footer">
			<p class="total">Total Paid: Rs {{$amount}}</p>
		</div>
	</div>
</body>

</html>