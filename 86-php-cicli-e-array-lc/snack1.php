<?php
// Creiamo un array contenente le partite di basket di un’ipotetica tappa del calendario. Ogni array avrà una squadra di casa e una squadra ospite, punti fatti dalla squadra di casa e punti fatti dalla squadra ospite. Stampiamo a schermo tutte le partite con questo schema:

// Olimpia Milano - Cantù | 55-60

$matches = [
    [
        'team1' => 'Acqua S.Bernardo Cantù',
        'team2' => 'Oriora Pistoia',
        'point_team_1' => 70,
        'point_team_2' => 45
    ],
    [
        'team1' => 'Fortitudo Pompea Bologna',
        'team2' => 'Dolomiti Energia Trentino',
        'point_team_1' => 82,
        'point_team_2' => 83
    ],
    [
        'team1' => 'Pallacanestro Trieste',
        'team2' => 'Virtus Roma',
        'point_team_1' => 72,
        'point_team_2' => 33
    ],
    [
        'team1' => 'Openjobmetis Varese',
        'team2' => 'Germani Basket Brescia',
        'point_team_1' => 101,
        'point_team_2' => 99
    ],

];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>snack 1 php</title>

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous' />
</head>

<body>

    <!-- Olimpia Milano - Cantù | 55-60 -->
    <ul>
        <?php foreach ($matches as $element) : ?>

            <?= "<li> {$element['team1']} - {$element['team2']} | {$element['point_team_1']}-{$element['point_team_2']}; </li>" ?>

        <?php endforeach; ?>
    </ul>

</body>

</html>