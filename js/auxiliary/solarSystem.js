export function solarSystemView(){

var planets = []

function selectPlanet(className){
  planets.push(document.querySelector(className));
}

selectPlanet(".sun");
selectPlanet(".mercury");
selectPlanet(".venus");
selectPlanet(".star");
selectPlanet(".terra");
selectPlanet(".moon");
selectPlanet(".mars");
selectPlanet(".jupiter");
selectPlanet(".saturn");
selectPlanet(".uranus");
selectPlanet(".neptune");

var divs = document.getElementsByTagName("div");
var ringFront = document.querySelector(".ring-front");
var ringBehind = document.querySelector(".ring-behind");


planets.forEach(function(element){
    for(var i = 0; i < divs.length; i++){
        if(divs[i] == element){
            var info = divs[i+1];
        }
    }
     var pos = element.getBoundingClientRect();
     var left = pos.left;
     var top = pos.top;
     if(top > 300) top-=200;
     if(left >= 818) left-=600;
     info.setAttribute("style", `left: ${left+pos.width+50}px; top: ${top-50}px;`)
})

planets.forEach(function(element){
    element.addEventListener("click", function(){
        element.classList.toggle("clicked");

        if(element.className.includes("saturn")){
        ringFront.classList.toggle("unblured");
        ringBehind.classList.toggle("unblured")
    }

        for(var i = 0; i < divs.length; i++)
            if(divs[i] == element)
                var info = divs[i+1];

        info.classList.toggle("invisible");
        info.classList.toggle("fadeIn");
        info.classList.toggle("fadeOut");
    })
})

}