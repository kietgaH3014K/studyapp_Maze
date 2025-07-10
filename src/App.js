import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from "./pages/Dashboard.jsx";
import Roadmap from "./pages/Roadmap.jsx";
import Schedule from "./pages/Schedule.jsx";
import Evaluate from './pages/Evaluate.jsx'; // ✅ Đúng
import About from "./pages/About.jsx";
import Account from "./pages/Account.jsx";
import Chat from "./pages/Chat.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">Maze Delvin</div>
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/roadmap">Lộ trình</Link>
            <Link to="/schedule">Lịch học</Link>
            <Link to="/evaluate">Đánh giá</Link>
            <Link to="/about">About</Link>
            <Link to="/account">Tài khoản</Link>
            <Link to="/chat">Chat</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/evaluate" element={<Evaluate />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </main>

        <footer>
          <div className="subscribe-box">
            <p>Đăng ký bản tin Adventure</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="footer-columns">
            <div><h4>Về chúng tôi</h4><p>Nghề nghiệp, Điều khoản...</p></div>
            <div><h4>Liên hệ</h4><p>Liên hệ, Trợ giúp...</p></div>
            <div><h4>Kết nối</h4><p>Facebook, YouTube...</p></div>
          </div>
          <p>© Maze Delvin 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;