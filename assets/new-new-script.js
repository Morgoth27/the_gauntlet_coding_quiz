var startBtn = document.querySelector("#startBtn");

var rightWrong = document.querySelector("#rightWrong");

var timerEl = document.querySelector("#timerEl");

var timerContainer = document.querySelector("#timerContainer");

var userScore = document.querySelector("#userScore");
var score = 0;
var highScore = [];

var quizCard = document.querySelector("#quizSection");
var currentQ = document.querySelector("#questionUL");
var currentQuestionIndex = 0;
var choicePointer = 0;
var currentChoice;
// var rightWrong = document.querySelector("#yesNo");
var secondsLeft = 61;

var winner;
var loser;

// startBtn.addEventListener("click", setTime);
// startBtn.addEventListener("click", setTimeTwo);
startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    hideStart ();
    setTime ();
    setTimeTwo (); 
    showQ ();
}

//there was a delay in these items showing up upon click, so added a secondary function to the same button
function setTimeTwo () {
    var timerEl = document.getElementById('timerEl');
    var timerContainer = document.querySelector("#timerContainer");
    timerEl.insertAdjacentHTML("beforeBegin", '<div class="timerElBorder" id="timerElBorderL">⚔⟶</div>');
    timerEl.insertAdjacentHTML("afterEnd", '<div class="timerElBorder" id= "timerElBorderR">⟵⚔</div>');
//fade in when clicked
    timerContainer.classList.add("timerContainer", "fadeIn");
    // window.requestAnimationFrame(); {
    //     timerContainer.classList.remove("fadeIn")
    // }
    return //is this return necessary? I have no idea
}

function setTime (){
    let timer = setInterval (function() {
        secondsLeft--;
        // timerEl.innerHTML = "> > > " + secondsLeft + " seconds remaining. < < <";
        timerText = timerEl.textContent = secondsLeft + "   SECONDS REMAINING!";
        // timerText.classList.add("timerContainer", "fadeIn");
        // requestAnimationFrame(); {
        //     target.classList.remove("fadeIn")
        // }
        if (secondsLeft < 0) {
            clearInterval(timer);
            alert("No time remaining, please start over.");
            window.location.reload();
        }
//Text outlined in different color depending upon the timer escalation
        if (secondsLeft > 30) {
            timerContainer.style.textShadow = "-1px 0 inherit, 0 1px inherit, 1px 0 inherit, 0 -1px inherit"
        }

        else if (secondsLeft >= 20 && secondsLeft <= 30) {
           
            timerContainer.style.textShadow = "-1px 0 #FF7B19, 0 1px #FF7B19, 1px 0 #FF7B19, 0 -1px #FF7B19"
        }

        else {
            timerContainer.style.textShadow = "0 0 12px red"
        }
        //functin for text to blink red at 5 second countdown
        (function (){
            if (secondsLeft === 5) {
        
            var blinkAlert = document.getElementById("timerEl").style,
            f = false,
            colorOne = 'black',
            colorTwo = 'red';
            // fontsizeOne = 'inherit',
            // fontsizeTwo = fontsizeOne + 3
            //too complicated to change font size, maybe ill try that later
        
                setInterval (function() {
                    blinkAlert.color = f ? colorOne : colorTwo,
                    f = !f;
                }, 100);

                // return setTimeThree
        }}())
    },    
    1000);
}

function quizOver () {
    quizCard.innerHTML = '';
    ifWinner();
    if (winner === true) {
        clearInterval(timer);

        var winner = document.createElement('h2');
        winner.textContent = `You Won! Score: ${secondsLeft}`;
        quizCard.appendChild(winner)
    }
}

// function setTimeThree (){
//     if (secondsLeft === 55) {

//     var blinkAlert = document.getElementById("timerEl").style,
//     f = false,
//     colorOne = 'black',
//     colorTwo = 'red'
//     // fontsizeOne = 'inherit',
//     // fontsizeTwo = fontsizeOne + 3

//         setInterval (function() {
//             blinkAlert.color = f ? colorOne : colorTwo;
//             f = !f;
//         }, 300);
// }}


//now that i know .foreach, I will use that in the future. I wasn't sure if I would be penalized for using future code, since i am turning this in late.

// function addPoint (){
//     var rightWrong = document.querySelector("#rightWrong");
//     var userScore = document.querySelector("#userScore");
    // if (correctChoice) {
//     var score = choicePointer++;
//     userScore.textContent = score + 1;
//     rightWrong.textContent = "Correct!"
//     toggleQ();
// }
    // }

