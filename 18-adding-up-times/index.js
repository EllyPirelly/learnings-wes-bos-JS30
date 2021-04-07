// grab all of those nodes
// turn this from a node list into an array of time strings
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        // break into minutes and seconds
        // will return string
        // use parseFloat to get an array of numbers to then do math
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => {
        return total + vidSeconds
    });

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log('calculated hrs, mins, secs:', hours, mins, secondsLeft);
// console.table(timeNodes)
