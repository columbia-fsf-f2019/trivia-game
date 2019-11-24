// Questions object
// alert("this is a test!")
// $("#start").on("click", Function()(console.log("I'm clicked!")));

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
      "Which legendary French winemaker put Napa Valley 'on-the-map' as a world-class wine producer?",
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
      "Which American appelation is best known for producing a dry and 'dusty' red grape?",
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

// setup for interval timer beginning with some global variables

var box = $("#question-box");
var countdown;

var gameOutcome = {
  correct: 0,
  incorrect: 0,
  interval: 180,

  clock: function() {
    gameOutcome.interval--;
    $("#counter").html(gameOutcome.interval);
    if (gameOutcome.interval === 0) {
      console.log("Game Over");
      gameOutcome.done();
    }
  },

  start: function() {
    countdown = setInterval(gameOutcome.clock, 1000);

    $("#question-box").prepend(
      "<h3>Time Remaining: <span id='counter'>12</span> Seconds</h3>"
    );
    $("#start").remove();

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
    box.append("<start id='done'>Done</start>");
  },

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

  result: function() {
    clearInterval(countdown);
    $("#question-box h4").remove();

    box.html("<h1>Done!</h1>");
    box.append("<h2>Correct Answers: " + this.correct + "</h2>");
    box.append("<h2>Incorrect Answers: " + this.incorrect + "</h2>");
    box.append("<h2>Unanswered Questions: " + this.incorrect + "</h2>");
  }
};

// below are click handlers for when game start and done buttons are clicked

$(document).on("click", "#start", function() {
  gameOutcome.start();
});

$(document).on("click", "#done", function() {
  gameOutcome.done();
});
