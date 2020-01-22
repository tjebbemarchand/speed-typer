const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Game variables.
// Available levels.
const levels = {
    easy: 5,
    medium: 4,
    hard: 3
};

const currentLevel = levels.medium;
let time = currentLevel;
let score = 0;
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
    // Show number of seconds in UI.
    seconds.innerHTML = currentLevel;

    // Load word from array.
    showWord(words);

    // Match on word input.
    wordInput.addEventListener("input", checkMatch);

    // Call countdown every second.
    setInterval(countDown, 1000);

    // Check game status.
    setInterval(checkGameStatus, 50);
}

function checkMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = "";
        score++;
    }

    // If score -1, display 0.
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match current word to word input.
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
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
        score = -1;
    }
}

window.addEventListener("DOMContentLoaded", init);
