<?php
// Inserire tante parole all’interno di un array e controllare che la parola passata dall’utente ci sia nell’array.

$arrayParole = ['boolean', 'corso', 'studente'];
$parola = $_POST['parola'] ?? 'nobody';


$studentData = [
    "name" => "John",
    "lastname" => "Doe"
];

$animals = [
    "mammals" => ["cow", "pig", "horse", "dog"],
    "birds" => ["duck", "chicken"]
];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php condizioni</title>
</head>

<body>
    <?php


    if (in_array($parola, $arrayParole)) {
        echo 'la parola esiste nel array';
    } else {
        echo 'la parola NON esiste nel array';
    }

    ?>

    <form action="index.php" method="post">
        <input type="text" name="parola">

        <button type="submit">invia</button>
    </form>

    <?php
    foreach ($studentData as $key => $value) {
        if ($key == 'lastname') {
            echo $value;
        } else {
            echo substr($value, 0, 1);
        }
    }


    
    
    foreach ($animals as $animalClass) {
       foreach($animalClass as $animal) {
           echo '<p>' . $animal . '</p>';
       }
    }
    
    ?>

</body>

</html>