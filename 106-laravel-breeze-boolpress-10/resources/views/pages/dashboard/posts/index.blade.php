@extends('layouts.app')

@section('content')
    <main class="container py-3">
        <h1>Lista dei posts</h1>

        <a class="btn btn-primary" href=" {{ route('dashboard.posts.create') }} ">Create</a>

        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Slug</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($posts as $item)
                    <tr class="">
                        <td>{{ $item->id }}</td>
                        <td>{{ $item->title }}</td>
                        <td>{{ $item->content }}</td>
                        <td>{{ $item->slug }}</td>
                        <td>
                            <a class="btn btn-primary" href=" {{ route('dashboard.posts.edit', $item->slug ) }} ">
                                Modifica
                            </a>

                            <form method="POST"
                                action=" {{ route( 'dashboard.posts.destroy', $item->slug )}} ">

                                @csrf
                                @method('DELETE')

                                <button type="submit" class="btn btn-danger">Delete</button>

                            </form>
                        </td>
                    </tr>
                    @endforeach

                </tbody>
            </table>
        </div>


    </main>
@endsection
