<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CoinRequest;

class CoinRequestController extends Controller
{
    public function index()
    {
        return CoinRequest::all();
    }

    public function show($id)
    {
        return CoinRequest::findOrFail($id);
    }

    public function store(Request $request)
    {
        return CoinRequest::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $coinRequest = CoinRequest::findOrFail($id);
        $coinRequest->update($request->all());
        return $coinRequest;
    }

    public function destroy($id)
    {
        $coinRequest = CoinRequest::findOrFail($id);
        $coinRequest->delete();
        return 204;
    }
}