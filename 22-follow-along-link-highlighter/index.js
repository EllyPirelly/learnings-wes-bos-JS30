const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
// append the span with class highlight as the last element of the body
document.body.appendChild(highlight);

function highlightLink() {

    // 'this' is going to be the thing that's triggered, the link
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);

    // calculate scroll position
    const coords = {
        // width and height are fine
        width: linkCoords.width,
        height: linkCoords.height,
        // top and left recalculated; left in case of horizontal scrolling
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

        highlight.style.width = `${coords.width}px`;
        highlight.style.height = `${coords.height}px`;
        highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));