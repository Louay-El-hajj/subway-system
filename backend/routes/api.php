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
Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout')->middleware('auth.jwt');


Route::get('/users', 'UserController@index')->middleware('auth.jwt');
Route::get('/users/{id}', 'UserController@show')->middleware('auth.jwt');
Route::put('/users/{id}', 'UserController@update')->middleware('auth.jwt');
Route::delete('/users/{id}', 'UserController@destroy')->middleware('auth.jwt');


Route::get('/stations', 'StationController@index')->middleware('auth.jwt');
Route::get('/stations/{id}', 'StationController@show')->middleware('auth.jwt');
Route::post('/stations', 'StationController@store')->middleware('auth.jwt');
Route::put('/stations/{id}', 'StationController@update')->middleware('auth.jwt');
Route::delete('/stations/{id}', 'StationController@destroy')->middleware('auth.jwt');


Route::get('/tickets', 'TicketController@index')->middleware('auth.jwt');
Route::get('/tickets/{id}', 'TicketController@show')->middleware('auth.jwt');
Route::post('/tickets', 'TicketController@store')->middleware('auth.jwt');
Route::put('/tickets/{id}', 'TicketController@update')->middleware('auth.jwt');
Route::delete('/tickets/{id}', 'TicketController@destroy')->middleware('auth.jwt');


Route::get('/reviews', 'ReviewController@index')->middleware('auth.jwt');
Route::get('/reviews/{id}', 'ReviewController@show')->middleware('auth.jwt');
Route::post('/reviews', 'ReviewController@store')->middleware('auth.jwt');
Route::put('/reviews/{id}', 'ReviewController@update')->middleware('auth.jwt');
Route::delete('/reviews/{id}', 'ReviewController@destroy')->middleware('auth.jwt');


Route::get('/coin-requests', 'CoinRequestController@index')->middleware('auth.jwt');
Route::get('/coin-requests/{id}', 'CoinRequestController@show')->middleware('auth.jwt');
Route::post('/coin-requests', 'CoinRequestController@store')->middleware('auth.jwt');
Route::put('/coin-requests/{id}', 'CoinRequestController@update')->middleware('auth.jwt');
Route::delete('/coin-requests/{id}', 'CoinRequestController@destroy')->middleware('auth.jwt');