@extends('layouts.app')

@section('title', 'La Molisana | Home')

@section('content')
<main class="container">
    <h2>COntenuto del main della pagina di benvenuto</h2>
    <div class="row">
        @foreach ($products as $element)

        {{-- {{ dd($element) }} --}}

        <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="{{ $element['src'] }}" alt="Title" />
                <div class="card-body">
                    <h4 class="card-title">{{ $element['titolo'] }}</h4>
                    {{-- <p class="card-text">{{ $element['descrizione'] }}</p> --}}
                </div>
            </div>
        </div>
        @endforeach
    </div>
</main>
@endsection
