<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Admission;
use App\Models\Backend\Branchfee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admission = Admission::where('branch',Auth::user()->branch)->orderby('id','desc')->get();
        return view('backend.fee_transaction.index',compact('admission'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function update_payment_amount(Request $request)
    {
        $old_data = Admission::where('id', $request->admission_id)->first();
        if ($old_data->paid_amount == $old_data->total_amount) {
            return redirect()->route('admissions.index')->with('success', 'All due cleared Successfully');
        }
        Admission::where('id', $request->admission_id)->update([
            'paid_amount' => $old_data->paid_amount + $request->amount
        ]);
        Branchfee::create([
            'branch_id' => $request->branch,
            'admission_id' => $request->admission_id,
            'total_amount' => $old_data->total_amount,
            'paid_amount' => $request->amount,
            'due_amount' =>  $old_data->total_amount - ($old_data->paid_amount + $request->amount)
        ]);
        return redirect()->route('admissions.index')->with('success', 'All due cleared Successfully');
    }
}
