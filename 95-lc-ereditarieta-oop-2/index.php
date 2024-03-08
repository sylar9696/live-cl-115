<?php

    class Veicolo{
        public $marca = "Fiat";
        protected $modello = "500";
        private $anno = 2020;

        public function stampaInfo(){
            echo "Marca" . $this->marca . "\n"; //accesso consentito agli attributi
            echo "Modello" . $this->modello . "\n"; //accesso consentito agli attributi
            echo "Anno" . $this->anno . "\n"; //accesso consentito agli attributi sono all'interno della classe
        }

        public function getMarca(){
            return $this->marca;
        }

        public function getModello(){
            return $this->modello;
        }

        public function getAnno(){
            return $this->anno;
        }

        public function setMarca($_marca){
            return $this->marca = $_marca;
        }

        public function setModello($_modello){
            return $this->modello = $_modello;
        }

        protected function setAnno($_anno){
            return $this->anno = $_anno;
        }

    }

    class Auto extends Veicolo{
        //info ereditate
        // public $marca = "Fiat";
        // protected $modello = "500";
        // private $anno = 2020;

        //metodi ereditati
        // public function stampaInfo(){
        //     echo "Marca" . $this->marca . "\n"; //accesso consentito agli attributi
        //     echo "Modello" . $this->modello . "\n"; //accesso consentito agli attributi
        //     echo "Anno" . $this->anno . "\n"; //accesso consentito agli attributi sono all'interno della classe
        // }

        // public function getMarca(){
        //     return $this->marca;
        // }

        // public function getModello(){
        //     return $this->modello;
        // }

        // public function getAnno(){
        //     return $this->anno;
        // }

        // public function setMarca($_marca){
        //     return $this->marca = $_marca;
        // }

        // public function setModello($_modello){
        //     return $this->modello = $_modello;
        // }

        // public function setAnno($_anno){
        //     return $this->anno = $_anno;
        // }

        public function cambiaModello($nuovoModello){
            $this->modello = $nuovoModello; //accesso consentito perchè protected
        }

        public function modificaAnno($nuovoAnno){
            $this->setAnno($nuovoAnno);
        }

    }

    $veicolo1 = new Veicolo(); 

    var_dump( $veicolo1 );

    //modifico i valori
    $veicolo1->marca = "Ford";
    // $veicolo1->modello = "fiesta"; //ottengo un errore di visibilità protected
    //$veicolo1->anno = 2024; //ottengo un errore di visibilità private
    
    
    var_dump( $veicolo1 );


    echo $veicolo1->getMarca() . "<br/>";
    echo $veicolo1->getModello() . "<br/>";
    echo $veicolo1->getAnno() . "<br/>";

    //modifica con i setter
    $veicolo1->setMarca("Ford");
    $veicolo1->setModello("Fiesta");
    $veicolo1->setAnno(2024);

    var_dump( $veicolo1 );
    echo $veicolo1->getMarca() . "<br/>";
    echo $veicolo1->getModello() . "<br/>";
    echo $veicolo1->getAnno() . "<br/>";


    $auto1 = new Auto();

    $auto1->cambiaModello("Dacia");
    $auto1->modificaAnno(2030);

    var_dump($auto1, $veicolo1);


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

    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js' integrity='sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg==' crossorigin='anonymous'></script>
</body>

</html>