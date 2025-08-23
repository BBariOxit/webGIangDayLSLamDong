import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import { Region, Location, QuizResult } from './types';
import './App.css';

type AppState = 
  | { page: 'home' }
  | { page: 'region'; region: Region }
  | { page: 'lesson'; location: Location }
  | { page: 'quiz'; location: Location };

function App() {
  const [appState, setAppState] = useState<AppState>({ page: 'home' });

  const navigateToRegion = (region: Region) => {
    setAppState({ page: 'region', region });
  };

  const navigateToLesson = (location: Location) => {
    setAppState({ page: 'lesson', location });
  };

  const navigateToQuiz = (location: Location) => {
    setAppState({ page: 'quiz', location });
  };

  const navigateToHome = () => {
    setAppState({ page: 'home' });
  };

  const navigateBack = () => {
    if (appState.page === 'region') {
      navigateToHome();
    } else if (appState.page === 'lesson' && 'location' in appState) {
      // Navigate back to region containing this location
      // For simplicity, we'll go back to home, but you could implement proper region navigation
      navigateToHome();
    } else if (appState.page === 'quiz' && 'location' in appState) {
      navigateToLesson(appState.location);
    }
  };

  const handleQuizComplete = (result: QuizResult) => {
    // You can save the result to localStorage or send to a backend
    console.log('Quiz completed:', result);
    // For now, just log the result
  };

  return (
    <div className="App">
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
  );
}

export default App;
