const questions = [{
  question: "Who created Javascript?", 
  choices: ["Arnold Schwarzenegger", "Brendan Eich", "Bill Gates", "Al Gore"],
  answer: "Brendan Eich"
},
{
  question:"Inside which HTML element do we write Javascript?",
  choices: ["<body>", "<scripting>", "<script>", "<javascript>"],
  answer: "<script>"
},
{
  question:"How do you create a function in Javascript?",
  choices: ["function = myFunction()", "myFunction() = function", "function:myFunction()", "function myFunction()"],
  answer: "function myFunction()"
},
{
  question:"Which symbol is used to wrap an array?",
  choices: ["[]", "()", "{}", "//"],
  answer: "[]"
},
{
  question:"How do you declare a Javascript variable?",
  choices: ["variable = myName;", " v myName;", "var myName;", "variable myName;"],
  answer: "var myName;"
}];

const startButton = document.getElementById("start-btn");
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
}

function nextQuestion() {
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question
}

function selectAnswer() {

}