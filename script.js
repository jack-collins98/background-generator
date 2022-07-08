var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";

}

button.addEventListener("click", function(
){
    body.style.background = "linear-gradient(to right, " 
    + randomBGColor() //need to call a function here that gives random hex num
    + ", " 
    + randomBGColor()
    + ")";

    css.textContent = body.style.background + ";";
})


function randomBGColor(){
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

randomBGColor();
setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);