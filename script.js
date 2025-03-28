let timer;
let time = 0;
let isRunning = false;
const timerDisplay = document.getElementById("timer");
const progressRing = document.getElementById("progress-ring");
const playPauseButton = document.getElementById("playPauseButton");
const resetButton = document.querySelector('.reset-button');

function updateDisplay() {
    let minutes = Math.floor(time / 60).toString().padStart(2, '0');
    let seconds = (time % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
    let progress = (time / 600) * 565.48; 
    progressRing.style.strokeDashoffset = 565.48 - progress;
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timer);
        playPauseButton.textContent = "▶";
    } else {
        timer = setInterval(() => {
            time++;
            updateDisplay();
        }, 1000);
        playPauseButton.textContent = "❚❚";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    time = 0;
    isRunning = false;
    playPauseButton.textContent = "▶";
    updateDisplay();
}

playPauseButton.onclick = toggleTimer;
resetButton.onclick = resetTimer;

updateDisplay();
