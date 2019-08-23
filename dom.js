var Form = document.getElementById('addForm');
var Items = document.getElementById('items');
var ItemFilter = document.getElementById('filter');

Form.addEventListener('submit', addItem);

Items.addEventListener('click', deleteItem);

ItemFilter.addEventListener('keyup', filterItem);

function addItem(e) {
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var newLi = document.createElement('li');
  newLi.className = 'list-group-item';
  newLi.appendChild(document.createTextNode(newItem));

  var deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  deleteButton.appendChild(document.createTextNode('X'));

  newLi.appendChild(deleteButton);
  Items.appendChild(newLi);
}

function deleteItem(e) {
   if(e.target.classList.contains('delete')) {
     if(confirm('are you sure?')) {
       var li = e.target.parentElement;
       Items.removeChild(li);
     }
   }
}

function filterItem(e) {
  var text = e.target.value.toLowerCase();
  var items = Items.getElementByTagName('li');
  Array.from(items).forEach(function(item) {
     var itemName = item.firstChild.textContent;
     if(itemName.toLowerCase().indexOf(text) != -1) {
        item.style.display = 'block';
     } else {
       item.style.display = '';
     }
  })
}
