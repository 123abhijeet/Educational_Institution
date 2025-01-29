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
        Schema::create('admissions', function (Blueprint $table) {
            $table->id();
            $table->integer('branch');
            $table->integer('course');
            $table->string('student_name');
            $table->string('fathers_name');
            $table->string('fathers_occupation');
            $table->string('email');
            $table->string('mobile');
            $table->string('dob');
            $table->string('category');
            $table->string('bpl_nonbpl');
            $table->string('address');
            $table->string('professionl_qualification')->nullable();
            $table->string('picture')->nullable();
            $table->string('date_of_admission');
            $table->string('aadhar_no')->nullable();
            $table->string('course_fee');
            $table->string('registration_fee');
            $table->string('examination_fee');
            $table->string('total_amount');
            $table->string('paid_amount');
            $table->string('enrollment_no');
            $table->string('receipt_no')->nullable();
            $table->string('concession')->nullable();
            $table->string('certificate_due_date')->nullable();
            $table->integer('course_status')->default('0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admissions');
    }
};
