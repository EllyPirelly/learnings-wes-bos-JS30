// grab the top level lis - node list
const triggers = document.querySelectorAll('.cool > li');
// grab dropdownBackground - one element
const background = document.querySelector('.dropdownBackground');
// grab the whole nav
const nav = document.querySelector('.top');

function handleEnter() {
    // 'this' is the list item
    this.classList.add('trigger-enter');
    setTimeout(() => {
        // otherwise you might want to remove a class that's not been added yet
        // check this with very quick mouse moves
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 150);
    // or:
    // setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    // figure out where the actual item is on the page
    const dropdownCoords = dropdown.getBoundingClientRect();
    // in case something within the HTML changes,
    // better include this in your calc for all coords (below)!
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    console.log('leave');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));