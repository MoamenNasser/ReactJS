'use strict';

// DOM Elements - Cache selectors to avoid repetition
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const bodyEl = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Game state variables
let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Helper functions to eliminate repetition
const displayMessage = (message) => {
  messageEl.textContent = message;
};

const displayNumber = (num) => {
  numberEl.textContent = num;
};

const displayScore = (score) => {
  scoreEl.textContent = score;
};

const changeBackgroundColor = (color) => {
  bodyEl.style.backgroundColor = color;
};

const changeNumberWidth = (width) => {
  numberEl.style.width = width;
};

// Initialize game
const initGame = () => {
  displayNumber('?');
  highscoreEl.textContent = highscore;
};

function handleEvent () {
  const guess = Number(guessEl.value);
  console.log(guess, typeof guess);
  
  // When there is no input
  if(!guess) {
    displayMessage('No number!');
  }
  // Player wins
  else if (guess === number) {
    displayMessage('Correct Number!');
    displayNumber(number);
    changeBackgroundColor('#60b347');
    changeNumberWidth('30rem');

    // Update highscore if current score is better
    if(score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } 
  // Wrong guess
  else if (guess !== number) {
    if(score > 1) {
      // Determine if guess is too high or too low
      const message = guess > number ? 'Too high!' : 'Too low!';
      const bgColor = guess > number ? '#b93d1eff' : '#37522eff';
      
      displayMessage(message);
      changeBackgroundColor(bgColor);
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
}

function handleEventAgain() {
  // Reset game state
  score = 20;
  number = Math.floor(Math.random() * 20) + 1;
  
  // Reset UI elements
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  guessEl.value = '';
  changeBackgroundColor('#222');
  changeNumberWidth('15rem');
}

// Event listeners
checkBtn.addEventListener('click', handleEvent);
againBtn.addEventListener('click', handleEventAgain);

// Initialize the game
initGame();





