let secretNumber = Math.floor(Math.random() * 100 ) + 1 ;
console.log(secretNumber); // For testing purposes, you can remove this line in production

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const newGameButton = document.getElementById("newGameBtn");
const attemptsElement = document.getElementById("attemptsElement");
let attempts = 0;
guessButton.hidden = false;

newGameButton.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    message.textContent = "";
    attemptsElement.textContent = `Attempts: ${attempts}`;
    newGameButton.hidden = true;
});

guessButton.addEventListener("click", () => { 
    const guess = Number(guessInput.value);

    if(guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
    }
    else {
        if (guess < secretNumber) {
            message.textContent = "Too low! Try again";
        }
        else if (guess > secretNumber) {
            message.textContent = "Too high! Try again";
        }
        else {
          message.textContent = "Congratulations! You guessed the number!";
          guessButton.disabled = true;
        }
        guessInput.value = "";
        attempts++;
        newGameButton.hidden = false;
    }
    attemptsElement.textContent = `Attempts: ${attempts}`;
});