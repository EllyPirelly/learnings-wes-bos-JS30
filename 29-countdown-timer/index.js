let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

// timer (secs and mins)
function timer(seconds) {
    // when timer is started, clear any exisiting timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    // run it immediately once (to catch that otherwise one sec missing)
    calculateTimeLeft(seconds);
    calculateEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // stop it, otherwise it's going negative
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // run after every second passed
        calculateTimeLeft(secondsLeft);
    }, 1000);
}

// countdown running down
function calculateTimeLeft(seconds) {
    const timeLeftMins = Math.floor(seconds / 60);
    const timeLeftSecs = seconds % 60;
    const display = `${timeLeftMins}:${timeLeftSecs < 10 ? '0' : ''}${timeLeftSecs}`;

    // updating the browser title tab
    document.title = display;
    // update textContent
    timerDisplay.textContent = display;
 }

// be back at
function calculateEndTime(timestamp) {
    // create new date object from timestamp
    const end = new Date(timestamp);
    const endHours = end.getHours();
    const endMins = end.getMinutes();
    endTimeDisplay.textContent = `I'll be back at ${endHours}:${endMins}`;
    // Americans... - not working tho 🤔
/*     const adjustedHour = endHours > 12 ? endHours - 12 : endHours;
    endTimeDisplay.textContent = `I'll be back at ${adjustedHour}:${endMins < 10 ? '0' : ''}${endMins}`; */
}

function startTimer() {
    // gives a string of the number of minutes, so parse is needed
    const startSecs = parseInt(this.dataset.time);
    timer(startSecs);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    // prevents reload
    e.preventDefault();
    // 'this' is the form, the input field
    const customMins = this.minutes.value;
    timer(customMins * 60);
    this.reset();
});