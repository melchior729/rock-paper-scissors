const options = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

const text = document.getElementById('mainTitle');

function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();
    const winMap = { rock: 'scissors', paper: 'rock', scissors: 'paper' }

    if (winMap[humanChoice] === computerChoice) {
        text.textContent = `You win! Computer played ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        text.textContent = `That is a draw! Computer played ${computerChoice}`;
    } else {
        computerScore++;
        text.textContent = `You lose! Computer played ${computerChoice}`;
    }

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            text.textContent = `Human wins!`;
        } else if (computerScore > humanScore) {
            text.textContent = `Computer wins!`;
        } else {
            text.textContent = `Tie game!`;
        }
        return;
    }
}

const div = document.createElement('div');
document.body.appendChild(div);

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
paper.textContent = "paper";
scissors.textContent = "scissors";

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);
