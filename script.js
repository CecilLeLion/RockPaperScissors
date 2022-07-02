
const winlose = document.getElementById('winloss');
const scoreMessage = document.getElementById('scoreMessage');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerScore = 0;
let compScore = 0;

scoreMessage.textContent = 'Best of 5'
pScore.textContent = `Player: ${playerScore}`
cScore.textContent = `Computer: ${compScore}`
winlose.textContent = `Make your Choice`

// clicking button activates clicked function and determines players choice
rock.addEventListener('click', () => clicked("ROCK"))
paper.addEventListener('click', () => clicked("PAPER"))
scissors.addEventListener('click', () => clicked("SCISSORS"))


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

// function which allows clicked button to select players choice
function clicked(playerChoice) {
    const compChoice = computerPlay().toUpperCase();
    playRound(playerChoice, compChoice)
}


let compChoice
let playerChoice
// function to determine who wins round and limit game length to 5 rounds
function playRound(playerChoice, compChoice) {
    // determine who wins
    if (playerScore >= 5) {
        scoreMessage.textContent = `Game Over`;
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${compScore}`;
        winlose.textContent = `Player Wins`;
    } else if (compScore >= 5) {
        scoreMessage.textContent = `Game Over`;
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${compScore}`;
        winlose.textContent = `Computer Wins`;
    }    
    else if (playerChoice === compChoice) {
        scoreMessage.textContent = `${playerChoice} was chosen by both!`;
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${compScore}`;
        winlose.textContent = `Tie!`;
    } else if ((playerChoice === 'ROCK' && compChoice === 'PAPER') || (playerChoice === 'SCISSORS' && compChoice === 'ROCK') || (playerChoice === 'PAPER' && compChoice === 'SCISSORS')) {
        compScore += 1;
        scoreMessage.textContent = `${compChoice} beats ${playerChoice}`;
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${compScore}`;
        winlose.textContent = `Computer Wins`;
    } else if ((playerChoice === 'ROCK' && compChoice === 'SCISSORS') || (playerChoice === 'SCISSORS' && compChoice === 'PAPER') || (playerChoice === 'PAPER' && compChoice === 'ROCK')) {
        playerScore += 1;
        scoreMessage.textContent = `${playerChoice} beats ${compChoice}`;
        pScore.textContent = `Player: ${playerScore}`;
        cScore.textContent = `Computer: ${compScore}`;
        winlose.textContent = `Player Wins`;
    }     
} 
