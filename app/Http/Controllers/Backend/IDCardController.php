<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Idcard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IDCardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roleName = Auth::user()->getRoleNames()->first();
        if ($roleName == 'Admin') {
            $idcards = Idcard::orderby('id', 'desc')->get();
        } else {
            $idcards = Idcard::join('admissions','idcards.enrollment_no','admissions.enrollment_no')
            ->where('admissions.branch', Auth::user()->branch)->orderby('idcards.id', 'desc')->get();
        }

        return view('backend.id_card.index', compact('idcards'));
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
}
