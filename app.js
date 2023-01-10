/* Imports */

/* Get DOM Elements */
const shell1Cont = document.getElementById('first-shell');
const shell2Cont = document.getElementById('second-shell');
const shell3Cont = document.getElementById('third-shell');

const shell1Btn = document.getElementById('shell-button-1');
const shell2Btn = document.getElementById('shell-button-2');
const shell3Btn = document.getElementById('shell-button-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

/* State */

/* Events */
shell1Btn.addEventListener('click', () => {});

shell2Btn.addEventListener('click', () => {});

shell3Btn.addEventListener('click', () => {});
/* Display Functions */
function getRandomHidingSpot() {
    const hidingPlaces = ['shell1', 'shell2', 'shell3'];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    const correctSpot = hidingPlaces[index];
    return correctSpot;
}

function handleGuess(userGuess, correctSpot) {
    if (correctSpot === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
    totalGuesses++;

    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;

    const correctCont = document.getElementById(`${correctSpot}-shell`);
}
// (don't forget to call any display functions you want to run on page load!)
