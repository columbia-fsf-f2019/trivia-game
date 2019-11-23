var triviaQuestions = [{
        question: "What year was the very first model of the iPhone released?",
        choices: ["A: 2000", "B: 2007", "C: 2002", "D: 2010"],
        answer: "B"
    }, {
        question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
        choices: ["A: 6", "B: 2", "C: 5", "D: 1"],
        answer: "A"
    }, {
        question: "In what year was the first ever Wimbledon Championship held?",
        choices: ["A: 1748", "B: 1756", "C: 1907", "D: 1877"],
        answer: "D"
    },
    {
        question: "How many molecules of oxygen does ozone have?",
        choices: ["A: J", "B: L", "C: K", "D: O"],
        answer: "C"
    },
    {
        question: "Which planet has the most gravity?",
        choices: ["A: Venus", "B: Jupiter", "C: Mars", "D: Saturn"],
        answer: "B"
    },
    {
        question: "Which country produces the most coffee in the world?",
        choices: ["A: Columbia", "B: Mexico", "C: Brazil", "D: Chile"],
        answer: "C"
    },
    {
        question: "In which body part can you find the femur?",
        choices: ["A: Leg", "B: Arm", "C: Back", "D: Stomach"],
        answer: "A"
    }
]

var triviaQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];

function playGame() {
    $('#question').append(triviaQuestion.question)
    triviaQuestion.choices.forEach(function (choice) {
        $(`<div id="${choice.charAt(0)}" class="choices">${choice}</div>`).appendTo('#choices').click(function () {
            if (choice.charAt(0) == triviaQuestion.answer) {
                alert('Correct!')
            } else {
                console.log('Incorrect')
                $(`#${triviaQuestion.answer}`).css('background-color', 'red')
            }
        });
    });
}

function nextQuestion() {
    $('#next-question').click(function () {
        triviaQuestion = triviaQuestions[Math.floor(Math.random() * triviaQuestions.length)];
        console.log(triviaQuestion);
        $('#question').html("");
        $('#choices').html("");
        playGame();
    });
};

nextQuestion();
playGame();