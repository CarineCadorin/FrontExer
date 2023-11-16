import './Home.css';
import React, { useState } from 'react';
function PagesHome() {
  const [messages, setMessages] = useState([
    { user: 'Atendente diz:', content: 'Blabla blabla blabla?' },
    { user: 'Você diz:', content: 'Blablaaaa Bla' },
    { user: 'Você diz:', content: 'Bla blabla Ba' },
    { user: 'Atendente diz:', content: 'KKKKKKKKKKK blabla?' },
    { user: 'Atendente diz:', content: 'Blabla Blaaba' },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const msgInput = event.target.elements.msg;
    const newMessage = { user: 'Você diz:', content: msgInput.value };

    setMessages([...messages, newMessage]);
    msgInput.value = '';
  };

  return (
    <div id="chat-screen">
      <header>
        <h2>Atendimento on-line</h2>
      </header>

      <div className="messages-list">
        {messages.map((message, index) => (
          <div className="message-item" key={index}>
            <div className="msg-user">
              <strong>{message.user}</strong>
            </div>
            <div className="msg-chat">{message.content}</div>
          </div>
        ))}
        <div className="message-item">
          <ul id="lista"></ul>
        </div>
        <form id="formchat" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" id="msg" name="msg" placeholder="Digite sua mensagem..." />
            <button type="submit">ENVIAR</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PagesHome;
