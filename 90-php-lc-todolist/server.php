<?php

//recuperiamo i dati dal file di nostro interesse e lo trasformiamo in stringa
$string = file_get_contents("todo-list.json");
//var_dump($string);

//trasformiamo ora la stringa in array associativo
$list = json_decode($string, true);

//var_dump($list);

//elaborazione di filtraggio se ne abbiamo bisogno

if (isset($_POST['todoItem'])) {
    //salvataggio in una variabile del dato dell'input compilato dall'utente
    $todoItemPhp = $_POST['todoItem'];

    //inserimento del dato nella lista json
    array_push($list, $todoItemPhp);

    //aggiorniamo i dati nel file json
    file_put_contents('todo-list.json', json_encode($list));
}


header('Content-Type: application/json');

echo json_encode($list);
