let element = document.querySelector("#element");
let elementWidth = parseInt(getComputedStyle(element).width);
let containerWidth = parseInt(getComputedStyle(document.querySelector("#monkey-block")).width);

let monkey = document.querySelector(".monkey");

let direction = "right";

let timerId;

let body = document.querySelector("body");

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

document.querySelector("#startBtn").addEventListener("click", function () {
  if (!timerId) {
    timerId = setInterval(move, 50);
  }
});

document.querySelector("#increaseBtn").addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = setInterval(move, 25);
  }
});

document.querySelector("#decreaseBtn").addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = setInterval(move, 50);
  }
});

document.querySelector("#stopBtn").addEventListener("click", function () {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
});

document.querySelector("#growupBtn").addEventListener("click", function () {
  monkey.classList.remove("little");
  monkey.classList.add("growup");
});

document.querySelector("#littleBtn").addEventListener("click", function () {
  monkey.classList.remove("growup");
  monkey.classList.add("little");
});

document.querySelector("#jumpBtn").addEventListener("click", function jump() {
  if (monkey.classList != "jump") {
    monkey.classList.toggle("jump");
  }
  setTimeout(function () {
    monkey.classList.remove("jump")
  }, 300)
});

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    if (monkey.classList != "jump") {
      monkey.classList.add("jump");
      setTimeout(function () {
        monkey.classList.remove("jump");
      }, 300)
    }  
  }
}


