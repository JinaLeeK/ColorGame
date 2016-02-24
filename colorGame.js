var colors = [];// var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var isEasy = false;

easyBtn.addEventListener("click", function() {
  if (!isEasy) {
      isEasy = true;
      easyBtn.className += 'selected';
      hardBtn.className = '';

      reset(isEasy);
    }
})

hardBtn.addEventListener("click", function() {
  if (isEasy) {
    isEasy = false;
    easyBtn.className = '' ;
    hardBtn.className += 'selected';

    reset(isEasy);
  }
})

resetButton.addEventListener("click", function() {
  reset(isEasy);
});

function reset(mode) {
  colors = mode? generateRandomColors(3) : generateRandomColors(6);
  pickedColor = pickColor();
  resetButton.textContent = "NewColor";
  messageDisplay.textContent = "";
  colorDisplay.textContent = pickedColor;

  h1.style.background = "#232323";

  for (var i=3; i<squares.length; i++) {
    squares[i].style.background = "#232323"
  }

  for (var i=0; i<colors.length; i++) {
    squares[i].style.background = colors[i];
  }
}

(function initialize() {
  reset(isEasy);

  for (var i=0 ; i<squares.length; i++) {
    squares[i].addEventListener("click", function() {
      // grab color of clicked square
      var clickedColor = this.style.background;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
})();


function changeColors(color) {
  // loop through all squares change each color to match given color
  for (var i=0; i<colors.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = []
  //add num random colors to array
  for (var i=0; i<num; i++) {
    //get random color and push into arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return  "rgb(" + r + ", " + g + ", " + b + ")";
}
