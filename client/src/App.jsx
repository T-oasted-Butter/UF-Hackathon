import React, { useState } from 'react';
import ChatBox from './Comps/ChatBox/ChatBox';
import ChatInput from './Comps/ChatInput/ChatInput';

function App() {
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (message) => {
    const newMessage = { sender: 'user', text: message };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">
      <div className="chat-container">
        <ChatBox messages={messages} />
        <ChatInput onMessageSubmit={handleNewMessage} />
      </div>
    </div>
  );
}

export default App;