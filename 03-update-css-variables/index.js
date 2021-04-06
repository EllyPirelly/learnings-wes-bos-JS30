const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    // dataset: object that contains all the data attributes from that specific element
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    )
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate))
inputs.forEach((input) => input.addEventListener('mousemove', handleUpdate))
