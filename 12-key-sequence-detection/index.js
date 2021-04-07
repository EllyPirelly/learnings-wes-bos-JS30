// secret word to be typed
const secretCode = 'coffee'

const keyPressedArray = []

window.addEventListener('keyup', (e) => {
    console.log(e.key)

    // whenever a key is pressed, push it into array
    keyPressedArray.push(e.key)

    // trimm this, as logging could get quite big (start from the back)
    // put the first pushed letter into the keyPressedArray
    keyPressedArray.splice(
        -secretCode.length - 1,
        keyPressedArray.length - secretCode.length
    )
    // check if the to be pushed key contains secret code
    if (keyPressedArray.join('').includes(secretCode)) {
        console.log('DING DING')
        // call the fun stuff library
        cornify_add()
    }

    console.log(keyPressedArray)
})
