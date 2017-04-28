//end screen counters
var incorrectCounter = 0;
var correctCounter = 0;

// counter to keep track which question to generate in array
var currentQuestion = 0;
var answerTracker = 0;

// test array for dynamically creating the questions
var questions = [
	{	question:"Is this working?",
		choices: ["yes", "no", "maybe so"],
		answer: "yes" },
	
	{ question: "Are you sure?",
		choices: ["I mean hopefully", "no its not working"],
		answer: "I mean hopefully" },

  { question: "This is the last question",
    choices: ["I mean hopefully", "this quiz is short and sucks"],
    answer: "I mean hopefully" }  
]

// when the page loads it will run the first question/choices
$(window).on('load', function() {
  game();
  timer();
  $("#nextOne").on("click", function() {
    nextQuestion();
  })
}) 

var game = function() {
// empties the div first before populating it with the new question  
  $('#title').html('');
  if (currentQuestion === questions.length) {
    $("#nextOne").attr("disabled", true);
    $("#nextOne").text("Refresh to try again!");
    endGame();
  } else {
  // generating the question  
    $('#title').html("<h2 class='h2'>" + questions[currentQuestion].question) + "<h2>";
  // for loop to generate all the choices that will be put inside a label and in a class of a button  
    for (i=0; i<questions[currentQuestion].choices.length; i++) {
        var label = $('<label class="btn btn-warning">')
          .text(questions[currentQuestion].choices[i])
          .attr("value", questions[currentQuestion].choices[i])
          .attr("id", "label" + [i] + "");
  // making the buttons radio so only one can be displayed, name has to be the same        
        var display = $('<input type="radio" name="options" autocomplete="off" >')
        .attr("id", "choices" + [i] + "");
  // appending the label to the div and the button to the label
       $('#questions').append(label); 
       $("#label" + [i] + "").append(display); 
    }
  // adds 1 to the currentQuestion so that it can move to the next part of the array   
    currentQuestion++;
  }
};
  
// once the next button is clicked it will compare the user which is the radio button that has the class .active
// and compare it to the answer in the array
// answerTracker starts at zero so that the answer is lined up with the question array, because of the currentQuestion++ at the end of the game()
var nextQuestion = function() {
  var currentAnswer = $(".active").attr("value");
// checking to see if the answers are matching up  
  console.log(questions[answerTracker].answer);
    if (currentAnswer.toString() === questions[answerTracker].answer) {
      // console.log("correct!");
      $('#title').html("CORRECT!");
      $('#questions').html("");
      correctCounter++;
    } else {
      // console.log("incorrect!");
      $('#title').html("INCORRECT!");
      $('#questions').html("");
      incorrectCounter++;
    }
  game();
  answerTracker++;  
}  

// displays end game score
var endGame = function() {
  $('#title').html("GAME OVER!");
  $('#questions').html("<p>Corrent Answers: " + correctCounter +
      "<br />Incorrect Answers: " + incorrectCounter + "</p>");
}

// used to keep track of the time 
var timer = function () {
// if the time runs out then the game will end and display the current score up to that point 
  if ( time = 0) {
    endGame();
    $("#nextOne").attr("disabled", true);
    $("#nextOne").text("Refresh to try again!");
  }
}