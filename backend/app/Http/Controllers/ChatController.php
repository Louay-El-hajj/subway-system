<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
public function index()
{
$chats = Chat::all();
return response()->json($chats, 200);
}

public function show($id)
{
$chat = Chat::find($id);
if ($chat) {
return response()->json($chat, 200);
} else {
return response()->json(['message' => 'Chat message not found'], 404);
}
}

public function store(Request $request)
{
$validatedData = $request->validate([
'user_id' => 'required|exists:users,id',
'branch_id' => 'required|exists:branches,id',
'message' => 'required|string',
]);

$chat = Chat::create($validatedData);

return response()->json($chat, 201);
}
}