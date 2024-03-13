<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Home\WelcomeController as WelcomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {

//     $products = config('db.pasta');

//     return view('pages.welcome', compact('products'));
// })->name('homePage');



Route::get('/', [WelcomeController::class, 'index'])->name('homePage');


Route::get('/about-me', [WelcomeController::class, 'aboutFun'])->name('aboutPage');

Route::get('/blog', [WelcomeController::class, 'blogFun'])->name('blogPage');
