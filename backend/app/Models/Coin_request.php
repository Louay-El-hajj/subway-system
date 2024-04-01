<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coin_request extends Model
{
    use HasFactory;
     protected $fillable = ['user_id', 'amount', 'coin_status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}