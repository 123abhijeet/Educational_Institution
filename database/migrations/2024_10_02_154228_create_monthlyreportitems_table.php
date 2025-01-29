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
        Schema::create('monthlyreportitems', function (Blueprint $table) {
            $table->id();
            $table->integer('monthly_report_id');
            $table->string('enrollment_no');
            $table->integer('course_id');
            $table->string('registration_fee');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monthlyreportitems');
    }
};
