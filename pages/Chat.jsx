import React, { useState } from "react";
import axios from "axios";

const API_KEY = "SrlxY18iY2rKmZnQ3dtkHZIzVW9tN4dH"; // 🔒 Thay bằng API key từ DeepInfra hoặc OpenAI
const ENDPOINT = "https://api.deepinfra.com/v1/openai/chat/completions";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages([...messages, userMsg]);
    setInput("");

    try {
      const res = await axios.post(
        ENDPOINT,
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMsg],
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const reply = res.data.choices[0].message;
      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      console.error("AI Error:", err);
    }
  };

  return (
    <section>
      <h2>Chat với AI</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.role === "user" ? "Bạn" : "AI"}:</strong> {msg.content}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nhập câu hỏi..." />
        <button type="submit">Gửi</button>
      </form>
    </section>
  );
}
