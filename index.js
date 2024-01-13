let timeEl = document.getElementById("time-el")
let timeHundrethEl = document.getElementById("time-hundreth-el")

let lapEl = document.getElementById("lap-el")
let lapHundrethEl = document.getElementById("lap-hundreth-el")

let outputEl = document.getElementById("output-el")

let greenBtn = document.querySelector(".green-btn")
let redBtn = document.querySelector(".red-btn")

let timerActive = false
let timerHundreth = 0
let timerSec = 0   // The current time of the timer except for the hundreth seconds

let lapCount = 0
let lapHundreth = 0  // The current time of the lap except for the hundreth seconds
let lapSec = 0


function checkGreenBtn() {
    console.log('check"s Green button')
    switch (greenBtn.innerText){
        case "START": startClock()
            break
        case "LAP": saveLap()
            break
        case "CONTINUE": timerContinue()
    }
}

function checkRedBtn() {
    console.log('red Button')
    if (redBtn.innerText === "RESET") {
        resetAll()
    } else {
        stopClock()
    }
}


function startClock() {
    // timerActive = true
    lapCount = 1
    lapEl.innerText = `${lapCount} - 0:00`
    timerActive = setInterval(timerRunning, 10)

    // change buttons
    greenBtn.innerText = "LAP"
    redBtn.innerText = "STOP"
}

function convertTime(timeValue, textFrom){
    console.log(timeValue, timerSec, lapSec, textFrom)
   
    let text = ""
    if (timeValue < 10) {
        text += "0"  // If timeValue < 10 add "0"
    }
    text += timeValue    
    return(text)
}
    
 
function timerRunning() {
    if (timerActive) {
        timerHundreth++
        lapHundreth++

        // timeHundreth > 100
        if (timerHundreth == 100) {
            timerSec++
            timeEl.innerText = convertTime(timerSec, 'TimerTime')
            timerHundreth = 0         
        }
        // timeHundreth output
        if (timerHundreth < 10) {
            timerHundreth='0' + timerHundreth
        }
        timeHundrethEl.innerText = timerHundreth

        // lapTimer > 100
        if (lapHundreth == 100) {
            lapSec++
            lapEl.innerText = `${lapCount} - ${convertTime(lapSec, 'LapTime')}`
            lapHundreth = 0 
        }
        // lapHundreth output
        if (lapHundreth < 10) {
            lapHundreth='0' + lapHundreth
        }
        lapHundrethEl.innerText = lapHundreth
    }
}   

    
function stopClock() {
    clearInterval(timerActive)
    timerActive = false
    let text = `Paused at: ${timeEl.innerText}.${timeHundrethEl.innerText}`
    outputEl.innerText = `${text}\n${outputEl.innerText}`

    // change buttions
    greenBtn.innerText = "CONTINUE"
    redBtn.innerText = "RESET"
}    

function timerContinue() {
//    timerActive = true
    timerActive = setInterval(timerRunning, 10)

    // change buttons
    greenBtn.innerText = "LAP"
    redBtn.innerText = "STOP"
}


function saveLap() {
    let laptext = `Lap ${lapEl.innerText}.${lapHundrethEl.innerText}`
    if (outputEl.innerText == "") {
        outputEl.innerText = laptext
    } else {
        outputEl.innerText = `${laptext}\n${outputEl.innerText}` 
    }
    lapCount++
    lapHundreth = 0
    lapSec = 0
    lapHundrethEl.innerText = '00'
    lapEl.innerText = `${lapCount} - 0:00`
    console.log("save lap time " + lapCount)
}

function resetAll() {
    timerActive = false
    timerHundreth = 0
    timerSec = 0
    
    lapCount = 0
    lapHundreth = 0
    lapSec = 0
    
    timeEl.innerText = "0:00"
    timeHundrethEl.innerText = "00"
    
    lapEl.innerText = `${lapCount} - 0:00`
    lapHundrethEl.innerText = "00"
    
    outputEl.innerText = ""

    greenBtn.innerText = "START"
    redBtn.innerText = "RESET"    
}