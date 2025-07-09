export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold">Về chúng tôi</h3>
          <ul className="mt-2 space-y-1">
            <li>Nó hoạt động như thế nào</li>
            <li>Testimonials</li>
            <li>Nghề nghiệp</li>
            <li>Nhà đầu tư</li>
            <li>Điều khoản dịch vụ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Liên hệ với chúng tôi</h3>
          <ul className="mt-2 space-y-1">
            <li>Liên hệ</li>
            <li>Giúp đỡ</li>
            <li>Điểm đến</li>
            <li>Tài trợ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Phương tiện truyền thông</h3>
          <ul className="mt-2 space-y-1">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-4 text-center mt-6">
          <p className="text-brown-600">Maze Delvin © 2025</p>
        </div>
      </div>
    </footer>
  );
}
