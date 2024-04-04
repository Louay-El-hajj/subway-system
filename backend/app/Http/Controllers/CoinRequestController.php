<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Coin_request;
use App\Models\User;

class CoinRequestController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'amount' => 'required|integer|min:1',
        ]);

        $user = User::find($validatedData['user_id']);
        if ($user) {
            $coinRequest = new Coin_request([
                'user_id' => $user->id,
                'amount' => $validatedData['amount'],
                'coin_status' => 'pending',
            ]);
            $coinRequest->save();

            return response()->json($coinRequest, 201);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function show($id)
    {
        $coinRequest = CoinRequest::find($id);
        if ($coinRequest) {
            return response()->json($coinRequest, 200);
        } else {
            return response()->json(['message' => 'Coin request not found'], 404);
        }
    }

    public function handleCoinRequest(Request $request, $id)
    {
        $coinRequest = CoinRequest::find($id);
        if ($coinRequest) {
            $coinRequest->coin_status = $request->input('coin_status');
            $coinRequest->save();
            return response()->json($coinRequest, 200);
        } else {
            return response()->json(['message' => 'Coin request not found'], 404);
        }
    }

    public function destroy($id)
    {
        $coinRequest = CoinRequest::find($id);
        if ($coinRequest) {
            $coinRequest->delete();
            return response()->json(['message' => 'Coin request deleted'], 200);
        } else {
            return response()->json(['message' => 'Coin request not found'], 404);
        }
    }
}