const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

let voices = [];

// grab whatever's in the static HTML input text field, have this displayed as default
msg.text = document.querySelector('[name="text"]').value;

// populate with all different built-in voices (mac has a ton of them)
function populateVoices() {
    // console.log(voices);
    // loop over offered voices, set them as selectable <option>s
    voices = this.getVoices();
    const voiceOptions = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
    voicesDropdown.innerHTML = voiceOptions;
}

// select between voice options
function setVoice() {
    // console.log(this.value);
    // loop over every single one of the voices in the array
    // find the one where the name attribute is the same as the option that is currently selected
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

// every time a new voice is selected via dropdown, restart
function toggle(startOver = true) {
    // cancel what's currently running, stop it from speaking
    speechSynthesis.cancel();
    // start again
    if (startOver) {
        speechSynthesis.speak(msg);
    }
}

function setOption() {
    // console.log(this.name, this.value);
    // what property has changed? to property value
    msg[this.name] = this.value;
    toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
// or:
// stopButton.addEventListener('click', toggle.bind(null, false));
