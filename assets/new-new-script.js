var startBtn = document.querySelector("#startBtn");
var answerA = document.querySelector("#A");
var answerB = document.querySelector("#B");
var timerEl = document.querySelector("#timerEl");
var timerContainer = document.querySelector("#timerContainer");
var rightWrong = document.querySelector("#yesNo");
var secondsLeft = 61;
var currentQuestionIndex = 0;
var choicePointer = 0;

//there was a delay in these items showing up upon click, so added a secondary function to the same button
function setTimeTwo () {
    var timerEl = document.getElementById('timerEl');
    var timerContainer = document.querySelector("#timerContainer");
    timerEl.insertAdjacentHTML("beforeBegin", '<div class="timerElBorder" id="timerElBorderL">⚔⟶</div>');
    timerEl.insertAdjacentHTML("afterEnd", '<div class="timerElBorder" id= "timerElBorderR">⟵⚔</div>');
//fade in when clicked
    timerContainer.classList.add("timerContainer", "fadeIn");
    requestAnimationFrame(); {
        timerContainer.classList.remove("fadeIn")
    }
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
        
        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("No time remaining, please start over.");
            window.location.reload();
        }

//Text outlined in different color depending upon the timer escalation
        if (secondsLeft > 40) {
            timerContainer.style.textShadow = "-1px 0 inherit, 0 1px inherit, 1px 0 inherit, 0 -1px inherit"
        }

        else if (secondsLeft >= 20 && secondsLeft <= 40) {
           
            timerContainer.style.textShadow = "-1px 0 #FF7B19, 0 1px #FF7B19, 1px 0 #FF7B19, 0 -1px #FF7B19"
        }

        else {
            timerContainer.style.textShadow = "0 0 12px red"
        }


        //functin for text to blink red at 5 second countdown
        (function setTimeThree (){
            if (secondsLeft === 5) {
        
            var blinkAlert = document.getElementById("timerEl").style,
            f = false,
            colorOne = 'black',
            colorTwo = 'red';
            // fontsizeOne = 'inherit',
            // fontsizeTwo = fontsizeOne + 3
        
                setInterval (function() {
                    blinkAlert.color = f ? colorOne : colorTwo,
                    f = !f;
                }, 100);

                return setTimeThree
        }}())


    },    
    1000);
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


startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", setTimeTwo);
startBtn.addEventListener("click", setTimeThree);

function addPoint (){
    if (correctChoice) {
    choicePointer++;
    rightWrong.textContent = "Correct!"}
    }

    function subtractPoint () {
    if (incorrectChoice) {
    secondsLeft = secondsLeft - 10;
    rightWrong.textContent = "Incorrect, timer minus 10 seconds";
    }
}


answerA.addEventListener("click", addPoint);
answerB.addEventListener("click", subtractPoint);
