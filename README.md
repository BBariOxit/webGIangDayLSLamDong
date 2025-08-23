# Lam Dong History Website

## Giới thiệu

Trang web "Lịch sử Lâm Đồng" cung cấp thông tin, bài học, và các bài kiểm tra về lịch sử vùng đất Lâm Đồng. Dự án sử dụng React, TypeScript và hỗ trợ kết nối dữ liệu với SQL Server.

## Cấu trúc thư mục

```
├── public/           # Tài nguyên tĩnh (favicon, ảnh, manifest...)
├── src/
│   ├── assets/       # Ảnh, tài nguyên media
│   ├── components/   # Các thành phần giao diện
│   ├── data/         # Dữ liệu mẫu, dữ liệu tĩnh
│   ├── models/       # Định nghĩa kiểu dữ liệu (Region, Lesson, Quiz...)
│   ├── pages/        # Các trang chính của website
│   ├── services/     # Kết nối và xử lý dữ liệu (dbService...)
│   ├── types/        # Các kiểu dữ liệu dùng chung
│   ├── utils/        # Tiện ích, cấu hình
│   └── ...           # Các file khác
├── package.json      # Thông tin và cấu hình dự án
├── tsconfig.json     # Cấu hình TypeScript
├── README.md         # Tài liệu hướng dẫn
```

## Hướng dẫn cài đặt

1. Cài đặt Node.js và npm.
2. Cài đặt các package:
   ```bash
   npm install
   ```
3. Cài đặt package mssql để kết nối SQL Server:
   ```bash
   npm install mssql
   ```
4. Cấu hình kết nối SQL Server trong file `src/utils/dbConfig.ts` và sử dụng trong `src/services/dbService.ts`.

## Kết nối dữ liệu SQL Server

- Sử dụng các model trong `src/models/` để định nghĩa dữ liệu.
- Sử dụng `dbService.ts` để thực hiện truy vấn dữ liệu.
- Tham khảo tài liệu mssql: https://www.npmjs.com/package/mssql

## Liên hệ & đóng góp

- Tác giả: [Tên của bạn]
- Email: [Email của bạn]
- Đóng góp: Vui lòng tạo Pull Request hoặc Issue trên Github.

---

Nếu cần thêm hướng dẫn chi tiết hoặc hỗ trợ, hãy liên hệ qua email hoặc Github.

```

```
