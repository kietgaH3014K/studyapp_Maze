import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png'; // tải hình của bạn vào thư mục assets

function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt="hero" className="hero-img" />
      <h1>STUDY APP</h1>
      <p>Hỗ trợ bạn xây dựng lộ trình học tập cá nhân hóa</p>
    </div>
  );
}

export default Hero;
