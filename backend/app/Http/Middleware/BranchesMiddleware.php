<?php
namespace App\Http\Middleware;

use Closure;

class BranchesMiddleware
{
    public function handle($request, Closure $next)
    {
        if (!auth()->check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        if (auth()->user()->user_type !== 'manager') {
            return response()->json(['error' => 'Forbidden'], 403);
        }

        return $next($request);
    }
}