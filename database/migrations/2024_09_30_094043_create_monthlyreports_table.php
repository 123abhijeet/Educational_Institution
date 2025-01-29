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
        Schema::create('monthlyreports', function (Blueprint $table) {
            $table->id();
            $table->integer('branch');
            $table->string('transaction_id');
            $table->string('amount');
            $table->integer('total_student');
            $table->string('payment_status');
            $table->string('monthly_report');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monthlyreports');
    }
};
