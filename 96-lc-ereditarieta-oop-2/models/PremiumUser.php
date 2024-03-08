<?php

class PremiumUser extends User{
    public $membership;

    public function __construct($_name, $_lastname, Membership $_membership)
    {
        parent::__construct( $_name, $_lastname );
        // $this->name = $_name;
        // $this->lastName = $_lastname;
        $this->membership = $_membership;
    }

    //polimorfismo
    public function setDiscount(){
        if( $this->getAge() > 50 ){
            $this->discount = 40;
        } else {
            $this->discount = 10;
        }
    }
}