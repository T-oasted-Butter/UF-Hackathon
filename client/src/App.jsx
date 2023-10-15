import React, { useState } from 'react';
import ChatInput from './Comps/ChatInput/ChatInput';
import ChatBox from './Comps/ChatBox/ChatBox';
import './App.css';

function App() {
  const [messages, setMessages] = useState([{ sender: 'shabounig', text: "messaskdjnaage" }]);

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
