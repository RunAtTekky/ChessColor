const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
const n = files.length;
let whiteCorrect = false;
let prevCoordinate = "aa";
let correctScore = 0;
let incorrectScore = 0;

function getNewCoordinate() {
  const file = Math.floor(Math.random() * n);
  const rank = Math.floor(Math.random() * n);

  if ((file + rank) & 1) whiteCorrect = true;
  else whiteCorrect = false;

  const coordinate = files[file] + ranks[rank];
  if (coordinate === prevCoordinate) getNewCoordinate();
  prevCoordinate = coordinate;
  const square = document.getElementById("square");
  square.innerHTML = coordinate;
}

function whiteClickHandler() {
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

getNewCoordinate();
