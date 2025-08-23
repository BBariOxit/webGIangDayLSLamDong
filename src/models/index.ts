// src/models/Region.ts
export interface Region {
  id: number;
  name: string;
  description: string;
}

// src/models/Lesson.ts
export interface Lesson {
  id: number;
  title: string;
  content: string;
  regionId: number;
}

// src/models/Quiz.ts
export interface Quiz {
  id: number;
  question: string;
  options: string[];
  answer: string;
  lessonId: number;
}
