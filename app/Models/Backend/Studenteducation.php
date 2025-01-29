<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studenteducation extends Model
{
    use HasFactory;
    protected $fillable = ['student_id', 'education', 'board_university', 'passing_year', 'division', 'percent', 'certificate'];
}
