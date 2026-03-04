# Curso Iniciante na Programação

Plataforma de ensino interativa para quem quer aprender a programar do zero. O curso ensina HTML, CSS e JavaScript por meio de módulos teóricos, exercícios práticos e jogos educativos.

## Funcionalidades

- **Módulos de conteúdo** — teoria apresentada em formato de leitura, com contexto explicativo em Markdown
- **Exercícios práticos** — tarefas do tipo quiz (múltipla escolha) e editor de código com validação em tempo real
- **Módulos desbloqueáveis** — cada módulo só abre ao concluir o anterior, criando uma progressão linear
- **Dashboard** — visão geral do progresso com percentual de conclusão, tarefas e módulos concluídos
- **Jogos interativos** — quatro minijogos para reforçar o aprendizado:
  - **Jogo da Memória** — pares de tag HTML ↔ descrição
  - **Palavra Embaralhada** — reorganize as letras de uma tag
  - **Digitação de Código** — reproduza trechos de HTML com 90% de precisão
  - **Achar o Erro** — identifique a linha com o bug no código
- **Acompanhamento de progresso** — página dedicada ao histórico de avanço
- **Certificado** — gerado ao concluir todos os módulos
- **Autenticação** — sistema de login com rotas protegidas

## Tecnologias

- [React 18](https://react.dev/)
- [React Router v7](https://reactrouter.com/)
- [Vite 6](https://vitejs.dev/)

## Como rodar localmente

**Pré-requisitos:** Node.js 18+

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `/dist` |
| `npm run preview` | Pré-visualiza o build de produção localmente |

## Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis (Navbar, Hero, Footer, etc.)
│   └── tasks/        # Componentes de exercícios (QuizTask, CodeTask)
├── context/          # Contextos globais (AuthContext, ProgressContext)
├── data/             # Dados dos módulos e exercícios (modules.js)
├── pages/            # Páginas da aplicação
│   ├── Dashboard.jsx
│   ├── Module.jsx
│   ├── Modulos.jsx
│   ├── Games.jsx
│   ├── Progresso.jsx
│   ├── Certificado.jsx
│   ├── Login.jsx
│   └── Quiz.jsx
├── App.jsx           # Definição de rotas
└── main.jsx          # Ponto de entrada
```
