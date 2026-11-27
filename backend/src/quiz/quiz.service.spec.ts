import { QuizService } from './quiz.service';
import { PASSING_SCORE, QUESTIONS } from './questions.data';

describe('QuizService', () => {
  const service = new QuizService();

  it('possui 20 questões com 5 alternativas e resposta única válida', () => {
    expect(QUESTIONS).toHaveLength(20);
    for (const q of QUESTIONS) {
      expect(q.options).toHaveLength(5);
      expect(q.correctIndex).toBeGreaterThanOrEqual(0);
      expect(q.correctIndex).toBeLessThan(5);
    }
  });

  it('não expõe o gabarito ao listar as questões', () => {
    const { questions } = service.getQuestions();
    expect(questions).toHaveLength(20);
    expect(JSON.stringify(questions)).not.toContain('correctIndex');
  });

  it('aprova quando atinge a nota mínima', () => {
    const answers = QUESTIONS.slice(0, PASSING_SCORE).map((q) => ({
      questionId: q.id,
      selectedIndex: q.correctIndex,
    }));
    const result = service.evaluate(answers);
    expect(result.score).toBe(PASSING_SCORE);
    expect(result.approved).toBe(true);
  });

  it('reprova abaixo da nota mínima', () => {
    const answers = QUESTIONS.slice(0, PASSING_SCORE - 1).map((q) => ({
      questionId: q.id,
      selectedIndex: q.correctIndex,
    }));
    const result = service.evaluate(answers);
    expect(result.score).toBe(PASSING_SCORE - 1);
    expect(result.approved).toBe(false);
  });

  it('conta questões sem resposta como erradas', () => {
    const result = service.evaluate([]);
    expect(result.score).toBe(0);
    expect(result.details.every((d) => d.selectedIndex === null)).toBe(true);
  });
});
