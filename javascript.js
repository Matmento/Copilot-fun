/************************************** 
       ANIMATIONS and SOUNDS
 *************************************/

//put fart.mp3 in a variable
var fart = new Audio("Audio/fart.mp3");

/* SILLY */
//Adds an event listener to the button calling the function that:
document.getElementById("silly").addEventListener("click", function silly() {
  // - makes a variable for getting the audio element by ID

  // - uses the variable to call the play method on the audio
  fart.play();

  // - makes a variable for getting the button by ID
  const silly = document.getElementById("silly");

  // - uses the variable to add a class to the button
  silly.classList.add("shake");

  // - sets a timer which executes a function after a set amount of time
  setTimeout(function () {
    // - removes the class from the button after the timer has finished
    silly.classList.remove("shake");
  }, 1500);
});

/* ANGRY */
document.getElementById("angry").addEventListener("click", function angry() {
  const yell = document.getElementById("yell");
  yell.play();

  const angry = document.getElementById("angry");
  angry.classList.add("tremble");
  setTimeout(function () {
    angry.classList.remove("tremble");
  }, 1250);
});

/* HAPPY */
document.getElementById("happy").addEventListener("click", function happy() {
  const wee = document.getElementById("wee");
  wee.play();

  const happy = document.getElementById("happy");
  happy.classList.add("bounce");
  setTimeout(function () {
    happy.classList.remove("bounce");
  }, 1000);
});

/* SAD */
document.getElementById("sad").addEventListener("click", function sad() {
  const moan = document.getElementById("moan");
  moan.play();

  const sad = document.getElementById("sad");
  sad.classList.add("flatten");
  setTimeout(function () {
    sad.classList.remove("flatten");
  }, 1200);
});

/* SCARED */
document.getElementById("scared").addEventListener("click", function scared() {
  const gasp = document.getElementById("gasp");
  gasp.play();

  const scared = document.getElementById("scared");
  scared.classList.add("hide");
  setTimeout(function () {
    scared.classList.remove("hide");
  }, 1500);
});
