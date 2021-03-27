const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#bada55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 50
// blending effect:
// ctx.globalCompositeOperation = 'multiply';

// goal is to only draw when the mouse is down, so this is a flag we create
let isDrawing = false
// we need a starting and ending x and y
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

// is going to be called at mousemove
function draw(event) {
  // stop the function from running when not mousedown
  if (!isDrawing) return
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  // start a path
  ctx.beginPath()
  // start from
  ctx.moveTo(lastX, lastY)
  // go to
  ctx.lineTo(event.offsetX, event.offsetY)
  // update coordinates
  lastX = event.offsetX
  lastY = event.offsetY
  // [lastX, lastY] = [event.offsetX, event.offsetY];
  // paint
  ctx.stroke()

  hue++
  if (hue >= 360) {
    hue = 0
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  if (direction) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }
}

canvas.addEventListener('mousedown', () => {
  isDrawing = true
  // update lastX, lastY, otherwise we would start at 0, 0 again
  ;[lastX, lastY] = [event.offsetX, event.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))
