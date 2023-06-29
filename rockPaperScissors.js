//first draft of the script


const choices = ["Rock", "Paper", "Scissors"];
let playerWins = 0
let computerWins = 0
let playerChoice = ""


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    return computerChoice;
}


function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors!");
        return playerWins += 1;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        return playerWins += 1;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper!");
        return playerWins += 1;
    } else {
        console.log("You lose! " + computerChoice + " beats " + playerChoice);
        return computerWins += 1;
    }
}


function game() {
    playerChoice = prompt("Please enter your choice (rock, paper, scissors): ");
    playRound(playerChoice, getComputerChoice());
    console.log("You: " + playerWins + " Computer: " + computerWins);
}


function main() {
    for (let i = 0; i < 5; i++) {
        game()
    }

    if (playerWins > computerWins) {
        console.log("You win " + playerWins + " to " + computerWins + "!");
    } else if (playerWins === computerWins) {
        do {
            game()
        } while (playerWins === computerWins); 
        
        if (playerWins > computerWins) {
            console.log("You win " + playerWins + " to " + computerWins + "!");
        } else { 
            console.log("You lose! " + computerWins + " to " + playerWins + "!");
        }
    } else {
        console.log("You lose! " + computerWins + " to " + playerWins + "!");
    }
}

