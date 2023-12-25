// eventHandlers.js - File containing event handlers

// Reference to the list box
const itemList = document.getElementById('itemList');

// Event listener for radio buttons
document.querySelectorAll('input[name="metal"]').forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    // Clear existing options in the list box
    itemList.innerHTML = '';

    // Get the selected option
    const selectedOption = document.querySelector('input[name="metal"]:checked').value;

    // Populate the list box based on the selected option
    if (selectedOption === 'Gold') {
      populateList(['Item A', 'Item B', 'Item C']);
    } else if (selectedOption === 'Silver') {
      populateList(['Item X', 'Item Y', 'Item Z']);
    }
  });
});
