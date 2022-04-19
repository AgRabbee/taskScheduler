<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::post('/getTaskList','TaskController@index');
Route::post('/addTask','TaskController@store');
Route::post('/updateTask','TaskController@update');
Route::post('/deleteTask','TaskController@destroy');

Route::get('/{any}', function () {
    return view('home');
})->where('any', '.*');
