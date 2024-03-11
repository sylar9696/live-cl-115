<?php
    require_once __DIR__ . "/models/Product.php";
    require_once __DIR__ . "/models/DigitalProduct.php";
    require_once __DIR__ . "/models/DigitalConsultancy.php";
    require_once __DIR__ . "/models/Person.php";
    require_once __DIR__ . "/models/User.php";
    require_once __DIR__ . "/models/Item.php";


    $desk = new Product( "standing desk" );
    $desk->setWeight( 200, "kg" );

    var_dump( $desk );

    $ebook = new DigitalProduct( "Html corso intensivo" );
    $ebook->setWeight( 200, "mb" );

    var_dump( $ebook );

    $consultancy = new DigitalConsultancy("web dev consultancy");

    $person = new Person("Mario", "Rossi");
    $person->setWeight( 80, "kg" );

    $user = new User( "Jhon", "Doe" );
    $user->setWeight( 70, "kg" );

?>