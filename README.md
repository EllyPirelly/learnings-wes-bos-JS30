# Based on Wes Bos' javascript30.com course

### What is this about?

- codealong to [Wes Bos JavaScript30](https://javascript30.com/) course, which is a free course - the only thing you have to do is sign up via email
- see more of [his courses on wesbos.com](https://wesbos.com/courses)
- see [Wes Bos JavaScript30 on GitHub](https://github.com/wesbos/JavaScript30) here
- see [transcripts](https://github.com/wesbos/Wes-Bos-Captions/tree/master/JS3) here
- most of Wes Bos lessons are desktop first, a ToDo could be to make (if possible) all of them responsive
- this repo here is my small codealong code snippets, seperated into HTML, CSS and JavaScript files
- down below I've included screenshots of single course projects, to give a visual representation

### How to run this?

Heads up: unless stated otherwise, the majority of my code examples don't have build processes - only simple HTML, CSS and JavaScript files

- clone this whole repo or copy and paste code of a single project
- cd into the project you want to throw on localhost
- open `index.html` in your browser of choice (in my case, built in/for Chrome)

### Course Content

[01 - Sound Kit](#01-sound-kit)

[02 - Clock](#02-clock)

[03 - Update CSS Variables](#03-update-css-variables)

[04 - Arrays and Methods](#04-arrays-and-methods)

[05 - Flex Panels](#05-flex-panels)

[06 - City or State](#06-city-or-state)

[07 - Arrays and Methods](#07-arrays-and-methods)

[08 - HTML5 Canvas](#08-html5-canvas)

[09 - Dev Tools](#09-dev-tools)

[10 - ToDo List](#10-todo-list)

[11 - Custom HTML5 Video Player](#11-custom-html5-video-player)

[12 - Key Sequence Detection](#12-key-sequence-detection)

[13 - Slide in on scroll](#13-slide-in-on-scroll)

[14 - Arrays and Objects](#14-arrays-and-objects)

[15 - Local Storage and Event Delegation](#15-local-storage-and-event-delegation)

[16 - CSS Text Shadow Mouse Move Effect](#16-css-text-shadow-mouse-move-effect)

[17 - Sort Without Article](#17-sort-without-article)

[18 - Add Up Times](#18-add-up-times)

[19 - Webcam Fun](#19-webcam-fun)

[20 - Speech Detection](#20-speech-detection)

[21 - Geolocation Speedometer Compass](#21-geolocation-speedometer-compass)

[22 - Follow Along Link](#22-follow-along-link)

[23 - Speech Synthesis](#23-speech-synthesis)

[24 - Sticky Nav](#24-sticky-nav)

[25 - Event Capture, Bubbling, Propagation, Once](#25-event-capture-bubbling-propagation-once)

[26 - Animated Follow Along Nav](#26-animated-follow-along-nav)

[27 - Leporello Click and Drag Slider](#27-leporello-click-and-drag-slider)

[28 - Video Speed Controller](#28-video-speed-controller)

[29 - Countdown Timer](#29-countdown-timer)

[30 - Whack-A-Mole](#30-whack-a-mole)

#### 01 Sound Kit
![sound-kit](/screenshots/screen01-sound-kit.png)
- grab keyCodes that are asscociated with the keys displayed here
- [keycode.info](http://keycode.info/)
- listen to `keydown` event
- if there's corresponding audio, play audio on keydown
- along a bit of transformation (via CSS)

#### 02 Clock
![clock](/screenshots/screen02-clock.png)
- grab current time
- update hands accordingly (seconds, minutes, hour)
- along a bit of transition (some via CSS, some via JavaScript)

#### 03 Update CSS Variables
![update-css-variables](/screenshots/screen03-update-css-vars.png)
- 3 `<input>`, 2 of them of the type `range`, 1 of them of the type `color`
- via JavaScript, manipulate default set CSS variables `--base`, `--blur` and `--spacing`
- event listener for `change` and `mousemove`, will be triggered regardless of which one happened

#### 04 Arrays and Methods
![arrays-and-methods-one](/screenshots/screen04-arrays-and-methods.png)
- `Array.prototype.filter()`: Filter the list of inventors for those who were born in the 1500's
- `Array.prototype.map()`: Give us an array of the inventors first and last names
- `Array.prototype.sort()`: Sort the inventors by birthdate, oldest to youngest
- `Array.prototype.reduce()`: How many years did all the inventors live all together?
- `Array.prototype.sort()`: Sort the inventors by years lived
- `Array.from()`, `Array.map()`, `Array.filter()`: Create a list of Boulevards in Paris that contain 'de' anywhere in the name
- Sort Exercise: Sort the people alphabetically by last name
- Reduce Exercise: Sum up the instances of each of these

#### 05 Flex Panels
![flex-panels](/screenshots/screen05-flex-panels.png)
- most things are done with CSS here (Flexbox, transitions, translates)
- if clicking on one panel, said panel will grow in size and show additional text coming in from the top and the bottom (via `translateY()`)
- if all panels are clicked, all of them will show the whole texts, available space will be distributed evenly
- JavaScript is only needed to toggle associated classes

#### 06 City or State
![city-or-state](/screenshots/screen06-city-or-state01.png)
![city-or-state](/screenshots/screen06-city-or-state02.png)
- fetch and filter data (US cities and US states) from external `.json` file link, distributed by Wes Bos
- filter / search for within that list of cities and states
- all matching cities and states will be shown while typing ahead in search field
- results (if any) will be rendered as `innerHTML`s and - through adding a CSS class - will be highlighted while typing

#### 07 Arrays and Methods
![arrays-and-methods-two](/screenshots/screen07-arrays-and-methods.png)
- `Array.prototype.some()`: Is at least one person 19 or older?
- `Array.prototype.every()`: Is everyone 19 or older?
- `Array.prototype.find()`: Find the comment with the ID of 823423
- `Array.prototype.findIndex()`: Find the comment with the ID of 823423 / delete the comment with the ID of 823423
- Create a new array with the updated (deleted) array

#### 08 HTML5 Canvas
![html5-canvas](/screenshots/screen08-HTML5-canvas.png)
- enable drawing on HTML5 element `<canvas>` - that said, drawing will happen on `context` in 2d - via click and drag
- listen for `mousedown`, `mousemove`, `mouseup`, `mouseout`
- within the draw function, using some options we have on the `context` regarding color, linewidth etc

#### 09 Dev Tools
![dev-tools](/screenshots/screen09-dev-tools.png)
- this tutorial is about what you can log in the console
    - `console.log('hello');`
    - `console.warn('WARN');`
    - `console.error('Display error here');`
    - `console.info('Only Information-Text here');`
    - `console.clear();`
    - `console.time();`
    - `console.count();`
    - `console.table();`
- interpolated `%s` - will pass the second parameter into the first parameter
    - `console.log('I am: %s‘, ‚a fool');`
- styled `%c`
    - `console.log('%c I am some great text', 'font-size: 25px; background: yellow;');`

#### 10 ToDo List
![todo-list](/screenshots/screen10-todo-list.png)
- click a checkbox, hold down shift key, click another checkbox - automatically also mark all of the checkboxes inbetween
- works top to bottoema and bottom to top
- listen on `click` event on all checkboxes
- check for shift key being down AND checked

#### 11 Custom HTML5 Video Player
![custom-html5-video-player](/screenshots/screen11-video-player.png)
- customize the default HTML5 video player controls (in my case, on Chrome)
- hide those panels and build our own based on our own HTML
    - play / pause button
    - volume slider
    - speed of video slider
    - skip buttons (10 seconds back / 25 seconds forward)
    - progress bar (dragable, showing where we're at)
- listen to
    - `click`, `play`, `pause`, `timeupdate`, `change`, `mousemove`, `mousedown`, `mouseup`
- possible ToDo: implement full screen button

#### 12 Key Sequence Detection
![key-sequence-detection](/screenshots/screen12-key-sequence01.png)
- when someone inputs a certain sequence of keys, then something needs to happen / something is triggered, e.g. an easter egg
- most used online: [Konami Code](https://de.wikipedia.org/wiki/Konami_Code)
![key-sequence-detection](/screenshots/screen12-key-sequence02.png)
- type **coffee**, this will trigger `cornify_add()`
- see [Cornify Github](https://github.com/Cornify/Cornify)
- see [Cornify.com](https://www.cornify.com/)
- listen to `keyup` event on window
- `splice`

#### 13 Slide In On Scroll
![slide-in-on-scroll](/screenshots/screen13-slide-in-on-scroll.png)
##### "Make sure to debounce your scoll functions! Performance!"
- when scrolling down a page, have images slide in from left/right at half-scolled passed image height
- images are hidden by default via CSS (`translate()`, `opacity: 0`)
- listen on `scroll` event
- implement debounce function, as having event listener on scroll is not performative - the implemented function will only run the `checkSlide()` function every 20 milliseconds

#### 14 Arrays and Objects
![arrays-and-objects](/screenshots/screen14-arrays-and-objects.png)
- Reference vs Copy
- strings, numbers, booleans: if you reassign a variable and afterwards change the value of the original variable, the original variable value will change but NOT the reassigned one
- **array reference:** if you update an array it will always reference back; reference example is NOT a copied array, it's just a reference to the original array, so BOTH of them will be updated!
- **array copy options:**
    - `exisitingArray.slice()`
    - concatenate an existing array into an empty array `[].concat(existingArray)`
    - ES6 spread `[...existingArray]`
    - `Array.from(existingArray)
- **object reference:** if you update an object it will always reference back; reference example is NOT a copied object, it’s just a reference to the original object, so BOTH of them will be updated!
- **object copy options:**
    - `Object.assign({}, existingObject, { new-property: new-value })`, the third parameter can of course also overwrite existing property/values
    - ES6 spread `{...existingObject}``
    - `Object.assign()` only goes one level deep!
    - the poor man's deep clone: `JSON.parse(JSON.stringify(existingObject))` - make the object a string and immediately parse it back to an object, not recommended

#### 15 Local Storage and Event Delegation
![arrays-and-objects](/screenshots/screen15-local-storage.png)
- create menu where you can add items and - after adding - immediately check/uncheck them
- whatever's being entered will have a persisting state (local storage), after refreshing the page (`localStorage.setItems()`)
- possible ToDo: add "select all" / "deselect all" buttons

#### 16 CSS Text Shadow Mouse Move Effect
![mouse-move-effect](/screenshots/screen16-shadow-mouse-move01.png)
![mouse-move-effect](/screenshots/screen16-shadow-mouse-move02.png)
**"Be aware of the element you are targeting! This might need recalculation of cursor position!**
- create a shadow that follows mouse move

#### 17 Sort Without Article
![sort-without-article](/screenshots/screen17-sort-without-article.png)
- sort band names without considering "a", "an", "the", but keep those when listing/printing the sorted list
- `sort()`, `trim()`, `map()`, `join()`
- [RegEx](https://regex101.com/)

#### 18 Add Up Times
![add-up-times](/screenshots/screen18-add-up-times.png)
- add up total number of hours, minutes, seconds of all videos
- numbers are provided via **string** in `"data-time="xx:xx"`
- convert them to numbers, add them all up to total
- `.map()`
- `.reduce()`
- modulo

#### 19 Webcam Fun
![webcam-fun](/screenshots/screen19-webcam-fun01.png)
![webcam-fun](/screenshots/screen19-webcam-fun02.png)
![webcam-fun](/screenshots/screen19-webcam-fun03.png)
- heads-up: my code is different from Wes Bos

how to:
- in Wes Bos course he has this running via live server/browsersync, so if you copy this code, run `npm install`, then `npm start`
- you need to give access to your camera to use this feature
- live camera footage will be grabbed, drawn on canvas, colors manipulated
- chose between three effects: rgb effect, red effect, green screen
- check `index.js`, here `setInterval()`, to un/comment desired effect
- download image you've screenshot
- sliders only work on green screen effect

#### 20 Speech Detection
![speech-detection](/screenshots/screen20-speech-detection.png)
how to:
- in Wes Bos course he has this running via live server/browsersync, so if you copy this code, run `npm install`, then `npm start`
- you need to give access to your microphone to use this feature
- for every started/stopped spoken sentence, a new `<p></p>` is going to be created and filled with detected words

heads-up:
- make sure you're only detecting for speech in ONE browser window/tab
- even then, in my case my recognition froze after a few spoken words (both, with browsersync and 'native' Visual Studio Code Live Server) and I had to either stop/start browsersync and/or hard reload the browser window
#### 21 Geolocation Speedometer Compass
![geoloc-speedometer-compass](/screenshots/screen21-geolocation.png)
how to:
- what is desired to be shown is how many degrees of north a person is (with the compass) and the speed at which somebody is moving (in km/h)
- in Wes Bos course he has this running via live server/browsersync, so if you copy this code, run `npm install`, then `npm start`
- you need to give access to your location to use this feature
- as on Chrome we can fake geolocation coordinates but cannot fake geolocation heading and geolocation speed, this is supposed to grab heading and speed data given by Chrome and work with that
- this is intended to be developped with Xcode via simulation of another device (e.g., iPhone11) (I've sat this one out)
- for this after firing up `npm start` you'd need to copy the external URL shown in your terminal into the browwer of the simulated device on Xcode
#### 22 Follow Along Link
![follow-along-link](/screenshots/screen22-follow-along-link.gif)
- what is desired to be shown is when hovering with mouse over the whole page, have the links having an animated hover effect that follows (with a little bit of delay) while moving along

#### 23 Speech Synthesis
![speech-synthesis](/screenshots/screen23-speech-synthesis.png)
- give typed in text a voice
- SpeechSynthesis Web Speach API (experimental feature)
- limit selectable voices to `'en'``
- manipulate speed and pitch of spoken words/voice

#### 24 Sticky Nav
![sticky-nav](/screenshots/screen24-sticky-nav01.png)
![sticky-nav](/screenshots/screen24-sticky-nav02.png)
- a sticky nav that snaps after scrolling past header image
- little transition while sliding in the 'LOST'
- programmatic calculation of nav position while scrolling

#### 25 Event Capture, Bubbling, Propagation, Once
![event-capture](/screenshots/screen25-event-capture.png)
- example: three nested `<div>`s, event listener 'click' on each one of them
- consider while using `addEventListener` what's being fired when!
- `capture`: goes from top to bottom, no event being fired, only captures where you click, then starts at the botton and will bubble up the event
- `bubbling`: click on the innermost element will also trigger the outer parent element
- `stopPropagation()`: stops bubbling up the event
- `once: true`: listens for the event once and unbinds itself; use for example in store checkouts when you don't want and need a customer clicking (submitting) a button multiple times - see `<button>` element

#### 26 Animated Follow Along Nav
![animated-follow-along-nav](/screenshots/screen26-follow-along-nav01.png)
![animated-follow-along-nav](/screenshots/screen26-follow-along-nav02.gif)
- expanding nav on hover (transforming background of nav, adapting width and height automatically)
- top level `<li>`s will be triggered
- most of this can be done with CSS BUT here it's calculated how big the `ul class="dropdown"` container is and how to have the white background behind it

#### 27 Leporello Click and Drag Slider
![leporello-click-and-drag](/screenshots/screen27-leporello-slider.gif)
- left/right click and dragable slider with (calculated) mouse actions `mousedown`, `mouseleave`, `mouseup` and `mousemove`

#### 28 Video Speed Controller
![video-speed-controller](/screenshots/screen28-video-speed-controller.png
)
- control scrubber, control speed as video is playing

#### 29 Countdown Timer
![countdown-timer](/screenshots/screen29-countdown-timer.png)
- timer with 6 options:
    - 20 seconds
    - 5 minutes
    - 15 minutes
    - 20 minutes
    - 60 minutes
    - customised entered minutes
- displays how much time is left

#### 30 Whack-A-Mole
![whack-a-mole](/screenshots/screen30-whack-a-mole.png)
- bonk 6 moles when they pop up
- runs for 10 seconds after start has been clicked
- count the hits on a score board
