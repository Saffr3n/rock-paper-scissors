const RPS = ['Rock', 'Paper', 'Scissors'];
const buttons = document.querySelectorAll('button');
const  scoreDisplay = document.querySelector('h2');
const  roundCounterDisplay = document.querySelector('h3');
const  roundResultDisplay = document.querySelector('div');

let roundCounter = 1;
let playerWinCounter = 0;
let computerWinCounter = 0;
let endGameMessage;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    roundCounter++;
    roundCounterDisplay.textContent = `Round ${roundCounter}`;
    roundResultDisplay.textContent = playRound(i, computerPlay());

    if (roundResultDisplay.textContent.includes('win')) playerWinCounter++;
    if (roundResultDisplay.textContent.includes('lose')) computerWinCounter++;

    scoreDisplay.textContent = `Player ${playerWinCounter} : ${computerWinCounter} Computer`;

    if (playerWinCounter === 5) endGameMessage = 'You win! Congratulations!';
    if (computerWinCounter === 5) endGameMessage = 'You lose... Better luck next time.';

    if (endGameMessage) {
      alert(endGameMessage);
      window.location.reload();
    }
  });
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection + 1 || playerSelection === computerSelection - (RPS.length - 1)) {
    let s = playerSelection === 2 ? 'beat' : 'beats';
    return `You win! ${RPS[playerSelection]} ${s} ${RPS[computerSelection]}`;
  }

  if (playerSelection === computerSelection - 1 || playerSelection === computerSelection + (RPS.length - 1)) {
    let s = computerSelection === 2 ? 'beat' : 'beats';
    return `You lose! ${RPS[computerSelection]} ${s} ${RPS[playerSelection]}`;
  }

  return 'Tie!';
}

function computerPlay() {
  return Math.floor(Math.random() * RPS.length);
}
