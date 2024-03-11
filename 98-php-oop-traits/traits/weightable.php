<?php

trait Weightable{
    protected $weight;

    public function getWeight(){
        return $this->weight;
    }

    public function setWeight($weight, $unit){
        $this->weight = $weight . $unit;
    }
}

?>