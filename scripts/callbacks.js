/*
//When calling an id you include a '#' to indicate that it is an id.

const message = document.querySelector('#mybutton')

console.log(message)

// In this case the only thing being returned is the dom element which is the button. 
*/
/*
const message = document.querySelector('#mybutton')

message.addEventListener('click', () => {
    console.log('fuck you')
})
*/

/*
For loop structure:

for (statement 1; statement 2; statement 3){
    line of code to be executed
}

Statement 1: is executed one time before the execution of the code block
Statement 2: defines the condition for executing the code block
Statement 3: is exectued every time after the code block has been exectued 
*/

/* 
What do we need:
Title (click this in this many seconds)
Counter(#counter)
timer (#timer)
button (#mybutton)
*/

// Counting Game Project

//Timer
const timerElement = document.querySelector('#timer')
const startButtonElement = document.querySelector('#button1')
const restartButtonElement = document.querySelector('#button2')
const counterElement = document.querySelector('#counter')
const targetElemnt = document.querySelector('#target')

let timer = 20
let target = parseInt(prompt('How many clicks do you think you can reach?'))
let counter = 0
let gameStarted = false

timerElement.innerHTML = timer
targetElemnt.innerHTML = target

startButtonElement.addEventListener('click', () => {
    counter += 1
    counterElement.innerHTML = counter
    gameStarted = true
})

restartButtonElement.addEventListener('click', () => {
    target = parseInt(prompt('How many clicks do you think you can reach?'))
    targetElemnt.innerHTML = target
    timer = 20
    timerElement.innerHTML = timer
    counter = 0
    counterElement.innerHTML = counter
    gameStarted = false
})

const timerStructure = setInterval(() => {
    if (gameStarted == true) {
        if (timer > 0) {
            timer -= 1
            timerElement.innerHTML = timer
        } else {
            if (counter > target) {
                alert('Congratulations! You did it!')
            } else {
                alert('Your time is up! You lost :(')
            }
            clearInterval(timerStructure);
        }
    }
}, 1000)

/* 
if (1 === '1') {
    console.log('hard equals is more strict')
}

if (1 == '1') {
    console.log(' soft equal is more lenient')
} 
*/