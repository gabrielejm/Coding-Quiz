var questions = [{
  title: "What is 1 + 1?", 
  choices: ["2", "5", "3", "7"],
  answer: "2"
},
{
  title:"",
  choices: ["", "", "", ""],
  answer: ""
},
{
  title:"",
  choices: ["", "", "", ""],
  answer: ""
},
{
  title:"",
  choices: ["", "", "", ""],
  answer: ""
},
{
  title:"",
  choices: ["", "", "", ""],
  answer: ""
}];

var timeLeft = 90;
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


//function to get/display current question

//function to capture when user clicks on answer buttons
  //check: did the user get the question right? (if/else)
    //report to the user whether they got question correct or not
      //increment the question index
        //check if there are more questions to display
          //if there are more questions, call the get question function
            //if there are no more questions or run out of time, call end game function


  //in the end game function, stop the timer, display user score, show input box for initials, wait for user to click submit

  //function for when the user clicks submit, thats stores score and initials
    //windows.location.href = file name of highscore html page

