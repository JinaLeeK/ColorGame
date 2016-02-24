var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // mode buttons event listeners
    setUpModeButtons();
    setUpSquares();

    resetButton.addEventListener("click", function() {
      reset();
    });

    reset();

}

function setUpModeButtons() {
  for (var i=0; i<modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons.forEach(function(arr) {
        arr.className = '';
      })
      this.className += 'selected';
      numSquares = this.textContent === "Easy" ? 3:6

      reset();
    })
  }
}

function setUpSquares() {
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
}


function reset() {
  colors = generateRandomColors(numSquares);
  // colors = mode? generateRandomColors(3) : generateRandomColors(6);
  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "NewColor";
  messageDisplay.textContent = "";

  h1.style.background = "steelblue";

  for (var i=0; i<squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
}



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
  var arr = []

  for (var i=0; i<num; i++) {
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
