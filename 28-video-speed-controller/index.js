const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// use of proper function to use "this" (for the speed bar)
function handleMove(e) {
    // calculates y px position of speed bar
    const y = e.pageY - this.offsetTop;
    // turn into percent (returns values between 0% to 1%)
    const percent = y / this.offsetHeight;
    // full percentage
    const height = Math.round(percent * 100) + '%';
    // set min and max for the range
    const min = 0.4;
    const max = 4;
    // update number that's inside of the speedbar
    const playbackRate = percent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // 1 is the default
    video.playbackRate = playbackRate;

    console.log(playbackRate);
    console.log(height);
}

speed.addEventListener('mousemove', handleMove);