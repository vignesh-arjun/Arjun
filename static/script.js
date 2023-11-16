function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var result = num1 + num2;
        document.getElementById('result').innerHTML = 'Result: ' + result;

        // Send the data to the server for storage
        sendDataToServer({ num1, num2, result });
    } else {
        alert('Please enter valid numbers');
    }
}

function sendDataToServer(data) {
    // Use fetch to send data to the server
    // For simplicity, let's assume the server is running on localhost:5000
    fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log('Data sent to server:', data))
    .catch(error => console.error('Error sending data:', error));
}
