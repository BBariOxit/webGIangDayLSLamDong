import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthButton from './components/AuthButton';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import './App.css';

function App() {
  const [appState, setAppState] = useState({ page: 'home' });
  const [user, setUser] = useState(null);

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
      navigateToHome();
    } else if (appState.page === 'quiz' && appState.location) {
      navigateToLesson(appState.location);
    }
  };

  const handleQuizComplete = (result) => {
    console.log('Quiz completed:', result);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <div className="theme-toggle-container">
          <ThemeToggle />
        </div>
        <AuthButton user={user} onLogin={setUser} onLogout={() => setUser(null)} />
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
