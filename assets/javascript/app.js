$(document).ready(function () {
    var options = [
        {
            question: "What is the capture device used to contain Pokemon?", 
            choice: ["Pokebox", "Pokeball", "Pokesphere", "Pokenet"],
            answer: 1
         },
         {
            question: "Who is Spongebob's bestfriend?", 
            choice: ["Patrick", "Sandy", "Magic Mike", "Rick Flair"],
            answer: 0
         }, 
         {
            question: "What is the name of the protagonist in 'How I Met Your Mother'?", 
            choice: ["Ned Mosby", "Ted Crosby", "Ted Mosby", "Vanilla Ice" ],
            answer: 2
        }, 
        {
            question: "Which fictional creature has the title of 'King Of All Monsters'?", 
            choice: ["Rodan", "Chidorah", "Godzilla", "Destroyah"],
            answer: 2
        }, 
        {
            question: "How many Infinity Stones are there in the Marvel Universe?", 
            choice: ["12", "5", "9", "6"],
            answer: 3
        }, 
        {
            question: "In the show,'Family Guy', what is the name of the Griffin's dog?", 
            choice: ["Scooby", "Brian", "Bryan", "Marmaduke" ],
            answer: 1
        }, 
        {
            question: "What is Goku's race?", 
            choice: ["Namekian", "Saiyan", "Human", "Ape"],
            answer: 1
        }, 
        {
            question: "What element can Magneto control?", 
            choice: ["Metal", "Fire", "Water", "Air"],
            answer: 0
        }];
    
    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 20;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    $("#reset").hide();
    
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
    }
        })

    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }

    function decrement() {
        $("#timer").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answers").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }	
    }
    
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function displayQuestion() {
        index = Math.floor(Math.random()*options.length);
        pick = options[index];
            $("#questions").html("<h2>" + pick.question + "</h2>");
            for(var i = 0; i < pick.choice.length; i++) {
                var userChoice = $("<div>");
                userChoice.addClass("answerchoice");
                userChoice.html(pick.choice[i]);
                userChoice.attr("data-guessvalue", i);
                $("#answers").append(userChoice);
    }
    
    $(".answerchoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guessvalue"));
        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess="";
            $("#answers").html("<p>Correct!</p>");
            hidepicture();
        } else {
            stop();
            wrongCount++;
            userGuess="";
            $("#answers").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    })
    }
    
    function hidepicture () {
        $("#answers").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index,1);
        var hidpic = setTimeout(function() {
            $("#answers").empty();
            timer= 20;
        if ((wrongCount + correctCount + unanswerCount) === qCount) {
            $("#questions").empty();
            $("#questions").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answers").append("<h4> Correct: " + correctCount + "</h4>" );
            $("#answers").append("<h4> Incorrect: " + wrongCount + "</h4>" );
            $("#answers").append("<h4> Unanswered: " + unanswerCount + "</h4>" );
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;
        } else {
            runTimer();
            displayQuestion();
          }
        }, 3000);
    }
    
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answers").empty();
        $("#questions").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    })
    })