import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
             // Modifichiamo il percorso del css usando sass
            'resources/scss/app.scss',
            'resources/js/app.js'
            ],
            refresh: true,
        }),
    ],
    //Aggiungiamo un alias per la cartella /resources/
    resolve: {
        alias: {
            '~resources': '/resources/',
            
        }
    },
});
