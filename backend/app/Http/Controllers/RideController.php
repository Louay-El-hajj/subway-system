<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ride;

class RideController extends Controller
{
    public function get_rides(){
        $Rides=Ride::get();
        return response()->json($Rides);
        }
}
