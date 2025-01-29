@component('mail::message')

@php
$company_details = App\Models\DigitalMarketingAutomationDetail::where('user_id','=','1')->first();
@endphp

<table>
    <tr>
        <td>
        @if(!empty($company_details->company_logo))
            <img src="https://larabiztech.in/Company_Logo/{{ $company_details->company_logo }}" alt="Company Logo" style="height: 55px; width: 70px; margin-right: 10px;" />
        @endif
        </td>
        <td>
            <span style="margin-left: 337px;">
                <b> {{ now()->format('M d, Y') }} </b>
            </span>
        </td>
    </tr>
</table>

<br>
# Welcome to Lara Biz Tech <br>
 {{$name}} <br>
Your details are updated Successfully.
 
Thank You for choosing us!

Below are your login credentials!
 
Email       : {{ $email }}
<br>
Password    : {{ $password }}
 
Thanks,<br>
{{ config('app.name') }}
@endcomponent