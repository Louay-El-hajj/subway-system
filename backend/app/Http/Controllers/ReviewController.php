<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\Ticket;
use App\Models\User;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'ticket_id' => 'required|exists:tickets,id',
            'rating' => 'required|integer|between:1,5',
            'review_text' => 'nullable|string',
        ]);

        $ticket = Ticket::find($validatedData['ticket_id']);
        if ($ticket && $ticket->user_id === $validatedData['user_id']) {
            $review = new Review([
                'user_id' => $validatedData['user_id'],
                'ticket_id' => $validatedData['ticket_id'],
                'rating' => $validatedData['rating'],
                'review_text' => $validatedData['review_text'],
            ]);
            $review->save();

            return response()->json($review, 201);
        } else {
            return response()->json(['message' => 'Invalid ticket or user association'], 400);
        }
    }

    public function show($id)
    {
        $review = Review::find($id);
        if ($review) {
            return response()->json($review, 200);
        } else {
            return response()->json(['message' => 'Review not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $review = Review::find($id);
        if ($review) {
            $review->update($request->all());
            return response()->json($review, 200);
        } else {
            return response()->json(['message' => 'Review not found'], 404);
        }
    }

    public function destroy($id)
    {
        $review = Review::find($id);
        if ($review) {
            $review->delete();
            return response()->json(['message' => 'Review deleted'], 200);
        } else {
            return response()->json(['message' => 'Review not found'], 404);
        }
    }
}