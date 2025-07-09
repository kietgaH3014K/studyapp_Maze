import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // Optional, nếu bạn có thêm CSS reset
import App from './App';   // Component chính
import reportWebVitals from './reportWebVitals'; // (tùy chọn trong CRA)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Đo hiệu năng nếu cần
reportWebVitals();
