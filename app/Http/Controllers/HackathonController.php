<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Hackathon;

class HackathonController extends Controller
{
    /**
     * Create a Hackathon 
     *
     * @param sring name
     * @param string city 
     * @param string state 
     * @return App/Model/Hackathon 
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string'
        ]);

        $hackathon = Hackathon::create([
            'name' => $request->input('name'),
            'city' => $request->input('city'),
            'state' => $request->input('state')
        ]);

        return $hackathon;
    }

    /**
     * Get all Hackathons
     *
     * @return [App/Model/Hackathons]
     */
    public function list()
    {
        return Hackathon::with('events.cards')->get();
    }
}
