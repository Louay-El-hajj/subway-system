<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pass;
use App\Models\User;

class PassController extends Controller
{
    public function index()
    {
        $passes = Pass::all();
        return response()->json($passes, 200);
    }

    public function show($id)
    {
        $pass = Pass::find($id);
        if ($pass) {
            return response()->json($pass, 200);
        } else {
            return response()->json(['message' => 'Pass not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $user = User::find($request->input('user_id'));
        if ($user) {
            $pass = new Pass([
                'user_id' => $user->id,
                'number_of_tickets' => $request->input('number_of_tickets'),
            ]);
            $pass->save();
            
            $user->number_of_tickets += $request->input('number_of_tickets');
            $user->save();

            return response()->json($pass, 201);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $pass = Pass::find($id);
        if ($pass) {
            $pass->update($request->all());
            return response()->json($pass, 200);
        } else {
            return response()->json(['message' => 'Pass not found'], 404);
        }
    }

    public function destroy($id)
    {
        $pass = Pass::find($id);
        if ($pass) {
            $pass->delete();
            return response()->json(['message' => 'Pass deleted'], 200);
        } else {
            return response()->json(['message' => 'Pass not found'], 404);
        }
    }
}