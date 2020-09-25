//index Page
let lady = document.querySelector(".female-hero");
let man = document.querySelector(".male-hero");
let startBtn = document.querySelector(".startBtn");

let ladyBtn = document.querySelector(".female-hero");
ladyBtn.addEventListener("click", chooseLady);
let choosingLady = false;

let manBtn = document.querySelector(".male-hero");
manBtn.addEventListener("click", chooseMan);
let choosingMan = false;

function chooseLady() {
  choosingLady = true;
  if (choosingLady) {
    lady.style.border = "red solid 3px";
    choosingMan = false;
    man.style.border = "none";
  }
}

function chooseMan() {
  choosingMan = true;
  if (choosingMan) {
    man.style.border = "blue solid 3px";
    choosingLady = false;
    lady.style.border = "none";
  }
}

startBtn.addEventListener("click", startGame);

function startGame() {
  location.href = "https://www.google.com";
}

//war page
