const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;

function startGame() {
  rl.question('Guess a number between 1 and 100: ', (input) => {

    const userGuess = parseInt(input);

    if (isNaN(userGuess)) {
      console.log('Invalid input. Please enter a number.');
      startGame();
    } else {
      if (userGuess === secretNumber) {
        console.log('Congratulations! You guessed the correct number!');
        rl.close();
      } else if (userGuess < secretNumber) {
        console.log('Too low! Try guessing a higher number.');
        startGame();
      } else {
        console.log('Too high! Try guessing a lower number.');
        startGame();
      }
    }
  });
}

startGame();
