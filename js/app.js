
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

/* creat new game */
 $("new").click(function(event){
 		event.preventDefault();
 		newgame();

 });

 function newGame() {
 	guessFlag=true;
 	guessCount=0;
 	found= false;
 	$("ul#guessList li").remove();
 	setFeedback("Make your Guess!");
 	setCount(guessCount);
 	randomNumber=generateNumber();
 	setFocus();
 	clearText();

 }

 /*Random Number */

 function generatedNumber() {
 	var generatedNumber = Math.floor((Math.random()*100)+1);
	console.log("Generated Random Number = "+ generateNumber);

	return generatedNumber;
 }

 /*focus input box */

 function setFocus() {
 	document.getElementById("userGuess").focus();
 }

function clearText() {
	$('#userGuess').val('');
}

/*Guess Count */

function setCount (count) {
	$('#count').text(guessCount);
}

function getChoice() {
	var userChoice = prompt("Guess the Number", "Your Guess");
	console.log ("User Choice = "+ userChoice);
	return userChoice;
}