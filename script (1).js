document.getElementById('send-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    const chatbox = document.getElementById('chatbox');
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    chatbox.appendChild(userMessage);

    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    });

    const data = await response.json();
    const botMessage = document.createElement('div');
    botMessage.textContent = `Bot: ${data.response}`;
    chatbox.appendChild(botMessage);
    chatbox.scrollTop = chatbox.scrollHeight;

    document.getElementById('user-input').value = '';
});
