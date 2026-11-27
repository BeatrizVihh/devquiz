# Planejamento — DevQuiz (React + NestJS)

**Disciplina:** I WI · **Autor(es):** BEATRIZ VITÓRIA DE OLIVEIRA ALENCAR e FLAVIO GUSTAVO NOIM DE SANTANA

## 1. Objetivo

Desenvolver uma aplicação web de quiz com **20 questões** sobre TypeScript, NestJS e React. Cada questão tem **5 alternativas e uma única resposta correta**. O sistema soma os acertos e informa se o aluno foi **aprovado** (mínimo de 12/20 = 60%) ou **reprovado**.

## 2. Requisitos

### Funcionais
- RF01 — Listar 20 questões (7 de TypeScript, 7 de NestJS, 6 de React), cada uma com 5 alternativas.
- RF02 — Permitir escolher uma única alternativa por questão e navegar entre as questões.
- RF03 — Só permitir finalizar quando todas as questões estiverem respondidas.
- RF04 — Corrigir no servidor, somar os acertos e calcular a porcentagem.
- RF05 — Informar APROVADO/REPROVADO conforme a nota mínima.
- RF06 — Exibir o gabarito com a resposta do aluno e a correta; permitir refazer o quiz.

### Não funcionais
- RNF01 — Front-end em React com TypeScript; back-end em NestJS com TypeScript.
- RNF02 — O gabarito não pode ser enviado ao cliente antes da correção.
- RNF03 — Validar a entrada da API (DTO + `ValidationPipe`).
- RNF04 — Testes unitários da regra de correção (Jest).
- RNF05 — Interface responsiva e simples.

## 3. Arquitetura

```
[React + Vite :5173]  --/api-->  [NestJS :3000]
  App / QuestionCard / Result       QuizController -> QuizService -> questions.data.ts
```

### API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/api/quiz` | Retorna `passingScore` e as 20 questões, sem gabarito |
| POST | `/api/quiz/submit` | Recebe `{ answers: [{questionId, selectedIndex}] }` e retorna `score`, `total`, `percentage`, `approved` e `details` |

## 4. Etapas e cronograma sugerido

| Etapa | Atividades | Entrega |
|---|---|---|
| 1. Planejamento | Requisitos, arquitetura, repositório no GitHub | Este documento, README |
| 2. Relatório | Pesquisa sobre React e NestJS (máx. 2 folhas) | `docs/RELATORIO.md` |
| 3. Back-end | Módulo, controller, service, DTO, banco de 20 questões, testes | Pasta `backend/` |
| 4. Front-end | Telas de questão e resultado, integração com a API | Pasta `frontend/` |
| 5. Testes e ajustes | Rodar testes, testar o fluxo completo, corrigir | Versão final |
| 6. Entrega | Revisar README, publicar no GitHub | Repositório público |

## 5. Critérios de aceite

- 20 questões, todas com 5 alternativas e uma única correta.
- Pontuação correta (soma dos acertos) e aprovação a partir de 12 acertos.
- Aplicação roda com `npm run start:dev` (back) e `npm run dev` (front).
- Testes do back-end passam com `npm test`.

## 6. Riscos

| Risco | Mitigação |
|---|---|
| CORS entre front e back | Proxy do Vite e `enableCors` no Nest |
| Gabarito vazar ao cliente | Correção só no servidor; teste automatizado garante isso |
| Questões ambíguas | Revisão das alternativas antes da entrega |

## 7. Evolução futura

Embaralhar questões/alternativas, cronômetro, persistência de resultados em banco de dados (TypeORM/Prisma), autenticação e ranking.
