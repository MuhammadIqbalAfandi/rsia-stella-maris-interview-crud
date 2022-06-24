<?php

namespace Database\Seeders;

use Database\Seeders\DataSeeder;
use Database\Seeders\KelasSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DataSeeder::class,
            KelasSeeder::class
        ]);
    }
}
