// alert("this is a test!")

// for the record, I researched and made up all these questions!! Wine is a passion, loads of fun!
// Questions array containing 11 objects (made up of question, choices, and answer)

var questions = [
  {
    question:
      "Which type of American grape is equivalent to the Italian Primitivo grape?",
    choices: [
      "Cabernet Sauvignon",
      "Merlot",
      "Zinfandel",
      "Pinot Noir",
      "Petite Syrah"
    ],
    answer: "Zinfandel"
  },
  {
    question: "Which of the following red varietals are NOT from Tuscany?",
    choices: [
      "Chianti",
      "Primitivo",
      "Sangiovese",
      "Canaiolo Nero",
      "Brunello di Montalcino"
    ],
    answer: "Primitivo"
  },
  {
    question:
      "Which of the following wood species is NOT used to make barrels for aging wine?",
    choices: [
      "American Oak",
      "French Oak",
      "European Beachwood",
      "Hungarian Oak",
      "California Redwood"
    ],
    answer: "European Beachwood"
  },
  {
    question: "Which appelation is NOT located in France?",
    choices: [
      "Loire Valley",
      "Cotes du Rhone",
      "Bordeaux",
      "Rioja",
      "Burgundy",
      "Sancerre"
    ],
    answer: "Rioja"
  },
  {
    question:
      "Which legendary winemaker put Napa Valley 'on-the-map' as a world-class wine producer?",
    choices: [
      "Robert Mondavi",
      "Rodney Strong",
      "Charles Krug",
      "Georges de Latour",
      "André Tchelistcheff"
    ],
    answer: "Georges de Latour"
  },
  {
    question:
      "Which California appelation is best known for producing a dry and 'dusty' red grape?",
    choices: [
      "Calistoga",
      "Los Carneros",
      "Rutherford",
      "Stags Leap",
      "Sonoma Valley"
    ],
    answer: "Rutherford"
  },
  {
    question: "Which grape is looked down upon as being 'inferior'?",
    choices: ["Merlot", "Sauvignon Blanc", "Chardonnay", "Cabernet Sauvignon"],
    answer: "Chardonnay"
  },
  {
    question: "Which description is generally NOT used to describe wine?",
    choices: [
      "dry",
      "fruit-forward",
      "tanic",
      "bold",
      "peppery",
      "savory",
      "earthy",
      "barnyardy"
    ],
    answer: "savory"
  },
  {
    question:
      "Which country is the largest producer of the Sauvignon Blanc grape?",
    choices: ["France", "Italy", "Australia", "United States", "South Africa"],
    answer: "France"
  },
  {
    question:
      "In which month are grapes harvested and 'crushed' in Napa Valley?",
    choices: ["August", "September", "October", "November", "December"],
    answer: "October"
  }
];

// setup for interval timer beginning with some global variables -

var box = $("#question-box");
var countdown;

// could have made this whole process simpler without the use of writing functions with object notation
var gameOutcome = {
  correct: 0,
  incorrect: 0,
  interval: 180,

  //   this function decrements interval starting from 180 seconds -

  clock: function() {
    gameOutcome.interval--;
    $("#counter").html(gameOutcome.interval);
    if (gameOutcome.interval === 0) {
      console.log("Game Over");
      gameOutcome.done();
    }
  },

  //   still working on how/where to call function as to reset the game (see lines 140, which empty's box at end and lines 209-211)

  start: function() {
    countdown = setInterval(gameOutcome.clock, 1000);
    // "this" is referring to the gameOutcome object (correct & incorrect are properties of the object)
    this.correct = 0;
    this.incorrect = 0;
    $("#question-box").empty();
    $("#question-box").prepend(
      "<p>Time Remaining: <span id='counter'>180</span> Seconds</p>"
    );
    $("#start").remove();

    // this loops through all the questions in questions array object

    for (var i = 0; i < questions.length; i++) {
      box.append("<h4>" + questions[i].question + "</h4>");
      for (var j = 0; j < questions[i].choices.length; j++) {
        box.append(
          "<input type='radio' name='question-" +
            i +
            "' value='" +
            questions[i].choices[j] +
            "''>" +
            questions[i].choices[j]
        );
      }
    }
    // this displays done box to click when completed
    box.append("<start id='done'>Done</start>");
  },

  //   below is the game logic if certain conditions are met or/else. Done function uses : notation as it is inside object

  done: function() {
    var inputs = box.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].answer) {
        gameOutcome.correct++;
      } else {
        gameOutcome.incorrect++;
      }
    }
    this.result();
  },
  // prints outcome of game

  result: function() {
    clearInterval(countdown);

    // this displays the results of the quiz

    box.html("<h1>Well Done You!!</h1>");
    box.append("<p>Correct Answers: " + this.correct + "</p>");
    box.append("<p>Incorrect Answers: " + this.incorrect + "</p>");
    box.append(
      "<p>Unanswered Questions: " +
        (questions.length - (this.incorrect + this.correct)) +
        "</p>"
    );
    // $("#question-box").empty();
    box.append("<button id='restart'>Restart</button>");
  }
};

// below are click handlers for when game start and done buttons are clicked

$(document).on("click", "#start", function() {
  gameOutcome.start();
});

$(document).on("click", "#done", function() {
  gameOutcome.done();
});

$(document).on("click", "#restart", function() {
  gameOutcome.start();
});

// below tried to call fct to place start button underneath quiz results

// box.append = $("#start");
