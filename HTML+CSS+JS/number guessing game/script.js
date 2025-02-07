let randomNumber = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame=true;
let prevGuess= [];
let numGuess = 1;


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        validateGuess(guess);

    });


}



function validateGuess(guess){
    
    if(isNaN(guess)){
        alert("invalid : please enter a valid number");
    }
    else if(guess>100){
        alert("invalid : number is bigger than 100");
    }
    else if(guess<1){
        alert("invalid : number is smaller than 1");
    }
    else{
        prevGuess.push(guess)
        if(numGuess===10){
            displayGuess(guess)
            displayMessage(`GAME OVER!!! and the actual number is ${randomNumber}`);
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess);
        }

    }

}

function checkGuess(guess){
    if(guess>randomNumber){
        displayMessage(`Your Number is TOOOO large...`);
    }
    else if(guess<randomNumber){
        displayMessage(`Your Number is TOOOO small...`);
    }
    else if(guess===randomNumber){
        displayMessage(`BRAVOOOO.... You guess is right`);
        endGame();
    }
}

function displayGuess(guess){ //this funct is used to clear the input field once u enter any value & display the guesses
    userInput.value=''
    guessSlot.innerHTML += `${guess} , `  
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML= `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(e){

        randomNumber = parseInt(Math.random()*100+1);
        userInput.removeAttribute("disabled")
        startOver.removeChild(p);
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`

        lowOrHi.innerHTML = ''
        prevGuess= [];
        numGuess = 1;
        playGame=true;
    });

}
