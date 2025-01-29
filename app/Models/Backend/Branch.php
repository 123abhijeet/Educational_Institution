<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Branch extends Model
{
    use HasFactory;
    protected $fillable = ['regional_director', 'branch_code', 'branch_name', 'branch_email', 'branch_mobile', 'branch_phone', 'branch_fax', 'branch_banner', 'branch_city','branch_state','branch_pin','branch_address', 'signature','status'];

    public function admission()
    {
        return $this->hasMany(Admission::class);
    }
}
