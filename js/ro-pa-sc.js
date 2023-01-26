//Establish the choices
let choice = [
    'rock',
    'paper',
    'scissors'
];
let promptCheck = false
//Establish the rules
function whoWins(player1, player2) {
    if (player1 === 'rock') {
        if (player2 === 'paper'){
            console.log('Computer is the winner!');
        } else if (player2 === 'scissors'){
            console.log('You are the winner!');
        } else {
            console.log('It\'s a draw');
        }
    } else if (player1 === 'paper') {
        if (player2 === 'scissors'){
            console.log('Computer is the winner!');
        } else if (player2 === 'rock'){
            console.log('You are the winner!');
        } else {
            console.log('It\'s a draw!');
        }
    } else if (player1 === 'scissors') {
        if (player2 === 'rock'){
            console.log('Computer is the winner!');
        } else if (player2 === 'paper'){
            console.log('You are the winner!');
        } else {
            console.log('It\'s a draw!');
        }
    }
}
    //rock beats scissors
    //paper beats rock
    //scissors beat paper
//Get the computer choice
function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}
//Get the player choice
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

playerChoice = getPlayerChoice();
console.log(`You chose ${playerChoice}`)
computerChoice = getComputerChoice();
console.log(`Computer chose ${computerChoice}`)
whoWins(playerChoice, computerChoice);