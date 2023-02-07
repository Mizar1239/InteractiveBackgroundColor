"use strict"

var textDiv = document.getElementById("background-color-desc");
var bodyColor = defineColor(window.getComputedStyle(document.body).backgroundColor);
let button = document.getElementById("change");



button.addEventListener("click", changeRandColor);
textDiv.innerHTML = "Background Color : " + bodyColor;







function defineColor(color){
    
    switch (color) {
        case "rgb(255, 0, 0)":
          color = "red";
          break;
        case "rgb(0, 255, 0)":
          color = "green";
          break;
        case "rgb(0, 0, 255)":
          color = "blue";
          break;
        default:
          color = "unknown";
      }

      return color;

}

function randomizeColor(){
    let colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"]
    var randomNumber = Math.floor(Math.random() * 3);
    return colors[randomNumber];
}

function changeRandColor(){
    document.body.style.backgroundColor = randomizeColor();
    bodyColor = defineColor(window.getComputedStyle(document.body).backgroundColor);
    textDiv.innerHTML = "Background Color : " + bodyColor;
}