const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

// random time
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// random hole
// get me a random DOM element
function randomHole(holes) {
    // node list
    // find a random index between 0 and 5
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        // in case of the same hole thrown through generator, this will NOT have the same hole pop up (but another one), plus this log will be shown
        console.log('Same hole generate BUT new one returned plus this message');
        // and then returns/calls the function again to proceed
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;

}

// get the mole popping up
function molePeep() {
    // random time
    const time = randomTime(200, 1500);
    // random hole
    const hole = randomHole(holes);
    console.log({time, hole});
    // trigger CSS
    hole.classList.add('up');

    // after random amount of time remove class to have moles disappear
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            molePeep();
        }
    }, time);
}

// start game
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    molePeep();
    // stop game after 10 seconds
    setTimeout(() => timeUp = true, 10000);
}

// bonk the mole
function bonk(e) {
    if (!e.isTrusted) return; // cheater trying to fake a click
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));