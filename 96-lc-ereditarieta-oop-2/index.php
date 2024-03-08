<?php

    include_once __DIR__ . '/models/User.php';
    include_once __DIR__ . '/models/PremiumUser.php';
    include_once __DIR__ . '/models/Membership.php';

    $user1 = new User( 'Mario', 'Rossi' );

    $user1->setAge(60);
    $user1->setDiscount();

    

    $premiumUser1 = new PremiumUser( 'Luca', 'Verdi', new Membership('platinum', 12.50, '08/03/2024') );

    $premiumUser1->setAge(30);
    $premiumUser1->setDiscount();

    $premiumUser2 = new PremiumUser( 'sara', 'Giallo', new Membership('bronzo', 9.99, '08/03/2024') );

    $premiumUser2->setAge(22);
    $premiumUser2->setDiscount();

    // var_dump($user1, $premiumUser1, $premiumUser2);

    $arrayUtenti = [
        $user1,
        $premiumUser1,
        $premiumUser2
    ];

    var_dump( $arrayUtenti );

?>

<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ereditarietà oop 2</title>

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' integrity='sha512-b2QcS5SsA8tZodcDtGRELiGv5SaKSk1vDHDaQRda0htPYWZ6046lr3kJ5bAAQdpV2mmA/4v0wQF9MyU6/pDIAg==' crossorigin='anonymous' />
</head>

<body>

<h1>
    Ereditarietà
</h1>

<main class="container">
    <div class="row">
        <?php foreach( $arrayUtenti as $element ): ?>
        <div class="col">
            <div class="card <?= ( $element->membership ) ? 'bg-danger' : '' ?>">
                <div class="card-body">
                    <h4 class="card-title">
                        <?= $element->getFullName() ?>
                    </h4>
                    <p class="card-text">
                        Age: <?= $element->getAge() ?>
                        |
                        Discount: <?= $element->getDiscount() ?>
                    </p>
                </div>
            </div>
            
        </div>
        <?php endforeach; ?>
    </div>
</main>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js' integrity='sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg==' crossorigin='anonymous'></script>
</body>

</html>