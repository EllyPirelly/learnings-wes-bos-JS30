// grab outer container
const slider = document.querySelector('.items');
// flag; click or not
let isDown = false;
// initial mousedownclick position
let startX;
// intial before scrollstart position
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // calculates for the offset inbetween general page and item to be clicked inside
    // initial click
    // capture both within mousedown to reference later
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    // stop from running when mousedown is false
    if(!isDown) return;
    // will stop any kind of selecting of text inside of this etc
    e.preventDefault();
    // cursor position when mouse is moved left/right
    // recalculated every single time
    const x = e.pageX - slider.offsetLeft;
    //console.log({x, startX});
    // how far from the initial point
    // for every pixel move, scroll slider 3px
    const walk = (x - startX) * 3;
    // console.log(walk);
    slider.scrollLeft = scrollLeft - walk;
});