import React, { useState, useEffect } from 'react';

const Msg = () => {
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!authenticated) return;

    const fetchMessages = async () => {
      try {
        const response = await fetch("https://backend-production-9111.up.railway.app/messages");
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setMessages(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchMessages();
  }, [authenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "1234"; 
    if (password === correctPassword) {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Wrong password');
    }
  };

  if (!authenticated) {
    return (
      <div style={{
        maxWidth: 300,
        margin: '100px auto',
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#fafafa'
      }}>
        <h3 style={{ marginBottom: 10 }}>Admin Access</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '6px 10px',
              fontSize: '14px',
              width: '100%',
              marginBottom: 10,
              borderRadius: '4px',
              border: '1px solid #aaa'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '6px 14px',
              fontSize: '14px',
              background: '#333',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            دخول
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: 10, fontSize: 13 }}>{error}</p>}
      </div>
    );
  }

  return (
    <div style={{
      maxWidth: 600,
      margin: '40px auto',
      padding: '10px',
      fontSize: '13px',
      background: '#fff',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: 20 }}>📩 الرسائل المستلمة</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {messages.map(msg => (
          <li key={msg.id} style={{
            marginBottom: 12,
            padding: 10,
            background: '#f4f4f4',
            borderRadius: 6,
            border: '1px solid #e0e0e0'
          }}>
            <div><strong>👤 {msg.name}</strong></div>
            <div>📧 {msg.email}</div>
            <div>📝 {msg.subject}</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>{msg.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Msg;
