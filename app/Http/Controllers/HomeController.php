<?php

namespace App\Http\Controllers;

use App\Models\Data;
use App\Models\Kelas;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $kelas = Kelas::get();
        $data = Data::get();
        return inertia('Home/Index', compact('kelas', 'data'));
    }
}
