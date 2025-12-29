const options = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

function getHumanChoice() {
    return prompt('Enter rock, paper or scissors: ');
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const text = document.getElementById('mainTitle');

    function playRound(humanChoice, computerChoice) {
        if (!humanChoice) {
            return;
        }

        humanChoice = humanChoice.toLowerCase();
        const winMap = { rock: 'scissors', paper: 'rock', scissors: 'paper' }

        if (winMap[humanChoice] === computerChoice) {
            humanScore++;
        } else if (options.includes(humanChoice)) {
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        text.textContent = `The human wins with ${humanScore} points vs ${computerScore} computer points!`;
    } else if (computerScore > humanScore) {
        text.textContent = `The computer wins with ${computerScore} points vs ${humanScore} human points!`;
    } else {
        text.textContent = `Tie game!`
    }
}

playGame();
