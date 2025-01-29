<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>ID Card</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 100vh;
			margin: 0;
			background-color: #f4f4f4;
		}

		.id-card {
			width: 250px;
			height: 400px;
			/* background: #fff; */
			background-color: paleturquoise;
			border-radius: 10px;
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
			overflow: hidden;
			text-align: center;
		}

		.id-header {
			/* background: #4caf50; */
			/* color: #fff; */
			padding: 10px 0;
		}

		.id-header h1 {
			margin: 0;
			font-size: 18px;
		}

		.id-header p {
			margin: 0;
			font-size: 14px;
		}

		.id-photo img {
			width: 78px;
			height: 78px;
		}

		.id-info {
			/* padding: 10px; */
			color: #333;
			font-size: 12px;
			line-height: 1.2;
			font-weight: bold;
		}

		.id-info h2 {
			margin: 10px 0 5px;
			font-size: 16px;
			color: #000;
		}

		.id-back-info {
			color: #333;
			line-height: 1.5;
		}

		.id-card+.id-card {
			margin-top: 20px;
			/* Space between front and back cards */
		}


		.id-footer {
			display: grid;
			grid-template-columns: 1fr 1fr;
			/* Divides the footer into two equal sections */
			align-items: center;
			/* Aligns content vertically */
			gap: 10px;
			/* Adds spacing between the columns */
			padding: 20px 10px;
			color: #333;
			font-size: 12px;
			font-weight: bold;
		}

		.date-of-admission,
		.authorized-signatory {
			display: flex;
			flex-direction: column;
			align-items: center;
			/* Centers content horizontally */
			text-align: center;
		}

		.signature {
			width: 100px;
			margin: 5px 0;
			/* Spacing above and below the signature */
		}
	</style>
</head>

<body>
	<!-- logos/softcampus.jpeg -->
	<!-- Front Side -->
	<div class="id-card">
		<div class="id-header" style="text-align: center;">
			<div style="display: inline-flex; align-items: center; justify-content: center; gap: 10px;">
				<!-- Logo Section -->
				<img src="logos/softcampus.jpeg" alt="Logo" style="width: 25px; height: 25px; margin-top:2px; margin-left:1px;" />
				<!-- Title Section -->
				<h1 style="margin: 0; font-size: 18px; display: inline; white-space: nowrap;">Soft Campus</h1>
			</div>
			<p style="font-size: 8px; color: black; font-weight: bold; margin: 5px 0;">
				Soft Campus Institute of Computer Technology
			</p>
			<p style="
        color: white;
        background-color: black;
        font-size: 8px;
        border-radius: 100px;
        margin: 2px 21px;
        padding: 2px 2px;
        text-align: center;">
				Institute of Software, Hardware & Networking
			</p>
			<p style="font-size: 8px; color: black; font-weight: bold;">
				ISO 9001 : 2008 Certified Company
			</p>
		</div>


		@php
		$student_details = App\Models\Backend\Admission::where('enrollment_no', $enrollment_no)->first();
		use Carbon\Carbon;

		$dob = Carbon::createFromFormat('Y-m-d', $dob)->format('d-m-Y');
		$date_of_admission = Carbon::createFromFormat('Y-m-d', $date_of_admission)->format('d-m-Y');
		@endphp
		<div class="id-photo">
			<img src="{{public_path('Student Picture/'. $student_details->picture)}}" alt="Profile Photo" />
		</div>

		<div class="id-info">
			<h2 style="text-transform: uppercase">{{$student_name}}</h2>
			<p>
				<span style="color: red; opacity: 0.6">Enrl No. </span>: {{$enrollment_no}}
			</p>
			<p style="font-size: 10px;">Course : {{$course_name}}</p>
			<p style="font-size: 10px;">Center : {{$center}}</p>
		</div>
		<div class="id-footer">
			<table style="width: 100%; text-align: center; border-collapse: collapse; margin-top:20px;">
				<tr>
					<td style="width: 50%; vertical-align: top;">
						<p style="margin: 0; font-weight: bold; font-size:10px;">Date of Admission</p>
						<p style="margin: 0; font-size:10px;">{{$date_of_admission}}</p>
					</td>
					<td style="width: 50%; vertical-align: top;">
						<img src="signature.png" alt="Signature" style="margin-top:-20px !important; width: 100px; display: block; margin: 0 auto;" />
						<p style="margin-top:-15px !important; font-weight: bold; font-size:10px;">Authorized Signatory</p>
					</td>
				</tr>
			</table>
		</div>
		<p style="background-color: green; margin-top: 2px; color: white; font-size: 15px;">www.softcampus.co.in</p>
	</div>

	<!-- Back Side -->
	<div class="id-card">
		<div class="id-header">
		</div>
		<div class="id-back-info">
			<p style="font-size: 12px; font-weight: bold; text-align: left; padding: 10px;">
				<strong>Address:</strong> {{$student_address}}
			</p>
			<p style="font-size: 12px; font-weight: bold; text-align: left; padding: 10px;">
				<strong>Date of Birth:</strong> {{$dob}}
			</p>
			<p style="font-size: 12px; font-weight: bold; text-align: left; padding: 10px;">
				<strong>Office Address:</strong> Pandav Nagar,New Delhi, Postcode/Zip - 110092
			</p>
			<div style="text-align: center; margin: 20px 0;">
				<img src="{{$barcode_path}}" alt="Barcode" style="width: 150px; height: 50px;" />
			</div>
		</div>
		<div class="id-footer">
			<p style="font-size: 10px; text-align: center; font-weight: bold">
				Issued by: Soft Campus, Muzaffarpur
			</p>
		</div>
	</div>

</body>

</html>