<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JWTMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
   public function handle(Request $request, Closure $next)
{
    try {
       
        if (!auth()->check()) {
            throw new \Exception('Token is invalid');
        }
    } catch (\Exception $e) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    return $next($request);
}

}