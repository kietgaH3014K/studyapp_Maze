// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Account from './pages/Account';
import Footer from './components/Footer';
import Chatbot from './pages/Chat';
import Header from './components/Header';
import Review from './pages/Review';
import './App.css';

function App() {
  return (                   
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lo-trinh" element={<Roadmap />} />
          <Route path="/lich-hoc" element={<Schedule />} />
          <Route path="/danh-gia" element={<Review />} />
          <Route path="/about" element={<About />} />
          <Route path="/tai-khoan" element={<Account />} />
          <Route path="/chat" element={<Chatbot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
