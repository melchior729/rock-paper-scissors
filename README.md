# Rock Paper Scissors

A JavaScript-based Rock Paper Scissors game played against the computer.

## Features
* **5-Round Match**: Plays exactly five rounds per game session.
* **Automatic Scoring**: Tracks wins for both the player and the computer.
* **Dynamic UI**: Injects the final winner and score into the `<h1>` element upon completion.

## How to Run
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Use the UI buttons to play.

## Logic Overview
* **Input**: User selects Rock, Paper, or Scissors.
* **Computer AI**: Uses `Math.random()` to generate a counter-move.
* **Ending**: After 5 rounds, the game calculates the total score and updates the DOM header.

## Technologies
* HTML5
* JavaScript (ES6+)
