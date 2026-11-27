import { Injectable } from '@nestjs/common';
import { PASSING_SCORE, QUESTIONS } from './questions.data';
import { AnswerDto } from './dto/submit-quiz.dto';

export interface PublicQuestion {
  id: number;
  category: string;
  text: string;
  options: string[];
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

@Injectable()
export class QuizService {
  /** Retorna as questões SEM o gabarito. */
  getQuestions(): { passingScore: number; questions: PublicQuestion[] } {
    return {
      passingScore: PASSING_SCORE,
      questions: QUESTIONS.map(({ id, category, text, options }) => ({
        id,
        category,
        text,
        options: [...options],
      })),
    };
  }

  /** Corrige o quiz: soma os acertos e verifica a nota mínima de aprovação. */
  evaluate(answers: AnswerDto[]): QuizResult {
    // Se a mesma questão vier repetida, vale a última resposta.
    const byQuestion = new Map(answers.map((a) => [a.questionId, a.selectedIndex]));

    const details: QuestionResult[] = QUESTIONS.map((q) => {
      const selectedIndex = byQuestion.get(q.id) ?? null;
      return {
        questionId: q.id,
        selectedIndex,
        correctIndex: q.correctIndex,
        correct: selectedIndex === q.correctIndex,
      };
    });

    const score = details.filter((d) => d.correct).length;
    const total = QUESTIONS.length;

    return {
      score,
      total,
      percentage: Math.round((score / total) * 100),
      passingScore: PASSING_SCORE,
      approved: score >= PASSING_SCORE,
      details,
    };
  }
}
