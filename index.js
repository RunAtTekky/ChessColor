const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8];
const n = files.length;
let whiteCorrect = false;

function getNewCoordinate() {
  const file = Math.floor(Math.random() * n);
  const rank = Math.floor(Math.random() * n);

  if ((file + rank) & 1) whiteCorrect = true;
  else whiteCorrect = false;

  const coordinate = files[file] + ranks[rank];
  const square = document.getElementById("square");
  square.innerHTML = coordinate;
}

function whiteClickHandler() {
  const choice = document.getElementById("choice");
  let color = "red";
  if (whiteCorrect) {
    color = "green";
  }
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 250);
  }, 10);
  getNewCoordinate();
}

function blackClickHandler() {
  const choice = document.getElementById("choice");
  let color = "red";
  if (!whiteCorrect) {
    color = "green";
  }
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    setTimeout(() => {
      document.body.style.backgroundColor = "white";
    }, 250);
  }, 10);
  getNewCoordinate();
}

getNewCoordinate();
