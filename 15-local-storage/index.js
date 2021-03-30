const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const tapasItems = JSON.parse(localStorage.getItem('tapas-items')) || [];

function addItem(e) {

  // prevents page from reloading
  e.preventDefault();

  // 'this' is the whole form tag
  const text = this.querySelector('[name=item]').value;

  const singleTapas = {
    text: text,
    done: false,
  };

  // take the item and put it into the items array
  tapasItems.push(singleTapas);

  populateList(tapasItems, itemsList);
  localStorage.setItem('tapas-items', JSON.stringify(tapasItems));

  // clear the form tag / input field
  this.reset();
}

// populate the Tapas List
function populateList(plates = [], platesList) {
  // loop over every single item in array
  // map will map over an array of data and will return another array of data
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

// NOT listening on a click - listen to something being submitted!
addItems.addEventListener('submit', addItem);

// listen for click on ul element (as added items can't be listened on if they are not present yet)
itemsList.addEventListener('click', toggleDone);

populateList(tapasItems, itemsList);

