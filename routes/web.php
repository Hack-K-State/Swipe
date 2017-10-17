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

$router->get('/', function () {
    return view('main');
});


$router->group(['prefix' => 'api/v1'], function () use ($router) {

    /*
    |----------------------------------------------------------------------
    | EventController 
    |--------------------------------------------------------------------------
    */

    $router->post('/event', 'EventController@create');
    $router->get('/event', 'EventController@list');

    /*
    |----------------------------------------------------------------------
    | CardController 
    |--------------------------------------------------------------------------
    */

    $router->post('/card', 'CardController@create');
    $router->post('/card/{cardID}/event/{eventID}', 'CardController@createSwipe');

    /*
    |----------------------------------------------------------------------
    | HackathonController 
    |--------------------------------------------------------------------------
    */

    $router->post('/hackathon', 'HackathonController@create');
    $router->get('/hackathon', 'HackathonController@list');


});


