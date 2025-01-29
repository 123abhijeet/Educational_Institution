<?php

// Get the last enrollment ID from the database

namespace App\Helpers;

use App\Models\Backend\Student;


class enrollment_id_helper
{
    public static function nextEnrollmentId()
    {
        $lastEnrollment = Student::select('enrollment_id')->latest()->first();

        // If there are no existing enrollments, start with SFT001
        if (!$lastEnrollment) {
            $nextEnrollmentId = 'SFT001';
        } else {
            // Extract the numeric part and increment it
            $lastNumericPart = intval(substr($lastEnrollment->enrollment_id, 3)); // Extract numeric part
            $nextNumericPart = $lastNumericPart + 1;

            // Generate the next enrollment ID
            $nextEnrollmentId = 'SFT' . str_pad($nextNumericPart, 3, '0', STR_PAD_LEFT); // Add leading zeros if necessary
        }

        return $nextEnrollmentId;
    }
}
