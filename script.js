const questions = [{
  question: "Who created Javascript?", 
  answers: ["Arnold Schwarzenegger", "Brendan Eich", "Bill Gates", "Al Gore"],
  correct: "Brendan Eich"
},
{
  question: "Inside which HTML element do we write Javascript?",
  answers: ["<body>", "<scripting>", "<script>", "<javascript>"],
  correct: "<script>"
},
{
  question: "How do you create a function in Javascript?",
  answers: ["function = myFunction()", "myFunction() = function", "function:myFunction()", "function myFunction()"],
  correct: "function myFunction()"
},
{
  question: "Which symbol is used to wrap an array?",
  answers: ["[]", "()", "{}", "//"],
  correct: "[]"
},
{
  question: "How do you declare a Javascript variable?",
  answers: ["variable = myName;", " v myName;", "var myName;", "variable myName;"],
  correct: "var myName;"
}];

const startButton = document.getElementById("start-btn");
const questionContainerEl = document.getElementById("question-container");
let shuffleQuestions, currentQuestionIndex;
const questionEl = document.getElementById("question")
const answerButtonsEl = document.getElementById("answer-buttons")
let buttonsHere = document.getElementById('answer-buttons')
let answerButtons = document.getElementsByClassName("btn")
let endScore = 0;
let questionsLeft;
let endScreen;
let isCorrect;
let seconds = 90;




startButton.addEventListener("click", startGame)

function startGame() {
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerEl.classList.remove("hide");
  nextQuestion();
};



function nextQuestion() {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
};

function showQuestion(question) {
  questionEl.innerText = question.question;
  document.getElementById("btn-1").textContent = questions[currentQuestionIndex].answers[0];
  document.getElementById("btn-2").textContent = questions[currentQuestionIndex].answers[1];
  document.getElementById("btn-3").textContent = questions[currentQuestionIndex].answers[2];
  document.getElementById("btn-4").textContent = questions[currentQuestionIndex].answers[3];

};
  document.getElementById("btn-1").addEventListener("click", nextQuestion);
  document.getElementById("btn-2").addEventListener("click", nextQuestion);
  document.getElementById("btn-3").addEventListener("click", nextQuestion);
  document.getElementById("btn-4").addEventListener("click", nextQuestion);

function endGame() {
  
  
};





function selectAnswer() {
  document.addEventListener("click", function() {
    document.getElementById("btn-1, btn-2, btn-3, btn-4");
      if (questions.correct) {
        endScore++;
        isCorrect = document.getElementById("message-container");
        isCorrect.innerHTML = "Correct!"
       } 
       else if (!questions.correct) {
         seconds = seconds - 10;
         correctOrNot.innerHTML = "Incorrect!"
       } else {
         
         endGame();
       }

      
  })};

  function Mytimer() {
    timer = setInterval(function() {
      seconds--;
      document.getElementById("timer").textContent = seconds;
      if (seconds === 0) {
        clearInterval(timer);
        endGame();
    }}, 3000);
  };


