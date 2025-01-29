<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    use HasFactory;
    protected $fillable = ['certificate_no', 'enrollment_no', 'branch_id', 'course_id', 'course_start_date', 'course_end_date', 'certificate_issued_date','certificate'];
}
