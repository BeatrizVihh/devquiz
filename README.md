# DevQuiz

**Disciplina:** [NOME DA DISCIPLINA]
**Autor(es):** BEATRIZ VITÓRIA DE OLIVEIRA ALENCAR e FLAVIO GUSTAVO NOIM DE SANTANA

## Descrição

Aplicação web de quiz desenvolvida com **React** (front-end) e **NestJS** (back-end), ambos em **TypeScript**. O quiz tem **20 questões** sobre TypeScript, NestJS e React, cada uma com **5 alternativas e uma única resposta correta**. Ao finalizar, o sistema **soma os acertos** e informa se o aluno foi **aprovado** (mínimo de **12/20 = 60%**) ou **reprovado**, exibindo o gabarito.

## Documentação

- [Relatório técnico sobre React e NestJS](docs/RELATORIO.md) (máx. 2 folhas)
- [Planejamento do projeto](docs/PLANEJAMENTO.md)

## Tecnologias

React 18 · Vite · NestJS 10 · TypeScript · class-validator · Jest

## Como executar

Pré-requisito: Node.js 18+.

```bash
# Terminal 1 — API (http://localhost:3000/api)
cd backend
npm install
npm run start:dev

# Terminal 2 — Front-end (http://localhost:5173)
cd frontend
npm install
npm run dev
```

Testes do back-end: `cd backend && npm test`

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/quiz` | Lista as 20 questões (sem gabarito) |
| POST | `/api/quiz/submit` | Corrige o quiz e retorna pontuação e aprovação |

## Estrutura

```
devquiz/
├── backend/    # NestJS (módulo quiz, service, controller, DTO, testes)
├── frontend/   # React + Vite (App, QuestionCard, Result)
└── docs/       # Relatório e planejamento
```
