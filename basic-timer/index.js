let sec = 0,
    min = 0,
    hr = 0,
    interval;

const hrSpan = document.querySelector('#hour')
const minSpan = document.querySelector('#min')
const secSpan = document.querySelector('#sec')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

stopBtn.disabled = true

function start() {
    startBtn.disabled = true
    stopBtn.disabled = false
    interval = setInterval(timer, 1000)
}

function stop() {
    clearInterval(interval)
    startBtn.disabled = false
    stopBtn.disabled = true
}

function reset() {
    if (interval) {
        clearInterval(interval)
    }
    sec = 0;
    min = 0;
    hr = 0;
    secSpan.textContent = "00"
    minSpan.textContent = "00"
    hrSpan.textContent = "00"
    startBtn.disabled = false
    stopBtn.disabled = true
}

function timer() {
    sec = sec + 1;
    if (sec > 59) {
        sec = 0
        min += 1
    }
    if (min > 59) {
        min = 0
        hr += 1;
    }
    secSpan.textContent = sec < 10 ? `0${sec}` : sec
    minSpan.textContent = min < 10 ? `0${min}` : min
    hrSpan.textContent = hr < 10 ? `0${hr}` : hr
}
