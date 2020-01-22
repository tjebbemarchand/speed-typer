const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Game variables.
let time = 5;
let scrore = 0;
let isPlaying;
const words = [
    "hat",
    "river",
    "lucky",
    "statue",
    "generate",
    "stubborn",
    "cocktail",
    "runaway",
    "joke",
    "developer",
    "establishment",
    "hero",
    "javascript",
    "nutrition",
    "revolver",
    "echo",
    "siblings",
    "investigate",
    "horrendous",
    "symptom",
    "laughter",
    "magic",
    "master",
    "space",
    "definition"
];

// Initialize game.
function init() {
    // Load word from array.
    showWord(words);

    // Call countdown every second.
    setInterval(countDown, 1000);

    // Check game status.
    setInterval(checkGameStatus, 50);
}

// Pick & show random word.
function showWord(words) {
    // Generate random array index.
    const randIndex = Math.floor(Math.random() * words.length);

    // Output random word.
    currentWord.innerHTML = words[randIndex];
}

function countDown() {
    // Check the time.
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }

    // Show time.
    timeDisplay.innerHTML = time;
}

// Check the status of the game.
function checkGameStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game over!";
    }
}

window.addEventListener("DOMContentLoaded", init);
