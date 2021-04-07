// grab hero div
const hero = document.querySelector('.hero');
// grab text inside hero div
const text = hero.querySelector('h1');
// distance wandering shadow
const walk = 200; // 200px

function shadow(e) {

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    // 'this': element listened on
    // 'target': element triggered on
    // if those two things are not the same (they need to be the same):
    if (this !== e.target) {
        // if we end up hovering over the h1 (which is NOT the hero div), take that hover position and add whatever it is from the right and whatever it is from the top
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // if 'walk' is 300, we wanna go from 150 to -150
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255, 0, 128, .7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255, 255, 0, .7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, .7),
        ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0, 0, 255, .7)
    `;

}

hero.addEventListener('mousemove', shadow);