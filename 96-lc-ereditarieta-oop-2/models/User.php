<?php
    class User{
        public $name;
        public $lastName;

        private $age;
        protected $discount;

        function __construct( $_name = '', $_lastname = '' )
        {
            $this->name = $_name;
            $this->lastName = $_lastname;
        }

        public function getFullName(){
            return $this->name . " " . $this->lastName;
        }

        public function getAge(){
            return $this->age;
        }

        public function setAge($newAge){
            $this->age = $newAge;
        }

        public function setDiscount(){
            if( $this->age > 50 ){
                $this->discount = 30;
            } else {
                $this->discount = 0;
            }
        }

        public function getDiscount(){
            return $this->discount . "%";
        }
    }
?>