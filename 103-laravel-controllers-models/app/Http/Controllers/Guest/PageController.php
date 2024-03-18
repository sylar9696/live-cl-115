<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(){

        //1. recuparare i records del DB
        $users = User::All(); //SELECT * FROM BOOKS

        // $queryCondizionata = User::where('title', '=', 'titolo primo user')->first();


        //2. Passare i records alla view
        return view( 'pages.welcome', compact( 'users' ) );
    }
}
