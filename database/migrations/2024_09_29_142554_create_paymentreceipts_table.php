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
        Schema::create('paymentreceipts', function (Blueprint $table) {
            $table->id();
            $table->integer('branch_id');
            $table->string('receipt_no');
            $table->integer('student_id');
            $table->string('payment_receipt');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paymentreceipts');
    }
};
