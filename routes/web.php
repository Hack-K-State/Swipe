<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
use App\Models\Event;
use App\Models\Card;

$router->get('/', function () use ($router) {

    $event = Event::find(1);
    $card = Card::find(1);

    $event->cards()->detach(2);
    $card->events()->detach(2);

    return "done.";
});
