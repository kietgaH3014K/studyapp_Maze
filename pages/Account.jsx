import React from "react";

export default function Account() {
  return (
    <section>
      <h2>TÀI KHOẢN</h2>
      <form>
        <input type="text" placeholder="Tên người dùng" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng kí / Đăng nhập</button>
      </form>
    </section>
  );
}