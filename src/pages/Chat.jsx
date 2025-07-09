import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { role: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <section>
      <h2>Chat với AI</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <p key={i}><strong>{msg.role}:</strong> {msg.text}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập nội dung cần hỏi"
        />
        <button type="submit">Gửi</button>
      </form>
    </section>
  );
}