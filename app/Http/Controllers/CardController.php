<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Card;
use App\Models\Event;

class CardController extends Controller
{
    /**
     * Create a Card 
     *
     * @param string owner 
     * @param string identifier 
     * @return App/Model/Card 
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'owner' => 'required|string',
            'identifier' => 'required|string|unique:cards',
        ]);

        $card = Card::create([
            'owner' => $request->input('owner'),
            'identifier' => $request->input('identifier')
        ]);

        return $card;
    }

    /** 
     * Create a Card Swiipe for an Event
     *
     * @return ???
     */
    public function createSwipe($cardID, $eventID) {
        $card = Card::where('identifier', $cardID)->firstOrFail();
        $event = Event::findOrFail($eventID); 

        $card->events()->attach($eventID, ['created_at' => \Carbon\Carbon::now()]);

        return response(200); 
    }
}
