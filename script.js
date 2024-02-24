let boxes = document.querySelectorAll(".box");
let turnX = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX === true) {
      box.innerText = "0";
      turnX = false;
    } else {
      box.innerText = "X";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (let pattern of winPattern) {
    let p1 = boxes[pattern[0]].innerText;
    let p2 = boxes[pattern[1]].innerText;
    let p3 = boxes[pattern[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showWinner(p1);
        disBtn();
      }
    }
  }
};

const showWinner = (winner) => {
  let scr = (document.querySelector(
    ".score"
  ).innerText = `player (${winner}) is the winner !`);
};

const disBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
