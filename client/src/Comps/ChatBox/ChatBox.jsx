import React, { useRef, useEffect } from 'react';
import './ChatBox.css';

const ChatBox = ({ messages }) => {
  const chatBoxRef = useRef(null);

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
