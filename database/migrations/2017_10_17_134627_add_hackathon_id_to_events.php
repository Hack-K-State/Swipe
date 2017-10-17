<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddHackathonIdToEvents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function(Blueprint $table){
            $table->integer('hackathon_id')->unsigned();
            $table->foreign('hackathon_id')->references('id')->on('hackathons');

            $table->dropColumn('start_date');
            $table->dropColumn('start_time');

            $table->string('start_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function(Blueprint $table){
            $table->dropColumn('hackathon_id');

            $table->string('start_date');
            $table->string('start_time');

            $table->dropColumn('start_at');
        }); 
    }
}
