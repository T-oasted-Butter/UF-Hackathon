import React, { useState } from 'react';
import axios from 'axios';
import './ChatInput.css';

const ChatInput = ({ onMessageSubmit }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      let temp=message;
      if (temp)
        onMessageSubmit(temp, 'user');
      const data = {
        data: message,
      };
      // Define the URL where you want to send the POST request
      const url = 'http://127.0.0.1:5000/askbot';
  
      // Make the POST request using Axios
      axios.post(url, data)
        .then(response => {
          // Handle the response data here
          console.log('POST request successful', response.data);
          onMessageSubmit(response.data, 'bot');
          setMessage('');
        })
        .catch(error => {
          // Handle any errors that occurred during the POST request
          console.error('Error making POST request', error);
        });
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
