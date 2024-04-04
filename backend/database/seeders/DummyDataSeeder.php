<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Station;
use App\Models\Ticket;
use App\Models\Review;
use App\Models\Coin_request;

class DummyDataSeeder extends Seeder
{
    public function run()
    {
        $user1 = User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
            'user_type' => 'passenger',
            'coin_amount' => 100
        ]);

        $user2 = User::create([
            'name' => 'Jane Doe',
            'email' => 'jane@example.com',
            'password' => bcrypt('password'),
            'user_type' => 'manager',
            'coin_amount' => 200
        ]);

        $station1 = Station::create([
            'station_name' => 'Station A',
            'station_location' => 'Location A',
            'service_status' => 'available',
            'station_img' => 'station_a.jpg'
        ]);

        $station2 = Station::create([
            'station_name' => 'Station B',
            'station_location' => 'Location B',
            'service_status' => 'available',
            'station_img' => 'station_b.jpg'
        ]);

        $ticket1 = Ticket::create([
            'price' => 10.50,
            'user_id' => $user1->id,
            'dep_station_id' => $station1->id,
            'arr_station_id' => $station2->id,
            'date_purchased' => now(),
            'arr_date' => '2024-04-01',
            'dep_date' => '2024-04-02',
            'ticket_status' => 'available'
        ]);

        $ticket2 = Ticket::create([
            'price' => 15.75,
            'user_id' => $user2->id,
            'dep_station_id' => $station2->id,
            'arr_station_id' => $station1->id,
            'date_purchased' => now(),
            'arr_date' => '2024-04-03',
            'dep_date' => '2024-04-04',
            'ticket_status' => 'available'
        ]);

        $review1 = Review::create([
            'user_id' => $user1->id,
            'ticket_id' => $ticket1->id,
            'rating' => 4,
            'review_text' => 'Great experience!'
        ]);

        $review2 = Review::create([
            'user_id' => $user2->id,
            'ticket_id' => $ticket2->id,
            'rating' => 5,
            'review_text' => 'Excellent service!'
        ]);

        $coinRequest1 = Coin_Request::create([
            'user_id' => $user1->id,
            'amount' => 50,
            'coin_status' => 'pending'
        ]);

        $coinRequest2 = Coin_Request::create([
            'user_id' => $user2->id,
            'amount' => 100,
            'coin_status' => 'pending'
        ]);


        $user3 = User::create([
            'name' => 'Alice Smith',
            'email' => 'alice@example.com',
            'password' => bcrypt('password'),
            'user_type' => 'passenger',
            'coin_amount' => 150
        ]);

        $station3 = Station::create([
            'station_name' => 'Station C',
            'station_location' => 'Location C',
            'service_status' => 'available',
            'station_img' => 'station_c.jpg'
        ]);

        $ticket3 = Ticket::create([
            'price' => 20.00,
            'user_id' => $user3->id,
            'dep_station_id' => $station2->id,
            'arr_station_id' => $station3->id,
            'date_purchased' => now(),
            'arr_date' => '2024-04-05',
            'dep_date' => '2024-04-06',
            'ticket_status' => 'available'
        ]);

        $review3 = Review::create([
            'user_id' => $user3->id,
            'ticket_id' => $ticket3->id,
            'rating' => 3,
            'review_text' => 'Average service.'
        ]);

        $coinRequest3 = Coin_Request::create([

            'user_id' => $user3->id,
            'amount' => 75,
            'coin_status' => 'pending'
        ]);

      
    }
}