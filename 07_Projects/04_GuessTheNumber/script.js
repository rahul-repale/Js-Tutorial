const randNum = Math.floor(Math.random() * 100) + 1;
const input = document.body.querySelector("#searchBox");
const button = document.body.querySelector("#submit");
const hint = document.body.querySelector("#hint");
const preValue = document.body.querySelector("#prev");
const remAttempt = document.body.querySelector("#rem");

function Event(){
    let guess = parseInt(input.value);
    if(guess <= 0 || guess > 100 || isNaN(guess))
        hint.innerHTML = "Please guess between 1 to 100"
    else{
        giveHint(guess);
        previousValue(guess);
        let attempts = 10 - arr.length;
        remainingAttempt(attempts);
    }
}

input.addEventListener('keyup', (e) => {
    if(e.key == "Enter"){
        Event();
    }
})

button.addEventListener('click', (e) => {
    Event();
})

function giveHint(num){
    if(num < randNum){
        if(num+25 < randNum)
            hint.innerHTML = "Your guess is too small"
        else
            hint.innerHTML = "your guess is bit small"
    }
    else if(num > randNum){
        if(num-25 > randNum)
            hint.innerHTML = "Your guess is too large"
        else
            hint.innerHTML = "your guess is bit large"
    }
    else if(num == randNum){
        hint.innerHTML = "Your Guess is right"
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

let arr = new Array();
function previousValue(num){
    if(arr.includes(num)){
        hint.innerHTML = `You have already guessed the number ${num}. Please try with a different number.`
    }
    else{
        arr.push(num);
        preValue.innerHTML = arr;
    }
}

function remainingAttempt(num){
    if(num <= 0){
        hint.innerHTML = `GAME OVER !, Number is ${randNum}`;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
    else{
        remAttempt.innerHTML = num;
    }
}
