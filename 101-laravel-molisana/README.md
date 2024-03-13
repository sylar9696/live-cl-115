###
 installazione bootstrap 

1. Lanciamo da terminale:
```
npm remove postcss // 1. Rimuoviamo PostCss
npm i // 2. Istalliamo tutti i pacchetti di npm
npm i --save-dev sass // 3. istalliamo sass
```

2. creare la cartella scss in resources con il file app.scss
3. abbiamo poi installato bootstrap
```
npm i --save bootstrap @popperjs/core
```
4. abbiamo compilato il file app.scss con:
```
/*resources/scss/app.scss*/
@import "bootstrap/scss/bootstrap";
```
5. compilato il file app.js
```
import './bootstrap';

import '~resources/scss/app.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

```
6. compilato il file vite.config.js
```
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    //Aggiungiamo un alias per la cartella /resources/
    resolve: {
        alias: {
            '~resources': '/resources/'
        }
    },
});
```
8. compilato il file view della pagina principale con:
```
<head>
    @vite('resources/js/app.js')
</head>
```
9. attiviamo alla fine da terminale: ```npm run dev```

