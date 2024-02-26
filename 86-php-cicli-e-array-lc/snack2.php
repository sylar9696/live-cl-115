<?php
// Creare un array con 15 numeri casuali, tenendo conto che l’array non dovrà contenere lo stesso numero più di una volta

$numbers = [];

while( count( $numbers ) < 15 ){
    $numberRand = rand( 1, 100 );

    if( !in_array( $numberRand, $numbers ) ){
        $numbers[] = $numberRand;
    }
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>snack 2 php</title>

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous' />
</head>

<body>

    <ol>
        <?php foreach( $numbers as $element ): ?>
            <li>
                <?= $element ?>
            </li>
        <?php endforeach; ?>
    </ol>

</body>

</html>