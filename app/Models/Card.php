<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    protected $fillable = [
        'owner',
        'identifier'
    ];

    public function events()
    {
        return $this->belongsToMany('App\Models\Event');
    }
}
