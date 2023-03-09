const ITEMS_CONTAINER = document.getElementById('items');
const ITEM_TEMPLATE = document.getElementById('itemTemplate');
constADD_BUTTON = document.getElementById('add');

let items = getItems();

function getItems() {
    const value = localStorage.getItem('todo') || '[]';

    return JSON.parse(value);
}

console.log(items);

