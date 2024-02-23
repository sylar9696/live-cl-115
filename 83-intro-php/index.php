<?php
//prima funzione php
$saluto = '<p>Ciao mondo</p>';
$stringa = "lorem ipsum dolor malet ecc....";
$array = ['Michele', 'Fabio', 'Roberto'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>intro php</title>
</head>

<body>
    <form action="saluto.php" method="post">
        <input type="text" name="nome">
        <button type="submit">Invia</button>
    </form>

    <p>

        <?php

        echo str_replace('ipsum', 'xxx', $stringa);

        ?>

        <?php
            var_dump($array);
        ?>

    </p>

</body>

</html>