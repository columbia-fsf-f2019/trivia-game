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
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  $(".timer").html("<h1>" + time + "</h1>");
  time--;
  if (time === 0) {
    alert("time up");
    clearInterval(intervalId);
    time = 20;
  }
}
run();
function display(q) {
  $(".questions").append("<p>" + q.question + "</p>");
  $(".questions").append("<p>A: " + q.A + "</p>");
  $(".questions").append("<p>B: " + q.B + "</p>");
  $(".questions").append("<p>C: " + q.C + "</p>");
  $(".questions").append("<p>D: " + q.D + "</p>");
}

// for (var i = 0; i < questions.length; i++) {
// display(questions[i]);
var stem = $("<h3>").text(questions[0].question);
$(".questions").append(stem);
var choices = [];
var choiceA = $("<button>")
  .addClass("A")
  .text(questions[0].A);
choices.push(choiceA);
var choiceB = $("<button>")
  .addClass("B")
  .text(questions[0].B);
choices.push(choiceB);
var choiceC = $("<button>")
  .addClass("C")
  .text(questions[0].C);
choices.push(choiceC);
var choiceD = $("<button>")
  .addClass("D")
  .text(questions[0].D);
choices.push(choiceD);
console.log(choices);
for (var j = 0; j < choices.length; j++) {
  var choiceLine = $("<h4>").append(choices[j]);
  $(".questions").append(choiceLine);
}

$("button").on("click", function() {
  var choice = $(this).attr("class");
  console.log(choice);
  if (choice === questions[0].correctAsw) {
    $(".reaction").text("YOU ARE CORRECT!");
    correctNum++;
  } else {
    $(".reaction").text("YOU ARE WRONG!");
    wrongNum++;
  }
});
// }
