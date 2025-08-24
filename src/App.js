import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  const [appState, setAppState] = useState({ page: 'home' });

  const navigateToRegion = (region) => {
    setAppState({ page: 'region', region });
  };

  const navigateToLesson = (location) => {
    setAppState({ page: 'lesson', location });
  };

  const navigateToQuiz = (location) => {
    setAppState({ page: 'quiz', location });
  };

  const navigateToHome = () => {
    setAppState({ page: 'home' });
  };

  const navigateBack = () => {
    if (appState.page === 'region') {
      navigateToHome();
    } else if (appState.page === 'lesson' && appState.location) {
      // Navigate back to region containing this location
      // For simplicity, we'll go back to home, but you could implement proper region navigation
      navigateToHome();
    } else if (appState.page === 'quiz' && appState.location) {
      navigateToLesson(appState.location);
    }
  };

  const handleQuizComplete = (result) => {
    // You can save the result to localStorage or send to a backend
    console.log('Quiz completed:', result);
    // For now, just log the result
  };

  return (
    <ThemeProvider>
      <div className="App">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        
        <AnimatePresence mode="wait">
          {appState.page === 'home' && (
            <HomePage key="home" onRegionSelect={navigateToRegion} />
          )}
          
          {appState.page === 'region' && (
            <RegionPage 
              key="region"
              region={appState.region}
              onLocationSelect={navigateToLesson}
              onBack={navigateBack}
            />
          )}
          
          {appState.page === 'lesson' && (
            <LessonPage 
              key="lesson"
              location={appState.location}
              onBack={navigateBack}
              onQuizStart={() => navigateToQuiz(appState.location)}
            />
          )}
          
          {appState.page === 'quiz' && (
            <QuizPage 
              key="quiz"
              location={appState.location}
              onBack={navigateBack}
              onComplete={handleQuizComplete}
            />
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
