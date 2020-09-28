var questions = [{
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

const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")

startButton.addEventListener("click", startGame)

function startGame() {
  startButton.classList.add("hide");
}

function nextQuestion() {

}

function selectAnswer() {

}