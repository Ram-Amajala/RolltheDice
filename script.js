var i = Math.random();
i = Math.floor(i * 6) + 1;
var im1 = "dice" + i + ".png";
var ima1 = "images/" + im1;
document.querySelector(".img1").setAttribute("src", ima1); //or (ima1)

var j = Math.random();
j = Math.floor(j * 6) + 1;
var im2 = "dice" + j + ".png";
var ima2 = "images/" + im2;
document.querySelector(".img2").setAttribute("src", ima2);

if (i === j) {
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
  document.querySelector("h1").classList.add("font");
} else if (i > j) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  document.querySelector("h1").classList.add("font");
} else if (i < j) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  document.querySelector("h1").classList.add("font");
}
