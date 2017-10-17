<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = [
        'name',
        'location',
        'start_at',
        'duration',
        'hackathon_id'
    ];

    public function cards()
    {
        return $this->belongsToMany('App\Models\Card');
    }
}
