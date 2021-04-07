// grab all checkboxes
const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')
// console.log({checkboxes});

let lastChecked

function handleCheck(event) {
    // flag variable, as soon as first one is checked = true
    let inBetween = false

    // check if shift key down AND checked
    if (event.shiftKey && this.checked) {

        // loop over every single checkbox
        // look for the first one that was checked
        checkboxes.forEach((checkbox) => {

            // works both ways top to bottom, bottom to top
            // 'this' is the checked checkbox
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
            }

            // in between two checked checkboxes
            if (inBetween) {
                checkbox.checked = true
            }
        })
    }

    lastChecked = this
}

// loop over all checkboxes, listen for click
checkboxes.forEach((checkbox) =>
    checkbox.addEventListener('click', handleCheck)
)