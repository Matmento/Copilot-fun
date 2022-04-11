/****************************** 
          ANIMATIONS
 ******************************/

//add an event listener to the silly button that calls the shake function, that adds and then after 1500 ms removes shake class
document.getElementById("silly").addEventListener("click", function shake() {
  document.getElementById("silly").classList.add("shake");
  setTimeout(function () {
    document.getElementById("silly").classList.remove("shake");
  }, 1500);
});

//add an event listener to the angry button that calls the tremble function, that adds and then after 1250 ms removes tremble class
document.getElementById("angry").addEventListener("click", function () {
  document.getElementById("angry").classList.add("tremble");
  setTimeout(function () {
    document.getElementById("angry").classList.remove("tremble");
  }, 1250);
});

//add an event listener to the happy button that calls the bounce function, that adds and then after 1250 ms removes bounce class
document.getElementById("happy").addEventListener("click", function () {
  document.getElementById("happy").classList.add("bounce");
  setTimeout(function () {
    document.getElementById("happy").classList.remove("bounce");
  }, 1250);
});

//add an event listener to the sad button that calls the flatten function, that adds and then after 1500 ms removes flatten class
document.getElementById("sad").addEventListener("click", function () {
  document.getElementById("sad").classList.add("flatten");
  setTimeout(function () {
    document.getElementById("sad").classList.remove("flatten");
  }, 1000);
});

//add an event listener to the scared button that calls the hide function, that adds and then after 1500 ms removes hide class
document.getElementById("scared").addEventListener("click", function () {
  document.getElementById("scared").classList.add("hide");
  setTimeout(function () {
    document.getElementById("scared").classList.remove("hide");
  }, 1500);
});

/*************************** 
           SOUNDS
 ***************************/

//call the fart function when the silly button is clicked
document.getElementById("silly").addEventListener("click", function () {
  var fart = document.getElementById("fart");
  fart.play();
});

//call the yell function when the angry button is clicked
document.getElementById("angry").addEventListener("click", function () {
  var yell = document.getElementById("yell");
  yell.play();
});

//call the wee function when the happy button is clicked
document.getElementById("happy").addEventListener("click", function () {
  var wee = document.getElementById("wee");
  wee.play();
});

//call the moan function when the sad button is clicked
document.getElementById("sad").addEventListener("click", function () {
  var moan = document.getElementById("moan");
  moan.play();
});

//call the scream function when the scared button is clicked
document.getElementById("scared").addEventListener("click", function () {
  var scream = document.getElementById("scream");
  scream.play();
});
