// Main elements
const element = document.querySelector("#element"),
  elementWidth = parseInt(getComputedStyle(element).width),
  containerWidth = parseInt(getComputedStyle(document.querySelector("#monkey-block")).width),
  monkey = document.querySelector(".monkey");

let direction = "right",
  timerId;

// Move logic
function moveLeft() {
  element.style.left = getLeft(element) - 3 + "px";
}

function moveRight() {
  element.style.left = getLeft(element) + 3 + "px";
}

function getLeft(e) {
  return parseInt(getComputedStyle(e).left);
}

function move() {
  if (getLeft(element) >= containerWidth - elementWidth) {
    direction = "left";
    element.classList.remove("mirror");
  }
  if (getLeft(element) <= 0) {
    direction = "right";
    element.classList.add("mirror");
  }

  if (direction == "right") {
    moveRight();
  }
  else {
    moveLeft();
  }
}

// Start action
const startBtn = document.querySelector("#startBtn");

startBtn.addEventListener("click", function () {
  if (!timerId) {
    timerId = setInterval(move, 50);
  }
});

// Speed x2 action
const increaseBtn = document.querySelector("#increaseBtn");

increaseBtn.addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = setInterval(move, 25);
  }
});

// Slow action 
const descreaseBtn = document.querySelector("#decreaseBtn");

descreaseBtn.addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = setInterval(move, 50);
  }
});

// Stop action
const stopBtn = document.querySelector("#stopBtn");

stopBtn.addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
});

// Grow Up action 
const growUpBtn = document.querySelector("#growupBtn");

growUpBtn.addEventListener("click", function () {
  monkey.classList.remove("little");
  monkey.classList.toggle("growup");
});

// Little action
const littleBtn = document.querySelector("#littleBtn");

littleBtn.addEventListener("click", function () {
  monkey.classList.remove("growup");
  monkey.classList.toggle("little");
});

// Jump action
function jump() {
  if (monkey.classList != "jump") {
    monkey.classList.toggle("jump");
  }
  setTimeout(function () {
    monkey.classList.remove("jump")
  }, 300)
}

const jumpBtn = document.querySelector("#jumpBtn");
jumpBtn.addEventListener("click", jump);
