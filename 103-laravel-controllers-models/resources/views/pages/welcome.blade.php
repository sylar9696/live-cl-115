@extends('layouts.app')

@section('main')
    <main>
        <h1>Library</h1>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia doloribus laudantium id ipsa. Suscipit nostrum
            amet odio expedita molestias sit ducimus, inventore, illo ipsam cum magnam, id odit magni ullam.</p>

        <ul>

            {{-- {{ dd($queryCondizionata ) }} --}}

            @foreach ($users as $item)
                <li>
                    {{ $item->name }}
                </li>
            @endforeach
        </ul>

    </main>
@endsection
