# Tài liệu kỹ thuật dự án Lâm Đồng History

## 1. Giới thiệu

Dự án Lâm Đồng History là ứng dụng web xây dựng bằng React (TypeScript) nhằm giới thiệu lịch sử, địa danh, văn hóa tỉnh Lâm Đồng. Dữ liệu được lưu trữ trong các file TypeScript, giao diện chia thành nhiều trang và component.

## 2. Cấu trúc thư mục

- `public/`: Chứa các file tĩnh như `index.html`, ảnh, favicon, manifest...
  - `images/`: Thư mục lưu trữ ảnh sử dụng trong dự án. Tất cả ảnh cần được đặt tại đây.
- `src/`: Chứa mã nguồn React
  - `components/`: Các component dùng chung
  - `data/`: Dữ liệu lịch sử, địa danh (ví dụ: `lamDongData.ts`)
  - `pages/`: Các trang chính: HomePage, LessonPage, QuizPage, RegionPage
  - `types/`: Định nghĩa các kiểu dữ liệu TypeScript

## 3. Cách chạy dự án

1. Cài đặt Node.js và npm
2. Chạy lệnh:
   ```sh
   npm install
   npm start
   ```
3. Truy cập ứng dụng tại `http://localhost:3000`

## 4. Sử dụng ảnh

- Ảnh được tham chiếu bằng đường dẫn tuyệt đối `/images/ten-anh.jpg`.
- Tất cả ảnh phải được đặt trong `public/images`.
- Nếu ảnh không hiển thị, kiểm tra tên file và vị trí ảnh.

## 5. Lưu ý kỹ thuật

- Sử dụng React với TypeScript, tuân thủ cấu trúc component và phân chia rõ ràng.
- Dữ liệu lịch sử được lưu trong các file TypeScript, dễ dàng mở rộng.
- Đảm bảo các file ảnh cần thiết luôn có trong `public/images`.
- Có thể mở rộng thêm các trang, chức năng hoặc dữ liệu mới bằng cách thêm vào các thư mục tương ứng.

## 6. Liên hệ & đóng góp

- Đóng góp mã nguồn, dữ liệu hoặc ảnh qua pull request hoặc liên hệ quản trị dự án.
