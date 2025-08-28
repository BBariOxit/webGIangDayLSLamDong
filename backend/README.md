# Lam Dong History Backend

## Cấu trúc thư mục

- `src/controllers/`: Xử lý logic cho API
- `src/models/`: Định nghĩa các model (ORM, schema)
- `src/routes/`: Định nghĩa các route cho API
- `src/middleware/`: Các middleware (auth, error, ...)
- `src/services/`: Service kết nối DB, xử lý nghiệp vụ
- `src/utils/`: Helper, tiện ích chung
- `src/app.js`: Khởi tạo Express app
- `src/server.js`: Điểm khởi động server
- `config/`: Cấu hình DB, môi trường
- `database-schema.sql`: File tạo database

## Khởi động

```bash
cd backend
npm install
node src/server.js
```
