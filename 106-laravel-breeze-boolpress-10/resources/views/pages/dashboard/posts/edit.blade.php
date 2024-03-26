@extends('layouts.app')

@section('content')
    <main class="container py-3">

        <h1>Modifica il post</h1>

        <form action=" {{ route('dashboard.posts.update', $post->slug ) }} " method="POST">
            @csrf
            @method('PUT')

            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control
                        @error('title')
                            is-invalid
                        @enderror"
                    name="title"
                    id="title"
                    value="{{ old( 'title', $post->title ) }}"
                />
                @error('title')
                    <div class="alert alert-danger mt-3">
                        {{ $message }}
                    </div>
                @enderror
            </div>

            <div class="mb-3">
                <label for="content" class="form-label">Content</label>
                <textarea class="form-control" name="content" id="content" rows="3">{{ old( 'content', $post->content ) }}</textarea>
            </div>

            <button type="submit" class="btn btn-primary">Crea</button>



        </form>

    </main>
@endsection
