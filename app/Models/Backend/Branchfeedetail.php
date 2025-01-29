<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branchfeedetail extends Model
{
    use HasFactory;
    protected $fillable = ['branch_id','course_id','registration_fee','examination_fee'];
}
