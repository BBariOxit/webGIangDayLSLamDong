import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, Camera, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import './LessonPage.css';

const LessonPage = ({ location, onBack, onQuizStart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPanoramaLoaded, setIsPanoramaLoaded] = useState(false);
  const panoramaRef = useRef(null);

  // Simulate panorama viewer (would normally use Pannellum)
  useEffect(() => {
    if (location.panoramaImage && panoramaRef.current) {
      // Simulate loading panorama
      setTimeout(() => {
        setIsPanoramaLoaded(true);
      }, 1000);
    }
  }, [location.panoramaImage]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === location.lesson.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? location.lesson.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="lesson-page">
      {/* Header */}
      <motion.header 
        className="lesson-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Quay lại</span>
        </button>
        
        <div className="lesson-meta">
          <div className="location-info">
            <h1>{location.name}</h1>
            <div className="meta-tags">
              <span className="tag">
                <MapPin size={16} />
                {location.coordinates.lat.toFixed(4)}, {location.coordinates.lng.toFixed(4)}
              </span>
              <span className="tag">
                <Clock size={16} />
                ~15 phút đọc
              </span>
              <span className="tag">
                <Book size={16} />
                Bài học lịch sử
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="lesson-content">
        {/* Panorama Section */}
        {location.panoramaImage && (
          <motion.section 
            className="panorama-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>
              <Camera size={24} />
              Khám phá không gian 360°
            </h2>
            <div className="panorama-container" ref={panoramaRef}>
              {!isPanoramaLoaded ? (
                <div className="panorama-loading">
                  <div className="loading-spinner"></div>
                  <p>Đang tải hình ảnh 360°...</p>
                </div>
              ) : (
                <div className="panorama-viewer">
                  <img src={location.panoramaImage} alt="360° view" />
                  <div className="panorama-controls">
                    <p>Di chuyển chuột để khám phá không gian</p>
                  </div>
                </div>
              )}
            </div>
          </motion.section>
        )}

        {/* Main Lesson Content */}
        <div className="lesson-main">
          <motion.section 
            className="lesson-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>{location.lesson.title}</h2>
            <p className="lesson-description">{location.description}</p>
          </motion.section>

          {/* Content Sections */}
          <motion.section 
            className="content-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>Nội dung bài học</h3>
            <div className="content-grid">
              {location.lesson.content.map((item, index) => (
                <div key={index} className={`content-item ${item.type}`}>
                  {item.type === 'text' ? (
                    <p>{item.content}</p>
                  ) : (
                    <div className="media-item">
                      <img src={item.content} alt={item.caption || ''} />
                      {item.caption && <p className="caption">{item.caption}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Image Gallery */}
          <motion.section 
            className="gallery-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3>Thư viện hình ảnh</h3>
            <div className="image-gallery">
              <div className="main-image">
                <img 
                  src={location.lesson.images[currentImageIndex]} 
                  alt={`${location.name} - ${currentImageIndex + 1}`}
                />
                <button className="nav-btn prev" onClick={prevImage}>
                  <ChevronLeft size={24} />
                </button>
                <button className="nav-btn next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
                <div className="image-counter">
                  {currentImageIndex + 1} / {location.lesson.images.length}
                </div>
              </div>
              <div className="thumbnail-grid">
                {location.lesson.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={index === currentImageIndex ? 'active' : ''}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Historical Significance */}
          <motion.section 
            className="significance-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3>Ý nghĩa lịch sử</h3>
            <div className="significance-card">
              <p>{location.lesson.historicalSignificance}</p>
            </div>
          </motion.section>

          {/* Characteristics */}
          <motion.section 
            className="characteristics-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3>Những nét đặc trưng</h3>
            <div className="characteristics-grid">
              {location.lesson.characteristics.map((characteristic, index) => (
                <div key={index} className="characteristic-item">
                  <div className="characteristic-icon">✓</div>
                  <p>{characteristic}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section 
            className="timeline-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3>Dòng thời gian</h3>
            <div className="timeline">
              {location.lesson.timeline.map((event, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{event.year}</span>
                    <p className="timeline-event">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Quiz CTA */}
          <motion.section 
            className="quiz-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="cta-content">
              <h3>Kiểm tra kiến thức của bạn</h3>
              <p>Hoàn thành bài trắc nghiệm để đánh giá mức độ hiểu biết về {location.name}</p>
              <button className="quiz-button" onClick={onQuizStart}>
                <span className="quiz-icon">🎯</span>
                Bắt đầu trắc nghiệm
                <span className="question-count">({location.quiz.questions.length} câu hỏi)</span>
              </button>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
