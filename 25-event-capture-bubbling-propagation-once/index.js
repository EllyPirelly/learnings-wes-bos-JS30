// listen to a click on all of the divs
const divs = document.querySelectorAll('div');

function logText(e) {
    // stop bubbling this event up
    e.stopPropagation();
    console.log(this.classList.value);
    console.log(this);
}

// function logText is not going to get run on the bubble UP, it's going to get run on the capture DOWN
divs.forEach(div => div.addEventListener('click', logText, {
    // 'capture: true' would console log 'one' for the inner div
    capture: false,
    // listen for click once and unbinds itself
    once: true
}));

// button example - will only fire the event once
const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('clicked');
}, {
    once: true
});