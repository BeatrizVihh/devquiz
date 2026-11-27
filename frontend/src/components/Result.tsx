import type { QuizData, QuizResult } from '../types';

interface Props {
  quiz: QuizData;
  result: QuizResult;
  onRestart: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function Result({ quiz, result, onRestart }: Props) {
  return (
    <section className="card">
      <h2>Resultado</h2>
      <p className={`verdict ${result.approved ? 'ok' : 'fail'}`}>
        {result.approved ? 'APROVADO' : 'REPROVADO'}
      </p>
      <p className="score">
        {result.score} / {result.total} acertos ({result.percentage}%)
      </p>
      <p className="meta">Nota mínima para aprovação: {result.passingScore} acertos.</p>

      <h3>Gabarito</h3>
      <ol className="review">
        {quiz.questions.map((q) => {
          const d = result.details.find((x) => x.questionId === q.id)!;
          return (
            <li key={q.id} className={d.correct ? 'right' : 'wrong'}>
              <strong>{q.text}</strong>
              <br />
              Sua resposta:{' '}
              {d.selectedIndex === null
                ? 'não respondida'
                : `${LETTERS[d.selectedIndex]}) ${q.options[d.selectedIndex]}`}
              {!d.correct && (
                <>
                  <br />
                  Correta: {LETTERS[d.correctIndex]}) {q.options[d.correctIndex]}
                </>
              )}
            </li>
          );
        })}
      </ol>

      <button className="btn" onClick={onRestart}>
        Refazer o quiz
      </button>
    </section>
  );
}
