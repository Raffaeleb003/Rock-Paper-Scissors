const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
})) 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (!userChoice) {
        resultDisplay.innerHTML = 'Please make a choice';
        return;
    }

    if (computerChoice === userChoice) {
        result = 'Draw!';
    } else {
        switch (computerChoice) {
            case 'Rock':
                result = userChoice === 'Paper' ? 'You Win!' : 'You Lost!';
                break;
            case 'Paper':
                result = userChoice === 'Scissors' ? 'You Win!' : 'You Lost!';
                break;
            case 'Scissors':
                result = userChoice === 'Rock' ? 'You Win!' : 'You Lost!';
                break;
            default:
                result = 'Invalid Choice';
                break;
        }
    }
    resultDisplay.innerHTML = result;
}