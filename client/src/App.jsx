import React, { useState } from 'react';
import ChatBox from './Comps/ChatBox/ChatBox';
import ChatInput from './Comps/ChatInput/ChatInput';
import Header from './Comps/Header/Header';
import LanguageProvider from './Comps/Context/LanguageProvider';

function App() {
  const [messages, setMessages] = useState([{ sender: 'shabounig', text: "Hi welcome to verizon, I am your designated chatbot. I am tasked with helping you answer any question you may have." }]);

  const handleNewMessage = (message, sender) => {
    setMessages((prevMessages) => {
      return [...prevMessages, { sender, text: message }];
    });
  };

  return (
    <div className="App">
      <LanguageProvider>
      <Header/>
      <br/>
      <br/>
      <div className='temp1'>
        <center>
          <div className="chat-container">
            <ChatBox messages={messages} />
            <ChatInput onMessageSubmit={handleNewMessage}/>
          </div>
        </center>
      </div>
      </LanguageProvider>
    </div>
  );
}

export default App;