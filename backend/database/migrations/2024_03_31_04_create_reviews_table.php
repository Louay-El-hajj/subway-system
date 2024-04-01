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
Schema::create('reviews', function (Blueprint $table) {
    $table->id();
     $table->unsignedBigInteger('user_id');
    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
    
     $table->unsignedBigInteger('ticket_id');
    $table->foreign('ticket_id')->references('id')->on('tickets')->onDelete('cascade')->onUpdate('cascade');
    // $table->foreignId('user_id')->constrained()->onDelete('cascade');
    // $table->foreignId('ticket_id')->constrained()->onDelete('cascade'); 
    $table->smallInteger('rating')->default(0);
    $table->text('review_text')->nullable();
    $table->timestamps();
});

        }
 
        /**
        * Reverse the migrations.
        */
        public function down(): void
        {
            Schema::dropIfExists('reviews');
        }
    };