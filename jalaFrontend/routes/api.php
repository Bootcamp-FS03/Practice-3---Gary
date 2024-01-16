<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\UsuarioController;
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


Route::post('/register', [UsuarioController::class, 'store']);
Route::post('/login', [UsuarioController::class, 'login']);
Route::post('/logout', [UsuarioController::class, 'logout']);
Route::get('/users', [UsuarioController::class, 'index']);




Route::get('/posts', [PostsController::class, 'index']);

Route::get('/posts/user/{id}', [PostsController::class, 'showByUser']);

Route::put('/users/{id}', [UsuarioController::class, 'update']);
Route::put('/users/{id}/passwordReset', [UsuarioController::class, 'updatePassword']);


// Ruta para obtener un post específico
Route::get('/posts/{id}', [PostsController::class, 'show']);

// Ruta para crear un nuevo post
Route::post('/posts', [PostsController::class, 'store']);

// Ruta para actualizar un post
Route::put('/posts/{id}', [PostsController::class, 'update']);

// Ruta para eliminar un post
Route::delete('/posts/{id}', [PostsController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
