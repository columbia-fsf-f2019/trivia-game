var triviaQuestion1 = {
    question: "What year was the very first model of the iPhone released?",
    choices: ["A: 2000", "B: 2007", "C: 2002", "D: 2010"],
    answer: "B"
}
var triviaQuestion2 = {
    question: "When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?",
    choices: ["A: 6", "B: 2", "C: 5", "D: 1"],
    answer: "A"
}

$('#question').append(triviaQuestion1.question)
triviaQuestion1.choices.forEach(function (choice) {
    $(`<div id="${choice.charAt(0)}">${choice}</div>`).appendTo('#choices').click(function () {
        if (choice.charAt(0) == triviaQuestion1.answer) {
            console.log('Correct!')
        } else {
            console.log('Incorrect')
            $(`#${triviaQuestion1.answer}`).css('background-color', 'red')
        }
    })
})