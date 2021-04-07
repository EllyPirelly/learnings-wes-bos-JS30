// grab all images (images are hidden by default via CSS)
const sliderImages = document.querySelectorAll('.slide-in')

// debounce function, as having event listener on scroll is not performative
// this function here will only run checkSlide every 20 millisecs
function debounce(func, wait = 20, immediate = true) {
    var timeout

    return function () {
        var context = this,
            args = arguments
        var later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }

        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)

        if (callNow) func.apply(context, args)
    }
}

// runs every 20 millisecs (see debounce function!) a person scrolls
// if img is shown at 50% of its height, let it slide in/out
function checkSlide() {

    sliderImages.forEach((sliderImage) => {
        // while scrolling from top, halfway through the image height
        const slideInAt =
            window.scrollY + window.innerHeight - sliderImage.height / 2
        console.log(slideInAt)

        // bottom of the image (top of the img in relation to top of the window plus img height)
        const imageBottom = sliderImage.offsetTop + sliderImage.height
        console.log(imageBottom)

        const isHalfShown = slideInAt > sliderImage.offsetTop
        console.log(isHalfShown)

        // if img is half shown and not scrolled past = show
        const isNotScrolledPast = window.scrollY < imageBottom
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))
