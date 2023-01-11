/* Imports */

/* Get DOM Elements */
const shell1Cont = document.getElementById('first-shell');
const shell2Cont = document.getElementById('second-shell');
const shell3Cont = document.getElementById('third-shell');

const shell1Btn = document.getElementById('shell-button-1');
const shell2Btn = document.getElementById('shell-button-2');
const shell3Btn = document.getElementById('shell-button-3');
const resetBtn = document.getElementById('reset-button');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

let correctGuesses = 0;
let incorrectGuesses = 0;
let totalGuesses = 0;

/* State */

/* Events */
shell1Btn.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    getRandomHidingSpot();
    handleGuess('first-shell', correctSpot);
});

shell2Btn.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    getRandomHidingSpot();
    handleGuess('second-shell', correctSpot);
});

shell3Btn.addEventListener('click', () => {
    const correctSpot = getRandomHidingSpot();
    getRandomHidingSpot();
    handleGuess('third-shell', correctSpot);
});

resetBtn.addEventListener('click', () => {
    removeClasses();
    winsEl.textContent = 0;
    lossesEl.textContent = 0;
    totalEl.textContent = 0;
});
/* Display Functions */
function getRandomHidingSpot() {
    const hidingPlaces = ['first-shell', 'second-shell', 'third-shell'];
    const index = Math.floor(Math.random() * hidingPlaces.length);
    const correctSpot = hidingPlaces[index];

    return correctSpot;
}

function handleGuess(userGuess, correctSpot) {
    removeClasses();
    if (correctSpot === userGuess) {
        correctGuesses++;
    } else {
        incorrectGuesses++;
    }
    totalGuesses++;

    winsEl.textContent = correctGuesses;
    lossesEl.textContent = incorrectGuesses;
    totalEl.textContent = totalGuesses;

    const correctCont = document.getElementById(`${correctSpot}`);

    correctCont.classList.add('ball');
}

function removeClasses() {
    shell1Cont.classList.remove('ball');
    shell2Cont.classList.remove('ball');
    shell3Cont.classList.remove('ball');
}
// (don't forget to call any display functions you want to run on page load!)
