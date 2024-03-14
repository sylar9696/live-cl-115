<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function index(){

        //1. recuparare i records del DB
        $books = Book::All(); //SELECT * FROM BOOKS

        $queryCondizionata = Book::where('title', '=', 'titolo primo libbro')->first();


        //2. Passare i records alla view
        return view( 'pages.welcome', compact( 'books','queryCondizionata' ) );
    }
}
