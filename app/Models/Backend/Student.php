<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id','enrollment_no','branch', 'student_name', 'fathers_name', 'fathers_occupation', 'email', 'mobile', 'picture','dob',
        'category', 'address', 'professionl_qualification', 'date_of_admission', 'aadhar_no', 'bpl_nonbpl',
         'password'
    ];
}
