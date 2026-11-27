export type Category = 'TypeScript' | 'NestJS' | 'React';

export interface Question {
  id: number;
  category: Category;
  text: string;
  /** Sempre 5 alternativas, com uma única resposta correta. */
  options: [string, string, string, string, string];
  /** Índice (0-4) da alternativa correta. Nunca é enviado ao cliente. */
  correctIndex: number;
}

export const PASSING_SCORE = 12; // mínimo para aprovação (60% de 20)

export const QUESTIONS: Question[] = [
  // ---------- TypeScript ----------
  {
    id: 1,
    category: 'TypeScript',
    text: 'Qual construção do TypeScript descreve o formato de um objeto e pode ser implementada por uma classe com "implements"?',
    options: ['enum', 'interface', 'namespace', 'decorator', 'generic'],
    correctIndex: 1,
  },
  {
    id: 2,
    category: 'TypeScript',
    text: 'Qual tipo representa valores que nunca ocorrem, como o retorno de uma função que sempre lança uma exceção?',
    options: ['any', 'void', 'unknown', 'never', 'null'],
    correctIndex: 3,
  },
  {
    id: 3,
    category: 'TypeScript',
    text: 'Qual a principal diferença entre "unknown" e "any"?',
    options: [
      'Não há diferença, são sinônimos',
      '"any" é mais seguro que "unknown"',
      '"unknown" só aceita números',
      '"any" só pode ser usado em classes',
      '"unknown" exige verificação de tipo (narrowing) antes de ser usado',
    ],
    correctIndex: 4,
  },
  {
    id: 4,
    category: 'TypeScript',
    text: 'Qual das opções declara corretamente uma função genérica?',
    options: [
      'function identity(T: arg): T',
      'function identity[T](arg: T): T',
      'function identity<T>(arg: T): T',
      'function<T> identity(arg: T): T',
      'generic function identity(arg: T): T',
    ],
    correctIndex: 2,
  },
  {
    id: 5,
    category: 'TypeScript',
    text: 'O que faz o operador "?." (optional chaining)?',
    options: [
      'Acessa uma propriedade e retorna undefined se o valor anterior for null ou undefined',
      'Converte o valor para booleano',
      'Força o valor a ser não nulo',
      'Declara uma propriedade como opcional em uma interface',
      'Compara dois valores com igualdade estrita',
    ],
    correctIndex: 0,
  },
  {
    id: 6,
    category: 'TypeScript',
    text: 'Qual utility type torna todas as propriedades de um tipo T opcionais?',
    options: ['Required<T>', 'Partial<T>', 'Readonly<T>', 'Pick<T>', 'Omit<T>'],
    correctIndex: 1,
  },
  {
    id: 7,
    category: 'TypeScript',
    text: 'Qual é o resultado da compilação de um arquivo TypeScript pelo comando "tsc"?',
    options: [
      'Código binário nativo',
      'Bytecode da JVM',
      'Código WebAssembly',
      'Código JavaScript',
      'Um arquivo de configuração JSON',
    ],
    correctIndex: 3,
  },

  // ---------- NestJS ----------
  {
    id: 8,
    category: 'NestJS',
    text: 'Qual decorator marca uma classe como controller, responsável por tratar requisições HTTP?',
    options: ['@Injectable()', '@Module()', '@Controller()', '@Get()', '@Pipe()'],
    correctIndex: 2,
  },
  {
    id: 9,
    category: 'NestJS',
    text: 'Qual decorator permite que uma classe (como um service) seja gerenciada pelo contêiner de injeção de dependências do Nest?',
    options: ['@Injectable()', '@Controller()', '@Entity()', '@Component()', '@Provider()'],
    correctIndex: 0,
  },
  {
    id: 10,
    category: 'NestJS',
    text: 'Qual decorator organiza a aplicação em módulos, declarando controllers e providers?',
    options: ['@Controller()', '@Injectable()', '@Global()', '@Body()', '@Module()'],
    correctIndex: 4,
  },
  {
    id: 11,
    category: 'NestJS',
    text: 'No NestJS, qual componente é usado para validar e/ou transformar os dados de entrada antes de chegarem ao handler?',
    options: ['Guard', 'Pipe', 'Interceptor', 'Middleware de banco', 'Repository'],
    correctIndex: 1,
  },
  {
    id: 12,
    category: 'NestJS',
    text: 'Qual componente do NestJS decide se uma requisição pode prosseguir, sendo muito usado para autorização?',
    options: ['Pipe', 'Filter', 'Interceptor', 'Guard', 'Provider'],
    correctIndex: 3,
  },
  {
    id: 13,
    category: 'NestJS',
    text: 'Qual decorator extrai o corpo (payload) da requisição HTTP em um método de controller?',
    options: ['@Param()', '@Query()', '@Body()', '@Headers()', '@Req()'],
    correctIndex: 2,
  },
  {
    id: 14,
    category: 'NestJS',
    text: 'Qual padrão de projeto o NestJS utiliza para resolver e fornecer as dependências entre classes?',
    options: [
      'Injeção de dependências (DI)',
      'Singleton manual',
      'Observer',
      'Factory abstrata obrigatória',
      'Decorator de banco de dados',
    ],
    correctIndex: 0,
  },

  // ---------- React ----------
  {
    id: 15,
    category: 'React',
    text: 'Qual hook é usado para criar e gerenciar estado local em um componente funcional?',
    options: ['useEffect', 'useState', 'useRef', 'useMemo', 'useContext'],
    correctIndex: 1,
  },
  {
    id: 16,
    category: 'React',
    text: 'Qual hook é indicado para executar efeitos colaterais, como buscar dados de uma API após a renderização?',
    options: ['useState', 'useCallback', 'useReducer', 'useEffect', 'useId'],
    correctIndex: 3,
  },
  {
    id: 17,
    category: 'React',
    text: 'O que é JSX?',
    options: [
      'Uma extensão de sintaxe que permite escrever marcação semelhante a HTML dentro do JavaScript/TypeScript',
      'Um banco de dados em memória',
      'Um gerenciador de pacotes',
      'Uma biblioteca de testes',
      'Um servidor HTTP para o React',
    ],
    correctIndex: 0,
  },
  {
    id: 18,
    category: 'React',
    text: 'Como dados são passados de um componente pai para um componente filho no React?',
    options: ['Por variáveis globais', 'Por cookies', 'Por props', 'Por localStorage', 'Por eventos do DOM'],
    correctIndex: 2,
  },
  {
    id: 19,
    category: 'React',
    text: 'Qual a finalidade do atributo "key" ao renderizar listas em React?',
    options: [
      'Criptografar os dados da lista',
      'Definir o estilo de cada item',
      'Ordenar a lista alfabeticamente',
      'Impedir que o item seja clicado',
      'Ajudar o React a identificar quais itens mudaram entre renderizações',
    ],
    correctIndex: 4,
  },
  {
    id: 20,
    category: 'React',
    text: 'O que acontece quando o useEffect recebe um array de dependências vazio ([])?',
    options: [
      'Executa a cada renderização',
      'Executa apenas após a montagem do componente',
      'Nunca é executado',
      'Executa somente quando o componente é desmontado',
      'Gera um erro de compilação',
    ],
    correctIndex: 1,
  },
];
