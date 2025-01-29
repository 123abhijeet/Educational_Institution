<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Reginaldirector extends Model
{
    use HasFactory;
    protected $fillable = ['first_name','last_name','email','mobile','identity_proof','address','gender','status'];

    public function branches(): HasMany
    {
        return $this->hasMany(Branch::class);
    }
}
