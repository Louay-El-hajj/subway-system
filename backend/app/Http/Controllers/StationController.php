<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;

class StationController extends Controller
{
    public function index()
    {
        return Station::all();
    }

    public function show($id)
    {
        return Station::findOrFail($id);
    }

    public function store(Request $request)
    {
        return Station::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $station = Station::findOrFail($id);
        $station->update($request->all());
        return $station;
    }

    public function destroy($id)
    {
        $station = Station::findOrFail($id);
        $station->delete();
        return 204;
    }
}