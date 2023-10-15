import './ChatBox.css';
import React, { useContext,useRef, useEffect } from 'react';
import LanguageContext from '../Context/LanguageContext';
const ChatBox = ({ messages }) => {
  const chatBoxRef = useRef(null);
  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    // Scroll to the bottom of the chat box when new messages are added
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-box" ref={chatBoxRef}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message-bubble ${message.sender === 'user' ? 'user' : 'other'}`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
