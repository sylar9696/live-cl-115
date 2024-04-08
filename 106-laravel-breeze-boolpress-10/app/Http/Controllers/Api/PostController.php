<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){

        // $posts = Post::all();

        //eager loading
        // $posts = Post::with( 'category', 'tags' )->get();

        //eager loading + pagination
        $posts = Post::with( 'category', 'tags' )->paginate(3);

        // return response()->json([
        //     'name' => 'Abigail',
        //     'state' => 'California'
        // ]);

        return response()->json([
            'success' => true,
            'posts' => $posts
        ]);
    }


    public function show( $slug ){
        $post = Post::with('category', 'tags')->where( 'slug', $slug )->first();

        if( $post ){
            return response()->json([
                'success' => true,
                'post' => $post
            ]);
        } else {
            return response()->json([
                'success' => false,
                'error' => "Non c'è il Post che hai cercato"
            ]);
        }

    }

}
