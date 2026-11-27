import type { Answers, QuizData, QuizResult } from './types';

const BASE = '/api/quiz';

export async function fetchQuiz(): Promise<QuizData> {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error('Não foi possível carregar o quiz.');
  return res.json();
}

export async function submitQuiz(answers: Answers): Promise<QuizResult> {
  const payload = {
    answers: Object.entries(answers).map(([questionId, selectedIndex]) => ({
      questionId: Number(questionId),
      selectedIndex,
    })),
  };
  const res = await fetch(`${BASE}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Não foi possível enviar suas respostas.');
  return res.json();
}
