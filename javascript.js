//load fart.mp3 on page load
window.onload = function () {
  var audio = new Audio("fart.mp3");
  audio.play();
};

//make a shake animation when the button is clicked
function shake() {
  document.getElementById("fart").classList.add("shake");
  setTimeout(function () {
    document.getElementById("fart").classList.remove("shake");
  }, 1000);
}
//call the fart function when the button is clicked
document.getElementById("fart").addEventListener("click", fart);

//add an event listener to the button that calls the shake function
document.getElementById("fart").addEventListener("click", shake);

//sad button
function sad() {
  var sad = new Audio("sad.mp3");
  sad.play();
}

//happy button
function happy() {
  var happy = new Audio("happy.mp3");
  happy.play();
}
