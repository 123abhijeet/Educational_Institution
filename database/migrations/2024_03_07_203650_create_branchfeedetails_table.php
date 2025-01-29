<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('branchfeedetails', function (Blueprint $table) {
            $table->id();
            $table->integer('branch_id');
            $table->integer('course_id');
            $table->string('registration_fee');
            $table->string('examination_fee');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branchfeedetails');
    }
};
