<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HealthProvider extends Model
{
	use HasFactory;
	protected $fillable = ['name','city','state','speciality'];
	protected $table = 'health_providers';
}
