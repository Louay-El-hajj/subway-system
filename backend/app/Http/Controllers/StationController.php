<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Station;

class StationController extends Controller
{
    public function index()
    {
        $stations = Station::all();
        return response()->json($stations, 200);
    }

    public function show($id)
    {

        $station = Station::find($id);
        if ($station) {
            return response()->json($station, 200);
        } else {
            return response()->json(['message' => 'Station not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $station = Station::find($id);
        if ($station) {
            $station->update($request->all());
            return response()->json($station, 200);
        } else {
            return response()->json(['message' => 'Station not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $station = new Station([
            'station_name' => $request->input('station_name'),
            'station_location' => $request->input('station_location'),
            'service_status' => $request->input('service_status'),
            'station_img' => $request->input('station_img'),
        ]);
        $station->save();

        return response()->json($station, 201);
    }

    public function destroy($id)
    {
        $station = Station::find($id);
        if ($station) {
            $station->delete();
            return response()->json(['message' => 'Station deleted'], 200);
        } else {
            return response()->json(['message' => 'Station not found'], 404);
        }
    }
}