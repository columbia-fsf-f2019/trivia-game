// array to store trivia questions
var questions = [
  {
    question: "What house at Hogwarts does Harry belong to?",
    A: "Gryffindor",
    B: "Ravenclaw",
    C: "Slytherin",
    D: "Hufflepuff",
    correctAsw: "A"
  },
  {
    question: "What position does Harry play on his Quidditch team?",
    A: "Bludger",
    B: "Seeker",
    C: "Chaser",
    D: "Keeper",
    correctAsw: "B"
  },
  {
    question: "Who is Fluffy?",
    A: "Hagrid's dragon",
    B: "A three-headed dog",
    C: "Hermione's cat",
    D: "Harry's owl",
    correctAsw: "B"
  }
];
// array store images related to correct answers
var imgUrl = [
  "assets/images/hp_gryffindor.jpg",
  "assets/images/hp_quidditch.png",
  "assets/images/hp_fluffy.png"
];
// set global variables
var maxTime = 20;
var time = maxTime;
var intervalId;
var correctNum = 0;
var wrongNum = 0;
var noNum = 0;
var i = 0; //get first question
// when start button is clicked, clear contents of the page and then render the first question
$("button.start").on("click", function() {
  clear();
  render();
});
// function to clear contents of the page
function clear() {
  $("div").html("");
}
// function to update timer text
function updateTimerText() {
  $(".timer").html(`<h3>Time Remaining ${time} Seconds</h3>`);
}
// function to start countdown
function timer() {
  clearInterval(intervalId);
  updateTimerText();
  intervalId = setInterval(decrement, 1000);
}
// function to decrease time by 1 until time is equals to 0
function decrement() {
  time--;
  updateTimerText();
  // when time equals to 0, clear contents of the page, add text and image related to correct answer
  if (time === 0) {
    clearInterval(intervalId);
    clear();
    var alert = $("<h3>").text("TIME IS UP!");
    $(".reaction").append(alert);
    var idx = questions[i].correctAsw;
    var words = $("<h4>").text(`The Correct Answer was: ${questions[i][idx]}.`);
    $(".reaction").append(words);
    var img = $("<img>").attr("src", imgUrl[i]);
    $(".reaction").append(img);
    // update variable to record number of questions that were not answered
    noNum++;
    // reset timer
    time = maxTime;
    // move onto next question
    i++;
    // wait 5 seconds to render next question
    setTimeout(clear, 5000);
    setTimeout(render, 5000);
  }
}
function render() {
  // when there are still unused questions in the array
  if (i < questions.length) {
    // start timer
    timer();
    // update question stem onto page
    var stem = $("<h3>").text(questions[i].question);
    $(".questions").append(stem);
    // loop through current question object to update choices on to the page
    var choices = ["A", "B", "C", "D"];
    for (var j = 0; j < choices.length; j++) {
      // add class and attribute "type" for future access to the choices
      var choice = $("<button>")
        .addClass("choice")
        .attr("type", choices[j])
        .text(questions[i][choices[j]]);
      var choiceLine = $("<h4>").append(choice);
      $(".questions").append(choiceLine);
    }
    // add click event on to choice buttons
    $("button.choice").on("click", function() {
      var choice = $(this).attr("type");
      // if the correct answer was chosen
      if (choice === questions[i].correctAsw) {
        // reset timer
        clearInterval(intervalId);
        // clear contents of the page
        clear();
        // add words and image
        var words = $("<h3>").text("CORRECT!");
        $(".reaction").append(words);
        var img = $("<img>").attr("src", imgUrl[i]);
        $(".reaction").append(img);
        correctNum++;
        time = maxTime;
        i++;
        setTimeout(clear, 5000);
        setTimeout(render, 5000);
      } else {
        // if the answer was wrong
        clearInterval(intervalId);
        clear();
        var alert = $("<h3>").text("NOPE!");
        $(".reaction").append(alert);
        // display the correct answer on the page
        var idx = questions[i].correctAsw;
        var words = $("<h4>").text(
          `The Correct Answer was: ${questions[i][idx]}.`
        );
        $(".reaction").append(words);
        var img = $("<img>").attr("src", imgUrl[i]);
        $(".reaction").append(img);
        wrongNum++;
        time = maxTime;
        i++;
        setTimeout(clear, 5000);
        setTimeout(render, 5000);
      }
    });
  }
  // when all the questions are used, display the summary info
  if (i === questions.length) {
    clearInterval(intervalId);
    clear();
    var words = $("<h3>").text("All Done! Here is how you did:");
    $(".reaction").append(words);
    var correctRecord = $("<h4>").text(`Correct Answers: ${correctNum}`);
    $(".reaction").append(correctRecord);
    var wrongRecord = $("<h4>").text(`Wrong Answers: ${wrongNum}`);
    $(".reaction").append(wrongRecord);
    var noRecord = $("<h4>").text(`Unanswered: ${noNum}`);
    $(".reaction").append(noRecord);
    // add a restart button
    var rsButton = $("<button>")
      .addClass("restart")
      .text("RESTART");
    $(".rsButton").append(rsButton);
    // when restart button is clicked, reset all variables
    $("button.restart").on("click", function() {
      i = 0;
      time = maxTime;
      correctNum = 0;
      wrongNum = 0;
      noNum = 0;
      clear();
      render();
    });
  }
}
