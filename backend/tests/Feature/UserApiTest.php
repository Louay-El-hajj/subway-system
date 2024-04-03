<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

class UserApiTest extends TestCase
{
    use RefreshDatabase;

    public function testUserRegistration()
    {
    $response = $this->postJson('/api/register', [
    'name' => 'Test User',
    'email' => 'test@example.com',
    'password' => 'password',
]);

dd($response->getContent());

        $response
            ->assertStatus(201)
            ->assertJson([
                'access_token' => true,
                'token_type' => 'bearer',
            ]);
    }

    public function testUserLogin()
    {
        $user = User::factory()->create([
            'email' => 'user@example.com',
            'password' => bcrypt('password'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => 'user@example.com',
            'password' => 'password',
        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'access_token' => true,
                'token_type' => 'bearer',
            ]);
    }

    public function testAccessProtectedRoute()
    {
        $user = User::factory()->create();

        $token = auth()->login($user);

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->get('/api/protected-route');

        $response->assertStatus(200);
    }
}