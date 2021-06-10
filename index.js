
var randomNo = Math.floor(Math.random() * 6 + 1);
var randomIng = "dice" + randomNo + ".png";
var random = "images/" + randomIng;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", random);

var randomNo2 = Math.floor(Math.random() * 6 + 1);
var randomIng2 = "dice" + randomNo2 + ".png";
var random2 = "images/" + randomIng2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", random2);

if (randomNo > randomNo2) {
  document.querySelector("h1").innerHTML = "Player 1 Win!";
} else if (randomNo2 > randomNo) {
    document.querySelector("h1").innerHTML = "Player 2 Win!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
