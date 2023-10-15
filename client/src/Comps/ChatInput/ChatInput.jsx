import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      onMessageSubmit(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-input">
      <textarea
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
