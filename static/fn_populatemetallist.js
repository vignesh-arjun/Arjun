// functions.js - File containing functions

// Function to populate the list box
function populateList(items) {
  items.forEach(item => {
    const option = document.createElement('option');
    option.text = item;
    itemList.add(option);
  });
}
