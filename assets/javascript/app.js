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
  (question3 = {
    question: "Who is Fluffy?",
    A: "Hagrid's dragon",
    B: "A three-headed dog",
    C: "Hermione's cat",
    D: "Harry's owl",
    correctAsw: "B"
  })
];
$(".timer").setInterval(() => {}, 1000);
function display(q) {
  $(".questions").append("<p>" + q.question + "</p>");
  $(".questions").append("<p>A: " + q.A + "</p>");
  $(".questions").append("<p>B: " + q.B + "</p>");
  $(".questions").append("<p>C: " + q.C + "</p>");
  $(".questions").append("<p>D: " + q.D + "</p>");
}

for (i = 0; i < questions.length; i++) {
  display(questions[i]);
}
