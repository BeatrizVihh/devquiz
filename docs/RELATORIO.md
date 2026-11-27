---
title: "Relatório Técnico: React e NestJS"
subtitle: "Projeto DevQuiz — Disciplina: [NOME DA DISCIPLINA]"
author: "BEATRIZ VITÓRIA DE OLIVEIRA ALENCAR e FLAVIO GUSTAVO NOIM DE SANTANA"
---

## 1. Introdução

Este relatório resume as principais tecnologias dos frameworks **React** (front-end) e **NestJS** (back-end), ambos baseados em JavaScript/TypeScript, e mostra como foram aplicadas no **DevQuiz**, um quiz de 20 questões sobre TypeScript, NestJS e React. Usar a mesma linguagem nas duas camadas permite compartilhar conhecimento, tipos e ferramentas.

## 2. React

Biblioteca para construção de interfaces, mantida pela Meta, baseada em componentes reutilizáveis e em uma interface que reflete o estado da aplicação.

| Tecnologia | Descrição | Uso no DevQuiz |
|---|---|---|
| **Componentes** | Funções que retornam interface e podem ser compostas. | `QuestionCard`, `Result`, `App` |
| **JSX/TSX** | Sintaxe que mistura marcação e código TypeScript. | Toda a interface |
| **Props** | Dados passados do componente pai ao filho (somente leitura). | Questão, índice e callback `onSelect` |
| **useState** | Estado local; ao mudar, o componente renderiza de novo. | Respostas, questão atual, resultado |
| **useEffect** | Efeitos colaterais, como chamadas a APIs. | Carregar as questões ao abrir o app |
| **Renderização de listas e `key`** | Gera elementos a partir de arrays; `key` identifica cada item. | Alternativas A–E |
| **Vite** | Ferramenta de build e servidor de desenvolvimento rápido. | Proxy `/api` para o back-end |

## 3. NestJS

Framework Node.js para APIs escaláveis, escrito em TypeScript e inspirado na arquitetura do Angular. Usa Express por padrão e organiza o código em módulos.

| Tecnologia | Descrição | Uso no DevQuiz |
|---|---|---|
| **Módulos** (`@Module`) | Agrupam controllers e providers por funcionalidade. | `AppModule`, `QuizModule` |
| **Controllers** (`@Controller`, `@Get`, `@Post`) | Recebem requisições HTTP e definem as rotas. | `GET /api/quiz`, `POST /api/quiz/submit` |
| **Providers/Services** (`@Injectable`) | Contêm a regra de negócio e podem ser injetados. | `QuizService` corrige o quiz e soma os pontos |
| **Injeção de dependências** | O Nest cria e entrega as dependências via construtor. | `QuizController` recebe `QuizService` |
| **DTOs e Pipes** | `class-validator` e `ValidationPipe` validam a entrada. | `SubmitQuizDto` valida as respostas |
| **Decorators de parâmetro** (`@Body`) | Extraem partes da requisição. | Corpo do envio das respostas |
| **Guards, Interceptors, Filters** | Autorização, transformação e tratamento de erros. | Não necessários nesta versão |
| **Jest** | Testes unitários integrados ao Nest. | `quiz.service.spec.ts` |

## 4. Integração e decisões de projeto

- **Arquitetura cliente–servidor:** o React consome a API REST do NestJS em JSON; em desenvolvimento, o Vite encaminha `/api` para a porta 3000, evitando problemas de CORS.
- **Segurança do gabarito:** o back-end não envia a resposta correta ao listar as questões. A correção ocorre no servidor, em `POST /api/quiz/submit`.
- **Regra de aprovação:** cada questão vale 1 ponto e o resultado é a soma dos acertos. A nota mínima é **12 de 20 (60%)**; abaixo disso o aluno é reprovado.
- **Tipagem:** a interface TypeScript do front-end espelha os contratos da API, reduzindo erros de integração.

## 5. Conclusão

React e NestJS se complementam: o primeiro oferece uma interface reativa e modular, o segundo uma API organizada, testável e com validação embutida. Juntos, com TypeScript, entregam um sistema consistente e de fácil manutenção, como demonstra o DevQuiz.

**Referências:** react.dev · docs.nestjs.com · typescriptlang.org · vitejs.dev
