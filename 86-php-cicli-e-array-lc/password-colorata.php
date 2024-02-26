<?php
/*
Tramite un form inviare una stringa al server.
Se la variabile password passata in GET è uguale a “Boolean” stampare una stringa verde, altrimenti stampare una stringa rossa.
*/

// $class;
// $password = '';
// $class = '';

    if( empty( $_POST['password'] ) ){
        echo 'non hai inserito una password';
    }  elseif( $_POST['password'] == 'Boolean' ){
        $password = $_POST['password'];
        $class = 'text-success';
    } else {
        $password = $_POST['password'];
        $class = 'text-danger';
    };

    // var_dump($password, $class);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>password colorata</title>

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous' />

</head>
<body>
    <form action="password-colorata.php" method="POST">
        <div class="mb-3">
            <label for="password" class="form-label">password</label>
            <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Inserisci una password"
            />
        </div>

        <button type="submit" class="btn btn-primary">invia</button>
        
    </form>

    <?php if ( isset( $_POST['password'] ) && !empty($_POST['password'] ) ) { ?>

    <h1 class="<?php echo $class ?>">
        <?php
            echo $password;
        ?>
    </h1>

    <?php } ?>
</body>
</html>