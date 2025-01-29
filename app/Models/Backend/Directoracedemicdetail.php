<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Directoracedemicdetail extends Model
{
    use HasFactory;
    protected $fillable = ['branch_id','degree','institute','board_university','percent','certificate'];
}
