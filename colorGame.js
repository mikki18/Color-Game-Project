var numSquares = 6;
var colorsArray = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i =0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");		
			modeButtons[1].classList.remove("selected");		
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		})
	}

}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to check color
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			changeColor( clickedColor );
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = clickedColor;
		}
		else{
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
			}
		})
	}
    
}

function reset(){
	colorsArray = generateRandomColors(numSquares);
	pickedColor = pickColor(colorsArray);
	displayColor.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		if(colorsArray[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colorsArray[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
}

resetButton.addEventListener("click",function(){
 	reset();
})


function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(colorArr){
  var i = Math.floor( Math.random() * colorArr.length );
  return colorArr[i];
}

function generateRandomColors(numSquares){
	//create an array
	var arr = [];
	//run numSquares number of times the loop
    for(var i = 0; i < numSquares; i++){
    	arr.push( getRandomRgb() );
    }
    //return array
    return arr;
}
function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}



