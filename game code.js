// Function to randomly choose rock, paper, or scissors for the computer
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
   return choices[randomIndex];
}

// Function to play Battle of Rock, Paper, Scissors game
function playGame() {
    // Generate a random choice for the computer
    const computer = computerChoice();

    // Access the HTML element to display the game result
    const resultElement = document.getElementById('gameResult');

    // Display the computer's choice
    resultElement = document.getElementById('gameResult');

    // Get the player's choice by prompting for input
    const player = prompt('Choose: rock, paper, or scissors');

    // Check game conditions
    if (!player) {
        resultElement.innerHTML += "Invalid choice. Please try again!";
    } else {
        resultElement.innerHTML += 'You chose: ${player}<br>';
        
        if (player === computer) {
            resultElement.innerHTML += "It's a tie!";
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            resultElement.innerHTML += "You win!";
        } else {
            resultElement.innerHTML += "You lose";
        }
    }
}
        