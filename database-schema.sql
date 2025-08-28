-- Database schema for Lam Dong History project


-- Bảng tài khoản người dùng (hỗ trợ đăng ký truyền thống và Google OAuth)
CREATE TABLE Users (
    UserId INT IDENTITY PRIMARY KEY,
    Username NVARCHAR(50) UNIQUE, -- Có thể null nếu đăng ký bằng Google
    PasswordHash NVARCHAR(255),   -- Có thể null nếu đăng ký bằng Google
    FullName NVARCHAR(100),
    Email NVARCHAR(100) UNIQUE NOT NULL,
    GoogleId NVARCHAR(50),        -- Lưu Google OAuth ID nếu đăng ký bằng Google
    AvatarUrl NVARCHAR(255),      -- Ảnh đại diện từ Google
    AuthProvider NVARCHAR(20) DEFAULT 'local' -- 'local' hoặc 'google'
);

-- Bảng địa danh (ví dụ: Đà Lạt, Bảo Lộc)
CREATE TABLE Regions (
    RegionId INT IDENTITY PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500)
);

-- Bảng địa điểm thuộc địa danh
CREATE TABLE Locations (
    LocationId INT IDENTITY PRIMARY KEY,
    RegionId INT FOREIGN KEY REFERENCES Regions(RegionId),
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500),
    ImageUrl NVARCHAR(255)
);

-- Bảng câu hỏi trắc nghiệm cho từng địa điểm
CREATE TABLE Quizzes (
    QuizId INT IDENTITY PRIMARY KEY,
    LocationId INT FOREIGN KEY REFERENCES Locations(LocationId),
    Question NVARCHAR(255) NOT NULL
);

-- Bảng đáp án cho từng câu hỏi
CREATE TABLE QuizOptions (
    OptionId INT IDENTITY PRIMARY KEY,
    QuizId INT FOREIGN KEY REFERENCES Quizzes(QuizId),
    OptionText NVARCHAR(255) NOT NULL,
    IsCorrect BIT NOT NULL
);

-- Bảng tiến độ học tập của từng tài khoản
CREATE TABLE UserProgress (
    ProgressId INT IDENTITY PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    LocationId INT FOREIGN KEY REFERENCES Locations(LocationId),
    IsCompleted BIT DEFAULT 0,
    LastAccessed DATETIME DEFAULT GETDATE()
);

-- Bảng lưu kết quả làm quiz của từng tài khoản
CREATE TABLE UserQuizResults (
    ResultId INT IDENTITY PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    QuizId INT FOREIGN KEY REFERENCES Quizzes(QuizId),
    SelectedOptionId INT FOREIGN KEY REFERENCES QuizOptions(OptionId),
    IsCorrect BIT,
    AnsweredAt DATETIME DEFAULT GETDATE()
);
