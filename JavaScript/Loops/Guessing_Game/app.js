//Prompts the user to enter the maximum number for the game
// We save the user's input to the maximum variable

let maximum = parseInt(prompt("Enter the maximum number!"));
// If the user enters unvalid number, prompt them again
while (!maximum) {
    // Reaaigning the user's input to the meximum variable
    maximum = parseInt(prompt("Enter the valid number!"));  // Update number
}

// Returns a random number starting from 1 up to the maximum number (including)
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

// The prompt function always returns a string, even if we only type digits

let guess = prompt("Enter your first guess! You can type 'q' to quit game");
// Attempts = 1 because the user already made a guess
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    // This takes whatever the current value of the guess is and then tries to parse it to an integer
    // and assigns that or updates that to the guess variable again
    guess = parseInt(guess);
    // Increment the attempt variable to keep track of the number of attempts that the user has made
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("You quit!");
} else {
    console.log("Congrats, you win");
}
console.log(`You got it, it took you ${attempts} guesses`);