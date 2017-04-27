//end screen counters
var incorrectCounter = 0;
var correctCounter = 0;

// counter to keep track which question to generate in array
var currentQuestion = 0;
// current saved answer to be pushed to array
var savedAnswers = [];

// test array for dynamically creating the questions
var questions = [
	{	question:"Is this working?",
		choices: ["yes", "no", "maybe so"],
		answer: "yes" },
	
	{ 	question: "Are you sure?",
		choices: ["I mean hopefully", "no its not working"],
		answer: "I mean hopefully" }
]

// when the page loads it will run the first question/choices
$(window).on('load', function() {
  game();
  // timer();
  $("#nextOne").on("click", function() {
    nextQuestion();
  })
}) 

var game = function() {
  $('#title').html("<h2 class='h2'>" + questions[currentQuestion].question) + "<h2>";
  for (i=0; i<questions[currentQuestion].choices.length; i++) {
      var label = $('<label class="btn btn-warning">')
        .text(questions[currentQuestion].choices[i])
        .attr("value", questions[currentQuestion].choices[i])
        .attr("id", "label" + [i] + "");
      var display = $('<input type="radio" name="options" autocomplete="off" >')
      .attr("id", "choices" + [i] + "");
     $('#questions').append(label); 
     $("#label" + [i] + "").append(display); 
  }
  var button = $('<button>')
    .addClass("btn btn-danger")
    .attr("id", "nextOne")
    .text("Next Question");
    $('#next').append(button);  
  currentQuestion++;
};
  
var timer = function () {
  console.log("this should not be working!");
  
}

var nextQuestion = function() {
  var currentAnswer = $(".active").attr("value");
  var i = 0;
    if (currentAnswer.toString() == questions[i].answer) {
      alert("CORRECT!");
      $('#title').html("");
      $('#questions').html("");
      $('#next').html("");
      game();
      correctCounter++;
      i++;
    } else {
      alert("INCORRECT!");
      $('#title').html("");
      $('#questions').html("");
      $('#next').html("");
      game();
      incorrectCounter++;
      i++;
    }
  if (currentQuestion === questions.length) {
    endGame();
  }
}  

var endGame = function() {
  console.log("game over!");
  
}

