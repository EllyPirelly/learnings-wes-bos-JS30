window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
// needed to populate on time while speaking, NOT after stopping to speak - we want to able to see what we are saying as we are speaking
recognition.interimResults = true;

// while stop speaking a paragraph is closed
// while starting again a new paragraph is created
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {

    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    p.textContent = transcript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        words.appendChild(p);
    }

    if (transcript.includes('unicorns')) {
        console.log('🦄');
    }

    console.log(transcript);
});

recognition.addEventListener('end', recognition.start());
