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
var correctNum;
var wrongNum;
var i = 0;
function render() {
  if (i < questions.length) {
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
      $(".timer").html("<h1>" + time + "</h1>");
      time--;
      if (time === 0) {
        clearInterval(intervalId);
        time = 20;
      }
    }
    run();
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
        clear();
        $(".reaction").text("YOU ARE CORRECT!");
        setTimeout;
        correctNum++;
        i++;
        setTimeout(render, 5000);
      } else {
        clear();
        $(".reaction").text("YOU ARE WRONG!");
        wrongNum++;
        i++;
        setTimeout(render, 5000);
      }
    });
    if (time === 0) {
      clear();
      $(".reaction").text("TIME IS UP!");
      setTimeout(render, 5000);
    }
  }
}
render();
function clear() {
  $("div").html("");
  time = 20;
}
