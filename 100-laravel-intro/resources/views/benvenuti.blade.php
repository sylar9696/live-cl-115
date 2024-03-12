@extends('layouts.layout')

@section('title', 'benvenuti | Home')

@section('content')
    <h1>Sono la pagina home</h1>
    <ul>
        @foreach ($data as $element)

            {{-- {{ dd($loop) }} --}}

            <li>
                {{ $element['name'] }}
            </li>
        @endforeach
    </ul>
@endsection



