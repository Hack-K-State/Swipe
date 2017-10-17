<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Event;

class EventController extends Controller
{
    /**
     * Create an event 
     *
     * @param sring name
     * @param string location
     * @param string start_date
     * @param string start_time
     * @param int duration (in seconds)
     * @return App/Model/Event 
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'location' => 'required|string',
            'start_at' => 'required|string',
            'hackathon_id' => 'required|integer',
            'duration' => 'required|integer'
        ]);

        $event = Event::create([
            'name' => $request->input('name'),
            'location' => $request->input('location'),
            'start_at' => $request->input('start_at'),
            'hackathon_id' => $request->input('hackathon_id'),
            'duration' => $request->input('duration') 
        ]);

        return $event;
    }

    /**
     * Get all Events
     *
     * @return [App/Model/Event]
     */
    public function list(){
        return Event::all();
    }
}
