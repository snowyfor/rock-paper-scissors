// by Snowyfor
console.log("Hello World");

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

function getHumanChoice() {
    let choice = prompt("Input your choice(rock/paper/scissors): ");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                drawScore++;
                return "Draw! Rock with Rock";
            } else if (computerChoice == "paper") {
                computerScore++;
                return "You lose! Paper beats Rock";
            } else { //computerChoice == "scissors"
                humanScore++;
                return "You win! Rock beats Scissors";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore++;
                return "You win! Paper beats Rock";
            } else if (computerChoice == "paper") {
                drawScore++;
                return "Draw! Paper with Paper";
            } else { //computerChoice == "scissors"
                computerScore++;
                return "You lose! Scissors beats Rock";
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "rock") {
                computerScore++;
                return "You lose! Rock beats Scissors";
            } else if (computerChoice == "paper") {
                humanScore++;
                return "You win! Scissors beats Paper";
            } else { //computerChoice == "scissors"
                drawScore++;
                return "Draw! Scissors with Scissors";
            }
        } else {
            return "Invalid choice! Please choose rock, paper, or scissors.";
        }
    }

    for(let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        console.log(`Round ${i+1}`);
        console.log(`Human choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore) {
        return `You win!\nYour score: ${humanScore}\nComputer Score: ${computerScore}\nDraw Score: ${drawScore}`;
    } else if (humanScore < computerScore) {
        return `You lose!\nYour score: ${humanScore}\nComputer Score: ${computerScore}\nDraw Score: ${drawScore}`;
    } else { //humanScore == computerScore
        return `Draw!\nYour score: ${humanScore}\nComputer Score: ${computerScore}\nDraw Score: ${drawScore}`;
    }
}

console.log(playGame());