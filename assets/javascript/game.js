var triviaQuestions = [
  {
    question: "Who won best rock Performance in 2018 Grammys?",
    answers: {a: "You Want It Darker - Leonard Cohen",b: "The Promise - Chris Cornell",c: "Run - Foo Fighters",d: "No Good - Kaleo"
    },
    correctAnswer: "a",
    explanation:'You Want It Darker is the fourteenth studio album by Canadian singer-songwriter Leonard Cohen, released on October 21, 2016, by Columbia Records, nineteen days before Cohen\'s death',
   
  },
  {
    question: "Who won best metal Performance in 2018 Grammys?",
    answers: {a: "Sultan's Curse - Mastodon",b: "Invisible Enemy - August Burns Red",c: "Black Hoodie - Body Count",d: "Forever - Code Orange"
    },
    correctAnswer: "a",
    explanation:"It\'s about going through cancer, going through chemotherapy and all the things associated with that, drummer Brann Dailor explained to Rolling Stone. I didn't want to be literal about it. But it\'s all in there. You can read between the lines"
   
  },
  {
    question: "Who won best rock song in 2018 Grammys?",
    answers: {a: "Run - Foo Fighters",b: "Atlas, Ruse! - Metallica",c: "Blood in the Cut - K.Flay",d: "Go to War - Nothing More"
    },
    correctAnswer: "a",
    explanation:"Run is a song by American rock band Foo Fighters. It was released as a single on June 1, 2017, and is off their ninth studio album, Concrete and Gold.",
    
  },
  {
    question: "Who won best rock album in 2018 Grammys",
    answers: {a: "Emperor of Sand - Mastodon",b: "Hardwired to Self Destruct - Metallica",c: "The Stories We Tell Ourselves - Nothing More",d: "A Deeper Understanding - The War on Drugs"
    },
    correctAnswer: "d",
    explanation:"A Deeper Understanding is the fourth studio album by American indie rock band The War on Drugs. It was released on August 25, 2017, through Atlantic Records. ",
    
  },
  {
    question: "Who won best alternative music album in 2018 Grammys?",
    answers: {a: "Everything Now - Arcade Fire",b: "Humanz - Gorillaz",c: "American Dream - LCD Soundsystem",d: "Sleep Well Beast - The National"
    },
    correctAnswer: "d",
    explanation:"Sleep Well Beast is the seventh studio album by American indie rock band The National, released on September 8, 2017 through 4AD.",
    
  },
 
];


var answer = "";
var triviaQuestion = "";


var unanswered = 0;
var timer;
var index = 0;
var timeKeeper;

var button;
var secs = 30;
var countdownBoolean = false;

var correctAnswers = 0;
var wrongAnswers = 0;



function answerSentence() {
    $("#triviaQuestion").empty();
  
    if (answer === "correct") {
      triviaQuestion = "Correct!";
    } else if (answer === "zero") {
      triviaQuestion = "Sorry, you ran out of time!";
    } else if (answer === "wrong") {
      triviaQuestion = "Sorry, thats not correct!";
    }
  
    $("#triviaQuestion").text(triviaQuestion);
  }

function displayQuestion() {
  $(".answerBox").hide();
  $(".scoreBoardBox").hide();
  $(".triviaBox").show();

  $("#triviaQstn").text(triviaQuestions[index]["question"]);

  for (var key in triviaQuestions[index]["answers"]) {
    button = $("<button>");
    var buttonText = triviaQuestions[index]["answers"][key];
    var buttonClass = "btn btn-secondary btn-lg btn-block answerButtons";

    button.text(buttonText).addClass(buttonClass).attr("data-val", key);

    $(".answersButtons").append(button);
  }

  startCountdown();
}

$("#timeLeft").text(secs);

function countdown() {
    secs--;
    $("#timeLeft").text(secs);
  
    if (secs == 0) {
      answer = "zero";
      unanswered++;
      
      answerSentence();
      showAnswer();
      countdownStop();
    }
  }
  
  function startCountdown() {
    if (!countdownBoolean) {
      timeKeeper = setInterval(countdown, 1000);
      countdownBoolean = true;
    }
  }
  
  function countdownStop() {
    countdownBoolean = false;
    clearInterval(timeKeeper);
    secs = 25;
    $("#timeLeft").text(secs);
  }

function showAnswer() {
  $(".answerBox").show();
  $(".triviaBox").hide();

  var answerLetter = triviaQuestions[index]["correctAnswer"];

  $("#answer").text(
    "The answer is: " + triviaQuestions[index]["answers"][answerLetter]
  );
  $("#answerExplanation").text(triviaQuestions[index]["explanation"]);
  

  index++;
  $(".answersButtons").empty();

  clearInterval(timer);
  timer = setTimeout(isFinalResult, 4000);
}

function isFinalResult() {
  if (index === triviaQuestions.length) {
    $(".answerBox").hide();
    $(".scoreBoardBox").show();

    $("#correctAnswers").text(correctAnswers);
    $("#wrongAnswers").text(wrongAnswers);
    $("#unanswered").text(unanswered);
  } else {
    displayQuestion();
  }
}

$("#playAgain").on("click", function() {
  correctAnswers = 0;
  wrongAnswers = 0;
  unanswered = 0;
  secs = 26;
  index = 0;

  displayQuestion();
});

$("#startBTN").on("click", function() {
  $("#startBox").hide();

  displayQuestion();
});

$(document).on("click", ".answerButtons", function() {
  var clickAnswer = $(this);
  var answerVal = clickAnswer.attr("data-val");

  if (answerVal === triviaQuestions[index]["correctAnswer"]) {
    answer = "correct";
    correctAnswers++;
    
    answerSentence();
    showAnswer();
    countdownStop();
  } else {
    answer = "wrong";
    wrongAnswers++;
    
    answerSentence();
    showAnswer();
    countdownStop();
  }
});
