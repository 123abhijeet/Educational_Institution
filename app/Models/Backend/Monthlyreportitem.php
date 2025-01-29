<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monthlyreportitem extends Model
{
    use HasFactory;
    protected $fillable = ['monthly_report_id','enrollment_no','course_id','registration_fee'];
}
