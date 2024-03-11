<?php

require_once __DIR__ . "/../traits/weightable.php";

class Person{

    public $name;
    public $lastname;
    use Weightable;

    public function __construct($name, $lastname)
    {
        $this->name = $name;
        $this->lastname = $lastname;
    }
}

?>