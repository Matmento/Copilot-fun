/*******************
 ***** SOUNDS ******
 *******************/

//retriew the fart, yell, wee, moan and scream sounds from the dom and play them
/* function playSounds() {
  var fart = document.getElementById("fart");
  var yell = document.getElementById("yell");
  var wee = document.getElementById("wee");
  var moan = document.getElementById("moan");
  var scream = document.getElementById("scream");
  fart.play();
  yell.play();
  wee.play();
  moan.play();
  scream.play();
} */

//getting the fart sound from the dom and playing it
function fart() {
  var fart = document.getElementById("fart");
  fart.play();
}

//getting the yell sound from the dom and playing it
function yell() {
  var yell = document.getElementById("yell");
  yell.play();
}

//getting the wee sound from the dom and playing it
function wee() {
  var wee = document.getElementById("wee");
  wee.play();
}

//getting the moan sound from the dom and playing it
function moan() {
  var moan = document.getElementById("moan");
  moan.play();
}

//getting the scream sound from the dom and playing it
function scream() {
  var scream = document.getElementById("scream");
  scream.play();
}

/** LEGACY CODE **
This audio retrivel method resulted in the audio being out of sync:

function fart() {
  var fart = new Audio("fart.mp3");
  fart.play();
}

*/

/***************** 
     ANIMATIONS 
 ******************/

//activate the shake animation when the silly button is clicked
function shake() {
  document.getElementById("silly").classList.add("shake");
  setTimeout(function () {
    document.getElementById("silly").classList.remove("shake");
  }, 1500);
}

//activate the tremble animation when the angry button is clicked
function tremble() {
  document.getElementById("angry").classList.add("tremble");
  setTimeout(function () {
    document.getElementById("angry").classList.remove("tremble");
  }, 1000);
}

//activate the bounce animation when the happy button is clicked
function bounce() {
  document.getElementById("happy").classList.add("bounce");
  setTimeout(function () {
    document.getElementById("happy").classList.remove("bounce");
  }, 1250);
}

//activate the flatten animation when the sad button is clicked
function flatten() {
  document.getElementById("sad").classList.add("flatten");
  setTimeout(function () {
    document.getElementById("sad").classList.remove("flatten");
  }, 1000);
}

//activate the hide animation when the scared button is clicked
function hide() {
  document.getElementById("scared").classList.add("hide");
  setTimeout(function () {
    document.getElementById("scared").classList.remove("hide");
  }, 1500);
}

/****************************** 
  EVENTLISTNERS for ANIMATIONS
 ******************************/

//add an event listener to the silly button that calls the shake function
document.getElementById("silly").addEventListener("click", shake);

//add an event listener to the angry button that calls the shake function
document.getElementById("angry").addEventListener("click", tremble);

//add an event listener to the happy button that calls the bounce function
document.getElementById("happy").addEventListener("click", bounce);

//add an event listener to the sad button that calls the flatten function
document.getElementById("sad").addEventListener("click", flatten);

//add an event listener to the scared button that calls the hide function
document.getElementById("scared").addEventListener("click", hide);

/*************************** 
  EVENTLISTNERS for SOUNDS
 ***************************/

//call the fart function when the silly button is clicked
document.getElementById("silly").addEventListener("click", fart);

//call the yell function when the angry button is clicked
document.getElementById("angry").addEventListener("click", yell);

//call the bounce function when the happy button is clicked
document.getElementById("happy").addEventListener("click", wee);

//call the moan function when the sad button is clicked
document.getElementById("sad").addEventListener("click", moan);

//call the scream function when the scared button is clicked
document.getElementById("scared").addEventListener("click", scream);
