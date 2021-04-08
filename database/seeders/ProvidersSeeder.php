<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProvidersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	DB::table('health_providers')->insert([[
		'name' => 'Core Healt Care',
		'city' => 'Cleveland',
		'state' => 'Ohio',
		'speciality' => 'Cardiology',
	],[
		'name' => 'Metro Health Care',
		'city' => 'Chicago',
		'state' => 'Illinios',
		'speciality' => 'Pediatry',
	],[
		'name' => 'CVS Pharma',
		'city' => 'Boulder',
		'state' => 'Colorado',
		'speciality' => 'Oncology',
	]]);
    }
}
