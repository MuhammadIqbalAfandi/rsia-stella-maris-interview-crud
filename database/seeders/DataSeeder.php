<?php

namespace Database\Seeders;

use App\Models\Data;
use Illuminate\Database\Seeder;

class DataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Data::create([
            'nama' => 'Muhammad Iqbal Afandi',
            'alamat' => 'Medan, Indonesia'
        ]);
    }
}
