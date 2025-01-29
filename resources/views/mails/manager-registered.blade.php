@component('mail::message')
# Welcome to Softcampus <br>
{{$name}} <br>
You are Successfully Registered as Branch Manager.

Below are your login credentials!

Email : {{ $email }}
<br>
Password : {{ $password }} <br>

To log in, click the following link:
<a href="https://softcampus.online/login">Login</a> <br>
Thanks,<br>
{{ config('app.name') }}
@endcomponent