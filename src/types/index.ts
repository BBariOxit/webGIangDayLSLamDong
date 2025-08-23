export interface Region {
  id: string;
  name: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  locations: Location[];
}

export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  panoramaImage?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  lesson: Lesson;
  quiz: Quiz;
}

export interface Lesson {
  id: string;
  title: string;
  content: LessonContent[];
  images: string[];
  historicalSignificance: string;
  characteristics: string[];
  timeline: TimelineEvent[];
}

export interface LessonContent {
  type: 'text' | 'image' | 'video';
  content: string;
  caption?: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  answers: { questionId: string; selectedAnswer: number; correct: boolean }[];
}
