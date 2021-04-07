// form element
const addItems = document.querySelector('.add-items');
// ul
const itemsList = document.querySelector('.plates');
// future tapas items
const tapasItems = JSON.parse(localStorage.getItem('tapas-items')) || [];

function addItem(e) {

    // prevents page from reloading, b/c by default a form is going to reload
    // as we are doing this client side, prevent this from happening
    e.preventDefault();

    // 'this' is the whole form tag, so instead of globally selecting it, narrowing it down
    const text = this.querySelector('[name=item]').value;

    const singleTapas = {
        text: text,
        done: false,
    };

    // take the item and put it into the items array
    tapasItems.push(singleTapas);
    // invoke populate list with future tapas items, plates
    populateList(tapasItems, itemsList);
    // set future tapas items, with class
    localStorage.setItem('tapas-items', JSON.stringify(tapasItems));
    // clear the form / input field
    this.reset();
}

// populate list
function populateList(plates = [], platesList) {
    // map over every single item/data in array, return another array of data
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
            </li>
        `;
            // join, as map returns an array and we want a string - join will return one big string
    }).join('');
}

// make checked items persistant
function toggleDone(e) {

    // skip this unless it's an input
    if (!e.target.matches('input')) return;

    const el = e.target;
    const index = el.dataset.index;

    tapasItems[index].done = !tapasItems[index].done;
    localStorage.setItem('tapas-items', JSON.stringify(tapasItems));
    populateList(tapasItems, itemsList);
}

// NOT listening on a click - listen to something being submitted (enter, click, external submit, etc)!
addItems.addEventListener('submit', addItem);

// listen for click on ul element (as added items can't be listened on if they are not present yet)
itemsList.addEventListener('click', toggleDone);

populateList(tapasItems, itemsList);

