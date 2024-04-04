<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\CoinRequestController;
use App\Http\Controllers\PassController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\HeadquartersController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('registerPassenger', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::get('stations', [StationController::class, 'index']);
Route::get('stations/{id}', [StationController::class, 'show']);
Route::get('tickets/{id}', [TicketController::class, 'show']);

Route::group(['middleware' => 'auth.jwt'], function () {

    Route::post('logout', [AuthController::class, 'logout']);

    Route::post('tickets', [TicketController::class, 'store']);
    Route::post('passes', [PassController::class, 'store']);
    Route::post('coin-requests', [CoinRequestController::class, 'store']);
    Route::post('reviews', [ReviewController::class, 'store']);

    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);

    Route::get('tickets', [TicketController::class, 'index']);
    Route::put('tickets/{id}', [TicketController::class, 'update']);
    Route::delete('tickets/{id}', [TicketController::class, 'destroy']);
    Route::get('tickets/{id}/history', [TicketController::class, 'getHistory']);

    Route::get('reviews/{id}', [ReviewController::class, 'show']);
    Route::put('reviews/{id}', [ReviewController::class, 'update']);
    Route::delete('reviews/{id}', [ReviewController::class, 'destroy']);


    Route::get('coin-requests/{id}', [CoinRequestController::class, 'show']);
    Route::delete('coin-requests/{id}', [CoinRequestController::class, 'destroy']);


    Route::group(['prefix' => 'branches'], function () {
        Route::get('stations/{id}', [StationController::class, 'show']);
        Route::put('stations/{id}', [StationController::class, 'update']);
        Route::post('departures', [BranchController::class, 'storeDeparture']);
        Route::post('arrivals', [BranchController::class, 'storeArrival']);
        Route::post('reviews', [BranchController::class, 'storeReview']);
        Route::get('chats', [BranchController::class, 'indexChat']);
        Route::post('chats', [BranchController::class, 'storeChat']);
    });

    Route::group(['prefix' => 'headquarters'], function () {
        Route::post('branches', [HeadquartersController::class, 'inviteBranch']);
        Route::delete('branches/{id}', [HeadquartersController::class, 'removeBranch']);
        Route::put('branches/{id}', [HeadquartersController::class, 'updateBranch']);
        Route::get('coin-requests', [HeadquartersController::class, 'indexCoinRequests']);
        Route::put('coin-requests/{id}', [HeadquartersController::class, 'handleCoinRequest']);
    });

    Route::get('profile', [UserController::class, 'showProfile']);
    Route::put('profile', [UserController::class, 'updateProfile']);

    Route::get('chats', [ChatController::class, 'index']);
    Route::get('chats/{id}', [ChatController::class, 'show']);
    Route::post('chats', [ChatController::class, 'create']);
});

Route::post('reset-password', [UserController::class, 'resetPassword']);