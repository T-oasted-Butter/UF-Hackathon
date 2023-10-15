import React, { useState } from 'react';
import ChatBox from './Comps/ChatBox/ChatBox';
import ChatInput from './Comps/ChatInput/ChatInput';

function App() {
  const [messages, setMessages] = useState([{ sender: 'shabounig', text: "Hi welcome to verizon, I am your designated chatbot. I am tasked with helping you answer any question you may have." }]);

  const handleNewMessage = (message) => {
    const newMessage = { sender: 'user', text: message };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="App">

      <div className="parent-container">
        <div>Verizon Logo</div>
        <div className=''>
          MARKETTING
        </div>
        <div className="chat-container">
        <ChatBox messages={messages} style={{ width: '50%' }} />
        <ChatInput onMessageSubmit={handleNewMessage} style={{ width: '50%' }} />
        </div>
      </div>
      <div>hat</div>
    </div>
  );
}

export default App;