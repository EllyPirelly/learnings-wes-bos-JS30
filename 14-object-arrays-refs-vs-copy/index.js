// strings, numbers and booleans
let age = 100
let age2 = age
console.log('original age and age2:', age, age2) // 100 100
age = 200
console.log('after change: age and age2:', age, age2) // 200 100

let icon = 'Liberty'
let icon2 = icon
console.log('original icon and icon2:', icon, icon2) // Liberty Liberty
icon = 'Lady'
console.log('after change: icon and icon2:', icon, icon2) // Lady Liberty

// way to make a copy of an Array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
const team = players
console.log('original players array:')
console.table(players) // 'Wes', 'Sarah', 'Ryan', 'Poppy'
console.log('original team array:')
console.table(team) // 'Wes', 'Sarah', 'Ryan', 'Poppy'
team[3] = 'Lux'
// REFERENCE: team is NOT a copied array - it's just a REFERENCE to the original players array, so you get BOTH arrays updated:
console.log('team array, after LUX:')
console.table(team) // 'Wes', 'Sarah', 'Ryan', 'Lux'
console.log('players array, after LUX:')
console.table(players) // 'Wes', 'Sarah', 'Ryan', 'Lux'

// COPY: so how do we fix this? We take a copy with slice()
const players2original = ['one', 'two', 'the chosen one', 'four']
console.log('players2original:')
console.table(players2original) // 'one', 'two', 'the chosen one', 'four'
const team2 = players2original.slice()
team2[3] = 'HOLA'
console.log('players2original slice(2, 3) method:')
console.table(players2original.slice(2, 3)) // 'the chosen one'
console.log('players2original array after slice() method, after HOLA:')
console.table(players2original) // 'one', 'two', 'the chosen one', 'four'
console.log('team2, after HOLA:')
console.table(team2) // // 'one', 'two', 'the chosen one', 'HOLA'
console.log('players2original:')
console.table(players2original) // 'one', 'two', 'the chosen one', 'four'

// COPY: another way of creating a copy of the original array: concatenates all of the items into the empty team3 array
team3 = [].concat(players2original)
console.log('concat original players2original array:')
console.table(players2original) // 'one', 'two', 'the chosen one', 'four'

// COPY: ES6 Spread - create a new array and spread into it
// spread will take every item out of your iterable and spread/put it into the containing array
const mix = ['thing', 'sang', 'song', 'sing-a-song']
team4 = [...mix]
console.log('original mix array:')
console.table(mix) // 'thing', 'sang', 'song', 'sing-a-song'
console.log('spread into array team4:')
console.table(team4) // 'thing', 'sang', 'song', 'sing-a-song'
team4[3] = 'humpty, dumpty'
console.log('new item after spread in team4:')
console.table(team4) // 'thing', 'sang', 'song', 'humpty, dumpty'
console.log('original mix array remains untouched:')
console.table(mix) // 'thing', 'sang', 'song', 'sing-a-song'

const team5 = Array.from(mix)
console.log('original mix array')
console.table(mix) // 'thing', 'sang', 'song', 'sing-a-song'
team5[3] = 'yakkety yakk'
console.log('new item after Array.from in team5:')
console.table(team5) // 'thing', 'sang', 'song', 'yekkety yakk'
console.log('original mix array remains untouched:')
console.table(mix) // 'thing', 'sang', 'song', 'sing-a-song'

// The same thing goes for objects, let's say we have a person object
const person = {
  name: 'Wes Bos',
  age: 80,
}
console.log('original person object:')
console.table(person) // 'Wes Bos', 80

// REFERENCE: captain is NOT the object - it's just a REFERENCE to the original person object, so you get BOTH objects updated:
const captain = person
captain.age = 99
console.log('changed person object:')
console.table(person) // 'Wes Bos', 99
console.log('changed captain object:')
console.table(captain) // // 'Wes Bos', 80

// COPY: start with a blank object, pass the object you want to copy the keys from, fold in new key-value pair
const person2 = {
  name: 'Hanni Nanny',
  age: 222,
}
console.log('original person2 object:')
console.table(person2) // 'Hanni Nanny', 222

const cap2 = Object.assign({}, person2, { age: 101 })
console.log('cap2 object:')
console.table(cap2) // 'Hanni Nanny', 101
console.log('original person2 object:')
console.table(person2) // 'Hanni Nanny', 222

// COPY: object ...spread
const cap3 = { ...person2 }
cap3.something = 'something'
console.log('cap 3 after object spread something:')
console.table(cap3) // 'Hanni Nanny', 222, 'something'
console.log('original person2 object remains untouched:')
console.table(person2) // 'Hanni Nanny', 222


// tricky...
const wes = {
  name: 'wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
}
console.log('wes object:')
console.table(wes) // 'wes', 100, '@wesbos', 'wesbos.developer'

// Object.assign only goes one level deep
// if you need to get deeper you need a function clone deep -  or better figure out how to do this in a better way
const dev = Object.assign({}, wes)
console.log('wes after object.assign - dev')
console.table(dev) // 'wes', 100, '@wesbos', 'wesbos.developer'
console.log('wes after object.assign - dev.social')
console.table(dev.social) // '@wesbos', 'wesbos.developer'
dev.social.twitter = '@somebody'
console.log('wes after object.assign - dev.social.twitter change')
console.table(dev.social) // '@somebody', 'wesbos.developer'
// oh shit...
console.log('wes after object.assign - wes.social')
console.table(wes.social) // '@somebody', 'wesbos.developer'

// the poor man's deep clone - not recommended
// make the object a string and immediately parse it back to an object - meh
const dev2 = JSON.parse(JSON.stringify(wes))
dev2.social.twitter = '@changed'
console.log('dev2 object with changed twitter from wes object after JSON.parse')
console.table(dev2) // 'wes', 100, '@changed', 'wesbos.developer'
wes.social
console.log('original wes object after JSON.parse')
console.table(wes) // 'wes', 100, '@somebody', 'wesbos.developer'
