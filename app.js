let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");

Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
}

const compOptions = ['r', 'p', 's'];

function getComputerChoice() {
    return compOptions.sample();
};

function convertToWord(letter) {
    if (letter === 'r') {return 'Rock';};
    if (letter === 'p') {return 'Paper';};
    if (letter === 's') {return 'Scissors';};
};

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            return userScore++,
            userScore_span.innerHTML = userScore,
            computerScore_span.innerHTML = computerScore,
            result_div.innerHTML = convertToWord(userChoice) + ' beats ' + convertToWord(computerChoice) + '. You win :)';
        case 'rr':
        case 'ss':
        case 'pp':
            return computerScore_span.innerHTML = computerScore,
            userScore_span.innerHTML = userScore,
            result_div.innerHTML = 'This game is a draw.';
            default:
                return computerScore++,
                computerScore_span.innerHTML = computerScore,
                userScore_span.innerHTML = userScore,
                result_div.innerHTML = convertToWord(computerChoice) + ' beats ' + convertToWord(userChoice) + '. You lose :(';
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    paper_div.addEventListener('click', function() {
        game('p');
    })
    scissors_div.addEventListener('click', function() {
        game('s');
    })
};

main();
