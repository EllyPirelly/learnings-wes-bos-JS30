const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = []

// fetch endpoint, gives you the raw data
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data))

// filter the array down
function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

// have population separated by dots, not commas
function numberWithDot(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

// called whenever someone changes the value
function displayMatches() {
  const matchArray = findMatches(this.value, cities)
  const html = matchArray
    // loop over it, render and highlight result(s)
    .map((place) => {
      const regex = new RegExp(this.value, 'gi')
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      )
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      )
      return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithDot(place.population)}</span>
        </li>
    `
    })
    .join('')
  suggestions.innerHTML = html
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')
// whenever input changes, displayMatches will be run
// change event only fires when you go off whereever you typed into!
searchInput.addEventListener('change', displayMatches)
// therefore we also have this keyup listener
searchInput.addEventListener('keyup', displayMatches)
