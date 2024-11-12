var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

// var count=0
// var text = document.getElementById("text");
// var p = document.createElement("p");
// var pText = document.createTextNode(`Player 'X' ${count} Turn`);
// p.appendChild(pText);
// text.appendChild(p);

flag = true;

function getEle(ele) {
  if (flag) {
    ele.innerHTML = "X";
    ele.classList.add("disable");
    ele.classList.add("color_X");
    flag = false;
  } else {
    ele.innerHTML = "O";
    ele.classList.add("disable");
    ele.classList.add("color_O");
    flag = true;
  }

  if (
    (box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") ||
    (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") ||
    (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") ||
    (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") ||
    (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") ||
    (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") ||
    (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") ||
    (box7.innerHTML == "X" && box5.innerHTML == "X" && box3.innerHTML == "X")
  ) {
    alert("Player X wins");

    window.location.href = "./congrats.html";
  } else if (
    (box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") ||
    (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") ||
    (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") ||
    (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") ||
    (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") ||
    (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") ||
    (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") ||
    (box7.innerHTML == "O" && box5.innerHTML == "O" && box3.innerHTML == "O")
  ) {
    alert("Player O wins");
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";
    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";
    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";
    window.location.href = "./congrats.html";
  }
}

var btn = document.getElementById("btn");
function newPlay() {
  window.location.href = "./index.html";
}
function laterPlay() {
  alert("Thanks for visit!");
}
