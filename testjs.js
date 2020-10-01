
      console.log('test');
      const questions = [
        {
          question: 'Who created Javascript?',
          answers: [
            'Arnold Schwarzenegger',
            'Brendan Eich',
            'Bill Gates',
            'Al Gore',
          ],
          correct: 'Brendan Eich',
        },
        {
          question: 'Inside which HTML element do we write Javascript?',
          answers: ['<body>', '<scripting>', '<script>', '<javascript>'],
          correct: '<script>',
        },
        {
          question: 'How do you create a function in Javascript?',
          answers: [
            'function = myFunction()',
            'myFunction() = function',
            'function:myFunction()',
            'function myFunction()',
          ],
          correct: 'function myFunction()',
        },
        {
          question: 'Which symbol is used to wrap an array?',
          answers: ['[]', '()', '{}', '//'],
          correct: '[]',
        },
        {
          question: 'How do you declare a Javascript variable?',
          answers: [
            'variable = myName;',
            ' v myName;',
            'var myName;',
            'variable myName;',
          ],
          correct: 'var myName;',
        },
      ];  

      var buttonsHere = document.getElementById('btn');
        for (let i = 0; i < questions.length; i++) {
          console.log('question ', questions[i]);
          for (let j = 0; j < questions[i].answers.length; j++) {
            console.log('answer ', questions[i].answers[j]);
            var newButton = document.createElement('button');
            newButton.textContent = questions[i].answers[j];
            buttonsHere.appendChild(newButton);
          }
        }
      questions.forEach(function (question) {
        question.answers.forEach(function (answer) {
          console.log('answer ', answer);
          var newButton = document.createElement('button');
          newButton.textContent = answer;
          buttonsHere.appendChild(newButton);
        });
      });

      
      
      function Mytimer() {
        timer = setInterval(function() {
          seconds--;
          document.getElementById("timer").textContent = seconds;
          if (seconds === 0) {
            clearInterval(timer);
            endGame();
        }}, 3000);
      };
  