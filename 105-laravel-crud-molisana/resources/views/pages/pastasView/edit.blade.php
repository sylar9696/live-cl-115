@extends('layouts.app')

@section('title', 'La Molisana | Edit Edit')

@section('main')
    <main>
        <h2>Modifica il prodotto</h2>

        <div class="container">
            <form action="{{ route('pastas.update', $pasta->id) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="mb-3">
                    <label for="title" class="form-label">titolo</label>
                    <input
                        type="text"
                        class="form-control"
                        name="title"
                        id="title"
                        value="{{ old('title') ?? $pasta->title }}">

                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Descrizione</label>
                    <textarea class="form-control" name="description" id="description" rows="10">
                        {!! old('description') ?? $pasta->description !!}
                    </textarea>
                </div>


                <div class="mb-3">
                    <label for="type" class="form-label">tipo</label>
                    <input
                        type="text"
                        class="form-control"
                        name="type"
                        id="type"
                        value="{{ old('type') ?? $pasta->type }}"
                    />
                </div>

                <div class="mb-3">
                    <label for="image" class="form-label">immagine</label>
                    <input
                        type="text"
                        class="form-control"
                        name="image"
                        id="image"
                        value="{{ old('image') ?? $pasta->image }}"
                    />
                </div>

                <div class="mb-3">
                    <label for="cooking_time" class="form-label">Cottura</label>
                    <input
                        type="text"
                        class="form-control"
                        name="cooking_time"
                        id="cooking_time"
                        value="{{ old('cooking_time') ?? $pasta->cooking_time }}"
                    />
                </div>

                <div class="mb-3">
                    <label for="weight" class="form-label">Peso</label>
                    <input
                        type="text"
                        class="form-control"
                        name="weight"
                        id="weight"
                        value="{{ old('weight') ?? $pasta->weight }}"
                    />
                </div>

                <button
                    type="submit"
                    class="btn btn-primary"
                >
                    Crea
                </button>


            </form>
        </div>
    </main>
@endsection
