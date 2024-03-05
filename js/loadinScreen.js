let isLoaded = false;
let k = 1;

const loadDiv = document.querySelector(".loading-screen");
const StartDiv = document.querySelector(".start-div");

let isItStarted = false;

function myLoop() {
  setTimeout(function () {
    console.log("a");
    if (document.readyState === "complete") {
      isLoaded = true;
      loadDiv.classList.add("hide");

      window.addEventListener(
        "click",
        (e) => {
          StartDiv.style = "animation: LoadIn 2s";
          setTimeout(function () {
            isItStarted = true;
            StartDiv.style = "display: none";
          }, 2000);
        },
        { once: true }
      );
    }
    k++;
    if (isLoaded) {
      return;
    }
    if (k < 10) {
      myLoop();
    }
  }, 5000);
}

myLoop();
