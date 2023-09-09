//  Check these at last


// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  // Generate a random decimal number between 0 (inclusive) and 1 (exclusive),
  // then multiply it by 100 and add 1 to get a random number between 1 and 100.
  return Math.floor(Math.random() * 100) + 1;
}

// Function to play the guessing game
function playGuessingGame() {
  // Generate the target number that the player needs to guess.
  const targetNumber = generateRandomNumber();

  // Initialize variables to keep track of game statistics.
  let attempts = 0; // Number of attempts taken by the player.
  let guessedNumber; // The player's guessed number.

  // Display a welcome message and instructions to the user.
  console.log('Welcome to the Guessing Game!');
  console.log('Try to guess the number between 1 and 100.');
  console.log('Press the "Escape" key to skip the game.');

  // Listen for the "keydown" event to check for the "Escape" key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // If the "Escape" key is pressed, inform the user that the game is skipped and exit.
      console.log('Game skipped.');
      return;
    }
  });

  // Enter the game loop until the player guesses the correct number.
  while (guessedNumber !== targetNumber) {
    // Prompt the user to enter their guess and convert it to an integer.
    guessedNumber = parseInt(prompt('Enter your guess:'));

    // Check if the input is not a valid number.
    if (isNaN(guessedNumber)) {
      // If the input is not a valid number, alert the user and continue the loop.
      alert('Please enter a valid number.');
    } else {
      // Increment the attempts counter.
      attempts++;

      // Check if the guessed number is too low or too high and provide feedback to the user.
      if (guessedNumber < targetNumber) {
        alert('Try a higher number.');
      } else if (guessedNumber > targetNumber) {
        alert('Try a lower number.');
      }
    }
  }

  // Display a congratulatory message with the target number and the number of attempts.
  console.log(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
}

// Start the game by calling the playGuessingGame function.
playGuessingGame();
