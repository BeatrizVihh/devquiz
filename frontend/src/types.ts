export interface Question {
  id: number;
  category: string;
  text: string;
  options: string[];
}

export interface QuizData {
  passingScore: number;
  questions: Question[];
}

export interface QuestionResult {
  questionId: number;
  selectedIndex: number | null;
  correctIndex: number;
  correct: boolean;
}

export interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  passingScore: number;
  approved: boolean;
  details: QuestionResult[];
}

/** questionId -> índice da alternativa escolhida */
export type Answers = Record<number, number>;
