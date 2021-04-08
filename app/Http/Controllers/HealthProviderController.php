<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HealthProvider;

class HealthProviderController extends Controller
{
	public function index(){
		$providers = HealthProvider::all();
		return $providers->toJson();
	}
}
