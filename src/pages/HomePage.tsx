import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Book, Award } from 'lucide-react';
import { Region } from '../types';
import { lamDongData } from '../data/lamDongData';
import './HomePage.css';

interface HomePageProps {
  onRegionSelect: (region: Region) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onRegionSelect }) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="home-page">
      {/* Header */}
      <motion.header 
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Khám Phá Lịch Sử
            <span className="highlight"> Lâm Đồng</span>
          </h1>
          <p className="hero-subtitle">
            Hành trình tìm hiểu những di sản văn hóa và lịch sử qua các địa danh nổi tiếng
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <MapPin className="stat-icon" />
              <span>10+ Địa điểm</span>
            </div>
            <div className="stat-item">
              <Book className="stat-icon" />
              <span>Bài học tương tác</span>
            </div>
            <div className="stat-item">
              <Award className="stat-icon" />
              <span>Trắc nghiệm vui</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-card">🏛️</div>
            <div className="floating-card">🌸</div>
            <div className="floating-card">🏔️</div>
            <div className="floating-card">🚂</div>
          </div>
        </div>
      </motion.header>

      {/* Regions Map */}
      <section className="regions-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Chọn Khu Vực Khám Phá</h2>
          <p>Mỗi khu vực có những câu chuyện lịch sử độc đáo riêng biệt</p>
        </motion.div>

        <div className="interactive-map">
          <div className="map-container">
            {/* SVG Map of Lam Dong */}
            <svg
              viewBox="0 0 800 600"
              className="region-map"
            >
              {/* Background */}
              <rect width="800" height="600" fill="#f0f8ff" opacity="0.3" />
              
              {/* Mountain ranges */}
              <path
                d="M100 200 Q200 150 300 180 Q400 160 500 190 Q600 170 700 200 L700 400 Q600 380 500 390 Q400 380 300 390 Q200 380 100 400 Z"
                fill="#e8f5e8"
                stroke="#90EE90"
                strokeWidth="2"
              />

              {/* Da Lat Region */}
              <motion.circle
                cx="400"
                cy="300"
                r={hoveredRegion === 'da-lat' ? "80" : "60"}
                fill={hoveredRegion === 'da-lat' ? "#FF6B6B" : "#FF8E8E"}
                stroke="#FF4757"
                strokeWidth="3"
                className="region-marker"
                onMouseEnter={() => setHoveredRegion('da-lat')}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onRegionSelect(lamDongData[0])}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <text
                x="400"
                y="305"
                textAnchor="middle"
                className="region-label"
                pointerEvents="none"
              >
                Đà Lạt
              </text>

              {/* Bao Loc Region */}
              <motion.circle
                cx="250"
                cy="450"
                r={hoveredRegion === 'bao-loc' ? "70" : "50"}
                fill={hoveredRegion === 'bao-loc' ? "#4ECDC4" : "#6BCCC4"}
                stroke="#26D0CE"
                strokeWidth="3"
                className="region-marker"
                onMouseEnter={() => setHoveredRegion('bao-loc')}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onRegionSelect(lamDongData[1])}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <text
                x="250"
                y="455"
                textAnchor="middle"
                className="region-label"
                pointerEvents="none"
              >
                Bảo Lộc
              </text>

              {/* Connection lines */}
              <path
                d="M350 350 Q300 400 250 450"
                stroke="#ddd"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          {/* Region Cards */}
          <div className="region-cards">
            {lamDongData.map((region, index) => (
              <motion.div
                key={region.id}
                className={`region-card ${hoveredRegion === region.id ? 'highlighted' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => onRegionSelect(region)}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="card-image">
                  <img src={region.image} alt={region.name} />
                  <div className="location-count">
                    {region.locations.length} địa điểm
                  </div>
                </div>
                <div className="card-content">
                  <h3>{region.name}</h3>
                  <p>{region.description}</p>
                  <div className="card-footer">
                    <Clock size={16} />
                    <span>~{region.locations.length * 15} phút học</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section 
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2>Trải Nghiệm Học Tập Độc Đáo</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏛️</div>
            <h3>Khám Phá Lịch Sử</h3>
            <p>Tìm hiểu câu chuyện phía sau mỗi di tích lịch sử</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📷</div>
            <h3>Hình Ảnh 360°</h3>
            <p>Trải nghiệm không gian thực tế với công nghệ panorama</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Trắc Nghiệm Vui</h3>
            <p>Kiểm tra kiến thức qua các câu hỏi thú vị</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Chấm Điểm</h3>
            <p>Theo dõi tiến trình học tập của bạn</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
