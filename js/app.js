$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });

 var guessCount = 0;
 var newGuess;
 var randomNumber;
 var guess;
 var wonGame= false;
 

 

 var generateNumber= function(){
    randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log("randomNumber is " +randomNumber);
 };
generateNumber();
 var guessCountDisplay = function(){
  $("#count").text(guessCount);
 };

 var setFeedback = function(feedback) {
  $("#feedback").text(feedback);
 };

 var clearGuess = function() {
  $("#userGuess").val("").focus();
 };

 var removePastGuesses = function () {
  $("ul.guessBox li").remove();
 };

 var checkGuess = function() {
  guess = (Math.abs(randomNumber - newGuess));
  if (guess === 0) {
   $("#feedback").text("You guessed it");
    $("#userGuess").val(randomNumber + "!");
    wonGame=true;
  } else if (guess<=5){
    $("#feedback").text("You're getting really hot");
  } else if (guess <=10){
    $("#feedback").text("You're getting hot");
  } else if (guess <=20) {
    $("#feedback").text("You're getting warm");
  } else if (guess<=30) {
    $("#feedback").text("You're getting cold");
  } else if (guess <=40) {
    $("#feedback").text("You're getting very cold");
  }else {
    $("#feedback").text("You're getting freezing");
  }
};


  $("form").submit(function(event){
  event.preventDefault();
  if (wonGame === false) {
    newGuess = $("#userGuess").val();
    /*--- Check if valid number --*/
    if (newGuess % 1 !== 0 || newGuess > 100 || newGuess < 0) {
      alert("Not a valid number");
      return false;
    } else {
      $(".guessBox").append("<li>" +newGuess+ "</li>");
      clearGuess();
      guessCount++;
      guessCountDisplay();
      checkGuess();
    }
  } else {
    $("#feedback").text("You already won! Start a new game.");
  }

  });


$(".new").click(function(){
    generateNumber(); 
    clearGuess();
    guessCount = 0;
    wonGame = false;
    removePastGuesses();
    guessCountDisplay();
    setFeedback("Make your guess!");
  });
});


