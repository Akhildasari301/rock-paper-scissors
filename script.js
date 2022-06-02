const options = ["rock", "paper", "scissors"];

function computerPlay() {
    len = options.length;
    index = Math.floor(Math.random() * len);
    return options[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    game_count += 1;
    if (playerSelection == computerSelection) {
        round_winner.textContent = "Tie game"
        tieScore += 1;
        tie_score_div.textContent = tieScore;
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        pScore += 1
        player_score_div.textContent = pScore;
        round_winner.textContent = "Player Won"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        // console.log("chose scissor");
        round_winner.textContent = "Player Won"
        pScore += 1
        player_score_div.textContent = pScore;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        round_winner.textContent = "Player Won"
        pScore += 1
        player_score_div.textContent = pScore;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors"){
        round_winner.textContent = "Computer Won"
        cScore += 1
        computer_score_div.textContent = cScore;
    } else if (computerSelection == "scissors" && playerSelection == "paper"){
        round_winner.textContent = "Computer Won"
        cScore += 1
        computer_score_div.textContent = cScore;
    } else if (computerSelection == "paper" && playerSelection == "rock"){
        round_winner.textContent = "Computer Won"
        cScore += 1
        computer_score_div.textContent = cScore;
    } 
    if (game_count == 5){
        gameOver.textContent = "Game Over!!"
        if (pScore > cScore){
            winner.textContent = "Player won the game. Refresh page to play again!";
        } else if (pScore < cScore){
            winner.textContent = "Computer won the game. Refresh page to play again!";
        } else {
            winner.textContent = "It's a tie. Refresh page to play again!"
        }
        return
    }
}

let game_count = 0;
let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let player_score_div = document.querySelector('.player-score')
let computer_score_div = document.querySelector('.computer-score')
let tie_score_div = document.querySelector('.tie-score')
let pScore = cScore = tieScore = 0;
let round_winner = document.querySelector('.round-winner');
let winner = document.querySelector('.winner');
let gameOver = document.querySelector('.game-over');
player_score_div.textContent = 0;
computer_score_div.textContent = 0;
tie_score_div.textContent = 0;



rock.addEventListener('click', () => playRound('rock', computerPlay()));
paper.addEventListener('click', () => playRound('paper', computerPlay()))
scissors.addEventListener('click', () => playRound('scissors', computerPlay()))
