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
Schema::create('tickets', function (Blueprint $table) {
    $table->id();
    $table->decimal('price', 8, 2); 
    $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
    $table->foreignId('dep_station_id')->constrained('stations')->onDelete('cascade');
    $table->foreignId('arr_station_id')->constrained('stations')->onDelete('cascade');
    $table->timestamp('date_purchased')->nullable();
    $table->string('arr_date'); 
    $table->string('dep_date');
    $table->enum('ticket_status', ['available', 'booked', 'expired']);
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};