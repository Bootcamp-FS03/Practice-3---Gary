<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use App\Models\Usuario;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $posts = Posts::all();
        return json_encode($posts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) : JsonResponse
    {


        $post = Posts::create([
            'user_id' => $request->input('user_id'),
            'text' => $request->input('text'),
            'image_url' => $request->input('image_url')
        ]);

        // Devolver el nuevo post en formato JSON
        return response()->json($post, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $post = Posts::find($id);
        return json_encode($post);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $post = Posts::find($id);
        $post->text = $request->input('text');
        $post->image_url = $request->input('image_url');
        $post->save();
        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $id = Posts::find($id);
        $id->delete();
        return response()->json(204);
    }

    public function showByUser(string $id)
    {
        $posts = Posts::where('user_id', $id)->get();
        return json_encode($posts);
    }
}
