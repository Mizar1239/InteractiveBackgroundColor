"use strict"

var textDiv = document.getElementById("background-color-desc");
var rgbdiv = document.getElementById("rgb-desc");
var bodyColor = defineColor(window.getComputedStyle(document.body).backgroundColor);
let changebutton = document.getElementById("change");
let showrgbbutton = document.getElementById("show-rgb");
var showrgbflag = 0;




changebutton.addEventListener("click", changeRandColor);
showrgbbutton.addEventListener("click", showRGB);
textDiv.innerHTML = "Background Color : <div id =\"colorText\" style=\"display: inline-block; color:" + bodyColor + "\">" + bodyColor + "</div>";
rgbdiv.innerHTML = "RGB Value: rgb(255, 0, 0)";




function showRGB(){
  if(showrgbflag == 0){
    rgbdiv.style.display = "inline-block";
    showrgbflag++;
  }
  else{
    rgbdiv.style.display = "none";
    showrgbflag--;
  }
}

function defineColor(color) {

  rgbdiv.innerHTML = "RGB Value: " + color;

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
    case "rgb(252, 186, 3)":
      color = "yellow";
      break;
    case "rgb(252, 3, 231)":
      color = "pink";
      break;
    default:
      color = "unknown";
  }
  
  return color;

}

function randomizeColor() {
  let colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(252, 186, 3)", "rgb(252, 3, 231)"]
  var randomNumber = Math.floor(Math.random() * 5);
  return colors[randomNumber];
}

function changeRandColor() {
  document.body.style.backgroundColor = randomizeColor();
  bodyColor = defineColor(window.getComputedStyle(document.body).backgroundColor);
  textDiv.innerHTML = "Background Color : <div id =\"colorText\" style=\"display: inline-block; color:" + bodyColor + "\">" + bodyColor + "</div>";
}