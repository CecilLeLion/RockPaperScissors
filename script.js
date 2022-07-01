//tell user whats happening
alert('Playing Rock, Paper, Scissors. Please choose on of the options when prompted.')
// Function to determine computers choice
function computerPlay() {
    let i;
    i = parseInt(Math.random() * 3);
    if ( i===1 ) {
        console.log('Rock');
        return ('rock');
    } else if (i === 2) {
        console.log('Paper');
        return ('paper');
    } else if (i === 0) {
        console.log('Scissors');
        return ('scissors');
    } else {
        computerPlay();
    }
}
// set scores at 0
let playerScore = 0;
let compScore = 0;

let compChoice
let playerChoice
// function to determine who wins round
function playRound(playerChoice, compChoice) {
    // set comp choice to upper case
    compChoice = computerPlay().toUpperCase();
    // prompt player with choice and make it uppercase
    playerChoice = prompt('Make Choice: ').toUpperCase();
    console.log(playerScore)
    console.log(compScore)
    // determine who wins
    if (playerChoice === compChoice) {
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Comp choice: ${compChoice}`);
        console.log('Same result, tie');
    } else if ((playerChoice === 'ROCK' && compChoice === 'PAPER') || (playerChoice === 'SCISSORS' && compChoice === 'ROCK') || (playerChoice === 'PAPER' && compChoice === 'SCISSORS')) {
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Comp choice: ${compChoice}`);
        console.log(`Computer wins! Computer chose ${compChoice}`);
        compScore += 1;
    } else if ((playerChoice === 'ROCK' && compChoice === 'SCISSORS') || (playerChoice === 'SCISSORS' && compChoice === 'PAPER') || (playerChoice === 'PAPER' && compChoice === 'ROCK')) {
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Comp choice: ${compChoice}`);
        console.log(`You win!, Computer chose ${compChoice}`);
        playerScore += 1;
    // in event of invalid option restart playRound function
    } else {
        alert('invalid choice');
        playRound()
    }
} 
// plays the game
function game(playRound) {
    for (let i=0; i < 5; i++){
        console.log(playRound(playerChoice, compChoice));
    } if (playerScore > compScore) {
        console.log(`Game over, You Win! Final Score: \n Player ${playerScore}, Computer ${compScore}`);
    } else if (compScore > playerScore) {
        console.log(`Game over, You Lose! Final score: \n Player ${playerScore}, Computer ${compScore}`);
    } else {
        console.log(`Game over, Tie! Final Score: \n Player ${playerScore}, Computer ${compScore}`);
    }
}
game(playRound)