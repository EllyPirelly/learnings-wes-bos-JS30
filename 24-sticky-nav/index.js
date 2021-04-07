// grab nav
const nav = document.querySelector('#main');
// grab position of nav
const topOfNav = nav.offsetTop;
// console.log(topOfNav);

// on page load, where's top of nav, how far did we scoll
// when scrolling more than the top of the nav: nav sticky
function fixNav() {

    // console.log(topOfNav, window.scrollY);
    if (window.scrollY >= topOfNav) {
        // to eliminate the content jump when nav snaps
        // programmatically (!) grab px height of nav
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('snapped-nav');
    } else {
        // set it back
        document.body.style.paddingTop = 0;
        document.body.classList.remove('snapped-nav');
    }
}

window.addEventListener('scroll', fixNav);