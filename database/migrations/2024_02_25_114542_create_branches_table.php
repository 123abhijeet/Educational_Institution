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
        Schema::create('branches', function (Blueprint $table) {
            $table->id();
            $table->integer('regional_director');
            $table->string('branch_code');
            $table->string('branch_name');
            $table->string('branch_email');
            $table->string('branch_mobile');
            $table->string('branch_phone')->nullable();
            $table->string('branch_fax')->nullable();
            $table->string('branch_banner');
            $table->string('branch_city');
            $table->string('branch_state');
            $table->string('branch_pin');
            $table->string('branch_address');
            $table->string('signature');
            $table->string('status')->default('1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('branches');
    }
};
