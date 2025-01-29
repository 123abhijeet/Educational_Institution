<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branchfee extends Model
{
    use HasFactory;
    protected $fillable = ['branch_id','admission_id','total_amount','paid_amount','due_amount'];
}
