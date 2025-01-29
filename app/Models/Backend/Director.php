<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    use HasFactory;
    protected $fillable = ['branch_id','director_name','director_email','director_mobile','director_aadhar','director_pan','director_address','signature','status'];
}
