<?php

use App\Http\Controllers\Backend\AdmissionController;
use App\Http\Controllers\Backend\AdmitcardController;
use App\Http\Controllers\Backend\BackendController;
use App\Http\Controllers\Backend\BranchController;
use App\Http\Controllers\Backend\CategoryController;
use App\Http\Controllers\Backend\CourseController;
use App\Http\Controllers\Backend\EnquiryController;
use App\Http\Controllers\Backend\ExaminationReportController;
use App\Http\Controllers\Backend\FeeController;
use App\Http\Controllers\Backend\IDCardController;
use App\Http\Controllers\Backend\MonthlyReportController;
use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\RDController;
use App\Http\Controllers\Backend\RegistrationController;
use App\Http\Controllers\Backend\StudentController;
use App\Http\Controllers\Frontend\FrontendController;
use FontLib\Table\Type\name;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [FrontendController::class, 'index'])->name('Home');
Route::get('/about', [FrontendController::class, 'about'])->name('About');
Route::get('/teachers', [FrontendController::class, 'teachers'])->name('Teachers');
Route::get('/gallery', [FrontendController::class, 'gallery'])->name('Gallery');
Route::get('/contact', [FrontendController::class, 'contact'])->name('Contact');

Route::prefix('Admin-Panel')->middleware(['auth'])->group(function () {
    Route::get('/dashboard', [BackendController::class, 'index'])->name('Admin-Dashboard');

    Route::resources([
        'reginaldirectors' => RDController::class,
        'category' => CategoryController::class,
        'courses' => CourseController::class,
        'branches' => BranchController::class,
        'students' => StudentController::class,
        'admissions' => AdmissionController::class,
        'enquiry' => EnquiryController::class,
        'branchfees' => FeeController::class,
        'registrations' => RegistrationController::class,
        'admitcards' => AdmitcardController::class,
        'idcards' => IDCardController::class,
    ]);

    Route::get('/test', [MonthlyReportController::class, 'test']);
    Route::post('/payment_complete', [MonthlyReportController::class, 'payment_complete'])->name('Payment-Complete');
   
   
    Route::get('/all-monthly-report',[MonthlyReportController::class,'index'])->name('All-Monthly-Report');
    Route::get('/generate-monthly-report',[MonthlyReportController::class,'create'])->name('Generate-Monthly-Report');
    Route::get('/all-examination-report',[ExaminationReportController::class,'index'])->name('All-Examination-Report');
    Route::get('/generate-examination-report',[ExaminationReportController::class,'create'])->name('Generate-Examination-Report');
    // Generate Certificate
    Route::get('/generate-course-certificate/{enrollment_no}', [AdmissionController::class, 'generate_course_certificate'])->name('Generate-Course-Certificate');
    Route::get('/generate-admit-card/{enrollment_no}', [AdmissionController::class, 'generate_admit_card'])->name('Generate-Admit-Card');
    Route::get('/generate-id-card/{enrollment_no}', [AdmissionController::class, 'generate_id_card'])->name('Generate-ID-Card');
    Route::get('/generate-certificate/{enrollment_no}', [RegistrationController::class, 'generate_certificate'])->name('Generate-Certificate');

    // All Certificates
    Route::get('/all-certificates',[AdmissionController::class,'all_certificates'])->name('All-Certificates');
    Route::post('/add_manager',[BranchController::class,'add_manager'])->name('Manager.Store');
    Route::get('/course_fetch', [BranchController::class, 'course_fetch'])->name('courses.fetch');
    Route::get('/fetch_fee_details', [AdmissionController::class, 'fetch_fee_details'])->name('Fee.Fetch');
    Route::get('/get_branch_fee/{branch_id}', [BranchController::class, 'get_branch_fee'])->name('Branch-Fee');
    Route::post('/branch_fee', [BranchController::class, 'branch_fee'])->name('Store-Branch-Fee');
    Route::post('/update_payment_amount', [FeeController::class, 'update_payment_amount'])->name('Update-Payment-Amount');

    Route::get('my-profile',[ProfileController::class,'my_profile'])->name('My-Profile');
    Route::get('edit-profile',[ProfileController::class,'edit_profile'])->name('Edit-Profile');
    Route::post('update-prifile',[ProfileController::class,'update_profile'])->name('Update-Profile');
});
Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
