const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    // match for a, the, an - replace with nothing
    // call trim in case of any spaces after it
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
    return strip(a) > strip(b) ? 1 : -1;
    // or:
    /* if (strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    } */
});

// join on here to not have comma seperated single strings but a big string
document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.table(sortedBands);