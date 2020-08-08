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

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = userChoice + ' beats ' + computerChoice + '. You win :)';
};

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = computerChoice + ' beats ' + userChoice + '. You lose :(';
};

function draw(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = 'This game is a draw.'
};

function convertToWord(letter) {
    if (letter === 'r') {return 'Rock';};
    if (letter === 'p') {return 'Paper';};
    if (letter === 's') {return 'Scissors';};
};


function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        return draw();
    } else if (userChoice === 'r' && computerChoice === 's') {
        return win(convertToWord(userChoice), convertToWord(computerChoice));
    } else if (userChoice === 'p' && computerChoice === 'r') {
        return win(convertToWord(userChoice), convertToWord(computerChoice));
    } else if (userChoice === 's' && computerChoice === 'p') {
        return win(convertToWord(userChoice), convertToWord(computerChoice));
    } else {
        return lose(convertToWord(userChoice), convertToWord(computerChoice));
    }
};


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
