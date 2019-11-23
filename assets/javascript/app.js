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
      $(".timer").html("<h1>" + time + "</h1>");
      time--;
      if (time === 0) {
        clearInterval(intervalId);
        clear();
        $(".reaction").text("TIME IS UP!");
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
    var choices = [];
    var choiceA = $("<button>")
      .addClass("choice")
      .attr("type", "A")
      .text(questions[i].A);
    choices.push(choiceA);
    var choiceB = $("<button>")
      .addClass("choice")
      .attr("type", "B")
      .text(questions[i].B);
    choices.push(choiceB);
    var choiceC = $("<button>")
      .addClass("choice")
      .attr("type", "C")
      .text(questions[i].C);
    choices.push(choiceC);
    var choiceD = $("<button>")
      .addClass("choice")
      .attr("type", "D")
      .text(questions[i].D);
    choices.push(choiceD);
    console.log(choices);
    for (var j = 0; j < choices.length; j++) {
      var choiceLine = $("<h4>").append(choices[j]);
      $(".questions").append(choiceLine);
    }

    $("button.choice").on("click", function() {
      var choice = $(this).attr("type");
      if (choice === questions[i].correctAsw) {
        clearInterval(intervalId);
        clear();
        $(".reaction").text("YOU ARE CORRECT!");
        correctNum++;
        time = 20;
        i++;
        setTimeout(clear, 5000);
        setTimeout(render, 5000);
      } else {
        clearInterval(intervalId);
        clear();
        $(".reaction").text("YOU ARE WRONG!");
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
