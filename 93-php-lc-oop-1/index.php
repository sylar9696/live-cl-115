<?php
class Car
{
    public $engine;
    public $wheels;
    public $color;
    public $brand;

    function __construct($_engine, $_wheels, $_color, $_brand)
    {
        $this->engine = $_engine;
        $this->wheels = $_wheels;
        $this->color = $_color;
        $this->brand = $_brand;
    }

    public function setBrand($nomeBrand)
    {
        return $this->brand = $nomeBrand;
    }

    public function getBrand()
    {
        return $this->brand;
    }
}

class Address
{
    public $street;
    public $city;
    public $postcode;

    public function __construct( $city, $postcode)
    {
        // $this->street = $street;
        $this->city = $city;
        $this->postcode = $postcode;
    }
}

class User 
{
   public $nome;
   public $eta;
   public $address;

   function __construct($_nome, $_eta, Address $_address)
   {
      $this->nome = $_nome;
      $this->eta = $_eta;
      $this->address = $_address;
   }
}


$fordFiesta = new Car('Benzina', 4, 'nera', 'Ford');
$fiatPunto = new Car('Benzina', 4, 'binaca', 'Fiat');

$filippo = new User( 'Filippo', 30, new Address('pavia', 27010) );




var_dump($fordFiesta, $fiatPunto, $filippo);

// $fordFiesta->engine = 'Benzina'; 
// $fordFiesta->wheels = '4';
// $fordFiesta->color = 'Nera';
// $fordFiesta->brand = 'Ford';

// var_dump($fordFiesta);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OOP 1</title>
</head>

<body>

    <?php
    // $fordFiesta->brand = 'Fiat';
    // $fordFiesta->setBrand('Ford');
    // echo $fordFiesta->brand;
    // echo $fordFiesta->getBrand();

    // $fiatPunto->setBrand('Fiat');
    // echo $fiatPunto->getBrand();

    // var_dump($fordFiesta, $fiatPunto);

    echo $filippo->address?->street;
    ?>

</body>

</html>