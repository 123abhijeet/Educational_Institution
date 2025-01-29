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
        Schema::create('studenteducations', function (Blueprint $table) {
            $table->id();
            $table->integer('student_id');
            $table->string('education');
            $table->string('board_university');
            $table->string('passing_year');
            $table->string('division');
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
        Schema::dropIfExists('studenteducations');
    }
};
