// JavaScript source code
function saveaddress() {
    var CustomerName = document.getElementById('CustomerName').value;
    var PhoneNumber = parseFloat(document.getElementById('PhoneNumber').value);
    var Address = document.getElementById('Address').value;

    if (CustomerName !== null && typeof CustomerName === "string" && !isNaN(PhoneNumber) && Address !== null && typeof Address === "string")
    {
       // var result = CustomerName + PhoneNumber;
       // document.getElementById('result').innerHTML = 'Result: ' + result;

        // Send the data to the server for storage
        var data = {
            CustomerName: CustomerName,
            PhoneNumber: PhoneNumber,
            Address: Address
        }
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
        .then(data => {
            console.log('Data sent to server:', data);
            // Display the server's response
            document.getElementById('response').innerText = 'Server Response: ' + data.message;})
        .catch(error => {console.error('Error sending data:', error);
            // Display an error message
            document.getElementById('response').innerText = 'Server Response: Error'; });
}
