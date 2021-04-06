function playSound(e) {
  // select the audio element
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
  // select elements of class key
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
  // if there's "no audio on a key", stop function
  if (!audio) return
  // rewind to the start
  audio.currentTime = 0
  // invoke
  audio.play()
  // add class playing to class key
  key.classList.add('playing')
}

function removeTransition(e) {
  // skip, if it's not a transform
  if (e.propertyName !== 'transform') return
  this.classList.remove('playing')
}

// select every class key on the page
const keys = document.querySelectorAll('.key')
// each key gets an evenlistener added to it
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)
