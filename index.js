let timeEl = document.getElementById("time-el")
let timeHundrethEl = document.getElementById("time-hundreth-el")

let lapEl = document.getElementById("lap-el")
let lapHundrethEl = document.getElementById("lap-hundreth-el")

let outputEl = document.getElementById("output-el")

let greenBtn = document.querySelector(".green-btn")
let redBtn = document.querySelector(".red-btn")

let timerActive = false
let timerHundreth = 0
let timerArr = [0, 0, 0]   // The current time of the timer except for the hundreth seconds

let lapCount = 0
let lapHundreth = 0  // The current time of the lap except for the hundreth seconds
let lapArr = [0, 0, 0]


function checkGreenBtn() {
    switch (greenBtn.innerText){
        case "START": startClock()
            break
        case "LAP": saveLap()
            break
        case "CONTINUE": timerContinue()
    }
}

function checkRedBtn() {
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
   
 
function timerRunning() {
    if (timerActive) {
        timerHundreth++
        lapHundreth++

        // timerHundreth > 100
        if (timerHundreth == 100) {
            timerArr[0]++
            if (timerArr[0] == 60) {  // seconds to min
                timerArr[0] = 0
                timerArr[1]++
                if (timerArr[1] == 60) {  // minutes to hours
                    timerArr[1] = 0
                    timerArr[2]++
                }
            }
            timeEl.innerText = 
                `${(timerArr[2]!=0) ? `${timerArr[2]}:` :  "" }${ 
                (timerArr[1]<10) ? `0${timerArr[1]}`:`${timerArr[1]}` }:${
                (timerArr[0]<10) ? `0${timerArr[0]}`:`${timerArr[0]}`   
                }` 
            timerHundreth = 0         
        }
        // timeHundreth output
        if (timerHundreth < 10) {
            timerHundreth='0' + timerHundreth
        }
        timeHundrethEl.innerText = timerHundreth


        // lapTimer > 100
        if (lapHundreth == 100) {
            lapArr[0]++
            if (lapArr[0] == 60) {  // seconds to min
                lapArr[0] = 0
                lapArr[1]++
                if (lapArr[1] == 60) {  // minutes to hours
                    lapArr[1] = 0
                    lapArr[2]++
                }
            }
            lapEl.innerText = 
                `${(lapArr[2]!=0) ? `${lapArr[2]}:` :  "" }${ 
                (lapArr[1]<10) ? `0${lapArr[1]}`:`${lapArr[1]}` }:${
                (lapArr[0]<10) ? `0${lapArr[0]}`:`${lapArr[0]}`   
                }` 
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
    let text = `Paused: ${timeEl.innerText}.${timeHundrethEl.innerText}`
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
    lapArr = [0, 0, 0]
    lapHundrethEl.innerText = '00'
    lapEl.innerText = `${lapCount} - 0:00`
}

function resetAll() {
    timerActive = false
    timerHundreth = 0
    timerArr = [0, 0, 0]
    
    lapCount = 0
    lapHundreth = 0
    lapArr = [0, 0, 0]
    
    timeEl.innerText = "0:00"
    timeHundrethEl.innerText = "00"
    
    lapEl.innerText = `${lapCount} - 0:00`
    lapHundrethEl.innerText = "00"
    
    outputEl.innerText = ""

    greenBtn.innerText = "START"
    redBtn.innerText = "RESET"    
}