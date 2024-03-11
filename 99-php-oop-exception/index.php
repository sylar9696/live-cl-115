<?php

require __DIR__ . "/models/Person.php";

$person = new Person();

try{
    $age = $person->calcAge('ciao');
    var_dump($age);
} catch( Exception $e ){
    echo $e->getMessage();
    echo $e->xdebug_message;
    var_dump($e);
}

?>