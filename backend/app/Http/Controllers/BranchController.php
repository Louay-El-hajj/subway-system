<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;
use App\Models\Departure;
use App\Models\Arrival;
use App\Models\Review;
use App\Models\Chat;
use Illuminate\Validation\Rule;

class BranchController extends Controller
{
    public function index()
    {
        $branches = Branch::all();
        return response()->json($branches, 200);
    }

    public function show($id)
    {
        $branch = Branch::find($id);
        if ($branch) {
            return response()->json($branch, 200);
        } else {
            return response()->json(['message' => 'Branch not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'location' => 'required|string',
        ]);

        $branch = Branch::create($validatedData);

        return response()->json($branch, 201);
    }

    public function update(Request $request, $id)
    {
        $branch = Branch::find($id);
        if ($branch) {
            $validatedData = $request->validate([
                'name' => 'string',
                'location' => 'string',
            ]);

            $branch->update($validatedData);
            return response()->json($branch, 200);
        } else {
            return response()->json(['message' => 'Branch not found'], 404);
        }
    }

    public function destroy($id)
    {
        $branch = Branch::find($id);
        if ($branch) {
            $branch->delete();
            return response()->json(['message' => 'Branch deleted'], 200);
        } else {
            return response()->json(['message' => 'Branch not found'], 404);
        }
    }

    public function storeDeparture(Request $request, $id)
    {
        $validatedData = $request->validate([
            'departure_time' => 'required|date',
        ]);

        $departure = Departure::create(array_merge($validatedData, ['branch_id' => $id]));

        return response()->json($departure, 201);
    }

    public function storeArrival(Request $request, $id)
    {
        $validatedData = $request->validate([
            'arrival_time' => 'required|date',
        ]);

        $arrival = Arrival::create(array_merge($validatedData, ['branch_id' => $id]));

        return response()->json($arrival, 201);
    }

    public function storeReview(Request $request, $id)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'rating' => 'required|integer|between:1,5',
            'comment' => 'nullable|string',
        ]);

        $review = Review::create(array_merge($validatedData, ['branch_id' => $id]));

        return response()->json($review, 201);
    }

    public function indexChat($id)
    {
        $chats = Chat::where('branch_id', $id)->get();
        return response()->json($chats, 200);
    }

    public function storeChat(Request $request, $id)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'message' => 'required|string',
        ]);

        $chat = Chat::create(array_merge($validatedData, ['branch_id' => $id]));

        return response()->json($chat, 201);
    }
}