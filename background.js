
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
        const url = 'http://127.0.0.1:8000/api/translate/';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: data }), // Convert data to JSON
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log('Data translated successfully:', jsonData);
        
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, { jsonData });
        });

    } catch (error) {
        console.error('Error saving data:', error.message); // Log error message
    }
}
