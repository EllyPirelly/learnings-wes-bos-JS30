const dogs = [
  {
    name: 'Snickers',
    age: 2,
  },
  {
    name: 'hugo',
    age: 8,
  },
]

function makeGreen() {
  const p = document.querySelector('p')
  p.style.color = '#08904c'
  p.style.fontSize = '50px'
}

// Regular
console.log('hello')

// Interpolated %s
console.log('I am: %s', 'a fool')

// Styled %c
console.log('%c I am some great text', 'font-size: 25px; background: yellow;')

// warning!
console.warn('WARN')

// Error :|
console.error('Display error here')

// Info
console.info('Only Information-Text here')

// Testing - you can test for something and if it is false it will throw an error in the console; if it is true nothing will happen
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'No ouch in p')

// clearing
// console.clear();

// Viewing DOM Elements
// this alone will only show you the element
console.log(p)
// this will allow you to open the element
console.dir(p)

// Grouping together
dogs.forEach((dog) => {
  /* console.group(`${dog.name}`); */
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`)
  console.log(`${dog.name} is ${dog.age} years old`)
  console.log(`${dog.name} is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('counter')
console.count('counter')
console.count('oneoff')
console.count('counter')
console.count('oneoff')
console.count('oneoff')
console.count('counter')
console.count('oneoff')
console.count('counter')
console.count('oneoff')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data')
    /* console.log(data); */
  })

// table
console.table(dogs)
