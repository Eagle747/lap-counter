let timeEl = document.getElementById("time-el")
let timeHundrethEl = document.getElementById("time-hundreth-el")

let lapEl = document.getElementById("lap-el")
let lapHundrethEl = document.getElementById("lap-hundreth-el")

let outputEl = document.getElementById("output-el")

let timerActive = false
let timerHundreth = 0
let timerTime = 0   // The current time of the timer except for the hundreth seconds

let lapCount = 0
let lapHundreth = 0  // The current time of the lap except for the hundreth seconds
let lapTime = 0

function startClock() {
    timerActive = true
    lapCount = 1
    lapEl.innerText = `${lapCount} - 0:00`
    console.log('clock started')
    setInterval(timerRunning, 10)
}

function convertTimer(){
    // Increase Seconds 
    timerTime++
    timerHundreth = 0
      
    
    // Adjust time-el
    let text = ""
        // if (timerHours > 0) {
        // text += timerHours   // Hours
    
            
    // text += timerMinutes + ":"  // minutes
    if (timerTime < 10) {
        text += "0"  // If seconds < 10 add "0"
    }
    text += timerTime    // seconds    
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
    timerTime = 0
    
    lapCount = 0
    lapHundreth = 0
    lapTime = 0
    
    timeEl.innerText = "0:00"
    timeHundrethEl.innerText = "00"
    
    lapEl.innerText = `${lapCount} - 0:00`
    lapHundrethEl.innerText = "00"
    console.log("Reset HI HI")
    
    outputEl.innerText = ""
    
}