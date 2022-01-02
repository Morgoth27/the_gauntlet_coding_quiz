var startBtn = document.querySelector("#startBtn");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var timerEl = document.querySelector("#timerEl");
var rightWrong = document.querySelector("#yesNo");
var secondsLeft = 60;
var currentQuestionIndex = 0;
var choicePointer = 0;

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
startBtn.addEventListener("click", setTime);

function addPoint (){
    if (answerA) {
    choicePointer++;
    rightWrong.textContent = "Correct!"}
    }

    function subtractPoint () {
    if (answerB) {
    secondsLeft = secondsLeft - 10;
    rightWrong.textContent = "Incorrect, timer minus 10 seconds";
    }
}


answerA.addEventListener("click", addPoint);
answerB.addEventListener("click", subtractPoint);
