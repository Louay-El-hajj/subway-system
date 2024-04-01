<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::post('create_station', [StationController::class, 'create_station']);
// Route::post('update_station', [StationController::class, 'update_station']);
// Route::post('display_station', [StationController::class, 'display_station']);
// Route::post('delete_station', [StationController::class, 'delete_station']);

Route::controller(StationController::class)->group(function () {
    Route::get('get_station', "get_station");
    Route::post('create_station', 'create_station');
    Route::post('delete_station', 'delete_station');
    Route::post('update_station', 'update_station');
});

Route::controller(UserController::class)->group((function () {
    Route::get('get_user', 'get_user');
    Route::post('edit_user', 'edit_user');
    Route::post('upload_pic', 'upload_pic');
}));

Route::prefix('admin/')->group((function () {
    Route::controller(AdminAuthController::class)->group((function () {
        Route::post('login', 'login');
        Route::post('logout', 'logout');
        Route::post('refresh', 'refresh');
    }));
    Route::controller(AdminController::class)->group((function () {
        Route::get('get_driver_registration_requests', 'getDriverRegisterRequests');
        Route::get('get_all_drivers', 'getAllDrivers');
        Route::get('get_all_passengers', 'getAllPassengers');
        Route::post('approve', 'approve');
        Route::post('deny', 'deny');
        Route::post('get_user', 'get_user');
        Route::post('edit_driver', 'edit_driver');
        Route::post('delete_user', 'delete_user');
        Route::post('get_user_orders', 'get_user_orders');
        Route::post('edit_user', 'edit_user');
        Route::post('driver_analytics', 'driver_analytics');
        Route::post('passenger_analytics', 'passenger_analytics');
    }));
}));