<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\User;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::all();
        return response()->json($tickets, 200);
    }

    public function show($id)
    {
        $ticket = Ticket::find($id);
        if ($ticket) {
            return response()->json($ticket, 200);
        } else {
            return response()->json(['message' => 'Ticket not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|exists:users,id',
            'price' => 'required|numeric|min:0',
            'dep_station_id' => 'required|exists:stations,id',
            'arr_station_id' => 'required|exists:stations,id',
            'date_purchased' => 'required|date',
            'arr_date' => 'required|date',
            'dep_date' => 'required|date',
            'ticket_status' => 'required|in:available,booked,expired',
        ]);

        $user = User::find($validatedData['user_id']);
        if ($user) {
            $ticket = new Ticket($validatedData);
            $ticket->save();

            return response()->json($ticket, 201);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::find($id);
        if ($ticket) {
            $ticket->update($request->all());
            return response()->json($ticket, 200);
        } else {
            return response()->json(['message' => 'Ticket not found'], 404);
        }
    }

    public function destroy($id)
    {
        $ticket = Ticket::find($id);
        if ($ticket) {
            $ticket->delete();
            return response()->json(['message' => 'Ticket deleted'], 200);
        } else {
            return response()->json(['message' => 'Ticket not found'], 404);
        }
    }
}