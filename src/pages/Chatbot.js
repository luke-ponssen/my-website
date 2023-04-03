import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3003/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };

  return (
    <div className="chatbot">
      <h1>Welcome to my Chatbot!</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Ask Luke anything*"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <div>{response}.</div>}
      <h6>*The responses provided above are generated using OpenAI's GPT-3 text-davinci-003 model. Though the responses are trained to represent me, they may not be entirely true nor do they accurately represent my views.</h6>
      <h6>*The the monthly limit for API calls has been reached.</h6>
    </div>
  );
}

export default Chatbot;
