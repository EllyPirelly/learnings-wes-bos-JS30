// grab canvas
const canvas = document.querySelector('#draw')
// define context (where the drawing will happen)
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#bada55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 50
// blending effect:
/* ctx.globalCompositeOperation = 'multiply'; */

// only draw when the mouse is down (= flag)
let isDrawing = false
// last points of drawing of x and y
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

// called at mousemove
function draw(event) {
  // stop the function from running when not mousedown
  if (!isDrawing) return
  // color
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  // start a path
  ctx.beginPath()
  // move to
  ctx.moveTo(lastX, lastY)
  // line to
  ctx.lineTo(event.offsetX, event.offsetY)
  // update coordinates
  lastX = event.offsetX
  lastY = event.offsetY
  // or, as one liner:
  /* [lastX, lastY] = [event.offsetX, event.offsetY]; */
  // paint
  ctx.stroke()

  // increment/reset hue (color)
  hue++
  if (hue >= 360) {
    hue = 0
  }

  // linewidth: greater than 100, flip direction / less than 1, flip direction
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction
  }

  // increment/decrement linewidth
  if (direction) {
    ctx.lineWidth++
  } else {
    ctx.lineWidth--
  }
}

canvas.addEventListener('mousedown', () => {
  isDrawing = true
  // update lastX, lastY, otherwise we would always start at 0, 0 again
  ;[lastX, lastY] = [event.offsetX, event.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => (isDrawing = false))
canvas.addEventListener('mouseout', () => (isDrawing = false))