// function subtractPoint () {
//     var rightWrong = document.querySelector("#rightWrong");
    // if (incorrectChoice) {
    // secondsLeft = secondsLeft - 10;
    // if (secondsLeft <= 0) {
    //     secondsLeft = 0;
    //     alert("No time remaining, please start over.");
    //     window.location.reload();
    //     }
    // rightWrong.textContent = "Incorrect, timer minus 10 seconds";
    // toggleQ();
    // }
// }

// answerYes.addEventListener("click", addPoint);
// answerNo.addEventListener("click", subtractPoint);


function ifWinner(){
    if (secondsLeft >= 0) {
        winner = true;
    } else {
        loser = true;
    };
};

    function hideStart () {
    var startControls = document.getElementById("startControls");
    startControls.classList.add("hide");
    //this worked without defining startControls w a variable, but for the sake of consistency and sanity, i will just do it this way. Same with titleHeaderThree

    var titleHeaderThree = document.getElementById("titleHeaderThree");
    titleHeaderThree.classList.add("hide");

    // var questionOne = document.getElementById("questionOne");
    // questionOne.classList.replace("hide", "show");

    var userScore = document.querySelector("#scoreCard");
    userScore.classList.replace("hide", "show")
    // questionOne.classList.add("fadeIn");
    }

//     function toggleQ (e) {
//         var button = e.target;
//         var children = button.children;
//             if (button.classList == "hide");
//    };
    


// function answerQ(e) {
//     var buttonInfo = e.target;
//     var correct = e.eventTarget.classList.contains("yay");
    
//     if (correct === true) {
//         console.log("Hell yea!");
//         addPoint ();}
//         else { subtractPoint();}
// }
    //scoreCard.classList.remove("hide").add("show");
    

// function testing() {
//     console.log("ok");
// }

function showQ () {
    quizCard.innerHTML = '';
    currentQ = document.createElement('h2');
    currentQ.textContent = questions[choicePointer].question;
    quizCard.appendChild(currentQ);

    for ( var i = 0; i < questions[choicePointer].choices.length; i++) {
        currentChoice = document.createElement('button');
        currentChoice.classList.add('choice-button');
        currentChoice.textContent = questions[choicePointer].choices[i];
        currentChoice.setAttribute('value', questions[choicePointer].choices[i]);
        quizCard.appendChild(currentChoice);

        currentChoice.addEventListener("click", qResponse)

        if (choicePointer === questions.length - 1) {
            currentChoice.addEventListener("click", quizOver);
        } else {
            currentChoice.addEventListener("click", showQ);
        }
    }
    console.log(choicePointer)
}

function qResponse (e) {
    var rightWrong = document.querySelector("#rightWrong");
    var userScore = document.querySelector("#userScore");
    if (e.target.value === questions[choicePointer].correct) {

        var score = choicePointer++;
        userScore.textContent = score + 1;
        rightWrong.textContent = "Correct!";
        console.log("Yay! Correct.");

    } else {

        console.log('Wrong! Timer minus 10 seconds.');
        rightWrong.textContent = "Close, but no cigar. -10 seconds!";
        secondsLeft = secondsLeft - 10;
        if (secondsLeft <= 0) {
            secondsLeft = 0;
            alert("No time remaining, please start over.");
            window.location.reload();
            }
    }
}

    //Array of questions to be cycled through

var questions = [
    {
        question: "Medieval knights followed rules called the code of:",
        choices: ["The King", "Servitude", "Jousting", "Chivalry"],
        correct: "Chivalry"
    },
    {
        question: "Under which system did landowning nobles govern and protect the people in return for services?",
        choices: ["Vassalism", "Feudalism", "Mercantilism", "Monarchy"],
        correct: "Feudalism"
    },
    {
        question: "How many years did the averager person train before being knighted?",
        choices: ["14", "5", "1", "10"],
        correct: "14"
    },
    {
        question: "What type of weapons were invented to contest plate armor?",
        choices: ["Mace", "Halbred", "Sword", "Battleaxe"],
        correct: "Mace"
    },
    {
        question: "Knights were invented from what kind of European soldier?",
        choices: ["Infantry", "Scouts", "Foot soldier", "Heavy calvary"],
        correct: "Heavy calvary"
    },
    {
        question: "What type of horse was popular among knights, known for their agility and beauty?",
        choices: ["Thoroughbred", "Spanish", "Clydesdales", "Mustangs"],
        correct: "Spanish"
    },
    {
        question: "When medieval armor reached its pique, what was its most advanced feature?",
        choices: ["Interlocking metal rings", "Coat of plates", "Articulated plates", "Interchangeable visors"],
        correct: "Articulated plates"
    },
]


