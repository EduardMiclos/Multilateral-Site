<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oswald:300&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/protectTheEarth.css">
<style>
    body{
        margin: 0;
        background-color: gray;
    }
</style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multilateral</title>
</head>

<body>

    <div class="fixed flex items-center flex-col inset-0" id="menu">

        <div class="menu"><img class="title" src="img/default_logo.png" alt="MULTILATERAL">
        <div class="header-container select-none">
            <a href="game" class="game-button "><button class="game-button">Testează-ți cultura generală</button></a>
            <a href="solarSystem" class="game-button"><button class="game-button">Învață Sistemul Solar</button></a>
            <a href="index" class="game-button"><button class="game-button">Înapoi pe pagina principală</button></a>
        </div>
    </div>

        <div class="bg-white max-w-md w-full p-2 text-center rounded-sm">
            <p class="md:text-lf font-semibold mb-2" id="protect-earth">Protejează Pământul!
                <br><small>Apasă pe asteroizi și distruge-i înainte să ajungă la planeta noastră.</small></p>
            <div>
                <button class="bg-green-400	px-10 rounded-sm hover:bg-green-300 outline-none font-semibold w-full" id="play">Joacă!</button>
            </div>
        </div>

    </div>
    <img style="display: none;" src="img/earth.png" id="earth">
    <img style="display: none;" src="img/stars.png" id="stars">

    <div class="fixed text-white ml-5 mt-5 md:text-lg select-none" style="display:none;" id="progress">
         <span>Time:</span> 
         <span id="time">0</span><br>
         <span>Level:</span> 
         <span id="level">1</span>
    </div>

    <canvas>
    </canvas>

<script type="text/javascript" src="js/bundle18012021.js"></script></body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" 
integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" 
crossorigin="anonymous"></script>
<script type="module" src="index.js"></script>
</html>
