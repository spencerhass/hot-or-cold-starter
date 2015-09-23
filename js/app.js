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
    console.log("randomNumber is" +randomNumber);
 };

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
    setFeedback ("You guessed it");
    $("#userGuess").val(randomNumber + "!");
    wonGame=true;
  } else if (guess<=5){
    $("#feedback").text ("You're getting really hot");
    return true;
  } else if (guess <=10){
    $("#feedback").text ("You're getting hot");
    return true;
  } else if (guess >=10 && guess <=20) {
    $("#feedback").text ("You're getting warm");
    return true;
  } else if (guess>=20 && guess<=30) {
    $("#feedback").text ("You're getting cold");
    return true;
  } else if (guess>=30 && guess <=40) {
    $("#feedback").text ("You're getting very cold");
    return true;
  }else {
    $("#feedback").text ("You're getting freezing");
    return true;
  }
};


  $("form").submit(function(event){
  event.preventDefault();
  if (wonGame === false) {
    newGuess = +$("#userGuess").val();
    /*--- Check if valid number --*/
    if (newGuess % 1 !== 0 || newGuess > 100 || newGuess < 0) {
      alert("Not a valid number");
      return(false);
    } else {
      event.preventDefault();
      $(".guessBox").append("<li>" +newGuess+ "</li>");
      clearGuess();
      guessCount++;
      guessCountDisplay();
      checkGuess();
    }
  } else {
    AddFeedback("You already won! Start a new game.");
  }

  });


$(".new").click(function(){
    generateNewNumber(); 
    clearGuess();
    guessCount = 0;
    wonGame = false;
    removePastGuesses();
    guessCountDisplay();
    setFeedback("Make your guess!");
  });
});


