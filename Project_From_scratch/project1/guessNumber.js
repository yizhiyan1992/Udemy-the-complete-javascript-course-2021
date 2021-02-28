//initialize start conditions
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let curScore = 20;
let highScore = 0;
let correctBool = false;
const checkBtn = document.querySelector(".check");
const scoreIndicator = document.getElementById("current-score");
const informationBoader = document.getElementById("InfoBoader");
const resetBtn = document.getElementById("reset-btn");

//functions
const checkNumber = function () {
  if (curScore <= 0 || correctBool) return;
  let inputNumber = document.getElementById("input-box").value;
  inputNumber = Number(inputNumber);

  if (inputNumber === 0) {
    informationBoader.textContent = "must enter a valid number!";
    return;
  }
  if (inputNumber === secretNumber) {
    correctBool = true;
    informationBoader.style.color = "burlywood";
    informationBoader.textContent = "Correct!";
    document.getElementById("hidden-number").textContent = secretNumber;
    highScore = Math.max(highScore, curScore);
    document.getElementById("high-score").textContent = highScore;
    document.querySelector("body").style.backgroundColor = "rgb(235, 148, 238)";
  } else {
    informationBoader.textContent =
      inputNumber < secretNumber ? "Too Low" : "Too High";
    informationBoader.style.color =
      inputNumber < secretNumber ? "rgb(121, 209, 121)" : "red";
    curScore -= 1;
    scoreIndicator.textContent = curScore;
    if (curScore === 0) {
      informationBoader.textContent = "Game Over!";
    }
  }
};

const reset = function () {
  informationBoader.textContent = "Start guessing...";
  curScore = 20;
  document.getElementById("hidden-number").textContent = "?";
  document.getElementById("input-box").value = "";
  scoreIndicator.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  correctBool = false;
  informationBoader.style.color = "white";
  document.querySelector("body").style.backgroundColor = "rgb(54, 52, 52)";
};
//operations
checkBtn.addEventListener("click", checkNumber);
resetBtn.addEventListener("click", reset);
