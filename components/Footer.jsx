// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // chứa CSS tương ứng

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <p className="newsletter-title">
          Tham gia bản tin Adventure để nhận được những ưu đãi kỳ nghỉ tốt nhất của chúng tôi
        </p>
        <p className="newsletter-sub">
          Bạn có thể hủy đăng ký bất cứ lúc nào.
        </p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-column">
          <h4>Về chúng tôi</h4>
          <p>Nó hoạt động như thế nào</p>
          <p>Testimonials</p>
          <p>Nghề nghiệp</p>
          <p>Nhà đầu tư</p>
          <p>Điều khoản dịch vụ</p>
        </div>
        <div className="footer-column">
          <h4>Liên hệ với chúng tôi</h4>
          <p>Liên hệ</p>
          <p>Giúp đỡ</p>
          <p>Điểm đến</p>
          <p>Tài trợ</p>
        </div>
        <div className="footer-column">
          <h4>Phương tiện truyền thông</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Youtube</p>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="/image/maze-delvin.png" alt="Logo" />
        <p>Maze Delvin © 2025</p>
      </div>
    </footer>
  );
}
