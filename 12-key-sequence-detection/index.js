const keyPressedArray = []

/* secret word are we looking for */
const secretCode = 'coffee'

window.addEventListener('keyup', (e) => {
  console.log(e.key)

  /* whenever key is pressed, push it into an array */
  keyPressedArray.push(e.key)

  /* trimm this, as looging could get quite bit (start from the back) */
  /* put the first pushed letter into the keyPressedArray */
  keyPressedArray.splice(
    -secretCode.length - 1,
    keyPressedArray.length - secretCode.length
  )
  /* check if the to be pushed into array contains secret code */
  if (keyPressedArray.join('').includes(secretCode)) {
    console.log('DING DING')

    /* call the fun stuff library */
    cornify_add()
  }
  console.log(keyPressedArray)
})
