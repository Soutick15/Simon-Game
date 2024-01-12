let gameSeq = [];
let userSeq = [];
let btns = ["red", "blue", "yellow", "green"];
var started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});


// Level Up after every round
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Current Level-${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`#${randColor}`);
  gameSeq.push(randColor);
  sound(randColor);
  gameFlash(randBtn);
  console.log(gameSeq);
}


// Button flash
function gameFlash(flash) {
  flash.classList.add("pressed");
  setTimeout(function () {
    flash.classList.remove("pressed");
  }, 500);
}

// user click Flash
function userFlash(btn) {
  btn.classList.add("userPressed");
  setTimeout(function () {
    btn.classList.remove("userPressed");
  }, 500);
}



function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over!<br> Your score is-<b>${level}</b> <br> Press any key to start`;
    sound("wrong");
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#011F3F";
    }, 150);
    reset();
  }
}

// Detecting Players button Click
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener('click', function () {


    userFlash(this);


    let userColor = this.getAttribute("id");
    sound(userColor);
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
  });
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
// make sound
function sound(inp){
  let audio = new Audio (`sounds/${inp}.mp3`);
  audio.play();
}

function playEntireSequence(){
  for (let i=0;i<=gameSeq.length;i++){
        
        }
}