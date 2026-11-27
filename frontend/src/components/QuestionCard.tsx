import type { Question } from '../types';

interface Props {
  question: Question;
  index: number;
  total: number;
  selected: number | undefined;
  onSelect: (optionIndex: number) => void;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function QuestionCard({ question, index, total, selected, onSelect }: Props) {
  return (
    <section className="card">
      <p className="meta">
        Questão {index + 1} de {total} · <span className="tag">{question.category}</span>
      </p>
      <h2>{question.text}</h2>
      <div className="options" role="radiogroup">
        {question.options.map((option, i) => (
          <label key={i} className={`option ${selected === i ? 'selected' : ''}`}>
            <input
              type="radio"
              name={`q-${question.id}`}
              checked={selected === i}
              onChange={() => onSelect(i)}
            />
            <span className="letter">{LETTERS[i]}</span>
            <span>{option}</span>
          </label>
        ))}
      </div>
    </section>
  );
}
