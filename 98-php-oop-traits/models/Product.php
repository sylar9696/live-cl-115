<?php

require_once __DIR__ . "/Item.php";
require_once __DIR__ . "/../traits/weightable.php";

class Product extends Item{
    use Weightable;

}