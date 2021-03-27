// grab all checkboxes
const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')
// console.log({checkboxes});

// listen to if one of them gets clicked or changed
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
)

let lastChecked

function handleCheck(event) {
  // flag variable
  let inBetween = false
  // check if shift key down AND checked (not unchecked)
  if (event.shiftKey && this.checked) {
    // loop over every single checkbox
    // look for the first one that was checked
    checkboxes.forEach((checkbox) => {
      // console.log(checkbox);
      // works both ways top to bottom, bottom to top
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        // console.log('Starting to check them inbetween');
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}
