const mainCanvas = document.querySelector(".main-canvas");
const overLay = document.querySelector(".overlay-elements");
const c = mainCanvas.getContext("2d");

mainCanvas.width = window.innerWidth;
mainCanvas.height = window.innerHeight;
const playerOffset = window.innerHeight / 5;
let overLayVelocity = 0;
let overLayVelocitySpeed = 5;
let i = 0;
let playerPosition = 0;
let endPostionX = (mainCanvas.width - 800) / 2;
let playerAnimationEnded = false;

c.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
//Updatin overlay by adding to the left stype attribute over the velocity provided by
//pushing down a or d key.
function overLayUpdate() {
  i = i + overLayVelocity;
  overLay.style.left = +i + "px";
}

const player = new Spirte({
  position: {
    x: mainCanvas.width / 2,
    y: mainCanvas.height / 2 + playerOffset,
  },
});

//Bonfire , centered to the center
const bonFire = new Bonfire({
  position: {
    x: 0,
    y: mainCanvas.height / 2 + playerOffset,
  },
  imageSrc: ["./img/character/idle.png", "./img/character/kidleb.png"],
  scale: window.innerHeight * 0.005,
  frameMax: 4,
});

const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};
//Update loop
function animate() {
  //Draw Section START
  //Calling this function everyframe
  window.requestAnimationFrame(animate);
  // Clear Screen
  c.fillStyle = "black";
  c.fillRect(0, 0, mainCanvas.width, mainCanvas.height);

  //BackGround
  parllaxEffectDraw(overLayVelocity);

  //OverlayUpdate
  overLayUpdate();

  //Signs

  //Character
  if (isItStarted) {
    drawSigns();
    bonFire.update();
  }

  parllaxEffectDrawFront(overLayVelocity);

  //Draw Section END
  overLayVelocity = 0;

  if (isItStarted && playerAnimationEnded) {
    //Chechkinh if one of the buttons is pressed, if playerposition at the start block going left.
    if (keys.a.pressed && !keys.d.pressed) {
      if (playerPosition < overLayVelocity) {
        overLayVelocity = overLayVelocitySpeed;
      }
    }
    if (keys.d.pressed && !keys.a.pressed) {
      if (bonFire.position.x + 50 <= signs[signs.length - 1].position.x) {
        overLayVelocity = -overLayVelocitySpeed;
      }
    }
  }
  //Updateing playerposition by velocity to track progress on the screen.
  playerPosition += overLayVelocity;

  if (overLayVelocity != 0) {
    HideTutorial();
  }

  let atASign = false;
  //Checking if the player hit an element mark, so we can call the given element to show up on the screen.

  for (let i = 0; i < signs.length; i++) {
    if (
      bonFire.position.x >= signs[i].position.x - 100 &&
      bonFire.position.x < signs[i].position.x + 40
    ) {
      isActiveAnElement = true;
      atASign = true;
      if (isActiveAnElement) {
        displayElement(i);
      }
    }
  }

  if (!atASign && isActiveAnElement) {
    hideElement();
  }
  //Starting Animations
  if (isItStarted && !playerAnimationEnded) {
    StartingAnimations();
  }
}

animate();

function StartingAnimations() {
  bonFire.position.x += overLayVelocitySpeed;

  if (bonFire.position.x >= endPostionX) {
    playerAnimationEnded = true;

    ShowTutorial();
  }
}

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "d":
      keys.d.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
  }
});
