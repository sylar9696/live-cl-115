<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        // dd($posts);

        return view('pages.dashboard.posts.index', compact('posts'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.dashboard.posts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        // dd($request);
        $val_data = $request->validated();

        //generiamo lo slug in modo dinamico
        $slug = Post::generateSlug($request->title);
        $val_data['slug'] = $slug;

        //dd( $request );


        //gestione immagine
        if( $request->hasFile('cover_image') ){

            $path = Storage::disk('public')->put( 'post_images', $request->cover_image );


            $val_data['cover_image'] = $path;
            //dd($val_data, $path);
        }


        $new_post = Post::create($val_data);

        return redirect()->route('dashboard.posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return view( 'pages.dashboard.posts.show', compact('post') );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        return view('pages.dashboard.posts.edit', compact('post') );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        $val_data = $request->validated();

        //generiamo lo slug in modo dinamico
        $slug = Post::generateSlug($request->title);
        $val_data['slug'] = $slug;

        if( $request->hasFile('cover_image') ){
            if( $post->cover_image ){
                Storage::delete($post->cover_image);
            }

            $path = Storage::disk('public')->put('post_images', $request->cover_image);

            $val_data['cover_image'] = $path;
        }

        $post->update( $val_data );

        return redirect()->route('dashboard.posts.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {

        //cancellazione del file nella cartella storage
        if( $post->cover_image ){
            Storage::delete($post->cover_image);
        }

        //cancellazione del record del DB
        $post->delete();

        return redirect()->route('dashboard.posts.index');

    }
}
