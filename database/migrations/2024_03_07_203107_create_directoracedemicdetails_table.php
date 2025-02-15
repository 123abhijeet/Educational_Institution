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
        Schema::create('directoracedemicdetails', function (Blueprint $table) {
            $table->id();
            $table->integer('branch_id');
            $table->string('degree');
            $table->string('institute');
            $table->string('board_university');
            $table->string('percent');
            $table->string('certificate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('directoracedemicdetails');
    }
};
