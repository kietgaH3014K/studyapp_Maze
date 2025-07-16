import React from 'react';

function Review() {
  return (
    <div className="main-content">
      <h2>Đánh giá</h2>
      <p>Trang này cho phép bạn đánh giá tiến độ học tập, chất lượng bài học và phản hồi từ AI.</p>

      <div className="review-section">
        <label htmlFor="feedback">Ý kiến của bạn:</label>
        <textarea id="feedback" placeholder="Nhập đánh giá tại đây..." rows="4" />

        <button className="submit-btn">Gửi đánh giá</button>
      </div>
    </div>
  );
}

export default Review;
