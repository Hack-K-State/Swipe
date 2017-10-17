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
            'name' => 'required' 
        ]);

        return Event::findOrFail($request->input('id'));
    }
}
