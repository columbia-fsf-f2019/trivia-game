var triviaQuestions = [{
        question: "What year was the very first model of the iPhone released?",
        choices: ["A: 2000", "B: 2007", "C: 2002", "D: 2010"],
        answer: "B"
    }, {
        question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
        choices: ["A: 6", "B: 2", "C: 5", "D: 1"],
        answer: "A"
    }, {
        question: "In the TV Show 'The Office' which employee did Michael Scott hit with his car?",
        choices: ["A: Angela", "B: Kelly", "C: Oscar", "D: Meredith"],
        answer: "D"
    },
    {
        question: "Which mammal has no vocal cords?",
        choices: ["A: Pig", "B: Elephant", "C: Octopus", "D: Giraffe"],
        answer: "D"
    },
    {
        question: "Which planet has the most gravity?",
        choices: ["A: Venus", "B: Jupiter", "C: Mars", "D: Saturn"],
        answer: "B"
    },
    {
        question: "Which country produces the most coffee in the world?",
        choices: ["A: Colombia", "B: Mexico", "C: Brazil", "D: Chile"],
        answer: "C"
    },
    {
        question: "In which body part can you find the femur?",
        choices: ["A: Leg", "B: Arm", "C: Back", "D: Stomach"],
        answer: "A"
    },
    {
        question: "Which country invented tea?",
        choices: ["A: America", "B: China", "C: Germany", "D: Greece"],
        answer: "B"
    },
    {
        question: "How many Lord of the Rings films are there?",
        choices: ["A: 1", "B: 4", "C: 3", "D: 7"],
        answer: "C"
    },
    {
        question: "In what year was the first episode of South Park aired?",
        choices: ["A: 1997", "B: 1990", "C: 1994", "D: 2000"],
        answer: "A"
    }
];
var i = 0;
var triviaQuestion = triviaQuestions[parseInt(i)];
var time = 30;
var timer;
var numberofQuestions = triviaQuestions.length;
var correctQuestions = 0;

function runTimer() {
    clearInterval(timer);
    timer = setInterval(function gameTimer() {
        time -= 1;
        $("#timer").html(`<h4>Time Remaning: ${time} Seconds</h4>`);
        if (time <= 0) {
            nextQuestion();
        } else if (time <= 1) {
            $(`#${triviaQuestion.answer}`).addClass("correctAnswer");

        }

    }, 1000);
}

function nextQuestion() {
    $("#question").html("");
    $("#choices").html("");
    $("#correctimage").html("");
    $("#incorrectimage").html("");
    $("#correct").css("display", "none");
    $("#incorrect").css("display", "none");
    i += 1;
    triviaQuestion = triviaQuestions[parseInt(i)];
    time = 30;
    $("#timer").html(`<h4>Time Remaning: ${time} Seconds</h4>`);
    playGame();
};

function playGame() {
    runTimer();
    $("#startGame").css("display", "none");
    if (i === triviaQuestions.length) {
        clearInterval(timer);
        $("#timer").css("display", "none");
        $("#totalscore").css("display", "block").append(`<h1>YOU SCORED: ${correctQuestions}/${numberofQuestions}</h1>`)
        if (correctQuestions <= 6) {
            var failQueryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=failed";
            $.ajax(failQueryURL).then(function (response) {
                var failImageUrl = response.data.fixed_width_small_url;
                var failImage = $("<img>");
                failImage.attr("src", failImageUrl);
                failImage.attr("alt", "failed trivia image");
                $("#totalscore").append(failImage);
            });
        } else {
            var congratsQueryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=congrats";
            $.ajax(congratsQueryURL).then(function (response) {
                var congratsImageUrl = response.data.fixed_width_small_url;
                var congratsImage = $("<img>");
                congratsImage.attr("src", congratsImageUrl);
                congratsImage.attr("alt", "congrats trivia image");
                $("#totalscore").append(congratsImage);
            });
        }
    } else {
        $("#question").append(`<h2>${triviaQuestion.question}</h2>`)
        triviaQuestion.choices.forEach(function (choice) {
            $(`<div id="${choice.charAt(0)}" class="choices"><h3>${choice}</h3></div>`).appendTo("#choices").one("click", function () {
                if (choice.charAt(0) === triviaQuestion.answer) {
                    $(`#${triviaQuestion.answer}`).addClass("correctAnswer");
                    var correctQueryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=happydance";
                    $.ajax(correctQueryURL).then(function (response) {
                        var correctImageUrl = response.data.fixed_width_small_url;
                        var correctImage = $("<img>");
                        correctImage.attr("src", correctImageUrl);
                        correctImage.attr("alt", "correct answer image");
                        $("#correctimage").html(correctImage);
                        $("#correct").css("display", "block");
                    });
                    $(".choices").off();
                    correctQuestions += 1;
                    setTimeout(function () {
                        nextQuestion();
                    }, 3500);
                } else {
                    $(`#${triviaQuestion.answer}`).addClass("correctAnswer");
                    var incorrectQueryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=disappointed";
                    $.ajax(incorrectQueryURL).then(function (response) {
                        var incorrectImageUrl = response.data.fixed_width_small_url;
                        var incorrectImage = $("<img>");
                        incorrectImage.attr("src", incorrectImageUrl);
                        incorrectImage.attr("alt", "incorrect answer image");
                        $("#incorrectimage").append(incorrectImage);
                        $("#incorrect").css("display", "block");
                    });
                    $(".choices").off();
                    setTimeout(function () {
                        nextQuestion();
                    }, 3500);
                }
            });
        });
    }
}


$("#start").click(function () {
    $("#playGame").css("display", "block");
    playGame();
});