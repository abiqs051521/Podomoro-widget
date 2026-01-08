let focusTime = 25 * 60;
let time = focusTime;
let interval = null;

const timerEl = document.getElementById("timer");
const alarm = document.getElementById("alarm");
const widget = document.getElementById("widget");

function updateDisplay() {
  const min = String(Math.floor(time / 60)).padStart(2, "0");
  const sec = String(time % 60).padStart(2, "0");
  timerEl.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (interval) return;

  interval = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      alarm.play();
      clearInterval(interval);
      interval = null;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  pauseTimer();
  time = focusTime;
  updateDisplay();
}

function changeBackground() {
  const url = document.getElementById("bgInput").value;
  widget.style.backgroundImage = `url('${url}')`;
}

updateDisplay();
