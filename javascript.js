/************************************** 
       ANIMATIONS and SOUNDS
 *************************************/

/* SILLY */
/* Add an event listener to the silly button that:
- Plays the fart sound from the DOM by ID.
- And that calls the shake function, that adds and then after 1500 ms removes the shake class. */
document.getElementById("silly").addEventListener("click", function () {
  document.getElementById("fart").play();
  document.getElementById("silly").classList.add("shake");
  setTimeout(function () {
    document.getElementById("silly").classList.remove("shake");
  }, 1500);
});

/* ANGRY */
document.getElementById("angry").addEventListener("click", function () {
  document.getElementById("yell").play();
  document.getElementById("angry").classList.add("tremble");
  setTimeout(function () {
    document.getElementById("angry").classList.remove("tremble");
  }, 1250);
});

/* HAPPY */
document.getElementById("happy").addEventListener("click", function () {
  document.getElementById("wee").play();
  document.getElementById("happy").classList.add("bounce");
  setTimeout(function () {
    document.getElementById("happy").classList.remove("bounce");
  }, 1250);
});

/* SAD */
document.getElementById("sad").addEventListener("click", function () {
  document.getElementById("moan").play();
  document.getElementById("sad").classList.add("flatten");
  setTimeout(function () {
    document.getElementById("sad").classList.remove("flatten");
  }, 1200);
});

/* SCARED */
document.getElementById("scared").addEventListener("click", function () {
  document.getElementById("gasp").play();
  document.getElementById("scared").classList.add("hide");
  setTimeout(function () {
    document.getElementById("scared").classList.remove("hide");
  }, 1500);
});
