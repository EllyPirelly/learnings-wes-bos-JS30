// get our elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

// build our funtions
function togglePlay() {
  // either calling play or pause
  /* if (video.paused) {
      video.play()
    } else {
        video.pause()
    } */
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

// listen to the video/event, whenever it is paused, update button
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
  // console.log(icon)
}

function skip() {
  // console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  // console.log(this.name)
  // console.log(this.value)
  video[this.name] = this.value
}

function handleProgress() {
  // updating the flex-basis value in css / in percentage
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
  console.log(e)
}

// hook up the event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
// listen to the video emitting an update
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach((button) => button.addEventListener('click', skip))

ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate))
ranges.forEach((range) =>
  range.addEventListener('mousemove', handleRangeUpdate)
)

progress.addEventListener('click', scrub)
let mousedown = false
/* progress.addEventListener('mousemove', () => {
    if(mousedown) {
        scrub
    }
}) */
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))
