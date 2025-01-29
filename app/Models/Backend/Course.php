<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    use HasFactory;
    protected $fillable = ['course_uid','course_category','course_name','course_duration','course_short_description','course_description','course_banner','course_video_url','status'];

    public function admission() : HasMany
    { 
        return $this->hasMany(Admission::class);
    }
}
