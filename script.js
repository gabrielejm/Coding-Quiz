var questions = [{
  title: "Who created Javascript?", 
  choices: ["Arnold Schwarzenegger", "Brendan Eich", "Bill Gates", "Guido van Rossum"],
  answer: "Brendan Eich"
},
{
  title:"Inside which HTML element do we write Javascript?",
  choices: ["<body>", "<scripting>", "<script>", "<javascript>"],
  answer: "<script>"
},
{
  title:"How do you create a function in Javascript?",
  choices: ["function = myFunction()", "myFunction() = function", "function:myFunction()", "function myFunction()"],
  answer: "function myFunction()"
},
{
  title:"Which symbol is used to wrap an array?",
  choices: ["[]", "()", "{}", "//"],
  answer: "[]"
},
{
  title:"How do you declare a Javascript variable?",
  choices: ["variable = myName;", " v myName;", "var myName;", "variable myName;"],
  answer: "var myName;"
}];

var seconds = 10;
var timer;
var questionIndex = 0;
var timerEl = document.getElementById("timer")
var startEl = document.getElementById("start");
var startBtn = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var end = document.getElementById("end");
var endScore = document.getElementById("score");
var initials = document.getElementById("initials");
var endBtn = document.getElementById("submit-btn");

startBtn.addEventListener("click", function() {
  startEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  
});

//function to start the timer
  //internal function to run if the user runs out of time
    //call the end function
timer = setInterval(function() {
  seconds--;
  document.getElementById("timer").textContent = seconds;
  if (seconds === 0) {
    clearInterval(timer);
    alert("You have run out of time!"); //invoke end function here once created
  }
}, 1000);
  


//function to get/display current question
function currentQuestion() {
  
};
//function to capture when user clicks on answer buttons
  //check: did the user get the question right? (if/else)
    //report to the user whether they got question correct or not
      //increment the question index
        //check if there are more questions to display
          //if there are more questions, call the get question function
            //if there are no more questions or run out of time, call end game function
function userAnswer() {
  
};

  //in the end game function, stop the timer, display user score, show input box for initials, wait for user to click submit
function endGame() {
  
};
  //function for when the user clicks submit, thats stores score and initials
    //windows.location.href = file name of highscore html page

function clickSubmit() {
  
};