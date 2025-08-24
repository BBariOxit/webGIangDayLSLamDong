import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';
import './QuizPage.css';

const QuizPage = ({ location, onBack, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes
  const [quizResult, setQuizResult] = useState(null);

  const { quiz } = location;
  const totalQuestions = quiz.questions.length;

  // Timer effect
  useEffect(() => {
    if (showResult) return;
    
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResult]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const answers = quiz.questions.map((question, index) => ({
      questionId: question.id,
      selectedAnswer: selectedAnswers[index] ?? -1,
      correct: selectedAnswers[index] === question.correctAnswer
    }));

    const score = answers.filter(answer => answer.correct).length;
    
    const result = {
      score,
      totalQuestions,
      answers
    };

    setQuizResult(result);
    setShowResult(true);
    onComplete(result);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setTimeRemaining(300);
    setQuizResult(null);
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "Xuất sắc! Bạn đã nắm vững kiến thức.";
    if (percentage >= 60) return "Tốt! Bạn có hiểu biết khá tốt.";
    if (percentage >= 40) return "Được! Bạn cần ôn tập thêm một chút.";
    return "Hãy đọc lại bài học và thử lại nhé!";
  };

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "#4CAF50";
    if (percentage >= 60) return "#FF9800";
    if (percentage >= 40) return "#FFC107";
    return "#F44336";
  };

  if (showResult && quizResult) {
    return (
      <div className="quiz-page">
        <motion.div 
          className="quiz-result"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="result-header">
            <div className="result-score" style={{ color: getScoreColor(quizResult.score, quizResult.totalQuestions) }}>
              <Award size={60} />
              <h1>{quizResult.score}/{quizResult.totalQuestions}</h1>
              <p>{getScoreMessage(quizResult.score, quizResult.totalQuestions)}</p>
            </div>
          </div>

          <div className="result-details">
            <h3>Chi tiết kết quả</h3>
            <div className="questions-review">
              {quiz.questions.map((question, index) => {
                const userAnswer = quizResult.answers[index];
                const isCorrect = userAnswer.correct;
                
                return (
                  <motion.div 
                    key={question.id}
                    className={`question-review ${isCorrect ? 'correct' : 'incorrect'}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="question-header">
                      <div className="question-number">
                        {isCorrect ? 
                          <CheckCircle size={20} className="icon-correct" /> : 
                          <XCircle size={20} className="icon-incorrect" />
                        }
                        <span>Câu {index + 1}</span>
                      </div>
                    </div>
                    
                    <h4>{question.question}</h4>
                    
                    <div className="answer-options">
                      {question.options.map((option, optionIndex) => {
                        let className = 'option';
                        if (optionIndex === question.correctAnswer) {
                          className += ' correct-answer';
                        } else if (optionIndex === userAnswer.selectedAnswer && !isCorrect) {
                          className += ' wrong-answer';
                        }
                        
                        return (
                          <div key={optionIndex} className={className}>
                            {option}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="explanation">
                      <strong>Giải thích:</strong> {question.explanation}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="result-actions">
            <button className="restart-btn" onClick={restartQuiz}>
              <RotateCcw size={20} />
              Làm lại
            </button>
            <button className="back-btn" onClick={onBack}>
              <ArrowLeft size={20} />
              Quay lại bài học
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQ = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="quiz-page">
      {/* Header */}
      <motion.header 
        className="quiz-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Quay lại</span>
        </button>
        
        <div className="quiz-info">
          <h1>{quiz.title}</h1>
          <div className="quiz-meta">
            <span className="location-name">{location.name}</span>
            <div className="timer">
              <Clock size={16} />
              <span>{formatTime(timeRemaining)}</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-info">
          <span>Câu {currentQuestion + 1} / {totalQuestions}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="progress-bar">
          <motion.div 
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentQuestion}
          className="question-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="question-card">
            <h2>{currentQ.question}</h2>
            
            <div className="answer-options">
              {currentQ.options.map((option, index) => (
                <motion.button
                  key={index}
                  className={`option-button ${
                    selectedAnswers[currentQuestion] === index ? 'selected' : ''
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="option-indicator">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="quiz-navigation">
        <button 
          className="nav-button prev"
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          <ArrowLeft size={20} />
          Câu trước
        </button>
        
        <div className="question-dots">
          {quiz.questions.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentQuestion ? 'active' : ''} ${
                selectedAnswers[index] !== undefined ? 'answered' : ''
              }`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <button 
          className="nav-button next"
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
        >
          {currentQuestion === totalQuestions - 1 ? 'Nộp bài' : 'Câu tiếp'}
          <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
