<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;
    public function from_station()
    {
        return $this->belongsTo(Station::class,'from_station');
    }
    public function to_station()
    {
        return $this->belongsTo(Station::class,'to_station');
    }
}
