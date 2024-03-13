@extends('layouts.app')

@section('title', 'La Molisana | Blog')

@section('content')
    <main>
        <div class="row">
            @foreach ($posts as $element)
            <div class="col-3">
                <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Text</p>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </main>
@endsection
