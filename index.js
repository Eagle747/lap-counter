let timeEl = document.getElementById("time-el")
let timeHundrethEl = document.getElementById("time-hundreth-el")

let lapEl = document.getElementById("lap-el")
let lapHundrethEl = document.getElementById("lap-hundreth-el")

let outputEl = document.getElementById("output-el")

let timerActive = false
let timerHundreth = 0
let timerSeconds = 0

let lapCount = 0
let lapHundreth = 0
let lapHours = 0
let lapMinutes = 0
let lapSeconds = 0

function startClock() {
    timerActive = true
    lapCount = 1
    lapEl.innerText = `${lapCount} - 0:00`
    console.log('clock started')
    setInterval(timerRunning, 10)
}

function convertTimer(){
    // Increase Seconds 
    timerSeconds++
    timerHundreth = 0
    
    if (timerSeconds == 60) {
        // Increase Minutes
        timerMinutes++
        timerSeconds = 0
        
        if (timerMinutes == 60) {
            // Increase Hours
            timerHours++
            timerMinutes = 0
        }    
    }

    // Adjust time-el
    let text = ""
    if (timerHours > 0) {
        text += timerHours   // Hours
        if (timerMinutes < 10) {
            text += ":0"    // If hours add ":0" for minutes < 10
            console.log("hours loop: ", text)
        }
    }        
    text += timerMinutes + ":"  // minutes
    if (timerSeconds < 10) {
        text += "0"  // If seconds < 10 add "0"
    }
    text += timerSeconds    // seconds    
    timeEl.innerText = text
}
    
 
function timerRunning() {
    if (timerActive) {
        timerHundreth++
        lapHundreth++
        
        timeHundrethEl.innerText = timerHundreth
        lapHundrethEl.innerText = lapHundreth
        if (timerHundreth == 100) convertTimer()         
    }
}   

    
function stopClock() {
    console.log("Stops the clock")
    timerActive = false
}    

function saveLap() {
    let laptext = `Lap ${lapEl.innerText}.${lapHundrethEl.innerText}`
    if (outputEl.innerText == "") {
        outputEl.innerText = laptext
    } else {
        outputEl.innerText = `${laptext}\n${outputEl.innerText}` 
    }
    lapCount++
    lapEl.innerText = `${lapCount} - 0:00`
    console.log("save lap time" + lapCount)
    
}

function resetAll() {
    timerActive = false
    timerHundreth = 0
    timerHours = 0
    timerMinutes = 0
    timerSeconds = 0
    
    lapCount = 0
    lapHundreth = 0
    lapHours = 0
    lapMinutes = 0
    lapSeconds = 0
    console.log("1. HI HI")
    
    timeEl.innerText = "0:00"
    timeHundrethEl.innerText = "00"
    
    lapEl.innerText = `${lapCount} - 0:00`
    lapHundrethEl.innerText = "00"
    console.log("2. HI HI")
    
    outputEl.innerText = ""
    
}