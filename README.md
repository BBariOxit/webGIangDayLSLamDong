# Lam Dong History Website

## Giới thiệu

Trang web "Lịch sử Lâm Đồng" cung cấp thông tin, bài học, và các bài kiểm tra về lịch sử vùng đất Lâm Đồng. Dự án sử dụng React JavaScript và hỗ trợ kết nối dữ liệu với SQL Server.

## Cấu trúc thư mục

```
├── public/           # Tài nguyên tĩnh (favicon, ảnh, manifest...)
├── src/
│   ├── assets/       # Ảnh, tài nguyên media
│   ├── components/   # Các thành phần giao diện
│   ├── data/         # Dữ liệu mẫu, dữ liệu tĩnh
│   ├── pages/        # Các trang chính của website
│   ├── services/     # Kết nối và xử lý dữ liệu (dbService...)
│   ├── utils/        # Tiện ích, cấu hình
│   └── ...           # Các file khác
├── package.json      # Thông tin và cấu hình dự án
├── README.md         # Tài liệu hướng dẫn
```

## Hướng dẫn cài đặt

1. Cài đặt Node.js và npm.
2. Cài đặt các package:
   ```bash
   npm install
   ```
3. Package mssql đã được thêm vào dependencies để kết nối SQL Server.
4. Cấu hình kết nối SQL Server trong file `src/utils/dbConfig.js` và sử dụng trong `src/services/dbService.js`.

## Kết nối dữ liệu SQL Server

- Sử dụng `dbService.js` để thực hiện truy vấn dữ liệu.
- Cấu hình trong `dbConfig.js`.
- Tham khảo tài liệu mssql: https://www.npmjs.com/package/mssql

## Chạy ứng dụng

```bash
npm start
```

Mở http://localhost:3000 để xem ứng dụng trong trình duyệt.

## Build production

```bash
npm run build
```

## Liên hệ & đóng góp

- Tác giả: Phan Thái Bảo
- Email: phanbao2648@gmail.com

---

Dự án đã được chuyển đổi từ TypeScript sang JavaScript để dễ dàng phát triển và bảo trì hơn.

```

```
