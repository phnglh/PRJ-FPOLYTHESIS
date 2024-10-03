<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- <meta name="csrf-token" content="{{ csrf_token() }}"> --}}
        <title>PRJ FPOLYTHESIS</title>
        <!-- <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" /> -->
        <!-- <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" /> -->
        @viteReactRefresh
        @vite(['resources/ts/index.tsx'])
    </head>
    <body">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="app"></div>
    </body>
</html>
