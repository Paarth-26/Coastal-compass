// chatbot.js

document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.createElement("div");
    chatbotContainer.id = "chatbot";
    chatbotContainer.innerHTML = `
        <div class="chat-header">Chatbot</div>
        <div class="chat-body"></div>
        <input type="text" id="user-input" placeholder="Type your message..." />
        <button id="send-btn">Send</button>
    `;
    document.body.appendChild(chatbotContainer);

    const chatBody = document.querySelector(".chat-body");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", function() {
        const userMessage = userInput.value;
        if (userMessage) {
            appendMessage("You: " + userMessage);
            userInput.value = "";
            getBotResponse(userMessage);
        }
    });

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendBtn.click();
        }
    });

    function appendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
    }

    function getBotResponse(userMessage) {
        // Simulate a bot response
        const botResponse = "Bot: " + "You said: " + userMessage; // Placeholder response
        setTimeout(() => {
            appendMessage(botResponse);
        }, 1000);
    }
});