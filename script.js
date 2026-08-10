const secretNumber = Math.floor(Math.random() * 100 ) + 1 ;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsElement = document.getElementById("attemptsElement");
let attempts = 0;

guessButton.addEventListener("click", () => { 
    const guess = Number(guessInput.value);

    if (guess < secretNumber) {
        message.textContent = "Too low! Try again";

    }

    else if (guess > secretNumber) {
        message.textContent = "Too high! Try again";
    }
    else {
        message.textContent = "Congratulations! You guessed the number!";
        
    }

    attempts++;
    attemptsElement.textContent = `Attempts: ${attempts}`;
});