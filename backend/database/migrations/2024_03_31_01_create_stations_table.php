<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stations', function (Blueprint $table) {
            $table->id();
            $table->string('station_name')->unique();
            $table->string('station_location')->unique();
            $table->enum('service_status', array('available', 'not-available'));
            $table->string('station_img');
            $table->timestamps();
        });

        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->time('departure_time');
            $table->time('arrival_time');
            $table->integer('price');
            $table->unsignedBigInteger("from_station");
            $table->foreign("from_station")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("to_station");
            $table->foreign("to_station")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stations');
    }
};