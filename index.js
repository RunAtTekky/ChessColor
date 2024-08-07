const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
const n = files.length;
let whiteCorrect = false;
let prevCoordinate = "aa";
let correctScore = 0;
let incorrectScore = 0;
let questions = 0;
let seconds = 0;
let gameOver = false;

function reset() {
  whiteCorrect = false;
  correctScore = 0;
  incorrectScore = 0;
  questions = 0;
  seconds = 0;
  gameOver = false;

  document.getElementById("white").style.opacity = "1";
  document.getElementById("black").style.opacity = "1";

  document.getElementById("correct").innerHTML = correctScore;
  document.getElementById("incorrect").innerHTML = incorrectScore;

  document.getElementById("timer").innerHTML = seconds;

  getNewCoordinate();
  timer();
}

function timer() {
  let timer = setInterval(() => {
    if (!gameOver) {
      document.getElementById("timer").innerHTML = ++seconds;
    } else clearInterval(timer);
  }, 1000);
}

function getNewCoordinate() {
  if (questions === 10) {
    return declareResults();
  }
  const file = Math.floor(Math.random() * n);
  const rank = Math.floor(Math.random() * n);

  if ((file + rank) & 1) whiteCorrect = true;
  else whiteCorrect = false;

  const coordinate = files[file] + ranks[rank];
  if (coordinate === prevCoordinate) return getNewCoordinate();
  prevCoordinate = coordinate;
  const square = document.getElementById("square");
  square.innerHTML = coordinate;
  questions++;
}

function whiteClickHandler() {
  if (gameOver) return;
  const white = document.getElementById("white");
  let color = "red";
  incorrectScore++;
  if (whiteCorrect) {
    color = "green";
    incorrectScore--;
    correctScore++;
  }
  setTimeout(() => {
    white.style.backgroundColor = color;
    setTimeout(() => {
      white.style.backgroundColor = "#FFDFD6";
    }, 250);
  }, 10);
  document.getElementById("correct").innerHTML = correctScore;
  document.getElementById("incorrect").innerHTML = incorrectScore;
  getNewCoordinate();
}

function blackClickHandler() {
  if (gameOver) return;
  const black = document.getElementById("black");
  let color = "red";
  incorrectScore++;
  if (!whiteCorrect) {
    color = "green";
    incorrectScore--;
    correctScore++;
  }
  setTimeout(() => {
    black.style.backgroundColor = color;
    setTimeout(() => {
      black.style.backgroundColor = "black";
    }, 250);
  }, 10);
  document.getElementById("correct").innerHTML = correctScore;
  document.getElementById("incorrect").innerHTML = incorrectScore;
  getNewCoordinate();
}

function declareResults() {
  gameOver = true;
  timer();
  document.getElementById("white").style.opacity = "0";
  document.getElementById("black").style.opacity = "0";
}

getNewCoordinate();
timer();
