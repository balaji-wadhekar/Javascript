let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // for 2 players

// 🎯 Score counters
let oScore = 0;
let xScore = 0;
let drawScore = 0;

// 🎵 Sounds
const clickSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_b27fb64b2e.mp3?filename=pop-94319.mp3");
const winSound = new Audio("https://cdn.pixabay.com/download/audio/2021/08/04/audio_9e7efb7cb7.mp3?filename=success-1-6297.mp3");
const drawSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_1579cf18c3.mp3?filename=error-126627.mp3");

const winptrn = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// Same click logic — just added sound
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    clickSound.play();
    if (turn0) {
      box.innerText = "O";
      box.style.color = "blue";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turn0 = true;
    }
    box.disabled = true;
    checkwiner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Winner is ${winner} 🎉`;
  msgContainer.classList.remove("hide");
  disableBoxes();
  winSound.play();

  // Update scoreboard
  if (winner === "O") {
    oScore++;
    document.getElementById("o-score").innerText = oScore;
  } else if (winner === "X") {
    xScore++;
    document.getElementById("x-score").innerText = xScore;
  }
};

const showDraw = () => {
  msg.innerText = "😅 It's a Draw!";
  msgContainer.classList.remove("hide");
  drawSound.play();
  drawScore++;
  document.getElementById("draw-score").innerText = drawScore;
};

const checkwiner = () => {
  for (let pattern of winptrn) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        return;
      }
    }
  }

  // Check for draw
  let allFilled = Array.from(boxes).every((box) => box.innerText !== "");
  if (allFilled) {
    showDraw();
  }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
