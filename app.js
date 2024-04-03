const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const emojiDisplay = document.getElementById('emoji');
const possibleChoices = document.querySelectorAll('button');
const options = ["rock", "paper", "scissors"];

let userChoice;
let computerChoice;
let result;
let emoji;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    generateComputerChoice();
    getResult();
    userChoiceDisplay.innerHTML = userChoice;
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * options.length);
    computerChoice = options[randomNumber];
    computerChoiceDisplay.innerHTML = computerChoice;
}

const getResult = () => {
    const outcomes = {
        'rock': {'rock': 'its a draw!', 'paper': 'you win!', 'scissors': 'you lost!'},
        'paper': {'rock': 'you lose!', 'paper': 'its a draw!', 'scissors': 'you win!'},
        'scissors': {'rock': 'you win!', 'paper': 'you lose!', 'scissors': 'its a draw!'}
    };

    result = outcomes[computerChoice][userChoice];
    switch (result) {
        case "its a draw!":
            emoji = '😐';
            break;
        case "you win!":
            emoji = '😍';
            break;
        case "you lose!":
            emoji = '😒';
            break;
        default:
            emoji = '';
    }
    emojiDisplay.innerHTML = emoji;
    resultDisplay.innerHTML = result;
};
