<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;
use App\Models\CoinRequest;
use App\Models\User;

class HeadquartersController extends Controller
{
    public function inviteBranch(Request $request)
    {
        //shoudl send a request usingg email
    }

    public function removeBranch($id)
    {
        Branch::findOrFail($id)->delete();
        return response()->json(['message' => 'Branch removed successfully']);
    }

    public function updateBranch(Request $request, $id)
    {
        $branch = Branch::findOrFail($id);
        $branch->save();
        return response()->json(['message' => 'Branch updated successfully']);
    }

    public function indexCoinRequests()
    {
        $coinRequests = CoinRequest::all();
        return response()->json(['coin_requests' => $coinRequests]);
    }

    public function handleCoinRequest(Request $request, $id)
    {
        $coinRequest = CoinRequest::findOrFail($id);

        $coinRequest->coin_status = 'accepted';
        $coinRequest->save();

        $user = User::findOrFail($coinRequest->user_id);

        $user->coin_amount += $coinRequest->amount;
        $user->save();

        return response()->json(['message' => 'Coin request accepted and coins added to user account']);
    }
}