<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monthlyreport extends Model
{
    use HasFactory;
    protected $fillable = ['branch','transaction_id','amount','total_student','payment_status','monthly_report'];
}
