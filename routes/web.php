<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::redirect('/', 'prototype/login');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    Route::get('/subscription', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
