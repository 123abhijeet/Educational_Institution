<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paymentreceipt extends Model
{
    use HasFactory;
    protected $fillable = ['branch_id','receipt_no','student_id','payment_receipt'];
}
