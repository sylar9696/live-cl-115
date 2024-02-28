<?php
/**
 * Leggere una lista di todo richiedendola al nostro "server". Permettere di inviare un nuovo item.
 * BONUS: gestire la persistenza tramite un file json e file_get_contents/file_put_contents
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>json-encode json-decode</title>

    <!-- bootstrap css -->
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous'/>

</head>
<body>
    <!-- contenitore applicazione vue "app" -->
    <div id="app">
        <h1>
            {{ title }}
        </h1>

        <main>
            <label for="" class="mb-3">crea todo nella lista</label>
            <input 
                type="text" 
                @keyup.enter="updateList" 
                v-model="todoItem"
                class="form-control"
                class="mb-3">
            <ul>
                <li v-for="(element,index) in todoList" :key="index">
                    {{ element }}
                </li>
            </ul>
        </main>
    </div>

    <!-- inseriamo vue da cdn -->
    <script src="https://unpkg.com/vue@3"></script>
    <!-- inseriamo axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- bootstrap js -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js' integrity='sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg==' crossorigin='anonymous'></script>
    <!-- inseriamo js  -->
    <script src="./js/main.js"></script>
</body>
</html>