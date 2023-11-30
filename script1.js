const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function appendMessage(sender, message) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(messageDiv);
}

function sendMessage() {
  const userMessage = userInput.value;
  appendMessage('User', userMessage);

  // Clear user input
  userInput.value = '';

  // Call Infermedica API for symptom checking (replace with your API key)
  const infermedicaApiKey = 'YOUR_INFERMEDICA_API_KEY';
  const infermedicaApiUrl = 'https://api.infermedica.com/v3/parse';

  fetch(infermedicaApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'App-Id': infermedicaApiKey,
      'App-Key': infermedicaApiKey,
    },
    body: JSON.stringify({ text: userMessage }),
  })
  .then(response => response.json())
  .then(data => {
    const chatbotMessage = data.mentions ? 'Possible health condition detected.' : 'I couldn\'t understand the symptoms. Please try again.';
    appendMessage('Chatbot', chatbotMessage);
  })
  .catch(error => console.error('Error:', error));
}
