<?php

namespace App\Http\Controllers;

use App\Task;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Auth;
class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            $data = Task::where('status',1);
            if(Auth::user()->types != 0){
                $data = $data->where('creator_id', Auth::user()->id);
            }
            $data = $data->orderBy('id','DESC')->get(['id','name']);

            return response()->json(['tasks' => $data], 200);
        }
        catch (\Exception $e){
            return response()->json(['tasks' => ''], 404);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $taskObj = new Task();
        $taskObj->name = $request['name'];
        $taskObj->creator_id = Auth::user()->id;

        $responseArr = [];
        $responseArr['responseCode'] = ($taskObj->save()) ? 1 : -1;
        return response()->json($responseArr, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Task $task)
    {
        $responseArr = [];
        $responseArr['responseCode'] = (Task::where('id',$request['id'])->update(['name'=>$request['name']])) ? 1 : -1;
        return response()->json($responseArr, 200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task,Request $request)
    {
        $responseArr = [];
        $responseArr['responseCode'] = (Task::where('id',$request['id'])->update(['status'=>-99])) ? 1 : -1;
        return response()->json($responseArr, 200);
    }

}
