const overlayElements = document.querySelectorAll(".overlay-element-c");
const tutorial = document.querySelector(".tutorial");
let elementsPositionsX = [-300, -500, -700, -900, -1100, -1300, -1500, -1700];

let currentActiveElement = 0;

let isActiveAnElement = false;

let tutorialNeeded = true;

let signs = [];
for (let i = 0; i < elementsPositionsX.length; i++) {
  signs.push(
    new Sign({
      position: {
        x: elementsPositionsX[i] * -3,
        y: window.innerHeight * 0.73,
      },
      imageSrc: "./img/sign.png",
      scale: window.innerHeight * 0.00055,
    })
  );
}

function drawSigns() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].update();
  }
}

function displayElement(index) {
  currentActiveElement = index;
  overlayElements[index].classList.remove("hide");
}

function hideElement() {
  isActiveAnElement = false;
  overlayElements[currentActiveElement].style =
    "animation: SlidOutElements 1.5s";
  setTimeout(function () {
    overlayElements[currentActiveElement].classList.add("hide");
    overlayElements[currentActiveElement].style = "";
  }, 1500);
}

function ShowTutorial() {
  tutorial.classList.remove("hide");
}

function HideTutorial() {
  tutorial.classList.add("hide");
}
