<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = ['price', 'user_id', 'dep_station_id', 'arr_station_id', 'date_purchased', 'arr_date', 'dep_date', 'ticket_status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function departureStation()
    {
        return $this->belongsTo(Station::class, 'dep_station_id');
    }

    public function arrivalStation()
    {
        return $this->belongsTo(Station::class, 'arr_station_id');
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }
}