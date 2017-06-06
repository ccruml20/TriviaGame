var clock;
var counter = 15;
var correct = 0;
var incorrect = 0;
var answerArray = [];
var currentQuestion = 0;

// question object array to set up bank of questions

var questions = [{
    question: "Which of the great lakes is the largest freshwater lake in the world?",
    choices1: "Lake Michigan",
    choices2: "Lake Superior",
    choices3: "Lake Erie",
    choices4: "Lake Huron",
    correctAnswer: "Lake Superior",
}, {
    question: "Where would you find the Sea of Tranquility?",
    choices1: "Narnia",
    choices2: "Montreal",
    choices3: "The Moon",
    choices4: "The 1st Episode Star Trek",
    correctAnswer: "The Moon",
}, {
    question: "What is another word for lexicon? Dictionary?",
    choices1: "Dictionary",
    choices2: "Computer",
    choices3: "Fiberglass",
    choices4: "Printer",
    correctAnswer: "Dictionary",
}, {
    question: "Name the seventh planet from the sun?",
    choices1: "Saturn",
    choices2: "Jupiter",
    choices3: "Uranus",
    choices4: "Neptune",
    correctAnswer: "Uranus",
}, {
    question: "What is the diameter of Earth?",
    choices1: "8,000 miles",
    choices2: "12,000 miles",
    choices3: "6,000 miles",
    choices4: "10,000 miles",
    correctAnswer: "8,000 miles",
}, {
    question: "Which country is Prague in?",
    choices1: "Czech Republic",
    choices2: "France",
    choices3: "Italy",
    choices4: "Russia",
    correctAnswer: "Czech Republic",
}, {
    question: "Name the actress in films such as Contact, Maverick and The Silence of the Lambs?",
    choices1: "Drew Berrymore",
    choices2: "Diane Baker",
    choices3: "Jamie Lee Curtis",
    choices4: "Jodie Foster",
    correctAnswer: "Jodie Foster",
}, {
    question: "Name the world's biggest island?",
    choices1: "Hawaii",
    choices2: "Greenland",
    choices3: "Japan",
    choices4: "Taiwan",
    correctAnswer: "Greenland",
}, {
    question: "In which film did Humphrey Bogart say,'We'll always have Paris?'",
    choices1: "A Touch of Evil",
    choices2: "Chinatown",
    choices3: "Cassablanca",
    choices4: "Citizen Kane",
    correctAnswer: "Cassablanca",
}, {
    question: "Which chess piece can only move diagonally?",
    choices1: "Bishop",
    choices2: "Pawn",
    choices3: "King",
    choices4: "Knight",
    correctAnswer: "Bishop",
}, {}]

// Object that holds all of my functions

var self = {

        // Set up timer function to count down from 15 seconds

        myTimer: function() {

            clock = setInterval(fifteenSeconds, 1000);

            function fifteenSeconds() {
                if (counter === 0) {
                    // timeOutLoss();
                    clearInterval(clock);
                    self.myTimer();
                    $("#next").html("Next Question");
                              }
                if (counter > 0) {
                    counter--;
                }
                $("#timer").html(counter);
            }
        },

        //  function that iterates through the question array

        currentQuestion: function() {
            currentQuestion++;
        },

        //  button function that generates the html and updates the wins and loses

        nextQuesion: function() {
            $("#next").on("click", function() {
                $("#next").html("Confirm Answer");
                counter = 15;
                self.generateHtml();
                if (answerArray[currentQuestion] === true) {
                    correct++;
                    $("#correct").html(correct);
                    console.log(currentQuestion + "bla")
                    self.currentQuestion();
                    self.generateHtml();
                } else {
                    incorrect++;
                    $("#incorrect").html(incorrect);
                    self.currentQuestion();
                    self.generateHtml();
                }
            })
        },

        // function for generating the HTML

        generateHtml: function() {
            $(".questionField").html(questions[currentQuestion].question);
            console.log("hey" + questions[currentQuestion].question);
            $("#answer").html(questions[currentQuestion].choices1);
            $("#answer1").html(questions[currentQuestion].choices2);
            $("#answer2").html(questions[currentQuestion].choices3);
            $("#answer3").html(questions[currentQuestion].choices4);
            console.log(questions[currentQuestion].choices1);
        },

    }
    // Event listers for on click that compares the question and answers and turns it into 
    // a boolean value within an if statement.  Then push result to an array.   

document.addEventListener("DOMContentLoaded", function() {



    $(".answerField").on("click", function() {
        var answerPick = $(this).text()
        console.log("Im the answerP", answerPick + "Im the question", questions[currentQuestion].correctAnswer)
        if (answerPick === questions[currentQuestion].correctAnswer) {
            answerArray[currentQuestion] = true;
            console.log("yeah");
        } else {
            answerArray[currentQuestion] = false;
            // $("#incorrect").html(incorrect);

        }
        console.log(answerArray);
    })

    // Document loading function calls 

    self.myTimer()
    self.nextQuesion()
    self.generateHtml()

})
