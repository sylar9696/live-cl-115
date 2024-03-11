<?php
class Person{

    public function calcAge( $anno ){

        $now = date('Y');
    
        if( !is_numeric( $anno ) ){
            throw new InvalidArgumentException('Argomento non valido inserire un numero');
        } else if( $anno > $now || $anno < 1000 ){
            throw new RangeException( "Inserire un valore compreso tra l'anno 1000 e l'anno corrente");
        } else {
            return "La tua età è: $now - $anno";
        }
    }
}

?>