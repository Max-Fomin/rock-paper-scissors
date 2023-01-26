let choice = [
    'rock',
    'paper',
    'scissors'
];
let promptCheck = false
let playerWins = 0;
let computerWins = 0;

function playerWon () {
    console.log('You won this round!');
    playerWins++;
}

function computerWon() {
    console.log('Computer won this round!');
    computerWins++;
}

function draw() {
    console.log('It\'s a draw');
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
    console.log(`The current result is ${playerWins} : ${computerWins}`);
    console.log('');
}

function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}

function getPlayerChoice() {
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

function aRound() {
    playerChoice = getPlayerChoice();
    console.log(`You chose ${playerChoice}`)
    computerChoice = getComputerChoice();
    console.log(`Computer chose ${computerChoice}`)
    roundResults(playerChoice, computerChoice);
}

function theGame() {
    while (playerWins < 5 && computerWins < 5) {
        aRound();
        promptCheck = false;
    }
    if (playerWins === 5) {
        console.log('You won! Congratulations!');
    } else {
        console.log('Computer won! Good luck next time!');
    }
}

theGame();