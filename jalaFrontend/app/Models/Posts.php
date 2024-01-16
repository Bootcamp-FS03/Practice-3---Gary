<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'text', 'image_url',
    ];

    // Relación muchos a uno con el usuario
    public function user()
    {
        return $this->belongsTo(Usuario::class);
    }
}
