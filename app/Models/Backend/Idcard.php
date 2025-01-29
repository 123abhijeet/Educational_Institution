<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Idcard extends Model
{
    use HasFactory;
    protected $fillable = ['enrollment_no','bar_code','id_card'];
}
