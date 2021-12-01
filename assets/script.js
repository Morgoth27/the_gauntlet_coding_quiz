var questions = [
    {
        question: 'Where is the correct place to insert a JavaScript?',
        choices: {
            1:'<head>',
            2:'<title>',
            3:'<body>',
            4:'CSS Style Sheet',
        },
        correctAnswer: 3
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: {
            1:'alertBox("Hello World");',
            2:'msg("Hello World");',
            3:'msgBox("Hello World");',
            4:'alert("Hello World");',
        },
        correctAnswer: 4
    },
    {
        question: 'How do you creat a function in JavaScript?',
        choices: {
            1:'function myFunction()',
            2:'function = myFunction()',
            3:'function:myFunction()',
            4:'execute: myFunction[]',
        },
        correctAnswer: 1
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        choices: {
            1:'v catName;',
            2:'variable catName;',
            3:'var catName;',
            4:'variable = catName',
        },
        correctAnswer: 3
    },
]

var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timerEl");
var secondsLeft = 60;
var currentQuestionIndex = 0;

function setTime (){
    var timer = setInterval (function() {
        secondsLeft--;
        timerEl.textContent = "> > > " + secondsLeft + " seconds remaining. < < <";

        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("No time remaining, please start over.");
            window.location.reload();
        }
    }, 1000);
}

question.choices.forEach(function(choice, i) {
    var choiceBtn = document.createElement('button');
    var choiceDiv = document.querySelector('.choices')
    choiceBtn.setAttribute('value', choice)
    choiceBtn.textContent = i + 1 + '. ' + choice;
    choiceDiv.appendChild(choiceBtn)
})

startBtn.addEventListener("click", setTime);

//array of Qs, and within the array there is question content