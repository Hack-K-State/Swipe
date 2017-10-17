<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Hackathon extends Model
{
    protected $fillable = [
        'name',
        'city',
        'state'
    ];

    public function events() {
        return $this->hasMany('App\Models\Event');
    }
}
