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
var time = 20;
var intervalId;
var correctNum = 0;
var wrongNum = 0;
var noNum = 0;
var i = 0;
$("button.start").on("click", function() {
  clear();
  render();
});
function clear() {
  $("div").html("");
}
function render() {
  if (i < questions.length) {
    function timer() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      $(".timer").html(`<h2>Time Remaining ${time} Seconds</h2>`);
      time--;
      if (time === 0) {
        clearInterval(intervalId);
        clear();
        var alert = $("<h3>").text("TIME IS UP!");
        $(".reaction").append(alert);
        var idx = questions[i].correctAsw;
        var words = $("<h4>").text(
          `The Correct Answer was: ${questions[i][idx]}.`
        );
        $(".reaction").append(words);
        setTimeout(clear, 5000);
        setTimeout(render, 5000);
        noNum++;
        time = 20;
        i++;
      }
    }
    timer();
    var stem = $("<h3>").text(questions[i].question);
    $(".questions").append(stem);
    var choices = ["A", "B", "C", "D"];
    for (var j = 0; j < choices.length; j++) {
      var choice = $("<button>")
        .addClass("choice")
        .attr("type", "A")
        .text(questions[i][choices[j]]);
      var choiceLine = $("<h4>").append(choice);
      $(".questions").append(choiceLine);
    }
    $("button.choice").on("click", function() {
      var choice = $(this).attr("type");
      if (choice === questions[i].correctAsw) {
        clearInterval(intervalId);
        clear();
        $(".reaction").text("CORRECT!");
        correctNum++;
        time = 20;
        i++;
        setTimeout(clear, 5000);
        setTimeout(render, 5000);
      } else {
        clearInterval(intervalId);
        clear();
        var alert = $("<h3>").text("NOPE!");
        $(".reaction").append(alert);
        var idx = questions[i].correctAsw;
        var words = $("<h4>").text(
          `The Correct Answer was: ${questions[i][idx]}.`
        );
        $(".reaction").append(words);
        wrongNum++;
        time = 20;
        i++;
        setTimeout(clear, 5000);
        setTimeout(render, 5000);
      }
    });
  }
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
    var rsButton = $("<button>")
      .addClass("restart")
      .text("RESTART");
    $(".rsButton").append(rsButton);
    $("button.restart").on("click", function() {
      i = 0;
      time = 20;
      correctNum = 0;
      wrongNum = 0;
      noNum = 0;
      clear();
      render();
    });
  }
}
