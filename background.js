
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'formData') {
        console.log('Message:', message);
        console.log('Received formData message:', message.data);
        const receivedData = message.data;
        sendDataToServer(receivedData);
        sendResponse({farewell: 'received ' + receivedData});
    }
});

async function sendDataToServer(data) {
    try {
        const url = 'http://127.0.0.1:8000/api/translate/'; // Assuming this is your server's API endpoint
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: data }), // Convert data to JSON
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`); // Provide more informative error message
        }

        const jsonData = await response.json();
        console.log('Data saved successfully:', jsonData); // Log success message
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { jsonData });
        });



        // alert('Data saved successfully:' + jsonData.message)

    } catch (error) {
        console.error('Error saving data:', error.message); // Log error message
    }
}

// // Function to send a message to the content script
// function sendMessageToContentScript(message) {
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         const activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, { greeting: message });
//     });
// }
