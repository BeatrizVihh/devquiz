import { useEffect, useState } from 'react';
import { fetchQuiz, submitQuiz } from './api';
import QuestionCard from './components/QuestionCard';
import Result from './components/Result';
import type { Answers, QuizData, QuizResult } from './types';

export default function App() {
  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const load = () => {
    setError(null);
    setResult(null);
    setAnswers({});
    setCurrent(0);
    fetchQuiz()
      .then(setQuiz)
      .catch((e: Error) => setError(e.message));
  };

  useEffect(load, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      setResult(await submitQuiz(answers));
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <main className="container">
        <p className="error">{error}</p>
        <button className="btn" onClick={load}>
          Tentar novamente
        </button>
      </main>
    );
  }
  if (!quiz) return <main className="container">Carregando...</main>;

  if (result) {
    return (
      <main className="container">
        <h1>DevQuiz</h1>
        <Result quiz={quiz} result={result} onRestart={load} />
      </main>
    );
  }

  const total = quiz.questions.length;
  const question = quiz.questions[current];
  const answered = Object.keys(answers).length;
  const isLast = current === total - 1;

  return (
    <main className="container">
      <h1>DevQuiz</h1>
      <p className="meta">TypeScript · NestJS · React — mínimo para aprovação: {quiz.passingScore}/{total}</p>
      <progress value={answered} max={total} />
      <QuestionCard
        question={question}
        index={current}
        total={total}
        selected={answers[question.id]}
        onSelect={(i) => setAnswers((prev) => ({ ...prev, [question.id]: i }))}
      />
      <div className="nav">
        <button className="btn secondary" disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>
          Anterior
        </button>
        {isLast ? (
          <button className="btn" disabled={loading || answered < total} onClick={handleSubmit}>
            {loading ? 'Enviando...' : 'Finalizar'}
          </button>
        ) : (
          <button className="btn" onClick={() => setCurrent((c) => c + 1)}>
            Próxima
          </button>
        )}
      </div>
      {isLast && answered < total && (
        <p className="meta">Responda todas as questões para finalizar ({answered}/{total}).</p>
      )}
    </main>
  );
}
