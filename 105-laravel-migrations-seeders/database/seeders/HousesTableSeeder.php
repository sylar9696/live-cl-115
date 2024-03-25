<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


use Faker\Generator as Faker;
use App\Models\House;

class HousesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        for( $i = 0; $i < 10; $i++ ){
            $newHouse = new House();

             $newHouse->reference = $faker->bothify('??-########');
             $newHouse->address = $faker->streetAddress();
             $newHouse->postal_code = $faker->postcode();
             $newHouse->city = $faker->city();
             $newHouse->state = $faker->state();
             $newHouse->square_meters = $faker->numberBetween(30, 1000);
             $newHouse->rooms = $faker->numberBetween(2, 30);
             $newHouse->bathrooms = $faker->numberBetween(1, 6);
             $newHouse->type = $faker->randomElement(['monolocale', 'bilocale', 'appartamento', 'bifamigliare', 'attico', 'casa indipendente', 'villetta']);
             $newHouse->description = $faker->paragraphs(5, true);
             $newHouse->price = $faker->randomFloat(2, 20000, 5000000);
             $newHouse->is_available = $faker->randomElement([true, false]);
            //  $newHouse->energy_rating = $faker->randomElement(['a++', 'a', 'b', 'c', 'd']);

            $newHouse->save();
        }
    }
}
