<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Reginaldirector;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class RDController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reginal_director = Reginaldirector::orderBy('id','desc')->get();
        return view('backend.reginaldirector.index', compact('reginal_director'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('backend.reginaldirector.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('reginaldirectors', 'email')],
            'mobile' => ['required', Rule::unique('reginaldirectors', 'mobile')],
            'address' => ['required', 'string', 'max:255'],
            'identity_proof' => ['required', 'max:200'], // Maximum size in kilobytes
        ], [
            'first_name.required' => 'The first name field is required.',
            'last_name.required' => 'The last name field is required.',
            'email.required' => 'The email field is required.',
            'email.unique' => 'The email has already been taken.',
            'mobile.required' => 'The mobile number field is required.',
            'mobile.unique' => 'The mobile number has already been taken.',
            'identity_proof.required' => 'The identity proof is required.',
            'identity_proof.max' => 'The identity proof file size must not exceed :max kilobytes.',
            'address.required' => 'The name field is required.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        if ($request->identity_proof) {
            $identity_proof = time() . 'identity_proof' . '.' . $request->identity_proof->extension();
            $request->identity_proof->move(public_path('Identity Proof'), $identity_proof);
        }
        Reginaldirector::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'address' => $request->address,
            'gender' => $request->gender,
            'identity_proof' => $identity_proof,
        ]);
        return redirect()->route('reginaldirectors.index')->with('success', 'Data Stored Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Reginaldirector $reginaldirector)
    {
        return view('backend.reginaldirector.view', ['reginal_director' => $reginaldirector]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reginaldirector $reginaldirector)
    {
        return view('backend.reginaldirector.edit', ['reginal_director' => $reginaldirector]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reginaldirector $reginaldirector)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'mobile' => ['required'],
            'address' => ['required', 'string', 'max:255'],
            'identity_proof' => ['max:200'], // Maximum size in kilobytes
        ], [
            'first_name.required' => 'The first name field is required.',
            'last_name.required' => 'The last name field is required.',
            'email.required' => 'The email field is required.',
            'mobile.required' => 'The mobile number field is required.',
            'identity_proof.max' => 'The identity proof file size must not exceed :max kilobytes.',
            'address.required' => 'The name field is required.',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
        $current_identity_proof = Reginaldirector::findOrFail($reginaldirector->id)->identity_proof;

        if ($request->hasFile('identity_proof') && $request->file('identity_proof')->isValid()) {
            $identity_proof = time() . 'identity_proof' . '.' . $request->identity_proof->extension();
            $request->identity_proof->move(public_path('Identity Proof'), $identity_proof);

            if ($current_identity_proof) {
                unlink(public_path('Identity Proof') . '/' . $current_identity_proof);
            }
        } else {
            $identity_proof = $current_identity_proof;
        }
        Reginaldirector::where('id', $reginaldirector->id)->update([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'mobile' => $request->mobile,
            'address' => $request->address,
            'gender' => $request->gender,
            'identity_proof' => $identity_proof,
        ]);
        return redirect()->route('reginaldirectors.index')->with('success', 'Data Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reginaldirector $reginaldirector)
    {
        $current_identity_proof = Reginaldirector::findOrFail($reginaldirector->id)->identity_proof;
        if ($current_identity_proof) {
            unlink(public_path('Identity Proof') . '/' . $current_identity_proof);
        }
        $reginaldirector->delete();
        return redirect()->route('reginaldirectors.index')->with('error', 'Data Removed Successfully');
    }
}
