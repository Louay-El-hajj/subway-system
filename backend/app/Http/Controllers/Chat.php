<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use Auth;

class ChatController extends Controller
{
    public function index()
    {
        $chats = Chat::whereHas('users', function ($query) {
            $query->where('user_id', Auth::id());
        })->get();

        return $chats;
    }

    public function show($id)
    {
        $chat = Chat::findOrFail($id);

      
        if (!Auth::user()->chats->contains($chat->id)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $chat->load('messages');
    }

 
}