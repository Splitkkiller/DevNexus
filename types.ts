export interface Attribute {
  name: string;
  description: string;
  type?: string;
}

export type DocLibrary = 'html' | 'css' | 'js' | 'ts' | 'py' | 'java';

export interface BrowserSupport {
  chrome: string;
  firefox: string;
  safari: string;
  edge: string;
}

export interface CodeExample {
  title: string;
  description: string;
  code: string;
}

export interface DocItem {
  id: string;
  name?: string; // Optional - some items use 'title' instead
  title?: string; // Added to support data.ts format
  library: DocLibrary; 
  category: string;
  shortDescription?: string; // Made optional
  description: string;
  syntax: string;
  attributes?: Attribute[]; // Made optional since data.ts doesn't always include this
  examples: CodeExample[];
  bestPractices: string[];
  browserSupport?: BrowserSupport;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}

export interface UserStats {
  xp: number;
  level: number;
  coins: number;
  quizzesTaken: number;
  avgScore: number;
  masteredTopics: string[];
  loginStreak: number;
  quizStreak: number;
  lastLoginDate: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  joinedDate?: string;
  savedVideoIds?: string[];
  stats: UserStats;
}

export type Theme = 'dark' | 'light' | 'grey';

export interface ThemeColors {
  bg: string;
  sidebar: string;
  sidebarBorder: string;
  text: string;
  textSecondary: string;
  card: string;
  cardBorder: string;
  accent: string;
  accentHover: string;
  codeBg: string;
  inputBg: string;
  inputBorder: string;
}

export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionType = 'multiple-choice' | 'code';

export interface QuizQuestion {
  id?: number; // Made optional since data.ts doesn't include it
  type?: QuestionType; 
  difficulty?: Difficulty;
  question: string;
  options?: string[];
  correctAnswer?: number; // For index-based answers
  correct?: string; // Added to support string-based correct answers in data.ts
  
  // For Coding Questions
  startingCode?: string;
  validationPatterns?: RegExp[];
  forbiddenPatterns?: RegExp[];
  
  explanation?: string; // Made optional since data.ts doesn't always include it
  category: 'html' | 'css' | 'js' | 'ts' | 'py' | 'java';
  topic?: string; // Made optional since data.ts doesn't include it
}

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  channel: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  category: 'html' | 'css' | 'js' | 'ts' | 'py' | 'java';
  tags: string[];
}
