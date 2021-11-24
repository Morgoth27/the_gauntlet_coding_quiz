

var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timerEl");
var secondsLeft = 60;

function setTime (){
    var timer = setInterval (function() {
        secondsLeft--;
        timerEl.textContent = "> > > " + secondsLeft + " seconds remaining. < < <";

        if (secondsLeft === 0) {
            clearInterval(timer);
            alert("No time remaining, please start over.");
            window.location.reload();
        }
    }, 6000);
}

startBtn.addEventListener("click", setTime);