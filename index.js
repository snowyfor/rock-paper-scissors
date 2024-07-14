// Copyright Snowyfor
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const container = document.querySelector(".container");
const result = document.querySelector("#result");
const humanResult = document.querySelector("#humanResult");
const computerResult = document.querySelector("#computerResult");

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

const playAgain = document.createElement("button");
playAgain.textContent = "Play Again";

rock.addEventListener("click", function() {
    humanResult.style.display = "block";
    computerResult.style.display = "block";
    result.style.display = "block";
    playRound("rock", getComputerChoice());
});
paper.addEventListener("click", function() {
    humanResult.style.display = "block";
    computerResult.style.display = "block";
    result.style.display = "block";
    playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function() {
    humanResult.style.display = "block";
    computerResult.style.display = "block";
    result.style.display = "block";
    playRound("scissors", getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    result.textContent = '';
    humanResult.textContent = '';
    computerResult.textContent = '';

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            drawScore++;
            result.textContent = "Draw! Rock with Rock";
        } else if (computerChoice == "paper") {
            computerScore++;
            result.textContent = "You lose! Paper beats Rock";
        } else { //computerChoice == "scissors"
            humanScore++;
            result.textContent = "You win! Rock beats Scissors";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            result.textContent = "You win! Paper beats Rock";
        } else if (computerChoice == "paper") {
            drawScore++;
            result.textContent = "Draw! Paper with Paper";
        } else { //computerChoice == "scissors"
            computerScore++;
            result.textContent = "You lose! Scissors beats Rock";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            result.textContent = "You lose! Rock beats Scissors";
        } else if (computerChoice == "paper") {
            humanScore++;
            result.textContent = "You win! Scissors beats Paper";
        } else { //computerChoice == "scissors"
            drawScore++;
            result.textContent = "Draw! Scissors with Scissors";
        }
    }
    humanResult.textContent = `Your score: ${humanScore}`;
    computerResult.textContent = `Computer score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore > computerScore) {
            result.textContent = "You win the game!";
            gameOver();
        } else {
            result.textContent = "You lose the game!";
            gameOver();
        }
    }
}

function getComputerChoice() {
    let a = Math.random();
    if ((a >= 0 && a <= 0.1) || (a > 0.3 && a <= 0.4) || (a > 0.6 && a <= 0.7) || (a > 0.9 && a <= 1)) {
        return "rock";
    } else if ((a > 0.1 && a <= 0.2) || (a > 0.4 && a <= 0.5) || (a > 0.7 && a <= 0.8)) {
        return "paper";
    } else { //(a > 0.2 && a <= 0.3) || (a > 0.5 && a <= 0.6) || (a > 0.8 && a <= 0.9)
        return "scissors";
    }
}

function gameOver() {
    humanResult.style.display = "none";
    computerResult.style.display = "none";
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    
    container.appendChild(playAgain);
    playAgain.addEventListener("click", function() {
        resetGame();
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    drawScore = 0;

    result.style.display = "none";
    rock.style.display = "inline";
    paper.style.display = "inline";
    scissors.style.display = "inline";
    playAgain.parentNode.removeChild(playAgain); //self-delete
}
