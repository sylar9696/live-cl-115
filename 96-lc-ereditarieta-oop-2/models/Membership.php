<?php

class Membership{
    private $name;
    private $price;
    private $date;

    public function __construct( string $_name, float $_price, string $_date )
    {
        $this->name = $_name;
        $this->price = $_price;
        $this->date = $_date;
    }
}


?>