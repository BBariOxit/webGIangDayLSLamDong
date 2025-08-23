import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Book, Star } from 'lucide-react';
import { Region, Location } from '../types';
import './RegionPage.css';

interface RegionPageProps {
  region: Region;
  onLocationSelect: (location: Location) => void;
  onBack: () => void;
}

const RegionPage: React.FC<RegionPageProps> = ({ region, onLocationSelect, onBack }) => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="region-page">
      {/* Header */}
      <motion.header 
        className="region-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Quay lại</span>
        </button>
        
        <div className="region-info">
          <div className="region-image">
            <img src={region.image} alt={region.name} />
            <div className="region-overlay">
              <h1>{region.name}</h1>
              <p>{region.description}</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Locations Grid */}
      <section className="locations-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Khám Phá {region.locations.length} Địa Điểm Lịch Sử</h2>
          <p>Mỗi địa điểm đều có câu chuyện riêng biệt và bài học thú vị</p>
        </motion.div>

        <div className="locations-grid">
          {region.locations.map((location, index) => (
            <motion.div
              key={location.id}
              className={`location-card ${hoveredLocation === location.id ? 'hovered' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => onLocationSelect(location)}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-image">
                <img src={location.image} alt={location.name} />
                <div className="card-badges">
                  <span className="badge historical">
                    <Star size={14} />
                    Lịch sử
                  </span>
                  {location.panoramaImage && (
                    <span className="badge panorama">360°</span>
                  )}
                </div>
                <div className="card-overlay">
                  <button className="explore-btn">
                    Khám phá ngay
                  </button>
                </div>
              </div>

              <div className="card-content">
                <div className="location-header">
                  <h3>{location.name}</h3>
                  <div className="location-meta">
                    <MapPin size={14} />
                    <span>
                      {location.coordinates.lat.toFixed(4)}, {location.coordinates.lng.toFixed(4)}
                    </span>
                  </div>
                </div>

                <p className="location-description">{location.description}</p>

                <div className="card-features">
                  <div className="feature">
                    <Book size={16} />
                    <span>Bài học chi tiết</span>
                  </div>
                  <div className="feature">
                    <Clock size={16} />
                    <span>~15 phút</span>
                  </div>
                  <div className="feature">
                    <span className="quiz-icon">🎯</span>
                    <span>{location.quiz.questions.length} câu hỏi</span>
                  </div>
                </div>

                <div className="lesson-preview">
                  <h4>Nội dung bài học:</h4>
                  <ul>
                    <li>Lịch sử hình thành và phát triển</li>
                    <li>Ý nghĩa lịch sử và văn hóa</li>
                    <li>Những nét đặc trưng độc đáo</li>
                    <li>Dòng thời gian quan trọng</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Map */}
      <motion.section 
        className="region-map-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Bản đồ các địa điểm</h3>
        <div className="mini-map">
          <svg viewBox="0 0 600 400" className="location-map">
            {/* Background */}
            <rect width="600" height="400" fill="#f8f9fa" />
            
            {/* Region outline */}
            <circle 
              cx="300" 
              cy="200" 
              r="150" 
              fill="none" 
              stroke="#e9ecef" 
              strokeWidth="2" 
              strokeDasharray="5,5"
            />
            
            {/* Location markers */}
            {region.locations.map((location, index) => {
              const angle = (index * 360) / region.locations.length;
              const x = 300 + 120 * Math.cos((angle * Math.PI) / 180);
              const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);
              
              return (
                <g key={location.id}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={hoveredLocation === location.id ? "12" : "8"}
                    fill={hoveredLocation === location.id ? "#FF6B6B" : "#4ECDC4"}
                    stroke="white"
                    strokeWidth="2"
                    className="map-marker"
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    onClick={() => onLocationSelect(location)}
                    whileHover={{ scale: 1.5 }}
                  />
                  {hoveredLocation === location.id && (
                    <motion.text
                      x={x}
                      y={y - 20}
                      textAnchor="middle"
                      className="map-label"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {location.name}
                    </motion.text>
                  )}
                </g>
              );
            })}
            
            {/* Region center */}
            <circle cx="300" cy="200" r="4" fill="#2c3e50" />
            <text x="300" y="190" textAnchor="middle" className="region-center-label">
              {region.name}
            </text>
          </svg>
        </div>
      </motion.section>
    </div>
  );
};

export default RegionPage;
