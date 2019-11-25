$("#start").on("click", function() {;
  $("#start").remove();
for(var i=0; i< questions.length); i++) {
  $("#question-box").append("<h3"> + questions[i].question + "</h3>");
for(var j=0; j<questions[i].answers.length; j++){
  $("#question-box").append("<input type= "radio" name="question - +i+"value=")
}
}

})

document.getElementById("start").innerHTML = 003 + ":" + 20;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("start").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  //if(m<0){alert('timer completed')}

  document.getElementById("start").innerHTML = m + ":" + s;
  console.log(m);
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

// ______________________________________________________________________________

// $("#start").on("click", function() {

// var number = 240;
//  Variable that will hold our interval ID when we execute
//  the "run" function
// var intervalId;
// //  When the stop button gets clicked, run the stop function.
// $("#start").on("click", start);
//  When the resume button gets clicked, execute the run function.
// $("#resume").on("click", run);
//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX********
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
// function run() {
//   clearInterval(intervalId);
//   intervalId = setInterval(decrement, 2400);
// }
//  The decrement function.
// function decrement() {
//  Decrease number by one.
//   number--;
//  Show the number in the #show-number tag.
//   $("#show-number").html("<h2>" + number + "</h2>");
//   //  Once number hits zero...
//   if (number === 0) {
//  ...run the stop function.
// stop();
//  Alert the user that time is up.
//     alert("Time Up!");
//   }
// }
// //  The stop function
// function stop() {
//  Clears our intervalId
//  We just pass the name of the interval
//   //  to the clearInterval function.
//   clearInterval(intervalId);
// }
//  Execute the run function.
// run();

// var questions = [
//         {
//             text: C"apital of ct?"
//             choices: ["new Haven", "hartford", etc..."

//     ]
//      var curQuestion = 0;
//      var timeLeft = 20;
//      var questionTimer = setInterval(function ())

//      timeLeft --;
//      if (timeLeft <= 0) {
//          curQuestion ++;
//          rendertiesUpMessage();
//          setTimeout(function() {
//              renderQuewtion(questions[curQuestion }, 3000);
//              ])
//          }
//      }
