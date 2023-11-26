// JavaScript source code
function saveaddress() {
    var CustomerName = parseFloat(document.getElementById('CustomerName').value);
    var PhoneNumber = parseFloat(document.getElementById('PhoneNumber').value);
    var Address = parseFloat(document.getElementById('Address').value);

    if (typeof CustomerName !== 'string' && !isNaN(PhoneNumber) && typeof Address !== 'string')
    {
       // var result = CustomerName + PhoneNumber;
       // document.getElementById('result').innerHTML = 'Result: ' + result;

        // Send the data to the server for storage
        sendDataToServer({ CustomerName, PhoneNumber, Address });
    } else {
        alert('Please enter valid details');
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
