const video = document.querySelector('.player-grab-live');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    // will return a promise
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);

            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error(`Activate WebCam if you want to use this feature`, err);
        });
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take pixels out
        let pixels = ctx.getImageData(0, 0, width, height);

        // mess with pixels - red effect
        // pixels = redEffect(pixels);

        // mess with pixels - rgb effect
        pixels = rgbSplit(pixels);
        ctx.globalAlpha = 0.5;

        // mess with pixels - green screen
        // pixels = greenScreen(pixels);

        // put pixels back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    // play sound
    snap.currentTime = 0;
    snap.play();

    // take data of canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'pic-name');
    link.innerHTML = `
        <span class='download-pola'>Click to download polaroid</span>
        <img src='${data}' alt='alt text here'>
    `;
    strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
      pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
      pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels) {
    // object will hold minimum and maximum green
    const levels = {};

    // all six of the sliders
    document.querySelectorAll('.rgb input').forEach((input) => {
      levels[input.name] = input.value;
    });

    console.log(levels);

    // loop over every pixel and figure out what the colors are
    for (i = 0; i < pixels.data.length; i = i + 4) {
      red = pixels.data[i + 0];
      green = pixels.data[i + 1];
      blue = pixels.data[i + 2];
      alpha = pixels.data[i + 3];

      if (red >= levels.rmin
        && green >= levels.gmin
        && blue >= levels.bmin
        && red <= levels.rmax
        && green <= levels.gmax
        && blue <= levels.bmax) {
        // take it out!
        pixels.data[i + 3] = 0;
      }
    }

    return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);