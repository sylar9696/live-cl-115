<?php

$primo_parametro = $_POST["nome"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro php - saluto</title>
</head>
<body>
    
    <h1>pagina di saluto</h1>

    <p>Ciao sono: <?php echo $primo_parametro ?></p>

</body>
</html>