const questions = [{
  question: "Who created Javascript?", 
  answers: ["Arnold Schwarzenegger", "Brendan Eich", "Bill Gates", "Al Gore"],
  correct: "Brendan Eich"
},
{
  question:"Inside which HTML element do we write Javascript?",
  answers: ["<body>", "<scripting>", "<script>", "<javascript>"],
  correct: "<script>"
},
{
  question:"How do you create a function in Javascript?",
  answers: ["function = myFunction()", "myFunction() = function", "function:myFunction()", "function myFunction()"],
  correct: "function myFunction()"
},
{
  question:"Which symbol is used to wrap an array?",
  answers: ["[]", "()", "{}", "//"],
  correct: "[]"
},
{
  question:"How do you declare a Javascript variable?",
  answers: ["variable = myName;", " v myName;", "var myName;", "variable myName;"],
  correct: "var myName;"
}];

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
let shuffleQuestions, currentQuestionIndex;
const questionEl = document.getElementById("question")
const answerButtonsEl = document.getElementById("answer-buttons")

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
};

function showQuestion(question) {
  questionEl.innerText = question.question

};




function selectAnswer() {

}