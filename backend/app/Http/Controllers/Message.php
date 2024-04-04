<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use Auth;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $message = Message::create([
            'content' => $request->content,
            'user_id' => Auth::id(),
            'chat_id' => $request->chat_id,
        ]);

        return $message;
    }

    
}