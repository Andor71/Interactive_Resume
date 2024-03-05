const StartDiv = document.querySelector(".start-div");

let isItStarted = false;

// function StartDivAnimation(){
//   console.log("Clicked");
//     StartDiv.style = "animation: LoadIn 2s";
//     setTimeout(function(){
//         isItStarted = true;
//         StartDiv.style = "display: none";
//       }, 2000);
// };

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
