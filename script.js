// Array of valid options
const RPS = ['Rock', 'Paper', 'Scissors'];

// Number of game rounds
const ROUNDS = 5;


// Computer makes a random choice
function computerPlay() {
  return Math.floor(Math.random() * RPS.length);
}

// Player makes a choice
function playerPlay() {
  
  // Prompt player for input
  let playerInput;
  while(true) {
    playerInput = prompt('Play your turn: ');
    if (playerInput) break;
  }
  
  // Canonicalize the input
  playerInput = playerInput.toLowerCase().replace(playerInput[0], playerInput[0].toUpperCase());
  
  // Return the input value if it's valid
  for (let i = 0; i < RPS.length; i++) {
    if (playerInput === RPS[i]) {
      return i;
    }
  }
  
  // Otherwise return the function (i.e. restart it)
  return playerPlay();
}

// Play a game round
function playRound(playerSelection, computerSelection) {

  // Win condition
  if (playerSelection === computerSelection + 1 || playerSelection === computerSelection - (RPS.length - 1)) {
  
    // Use "beat" if won with scissors, otherwise "beats"
    let s = playerSelection === 2 ? 'beat' : 'beats';
    
    // Return win message
    return `You win! ${RPS[playerSelection]} ${s} ${RPS[computerSelection]}`;
  }
  
  // Lose condition
  if (playerSelection === computerSelection - 1 || playerSelection === computerSelection + (RPS.length - 1)) {
  
    // Use "beat" if lost to scissors, otherwise "beats"
    let s = computerSelection === 2 ? 'beat' : 'beats';
    
    // Return lose message
    return `You lose! ${RPS[computerSelection]} ${s} ${RPS[playerSelection]}`;
  }
  
  // Return tie message if none of conditions above were met
  return 'Tie!';
}

// Play a game
function game() {

  // Declare win counters
  let playerWinCount = 0;
  let computerWinCount = 0;
  
  // Play amount of ROUNDS
  for (let i = 0; i < ROUNDS; i++) {
    let s = playRound(playerPlay(), computerPlay());
    
    // Update counters
    if (s.includes('win')) playerWinCount++;
    if (s.includes('lose')) computerWinCount++;
    
    // Show result of the round
    console.log(s);
  }
  
  console.log('\nResult:');
  
  // Show win message if player score is higher
  if (playerWinCount > computerWinCount) {
    console.log(
      `Congratulations! You won with the score of ${playerWinCount} against computer score of ${computerWinCount}`
    );
  }
  
  // Show lose message if computer score is higher
  else if (playerWinCount < computerWinCount) {
    console.log(
      `Unlucky... You lost with the score of ${playerWinCount} against computer score of ${computerWinCount}`
    );
  }
  
  // Show tie message if scores are equal
  else {
    console.log(`Tie game. Your score of ${playerWinCount} equals computer score`);
  }
}

// Start the game
game();
