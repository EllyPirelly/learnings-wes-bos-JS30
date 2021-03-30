# Based on Wes Bos' javascript30.com course

### What is this about?

- codealong to [Wes Bos JavaScript30](https://javascript30.com/) course, which is a free course - the only thing you have to do is sign up
- see more of [his courses here](https://wesbos.com/courses)
- I've decided to collect all of the small code snippets in my own repro, seperated into HTML, CSS and JavaScript files

### How to run this?

Heads up: this repo doesn't have build processes - only simple HTML, CSS and JavaScript files

- clone this project
- cd into the part of the project you want to throw on localhost
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

[11 - Custom HTML4 Video Player](#11-custom-html5-video-player)

[12 - Key Sequence Detection](#12-key-sequence-detection)

[13 - Slide in on scroll](#13-slide-in-on-scroll)

[14 - Arrays and Objects](#14-arrays-and-objects)

[15 - Local Storage and Event Delegation](#15-local-storage-and-event-delegation)

[16 - CSS Text Shadow Mouse Move Effect](#16-css-text-shadow-mouse-move-effect)

[17 - Sort Without Article](#17-sort-without-article)

#### 01 Sound Kit
![sound-kit](/screenshots/screen01-sound-kit.png)

#### 02 Clock
![clock](/screenshots/screen02-clock.png)

#### 03 Update CSS Variables
![update-css-variables](/screenshots/screen03-update-css-vars.png)

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

#### 06 City or State
![city-or-state](/screenshots/screen06-city-or-state01.png)
![city-or-state](/screenshots/screen06-city-or-state02.png)

#### 07 Arrays and Methods
![arrays-and-methods-two](/screenshots/screen07-arrays-and-methods.png)
- `Array.prototype.some()`: Is at least one person 19 or older?
- `Array.prototype.every()`: Is everyone 19 or older?
- `Array.prototype.find()`: Find the comment with the ID of 823423
- `Array.prototype.findIndex()`: Find the comment with the ID of 823423 / delete the comment with the ID of 823423
- Create a new array with the updated (deleted) array

#### 08 HTML5 Canvas
![html5-canvas](/screenshots/screen08-HTML5-canvas.png)

#### 09 Dev Tools
![dev-tools](/screenshots/screen09-dev-tools.png)

#### 10 ToDo List
![todo-list](/screenshots/screen10-todo-list.png)

#### 11 Custom HTML4 Video Player
![custom-html5-video-player](/screenshots/screen11-video-player.png)

#### 12 Key Sequence Detection
![key-sequence-detection](/screenshots/screen12-key-sequence01.png)
[Konami Code](https://de.wikipedia.org/wiki/Konami_Code)
![key-sequence-detection](/screenshots/screen12-key-sequence02.png)
[Cornify Github](https://github.com/Cornify/Cornify)
[Cornify.com](https://www.cornify.com/)

#### 13 Slide In On Scroll
![slide-in-on-scroll](/screenshots/screen13-slide-in-on-scroll.png)

#### 14 Arrays and Objects
![arrays-and-objects](/screenshots/screen14-arrays-and-objects.png)
Reference vs Copy
#### 15 Local Storage and Event Delegation
![arrays-and-objects](/screenshots/screen15-local-storage.png)
Possible ToDo: add "select all" / "deselect all" buttons
#### 16 CSS Text Shadow Mouse Move Effect
![mouse-move-effect](/screenshots/screen16-shadow-mouse-move01.png)
![mouse-move-effect](/screenshots/screen16-shadow-mouse-move02.png)
Be aware of the element you are targeting! This might need recalculation of cursor position!
#### 17 Sort Without Article
![sort-without-article](/screenshots/screen17-sort-without-article.png)
Sort without "a", "an", "the" but keep those when listing/printing the sorted list.
