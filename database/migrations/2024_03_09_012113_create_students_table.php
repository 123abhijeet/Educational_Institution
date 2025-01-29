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
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->integer('branch');
            $table->integer('user_id');
            $table->string('enrollment_no');
            $table->string('student_name');
            $table->string('fathers_name');
            $table->string('fathers_occupation');
            $table->string('email');
            $table->string('mobile');
            $table->string('picture');
            $table->string('dob');
            $table->string('category');
            $table->string('bpl_nonbpl');
            $table->string('address');
            $table->string('professionl_qualification')->nullable();
            $table->string('date_of_admission');
            $table->string('aadhar_no');
            $table->integer('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
