<?php
// Stampare a schermo, attraverso il foreach, tutti gli elementi passati in GET o POST.

$data = $_POST;

// var_dump($data);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ciclo e array</title>

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous' />

</head>

<body class="p-3">
    <form action="index.php" method="post">
        <div class="row">
            <div class="col-6">
                <div class="mb-3">
                    <label for="nome" class="form-label">Nome</label>
                    <input type="text" name="nome" id="nome" class="form-control" placeholder="Inserisci nome" />
                </div>
            </div>

            <div class="col-6">
                <div class="mb-3">
                    <label for="cognome" class="form-label">Cognome</label>
                    <input type="text" name="cognome" id="cognome" class="form-control" placeholder="Inserisci cognome" />
                </div>
            </div>

            <div class="col-6">
                <div class="mb-3">
                    <label for="eta" class="form-label">Eta</label>
                    <input type="number" name="eta" id="eta" class="form-control" placeholder="Inserisci eta" />
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">invia</button>


        <ul>

            <?php
                foreach ($data as $key => $element) {
                    echo '<p>' . $element . '</p>';
                }
            ?>
        </ul>

    </form>

</body>

</html>