// globals


const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector(".results")
let getPlayerScore = document.querySelector(".player-score");
let getComputerScore = document.querySelector(".computer-score");


// event listeners


rock.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    play("rock");
})


paper.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    play("paper");
})


scissors.addEventListener("click", () => {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    play("scissors");
})


// game logic 


function updatePlayerScore() {
    playerScore +=1;
    const playerScoreText = document.createTextNode(playerScore);
    getPlayerScore.replaceChildren(playerScoreText);
}


function updateComputerScore() {
    computerScore += 1;
    const computerScoreText = document.createTextNode(computerScore);
    getComputerScore.replaceChildren(computerScoreText);
}


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomNumber];
    return computerChoice;
}


function getResults(playerChoice, computerChoice, index) {
    const win = "You win! " + playerChoice + " beats " + computerChoice + "!";
    const lose = "You lose! " + computerChoice + " beats " + playerChoice + "!";
    const tie = "It's a tie! Try again!";
    const resultsList = [win, lose, tie];
    const resultsText = document.createTextNode(resultsList[index]);
    results.replaceChildren(resultsText);
}


function endGame(winOrLose) {
    const resultsText = document.createTextNode(`You ${winOrLose} ${playerScore} to ${computerScore}! `);
    results.replaceChildren(resultsText);
    const playAgain = document.createElement("button");
    playAgain.innerHTML = "Play Again?";
    results.appendChild(playAgain);
    playAgain.addEventListener("click", () => {
        clearGame();
    })
}


function isGameOver() {
    if (playerScore === 5) {
        endGame("won");
    } else if (computerScore === 5) {
        endGame("lost");
    } else {
        return;
    }
}


function clearGame() {
    getPlayerScore.replaceChildren("");
    getComputerScore.replaceChildren("");
    playerScore = 0;
    computerScore = 0;
    results.replaceChildren("First to 5 wins!");
}


function play(playerChoice) {
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        getResults(playerChoice, computerChoice, 2);
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        updatePlayerScore();
        getResults(playerChoice, computerChoice, 0);
        isGameOver();
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        updatePlayerScore();
        getResults(playerChoice, computerChoice, 0);
        isGameOver();
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        updatePlayerScore();
        getResults(playerChoice, computerChoice, 0);
        isGameOver();
    } else {
        updateComputerScore();
        getResults(playerChoice, computerChoice, 1);
        isGameOver();
    }
}