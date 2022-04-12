/************************************** 
       ANIMATIONS and SOUNDS
 *************************************/

/* SILLY */
/* Add an event listener to the silly button that:
- Calls the shake function, that adds and then after 1500 ms removes the shake class. 
- And that plays the fart sound. */
document.getElementById("silly").addEventListener("click", function () {
  document.getElementById("silly").classList.add("shake");
  setTimeout(function () {
    document.getElementById("silly").classList.remove("shake");
  }, 1500);
  document.getElementById("fart").play();
});

/* ANGRY */
document.getElementById("angry").addEventListener("click", function () {
  document.getElementById("angry").classList.add("tremble");
  setTimeout(function () {
    document.getElementById("angry").classList.remove("tremble");
  }, 1250);
  document.getElementById("yell").play();
});

/* HAPPY */
document.getElementById("happy").addEventListener("click", function () {
  document.getElementById("happy").classList.add("bounce");
  setTimeout(function () {
    document.getElementById("happy").classList.remove("bounce");
  }, 1250);
  document.getElementById("wee").play();
});

/* SAD */
document.getElementById("sad").addEventListener("click", function () {
  document.getElementById("sad").classList.add("flatten");
  setTimeout(function () {
    document.getElementById("sad").classList.remove("flatten");
  }, 1200);
  document.getElementById("moan").play();
});

/* SCARED */
document.getElementById("scared").addEventListener("click", function () {
  document.getElementById("scared").classList.add("hide");
  setTimeout(function () {
    document.getElementById("scared").classList.remove("hide");
  }, 1500);
  document.getElementById("scream").play();
});
