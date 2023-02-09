let choice = [
    'rock',
    'paper',
    'scissors'
];
//let promptCheck = false
let playerWins = 0;
let computerWins = 0;

const scoreBoard = document.querySelector('.score');
let score = document.createElement('p');
score.textContent = `${playerWins} : ${computerWins}`;
scoreBoard.appendChild(score);

let resultScreen = document.querySelector('.result-display');
let result = document.createElement('p');
resultScreen.appendChild(result)

function displayScore () {
    score.textContent = `${playerWins} : ${computerWins}`;
}

function playerWon () {
    result.textContent +='\nYou won this round!';
    playerWins++;
}

function computerWon() {
    result.textContent +='\nComputer won this round!';
    computerWins++;
}

function draw() {
    result.textContent +='\nIt\'s a draw';
}

function roundResults(player1, player2) {
    if (player1 === 'rock') {
        if (player2 === 'paper'){
            computerWon();
        } else if (player2 === 'scissors'){
            playerWon();
        } else {
            draw();
        }
    } else if (player1 === 'paper') {
        if (player2 === 'scissors'){
            computerWon();
        } else if (player2 === 'rock'){
            playerWon();
        } else {
            draw();
        }
    } else if (player1 === 'scissors') {
        if (player2 === 'rock'){
            computerWon();
        } else if (player2 === 'paper'){
            playerWon();
        } else {
            draw();
        }
    }
    result.textContent += `\nScore is ${playerWins} : ${computerWins}`;
}

function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}

let rockChoice = document.querySelector('#rock');
rockChoice.addEventListener('click', function () {
        playerChoice = 'rock';
        aRound();
    })
let paperChoice = document.querySelector('#paper');
paperChoice.addEventListener('click', function () {
        playerChoice = 'paper';
        aRound();
    })
let scissorsChoice = document.querySelector('#scissors');
scissorsChoice.addEventListener('click', function () {
        playerChoice = 'scissors';
        aRound();
    })


/*function getPlayerChoice() {
    while (promptCheck === false) {
        let playerChoice = prompt('Rock, paper or scissors?', '').toLowerCase();
            if (choice.includes(playerChoice)){
                promptCheck = true;
                return playerChoice;
            } else {
                alert('There is no such option!');
            }
    }
}
*/

function aRound() {
    result.textContent += `\nYou chose ${playerChoice}`;
    computerChoice = getComputerChoice();
    result.textContent += `\nComputer chose ${computerChoice}`;
    roundResults(playerChoice, computerChoice);
    displayScore();
    isGameEnd();
}

function isGameEnd() {
if (playerWins === 5) {
    score.textContent += 'Congrats! You Won!'
    disableButtons();
} else if (computerWins === 5) {
    score.textContent += 'Computer Won! Better luck next time!'
    disableButtons();
}
}

function disableButtons(){
    const buttons = document.getElementsByTagName('button');
    for (const button of buttons) {
        button.disabled = true;
    }
}
