/************************************** 
       ANIMATION and SOUND
 *************************************/

//https://stackoverflow.com/questions/12953928/immediate-play-sound-on-button-click-in-html-page

//puts all the sound files in a object
var audio = {
  fart: new Audio("Audio/fart.mp3"),
  gasp: new Audio("Audio/gasp.mp3"),
  moan: new Audio("Audio/moan.mp3"),
  wee: new Audio("Audio/wee.mp3"),
  yell: new Audio("Audio/yell.mp3"),
};
//loads all the sounds and logs it to the console
audio.fart.load(console.log("fart loaded"));
audio.gasp.load(console.log("gasp loaded"));
audio.moan.load(console.log("moan loaded"));
audio.wee.load(console.log("wee loaded"));
audio.yell.load(console.log("yell loaded"));

/* SILLY */
//Adds an event listener to the button calling the function that:
document.getElementById("silly").addEventListener("click", function silly() {
  //
  //- gets the sound variable from the audio object and plays it
  audio.fart.play();

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
//using console.time to debug audio sync issues
document.getElementById("angry").addEventListener("click", function angry() {
  console.time("sound start time");
  console.time("animation start time");
  audio.yell.play();
  console.timeEnd("sound start time");

  const angry = document.getElementById("angry");
  angry.classList.add("tremble");
  console.timeEnd("animation start time");
  setTimeout(function () {
    angry.classList.remove("tremble");
  }, 1250);
});

/* HAPPY */
document.getElementById("happy").addEventListener("click", function happy() {
  audio.wee.play();

  const happy = document.getElementById("happy");
  happy.classList.add("bounce");
  setTimeout(function () {
    happy.classList.remove("bounce");
  }, 1000);
});

/* SAD */
document.getElementById("sad").addEventListener("click", function sad() {
  audio.moan.play();

  const sad = document.getElementById("sad");
  sad.classList.add("flatten");
  setTimeout(function () {
    sad.classList.remove("flatten");
  }, 1200);
});

/* SCARED */
document.getElementById("scared").addEventListener("click", function scared() {
  audio.gasp.play();

  const scared = document.getElementById("scared");
  scared.classList.add("hide");
  setTimeout(function () {
    scared.classList.remove("hide");
  }, 1500);
});
