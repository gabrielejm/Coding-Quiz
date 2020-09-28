# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

timer = setInterval(function() {
  seconds--;
  document.getElementById("timer").textContent = seconds;
  if (seconds === 0) {
    clearInterval(timer);
    alert("You have run out of time!");

    startBtn.addEventListener("click", function() {
  startEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  
});

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
var shuffledQuestions = questions[Math.floor(Math.random() * questions.length)];