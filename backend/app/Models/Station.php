<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;
    protected $fillable = ['station_name', 'station_location', 'service_status', 'station_img'];
    
     public function departures()
    {
        return $this->hasMany(Ticket::class, 'dep_station_id');
    }

    public function arrivals()
    {
        return $this->hasMany(Ticket::class, 'arr_station_id');
    }
}