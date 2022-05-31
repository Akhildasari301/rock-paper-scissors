const options = ["rock", "paper", "scissors"];

function computerPlay() {
    len = options.length;
    index = Math.floor(Math.random() * len);
    return options[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "That's a tie!!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You win, rock beats scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You win, scissors beats paper!";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You win, paper beats rock";
    }
    else if (computerSelection == "rock" && computerSelection == "scissors"){
        return "You Lose, rock beats scissors";
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        return "You Lose, scissors beats paper!";
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        return "You Lose, paper beats rock";
    } else {
        return "Wrong input!!";
    }
}

function play() {
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Enter your choice: ");
        computerSelection = computerPlay()
        console.log("Your choice: ", playerSelection);
        console.log("computer's choice: ", computerSelection);
        result = playRound(playerSelection, computerSelection);
        message = `Round ${i+1}: ${result}`;
        console.log(message);
    }
}

play()

