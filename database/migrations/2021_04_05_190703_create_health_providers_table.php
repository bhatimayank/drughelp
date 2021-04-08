<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHealthProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('health_providers', function (Blueprint $table) {
		$table->id();
		$table->string('name')->nullable();
		$table->string('city')->nullable();
		$table->string('state')->nullable();
		$table->string('speciality')->nullable();
		$table->softDeletes();
            	$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('health_providers');
    }
}
