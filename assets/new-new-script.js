var startBtn = document.querySelector("#startBtn");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var timerEl = document.querySelector("#timerEl");
var timerContainer = document.querySelector("#timerContainer");
var rightWrong = document.querySelector("#yesNo");
var secondsLeft = 61;
var currentQuestionIndex = 0;
var choicePointer = 0;

function setTimeTwo () {
    var timerEl = document.getElementById('timerEl');
    timerEl.insertAdjacentHTML("beforeBegin", '<div class="timerElBorder">⟶</div>');
    timerEl.insertAdjacentHTML("afterEnd", '<div class= "timerElBorder">⟵</div>');
    return
}

function setTime (){

    let timer = setInterval (function() {
        secondsLeft--;
        // timerEl.innerHTML = "> > > " + secondsLeft + " seconds remaining. < < <";
        timerEl.textContent = secondsLeft + "   SECONDS REMAINING!";


        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("No time remaining, please start over.");
            window.location.reload();
        }

        if (secondsLeft > 40) {
            timerContainer.style.textShadow = "-1px 0 inherit, 0 1px inherit, 1px 0 #FF7B19, 0 -1px inherit"
    }

        else if (secondsLeft >= 20 && secondsLeft <= 40) {
            // timerEl.style.color = '#FF7B19';
            timerContainer.style.textShadow = "-1px 0 #FF7B19, 0 1px #FF7B19, 1px 0 #FF7B19, 0 -1px #FF7B19"
        }

        else {
            timerContainer.style.textShadow = "-1px 0 red, 0 1px red, 1px 0 red, 0 -1px red"
        }
    }, 1000);
}
startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", setTimeTwo);

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
