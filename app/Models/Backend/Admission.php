<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Admission extends Model
{
    use HasFactory;
    protected $fillable = [
        'branch', 'course', 'enrollment_no', 'student_name', 'fathers_name', 'fathers_occupation', 'email', 'mobile',
        'dob', 'category', 'address', 'professionl_qualification', 'picture', 'date_of_admission', 'aadhar_no', 'bpl_nonbpl',
        'course_fee', 'registration_fee', 'examination_fee', 'total_amount', 'paid_amount', 'receipt_no',
        'concession', 'certificate_due_date', 'course_status'
    ];

    public function course(): BelongsTo
    {
        return $this->belongsTo(Course::class, 'course');
    }

    public function branch(): BelongsTo
    {
        return $this->belongsTo(Branch::class, 'branch');
    }
}
