export const MODULES = [
  {
    id: 'modulo-1',
    number: '01',
    stageId: 'curioso',
    stage: 'Introdução',
    title: 'Introdução à Programação',
    description: 'Entenda o que é programação, como os computadores pensam e por que aprender a programar.',
    color: '#3b82f6',
    context: `## O que é programação?

Programação é o ato de dar instruções a um computador para que ele execute tarefas. Essas instruções são escritas em uma **linguagem de programação** — uma linguagem que tanto humanos conseguem escrever quanto computadores conseguem entender.

Pense assim: quando você cozinha seguindo uma receita, você está executando um programa. A receita lista os ingredientes e os passos em ordem. O computador faz exatamente isso — segue passos, um por um, na ordem que você definiu.

## O que é um programa?

Um **programa** é um conjunto de instruções escritas por um programador. Tudo que você usa no celular ou no computador é um programa:

- O WhatsApp é um programa
- O YouTube é um programa
- O próprio sistema operacional (Windows, macOS, Android) é um programa

## Como o computador "pensa"?

O computador não pensa como um humano. Ele apenas executa instruções muito simples, muito rápido. Ele não entende contexto, não interpreta intenções — ele faz exatamente o que você mandou.

Por isso, programar exige **precisão e lógica**. Se você errar uma instrução, o programa vai falhar ou se comportar de forma inesperada.

## O que é lógica de programação?

Antes de aprender qualquer linguagem, você precisa desenvolver **lógica de programação** — a capacidade de pensar em sequências de passos para resolver um problema.

Exemplo: como você instruiria um robô a fazer um sanduíche?

1. Pegue duas fatias de pão
2. Abra o pote de manteiga
3. Passe a manteiga em uma das fatias
4. Coloque o recheio sobre a fatia com manteiga
5. Coloque a segunda fatia por cima

Isso é lógica: uma sequência ordenada de passos que resolve um problema.

## Por que aprender a programar?

- **Criar coisas do zero** — sites, aplicativos, jogos, ferramentas
- **Automatizar tarefas repetitivas** — economizar horas de trabalho manual
- **Resolver problemas de forma criativa** — encontrar soluções eficientes
- **Mercado de trabalho** — uma das profissões mais requisitadas do mundo

## O que você vai aprender neste curso?

Neste curso você vai aprender a criar páginas web usando três tecnologias:

- **HTML** — a estrutura da página (os elementos visíveis)
- **CSS** — o visual da página (cores, fontes, layout)
- **JavaScript** — o comportamento da página (interações, lógica)

Mas antes de tudo isso, o mais importante é entender: programar é uma habilidade. Como qualquer habilidade, ela se desenvolve com prática e paciência.

## Como o computador armazena informações?

Tudo dentro de um computador é representado por **bits** (0 e 1). Um bit é a menor unidade de informação. Oito bits formam um **byte**.

- 1 byte = 1 caractere (uma letra, um número)
- 1 kilobyte (KB) = 1.024 bytes
- 1 megabyte (MB) = 1.024 KB
- 1 gigabyte (GB) = 1.024 MB

Os computadores usam o sistema **binário** (base 2) porque os transistores têm apenas dois estados: ligado (1) ou desligado (0).

## O que é um navegador?

Um **navegador** (browser) é o programa que interpreta código HTML, CSS e JavaScript e exibe a página para o usuário. Os mais usados são:

- **Chrome** — da Google
- **Firefox** — da Mozilla
- **Edge** — da Microsoft
- **Safari** — da Apple

O navegador recebe arquivos do servidor e os "renderiza" (transforma em pixels na tela).

## O que é um servidor?

Um **servidor web** é um computador que fica sempre ligado e responde requisições de usuários. Quando você digita um endereço no navegador:

1. O navegador envia uma **requisição** ao servidor
2. O servidor encontra os arquivos (HTML, CSS, JS)
3. O servidor envia os arquivos de volta (**resposta**)
4. O navegador renderiza a página

## Caminhos de carreira em programação

Conhecendo HTML, CSS e JavaScript, você pode seguir para:

- **Front-end** — interfaces visuais (React, Vue, Angular)
- **Back-end** — servidores e bancos de dados (Node.js, Python, Java)
- **Full-stack** — os dois lados
- **Mobile** — apps (React Native, Flutter)

## Ferramentas essenciais

- **Editor de código**: VS Code (gratuito, da Microsoft)
- **Navegador + DevTools**: Chrome com F12 abre as ferramentas de desenvolvedor
- **Git**: sistema de controle de versão para salvar e compartilhar código
- **GitHub**: plataforma online para hospedar projetos com Git

## Uma breve história da programação

A programação existe há mais tempo do que a maioria das pessoas imagina. Em 1843, **Ada Lovelace** escreveu o que é considerado o primeiro algoritmo — para uma máquina que sequer havia sido construída ainda. Ela é reconhecida como a primeira programadora da história.

Nos anos 1940, os computadores eram máquinas gigantescas que ocupavam salas inteiras. Para programá-los, os cientistas precisavam conectar fios físicos — não havia teclado, nem código, nem tela. Cada "instrução" era literalmente uma conexão elétrica.

Na década de 1950, surgiram as primeiras **linguagens de alto nível** — linguagens que humanos conseguiam escrever e ler com mais facilidade. Antes disso, os programadores escreviam diretamente em código binário (zeros e uns) ou em Assembly (abreviações de instruções de máquina).

**Marcos importantes:**
- **1957** — Fortran, primeira linguagem de alto nível amplamente usada (para cálculos científicos)
- **1972** — C, a linguagem que influenciou quase todas as outras (ainda usada hoje)
- **1991** — Python, criada para ser simples e legível
- **1995** — JavaScript e Java nascem no mesmo ano
- **1995** — PHP surge para criar páginas web dinâmicas
- **2009** — Node.js permite rodar JavaScript no servidor

## Por que tantas linguagens existem?

Cada linguagem foi criada para resolver um problema específico. Não existe "a melhor linguagem" — existe a linguagem certa para cada situação:

- **Python** → ciência de dados, inteligência artificial, automação
- **JavaScript** → web (front-end e back-end com Node.js)
- **Java / Kotlin** → apps Android, sistemas corporativos
- **Swift** → apps iOS e macOS
- **C / C++** → sistemas operacionais, jogos, hardware
- **SQL** → bancos de dados relacionais
- **Rust** → sistemas de alto desempenho com segurança de memória

## Como um computador entende código?

Quando você escreve \`let x = 5\` em JavaScript, o computador não entende isso diretamente. O código passa por um processo de tradução:

1. **Código-fonte** → o que você escreve (texto legível para humanos)
2. **Interpretador / Compilador** → traduz para instruções de máquina
3. **Código de máquina** → zeros e uns que o processador executa

Linguagens **compiladas** (C, Java) traduzem tudo antes de executar — resultado: mais rápido.
Linguagens **interpretadas** (Python, JavaScript) traduzem linha por linha — resultado: mais flexível.

## O que é open source?

**Open source** (código aberto) significa que o código-fonte de um projeto é público — qualquer pessoa pode ler, usar, modificar e contribuir. A maior parte das ferramentas que você vai usar são open source:

- Linux (sistema operacional usado em 96% dos servidores)
- VS Code (editor da Microsoft)
- React, Vue, Angular (frameworks web)
- Python, Node.js, PostgreSQL

O movimento open source revolucionou a tecnologia: em vez de cada empresa reinventar tudo do zero, o conhecimento é compartilhado globalmente.

## A mentalidade de um programador

Programar não é só escrever código. É uma forma de pensar. Bons programadores desenvolvem algumas características específicas:

**Pensamento decomposicional** — quebrar problemas grandes em partes menores. Um sistema complexo é sempre uma coleção de partes simples bem conectadas.

**Tolerância a erros** — errar é parte do processo. Todo programador, do iniciante ao sênior, passa horas depurando erros. A diferença está em não desistir e em aprender com cada erro.

**Curiosidade constante** — a tecnologia muda rápido. Programadores precisam estar sempre aprendendo. As melhores oportunidades vão para quem não para de estudar.

**Pesquisa eficiente** — nenhum programador memoriza tudo. Saber pesquisar no Google, ler documentações e usar o Stack Overflow é tão importante quanto saber programar.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'O que é programação?',
        options: [
          'Um aplicativo de computador para criar planilhas',
          'O ato de dar instruções a um computador para executar tarefas',
          'Um tipo de hardware instalado no computador',
          'O sistema operacional do computador',
        ],
        correct: 1,
        explanation: 'Programação é escrever instruções em uma linguagem que o computador consegue entender e executar. Essas instruções formam um programa, que pode ser um site, um app, um jogo, etc.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Qual dessas afirmações melhor descreve como um computador executa instruções?',
        options: [
          'Ele interpreta o contexto e adapta as instruções',
          'Ele pensa como um humano e toma decisões próprias',
          'Ele executa os passos exatamente como foram escritos, um por um',
          'Ele ignora instruções que parecem erradas',
        ],
        correct: 2,
        explanation: 'O computador não pensa nem interpreta — ele executa as instruções literalmente, na ordem em que foram escritas. Por isso a precisão é fundamental em programação.',
      },
      {
        id: 'task-3',
        type: 'quiz',
        question: 'O que é lógica de programação?',
        options: [
          'Uma linguagem de programação específica para iniciantes',
          'A capacidade de pensar em sequências ordenadas de passos para resolver um problema',
          'Um software para escrever código mais rápido',
          'O processo de instalar programas no computador',
        ],
        correct: 1,
        explanation: 'Lógica de programação é a habilidade de decompor um problema em passos menores e organizá-los em uma sequência lógica. É a base de qualquer linguagem de programação.',
      },
      {
        id: 'task-4',
        type: 'quiz',
        question: 'Das três tecnologias usadas na web, qual delas cuida do VISUAL da página?',
        options: ['HTML', 'CSS', 'JavaScript', 'Python'],
        correct: 1,
        explanation: 'CSS (Cascading Style Sheets) é responsável pelo visual: cores, fontes, tamanhos, espaçamentos e layout. HTML define a estrutura e JavaScript adiciona comportamento e interatividade.',
      },
      {
        id: 'task-5',
        type: 'type',
        question: 'Como se chama a habilidade de pensar em sequências ordenadas de passos para resolver um problema?',
        answer: ['lógica de programação', 'lógica'],
        placeholder: 'Digite sua resposta...',
        hint: 'É a base de qualquer linguagem de programação.',
        explanation: 'Lógica de programação é a habilidade de decompor um problema em passos e organizá-los em sequência. É fundamental antes de aprender qualquer linguagem.',
      },
      {
        id: 'task-6',
        type: 'quiz',
        question: 'O que é um navegador web?',
        options: [
          'Um tipo de linguagem de programação',
          'Um programa que interpreta HTML, CSS e JS e exibe a página para o usuário',
          'Um servidor que armazena sites na internet',
          'Um editor de código para programadores',
        ],
        correct: 1,
        explanation: 'O navegador (Chrome, Firefox, Safari, Edge) é o software que recebe os arquivos HTML, CSS e JavaScript e os renderiza visualmente para o usuário. Sem ele, o código seria apenas texto.',
      },
      {
        id: 'task-7',
        type: 'fill',
        title: 'Complete as responsabilidades das tecnologias web',
        description: 'Cada tecnologia tem um papel específico. Complete as lacunas:',
        code: '// Define a ESTRUTURA da página:\n{{blank}}\n\n// Define o VISUAL da página:\n{{blank}}\n\n// Define o COMPORTAMENTO da página:\n{{blank}}',
        blanks: ['HTML', 'CSS', 'JavaScript'],
        hint: 'HTML = estrutura, CSS = visual, JavaScript = comportamento.',
        successMessage: 'Perfeito! HTML estrutura, CSS estiliza, JavaScript dá vida!',
      },
      {
        id: 'task-8',
        type: 'quiz',
        question: 'Qual é a menor unidade de informação em um computador?',
        options: ['Byte', 'Kilobyte', 'Bit', 'Pixel'],
        correct: 2,
        explanation: 'Um bit é a menor unidade de informação: representa 0 ou 1 (desligado ou ligado). Oito bits formam um byte, que pode representar um caractere. Tudo no computador — texto, imagem, vídeo — é armazenado como sequências de bits.',
      },
      {
        id: 'task-9',
        type: 'drag',
        title: 'O que acontece quando você acessa um site?',
        description: 'Ordene as etapas que ocorrem quando você digita um endereço no navegador:',
        blocks: [
          '1. Você digita a URL no navegador',
          '2. O navegador envia uma requisição ao servidor',
          '3. O servidor encontra os arquivos (HTML, CSS, JS)',
          '4. O servidor envia os arquivos de volta',
          '5. O navegador renderiza e exibe a página',
        ],
        hint: 'O fluxo é: usuário → requisição → servidor → resposta → renderização.',
        successMessage: 'Excelente! Você entende o ciclo completo de uma requisição web!',
      },
      {
        id: 'task-10',
        type: 'quiz',
        question: 'Qual ferramenta você usa para ver e depurar o código de uma página no navegador?',
        options: ['O bloco de notas', 'DevTools (F12)', 'O Task Manager', 'O Painel de Controle'],
        correct: 1,
        explanation: 'As DevTools (Ferramentas de Desenvolvedor) são abertas com F12 ou clique direito → Inspecionar. Elas mostram o HTML, CSS, console JavaScript, requisições de rede e muito mais. São a ferramenta mais importante de qualquer desenvolvedor web.',
      },
      {
        id: 'task-11',
        type: 'type',
        question: 'Como se chama o sistema de versionamento de código mais usado no mundo (que rastreia mudanças nos arquivos)?',
        answer: ['git', 'Git'],
        placeholder: 'nome do sistema',
        hint: 'É uma palavra de 3 letras. Junto com GitHub, é a ferramenta de colaboração padrão da indústria.',
        explanation: 'Git é o sistema de controle de versão mais popular. Ele rastreia cada mudança nos arquivos, permite trabalhar em equipe e voltar para versões anteriores do código.',
      },
      {
        id: 'task-12',
        type: 'quiz',
        question: 'O que significa "renderizar" uma página web?',
        options: [
          'Enviar o código para o servidor',
          'Salvar o arquivo HTML no computador',
          'Transformar o código em pixels visuais na tela',
          'Apagar o histórico do navegador',
        ],
        correct: 2,
        explanation: 'Renderizar é o processo pelo qual o navegador lê o código HTML, CSS e JavaScript e o transforma em uma interface visual exibida na tela — pixels, cores, formas e textos que o usuário vê.',
      },
      {
        id: 'task-13',
        type: 'fill',
        title: 'Unidades de armazenamento',
        description: 'Complete a sequência correta de unidades de armazenamento do menor para o maior:',
        code: '{{blank}} → byte → {{blank}} → megabyte → {{blank}} → terabyte',
        blanks: ['bit', 'kilobyte', 'gigabyte'],
        hint: 'A ordem é: bit, byte, kilobyte, megabyte, gigabyte, terabyte.',
        successMessage: 'Correto! Agora você sabe a hierarquia das unidades de armazenamento.',
      },
      {
        id: 'task-14',
        type: 'quiz',
        question: 'Qual é a diferença entre front-end e back-end?',
        options: [
          'Front-end é mais difícil que back-end',
          'Front-end cuida da interface visual do usuário; back-end cuida do servidor e banco de dados',
          'Front-end usa Python e back-end usa JavaScript',
          'Não há diferença prática entre os dois',
        ],
        correct: 1,
        explanation: 'Front-end é tudo que o usuário vê e interage (HTML, CSS, JavaScript no navegador). Back-end é a parte "de trás" — servidores, bancos de dados, lógica de negócio. Full-stack domina os dois lados.',
      },
      {
        id: 'task-15',
        type: 'drag',
        title: 'Classifique as tecnologias',
        description: 'Ordene as tecnologias do aprendizado mais básico para o mais avançado em desenvolvimento web:',
        blocks: [
          'HTML (estrutura)',
          'CSS (estilo)',
          'JavaScript básico (interatividade)',
          'JavaScript avançado (frameworks)',
          'Back-end (Node.js, banco de dados)',
        ],
        hint: 'Comece pela estrutura, depois o visual, depois o comportamento, depois frameworks e servidor.',
        successMessage: 'Ótimo! Você tem o mapa da jornada de aprendizado web!',
      },
    ],
  },
  {
    id: 'modulo-logica',
    number: '02',
    stageId: 'curioso',
    stage: 'Lógica',
    title: 'Lógica de Programação',
    description: 'Aprenda algoritmos, pseudocódigo e como estruturar o raciocínio para resolver problemas com o computador.',
    color: '#6366f1',
    context: `## O que é um algoritmo?

Um **algoritmo** é uma sequência finita de passos ordenados para resolver um problema. Todo programa de computador é, na essência, um algoritmo.

Pense em uma receita de bolo: ela tem ingredientes (dados de entrada), passos a seguir (processamento) e o bolo pronto (saída). Isso é um algoritmo!

## As três estruturas básicas

Todo algoritmo é construído com apenas três estruturas:

### 1. Sequência
Passos executados um após o outro, na ordem:
\`\`\`
INÍCIO
  Ler número1
  Ler número2
  soma = número1 + número2
  Exibir soma
FIM
\`\`\`

### 2. Decisão (Condicional)
Escolhe entre caminhos diferentes dependendo de uma condição:
\`\`\`
SE temperatura > 30 ENTÃO
  Exibir "Está quente!"
SENÃO
  Exibir "Temperatura agradável"
FIM SE
\`\`\`

### 3. Repetição (Loop)
Repete um bloco de ações enquanto uma condição for verdadeira:
\`\`\`
ENQUANTO contador < 10 FAÇA
  Exibir contador
  contador = contador + 1
FIM ENQUANTO
\`\`\`

## Variáveis

Uma **variável** é um espaço na memória do computador com um nome para guardar um valor:

\`\`\`
idade = 25
nome = "João"
aprovado = VERDADEIRO
\`\`\`

O valor de uma variável pode mudar durante a execução.

## Fluxogramas

Fluxogramas são representações visuais de algoritmos usando símbolos:
- **Oval** → Início/Fim
- **Retângulo** → Processo (ação)
- **Losango** → Decisão (sim/não)
- **Paralelogramo** → Entrada/Saída

## Por que aprender lógica antes de programar?

Linguagens de programação mudam. A lógica é universal. Quem pensa com clareza em pseudocódigo aprende qualquer linguagem mais rápido porque já sabe **o que** fazer — só precisa aprender **como escrever** em cada linguagem.

## Operadores

Operadores realizam operações sobre valores:

### Aritméticos
\`\`\`
+  soma
-  subtração
*  multiplicação
/  divisão
%  módulo (resto da divisão)
\`\`\`

O **módulo** (%) é muito útil: \`10 % 3 = 1\` (o resto de 10 dividido por 3 é 1).

### Relacionais (resultado: verdadeiro ou falso)
\`\`\`
>    maior que
<    menor que
>=   maior ou igual
<=   menor ou igual
=    igual (em muitas linguagens == ou ===)
<>   diferente (em algumas linguagens != ou !==)
\`\`\`

## Estrutura PARA (loop com contador)

Além do ENQUANTO, existe o loop PARA, ideal quando você sabe quantas vezes repetir:

\`\`\`
PARA i DE 1 ATÉ 10 FAÇA
  Exibir i
FIM PARA
\`\`\`

## Funções e procedimentos

Uma **função** (ou procedimento) é um bloco de código com nome que pode ser chamado várias vezes:

\`\`\`
FUNÇÃO calcularMedia(nota1, nota2)
  media = (nota1 + nota2) / 2
  RETORNAR media
FIM FUNÇÃO

resultado = calcularMedia(8, 6)  → 7
\`\`\`

Benefícios:
- **Reutilização**: escreve uma vez, usa várias
- **Legibilidade**: dá nome a uma operação complexa
- **Manutenção**: corrija em um lugar, muda em todos

## Tipos de erros

| Tipo | Quando acontece | Exemplo |
| --- | --- | --- |
| Sintaxe | Código escrito errado | SE x > 0 ENTAO (sem acento) |
| Lógica | Código roda mas dá resultado errado | usar / em vez de * |
| Execução | Erro que ocorre durante a execução | divisão por zero |

O **erro de lógica** é o mais perigoso porque o programa parece funcionar normalmente.

## Como pensar em algoritmos no dia a dia

A melhor forma de aprender lógica de programação é reconhecer algoritmos no cotidiano. Você já executa algoritmos o tempo todo sem perceber:

**Fazer um café:**
\`\`\`
INÍCIO
  SE não tem café em pó ENTÃO ir ao mercado
  Colocar água na chaleira
  Ligar a chaleira
  ENQUANTO água não ferveu FAÇA esperar
  Colocar café no filtro
  Despejar água quente no filtro
  ENQUANTO café não coou FAÇA esperar
  Servir na xícara
FIM
\`\`\`

**Atravessar a rua:**
\`\`\`
INÍCIO
  Chegar na calçada
  ENQUANTO sinal vermelho para pedestres FAÇA esperar
  Olhar para os dois lados
  SE nenhum carro vindo ENTÃO atravessar
  SENÃO esperar e verificar novamente
FIM
\`\`\`

Perceba que qualquer processo do mundo real pode ser transformado em um algoritmo. Essa é a habilidade fundamental de um programador.

## Decomposição: a arte de dividir para conquistar

Um dos princípios mais importantes da computação é a **decomposição** — quebrar um problema complexo em problemas menores e mais simples.

Exemplo: "Criar um sistema de login"

Isso parece grande e assustador. Mas decompondo:
1. Criar um formulário com campos de email e senha
2. Ao clicar em "Entrar", ler os valores dos campos
3. Verificar se o email existe na base de dados
4. Se existe, comparar a senha digitada com a senha armazenada
5. Se correta, redirecionar para a página principal
6. Se incorreta, exibir mensagem de erro

Cada um desses passos é um algoritmo pequeno e resolvível. Juntos, formam o sistema completo.

## Abstração: ignorar o que não importa

**Abstração** é a capacidade de focar no que é essencial e ignorar os detalhes irrelevantes.

Quando você usa a função \`Exibir()\` no pseudocódigo, não precisa se preocupar com como o computador acende cada pixel da tela para mostrar as letras. Você abstrai esse detalhe e foca no problema que está resolvendo.

Esse é exatamente o que as linguagens de programação fazem: abstraem as instruções de máquina para que você escreva em um nível mais humano.

## Reconhecimento de padrões

Programadores experientes reconhecem padrões rapidamente. Quando veem um problema novo, percebem: "isso é parecido com aquele problema que resolvi antes."

Exemplo de padrão: **verificar se algo é válido antes de usar**
\`\`\`
SE dado existe E dado é válido ENTÃO
  processar dado
SENÃO
  exibir erro
\`\`\`

Esse padrão aparece em praticamente todo sistema que já foi criado. Login, cadastro, formulários, APIs — todos fazem essa verificação.

## A importância de testar

Nenhum algoritmo está completo sem testes. Ao criar um algoritmo, sempre pergunte:

- **Caso normal**: o que acontece com uma entrada esperada?
- **Caso extremo**: o que acontece com valores muito grandes ou muito pequenos?
- **Caso inválido**: o que acontece se a entrada for nula ou do tipo errado?

Exemplo: algoritmo que divide dois números
- Normal: 10 / 2 = 5 ✓
- Extremo: 999999 / 1 = 999999 ✓
- Inválido: 10 / 0 = ERRO (divisão por zero — precisa de tratamento!)

Todo bom programador pensa nos casos inválidos antes de escrever uma linha de código.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'O que é um algoritmo?',
        options: [
          'Um tipo de linguagem de programação para iniciantes',
          'Uma sequência finita de passos ordenados para resolver um problema',
          'Um software para escrever código automaticamente',
          'Um erro encontrado em um programa',
        ],
        correct: 1,
        explanation: 'Um algoritmo é uma receita de passos bem definidos para chegar a um resultado. Todo programa é a implementação de um algoritmo em uma linguagem de programação.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Quais são os três tipos básicos de estruturas em algoritmos?',
        options: [
          'Entrada, Processamento e Saída',
          'HTML, CSS e JavaScript',
          'Sequência, Decisão e Repetição',
          'Variáveis, Funções e Objetos',
        ],
        correct: 2,
        explanation: 'Todo algoritmo, por mais complexo que seja, é composto de apenas três estruturas fundamentais: Sequência (passos em ordem), Decisão (escolhas com SE/SENÃO) e Repetição (loops ENQUANTO/PARA).',
      },
      {
        id: 'task-3',
        type: 'fill',
        title: 'Complete o pseudocódigo',
        description: 'Preencha as lacunas para completar o algoritmo que calcula a média de duas notas:',
        code: 'INÍCIO\n  Ler {{blank}}1\n  Ler nota2\n  media = (nota1 {{blank}} nota2) / 2\n  SE media >= 7 {{blank}}\n    Exibir "Aprovado"\n  SENÃO\n    Exibir "Reprovado"\n  FIM SE\nFIM',
        blanks: ['nota', '+', 'ENTÃO'],
        hint: 'Leia os dois dados, some-os e divida por 2. Use SE/ENTÃO para a decisão.',
        successMessage: 'Perfeito! Você montou um algoritmo completo com sequência e decisão.',
      },
      {
        id: 'task-4',
        type: 'drag',
        title: 'Ordene o algoritmo de troco',
        description: 'Um cliente paga e precisa receber troco. Ordene os passos do algoritmo:',
        blocks: [
          'Ler valor_da_compra',
          'Ler valor_pago',
          'troco = valor_pago - valor_da_compra',
          'SE troco > 0 ENTÃO exibir troco',
          'SENÃO exibir "Valor insuficiente"',
        ],
        hint: 'Primeiro leia os dados, depois calcule, por último decida o que exibir.',
        successMessage: 'Ótimo! Você ordenou corretamente o algoritmo de calcular troco.',
      },
      {
        id: 'task-5',
        type: 'type',
        question: 'Como se chama a estrutura de algoritmo que repete um bloco de ações várias vezes?',
        answer: ['repetição', 'loop', 'laço', 'iteração'],
        placeholder: 'Digite o nome da estrutura...',
        hint: 'É uma das três estruturas básicas. Em inglês se chama "loop".',
        explanation: 'A estrutura de repetição (ou loop) permite executar um bloco de código múltiplas vezes sem precisar reescrever. Em JavaScript usamos for, while e do/while.',
      },
      {
        id: 'task-6',
        type: 'quiz',
        question: 'O que representa uma VARIÁVEL em um algoritmo?',
        options: [
          'Um passo fixo que nunca muda',
          'Um tipo de decisão condicional',
          'Um espaço nomeado na memória para guardar um valor que pode mudar',
          'Uma função que retorna um resultado',
        ],
        correct: 2,
        explanation: 'Uma variável é como uma caixa com etiqueta: tem um nome (a etiqueta) e guarda um valor (o conteúdo). O valor pode ser trocado a qualquer momento durante a execução do algoritmo.',
      },
      {
        id: 'task-7',
        type: 'fill',
        title: 'Complete o loop de contagem',
        description: 'Preencha as lacunas do pseudocódigo que conta de 1 até 5:',
        code: 'contador = {{blank}}\n{{blank}} contador <= 5 FAÇA\n  Exibir contador\n  contador = contador {{blank}} 1\nFIM ENQUANTO',
        blanks: ['1', 'ENQUANTO', '+'],
        hint: 'O contador começa em 1, o loop continua ENQUANTO for menor ou igual a 5, e incrementa +1 a cada volta.',
        successMessage: 'Correto! Você escreveu um loop de contagem em pseudocódigo.',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Erro lógico: divisão por zero',
        description: 'O algoritmo abaixo tenta calcular a média mas tem um erro lógico. Encontre o problema:',
        buggyCode: 'INÍCIO\n  Ler nota1\n  Ler nota2\n  media = nota1 + nota2 / 2\n  Exibir media\nFIM',
        validate: (doc) => true,
        successMessage: 'Correto! Sem parênteses, só nota2 é dividida por 2. A divisão tem prioridade sobre a soma. Deveria ser: (nota1 + nota2) / 2.',
        hint: 'Observe a precedência de operadores. A divisão acontece antes da soma. Como garantir que a soma ocorra primeiro?',
        correctLine: 3,
        lines: [
          'INÍCIO',
          '  Ler nota1',
          '  Ler nota2',
          '  media = nota1 + nota2 / 2',
          '  Exibir media',
          'FIM',
        ],
        bugLine: 3,
        explanation: 'Sem parênteses, a expressão é avaliada como nota1 + (nota2 / 2) pela precedência de operadores. O correto é (nota1 + nota2) / 2.',
      },
      {
        id: 'task-9',
        type: 'drag',
        title: 'Etapas de resolução de problemas',
        description: 'Ordene as etapas corretas para resolver um problema com programação:',
        blocks: [
          '1. Entender o problema',
          '2. Identificar entradas e saídas',
          '3. Criar o algoritmo (pseudocódigo)',
          '4. Codificar em uma linguagem',
          '5. Testar e corrigir erros',
        ],
        hint: 'Primeiro entenda, depois planeje, depois escreva o código, depois teste.',
        successMessage: 'Excelente! Essa é a metodologia de qualquer desenvolvedor profissional.',
      },
      {
        id: 'task-10',
        type: 'fill',
        title: 'Estrutura SE/SENÃO',
        description: 'Complete a estrutura condicional que verifica se um número é positivo:',
        code: '{{blank}} numero > 0 {{blank}}\n  Exibir "Positivo"\n{{blank}}\n  Exibir "Zero ou negativo"\nFIM SE',
        blanks: ['SE', 'ENTÃO', 'SENÃO'],
        hint: 'A estrutura condicional usa SE para verificar, ENTÃO para o caso verdadeiro e SENÃO para o caso falso.',
        successMessage: 'Perfeito! Você domina a estrutura de decisão em pseudocódigo.',
      },
      {
        id: 'task-11',
        type: 'quiz',
        question: 'O que o operador % (módulo) retorna?',
        options: [
          'O resultado da divisão inteira',
          'A porcentagem de um número',
          'O resto da divisão entre dois números',
          'O maior dos dois números',
        ],
        correct: 2,
        explanation: 'O operador módulo (%) retorna o resto da divisão. Exemplo: 10 % 3 = 1 (pois 10 = 3×3 + 1). É muito útil para verificar se um número é par (n % 2 === 0) ou para criar ciclos.',
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'Loop PARA em pseudocódigo',
        description: 'Complete o loop que imprime os números de 1 a 10:',
        code: '{{blank}} i {{blank}} 1 {{blank}} 10 FAÇA\n  Exibir i\nFIM PARA',
        blanks: ['PARA', 'DE', 'ATÉ'],
        hint: 'O loop PARA tem a sintaxe: PARA variável DE início ATÉ fim.',
        successMessage: 'Correto! O loop PARA é perfeito quando você sabe quantas repetições fazer.',
      },
      {
        id: 'task-13',
        type: 'quiz',
        question: 'Qual tipo de erro é o mais perigoso porque o programa parece funcionar normalmente?',
        options: ['Erro de sintaxe', 'Erro de compilação', 'Erro de lógica', 'Erro de execução'],
        correct: 2,
        explanation: 'Erros de lógica são os mais difíceis de detectar: o programa executa sem travar, mas produz resultados errados. Por exemplo, calcular a média como nota1 + nota2/2 em vez de (nota1+nota2)/2 — o programa roda, mas a resposta é incorreta.',
      },
      {
        id: 'task-14',
        type: 'fill',
        title: 'Defina uma função em pseudocódigo',
        description: 'Complete a função que calcula o dobro de um número:',
        code: '{{blank}} calcularDobro(numero)\n  resultado = numero {{blank}} 2\n  {{blank}} resultado\nFIM FUNÇÃO',
        blanks: ['FUNÇÃO', '*', 'RETORNAR'],
        hint: 'Uma função começa com FUNÇÃO, faz o processamento e usa RETORNAR para devolver o resultado.',
        successMessage: 'Perfeito! Você sabe declarar uma função em pseudocódigo.',
      },
      {
        id: 'task-15',
        type: 'drag',
        title: 'Ordene: verificar número par ou ímpar',
        description: 'Ordene os passos do algoritmo para verificar se um número é par ou ímpar:',
        blocks: [
          'Ler numero',
          'resto = numero % 2',
          'SE resto === 0 ENTÃO',
          '  Exibir "Par"',
          'SENÃO Exibir "Ímpar"',
        ],
        hint: 'Leia o número, calcule o resto da divisão por 2, depois decida: resto 0 = par, resto 1 = ímpar.',
        successMessage: 'Excelente! Verificar paridade com módulo é um clássico da programação!',
      },
    ],
  },
  {
    id: 'modulo-vscode',
    number: '03',
    stageId: 'curioso',
    stage: 'Introdução',
    title: 'VSCode: seu editor de código',
    description: 'Instale e configure o editor de código mais usado do mundo e aprenda a se virar nele como um dev.',
    color: '#0ea5e9',
    context: `## O que é um editor de código?

Um **editor de código** é o programa onde você escreve seu código. É a ferramenta mais usada no dia a dia de qualquer desenvolvedor.

Você poderia escrever HTML num bloco de notas qualquer — mas um editor de código oferece:

- **Realce de sintaxe** — o código fica colorido, facilitando a leitura
- **Autocompletar** — sugestões enquanto você digita
- **Detecção de erros** — avisa quando algo está errado antes de você rodar
- **Terminal integrado** — você não precisa sair do editor para executar comandos
- **Extensões** — funcionalidades extras instaláveis em segundos

## Por que o VSCode?

O **Visual Studio Code** (VSCode) é o editor mais popular do mundo entre desenvolvedores. Em pesquisas da Stack Overflow, mais de 70% dos devs usam o VSCode.

Criado pela Microsoft, ele é:

- **Gratuito** e open source
- **Leve** — abre rápido e não trava
- **Multiplataforma** — funciona no Windows, Mac e Linux
- **Extremamente extensível** — há milhares de extensões disponíveis

## Baixando e instalando

### Passo 1 — Acesse o site oficial

Acesse **code.visualstudio.com** — o site detecta automaticamente o seu sistema operacional e sugere o download correto.

### Passo 2 — Baixe o instalador

Clique no botão grande de download. O instalador tem cerca de 100MB.

### Passo 3 — Instale

**Windows:**
Execute o arquivo \`.exe\` baixado. Avance clicando em "Next" em tudo. Quando aparecer a tela de opções adicionais, marque **"Add to PATH"** e **"Open with Code"** — esses dois facilitam muito o uso depois.

**Mac:**
Abra o arquivo \`.dmg\` baixado. Arraste o ícone do VSCode para a pasta **Aplicativos**. Depois, abra o VSCode pela primeira vez, pressione \`Cmd+Shift+P\`, digite **"shell command"** e selecione **"Install 'code' command in PATH"** — isso permite abrir o VSCode pelo terminal com o comando \`code .\`.

**Linux:**
No site oficial há instruções específicas para cada distribuição. No Ubuntu/Debian, baixe o \`.deb\` e instale com \`sudo dpkg -i arquivo.deb\`.

### Passo 4 — Abra o VSCode

Após instalar, abra o VSCode. Você vai ver a tela de boas-vindas.

## Conhecendo a interface

Ao abrir o VSCode pela primeira vez, você vai ver estas áreas principais:

### Barra lateral esquerda (Activity Bar)

Ícones para alternar entre os painéis principais:

- **Explorer** (ícone de arquivos) — onde você vê e gerencia seus arquivos
- **Search** (lupa) — busca dentro dos arquivos do projeto
- **Source Control** (ícone Git) — controle de versão com Git
- **Extensions** (blocos) — instalar extensões

### Painel lateral (Side Bar)

Fica à direita da Activity Bar. Quando você clica em Explorer, aqui aparecem os seus arquivos e pastas.

### Editor (área central)

Onde você escreve o código. Você pode abrir várias abas ao mesmo tempo. Cada aba mostra um arquivo.

### Terminal integrado

Na parte de baixo. Abra com **Ctrl+\`** (ou Ctrl+J). É um terminal completo — você não precisa abrir o terminal do sistema separadamente.

### Barra de status (rodapé)

A barra azul no rodapé mostra informações como: linguagem do arquivo atual, linha/coluna do cursor, erros e avisos.

## Criando e abrindo projetos

A forma correta de trabalhar no VSCode é **abrir uma pasta**, não um arquivo solto.

### Como abrir uma pasta

1. Crie uma pasta no seu computador (ex: \`meu-projeto\` na Área de Trabalho)
2. No VSCode: **File → Open Folder** (ou \`Ctrl+K Ctrl+O\`)
3. Selecione a pasta que criou
4. Pronto — você vê a pasta no Explorer lateral

### Como criar um arquivo novo

Com a pasta aberta, no Explorer lateral:
- Clique no ícone de **novo arquivo** (ou clique com botão direito → New File)
- Digite o nome com extensão: \`index.html\`, \`style.css\`, \`script.js\`

### Atalho para criar arquivo rapidamente

Use **Ctrl+N** para criar um arquivo novo sem nome. Depois salve com **Ctrl+S** e dê um nome a ele.

## Atalhos essenciais

Atalhos economizam horas de trabalho. Aprenda estes agora e use sempre.

> **Windows usa \`Ctrl\`. Mac usa \`Cmd\` (⌘).** Exceto onde indicado, troque Ctrl por Cmd no Mac.

| Ação | Windows | Mac |
|------|---------|-----|
| Salvar arquivo | \`Ctrl+S\` | \`Cmd+S\` |
| Desfazer | \`Ctrl+Z\` | \`Cmd+Z\` |
| Refazer | \`Ctrl+Shift+Z\` | \`Cmd+Shift+Z\` |
| Copiar | \`Ctrl+C\` | \`Cmd+C\` |
| Colar | \`Ctrl+V\` | \`Cmd+V\` |
| Recortar linha | \`Ctrl+X\` | \`Cmd+X\` |
| Comentar linha | \`Ctrl+/\` | \`Cmd+/\` |
| Buscar no arquivo | \`Ctrl+F\` | \`Cmd+F\` |
| Buscar e substituir | \`Ctrl+H\` | \`Cmd+H\` |
| Abrir arquivo por nome | \`Ctrl+P\` | \`Cmd+P\` |
| Paleta de comandos | \`Ctrl+Shift+P\` | \`Cmd+Shift+P\` |
| Abrir/fechar terminal | \`Ctrl+\`\` | \`Ctrl+\`\` |
| Mover linha | \`Alt+↑/↓\` | \`Option+↑/↓\` |
| Selecionar próxima igual | \`Ctrl+D\` | \`Cmd+D\` |

## Extensões indispensáveis

As extensões transformam o VSCode num ambiente profissional. Para instalar: clique em **Extensions** na barra lateral (ou \`Ctrl+Shift+X\`), pesquise o nome e clique em **Install**.

### Live Server

**O que faz:** cria um servidor local e atualiza o browser automaticamente toda vez que você salva um arquivo.

**Como usar:** com o arquivo \`index.html\` aberto, clique no botão **"Go Live"** que aparece na barra de status (rodapé azul). Uma aba vai abrir no browser. Salve qualquer arquivo com \`Ctrl+S\` e o browser atualiza sozinho.

**Por que usar:** sem o Live Server, você precisa recarregar o browser manualmente toda vez. Com ele, é igual a essa plataforma — você vê o resultado na hora.

### Prettier — Code Formatter

**O que faz:** formata seu código automaticamente — indentação correta, ponto-e-vírgula, espaços.

**Como usar:** depois de instalar, pressione \`Ctrl+Shift+P\`, digite "Format Document" e Enter. Pode também configurar para formatar ao salvar.

### Auto Rename Tag

**O que faz:** quando você renomeia uma tag HTML de abertura, ele renomeia automaticamente a tag de fechamento.

**Exemplo:** você muda \`<div>\` para \`<section>\` e o \`</div>\` vira \`</section>\` sozinho.

### Indent Rainbow

**O que faz:** colore cada nível de indentação com uma cor diferente. Facilita muito a leitura de código HTML e CSS com muitos níveis de aninhamento.

## Emmet — superpower do VSCode

O **Emmet** já vem integrado no VSCode e permite gerar código HTML rapidamente com atalhos.

### Exemplos de Emmet em arquivos HTML:

- Digite \`!\` + \`Tab\` → gera o esqueleto HTML completo
- Digite \`div\` + \`Tab\` → \`<div></div>\`
- Digite \`div.container\` + \`Tab\` → \`<div class="container"></div>\`
- Digite \`ul>li*5\` + \`Tab\` → uma \`<ul>\` com 5 \`<li>\` dentro
- Digite \`h1+p+p\` + \`Tab\` → um \`<h1>\` seguido de dois \`<p>\`

Esses atalhos economizam muito tempo quando você está escrevendo HTML.

## Configurações úteis

Acesse as configurações com **Ctrl+,** (vírgula). Algumas configurações recomendadas:

- **Auto Save** → mude para \`afterDelay\` para salvar automaticamente
- **Font Size** → aumente se o texto estiver pequeno (recomendado: 14 ou 16)
- **Word Wrap** → \`on\` para não ter scroll horizontal
- **Format On Save** → \`true\` se tiver o Prettier instalado

## O terminal integrado

O terminal do VSCode é um terminal completo. Você pode:

- Abrir com **Ctrl+\`**
- Usar qualquer comando do sistema (\`ls\`, \`cd\`, \`mkdir\` no Mac/Linux; \`dir\`, \`cd\` no Windows)
- Rodar scripts Node.js diretamente
- Usar o Git

**Por que usar o terminal integrado?** Porque você não perde foco — editor e terminal ficam na mesma janela.

## Dicas de produtividade

- **Divida a tela:** arraste uma aba para o lado para ver dois arquivos ao mesmo tempo (\`index.html\` e \`style.css\` lado a lado)
- **Minimize o Side Bar:** pressione \`Ctrl+B\` para esconder/mostrar o painel lateral e ter mais espaço para o código
- **Zen Mode:** \`Ctrl+K Z\` remove tudo da tela exceto o editor — ótimo para foco total
- **Multi-cursor:** segure \`Alt\` e clique em vários pontos para editar em múltiplos lugares ao mesmo tempo`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Qual é a forma correta de abrir um projeto no VSCode?',
        options: [
          'Abrir apenas o arquivo index.html com duplo clique',
          'Abrir a pasta inteira do projeto (File → Open Folder)',
          'Criar um novo arquivo em branco toda vez',
          'Arrastar um arquivo solto para o ícone do VSCode',
        ],
        correct: 1,
        explanation: 'Sempre abra a pasta do projeto inteiro no VSCode (File → Open Folder). Assim ele vê todos os arquivos juntos, o autocompletar funciona entre arquivos e extensões como o Live Server funcionam corretamente.',
      },
      {
        id: 'task-2',
        type: 'fill',
        title: 'Atalhos essenciais — Windows e Mac',
        description: 'Complete os atalhos. No Windows use Ctrl, no Mac use Cmd:',
        code: '// Salvar o arquivo:\nWindows: {{blank}} + S\nMac:     {{blank}} + S\n\n// Abrir o terminal integrado:\nWindows e Mac: {{blank}} + `\n\n// Comentar uma linha:\nWindows: Ctrl + {{blank}}\nMac:     Cmd  + {{blank}}',
        blanks: ['Ctrl', 'Cmd', 'Ctrl', '/', '/'],
        hint: 'A tecla principal muda entre SO, mas a letra da ação é sempre a mesma. Terminal usa Ctrl nos dois.',
        successMessage: 'Ótimo! Esses são os atalhos que você vai usar todos os dias.',
      },
      {
        id: 'task-3',
        type: 'quiz',
        question: 'O que a extensão Live Server faz?',
        options: [
          'Faz o deploy do site na internet automaticamente',
          'Corrige erros de HTML e CSS',
          'Abre o site no browser e atualiza sozinho toda vez que você salva',
          'Sincroniza o código com o GitHub',
        ],
        correct: 2,
        explanation: 'O Live Server cria um servidor local e recarrega o browser automaticamente ao salvar (Ctrl+S / Cmd+S). Sem ele você precisa apertar F5 no browser manualmente depois de cada mudança.',
      },
      {
        id: 'task-4',
        type: 'drag',
        title: 'Ordene: primeiros passos no VSCode',
        description: 'Coloque os passos na ordem correta para criar e ver seu primeiro projeto:',
        blocks: [
          'Criar uma pasta para o projeto no computador',
          'Abrir o VSCode e usar File → Open Folder',
          'Criar o arquivo index.html dentro da pasta',
          'Instalar a extensão Live Server',
          'Clicar em Go Live na barra de status',
          'Editar o HTML, salvar com Ctrl+S (ou Cmd+S) e ver no browser',
        ],
        hint: 'Primeiro crie a pasta, abra no VSCode, crie o arquivo, configure o Live Server e comece a codar.',
        successMessage: 'Esse é o fluxo que você vai repetir em todo projeto novo. Guarde bem!',
      },
    ],
  },
  {
    id: 'modulo-2',
    number: '04',
    stageId: 'aprendiz',
    stage: 'Iniciante',
    title: 'HTML: primeiros elementos',
    description: 'Aprenda as tags mais importantes do HTML e escreva seu primeiro código.',
    color: '#8b5cf6',
    context: `## O que é uma tag HTML?

HTML é composto de **tags**. Uma tag é um comando entre sinais de menor e maior: \`<tag>\`. A maioria das tags tem uma abertura e um fechamento:

\`\`\`html
<h1>Meu título</h1>
\`\`\`

A barra \`/\` indica o fechamento da tag.

## Tags de texto

### Títulos: h1 a h6

Os títulos vão de \`<h1>\` (mais importante) até \`<h6>\` (menos importante):

\`\`\`html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Seção menor</h3>
\`\`\`

### Parágrafo: p

Para textos comuns, use a tag \`<p>\`:

\`\`\`html
<p>Este é um parágrafo de texto.</p>
\`\`\`

## Listas

### Lista não ordenada (com bolinhas): ul + li

\`\`\`html
<ul>
  <li>Primeiro item</li>
  <li>Segundo item</li>
  <li>Terceiro item</li>
</ul>
\`\`\`

### Lista ordenada (numerada): ol + li

\`\`\`html
<ol>
  <li>Passo 1</li>
  <li>Passo 2</li>
  <li>Passo 3</li>
</ol>
\`\`\`

## Links e imagens

### Link: a

\`\`\`html
<a href="https://google.com">Clique aqui</a>
\`\`\`

O atributo \`href\` define o destino do link.

### Imagem: img

\`\`\`html
<img src="foto.jpg" alt="Descrição da foto" />
\`\`\`

A tag \`<img>\` não tem fechamento (é uma tag vazia).

## Divisão e organização: div e span

- **\`<div>\`** — container de bloco, para agrupar elementos em blocos
- **\`<span>\`** — container inline, para estilizar partes de um texto

\`\`\`html
<div class="cartao">
  <h2>Título do cartão</h2>
  <p>Texto com uma <span style="color: red">palavra vermelha</span> no meio.</p>
</div>
\`\`\`

## Tabelas

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maria</td>
      <td>25</td>
    </tr>
    <tr>
      <td>João</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
\`\`\`

- **\`<table>\`** — a tabela
- **\`<thead>\`** / **\`<tbody>\`** — cabeçalho e corpo
- **\`<tr>\`** — linha (table row)
- **\`<th>\`** — célula de cabeçalho (negrito, centralizado)
- **\`<td>\`** — célula de dados

## Formulários básicos

\`\`\`html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" placeholder="Digite seu nome" />
  <button type="submit">Enviar</button>
</form>
\`\`\`

- **\`<input type="text">\`** — campo de texto
- **\`<input type="email">\`** — campo de e-mail (com validação automática)
- **\`<input type="number">\`** — campo numérico
- **\`<textarea>\`** — área de texto multilinha
- **\`<label>\`** — rótulo associado a um campo (melhora acessibilidade)

## Negrito, itálico e destaques

\`\`\`html
<b>negrito visual</b>
<strong>negrito com ênfase semântica</strong>
<i>itálico visual</i>
<em>itálico com ênfase semântica</em>
<mark>texto marcado (amarelo)</mark>
<code>trecho de código</code>
\`\`\`

## O que são atributos HTML?

Tags HTML podem receber **atributos** — informações extras que modificam o comportamento ou aparência do elemento:

\`\`\`html
<a href="https://google.com" target="_blank" rel="noopener">Abrir no Google</a>
\`\`\`

- \`href\` — o destino do link
- \`target="_blank"\` — abre em nova aba
- \`rel="noopener"\` — boa prática de segurança ao abrir em nova aba

Outros atributos comuns:

\`\`\`html
<img src="foto.jpg" alt="Minha foto" width="300" height="200" />
<input type="text" placeholder="Digite aqui" required />
<div id="principal" class="container destaque">Conteúdo</div>
\`\`\`

- \`id\` — identificador único (só pode existir um por página)
- \`class\` — classe CSS (pode repetir em vários elementos)
- \`placeholder\` — texto de dica em inputs
- \`required\` — campo obrigatório em formulários

## Tags auto-fechantes (void elements)

Algumas tags HTML não têm conteúdo interno e não precisam de tag de fechamento:

\`\`\`html
<img src="imagem.jpg" alt="Descrição" />
<input type="text" />
<br />      <!-- quebra de linha -->
<hr />      <!-- linha horizontal -->
<meta charset="UTF-8" />
<link rel="stylesheet" href="styles.css" />
\`\`\`

No HTML5, a barra final (\`/>\`) é opcional para essas tags, mas é boa prática mantê-la.

## Elementos de bloco vs. inline

Todos os elementos HTML se comportam de duas formas básicas:

**Elementos de bloco** — ocupam toda a largura disponível e criam uma quebra de linha antes e depois:
- \`<div>\`, \`<p>\`, \`<h1>\` a \`<h6>\`, \`<ul>\`, \`<ol>\`, \`<li>\`, \`<table>\`, \`<header>\`, \`<main>\`, \`<footer>\`, \`<section>\`

**Elementos inline** — ficam no fluxo do texto, ocupando apenas o espaço necessário:
- \`<span>\`, \`<a>\`, \`<strong>\`, \`<em>\`, \`<img>\`, \`<input>\`, \`<button>\`, \`<code>\`

Isso explica por que \`<p>\` sempre fica em uma linha separada, mas \`<a>\` dentro de um \`<p>\` fica junto com o texto.

## Regras de aninhamento

Elementos HTML precisam ser fechados na ordem inversa em que foram abertos:

\`\`\`html
<!-- ✅ Correto -->
<p>Texto com <strong>negrito <em>e itálico</em></strong> aqui.</p>

<!-- ❌ Errado — cruzamento de tags -->
<p>Texto com <strong>negrito <em>e itálico</strong></em> aqui.</p>
\`\`\`

Além disso, nem todo elemento pode estar dentro de qualquer outro:
- \`<p>\` não pode conter \`<div>\`
- \`<ul>\` só pode conter \`<li>\` como filhos diretos
- \`<a>\` não pode conter outro \`<a>\`

## Entidades HTML

Alguns caracteres têm significado especial no HTML e precisam ser escapados:

| Caractere | Entidade HTML | Uso |
| --- | --- | --- |
| \`<\` | \`&lt;\` | menor que |
| \`>\` | \`&gt;\` | maior que |
| \`&\` | \`&amp;\` | e comercial |
| \`"\` | \`&quot;\` | aspas |
| espaço extra | \`&nbsp;\` | espaço não quebrável |

\`\`\`html
<p>O operador &lt; significa "menor que".</p>
<p>Preço: R$&nbsp;29,90</p>
\`\`\`

## A evolução do HTML

- **HTML 1.0 (1991)** — criado por Tim Berners-Lee, apenas texto e links
- **HTML 2.0 (1995)** — adicionou formulários
- **HTML 4.01 (1999)** — versão dominante por anos
- **XHTML (2000)** — tentativa de tornar HTML mais rígido (não pegou bem)
- **HTML5 (2014)** — versão atual: vídeo nativo, canvas, geolocalização, localStorage, tags semânticas

HTML5 foi um marco porque eliminou a dependência de plugins como Flash para rodar vídeos e jogos nos browsers.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Como você fecha uma tag HTML?',
        options: [
          'Usando o símbolo # antes do nome da tag',
          'Adicionando uma barra / antes do nome da tag',
          'Repetindo a tag igual',
          'Colocando END antes do nome da tag',
        ],
        correct: 1,
        explanation: 'Para fechar uma tag HTML, adicionamos uma barra antes do nome: </h1>, </p>, </div>. Isso indica ao navegador onde aquele elemento termina.',
      },
      {
        id: 'task-2',
        type: 'code',
        title: 'Crie seu primeiro título',
        description: 'Use a tag <code>&lt;h1&gt;</code> para criar um título com o texto "Olá, mundo!".',
        starterCode: '<!-- Escreva seu código aqui -->\n',
        validate: (doc) => {
          const h1 = doc.querySelector('h1')
          return h1 !== null && h1.textContent.trim().length > 0
        },
        successMessage: 'Perfeito! Você criou seu primeiro título HTML!',
        hint: 'Use: <h1>Olá, mundo!</h1>',
      },
      {
        id: 'task-3',
        type: 'quiz',
        question: 'Qual tag é usada para criar um parágrafo de texto?',
        options: ['<text>', '<para>', '<p>', '<t>'],
        correct: 2,
        explanation: 'A tag <p> (de "paragraph") é usada para criar parágrafos de texto em HTML. O navegador adiciona espaçamento automático acima e abaixo de cada parágrafo.',
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Crie uma lista de itens',
        description: 'Crie uma lista não ordenada (<code>&lt;ul&gt;</code>) com pelo menos 3 itens usando <code>&lt;li&gt;</code>.',
        starterCode: '<!-- Crie uma lista com ul e li -->\n',
        validate: (doc) => {
          const ul = doc.querySelector('ul')
          if (!ul) return false
          const items = ul.querySelectorAll('li')
          return items.length >= 3
        },
        successMessage: 'Excelente! Você criou uma lista com múltiplos itens!',
        hint: 'Use: <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
      },
      {
        id: 'task-5',
        type: 'code',
        title: 'Combine título e parágrafo',
        description: 'Crie um <code>&lt;h2&gt;</code> com qualquer texto e um <code>&lt;p&gt;</code> abaixo dele.',
        starterCode: '<!-- Crie um h2 e um p -->\n',
        validate: (doc) => {
          const h2 = doc.querySelector('h2')
          const p = doc.querySelector('p')
          return h2 !== null && h2.textContent.trim().length > 0 && p !== null && p.textContent.trim().length > 0
        },
        successMessage: 'Ótimo trabalho! Você combinou título e parágrafo!',
        hint: 'Use: <h2>Meu subtítulo</h2><p>Meu parágrafo aqui.</p>',
      },
      {
        id: 'task-6',
        type: 'fill',
        title: 'Complete o link HTML',
        description: 'O atributo <code>href</code> é obrigatório na tag de link. Complete o código abaixo:',
        code: '<a {{blank}}="https://google.com">Clique aqui</a>',
        blanks: ['href'],
        hint: 'O atributo que define o destino de um link começa com "h".',
        successMessage: 'Correto! href (hypertext reference) é o atributo que define para onde o link leva.',
      },
      {
        id: 'task-7',
        type: 'type',
        question: 'Qual tag HTML é usada para criar um link (hiperlink)?',
        answer: ['a', '<a>', '<a'],
        placeholder: 'Ex: <tag>',
        hint: 'É uma tag de apenas uma letra, abreviação de "anchor" (âncora).',
        explanation: 'A tag <a> (âncora) cria links. O atributo href define o destino. Ex: <a href="url">texto</a>',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Corrija o link quebrado',
        description: 'A tag de fechamento do link abaixo está incorreta. Encontre e corrija o erro!',
        buggyCode: '<a href="https://google.com">Clique aqui<a>',
        validate: (doc) => {
          const a = doc.querySelector('a')
          return a !== null && a.getAttribute('href') !== null
        },
        successMessage: 'Correto! A tag </a> (com barra) fecha o link corretamente.',
        hint: 'Tags de fechamento precisam de uma barra /. A tag de fechamento correta é </a>, não <a>.',
      },
      {
        id: 'task-9',
        type: 'code',
        title: 'Crie uma tabela simples',
        description: 'Crie uma <code>&lt;table&gt;</code> com 2 colunas (Nome e Nota) e 2 linhas de dados usando <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> e <code>&lt;td&gt;</code>.',
        starterCode: '<!-- Crie uma tabela com cabeçalho e 2 linhas de dados -->\n',
        validate: (doc) => {
          const table = doc.querySelector('table')
          if (!table) return false
          const rows = table.querySelectorAll('tr')
          const cells = table.querySelectorAll('td, th')
          return rows.length >= 2 && cells.length >= 4
        },
        successMessage: 'Ótimo! Você criou uma tabela HTML com cabeçalho e dados!',
        hint: '<table><tr><th>Nome</th><th>Nota</th></tr><tr><td>Maria</td><td>9</td></tr><tr><td>João</td><td>8</td></tr></table>',
      },
      {
        id: 'task-10',
        type: 'quiz',
        question: 'Qual é a diferença entre <div> e <span>?',
        options: [
          'div é para textos; span é para imagens',
          'div é um container de bloco (ocupa a linha toda); span é inline (ocupa só o espaço do conteúdo)',
          'div é do HTML5; span é mais antigo',
          'Não há diferença, são iguais',
        ],
        correct: 1,
        explanation: '<div> é um elemento de bloco: ocupa toda a largura disponível e cria uma "quebra de linha" antes e depois. <span> é inline: fica no fluxo do texto. Use div para agrupar seções, span para estilizar partes de um texto.',
      },
      {
        id: 'task-11',
        type: 'code',
        title: 'Crie um formulário básico',
        description: 'Crie um formulário com um campo de texto (<code>&lt;input type="text"&gt;</code>), um campo de email (<code>&lt;input type="email"&gt;</code>) e um botão de envio.',
        starterCode: '<!-- Crie um form com input text, email e button -->\n',
        validate: (doc) => {
          const form = doc.querySelector('form') || doc.body
          const text = doc.querySelector('input[type="text"]')
          const email = doc.querySelector('input[type="email"]')
          const btn = doc.querySelector('button, input[type="submit"]')
          return text !== null && email !== null && btn !== null
        },
        successMessage: 'Ótimo! Você criou um formulário HTML básico!',
        hint: '<form><input type="text" placeholder="Nome"><input type="email" placeholder="Email"><button>Enviar</button></form>',
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'Complete as tags de ênfase',
        description: 'Complete as tags corretas para cada tipo de destaque no texto:',
        code: '<!-- Negrito com ênfase semântica: -->\n<{{blank}}>Importante</{{blank}}>\n\n<!-- Itálico com ênfase semântica: -->\n<{{blank}}>Atenção</{{blank}}>\n\n<!-- Código inline: -->\n<{{blank}}>console.log()</{{blank}}>',
        blanks: ['strong', 'strong', 'em', 'em', 'code', 'code'],
        hint: 'Negrito semântico = strong, itálico semântico = em, código inline = code.',
        successMessage: 'Perfeito! Você conhece as tags de ênfase semântica do HTML.',
      },
      {
        id: 'task-13',
        type: 'quiz',
        question: 'Para que serve o atributo "alt" em uma tag <img>?',
        options: [
          'Define o tamanho da imagem',
          'Define a URL da imagem',
          'Fornece um texto alternativo para acessibilidade e quando a imagem não carrega',
          'Define o título que aparece ao passar o mouse',
        ],
        correct: 2,
        explanation: 'O atributo alt descreve a imagem em texto. Ele é usado por leitores de tela (acessibilidade para deficientes visuais) e é exibido quando a imagem não carrega. É obrigatório para boas práticas de HTML.',
      },
      {
        id: 'task-14',
        type: 'bug',
        title: 'Tag de imagem sem alt',
        description: 'A imagem abaixo está sem o atributo <code>alt</code>, o que é uma má prática de acessibilidade. Adicione um <code>alt</code> descritivo.',
        buggyCode: '<img src="foto-perfil.jpg" />',
        validate: (doc) => {
          const img = doc.querySelector('img')
          return img !== null && img.hasAttribute('alt')
        },
        successMessage: 'Correto! Toda imagem deve ter um atributo alt descritivo.',
        hint: 'Adicione alt="descrição da imagem" dentro da tag img.',
      },
      {
        id: 'task-15',
        type: 'code',
        title: 'Crie um cartão de perfil',
        description: 'Use uma <code>&lt;div&gt;</code> com: um <code>&lt;h2&gt;</code> com um nome, um <code>&lt;p&gt;</code> com uma profissão e um <code>&lt;a&gt;</code> com href="#" e texto "Ver perfil".',
        starterCode: '<!-- Crie um cartão de perfil com div, h2, p e a -->\n',
        validate: (doc) => {
          const div = doc.querySelector('div')
          const h2 = doc.querySelector('h2')
          const p = doc.querySelector('p')
          const a = doc.querySelector('a')
          return div !== null && h2 !== null && p !== null && a !== null
        },
        successMessage: 'Perfeito! Você montou um cartão de perfil HTML completo!',
        hint: '<div><h2>Maria Silva</h2><p>Desenvolvedora</p><a href="#">Ver perfil</a></div>',
      },
    ],
  },
  {
    id: 'modulo-3',
    number: '04',
    stageId: 'aprendiz',
    stage: 'Iniciante Avançado',
    title: 'Estrutura de uma página HTML',
    description: 'Aprenda a estrutura completa de um documento HTML com head e body.',
    color: '#ec4899',
    context: `## A estrutura completa de um HTML

Todo arquivo HTML bem formado segue uma estrutura padrão. Veja o esqueleto básico:

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Título da página</title>
  </head>
  <body>
    <h1>Conteúdo visível aqui</h1>
  </body>
</html>
\`\`\`

## Cada parte explicada

### DOCTYPE

\`<!DOCTYPE html>\` avisa ao navegador que este é um documento HTML5. Sempre deve ser a primeira linha.

### html

A tag \`<html>\` envolve todo o conteúdo da página. O atributo \`lang="pt-BR"\` indica o idioma.

### head

A tag \`<head>\` contém informações sobre a página que **não aparecem na tela**:
- \`<meta charset="UTF-8">\` — define o conjunto de caracteres (permite acentos)
- \`<title>\` — define o título que aparece na aba do navegador
- Links para CSS e outras configurações

### body

A tag \`<body>\` contém todo o conteúdo **visível** da página: textos, imagens, botões, listas, etc.

## Por que essa estrutura importa?

Sem essa estrutura básica, o navegador ainda tenta mostrar a página, mas pode ter comportamentos inesperados como problemas com acentuação, título ausente na aba, ou renderização inconsistente entre navegadores.

## Boas práticas

- Sempre inclua \`<!DOCTYPE html>\`
- Sempre use \`<meta charset="UTF-8">\` para suporte a caracteres especiais
- Escreva um \`<title>\` descritivo para cada página
- Mantenha a indentação organizada para facilitar a leitura

## Tags semânticas do HTML5

HTML5 introduziu tags que descrevem o **significado** do conteúdo, não só a aparência:

\`\`\`html
<header>   <!-- cabeçalho da página ou seção -->
<nav>      <!-- menu de navegação -->
<main>     <!-- conteúdo principal -->
<section>  <!-- seção temática -->
<article>  <!-- conteúdo independente (post, notícia) -->
<aside>    <!-- conteúdo lateral (sidebar) -->
<footer>   <!-- rodapé -->
\`\`\`

Antes, tudo era \`<div>\`. Com tags semânticas, o código fica mais legível e os mecanismos de busca (Google) entendem melhor o conteúdo.

## Comentários em HTML

\`\`\`html
<!-- Isto é um comentário e não aparece na página -->
<p>Este texto aparece.</p>
<!-- TODO: adicionar imagem aqui -->
\`\`\`

Comentários são invisíveis para o usuário mas úteis para quem lê o código.

## Vinculando CSS externo

A melhor prática é manter o CSS em um arquivo separado:

\`\`\`html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
\`\`\`

Isso permite reutilizar o mesmo CSS em múltiplas páginas.

## Meta tags importantes

\`\`\`html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Página sobre programação web" />
  <title>Minha Página</title>
</head>
\`\`\`

- **viewport** — essencial para responsividade em mobile
- **description** — aparece nos resultados do Google

## Vinculando JavaScript externo

\`\`\`html
<body>
  <!-- conteúdo -->
  <script src="script.js"></script>
</body>
\`\`\`

O \`<script>\` vai no final do \`<body>\` para o HTML ser carregado antes do JavaScript executar.

## Acessibilidade (a11y)

Acessibilidade é fazer com que seu site funcione para todas as pessoas, inclusive aquelas com deficiências visuais, auditivas ou motoras.

Boas práticas essenciais:

**1. Sempre use o atributo \`alt\` em imagens**
\`\`\`html
<img src="grafico.png" alt="Gráfico mostrando crescimento de 30% nas vendas" />
<img src="decorativo.png" alt="" /> <!-- imagem decorativa: alt vazio -->
\`\`\`

**2. Use labels em todos os campos de formulário**
\`\`\`html
<!-- ✅ Acessível -->
<label for="email">E-mail:</label>
<input type="email" id="email" />

<!-- ❌ Inacessível para leitores de tela -->
<input type="email" placeholder="E-mail" />
\`\`\`

**3. Use headings em ordem hierárquica**
\`\`\`html
<h1>Título principal</h1>    <!-- só um por página -->
  <h2>Seção</h2>
    <h3>Subseção</h3>
  <h2>Outra seção</h2>
\`\`\`

**4. Use tags semânticas** — \`<nav>\`, \`<main>\`, \`<article>\`, \`<aside>\` dizem ao leitor de tela qual é a função de cada parte da página.

Cerca de **15% da população mundial** tem algum tipo de deficiência. Acessibilidade não é extra — é responsabilidade.

## SEO: como o Google lê seu HTML

**SEO** (Search Engine Optimization) é o conjunto de práticas para aparecer bem nos resultados de busca. O Google "lê" seu HTML para entender o conteúdo da página.

**O que o Google valoriza:**

\`\`\`html
<head>
  <title>Aprenda HTML do zero em 30 dias | Curso Iniciante</title>
  <meta name="description" content="Curso completo de HTML para iniciantes absolutos. Do zero ao seu primeiro site." />
</head>
<body>
  <h1>Aprenda HTML do Zero</h1>  <!-- apenas UM h1 por página -->
  <p>Texto relevante com palavras-chave naturais.</p>
  <img src="html.jpg" alt="Código HTML sendo escrito" />  <!-- alt conta para SEO -->
  <a href="/proxima-aula">Próxima aula</a>  <!-- texto descritivo no link -->
</body>
\`\`\`

**O que prejudica o SEO:**
- Múltiplos \`<h1>\` na mesma página
- Imagens sem \`alt\`
- Links com texto genérico ("clique aqui")
- Página sem \`<title>\`
- Conteúdo duplicado

## Formulários em detalhe

Formulários são a principal forma de coletar dados do usuário:

\`\`\`html
<form action="/enviar" method="POST">
  <!-- Texto -->
  <input type="text" name="nome" placeholder="Seu nome" />

  <!-- Email (valida formato automaticamente) -->
  <input type="email" name="email" />

  <!-- Senha (esconde o texto) -->
  <input type="password" name="senha" />

  <!-- Número -->
  <input type="number" name="idade" min="1" max="120" />

  <!-- Caixa de seleção -->
  <input type="checkbox" name="termos" id="termos" />
  <label for="termos">Aceito os termos</label>

  <!-- Opção única (radio) -->
  <input type="radio" name="plano" value="gratuito" /> Gratuito
  <input type="radio" name="plano" value="premium" /> Premium

  <!-- Seleção de lista -->
  <select name="pais">
    <option value="br">Brasil</option>
    <option value="pt">Portugal</option>
  </select>

  <!-- Área de texto -->
  <textarea name="mensagem" rows="4"></textarea>

  <!-- Botão de envio -->
  <button type="submit">Enviar</button>
</form>
\`\`\`

O atributo \`name\` em cada campo é o identificador que será enviado ao servidor junto com o valor digitado.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Qual é a função da tag <head> em um documento HTML?',
        options: [
          'Exibir o cabeçalho visual da página',
          'Conter informações sobre a página que não aparecem na tela',
          'Criar o menu de navegação',
          'Definir o estilo do site',
        ],
        correct: 1,
        explanation: 'A tag <head> contém metadados e configurações da página: charset, título da aba, links para CSS, etc. Essas informações são processadas pelo navegador mas não aparecem diretamente na tela.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Onde deve ficar o conteúdo visível de uma página HTML?',
        options: ['Dentro de <head>', 'Dentro de <html> mas fora de <body>', 'Dentro de <body>', 'Dentro de <meta>'],
        correct: 2,
        explanation: 'Todo conteúdo visível ao usuário (textos, imagens, botões, listas) deve estar dentro da tag <body>. O <head> é reservado para configurações e metadados.',
      },
      {
        id: 'task-3',
        type: 'code',
        title: 'Crie a estrutura básica',
        description: 'Crie um documento HTML completo com <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code> e <code>&lt;body&gt;</code>.',
        starterCode: '<!DOCTYPE html>\n<!-- Complete a estrutura abaixo -->\n',
        validate: (doc) => {
          return (
            doc.querySelector('html') !== null &&
            doc.querySelector('head') !== null &&
            doc.querySelector('title') !== null &&
            doc.querySelector('body') !== null
          )
        },
        successMessage: 'Perfeito! Você criou a estrutura completa de uma página HTML!',
        hint: 'Use: <!DOCTYPE html><html><head><title>Minha página</title></head><body><h1>Olá!</h1></body></html>',
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Adicione um título à aba',
        description: 'Crie um HTML com a tag <code>&lt;title&gt;</code> no head contendo o texto "Minha primeira página".',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <!-- Adicione o title aqui -->\n  </head>\n  <body>\n    <h1>Olá!</h1>\n  </body>\n</html>\n',
        validate: (doc) => {
          const title = doc.querySelector('title')
          return title !== null && title.textContent.trim().length > 0
        },
        successMessage: 'Excelente! Agora a aba do navegador tem um título!',
        hint: 'Adicione <title>Minha primeira página</title> dentro de <head>',
      },
      {
        id: 'task-5',
        type: 'quiz',
        question: 'Para que serve o <!DOCTYPE html> no início do documento?',
        options: [
          'É um comentário explicativo',
          'Define o idioma da página',
          'Avisa ao navegador que o documento é HTML5',
          'Importa estilos CSS automáticos',
        ],
        correct: 2,
        explanation: '<!DOCTYPE html> é uma declaração que informa ao navegador qual versão do HTML está sendo usada. No HTML5, essa declaração é simples e deve ser sempre a primeira linha do documento.',
      },
      {
        id: 'task-6',
        type: 'fill',
        title: 'Complete a estrutura HTML',
        description: 'Complete as tags que faltam no esqueleto de uma página HTML:',
        code: '<!DOCTYPE html>\n<{{blank}} lang="pt-BR">\n  <head>\n    <{{blank}} charset="UTF-8" />\n    <title>Minha página</title>\n  </head>\n  <{{blank}}>\n    <h1>Olá!</h1>\n  </body>\n</html>',
        blanks: ['html', 'meta', 'body'],
        hint: 'As três lacunas são: a tag raiz, a tag de metadado de charset, e a tag de conteúdo visível.',
        successMessage: 'Perfeito! Você montou a estrutura completa de uma página HTML.',
      },
      {
        id: 'task-7',
        type: 'type',
        question: 'Qual tag HTML contém o conteúdo VISÍVEL de uma página?',
        answer: ['body', '<body>'],
        placeholder: 'Digite o nome da tag...',
        hint: 'Tudo que o usuário vê na tela fica dentro desta tag.',
        explanation: 'A tag <body> contém todo o conteúdo visível: textos, imagens, botões. O <head> fica com os metadados invisíveis.',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Estrutura HTML incompleta',
        description: 'O documento HTML abaixo está faltando a tag <code>&lt;body&gt;</code>. Adicione-a no lugar correto!',
        buggyCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <title>Minha Página</title>\n  </head>\n  <h1>Olá, Mundo!</h1>\n  <p>Bem-vindo ao meu site.</p>\n</html>',
        validate: (doc) => {
          return doc.querySelector('body') !== null && doc.querySelector('h1') !== null
        },
        successMessage: 'Correto! O <body> envolve todo o conteúdo visível da página.',
        hint: 'O <body> deve estar logo após o </head>. Envolva o <h1> e o <p> dentro de <body>...</body>.',
      },
      {
        id: 'task-9',
        type: 'quiz',
        question: 'Qual tag HTML5 representa o conteúdo PRINCIPAL de uma página?',
        options: ['<content>', '<main>', '<body>', '<section>'],
        correct: 1,
        explanation: '<main> marca o conteúdo principal e único da página — o que a diferencia de todas as outras. Deve existir apenas um <main> por página. Ajuda na acessibilidade e SEO.',
      },
      {
        id: 'task-10',
        type: 'code',
        title: 'Use tags semânticas',
        description: 'Crie uma página com a estrutura semântica: <code>&lt;header&gt;</code> com um <code>&lt;h1&gt;</code>, <code>&lt;main&gt;</code> com um <code>&lt;p&gt;</code> e <code>&lt;footer&gt;</code> com qualquer texto.',
        starterCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Página Semântica</title>\n  </head>\n  <body>\n    <!-- Use header, main e footer aqui -->\n  </body>\n</html>\n',
        validate: (doc) => {
          return (
            doc.querySelector('header') !== null &&
            doc.querySelector('main') !== null &&
            doc.querySelector('footer') !== null
          )
        },
        successMessage: 'Excelente! Sua página usa estrutura semântica corretamente!',
        hint: '<body><header><h1>Meu Site</h1></header><main><p>Conteúdo principal.</p></main><footer>Rodapé</footer></body>',
      },
      {
        id: 'task-11',
        type: 'fill',
        title: 'Complete a meta tag de viewport',
        description: 'A meta tag de viewport é essencial para sites responsivos. Complete-a:',
        code: '<meta name="{{blank}}" content="{{blank}}, initial-scale=1.0" />',
        blanks: ['viewport', 'width=device-width'],
        hint: 'O name é "viewport" e o content começa com "width=device-width".',
        successMessage: 'Correto! A meta viewport garante que o site funcione bem em celulares.',
      },
      {
        id: 'task-12',
        type: 'quiz',
        question: 'Por que o <script> deve ser colocado no final do <body>?',
        options: [
          'Por uma regra arbitrária de estilo de código',
          'Para que o HTML seja carregado e exibido antes do JavaScript executar',
          'Porque o JavaScript não funciona no <head>',
          'Para que o CSS tenha prioridade sobre o JS',
        ],
        correct: 1,
        explanation: 'Quando o navegador encontra um <script>, ele para de renderizar o HTML para executar o JavaScript. Se o script fica no final do <body>, o HTML já foi carregado e o usuário vê a página mais rápido. Além disso, o JS pode acessar os elementos HTML que já existem.',
      },
      {
        id: 'task-13',
        type: 'code',
        title: 'Vincule um CSS externo',
        description: 'Crie um documento HTML com a tag <code>&lt;link&gt;</code> no <code>&lt;head&gt;</code> apontando para um arquivo <code>styles.css</code> com <code>rel="stylesheet"</code>.',
        starterCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Com CSS externo</title>\n    <!-- Adicione o link para styles.css aqui -->\n  </head>\n  <body>\n    <h1>Página com CSS externo</h1>\n  </body>\n</html>\n',
        validate: (doc) => {
          const link = doc.querySelector('link[rel="stylesheet"]')
          return link !== null && link.getAttribute('href') !== null
        },
        successMessage: 'Ótimo! Você sabe vincular um arquivo CSS externo.',
        hint: '<link rel="stylesheet" href="styles.css" />',
      },
      {
        id: 'task-14',
        type: 'type',
        question: 'Qual tag HTML5 é usada para criar uma área de navegação (menu de links)?',
        answer: ['nav', '<nav>'],
        placeholder: 'nome da tag',
        hint: 'É uma tag semântica do HTML5 de 3 letras, abreviação de "navigation".',
        explanation: '<nav> é a tag semântica para menus de navegação. Ela indica aos buscadores e leitores de tela que aquele bloco contém links de navegação do site.',
      },
      {
        id: 'task-15',
        type: 'bug',
        title: 'Meta charset fora do head',
        description: 'A meta tag de charset está no lugar errado. Corrija a estrutura para que ela fique dentro do <head>.',
        buggyCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <title>Minha Página</title>\n  </head>\n  <body>\n    <meta charset="UTF-8" />\n    <h1>Olá!</h1>\n  </body>\n</html>',
        validate: (doc) => {
          const head = doc.querySelector('head')
          if (!head) return false
          const meta = head.querySelector('meta[charset]')
          return meta !== null
        },
        successMessage: 'Correto! O <meta charset> deve estar sempre dentro do <head>.',
        hint: 'Mova a tag <meta charset="UTF-8" /> para dentro de <head>, antes do <title>.',
      },
    ],
  },
  {
    id: 'modulo-4',
    number: '05',
    stageId: 'estudante',
    stage: 'Médio',
    title: 'CSS: primeiros estilos',
    description: 'Aprenda a adicionar cores, fontes e bordas às suas páginas com CSS.',
    color: '#10b981',
    context: `## O que é CSS?

CSS (Cascading Style Sheets) é a linguagem responsável pela **aparência** de uma página web. Enquanto o HTML define a estrutura, o CSS define como ela é exibida: cores, tamanhos, fontes, espaçamentos e muito mais.

## Como o CSS é escrito?

O CSS é composto de **regras**. Cada regra tem um seletor e um bloco de declarações:

\`\`\`css
h1 {
  color: blue;
  font-size: 32px;
}
\`\`\`

- **Seletor** (\`h1\`) — indica qual elemento será estilizado
- **Propriedade** (\`color\`) — o que será alterado
- **Valor** (\`blue\`) — como será alterado

## Como conectar CSS ao HTML?

A forma mais comum é usar a tag \`<style>\` dentro do \`<head>\`:

\`\`\`html
<head>
  <style>
    p {
      color: green;
      font-size: 18px;
    }
  </style>
</head>
\`\`\`

## Cores

Você pode usar:
- **Nome**: \`red\`, \`blue\`, \`green\`, \`black\`, \`white\`
- **Hexadecimal**: \`#ff0000\` (vermelho), \`#3b82f6\` (azul)
- **RGB**: \`rgb(255, 0, 0)\`

## Fontes e texto

\`\`\`css
p {
  font-size: 20px;      /* tamanho da fonte */
  font-weight: bold;    /* negrito */
  text-align: center;   /* alinhamento */
  color: #333;          /* cor do texto */
}
\`\`\`

## Bordas e fundo

\`\`\`css
div {
  background-color: #f0f0f0;
  border: 2px solid #999;
  border-radius: 8px;   /* cantos arredondados */
}
\`\`\`

## Seletores essenciais

| Seletor | O que seleciona |
| --- | --- |
| \`h1\` | todas as tags h1 |
| \`.destaque\` | elementos com class="destaque" |
| \`#titulo\` | elemento com id="titulo" |

## A cascata do CSS (o "C" de CSS)

CSS significa **Cascading Style Sheets** — "Folhas de Estilo em Cascata". A "cascata" descreve como o navegador decide qual estilo aplicar quando há conflitos:

**1. Especificidade** — estilos mais específicos vencem:
\`\`\`css
p { color: blue; }               /* menos específico */
.texto { color: green; }         /* mais específico */
#titulo { color: red; }          /* ainda mais específico */
\`\`\`
Se um elemento tem id="titulo" e class="texto" e é uma \`<p>\`, a cor será **vermelho** (ID ganha).

**2. Ordem** — quando a especificidade é igual, o último declarado vence:
\`\`\`css
p { color: blue; }
p { color: red; }   /* este vence — veio por último */
\`\`\`

**3. Herança** — filhos herdam algumas propriedades dos pais:
\`\`\`css
body {
  font-family: Arial;   /* todos os filhos herdam */
  color: #333;          /* todos os filhos herdam */
}
\`\`\`
Propriedades herdadas: \`color\`, \`font-family\`, \`font-size\`. Não herdadas: \`margin\`, \`padding\`, \`border\`.

## Pseudo-classes

Pseudo-classes permitem estilizar um elemento **em um estado específico**:

\`\`\`css
/* Ao passar o mouse */
a:hover { color: red; }

/* Quando o campo está em foco */
input:focus { border-color: blue; outline: none; }

/* Botão sendo clicado */
button:active { transform: scale(0.98); }

/* Link já visitado */
a:visited { color: purple; }

/* Primeiro filho */
li:first-child { font-weight: bold; }

/* Último filho */
li:last-child { border-bottom: none; }

/* Filho de posição específica */
tr:nth-child(even) { background: #f5f5f5; }  /* linhas pares */
\`\`\`

## Pseudo-elementos

Pseudo-elementos criam "elementos virtuais" que não existem no HTML:

\`\`\`css
/* Conteúdo antes do elemento */
h2::before {
  content: '→ ';
  color: blue;
}

/* Conteúdo depois do elemento */
p::after {
  content: ' ✓';
}

/* Primeira letra */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}
\`\`\`

## Unidades de medida

CSS tem várias unidades para expressar tamanhos:

| Unidade | Significado | Exemplo |
| --- | --- | --- |
| \`px\` | pixels (absoluto) | \`font-size: 16px\` |
| \`%\` | relativo ao elemento pai | \`width: 50%\` |
| \`em\` | relativo ao font-size do elemento | \`padding: 1.5em\` |
| \`rem\` | relativo ao font-size do root (html) | \`font-size: 1.25rem\` |
| \`vw\` | porcentagem da largura da viewport | \`width: 100vw\` |
| \`vh\` | porcentagem da altura da viewport | \`height: 100vh\` |

**Dica profissional:** use \`rem\` para fontes (respeita as configurações de acessibilidade do usuário) e \`px\` para bordas e sombras.

## CSS Reset

Por padrão, cada navegador aplica seus próprios estilos em elementos HTML. Chrome, Firefox e Safari têm diferenças sutis. Para garantir consistência, muitos projetos começam com um **CSS Reset**:

\`\`\`css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  line-height: 1.5;
}
\`\`\`

O seletor \`*\` seleciona **todos** os elementos da página. Essa é a única situação em que usá-lo faz sentido.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'O que o CSS é responsável em uma página web?',
        options: [
          'Definir a estrutura dos elementos',
          'Definir a aparência visual: cores, fontes e layout',
          'Adicionar interatividade e lógica',
          'Criar o banco de dados do site',
        ],
        correct: 1,
        explanation: 'CSS (Cascading Style Sheets) cuida da aparência da página. HTML cria a estrutura, CSS estiliza essa estrutura, e JavaScript adiciona comportamento.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Qual é a sintaxe correta para colorir todos os parágrafos de vermelho?',
        options: [
          'p { color = red; }',
          'p { color: red; }',
          '<p style=red>',
          'p -> color: red',
        ],
        correct: 1,
        explanation: 'A sintaxe CSS usa dois pontos entre a propriedade e o valor, e termina com ponto e vírgula: propriedade: valor;. O seletor vai fora das chaves.',
      },
      {
        id: 'task-3',
        type: 'code',
        title: 'Pinte o título de azul',
        description: 'Crie um <code>&lt;h1&gt;</code> e use <code>&lt;style&gt;</code> para deixar a cor do texto azul (<code>color: blue</code>).',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Escreva seu CSS aqui */\n    </style>\n  </head>\n  <body>\n    <h1>Meu título</h1>\n  </body>\n</html>\n',
        validate: (doc) => {
          const h1 = doc.querySelector('h1')
          if (!h1) return false
          const style = doc.defaultView.getComputedStyle(h1)
          const color = style.color
          // accepts blue or rgb(0,0,255) or any non-black/non-default color set via CSS
          const styleTag = doc.querySelector('style')
          return styleTag !== null && styleTag.textContent.includes('color') && h1 !== null
        },
        successMessage: 'Ótimo! Você aplicou seu primeiro estilo CSS!',
        hint: 'Dentro de <style>, escreva: h1 { color: blue; }',
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Fundo colorido e texto centralizado',
        description: 'Crie um <code>&lt;p&gt;</code> com qualquer texto. Use CSS para aplicar uma <code>background-color</code> qualquer e <code>text-align: center</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Estilize o parágrafo */\n    </style>\n  </head>\n  <body>\n    <p>Texto de exemplo</p>\n  </body>\n</html>\n',
        validate: (doc) => {
          const styleTag = doc.querySelector('style')
          if (!styleTag) return false
          const css = styleTag.textContent
          return css.includes('background-color') && css.includes('text-align')
        },
        successMessage: 'Excelente! Fundo e alinhamento aplicados com sucesso!',
        hint: 'p { background-color: yellow; text-align: center; }',
      },
      {
        id: 'task-5',
        type: 'code',
        title: 'Adicione uma borda',
        description: 'Crie uma <code>&lt;div&gt;</code> com texto dentro e aplique via CSS: <code>border: 2px solid black</code> e <code>border-radius: 8px</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Adicione border e border-radius à div */\n    </style>\n  </head>\n  <body>\n    <div>Minha caixa</div>\n  </body>\n</html>\n',
        validate: (doc) => {
          const styleTag = doc.querySelector('style')
          if (!styleTag) return false
          const css = styleTag.textContent
          return css.includes('border') && css.includes('border-radius')
        },
        successMessage: 'Perfeito! Bordas arredondadas aplicadas!',
        hint: 'div { border: 2px solid black; border-radius: 8px; }',
      },
      {
        id: 'task-6',
        type: 'fill',
        title: 'Complete a regra CSS',
        description: 'Complete as propriedades que faltam nessa regra CSS:',
        code: 'h1 {\n  {{blank}}: #3b82f6;   /* cor do texto */\n  {{blank}}: 32px;       /* tamanho da fonte */\n  {{blank}}: center;     /* alinhamento */\n}',
        blanks: ['color', 'font-size', 'text-align'],
        hint: 'Propriedade da cor, tamanho da fonte e alinhamento do texto.',
        successMessage: 'Ótimo! Você conhece as propriedades CSS essenciais para texto.',
      },
      {
        id: 'task-7',
        type: 'type',
        question: 'Qual propriedade CSS muda a cor do TEXTO de um elemento?',
        answer: ['color'],
        placeholder: 'nome da propriedade',
        hint: 'É a propriedade mais básica do CSS para texto. Em inglês: cor.',
        explanation: 'A propriedade "color" define a cor do texto. Não confunda com "background-color" que muda o fundo.',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'CSS com ponto-e-vírgula faltando',
        description: 'O CSS abaixo tem uma propriedade sem ponto-e-vírgula no final. Encontre e corrija!',
        buggyCode: '<style>\n  p {\n    color: red\n    font-size: 18px;\n    font-weight: bold;\n  }\n</style>\n<p>Texto de teste</p>',
        validate: (doc) => {
          const p = doc.querySelector('p')
          if (!p) return false
          const style = doc.querySelector('style')
          if (!style) return false
          return style.textContent.includes('color: red;')
        },
        successMessage: 'Correto! Toda declaração CSS precisa terminar com ponto-e-vírgula.',
        hint: 'Em CSS, cada propriedade deve terminar com ; (ponto-e-vírgula). Verifique a linha com "color: red".',
      },
      {
        id: 'task-9',
        type: 'drag',
        title: 'Ordene as partes de uma regra CSS',
        description: 'Coloque as partes de uma regra CSS na ordem correta:',
        blocks: ['seletor (ex: h1)', '{ abertura do bloco', 'propriedade: valor;', '} fechamento do bloco'],
        hint: 'Uma regra CSS começa com o seletor, depois o bloco { } com as declarações dentro.',
        successMessage: 'Perfeito! Você montou uma regra CSS na ordem correta.',
      },
      {
        id: 'task-10',
        type: 'fill',
        title: 'Seletores CSS: ID vs Classe',
        description: 'Complete os seletores CSS para cada caso:',
        code: '/* Seleciona elemento com id="titulo" */\n{{blank}}titulo { color: blue; }\n\n/* Seleciona elementos com class="destaque" */\n{{blank}}destaque { font-weight: bold; }',
        blanks: ['#', '.'],
        hint: 'ID usa "#" e classe usa "." antes do nome.',
        successMessage: 'Correto! # para IDs e . para classes — fundamentos do CSS!',
      },
      {
        id: 'task-11',
        type: 'code',
        title: 'Estilize com uma classe',
        description: 'Crie dois parágrafos. Aplique a classe <code>destaque</code> a um deles. No CSS, defina <code>.destaque</code> com <code>background-color: yellow</code> e <code>font-weight: bold</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Defina .destaque aqui */\n    </style>\n  </head>\n  <body>\n    <p>Parágrafo normal</p>\n    <p class="destaque">Parágrafo destacado</p>\n  </body>\n</html>\n',
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('.destaque') && css.includes('background-color') && css.includes('font-weight')
        },
        successMessage: 'Ótimo! Você sabe aplicar estilos via classe CSS.',
        hint: '.destaque { background-color: yellow; font-weight: bold; }',
      },
      {
        id: 'task-12',
        type: 'quiz',
        question: 'Qual é a ordem de especificidade do CSS (do mais fraco para o mais forte)?',
        options: [
          'ID → Classe → Tag',
          'Tag → Classe → ID',
          'Classe → ID → Tag',
          'Todos têm a mesma especificidade',
        ],
        correct: 1,
        explanation: 'A especificidade define qual regra CSS vence quando há conflito. Tag (ex: p) tem a menor especificidade, depois vem Classe (.destaque), e ID (#titulo) tem a maior. O style inline supera todos.',
      },
      {
        id: 'task-13',
        type: 'fill',
        title: 'Propriedades CSS de texto',
        description: 'Complete as propriedades CSS usadas para estilizar texto:',
        code: 'p {\n  {{blank}}: 18px;       /* tamanho da fonte */\n  {{blank}}: bold;       /* negrito */\n  {{blank}}: center;     /* alinhamento */\n  {{blank}}: italic;     /* itálico */\n  {{blank}}: uppercase;  /* maiúsculas */\n}',
        blanks: ['font-size', 'font-weight', 'text-align', 'font-style', 'text-transform'],
        hint: 'Em ordem: tamanho, peso, alinhamento, estilo e transformação do texto.',
        successMessage: 'Ótimo! Você conhece as principais propriedades CSS de tipografia.',
      },
      {
        id: 'task-14',
        type: 'code',
        title: 'Crie um botão estilizado',
        description: 'Crie um <code>&lt;button&gt;</code> e aplique CSS para: <code>background-color</code>, <code>color: white</code>, <code>padding</code>, <code>border-radius</code> e <code>border: none</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Estilize o button */\n    </style>\n  </head>\n  <body>\n    <button>Clique aqui</button>\n  </body>\n</html>\n',
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('background-color') && css.includes('padding') && css.includes('border-radius')
        },
        successMessage: 'Ótimo! Você criou um botão estilizado com CSS!',
        hint: 'button { background-color: #3b82f6; color: white; padding: 10px 20px; border-radius: 6px; border: none; }',
      },
      {
        id: 'task-15',
        type: 'drag',
        title: 'Ordem de importância dos seletores CSS',
        description: 'Ordene os tipos de seletor do menos específico para o mais específico:',
        blocks: [
          'Tag (ex: p, h1, div)',
          'Classe (ex: .destaque)',
          'ID (ex: #titulo)',
          'Style inline (ex: style="color: red")',
          '!important (força máxima)',
        ],
        hint: 'Tag → Classe → ID → inline → !important.',
        successMessage: 'Perfeito! Você entende a cascata de especificidade do CSS!',
      },
    ],
  },
  {
    id: 'modulo-5',
    number: '06',
    stageId: 'estudante',
    stage: 'Médio Avançado',
    title: 'CSS: box model e layout',
    description: 'Entenda o box model e crie layouts com flexbox.',
    color: '#f59e0b',
    context: `## O Box Model

Todo elemento HTML é uma **caixa** (box). Essa caixa tem quatro camadas:

\`\`\`
┌─────────────────────────────┐
│           margin            │
│  ┌───────────────────────┐  │
│  │        border         │  │
│  │  ┌─────────────────┐  │  │
│  │  │     padding     │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  conteúdo │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
\`\`\`

- **content** — o conteúdo em si (texto, imagem)
- **padding** — espaço interno entre o conteúdo e a borda
- **border** — a borda do elemento
- **margin** — espaço externo entre o elemento e os vizinhos

## Padding e Margin

\`\`\`css
div {
  padding: 16px;            /* todos os lados */
  padding: 8px 16px;        /* vertical horizontal */
  margin: 24px;
  margin-top: 12px;         /* lado específico */
}
\`\`\`

## Display

A propriedade \`display\` controla como o elemento ocupa espaço:

| Valor | Comportamento |
| --- | --- |
| \`block\` | ocupa a linha inteira (padrão: div, p, h1) |
| \`inline\` | ocupa só o espaço do conteúdo (padrão: span, a) |
| \`flex\` | ativa o modo flexbox |
| \`none\` | esconde o elemento |

## Flexbox

Flexbox é o jeito moderno de organizar elementos lado a lado ou em colunas:

\`\`\`css
.container {
  display: flex;
  gap: 16px;                 /* espaço entre os filhos */
  justify-content: center;   /* alinhamento horizontal */
  align-items: center;       /* alinhamento vertical */
}
\`\`\`

Valores comuns para \`justify-content\`:
- \`flex-start\` — alinha no início
- \`center\` — centraliza
- \`space-between\` — distribui com espaço entre
- \`space-around\` — distribui com espaço ao redor

## Exemplo completo

\`\`\`html
<style>
  .cards {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .card {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>

<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
\`\`\`

## flex-direction e flex-wrap

\`\`\`css
.container {
  display: flex;
  flex-direction: row;     /* padrão: itens em linha */
  flex-direction: column;  /* itens em coluna (um embaixo do outro) */
  flex-wrap: wrap;         /* quebra de linha se não couber */
}
\`\`\`

## CSS Grid (introdução)

Grid é o sistema de layout bidimensional — controla linhas E colunas ao mesmo tempo:

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 colunas iguais */
  gap: 16px;
}
\`\`\`

\`1fr\` significa "1 fração do espaço disponível". É como dividir o espaço em partes iguais.

## box-sizing: border-box

Por padrão, \`width\` não inclui padding e border. O \`border-box\` corrige isso:

\`\`\`css
* {
  box-sizing: border-box; /* padding e border ficam dentro do width */
}
\`\`\`

Essa é uma das primeiras linhas em qualquer projeto CSS moderno.

## Variáveis CSS (Custom Properties)

\`\`\`css
:root {
  --cor-primaria: #3b82f6;
  --espacamento: 16px;
}

button {
  background: var(--cor-primaria);
  padding: var(--espacamento);
}
\`\`\`

Variáveis CSS permitem reutilizar valores e mudar o tema inteiro em um só lugar.

## Position: controlando onde o elemento aparece

A propriedade \`position\` muda como um elemento é posicionado na página:

\`\`\`css
/* Padrão — flui com o documento */
div { position: static; }

/* Relativo à sua posição normal */
div { position: relative; top: 10px; left: 20px; }

/* Relativo ao ancestral posicionado mais próximo */
.tooltip { position: absolute; top: 0; right: 0; }

/* Fixo na tela — não rola com o scroll */
.navbar { position: fixed; top: 0; width: 100%; }

/* Fixo dentro de um container até sair da tela */
.sidebar-title { position: sticky; top: 20px; }
\`\`\`

**Caso de uso clássico:** botão "voltar ao topo" fixo no canto da tela:
\`\`\`css
.btn-topo {
  position: fixed;
  bottom: 24px;
  right: 24px;
}
\`\`\`

## Z-index: sobreposição de elementos

\`z-index\` controla qual elemento fica "por cima" quando há sobreposição. Funciona apenas em elementos com \`position\` diferente de \`static\`:

\`\`\`css
.modal { position: fixed; z-index: 1000; }
.overlay { position: fixed; z-index: 999; }
.navbar { position: sticky; z-index: 100; }
\`\`\`

Quanto maior o número, mais à frente o elemento aparece.

## Transições e animações

CSS pode animar mudanças de estilo sem JavaScript:

\`\`\`css
button {
  background: blue;
  transition: background 0.3s ease, transform 0.2s;
}

button:hover {
  background: darkblue;
  transform: scale(1.05);
}
\`\`\`

\`transition\` recebe: **propriedade duração timing-function**

Para animações mais complexas, use \`@keyframes\`:
\`\`\`css
@keyframes pulsar {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.icone {
  animation: pulsar 1.5s infinite;
}
\`\`\`

## Media Queries: design responsivo

Media queries permitem aplicar estilos diferentes dependendo do tamanho da tela:

\`\`\`css
/* Estilo padrão (mobile first) */
.container {
  padding: 16px;
  flex-direction: column;
}

/* Tablet: 768px ou mais */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    flex-direction: row;
  }
}

/* Desktop: 1024px ou mais */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
\`\`\`

**Mobile First** é a abordagem profissional: comece estilizando para telas pequenas e use \`min-width\` para adicionar estilos em telas maiores. É mais fácil adicionar do que remover.

## Overflow: o que acontece quando o conteúdo é grande demais

\`\`\`css
div {
  overflow: visible;  /* padrão: conteúdo sai do box */
  overflow: hidden;   /* corta o conteúdo que passa */
  overflow: scroll;   /* sempre mostra scrollbar */
  overflow: auto;     /* scrollbar só quando necessário */
}
\`\`\`

Muito útil para criar áreas com scroll interno ou esconder conteúdo animado.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Qual propriedade CSS cria espaço INTERNO entre o conteúdo e a borda do elemento?',
        options: ['margin', 'padding', 'border', 'spacing'],
        correct: 1,
        explanation: 'Padding cria espaço interno (dentro da borda). Margin cria espaço externo (fora da borda, entre elementos). É a diferença entre "respiração interna" e "distância entre vizinhos".',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Qual valor de "display" ativa o modo flexbox em um elemento?',
        options: ['display: block', 'display: inline', 'display: flex', 'display: grid'],
        correct: 2,
        explanation: 'display: flex transforma o elemento em um flex container, permitindo organizar seus filhos lado a lado, centralizá-los e controlar o espaçamento com propriedades como justify-content e gap.',
      },
      {
        id: 'task-3',
        type: 'quiz',
        question: 'O que faz "justify-content: space-between" em um flex container?',
        options: [
          'Centraliza todos os itens no meio',
          'Distribui os itens com espaço igual entre eles, sem espaço nas bordas',
          'Adiciona espaço igual ao redor de cada item',
          'Empurra todos os itens para o início',
        ],
        correct: 1,
        explanation: 'space-between coloca o primeiro item no início, o último no fim, e distribui espaço igual entre os itens do meio. É muito usado em barras de navegação.',
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Aplique padding e margin',
        description: 'Crie uma <code>&lt;div&gt;</code> com texto. Use CSS para aplicar <code>padding: 16px</code> e <code>margin: 24px</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Adicione padding e margin à div */\n    </style>\n  </head>\n  <body>\n    <div>Caixa com espaçamento</div>\n  </body>\n</html>\n',
        validate: (doc) => {
          const styleTag = doc.querySelector('style')
          if (!styleTag) return false
          const css = styleTag.textContent
          return css.includes('padding') && css.includes('margin')
        },
        successMessage: 'Ótimo! Você dominou padding e margin!',
        hint: 'div { padding: 16px; margin: 24px; }',
      },
      {
        id: 'task-5',
        type: 'code',
        title: 'Crie um layout flexbox',
        description: 'Crie uma <code>&lt;div class="container"&gt;</code> com 3 <code>&lt;div&gt;</code>s filhos. Use CSS para aplicar <code>display: flex</code> e <code>gap: 12px</code> no container.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Aplique display: flex e gap no .container */\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div>Item 1</div>\n      <div>Item 2</div>\n      <div>Item 3</div>\n    </div>\n  </body>\n</html>\n',
        validate: (doc) => {
          const styleTag = doc.querySelector('style')
          if (!styleTag) return false
          const css = styleTag.textContent
          const container = doc.querySelector('.container')
          return container !== null && css.includes('flex') && css.includes('gap')
        },
        successMessage: 'Perfeito! Você criou seu primeiro layout flexbox!',
        hint: '.container { display: flex; gap: 12px; }',
      },
      {
        id: 'task-6',
        type: 'fill',
        title: 'Complete o código flexbox',
        description: 'Preencha as lacunas para criar um container centralizado com flexbox:',
        code: '.container {\n  display: {{blank}};\n  {{blank}}: center;    /* alinha horizontalmente */\n  {{blank}}: center;    /* alinha verticalmente */\n  gap: 16px;\n}',
        blanks: ['flex', 'justify-content', 'align-items'],
        hint: 'As propriedades de alinhamento do flexbox começam com "justify" (horizontal) e "align" (vertical).',
        successMessage: 'Excelente! Você sabe configurar um flex container completo.',
      },
      {
        id: 'task-7',
        type: 'type',
        question: 'Qual propriedade CSS cria espaço INTERNO entre o conteúdo e a borda do elemento?',
        answer: ['padding'],
        placeholder: 'nome da propriedade',
        hint: 'É diferente de margin (que é espaço externo). Pense no estofamento de uma caixa.',
        explanation: 'padding é o espaço interno (dentro da borda). margin é o espaço externo (entre elementos). É a diferença entre "respiração interna" e "distância entre vizinhos".',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Flexbox com valor errado',
        description: 'O CSS abaixo usa o valor errado para <code>display</code>. O valor <code>flexbox</code> não existe — o correto é <code>flex</code>. Corrija!',
        buggyCode: '<style>\n  .container {\n    display: flexbox;\n    gap: 10px;\n  }\n</style>\n<div class="container">\n  <p>Item 1</p>\n  <p>Item 2</p>\n</div>',
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          return style.textContent.includes('display: flex') && !style.textContent.includes('display: flexbox')
        },
        successMessage: 'Correto! O valor correto é "flex", não "flexbox".',
        hint: 'O valor da propriedade display para ativar o Flexbox é simplesmente "flex". "flexbox" não é um valor válido.',
      },
      {
        id: 'task-9',
        type: 'drag',
        title: 'Ordene as camadas do Box Model',
        description: 'Arraste as camadas do Box Model do centro para o exterior (de dentro para fora):',
        blocks: ['content (conteúdo)', 'padding (espaço interno)', 'border (borda)', 'margin (espaço externo)'],
        hint: 'Pense numa caixa: o conteúdo fica no centro, depois vem o estofamento (padding), depois a parede (border) e o espaço externo (margin).',
        successMessage: 'Excelente! Você domina o Box Model do CSS!',
      },
      {
        id: 'task-10',
        type: 'fill',
        title: 'Complete o layout flexbox centralizado',
        description: 'Preencha as lacunas para centralizar itens horizontal e verticalmente:',
        code: '.centro {\n  display: flex;\n  justify-content: {{blank}};  /* horizontal */\n  align-items: {{blank}};      /* vertical */\n  height: 100vh;\n}',
        blanks: ['center', 'center'],
        hint: 'Para centralizar nos dois eixos, o valor é o mesmo: "center".',
        successMessage: 'Correto! justify-content e align-items: center centralizam tudo!',
      },
      {
        id: 'task-11',
        type: 'code',
        title: 'Layout em coluna com flexbox',
        description: 'Crie um <code>.container</code> com <code>display: flex</code> e <code>flex-direction: column</code>. Adicione 3 filhos com textos diferentes.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      /* Crie o container em coluna */\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div>Topo</div>\n      <div>Meio</div>\n      <div>Base</div>\n    </div>\n  </body>\n</html>\n',
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('flex') && css.includes('column')
        },
        successMessage: 'Ótimo! flex-direction: column empilha os itens verticalmente!',
        hint: '.container { display: flex; flex-direction: column; gap: 8px; }',
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'CSS Grid básico',
        description: 'Complete o CSS para criar um grid de 3 colunas iguais com espaçamento:',
        code: '.grid {\n  display: {{blank}};\n  grid-template-columns: {{blank}} {{blank}} {{blank}};\n  gap: 16px;\n}',
        blanks: ['grid', '1fr', '1fr', '1fr'],
        hint: 'display: grid ativa o grid, e "1fr" representa uma fração igual do espaço.',
        successMessage: 'Perfeito! Você criou um grid de 3 colunas com frações iguais!',
      },
      {
        id: 'task-13',
        type: 'quiz',
        question: 'O que faz o "box-sizing: border-box"?',
        options: [
          'Remove todas as bordas do elemento',
          'Faz o padding e a border ficarem DENTRO da largura definida pelo width',
          'Adiciona uma borda automática em todos os elementos',
          'Transforma o elemento em uma caixa com cantos arredondados',
        ],
        correct: 1,
        explanation: 'Com box-sizing: border-box, o width inclui padding e border. Sem ele (content-box), um elemento com width:200px e padding:20px ficaria com 240px de largura total. border-box é mais intuitivo e é a primeira coisa que bons projetos CSS definem.',
      },
      {
        id: 'task-14',
        type: 'fill',
        title: 'Variáveis CSS',
        description: 'Complete a sintaxe para definir e usar variáveis CSS:',
        code: ':root {\n  {{blank}}cor-primaria: #3b82f6;\n  {{blank}}espacamento: 16px;\n}\n\nbutton {\n  background: {{blank}}(--cor-primaria);\n  padding: var({{blank}}espacamento);\n}',
        blanks: ['--', '--', 'var', '--'],
        hint: 'Variáveis CSS são declaradas com -- e usadas com var(--nome).',
        successMessage: 'Ótimo! Variáveis CSS tornam o código muito mais fácil de manter.',
      },
      {
        id: 'task-15',
        type: 'code',
        title: 'Mini página com CSS completo',
        description: 'Crie uma página com um <code>.container</code> centralizado (<code>display: flex; justify-content: center; align-items: center; height: 100vh</code>) contendo um <code>.card</code> com padding, border-radius e background-color.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body { margin: 0; }\n      /* Estilize .container e .card */\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="card">\n        <h2>Meu Card</h2>\n        <p>Conteúdo do card aqui.</p>\n      </div>\n    </div>\n  </body>\n</html>\n',
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('flex') && css.includes('padding') && css.includes('border-radius')
        },
        successMessage: 'Parabéns! Você criou uma página profissional com CSS completo!',
        hint: '.container { display: flex; justify-content: center; align-items: center; height: 100vh; } .card { padding: 24px; border-radius: 12px; background-color: white; }',
      },
    ],
  },
  {
    id: 'modulo-6',
    number: '07',
    stageId: 'praticante',
    stage: 'Entendedor',
    title: 'JavaScript: variáveis e tipos',
    description: 'Dê seus primeiros passos em JavaScript aprendendo variáveis e tipos de dados.',
    color: '#f43f5e',
    context: `## O que é JavaScript?

JavaScript é a linguagem de programação do navegador. Com ela você pode:
- Reagir a cliques e eventos do usuário
- Modificar o conteúdo da página dinamicamente
- Fazer cálculos, validações e muito mais

Enquanto HTML estrutura e CSS estiliza, **JavaScript dá vida** à página.

## Variáveis

Uma variável é um espaço nomeado para guardar um valor:

\`\`\`js
let nome = 'Maria'
let idade = 25
let ativo = true
\`\`\`

Use \`let\` para variáveis que podem mudar, e \`const\` para valores fixos:

\`\`\`js
const PI = 3.14159
const titulo = 'Curso Iniciante'
\`\`\`

## Tipos de dados

| Tipo | Exemplo | Descrição |
| --- | --- | --- |
| String | \`'texto'\` | texto entre aspas |
| Number | \`42\`, \`3.14\` | números |
| Boolean | \`true\`, \`false\` | verdadeiro ou falso |
| Null | \`null\` | ausência intencional de valor |
| Undefined | \`undefined\` | variável declarada sem valor |

## Strings

Strings são textos. Você pode concatenar com \`+\` ou usar template literals:

\`\`\`js
let nome = 'João'
let msg1 = 'Olá, ' + nome + '!'       // 'Olá, João!'
let msg2 = \`Olá, \${nome}!\`           // forma moderna
\`\`\`

## Mostrando resultado na página

Para exibir algo no HTML via JavaScript, use:

\`\`\`js
document.getElementById('resultado').textContent = 'Olá!'
\`\`\`

Ou para inserir HTML:

\`\`\`js
document.getElementById('resultado').innerHTML = '<b>Olá!</b>'
\`\`\`

## Console

Durante o desenvolvimento, o console é seu melhor amigo:

\`\`\`js
console.log('teste')          // imprime no console do navegador
console.log(typeof 'texto')   // "string"
console.log(typeof 42)        // "number"
\`\`\`

## Arrays

Arrays são listas ordenadas de valores:

\`\`\`js
const frutas = ['maçã', 'banana', 'laranja']
console.log(frutas[0])      // 'maçã' (índice começa em 0)
console.log(frutas.length)  // 3

frutas.push('uva')          // adiciona ao final
frutas.pop()                // remove o último
\`\`\`

## Objetos

Objetos agrupam dados relacionados em pares chave:valor:

\`\`\`js
const pessoa = {
  nome: 'Ana',
  idade: 28,
  ativo: true
}

console.log(pessoa.nome)       // 'Ana'
console.log(pessoa['idade'])   // 28
pessoa.email = 'ana@email.com' // adiciona nova propriedade
\`\`\`

## Operadores aritméticos

\`\`\`js
let x = 10
x = x + 5   // 15 (ou: x += 5)
x = x - 3   // 12 (ou: x -= 3)
x = x * 2   // 24 (ou: x *= 2)
x = x / 4   // 6  (ou: x /= 4)
x = x % 4   // 2  (resto da divisão)
x++         // incrementa 1 (x = x + 1)
x--         // decrementa 1 (x = x - 1)
\`\`\`

## Conversão de tipos

\`\`\`js
Number('42')          // 42 (string → número)
String(42)            // '42' (número → string)
Boolean(0)            // false
Boolean('texto')      // true (qualquer string não-vazia é truthy)
parseInt('42px')      // 42 (extrai número do início da string)
\`\`\`

## Como o JavaScript funciona no navegador

Quando o navegador carrega uma página, ele cria dois ambientes separados:

**1. Processo de renderização** — processa HTML e CSS, cria a árvore visual
**2. Engine JavaScript** — executa o código JS (Chrome usa a V8, Firefox usa SpiderMonkey)

O JavaScript é **single-threaded** — executa uma coisa de cada vez, na ordem que foi escrito. Mas tem um mecanismo chamado **Event Loop** que permite lidar com operações assíncronas (como esperar uma resposta de um servidor) sem travar a página.

## Escopo e hoisting

**Escopo** define onde uma variável existe:

\`\`\`js
let global = 'visível em todo lugar'

function minhaFuncao() {
  let local = 'só existe aqui dentro'
  console.log(global)  // ✅ funciona
  console.log(local)   // ✅ funciona
}

console.log(local)     // ❌ ReferenceError: local is not defined
\`\`\`

**Hoisting** (içamento): \`var\` e declarações de função são "içadas" para o topo do escopo:

\`\`\`js
console.log(x)  // undefined (não dá erro por causa do hoisting)
var x = 5

// Com let e const:
console.log(y)  // ❌ ReferenceError (let/const NÃO sofrem hoisting da mesma forma)
let y = 5
\`\`\`

Por isso é melhor sempre usar \`let\` e \`const\` — o comportamento é mais previsível.

## Métodos de String

Strings têm vários métodos úteis:

\`\`\`js
const nome = 'maria silva'

nome.toUpperCase()        // 'MARIA SILVA'
nome.toLowerCase()        // 'maria silva' (já estava)
nome.trim()               // remove espaços das bordas
'  olá  '.trim()          // 'olá'

nome.includes('silva')    // true
nome.startsWith('maria')  // true
nome.endsWith('silva')    // true

nome.replace('silva', 'santos')  // 'maria santos'
nome.split(' ')           // ['maria', 'silva']
nome.length               // 11

// Pegar parte de uma string:
'JavaScript'.slice(0, 4)  // 'Java'
'JavaScript'.slice(4)     // 'Script'

// Repetir:
'ha'.repeat(3)            // 'hahaha'
\`\`\`

## O objeto Math

JavaScript tem um objeto embutido com funções matemáticas:

\`\`\`js
Math.round(4.7)    // 5 — arredonda para o inteiro mais próximo
Math.floor(4.9)    // 4 — sempre arredonda para baixo
Math.ceil(4.1)     // 5 — sempre arredonda para cima
Math.abs(-10)      // 10 — valor absoluto
Math.max(3, 7, 2)  // 7 — maior valor
Math.min(3, 7, 2)  // 2 — menor valor
Math.sqrt(16)      // 4 — raiz quadrada
Math.pow(2, 8)     // 256 — potência (2^8)
Math.PI            // 3.14159... — constante PI

// Número aleatório entre 0 e 1:
Math.random()

// Número inteiro aleatório entre 1 e 10:
Math.floor(Math.random() * 10) + 1
\`\`\`

## Métodos de Array

Arrays têm métodos muito poderosos para transformar dados:

\`\`\`js
const numeros = [1, 2, 3, 4, 5]

// forEach — executa uma função para cada item
numeros.forEach(n => console.log(n))

// map — transforma cada item, retorna novo array
const dobrados = numeros.map(n => n * 2)
// [2, 4, 6, 8, 10]

// filter — retorna apenas os itens que passam no teste
const pares = numeros.filter(n => n % 2 === 0)
// [2, 4]

// find — retorna o PRIMEIRO item que passa no teste
const primeiroPar = numeros.find(n => n % 2 === 0)
// 2

// reduce — acumula um resultado
const soma = numeros.reduce((acc, n) => acc + n, 0)
// 15

// includes — verifica se um valor existe
numeros.includes(3)  // true

// indexOf — posição de um valor
numeros.indexOf(3)   // 2
\`\`\`

Esses métodos (\`map\`, \`filter\`, \`reduce\`) são fundamentais no JavaScript moderno e usados em todo framework.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Qual palavra-chave usar para declarar uma variável que pode ter seu valor alterado?',
        options: ['const', 'var', 'let', 'set'],
        correct: 2,
        explanation: 'let declara uma variável que pode ser reatribuída. const declara uma constante — seu valor não pode ser alterado após a atribuição. No JavaScript moderno, prefira let e const em vez de var.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Qual é o tipo de dado do valor: true?',
        options: ['String', 'Number', 'Boolean', 'Null'],
        correct: 2,
        explanation: 'true e false são valores do tipo Boolean. Eles representam verdadeiro/falso e são muito usados em condições e lógica de programação.',
      },
      {
        id: 'task-3',
        type: 'quiz',
        question: 'Qual das opções é um exemplo válido de template literal em JavaScript?',
        options: [
          '"Olá, " + nome + "!"',
          '\'Olá, \' + nome',
          '`Olá, ${nome}!`',
          'format("Olá, {}", nome)',
        ],
        correct: 2,
        explanation: 'Template literals usam crases (`) e permitem inserir variáveis diretamente com ${variavel}. São mais legíveis que concatenação com + e suportam múltiplas linhas.',
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Exiba uma mensagem com JavaScript',
        description: 'Use JavaScript para colocar o texto <strong>"Olá, mundo!"</strong> dentro do elemento com <code>id="resultado"</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="resultado"></p>\n    <script>\n      // Escreva seu JavaScript aqui\n      // Dica: document.getElementById(\'resultado\').textContent = \'...\'\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const el = doc.getElementById('resultado')
          return el !== null && el.textContent.trim().length > 0
        },
        successMessage: 'Ótimo! Você manipulou o DOM com JavaScript!',
        hint: "document.getElementById('resultado').textContent = 'Olá, mundo!'",
      },
      {
        id: 'task-5',
        type: 'code',
        title: 'Use uma variável',
        description: 'Crie uma variável <code>nome</code> com seu nome, e use um template literal para exibir <strong>"Olá, [seu nome]!"</strong> no elemento <code>id="resultado"</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="resultado"></p>\n    <script>\n      let nome = \'\'  // coloque seu nome aqui\n      // Use template literal para exibir a mensagem\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const el = doc.getElementById('resultado')
          if (!el) return false
          const text = el.textContent.trim()
          return text.startsWith('Olá') && text.length > 5
        },
        successMessage: 'Perfeito! Variáveis e template literals dominados!',
        hint: 'document.getElementById(\'resultado\').textContent = `Olá, ${nome}!`',
      },
      {
        id: 'task-6',
        type: 'fill',
        title: 'Declare variáveis corretamente',
        description: 'Complete as declarações de variáveis com as palavras-chave corretas:',
        code: '// Variável que pode mudar:\n{{blank}} contador = 0\n\n// Valor fixo (constante):\n{{blank}} PI = 3.14159\n\n// Texto (string):\n{{blank}} mensagem = `Olá, ${nome}!`',
        blanks: ['let', 'const', 'let'],
        hint: 'Use "let" para valores que mudam e "const" para valores fixos. O template literal também usa let pois seu valor pode variar.',
        successMessage: 'Correto! let para variáveis mutáveis, const para constantes.',
      },
      {
        id: 'task-7',
        type: 'type',
        question: 'Qual método JavaScript imprime um valor no console do navegador?',
        answer: ['console.log', 'console.log()'],
        placeholder: 'método completo',
        hint: 'Ele começa com "console" seguido de ponto e o nome do método.',
        explanation: 'console.log() é a ferramenta mais usada para depuração. Abre as DevTools do navegador (F12) e você verá tudo que foi logado.',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Declaração de variável com maiúscula',
        description: 'O JavaScript abaixo usa <code>Let</code> com L maiúsculo — isso causa um erro! Corrija para que a variável seja declarada corretamente.',
        buggyCode: '<script>\n  Let nome = "Maria";\n  document.write(nome);\n</script>',
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('let nome') || s.textContent.includes('const nome') || s.textContent.includes('var nome')) {
              return true
            }
          }
          return false
        },
        successMessage: 'Correto! Em JavaScript as palavras-chave são case-sensitive: "let" (minúsculo) é o correto.',
        hint: 'JavaScript é case-sensitive. "Let" com L maiúsculo não é reconhecido. Use "let" em minúsculo.',
      },
      {
        id: 'task-9',
        type: 'drag',
        title: 'Ordene os tipos de dados JavaScript',
        description: 'Arranje os tipos de dados do mais simples para o mais complexo:',
        blocks: ['Boolean (true/false)', 'Number (42, 3.14)', 'String ("texto")', 'Array ([1,2,3])', 'Object ({chave: valor})'],
        hint: 'Comece pelos tipos primitivos simples (boolean, number, string) e depois os estruturados (array, object).',
        successMessage: 'Ótimo! Você conhece a hierarquia dos tipos em JavaScript!',
      },
      {
        id: 'task-10',
        type: 'fill',
        title: 'Template literals vs concatenação',
        description: 'Complete os dois exemplos que produzem o mesmo resultado:',
        code: 'let nome = "Ana"\n\n// Concatenação com +:\nlet msg1 = "Olá, " {{blank}} nome {{blank}} "!"\n\n// Template literal (forma moderna):\nlet msg2 = `Olá, {{blank}}{nome}!`',
        blanks: ['+', '+', '$'],
        hint: 'Concatenação usa + entre strings. Template literals usam ${} para inserir variáveis.',
        successMessage: 'Perfeito! Você domina as duas formas de combinar strings em JavaScript.',
      },
      {
        id: 'task-11',
        type: 'quiz',
        question: 'Qual é o índice do PRIMEIRO elemento de um array em JavaScript?',
        options: ['1', '0', '-1', 'first'],
        correct: 1,
        explanation: 'Arrays em JavaScript (e na maioria das linguagens) começam no índice 0. Então frutas[0] é o primeiro, frutas[1] é o segundo, etc. O último elemento fica em frutas[frutas.length - 1].',
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'Trabalhando com arrays',
        description: 'Complete o código para manipular um array:',
        code: 'const numeros = [10, 20, 30]\n\n// Acessar o primeiro elemento:\nlet primeiro = numeros[{{blank}}]\n\n// Quantidade de elementos:\nlet tamanho = numeros.{{blank}}\n\n// Adicionar ao final:\nnumeros.{{blank}}(40)',
        blanks: ['0', 'length', 'push'],
        hint: 'Primeiro índice = 0, tamanho = .length, adicionar = .push()',
        successMessage: 'Perfeito! Você domina as operações básicas com arrays.',
      },
      {
        id: 'task-13',
        type: 'code',
        title: 'Crie e use um objeto',
        description: 'Crie um objeto <code>produto</code> com as propriedades <code>nome</code>, <code>preco</code> e <code>estoque</code>. Exiba <strong>"Produto: [nome], R$ [preco]"</strong> no elemento <code>id="resultado"</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="resultado"></p>\n    <script>\n      const produto = {\n        // Defina nome, preco e estoque aqui\n      }\n      // Exiba no resultado\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const el = doc.getElementById('resultado')
          return el !== null && el.textContent.trim().length > 5
        },
        successMessage: 'Ótimo! Você criou e usou um objeto JavaScript!',
        hint: 'const produto = { nome: "Notebook", preco: 2999, estoque: 5 }\ndocument.getElementById("resultado").textContent = `Produto: ${produto.nome}, R$ ${produto.preco}`',
      },
      {
        id: 'task-14',
        type: 'quiz',
        question: 'O que retorna: Boolean(0)?',
        options: ['true', 'false', '0', 'undefined'],
        correct: 1,
        explanation: 'Em JavaScript, 0 é um valor "falsy" — quando convertido para Boolean, resulta em false. Outros falsy: "" (string vazia), null, undefined, NaN. Tudo o resto é truthy (verdadeiro), incluindo "0" (string com zero).',
      },
      {
        id: 'task-15',
        type: 'fill',
        title: 'Operadores de incremento e shorthand',
        description: 'Complete os atalhos de operações aritméticas:',
        code: 'let x = 10\n\nx {{blank}} 5   // equivale a: x = x + 5\nx {{blank}} 3   // equivale a: x = x - 3\nx{{blank}}      // equivale a: x = x + 1\nx{{blank}}      // equivale a: x = x - 1',
        blanks: ['+=', '-=', '++', '--'],
        hint: 'Shorthands: +=, -=, *= /=. Incremento: ++. Decremento: --.',
        successMessage: 'Correto! Operadores de incremento e shorthand tornam o código mais limpo.',
      },
    ],
  },
  {
    id: 'modulo-7',
    number: '08',
    stageId: 'praticante',
    stage: 'Entendedor Avançado',
    title: 'JavaScript: condicionais e funções',
    description: 'Aprenda a tomar decisões com if/else e a organizar código com funções.',
    color: '#8b5cf6',
    context: `## Condicionais: if / else

O \`if\` permite executar código **apenas quando uma condição é verdadeira**:

\`\`\`js
let hora = 14

if (hora < 12) {
  console.log('Bom dia!')
} else if (hora < 18) {
  console.log('Boa tarde!')
} else {
  console.log('Boa noite!')
}
\`\`\`

## Operadores de comparação

| Operador | Significado |
| --- | --- |
| \`===\` | igual (valor e tipo) |
| \`!==\` | diferente |
| \`>\` | maior que |
| \`<\` | menor que |
| \`>=\` | maior ou igual |
| \`<=\` | menor ou igual |

Use sempre \`===\` (três sinais) em vez de \`==\` para evitar bugs de conversão de tipo.

## Operadores lógicos

\`\`\`js
if (idade >= 18 && temCarteira) { ... }   // E (ambos devem ser true)
if (chovendo || frio) { ... }             // OU (pelo menos um true)
if (!logado) { ... }                      // NÃO (inverte o boolean)
\`\`\`

## Funções

Funções agrupam código que pode ser **reutilizado**:

\`\`\`js
function somar(a, b) {
  return a + b
}

let resultado = somar(3, 4)   // 7
\`\`\`

- **parâmetros** (\`a\`, \`b\`) — valores que a função recebe
- **return** — valor que a função devolve

## Arrow functions

A forma moderna e compacta de escrever funções:

\`\`\`js
const somar = (a, b) => a + b
const dobrar = (n) => n * 2
\`\`\`

## Exemplo completo

\`\`\`js
function classificar(nota) {
  if (nota >= 7) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}

document.getElementById('resultado').textContent = classificar(8)
// Aprovado
\`\`\`

## Loops: for e while

\`\`\`js
// For: quando você sabe quantas vezes repetir
for (let i = 0; i < 5; i++) {
  console.log(i) // 0, 1, 2, 3, 4
}

// While: quando você repete até uma condição mudar
let contador = 0
while (contador < 3) {
  console.log(contador)
  contador++
}

// Percorrer um array:
const nomes = ['Ana', 'Bia', 'Carlos']
for (const nome of nomes) {
  console.log(nome)
}
\`\`\`

## Operador ternário

Uma forma compacta de escrever if/else:

\`\`\`js
// Forma longa:
let msg
if (idade >= 18) {
  msg = 'Maior de idade'
} else {
  msg = 'Menor de idade'
}

// Ternário (uma linha):
let msg = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
\`\`\`

Sintaxe: \`condição ? valor_se_true : valor_se_false\`

## Switch

Quando há muitos casos para comparar um mesmo valor:

\`\`\`js
const dia = 'segunda'

switch (dia) {
  case 'segunda':
    console.log('Início da semana')
    break
  case 'sexta':
    console.log('Quase fim de semana!')
    break
  default:
    console.log('Dia comum')
}
\`\`\`

## Escopo de variáveis

\`\`\`js
let global = 'fora'

function exemplo() {
  let local = 'dentro'
  console.log(global) // funciona — acessa o escopo externo
  console.log(local)  // funciona
}

console.log(local) // ERRO — local não existe aqui
\`\`\`

## Callbacks: funções como argumento

Em JavaScript, funções são "cidadãs de primeira classe" — podem ser passadas como argumentos para outras funções:

\`\`\`js
function executar(funcao) {
  funcao()
}

function dizerOla() {
  console.log('Olá!')
}

executar(dizerOla)  // 'Olá!'

// Forma compacta com arrow function:
executar(() => console.log('Olá!'))
\`\`\`

Esse padrão é chamado de **callback** e é fundamental em JavaScript — usado em eventos, animações, requisições HTTP e muito mais.

## Parâmetros padrão

Funções podem ter valores padrão para os parâmetros:

\`\`\`js
function saudar(nome = 'visitante', saudacao = 'Olá') {
  return \`\${saudacao}, \${nome}!\`
}

saudar('Ana', 'Boa tarde')  // 'Boa tarde, Ana!'
saudar('João')              // 'Olá, João!'
saudar()                    // 'Olá, visitante!'
\`\`\`

## Tratamento de erros: try/catch

Quando algo pode dar errado (operação inválida, dado ausente, servidor offline), use \`try/catch\`:

\`\`\`js
try {
  const resultado = JSON.parse('isso não é JSON válido')
  console.log(resultado)
} catch (erro) {
  console.log('Deu erro:', erro.message)
  // continua executando sem travar
}
\`\`\`

Sem \`try/catch\`, um erro não tratado **para a execução do programa inteiro**.

## Desestruturação

Forma moderna e compacta de extrair valores de arrays e objetos:

\`\`\`js
// Array:
const cores = ['vermelho', 'verde', 'azul']
const [primeira, segunda] = cores
// primeira = 'vermelho', segunda = 'verde'

// Objeto:
const pessoa = { nome: 'Ana', idade: 28, cidade: 'SP' }
const { nome, idade } = pessoa
// nome = 'Ana', idade = 28

// Em parâmetros de função:
function mostrar({ nome, idade }) {
  console.log(\`\${nome} tem \${idade} anos\`)
}
mostrar(pessoa)  // 'Ana tem 28 anos'
\`\`\`

## Spread e Rest

**Spread (\`...\`)** — expande um array ou objeto:
\`\`\`js
const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [...a, ...b]       // [1, 2, 3, 4, 5, 6]

const config = { cor: 'azul' }
const novo = { ...config, tamanho: 'grande' }
// { cor: 'azul', tamanho: 'grande' }
\`\`\`

**Rest (\`...\`)** — coleta múltiplos argumentos em um array:
\`\`\`js
function somar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}
somar(1, 2, 3, 4, 5)  // 15
\`\`\`

## Short-circuit evaluation

JavaScript usa avaliação "curto-circuito" com \`&&\` e \`||\`:

\`\`\`js
// && retorna o primeiro valor falsy ou o último valor:
false && 'qualquer coisa'   // false (parou no false)
true && 'valor'             // 'valor'

// || retorna o primeiro valor truthy:
null || 'padrão'            // 'padrão'
'texto' || 'padrão'         // 'texto'

// Uso prático:
const nome = usuario?.nome || 'Anônimo'
const isAdmin = usuario && usuario.role === 'admin'
\`\`\``,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Qual operador de comparação deve ser preferido em JavaScript para verificar igualdade?',
        options: ['== (dois sinais)', '=== (três sinais)', '= (um sinal)', '!= (diferente)'],
        correct: 1,
        explanation: '=== compara valor E tipo, evitando comportamentos inesperados. Por exemplo, 0 == false é true, mas 0 === false é false. Sempre use === para comparações seguras.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'O que a palavra-chave "return" faz dentro de uma função?',
        options: [
          'Reinicia a execução da função',
          'Imprime o valor no console',
          'Devolve um valor como resultado da função e encerra sua execução',
          'Declara uma variável local',
        ],
        correct: 2,
        explanation: 'return encerra a execução da função e devolve o valor especificado para quem a chamou. Sem return, a função devolve undefined.',
      },
      {
        id: 'task-3',
        type: 'code',
        title: 'Use um if para exibir mensagem',
        description: 'Crie uma variável <code>idade</code> com valor 20. Use <code>if/else</code> para exibir <strong>"Maior de idade"</strong> ou <strong>"Menor de idade"</strong> no elemento <code>id="resultado"</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="resultado"></p>\n    <script>\n      let idade = 20\n      // Escreva o if/else aqui\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const el = doc.getElementById('resultado')
          return el !== null && el.textContent.trim().length > 0
        },
        successMessage: 'Ótimo! Sua primeira condicional funcionou!',
        hint: "if (idade >= 18) { document.getElementById('resultado').textContent = 'Maior de idade' } else { ... }",
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Crie e chame uma função',
        description: 'Crie uma função chamada <code>saudar</code> que receba um parâmetro <code>nome</code> e retorne a string <code>"Olá, [nome]!"</code>. Exiba o resultado no elemento <code>id="resultado"</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="resultado"></p>\n    <script>\n      // Crie a função saudar aqui\n\n      // Chame a função e exiba o resultado\n      document.getElementById(\'resultado\').textContent = saudar(\'Mundo\')\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const el = doc.getElementById('resultado')
          if (!el) return false
          const text = el.textContent.trim()
          return text.startsWith('Olá') && text.includes('Mundo')
        },
        successMessage: 'Excelente! Você criou e chamou sua primeira função!',
        hint: 'function saudar(nome) { return `Olá, ${nome}!` }',
      },
      {
        id: 'task-5',
        type: 'quiz',
        question: 'Qual é o resultado de: if (3 > 5 || 10 > 2) { resultado = "sim" }',
        options: [
          'resultado fica sem valor, pois 3 não é maior que 5',
          'resultado = "sim", pois 10 > 2 é true e o || requer apenas um true',
          'Erro de sintaxe',
          'resultado = "sim" apenas se ambas as condições forem true',
        ],
        correct: 1,
        explanation: 'O operador || (OU lógico) retorna true se PELO MENOS UMA das condições for verdadeira. Como 10 > 2 é true, a condição toda é true e o bloco é executado.',
      },
      {
        id: 'task-6',
        type: 'fill',
        title: 'Complete a função classificar',
        description: 'Preencha as lacunas para completar a função que classifica uma nota:',
        code: 'function classificar(nota) {\n  {{blank}} (nota >= 7) {\n    {{blank}} \'Aprovado\'\n  } {{blank}} {\n    {{blank}} \'Reprovado\'\n  }\n}',
        blanks: ['if', 'return', 'else', 'return'],
        hint: 'Os blocos condicionais em JS usam "if" e "else". Para devolver um valor de uma função, use "return".',
        successMessage: 'Perfeito! Você montou uma função com condicional completa.',
      },
      {
        id: 'task-7',
        type: 'type',
        question: 'Qual operador lógico representa "E" (ambas as condições devem ser verdadeiras) em JavaScript?',
        answer: ['&&', '&& (e)'],
        placeholder: 'operador',
        hint: 'São dois caracteres iguais. É o operador mais restritivo.',
        explanation: '&& é o operador lógico "E". Retorna true apenas se AMBAS as condições forem verdadeiras. O operador "OU" é ||.',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Comparação com atribuição',
        description: 'O código abaixo usa <code>=</code> (atribuição) em vez de <code>===</code> (comparação) dentro do if. Corrija!',
        buggyCode: '<script>\n  let idade = 18;\n  if (idade = 18) {\n    document.write("Maior de idade");\n  } else {\n    document.write("Menor de idade");\n  }\n</script>',
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('===') || s.textContent.includes('==')) {
              return true
            }
          }
          return false
        },
        successMessage: 'Correto! Use === para comparar valores. = é apenas para atribuição.',
        hint: 'Dentro de condições (if), use === para comparar. Um único = é atribuição e sempre retorna verdadeiro.',
      },
      {
        id: 'task-9',
        type: 'drag',
        title: 'Ordene a estrutura de uma função',
        description: 'Arranje as partes de uma função JavaScript na ordem correta:',
        blocks: ['function nome(parâmetros) {', '  // lógica da função', '  return resultado', '}', 'nome(argumentos) // chamada'],
        hint: 'Uma função começa com "function", tem a lógica e um return dentro, fecha com }, e depois é chamada.',
        successMessage: 'Ótimo! Você montou a estrutura completa de uma função JS!',
      },
      {
        id: 'task-10',
        type: 'fill',
        title: 'Operadores lógicos em JS',
        description: 'Complete as condições com os operadores lógicos corretos:',
        code: '// Ambas devem ser verdadeiras:\nif (logado {{blank}} temPermissao) { ... }\n\n// Pelo menos uma deve ser verdadeira:\nif (admin {{blank}} moderador) { ... }\n\n// Inverte o valor booleano:\nif ({{blank}}autenticado) { redirecionar() }',
        blanks: ['&&', '||', '!'],
        hint: 'AND usa &&, OR usa ||, NOT usa ! antes da expressão.',
        successMessage: 'Perfeito! Operadores &&, || e ! dominados!',
      },
      {
        id: 'task-11',
        type: 'quiz',
        question: 'Qual é a diferença entre o loop "for" e o "while"?',
        options: [
          'for é para strings; while é para números',
          'for é usado quando sabe quantas iterações fazer; while é usado quando a condição de parada é dinâmica',
          'while é mais rápido que for',
          'Não há diferença entre os dois',
        ],
        correct: 1,
        explanation: 'for é ideal quando você conhece o número de iterações (ex: percorrer um array de 5 itens). while é ideal quando você não sabe quando vai parar — a condição determina se continua (ex: "enquanto o usuário não acertar").',
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'Operador ternário',
        description: 'Converta o if/else para um operador ternário:',
        code: '// if/else original:\n// if (nota >= 7) { resultado = "Aprovado" } else { resultado = "Reprovado" }\n\n// Versão ternária:\nlet resultado = nota >= 7 {{blank}} "Aprovado" {{blank}} "Reprovado"',
        blanks: ['?', ':'],
        hint: 'O ternário usa ? para o caso true e : para o caso false: condição ? verdadeiro : falso',
        successMessage: 'Ótimo! O ternário é muito usado para expressões simples de if/else.',
      },
      {
        id: 'task-13',
        type: 'code',
        title: 'Loop para exibir lista',
        description: 'Crie um array com 3 frutas. Use um loop <code>for...of</code> para criar um <code>&lt;li&gt;</code> para cada fruta e adicione ao elemento <code>id="lista"</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <ul id="lista"></ul>\n    <script>\n      const frutas = ["Maçã", "Banana", "Laranja"]\n      const lista = document.getElementById("lista")\n      // Use for...of para adicionar os itens\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const lista = doc.getElementById('lista')
          if (!lista) return false
          const items = lista.querySelectorAll('li')
          return items.length >= 3
        },
        successMessage: 'Perfeito! Você gerou HTML dinamicamente com um loop!',
        hint: 'for (const fruta of frutas) { lista.innerHTML += `<li>${fruta}</li>` }',
      },
      {
        id: 'task-14',
        type: 'fill',
        title: 'Estrutura do loop for',
        description: 'Complete o loop for que percorre um array de 5 elementos:',
        code: '{{blank}} (let {{blank}} = 0; i {{blank}} array.length; {{blank}}) {\n  console.log(array[i])\n}',
        blanks: ['for', 'i', '<', 'i++'],
        hint: 'A estrutura do for é: for(inicialização; condição; incremento).',
        successMessage: 'Correto! Você montou a estrutura completa de um loop for.',
      },
      {
        id: 'task-15',
        type: 'bug',
        title: 'Loop infinito',
        description: 'O while abaixo vai rodar para sempre porque o contador nunca é incrementado. Corrija o código!',
        buggyCode: '<script>\n  let i = 0;\n  while (i < 5) {\n    console.log(i);\n    // Falta incrementar i!\n  }\n</script>',
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('i++') || s.textContent.includes('i += 1') || s.textContent.includes('i = i + 1')) {
              return true
            }
          }
          return false
        },
        successMessage: 'Correto! Sem i++, o loop nunca termina. Sempre garanta que a condição do while vai se tornar falsa.',
        hint: 'Adicione i++ dentro do while, após o console.log(i).',
      },
    ],
  },
  {
    id: 'modulo-dom',
    number: '09',
    stageId: 'construtor',
    stage: 'Avançado',
    title: 'JavaScript: DOM e eventos',
    description: 'Aprenda a manipular a página em tempo real com JavaScript — selecione elementos, altere conteúdo e reaja a cliques.',
    color: '#06b6d4',
    context: `## O que é o DOM?

**DOM** significa Document Object Model. Quando o navegador carrega uma página HTML, ele cria uma representação em memória de todos os elementos — essa representação é o DOM.

JavaScript pode ler e modificar o DOM para mudar a página **sem recarregar**.

## Selecionando elementos

\`\`\`js
// Por ID
const titulo = document.getElementById('meu-titulo')

// Por seletor CSS (mais flexível)
const btn = document.querySelector('.meu-botao')
const todos = document.querySelectorAll('p') // NodeList
\`\`\`

## Modificando conteúdo

\`\`\`js
const el = document.getElementById('resultado')

el.textContent = 'Novo texto simples'     // só texto
el.innerHTML = '<strong>Negrito!</strong>' // HTML completo
\`\`\`

Use \`textContent\` para texto simples (mais seguro) e \`innerHTML\` só quando precisar inserir HTML.

## Alterando estilos e classes

\`\`\`js
el.style.color = 'red'           // estilo inline
el.classList.add('ativo')        // adiciona classe
el.classList.remove('ativo')     // remove classe
el.classList.toggle('ativo')     // alterna
\`\`\`

## Eventos

Eventos são ações do usuário que o JavaScript pode escutar:

\`\`\`js
const btn = document.getElementById('btn')

btn.addEventListener('click', function() {
  alert('Você clicou!')
})
\`\`\`

Eventos mais comuns:
| Evento | Quando dispara |
| --- | --- |
| \`click\` | ao clicar |
| \`input\` | ao digitar |
| \`submit\` | ao enviar formulário |
| \`mouseover\` | ao passar o mouse |

## Criando e inserindo elementos

\`\`\`js
const novoItem = document.createElement('li')
novoItem.textContent = 'Novo item'
document.getElementById('lista').appendChild(novoItem)
\`\`\`

## A árvore do DOM

O DOM organiza os elementos HTML em uma estrutura de árvore:

\`\`\`
document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        │   └── h1
        ├── main
        │   ├── p
        │   └── ul
        │       ├── li
        │       └── li
        └── footer
\`\`\`

Cada nó da árvore tem relações familiares:
- **parent** — elemento pai
- **children** — elementos filhos
- **siblings** — elementos irmãos (mesmo nível)

\`\`\`js
const lista = document.getElementById('lista')
lista.parentElement      // elemento pai
lista.children           // HTMLCollection com os filhos
lista.firstElementChild  // primeiro filho
lista.lastElementChild   // último filho
lista.nextElementSibling // próximo irmão
\`\`\`

## Event Bubbling e Delegation

Quando você clica em um elemento, o evento **sobe** (borbulha) pela árvore do DOM:

\`\`\`html
<div id="pai">
  <button id="filho">Clique</button>
</div>
\`\`\`

\`\`\`js
document.getElementById('filho').addEventListener('click', () => {
  console.log('filho clicado')
})
document.getElementById('pai').addEventListener('click', () => {
  console.log('pai também recebe o evento!')
})
// Clicar no botão imprime AMBAS as mensagens
\`\`\`

**Event Delegation** — em vez de adicionar listener em cada filho, adicione no pai:

\`\`\`js
document.getElementById('lista').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.style.textDecoration = 'line-through'
  }
})
// Funciona para LIs adicionados dinamicamente também!
\`\`\`

Essa técnica é muito mais eficiente quando você tem muitos elementos filhos.

## localStorage: persistindo dados no navegador

O \`localStorage\` permite salvar dados no navegador que persistem mesmo após fechar a aba:

\`\`\`js
// Salvar
localStorage.setItem('tema', 'escuro')
localStorage.setItem('usuario', JSON.stringify({ nome: 'Ana', xp: 150 }))

// Ler
const tema = localStorage.getItem('tema')               // 'escuro'
const usuario = JSON.parse(localStorage.getItem('usuario'))  // { nome: 'Ana', xp: 150 }

// Remover
localStorage.removeItem('tema')

// Limpar tudo
localStorage.clear()
\`\`\`

Diferença com \`sessionStorage\`: os dados do \`sessionStorage\` somem quando a aba é fechada.

## O objeto Event

Quando um evento dispara, a função recebe um objeto \`event\` com informações:

\`\`\`js
document.addEventListener('click', function(event) {
  console.log(event.target)        // elemento que foi clicado
  console.log(event.type)          // 'click'
  console.log(event.clientX)       // posição X do mouse
  console.log(event.clientY)       // posição Y do mouse
  event.preventDefault()           // cancela comportamento padrão
  event.stopPropagation()          // para o bubbling
})

document.addEventListener('keydown', function(event) {
  console.log(event.key)           // 'Enter', 'a', 'ArrowLeft', etc.
  console.log(event.ctrlKey)       // true se Ctrl estava pressionado
})
\`\`\`

## Fetch API: buscando dados de servidores

O \`fetch\` permite fazer requisições HTTP para buscar dados de APIs:

\`\`\`js
// Buscar dados de uma API pública
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // { id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(erro => {
    console.error('Erro ao buscar dados:', erro)
  })
\`\`\`

Isso abre um mundo de possibilidades: mostrar previsão do tempo, listar repositórios do GitHub, buscar posts de um blog — tudo em tempo real, sem recarregar a página.`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'O que é o DOM (Document Object Model)?',
        options: [
          'Um banco de dados para guardar HTML',
          'A representação em memória dos elementos da página, manipulável com JavaScript',
          'Uma linguagem de programação para web',
          'Um framework CSS para estilizar páginas',
        ],
        correct: 1,
        explanation: 'O DOM é a estrutura em árvore que o navegador cria ao carregar o HTML. JavaScript acessa e modifica essa estrutura para alterar a página dinamicamente sem recarregá-la.',
      },
      {
        id: 'task-2',
        type: 'code',
        title: 'Selecione e modifique um elemento',
        description: 'Use <code>document.getElementById</code> para pegar o elemento com <code>id="mensagem"</code> e defina seu <code>textContent</code> como <strong>"Olá, DOM!"</strong>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="mensagem">Texto original</p>\n    <script>\n      // Selecione o elemento e mude o textContent\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const el = doc.getElementById('mensagem')
          return el !== null && el.textContent.trim() === 'Olá, DOM!'
        },
        successMessage: 'Perfeito! Você manipulou o DOM pela primeira vez!',
        hint: "document.getElementById('mensagem').textContent = 'Olá, DOM!'",
      },
      {
        id: 'task-3',
        type: 'code',
        title: 'Adicione um evento de clique',
        description: 'Use <code>addEventListener("click", ...)</code> no botão com <code>id="btn"</code> para colocar o texto <strong>"Clicado!"</strong> no parágrafo <code>id="resultado"</code> quando clicar.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <button id="btn">Clique aqui</button>\n    <p id="resultado"></p>\n    <script>\n      // Adicione o evento de clique\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const btn = doc.getElementById('btn')
          const resultado = doc.getElementById('resultado')
          if (!btn || !resultado) return false
          btn.click()
          return resultado.textContent.trim().length > 0
        },
        successMessage: 'Excelente! Seu primeiro event listener funcionando!',
        hint: "document.getElementById('btn').addEventListener('click', function() { document.getElementById('resultado').textContent = 'Clicado!' })",
      },
      {
        id: 'task-4',
        type: 'quiz',
        question: 'Qual método seleciona elementos usando um seletor CSS (como classe ou tag)?',
        options: [
          'document.getElementById()',
          'document.getElement()',
          'document.querySelector()',
          'document.findElement()',
        ],
        correct: 2,
        explanation: 'querySelector() aceita qualquer seletor CSS válido: "#id", ".classe", "p", "div > span" etc. É o mais versátil. querySelectorAll() retorna todos os elementos que casam com o seletor.',
      },
      {
        id: 'task-5',
        type: 'fill',
        title: 'Complete o código de manipulação DOM',
        description: 'Preencha as lacunas para selecionar um input e exibir seu valor:',
        code: 'const campo = document.{{blank}}("#campo")\nconst btn = document.getElementById("btn")\n\nbtn.addEventListener("{{blank}}", function() {\n  const valor = campo.{{blank}}\n  document.getElementById("saida").textContent = valor\n})',
        blanks: ['querySelector', 'click', 'value'],
        hint: 'querySelector usa seletor CSS. O evento é "click". Para ler o que o usuário digitou em um input, use .value',
        successMessage: 'Correto! querySelector, click e .value — trio essencial do DOM!',
      },
      {
        id: 'task-6',
        type: 'code',
        title: 'Adicione uma classe dinamicamente',
        description: 'Ao clicar no botão <code>id="btn"</code>, adicione a classe <code>"ativo"</code> ao elemento <code>id="caixa"</code> usando <code>classList.add()</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .ativo { background: #3b82f6; color: white; padding: 8px; }\n    </style>\n  </head>\n  <body>\n    <div id="caixa">Caixa</div>\n    <button id="btn">Ativar</button>\n    <script>\n      // Adicione a classe "ativo" à caixa ao clicar no botão\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const btn = doc.getElementById('btn')
          const caixa = doc.getElementById('caixa')
          if (!btn || !caixa) return false
          btn.click()
          return caixa.classList.contains('ativo')
        },
        successMessage: 'Ótimo! classList.add() é a forma mais limpa de aplicar estilos dinamicamente.',
        hint: "document.getElementById('btn').addEventListener('click', function() { document.getElementById('caixa').classList.add('ativo') })",
      },
      {
        id: 'task-7',
        type: 'drag',
        title: 'Ordene: criar e inserir elemento no DOM',
        description: 'Qual é a ordem correta para criar um novo item e adicioná-lo a uma lista?',
        blocks: [
          'const lista = document.getElementById("lista")',
          'const item = document.createElement("li")',
          'item.textContent = "Novo item"',
          'lista.appendChild(item)',
        ],
        hint: 'Primeiro selecione o container, depois crie o novo elemento, defina seu conteúdo e por fim insira na página.',
        successMessage: 'Perfeito! Criar → configurar → inserir é a sequência correta.',
      },
      {
        id: 'task-8',
        type: 'bug',
        title: 'Event listener com erro de digitação',
        description: 'O código abaixo não funciona porque o nome do evento está errado. Encontre e corrija!',
        buggyCode: '<button id="btn">Clique</button>\n<p id="msg"></p>\n<script>\n  document.getElementById("btn")\n    .addEventListener("clik", function() {\n      document.getElementById("msg").textContent = "Funcionou!"\n    })\n</script>',
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('"click"') || s.textContent.includes("'click'")) return true
          }
          return false
        },
        successMessage: 'Correto! O evento correto é "click" — com dois c\'s no final.',
        hint: 'O nome do evento de clique é "click". Verifique a ortografia.',
        lines: [
          '<button id="btn">Clique</button>',
          '<p id="msg"></p>',
          '<script>',
          '  document.getElementById("btn")',
          '    .addEventListener("clik", function() {',
          '      document.getElementById("msg").textContent = "Funcionou!"',
          '    })',
          '</script>',
        ],
        bugLine: 4,
        explanation: '"clik" está com erro de digitação. O evento correto é "click" (com ck no final). Nomes de eventos devem ser escritos exatamente como a especificação define.',
      },
      {
        id: 'task-9',
        type: 'fill',
        title: 'classList: add, remove, toggle',
        description: 'Complete o código para manipular classes CSS com JavaScript:',
        code: 'const el = document.getElementById("caixa")\n\nel.classList.{{blank}}("ativo")    // adiciona\nel.classList.{{blank}}("ativo")    // remove\nel.classList.{{blank}}("ativo")    // alterna (add se não tem, remove se tem)',
        blanks: ['add', 'remove', 'toggle'],
        hint: 'add adiciona, remove retira, toggle alterna entre os dois.',
        successMessage: 'Ótimo! classList.add/remove/toggle são os métodos mais usados para CSS dinâmico.',
      },
      {
        id: 'task-10',
        type: 'quiz',
        question: 'Qual a diferença entre textContent e innerHTML?',
        options: [
          'Não há diferença — são sinônimos',
          'textContent insere HTML; innerHTML insere texto simples',
          'textContent insere texto simples (seguro); innerHTML interpreta HTML (mas pode ser perigoso)',
          'textContent funciona só em <p>; innerHTML em qualquer elemento',
        ],
        correct: 2,
        explanation: 'textContent é mais seguro pois trata tudo como texto puro — nada é interpretado como HTML. innerHTML interpreta o conteúdo como HTML (útil para inserir elementos), mas pode causar vulnerabilidades (XSS) se o conteúdo vier de fontes externas.',
      },
      {
        id: 'task-11',
        type: 'code',
        title: 'Toggle de classe com CSS',
        description: 'Crie um <code>&lt;div id="caixa"&gt;</code> e um botão. No CSS, defina <code>.ativo { background-color: green; color: white; }</code>. Ao clicar, use <code>classList.toggle("ativo")</code> para alternar a aparência.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      #caixa { padding: 20px; background: lightgray; }\n      .ativo { background-color: green; color: white; }\n    </style>\n  </head>\n  <body>\n    <div id="caixa">Clique no botão!</div>\n    <button id="btn">Alternar</button>\n    <script>\n      // Use classList.toggle("ativo") ao clicar\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const btn = doc.getElementById('btn')
          const caixa = doc.getElementById('caixa')
          return btn !== null && caixa !== null && doc.querySelector('script') !== null
        },
        successMessage: 'Ótimo! classList.toggle é perfeito para alternar estados visuais!',
        hint: "document.getElementById('btn').addEventListener('click', () => { document.getElementById('caixa').classList.toggle('ativo') })",
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'Criando elementos dinamicamente',
        description: 'Complete o código que cria e adiciona um novo item à lista:',
        code: 'const lista = document.getElementById(\'lista\')\n\n// Cria um novo elemento li:\nconst item = document.{{blank}}(\'li\')\n\n// Define o texto do item:\nitem.{{blank}} = \'Novo item\'\n\n// Adiciona à lista:\nlista.{{blank}}(item)',
        blanks: ['createElement', 'textContent', 'appendChild'],
        hint: 'Para criar: createElement. Para texto: textContent. Para inserir: appendChild.',
        successMessage: 'Perfeito! Você sabe criar e inserir elementos no DOM!',
      },
      {
        id: 'task-13',
        type: 'code',
        title: 'Evento de teclado',
        description: 'Crie um <code>&lt;input id="campo"&gt;</code> e um <code>&lt;p id="espelho"&gt;</code>. Use o evento <code>"input"</code> para que o parágrafo mostre em tempo real o que está sendo digitado.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <body>\n    <input id="campo" placeholder="Digite algo..." />\n    <p id="espelho">Você está digitando: </p>\n    <script>\n      // Use addEventListener com o evento "input"\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const campo = doc.getElementById('campo')
          const espelho = doc.getElementById('espelho')
          return campo !== null && espelho !== null && doc.querySelector('script') !== null
        },
        successMessage: 'Excelente! O evento "input" é disparado a cada tecla digitada!',
        hint: "document.getElementById('campo').addEventListener('input', function() { document.getElementById('espelho').textContent = 'Você digitou: ' + this.value })",
      },
      {
        id: 'task-14',
        type: 'quiz',
        question: 'O que faz document.querySelectorAll("p")?',
        options: [
          'Seleciona apenas o primeiro <p> da página',
          'Seleciona todos os elementos <p> da página e retorna uma NodeList',
          'Cria um novo elemento <p>',
          'Remove todos os <p> da página',
        ],
        correct: 1,
        explanation: 'querySelectorAll retorna uma NodeList (lista) com TODOS os elementos que correspondem ao seletor. Diferente de querySelector, que retorna apenas o primeiro. Para percorrer a lista: forEach ou for...of.',
      },
      {
        id: 'task-15',
        type: 'fill',
        title: 'Alterar estilos via JavaScript',
        description: 'Complete o código para alterar estilos de um elemento via JavaScript:',
        code: 'const caixa = document.getElementById(\'caixa\')\n\n// Muda a cor do fundo:\ncaixa.{{blank}}.backgroundColor = \'blue\'\n\n// Muda o tamanho da fonte:\ncaixa.style.{{blank}} = \'24px\'\n\n// Adiciona uma classe:\ncaixa.{{blank}}.add(\'ativo\')',
        blanks: ['style', 'fontSize', 'classList'],
        hint: 'Para estilos inline: .style.propriedade. Para classes: .classList.add/remove/toggle.',
        successMessage: 'Ótimo! Você sabe manipular estilos e classes via JavaScript!',
      },
    ],
  },
  {
    id: 'modulo-8',
    number: '10',
    stageId: 'construtor',
    stage: 'Super Avançado',
    title: 'Seu primeiro projeto completo',
    description: 'Una HTML, CSS e JavaScript para criar uma página interativa do zero.',
    color: '#06b6d4',
    context: `## Unindo as três tecnologias

Você chegou ao módulo final! Agora é hora de usar tudo que aprendeu junto:

- **HTML** → estrutura da página
- **CSS** → visual e layout
- **JavaScript** → interatividade

## Estrutura de um projeto completo

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Projeto</title>
    <style>
      /* CSS aqui */
    </style>
  </head>
  <body>

    <!-- Conteúdo HTML aqui -->

    <script>
      // JavaScript aqui
    </script>
  </body>
</html>
\`\`\`

## Eventos: reagindo ao usuário

O JavaScript pode ouvir cliques, digitação e outros eventos:

\`\`\`html
<button id="btn">Clique aqui</button>
<p id="msg"></p>

<script>
  document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('msg').textContent = 'Você clicou!'
  })
</script>
\`\`\`

## Lendo o valor de um input

\`\`\`html
<input id="campo" type="text" placeholder="Digite algo" />
<button id="btn">Enviar</button>
<p id="resultado"></p>

<script>
  document.getElementById('btn').addEventListener('click', function() {
    const valor = document.getElementById('campo').value
    document.getElementById('resultado').textContent = 'Você digitou: ' + valor
  })
</script>
\`\`\`

## Boas práticas

1. Organize o HTML com tags semânticas (\`header\`, \`main\`, \`footer\`)
2. Separe o CSS em blocos por componente
3. Use nomes descritivos para IDs e classes
4. Teste o resultado no navegador frequentemente

## Você está pronto!

Com HTML, CSS e JavaScript você já consegue criar:
- Páginas pessoais e portfólios
- Calculadoras e ferramentas simples
- Formulários com validação
- Listas interativas (to-do lists)

O próximo passo é praticar cada vez mais. Todo grande desenvolvedor começou exatamente onde você está agora.

## Manipulando listas com JavaScript

\`\`\`html
<ul id="lista"></ul>
<input id="item" placeholder="Novo item" />
<button id="adicionar">Adicionar</button>

<script>
  document.getElementById('adicionar').addEventListener('click', function() {
    const texto = document.getElementById('item').value.trim()
    if (texto === '') return
    const li = document.createElement('li')
    li.textContent = texto
    document.getElementById('lista').appendChild(li)
    document.getElementById('item').value = ''
  })
</script>
\`\`\`

## Validação de formulários com JS

\`\`\`html
<form id="meuForm">
  <input id="email" type="email" placeholder="Email" />
  <button type="submit">Enviar</button>
  <p id="erro"></p>
</form>

<script>
  document.getElementById('meuForm').addEventListener('submit', function(e) {
    e.preventDefault() // evita recarregar a página
    const email = document.getElementById('email').value
    if (!email.includes('@')) {
      document.getElementById('erro').textContent = 'Email inválido!'
    } else {
      document.getElementById('erro').textContent = 'Enviado com sucesso!'
    }
  })
</script>
\`\`\`

## Tags semânticas no projeto

Projetos reais usam a estrutura semântica:

\`\`\`html
<body>
  <header>
    <h1>Meu App</h1>
    <nav><!-- links --></nav>
  </header>
  <main>
    <section id="app"><!-- conteúdo principal --></section>
  </main>
  <footer>
    <p>© 2025 Meu App</p>
  </footer>
</body>
\`\`\`

## Próximos passos após este curso

- **Praticar**: construa projetos reais (calculadora, lista de tarefas, quiz)
- **GitHub**: publique seus projetos para criar um portfólio
- **React / Vue**: frameworks JavaScript para apps maiores
- **Node.js**: JavaScript no servidor (back-end)
- **APIs**: aprenda a buscar dados de serviços externos

## Boas práticas de código

Escrever código que funciona é apenas metade do trabalho. O código precisa ser **legível e manutenível**:

**1. Nomes descritivos**
\`\`\`js
// ❌ Ruim
let x = 86400
function f(n) { return n * x }

// ✅ Bom
const SEGUNDOS_POR_DIA = 86400
function calcularSegundosTotais(numeroDias) {
  return numeroDias * SEGUNDOS_POR_DIA
}
\`\`\`

**2. Funções pequenas com uma única responsabilidade**
\`\`\`js
// ❌ Função que faz tudo
function processarPedido(pedido) {
  // valida, calcula desconto, envia email, salva no banco...
  // 100 linhas de código
}

// ✅ Funções separadas e compostas
function validarPedido(pedido) { ... }
function calcularTotal(pedido) { ... }
function enviarConfirmacao(pedido) { ... }
\`\`\`

**3. Evite comentários óbvios**
\`\`\`js
// ❌ Desnecessário
let i = 0 // inicializa i como zero

// ✅ Comente o "porquê", não o "o quê"
// Começa em 1 para pular o cabeçalho da lista
for (let i = 1; i < lista.length; i++) { ... }
\`\`\`

## Como publicar seu projeto gratuitamente

Depois de criar seu projeto, você pode publicá-lo online de graça usando o **GitHub Pages**:

1. Crie uma conta no [github.com](https://github.com)
2. Crie um repositório com o nome do projeto
3. Faça upload dos seus arquivos HTML, CSS e JS
4. Vá em Settings → Pages → Branch: main → Save
5. Seu site estará em: \`https://seunome.github.io/nome-do-projeto\`

**Outras opções gratuitas:**
- **Vercel** — deploy automático a partir do GitHub
- **Netlify** — drag & drop dos arquivos, site no ar em segundos
- **CodePen** — ideal para projetos pequenos e experimentos

## Como continuar aprendendo

Você terminou o curso básico — isso é uma conquista real. Mas a jornada de um desenvolvedor nunca termina. Aqui está um roteiro realista do que aprender a seguir:

**Imediatamente (próximas semanas):**
- Construa pelo menos 3 projetos pessoais do zero (calculadora, lista de tarefas, portfólio)
- Publique tudo no GitHub
- Leia código de outros projetos open source

**Em seguida:**
- **Git avançado** — branches, merge, pull requests
- **JavaScript avançado** — Promises, async/await, módulos ES6
- **CSS avançado** — Grid completo, animações, metodologia BEM
- **React** — a biblioteca JS mais usada no mercado para interfaces

**Depois:**
- **Node.js** — JavaScript no back-end
- **Banco de dados** — SQL (PostgreSQL) e/ou NoSQL (MongoDB)
- **APIs REST** — como o front-end conversa com o back-end

**Sempre:**
- Leia a documentação oficial (MDN Web Docs é o melhor recurso para HTML, CSS e JS)
- Participe de comunidades (Discord, Reddit, LinkedIn)
- Construa, construa, construa — não há atalho para a experiência prática

> "Todo especialista foi um dia iniciante que não desistiu."`,
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        question: 'Qual método JavaScript é usado para reagir a um clique em um botão?',
        options: [
          'onClick()',
          'addEventListener("click", ...)',
          'onPress()',
          'listenClick()',
        ],
        correct: 1,
        explanation: 'addEventListener é o método padrão para escutar eventos. O primeiro argumento é o tipo do evento ("click", "input", "submit") e o segundo é a função que será executada.',
      },
      {
        id: 'task-2',
        type: 'quiz',
        question: 'Como ler o texto que o usuário digitou em um <input id="campo">?',
        options: [
          'document.getElementById("campo").textContent',
          'document.getElementById("campo").value',
          'document.getElementById("campo").text',
          'document.getInput("campo")',
        ],
        correct: 1,
        explanation: 'A propriedade .value retorna o texto digitado em inputs. Já .textContent e .innerHTML são usados para elementos como p, h1, div — que contêm texto filho, não valor de formulário.',
      },
      {
        id: 'task-3',
        type: 'code',
        title: 'Botão que muda o texto',
        description: 'Crie um <code>&lt;button&gt;</code> e um <code>&lt;p id="msg"&gt;</code>. Ao clicar no botão, o parágrafo deve mostrar qualquer texto usando <code>addEventListener</code>.',
        starterCode: '<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      button { padding: 8px 16px; cursor: pointer; }\n    </style>\n  </head>\n  <body>\n    <button id="btn">Clique aqui</button>\n    <p id="msg"></p>\n    <script>\n      // Adicione o evento de clique ao botão\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const btn = doc.getElementById('btn')
          const msg = doc.getElementById('msg')
          return btn !== null && msg !== null && doc.querySelector('script') !== null
        },
        successMessage: 'Ótimo! Evento de clique implementado com sucesso!',
        hint: "document.getElementById('btn').addEventListener('click', function() { document.getElementById('msg').textContent = 'Clicado!' })",
      },
      {
        id: 'task-4',
        type: 'code',
        title: 'Mini projeto: saudação personalizada',
        description: 'Crie uma página com: um <code>&lt;input&gt;</code> para o nome, um <code>&lt;button&gt;</code> "Saudar" e um <code>&lt;p id="resultado"&gt;</code>. Ao clicar, exiba <strong>"Olá, [nome digitado]!"</strong> no parágrafo. Aplique pelo menos 2 estilos CSS.',
        starterCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <style>\n      /* Adicione pelo menos 2 estilos */\n    </style>\n  </head>\n  <body>\n    <!-- Crie o input, botão e parágrafo resultado -->\n\n    <script>\n      // Adicione o evento de clique\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const input = doc.querySelector('input')
          const btn = doc.querySelector('button')
          const resultado = doc.getElementById('resultado')
          const styleTag = doc.querySelector('style')
          const hasStyles = styleTag && styleTag.textContent.trim().length > 10
          return input !== null && btn !== null && resultado !== null && hasStyles
        },
        successMessage: 'Parabéns! Você concluiu seu primeiro projeto completo com HTML, CSS e JavaScript!',
        hint: 'Crie: <input id="nome"> <button id="btn">Saudar</button> <p id="resultado"></p> e no JS: btn.addEventListener("click", () => { resultado.textContent = `Olá, ${nome.value}!` })',
      },
      {
        id: 'task-5',
        type: 'fill',
        title: 'Complete o código de eventos',
        description: 'Preencha as lacunas para fazer um botão reagir ao clique e ler o valor de um input:',
        code: 'const btn = document.{{blank}}(\'btn\')\nconst campo = document.getElementById(\'campo\')\n\nbtn.{{blank}}(\'click\', function() {\n  const valor = campo.{{blank}}\n  document.getElementById(\'resultado\').textContent = valor\n})',
        blanks: ['getElementById', 'addEventListener', 'value'],
        hint: 'Para selecionar um elemento: getElementById. Para ouvir eventos: addEventListener. Para ler o input: .value',
        successMessage: 'Excelente! Você sabe conectar eventos e ler valores de inputs.',
      },
      {
        id: 'task-6',
        type: 'type',
        question: 'Qual propriedade JavaScript lê o texto que o usuário digitou em um <input>?',
        answer: ['.value', 'value'],
        placeholder: 'propriedade',
        hint: 'É diferente de .textContent. Os inputs têm uma propriedade específica para o valor digitado.',
        explanation: '.value é a propriedade que retorna o conteúdo digitado em inputs e textareas. Para outros elementos (p, h1, div), usa-se .textContent ou .innerHTML.',
      },
      {
        id: 'task-7',
        type: 'bug',
        title: 'addEventListener com typo',
        description: 'O código abaixo tem um erro de digitação no método <code>addEventListener</code>. Encontre e corrija!',
        buggyCode: '<button id="btn">Clique aqui</button>\n<p id="msg"></p>\n<script>\n  const btn = document.getElementById("btn");\n  btn.addEventListner("click", function() {\n    document.getElementById("msg").textContent = "Clicado!";\n  });\n</script>',
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('addEventListener')) {
              return true
            }
          }
          return false
        },
        successMessage: 'Correto! O método correto é addEventListener (com "Event" completo).',
        hint: 'O método está escrito como "addEventListner" — falta a letra "e" em "Listener". O correto é addEventListener.',
      },
      {
        id: 'task-8',
        type: 'code',
        title: 'Lista de tarefas interativa',
        description: 'Crie uma lista de tarefas: um <code>&lt;input&gt;</code>, um <code>&lt;button&gt;</code> "Adicionar" e uma <code>&lt;ul id="lista"&gt;</code>. Ao clicar, adicione um <code>&lt;li&gt;</code> com o texto do input.',
        starterCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <style>\n      body { font-family: sans-serif; padding: 20px; }\n      li { margin: 4px 0; }\n    </style>\n  </head>\n  <body>\n    <h2>Minhas Tarefas</h2>\n    <input id="tarefa" placeholder="Nova tarefa..." />\n    <button id="adicionar">Adicionar</button>\n    <ul id="lista"></ul>\n    <script>\n      // Adicione o evento e crie os itens\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const input = doc.getElementById('tarefa')
          const btn = doc.getElementById('adicionar')
          const lista = doc.getElementById('lista')
          return input !== null && btn !== null && lista !== null && doc.querySelector('script') !== null
        },
        successMessage: 'Ótimo! Você criou uma lista de tarefas dinâmica!',
        hint: "document.getElementById('adicionar').addEventListener('click', () => { const t = document.getElementById('tarefa').value.trim(); if(t){const li = document.createElement('li'); li.textContent = t; document.getElementById('lista').appendChild(li); document.getElementById('tarefa').value='';} })",
      },
      {
        id: 'task-9',
        type: 'fill',
        title: 'Prevenindo o comportamento padrão',
        description: 'Em formulários, o submit recarrega a página por padrão. Complete o código para evitar isso:',
        code: 'document.getElementById(\'form\').addEventListener(\'{{blank}}\', function({{blank}}) {\n  {{blank}}.preventDefault()  // evita recarregar\n  // processar os dados...\n})',
        blanks: ['submit', 'e', 'e'],
        hint: 'O evento do formulário é "submit". O parâmetro da função é o objeto evento (e) e preventDefault() cancela o comportamento padrão.',
        successMessage: 'Correto! e.preventDefault() é essencial para formulários controlados por JavaScript.',
      },
      {
        id: 'task-10',
        type: 'quiz',
        question: 'Qual é a boa prática para onde colocar a tag <script> em um projeto?',
        options: [
          'Dentro do <head>, sempre',
          'Dentro do <body>, no topo, antes de qualquer elemento',
          'No final do <body>, antes do </body>',
          'Fora do <html>',
        ],
        correct: 2,
        explanation: 'O <script> deve ir no final do <body> para que: (1) o HTML seja carregado antes do JS executar, (2) o usuário veja o conteúdo mais rápido, (3) o JS possa acessar os elementos já existentes no DOM.',
      },
      {
        id: 'task-11',
        type: 'code',
        title: 'Calculadora simples',
        description: 'Crie dois inputs de número, um botão "Somar" e um <code>&lt;p id="resultado"&gt;</code>. Ao clicar, some os dois números e exiba o resultado. Use <code>Number()</code> para converter os valores.',
        starterCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <style>\n      body { font-family: sans-serif; padding: 20px; }\n      input { width: 80px; padding: 8px; margin: 4px; }\n      button { padding: 8px 16px; cursor: pointer; }\n    </style>\n  </head>\n  <body>\n    <h2>Calculadora</h2>\n    <input id="num1" type="number" placeholder="0" />\n    <span>+</span>\n    <input id="num2" type="number" placeholder="0" />\n    <button id="somar">Somar</button>\n    <p id="resultado">Resultado: </p>\n    <script>\n      // Some os dois inputs e exiba o resultado\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const n1 = doc.getElementById('num1')
          const n2 = doc.getElementById('num2')
          const btn = doc.getElementById('somar')
          const res = doc.getElementById('resultado')
          return n1 !== null && n2 !== null && btn !== null && res !== null && doc.querySelector('script') !== null
        },
        successMessage: 'Ótimo! Você criou uma calculadora funcional com HTML, CSS e JavaScript!',
        hint: "document.getElementById('somar').addEventListener('click', () => { const soma = Number(document.getElementById('num1').value) + Number(document.getElementById('num2').value); document.getElementById('resultado').textContent = 'Resultado: ' + soma })",
      },
      {
        id: 'task-12',
        type: 'fill',
        title: 'Estrutura completa de um projeto',
        description: 'Complete a estrutura semântica de um projeto web completo:',
        code: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="{{blank}}" content="width=device-width, initial-scale=1.0" />\n    <title>Meu Projeto</title>\n    <{{blank}} rel="stylesheet" href="styles.css" />\n  </head>\n  <body>\n    <{{blank}}><!-- cabeçalho --></header>\n    <{{blank}}><!-- conteúdo principal --></main>\n    <footer><!-- rodapé --></{{blank}}>\n    <{{blank}} src="script.js"></script>\n  </body>\n</html>',
        blanks: ['viewport', 'link', 'header', 'main', 'footer', 'script'],
        hint: 'Meta viewport, link para CSS, tags semânticas header/main/footer e script no final.',
        successMessage: 'Perfeito! Você montou o esqueleto profissional de um projeto web!',
      },
      {
        id: 'task-13',
        type: 'quiz',
        question: 'Qual é o próximo passo recomendado após aprender HTML, CSS e JavaScript básico?',
        options: [
          'Aprender Assembly para entender hardware',
          'Construir projetos reais e publicar no GitHub para criar portfólio',
          'Aprender PHP antes de qualquer framework',
          'Estudar matemática avançada antes de continuar',
        ],
        correct: 1,
        explanation: 'O melhor próximo passo é construir projetos reais (lista de tarefas, calculadora, portfólio, quiz) e publicá-los no GitHub. Isso consolida o aprendizado, cria um portfólio visível e prepara para frameworks como React.',
      },
      {
        id: 'task-14',
        type: 'drag',
        title: 'Ordem de construção de um projeto web',
        description: 'Ordene as etapas corretas para construir uma página web do zero:',
        blocks: [
          '1. Planejar a estrutura e o conteúdo',
          '2. Escrever o HTML (estrutura)',
          '3. Adicionar CSS (visual e layout)',
          '4. Adicionar JavaScript (interatividade)',
          '5. Testar em diferentes tamanhos de tela',
          '6. Publicar no GitHub Pages',
        ],
        hint: 'Planejamento → estrutura (HTML) → visual (CSS) → comportamento (JS) → testes → publicação.',
        successMessage: 'Excelente! Você conhece o workflow completo de um desenvolvedor web!',
      },
      {
        id: 'task-15',
        type: 'code',
        title: 'Projeto final: contador interativo',
        description: 'Crie um contador com: um <code>&lt;h2 id="contador"&gt;0&lt;/h2&gt;</code>, um botão "+ 1" e um botão "Zerar". Cada clique em "+ 1" aumenta o número; "Zerar" volta a 0. Estilize com CSS.',
        starterCode: '<!DOCTYPE html>\n<html lang="pt-BR">\n  <head>\n    <meta charset="UTF-8" />\n    <style>\n      body { font-family: sans-serif; text-align: center; padding: 40px; }\n      h2 { font-size: 80px; margin: 20px; }\n      button {\n        padding: 12px 24px;\n        margin: 8px;\n        font-size: 18px;\n        cursor: pointer;\n        border: none;\n        border-radius: 8px;\n      }\n      #incrementar { background: #3b82f6; color: white; }\n      #zerar { background: #ef4444; color: white; }\n    </style>\n  </head>\n  <body>\n    <h1>Contador</h1>\n    <h2 id="contador">0</h2>\n    <button id="incrementar">+ 1</button>\n    <button id="zerar">Zerar</button>\n    <script>\n      // Implemente o contador\n    </script>\n  </body>\n</html>\n',
        validate: (doc) => {
          const contador = doc.getElementById('contador')
          const inc = doc.getElementById('incrementar')
          const zer = doc.getElementById('zerar')
          return contador !== null && inc !== null && zer !== null && doc.querySelector('script') !== null
        },
        successMessage: 'Parabéns! Você completou o curso com um projeto interativo completo! Você é um desenvolvedor web!',
        hint: 'let n = 0; document.getElementById("incrementar").addEventListener("click", () => { n++; document.getElementById("contador").textContent = n }); document.getElementById("zerar").addEventListener("click", () => { n = 0; document.getElementById("contador").textContent = 0 })',
      },
    ],
  },

  // ─── MÓDULO 11: CSS Flexbox ───────────────────────────────────────────────
  {
    id: 'modulo-flexbox',
    number: '11',
    stageId: 'estudante',
    stage: 'CSS Avançado',
    title: 'CSS: Flexbox',
    description: 'Domine o sistema de layout mais usado na web moderna com Flexbox.',
    color: '#a855f7',
    context: `## O que é Flexbox?

**Flexbox** (Flexible Box Layout) é um sistema de layout CSS que facilita alinhar e distribuir elementos dentro de um contêiner, mesmo quando seus tamanhos são desconhecidos ou dinâmicos.

Antes do Flexbox, centralizar elementos verticalmente era complicado. Hoje é simples:

\`\`\`css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

## Contêiner e itens

Flexbox divide os elementos em dois grupos:

- **Flex container** — o elemento pai com \`display: flex\`
- **Flex items** — os filhos diretos do container

\`\`\`html
<div class="container">  <!-- flex container -->
  <div>Item 1</div>      <!-- flex item -->
  <div>Item 2</div>      <!-- flex item -->
  <div>Item 3</div>      <!-- flex item -->
</div>
\`\`\`

## Eixo principal e cruzado

O Flexbox trabalha com dois eixos:

- **Eixo principal (main axis)** — definido por \`flex-direction\` (padrão: horizontal)
- **Eixo cruzado (cross axis)** — perpendicular ao eixo principal

## flex-direction

Define a direção dos itens:

\`\`\`css
flex-direction: row;            /* → padrão: da esquerda para direita */
flex-direction: row-reverse;    /* ← da direita para esquerda */
flex-direction: column;         /* ↓ de cima para baixo */
flex-direction: column-reverse; /* ↑ de baixo para cima */
\`\`\`

## justify-content

Alinha os itens no **eixo principal**:

\`\`\`css
justify-content: flex-start;    /* início (padrão) */
justify-content: flex-end;      /* final */
justify-content: center;        /* centro */
justify-content: space-between; /* espaço entre os itens */
justify-content: space-around;  /* espaço ao redor dos itens */
justify-content: space-evenly;  /* espaço igual entre todos */
\`\`\`

## align-items

Alinha os itens no **eixo cruzado**:

\`\`\`css
align-items: stretch;     /* estica (padrão) */
align-items: flex-start;  /* topo */
align-items: flex-end;    /* baixo */
align-items: center;      /* centro vertical */
align-items: baseline;    /* alinha pelo texto */
\`\`\`

## flex-wrap

Controla se os itens quebram linha:

\`\`\`css
flex-wrap: nowrap;   /* tudo em uma linha (padrão) */
flex-wrap: wrap;     /* quebra para a próxima linha */
flex-wrap: wrap-reverse; /* quebra para cima */
\`\`\`

## gap

Espaçamento entre os itens:

\`\`\`css
.container {
  display: flex;
  gap: 16px;        /* espaço entre todos os itens */
  gap: 16px 8px;    /* row-gap column-gap */
}
\`\`\`

## flex (nos itens)

Controla como cada item cresce ou encolhe:

\`\`\`css
.item { flex: 1; }    /* cresce para preencher o espaço disponível */
.item { flex: 2; }    /* cresce o dobro dos itens flex: 1 */
\`\`\`

## Exemplo prático: navbar

\`\`\`css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}
\`\`\`

\`\`\`html
<nav>
  <span>Logo</span>
  <ul>
    <li>Início</li>
    <li>Sobre</li>
    <li>Contato</li>
  </ul>
</nav>
\`\`\`

## Centralizar um elemento

O truque mais usado no CSS moderno:

\`\`\`css
.centralizador {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
\`\`\`
`,
    tasks: [
      {
        id: 'flex-quiz-1',
        type: 'quiz',
        title: 'O que é Flexbox?',
        question: 'Qual propriedade CSS transforma um elemento em flex container?',
        options: ['flex: 1', 'display: flex', 'position: flex', 'layout: flex'],
        correct: 1,
        xp: 10,
        successMessage: 'Correto! display: flex é o ponto de partida do Flexbox.',
      },
      {
        id: 'flex-quiz-2',
        type: 'quiz',
        title: 'justify-content',
        question: 'Qual valor de justify-content distribui os itens com espaço igual entre eles (mas não nas bordas)?',
        options: ['space-evenly', 'space-around', 'space-between', 'center'],
        correct: 2,
        xp: 10,
        successMessage: 'space-between coloca espaço entre os itens, sem margens nas extremidades.',
      },
      {
        id: 'flex-fill-1',
        type: 'fill',
        title: 'Complete o CSS de centralização',
        text: 'Para centralizar um elemento vertical e horizontalmente:\n.box { display: ___; justify-content: ___; align-items: ___; }',
        blanks: ['flex', 'center', 'center'],
        xp: 10,
        successMessage: 'Perfeito! Essa combinação é a mais usada no dia a dia.',
      },
      {
        id: 'flex-bug-1',
        type: 'bug',
        title: 'Encontre o erro no Flexbox',
        description: 'O programador queria deixar os itens em coluna, mas algo está errado:',
        lines: [
          '.container {',
          '  display: flex;',
          '  flex-direction: coluna;',
          '  gap: 8px;',
          '}',
        ],
        bugLine: 2,
        explanation: 'O valor correto é "column" (em inglês), não "coluna".',
        xp: 20,
        successMessage: 'Ótimo! Propriedades CSS sempre usam inglês.',
      },
      {
        id: 'flex-drag-1',
        type: 'drag',
        title: 'Ordene: criar uma navbar com Flexbox',
        description: 'Coloque as propriedades na ordem correta para criar uma navbar:',
        blocks: [
          'display: flex;',
          'justify-content: space-between;',
          'align-items: center;',
          'padding: 16px;',
        ],
        correctOrder: [0, 1, 2, 3],
        xp: 20,
        successMessage: 'Navbar flexível criada com sucesso!',
      },
      {
        id: 'flex-code-1',
        type: 'code',
        title: 'Crie um layout com Flexbox',
        description: 'Crie 3 cards lado a lado usando Flexbox, com gap de 16px e centralizados.',
        starterCode: `<style>
  .container {
    /* seu CSS aqui */
  }
  .card {
    background: #6366f1;
    color: white;
    padding: 24px;
    border-radius: 8px;
    flex: 1;
  }
</style>
<div class="container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>`,
        hint: '.container { display: flex; gap: 16px; justify-content: center; }',
        successMessage: 'Layout Flexbox criado com sucesso!',
        xp: 15,
      },
    ],
  },

  // ─── MÓDULO 12: CSS Grid ──────────────────────────────────────────────────
  {
    id: 'modulo-grid',
    number: '12',
    stageId: 'estudante',
    stage: 'CSS Avançado',
    title: 'CSS: Grid',
    description: 'Crie layouts complexos em duas dimensões com CSS Grid.',
    color: '#ec4899',
    context: `## O que é CSS Grid?

**CSS Grid** é um sistema de layout bidimensional — ele trabalha com linhas **e** colunas ao mesmo tempo. É perfeito para criar layouts de páginas inteiras.

Enquanto Flexbox é ótimo para layouts unidimensionais (uma linha ou coluna), Grid brilha quando você precisa de layouts mais complexos.

## Ativando o Grid

\`\`\`css
.container {
  display: grid;
}
\`\`\`

## grid-template-columns

Define as colunas do grid:

\`\`\`css
/* 3 colunas iguais de 200px */
grid-template-columns: 200px 200px 200px;

/* usando repeat() */
grid-template-columns: repeat(3, 200px);

/* colunas flexíveis com fr (fraction) */
grid-template-columns: repeat(3, 1fr);

/* mix: coluna fixa + flexível */
grid-template-columns: 250px 1fr;
\`\`\`

## grid-template-rows

Define as linhas do grid:

\`\`\`css
grid-template-rows: 80px 1fr 60px; /* header, conteúdo, footer */
\`\`\`

## gap

Espaço entre células:

\`\`\`css
gap: 16px;           /* row e column gap iguais */
gap: 16px 24px;      /* row-gap column-gap */
column-gap: 24px;    /* só colunas */
row-gap: 16px;       /* só linhas */
\`\`\`

## A unidade fr (fraction)

\`fr\` divide o espaço disponível proporcionalmente:

\`\`\`css
grid-template-columns: 1fr 2fr 1fr;
/* coluna do meio é o dobro das laterais */
\`\`\`

## Posicionando itens com grid-column e grid-row

\`\`\`css
.header {
  grid-column: 1 / 4;  /* da coluna 1 até a 4 (ocupa 3 colunas) */
}

.sidebar {
  grid-row: 2 / 4;     /* da linha 2 até a 4 (ocupa 2 linhas) */
}
\`\`\`

Atalho: \`span\`

\`\`\`css
.header {
  grid-column: span 3;  /* ocupa 3 colunas */
}
\`\`\`

## grid-template-areas

A forma mais visual de definir um layout:

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 60px 1fr 40px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
\`\`\`

## place-items

Alinha todos os itens dentro de suas células:

\`\`\`css
.container {
  display: grid;
  place-items: center; /* centraliza vertical e horizontalmente */
}
\`\`\`

## Exemplo: galeria de fotos

\`\`\`css
.galeria {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
\`\`\`

## Grid vs Flexbox

| Situação | Use |
|---|---|
| Layout de página inteira | Grid |
| Barra de navegação | Flexbox |
| Cards em linha | Flexbox ou Grid |
| Dashboard com áreas | Grid |
| Centralizar um item | Flexbox ou Grid |
`,
    tasks: [
      {
        id: 'grid-quiz-1',
        type: 'quiz',
        title: 'Grid vs Flexbox',
        question: 'Qual a principal diferença entre Grid e Flexbox?',
        options: [
          'Grid é mais antigo',
          'Flexbox funciona apenas em mobile',
          'Grid trabalha em duas dimensões (linhas e colunas)',
          'Grid só funciona com imagens',
        ],
        correct: 2,
        xp: 10,
        successMessage: 'Grid é bidimensional (linhas + colunas), Flexbox é unidimensional.',
      },
      {
        id: 'grid-quiz-2',
        type: 'quiz',
        title: 'A unidade fr',
        question: 'O que significa a unidade "fr" no CSS Grid?',
        options: ['frame', 'fraction (fração do espaço disponível)', 'frequency', 'flexible row'],
        correct: 1,
        xp: 10,
        successMessage: 'fr divide o espaço restante proporcionalmente entre as colunas/linhas.',
      },
      {
        id: 'grid-fill-1',
        type: 'fill',
        title: 'Complete o grid de 3 colunas',
        text: 'Para criar um grid com 3 colunas iguais:\n.container { display: ___; grid-template-columns: repeat(___, 1fr); gap: 16px; }',
        blanks: ['grid', '3'],
        xp: 10,
        successMessage: 'Perfeito! repeat(3, 1fr) cria 3 colunas de tamanho igual.',
      },
      {
        id: 'grid-bug-1',
        type: 'bug',
        title: 'Erro no Grid',
        description: 'O programador quer que o header ocupe 3 colunas, mas está errado:',
        lines: [
          '.header {',
          '  grid-column: span 3;',
          '  background: navy;',
          '  grid-area: cabecalho;',
          '}',
          '.container {',
          '  display: grid;',
          '  grid-template-columns: repeat(2, 1fr);',
          '}',
        ],
        bugLine: 7,
        explanation: 'O container tem apenas 2 colunas, mas o header usa span 3. Deve ser repeat(3, 1fr).',
        xp: 20,
        successMessage: 'O número de colunas no container e nos itens devem ser compatíveis.',
      },
      {
        id: 'grid-code-1',
        type: 'code',
        title: 'Crie uma galeria com Grid',
        description: 'Crie uma galeria 3x2 com CSS Grid. Use repeat() e gap.',
        starterCode: `<style>
  .galeria {
    /* seu grid aqui */
  }
  .foto {
    background: #ec4899;
    color: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    font-weight: bold;
  }
</style>
<div class="galeria">
  <div class="foto">1</div>
  <div class="foto">2</div>
  <div class="foto">3</div>
  <div class="foto">4</div>
  <div class="foto">5</div>
  <div class="foto">6</div>
</div>`,
        hint: '.galeria { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }',
        successMessage: 'Galeria CSS Grid criada!',
        xp: 15,
      },
      {
        id: 'grid-drag-1',
        type: 'drag',
        title: 'Ordene: layout com grid-template-areas',
        description: 'Ordene as propriedades para criar um layout com áreas nomeadas:',
        blocks: [
          'display: grid;',
          'grid-template-areas: "header" "main" "footer";',
          'grid-template-rows: 60px 1fr 40px;',
          'min-height: 100vh;',
        ],
        correctOrder: [0, 1, 2, 3],
        xp: 20,
        successMessage: 'Layout com grid-template-areas montado corretamente!',
      },
    ],
  },

  // ─── MÓDULO 13: CSS Responsividade ───────────────────────────────────────
  {
    id: 'modulo-responsivo',
    number: '13',
    stageId: 'estudante',
    stage: 'CSS Avançado',
    title: 'CSS: Responsividade',
    description: 'Crie sites que funcionam perfeitamente em celular, tablet e desktop.',
    color: '#f59e0b',
    context: `## O que é design responsivo?

Um site **responsivo** adapta seu layout e conteúdo para funcionar bem em qualquer tamanho de tela — do celular ao monitor widescreen.

Hoje, mais de 60% do tráfego web vem de dispositivos móveis. Um site não responsivo perde usuários.

## A meta tag viewport

O primeiro passo é incluir essa tag no \`<head>\`:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

Sem ela, o celular "finge" ter a largura de um desktop.

## Media Queries

Media queries aplicam CSS apenas quando certas condições são atendidas:

\`\`\`css
/* CSS padrão (todos os tamanhos) */
.container {
  display: flex;
  flex-direction: row;
}

/* Quando a tela tiver até 768px */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
\`\`\`

## Breakpoints comuns

| Dispositivo | Breakpoint |
|---|---|
| Celular pequeno | max-width: 480px |
| Celular | max-width: 768px |
| Tablet | max-width: 1024px |
| Desktop | min-width: 1025px |

## Mobile-first

A abordagem **mobile-first** escreve o CSS base para mobile e adiciona media queries para telas maiores:

\`\`\`css
/* base: mobile */
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

/* tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
\`\`\`

## Unidades relativas

| Unidade | Relativa a |
|---|---|
| \`%\` | elemento pai |
| \`em\` | font-size do elemento pai |
| \`rem\` | font-size do elemento raiz (html) |
| \`vw\` | largura do viewport (1vw = 1%) |
| \`vh\` | altura do viewport |

\`\`\`css
.hero {
  height: 100vh;    /* tela inteira */
  font-size: 1rem;  /* 16px (padrão) */
  padding: 5%;      /* 5% da largura do pai */
}
\`\`\`

## Imagens responsivas

\`\`\`css
img {
  max-width: 100%;  /* nunca ultrapassa o container */
  height: auto;     /* mantém proporção */
}
\`\`\`

## Texto responsivo com clamp()

\`\`\`css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* mínimo: 1.5rem | ideal: 5vw | máximo: 3rem */
}
\`\`\`

## Navegação responsiva

Padrão comum: menu horizontal no desktop, hambúrguer no mobile:

\`\`\`css
.nav-links {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* esconde no mobile */
  }
}
\`\`\`
`,
    tasks: [
      {
        id: 'resp-quiz-1',
        type: 'quiz',
        title: 'Meta viewport',
        question: 'Para que serve a meta tag viewport?',
        options: [
          'Define a cor de fundo da página',
          'Garante que o celular exiba a página com a largura correta',
          'Adiciona animações automáticas',
          'Conecta CSS e HTML',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'Sem o viewport, o celular renderiza a página como desktop e a encolhe.',
      },
      {
        id: 'resp-quiz-2',
        type: 'quiz',
        title: 'Mobile-first',
        question: 'Na abordagem mobile-first, qual media query é usada para adicionar estilos para telas maiores?',
        options: ['max-width', 'min-width', 'screen-size', 'device-width'],
        correct: 1,
        xp: 10,
        successMessage: 'min-width adiciona estilos para telas a partir de um tamanho mínimo.',
      },
      {
        id: 'resp-fill-1',
        type: 'fill',
        title: 'Complete a media query',
        text: 'Para aplicar CSS apenas em telas com até 768px:\n@___ (max-width: ___px) {\n  .menu { display: none; }\n}',
        blanks: ['media', '768'],
        xp: 10,
        successMessage: 'Media queries são a base da responsividade!',
      },
      {
        id: 'resp-bug-1',
        type: 'bug',
        title: 'Erro na responsividade',
        description: 'O site não aparece bem no celular. Encontre o problema:',
        lines: [
          '<!DOCTYPE html>',
          '<html lang="pt-BR">',
          '<head>',
          '  <meta charset="UTF-8">',
          '  <title>Site</title>',
          '</head>',
        ],
        bugLine: 4,
        explanation: 'Falta a meta tag viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        xp: 20,
        successMessage: 'Sempre inclua a meta viewport em seus projetos!',
      },
      {
        id: 'resp-drag-1',
        type: 'drag',
        title: 'Ordene: grid responsivo mobile-first',
        description: 'Ordene corretamente o CSS mobile-first:',
        blocks: [
          '.grid { grid-template-columns: 1fr; }',
          '@media (min-width: 768px) {',
          '  .grid { grid-template-columns: repeat(2, 1fr); }',
          '}',
        ],
        correctOrder: [0, 1, 2, 3],
        xp: 20,
        successMessage: 'Grid responsivo mobile-first montado corretamente!',
      },
      {
        id: 'resp-code-1',
        type: 'code',
        title: 'Layout responsivo',
        description: 'Crie 4 cards que ficam em coluna no mobile e em 2 colunas em telas maiores que 600px.',
        starterCode: `<style>
  .grid {
    display: grid;
    /* mobile: 1 coluna */
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }
  /* adicione media query aqui */
  .card {
    background: #f59e0b;
    color: white;
    padding: 32px;
    border-radius: 8px;
    text-align: center;
  }
</style>
<div class="grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>`,
        hint: '@media (min-width: 600px) { .grid { grid-template-columns: repeat(2, 1fr); } }',
        successMessage: 'Layout responsivo funcionando!',
        xp: 15,
      },
    ],
  },

  // ─── MÓDULO 14: JS Arrays e Objetos ──────────────────────────────────────
  {
    id: 'modulo-arrays',
    number: '14',
    stageId: 'praticante',
    stage: 'JavaScript Avançado',
    title: 'JavaScript: arrays e objetos',
    description: 'Aprenda a trabalhar com listas de dados e estruturas complexas em JavaScript.',
    color: '#f43f5e',
    context: `## Arrays

Um **array** é uma lista ordenada de valores. Cada valor tem um índice numérico começando em 0.

\`\`\`javascript
const frutas = ['maçã', 'banana', 'laranja']

console.log(frutas[0])  // 'maçã'
console.log(frutas[1])  // 'banana'
console.log(frutas[2])  // 'laranja'
console.log(frutas.length)  // 3
\`\`\`

## Métodos de array

### Adicionar e remover

\`\`\`javascript
frutas.push('uva')      // adiciona no final
frutas.pop()            // remove do final
frutas.unshift('kiwi')  // adiciona no início
frutas.shift()          // remove do início
\`\`\`

### slice e splice

\`\`\`javascript
const nums = [1, 2, 3, 4, 5]

// slice: copia uma parte (não modifica o original)
nums.slice(1, 3)  // [2, 3]

// splice: remove e/ou insere (modifica o original)
nums.splice(1, 2)  // remove 2 elementos a partir do índice 1
// nums agora é [1, 4, 5]
\`\`\`

### Iterar com forEach

\`\`\`javascript
frutas.forEach(function(fruta) {
  console.log(fruta)
})

// com arrow function
frutas.forEach(fruta => console.log(fruta))
\`\`\`

### map — transformar cada elemento

\`\`\`javascript
const numeros = [1, 2, 3, 4]
const dobrados = numeros.map(n => n * 2)
console.log(dobrados)  // [2, 4, 6, 8]
\`\`\`

### filter — filtrar elementos

\`\`\`javascript
const numeros = [1, 2, 3, 4, 5, 6]
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares)  // [2, 4, 6]
\`\`\`

### find — encontrar um elemento

\`\`\`javascript
const usuarios = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 17 },
]
const adulto = usuarios.find(u => u.idade >= 18)
console.log(adulto.nome)  // 'Ana'
\`\`\`

### includes — verificar se existe

\`\`\`javascript
const cores = ['vermelho', 'azul', 'verde']
console.log(cores.includes('azul'))   // true
console.log(cores.includes('rosa'))   // false
\`\`\`

## Objetos

Um **objeto** armazena dados em pares de chave-valor:

\`\`\`javascript
const pessoa = {
  nome: 'Maria',
  idade: 28,
  cidade: 'São Paulo',
}

// acessar propriedades
console.log(pessoa.nome)         // 'Maria'
console.log(pessoa['idade'])     // 28

// modificar
pessoa.idade = 29

// adicionar nova propriedade
pessoa.email = 'maria@email.com'

// remover propriedade
delete pessoa.cidade
\`\`\`

## Métodos de objetos

\`\`\`javascript
const produto = { nome: 'Notebook', preco: 3500, estoque: 10 }

Object.keys(produto)    // ['nome', 'preco', 'estoque']
Object.values(produto)  // ['Notebook', 3500, 10]
Object.entries(produto) // [['nome','Notebook'], ['preco',3500], ...]
\`\`\`

## Array de objetos

O padrão mais comum em aplicações reais:

\`\`\`javascript
const alunos = [
  { nome: 'João', nota: 8.5 },
  { nome: 'Ana',  nota: 9.2 },
  { nome: 'Bia',  nota: 7.0 },
]

// filtrar aprovados (nota >= 7)
const aprovados = alunos.filter(a => a.nota >= 7)

// pegar só os nomes
const nomes = alunos.map(a => a.nome)
\`\`\`
`,
    tasks: [
      {
        id: 'arr-quiz-1',
        type: 'quiz',
        title: 'Índices de arrays',
        question: 'Qual é o índice do primeiro elemento de um array em JavaScript?',
        options: ['1', '0', '-1', 'primeiro'],
        correct: 1,
        xp: 10,
        successMessage: 'Arrays começam sempre no índice 0 em JavaScript!',
      },
      {
        id: 'arr-quiz-2',
        type: 'quiz',
        title: 'map vs filter',
        question: 'Qual método cria um novo array transformando cada elemento?',
        options: ['filter()', 'find()', 'map()', 'includes()'],
        correct: 2,
        xp: 10,
        successMessage: 'map() transforma, filter() seleciona, find() encontra o primeiro.',
      },
      {
        id: 'arr-fill-1',
        type: 'fill',
        title: 'Complete com métodos de array',
        text: 'Para filtrar apenas números maiores que 10:\nconst grandes = nums.___(n => n > 10)\n\nPara dobrar cada número:\nconst dobrados = nums.___(n => n * 2)',
        blanks: ['filter', 'map'],
        xp: 10,
        successMessage: 'filter() e map() são dois dos métodos mais usados!',
      },
      {
        id: 'arr-bug-1',
        type: 'bug',
        title: 'Erro no array',
        description: 'O código deveria imprimir "banana", mas não funciona:',
        lines: [
          'const frutas = ["maçã", "banana", "laranja"]',
          'console.log(frutas[2])',
        ],
        bugLine: 1,
        explanation: '"banana" está no índice 1, não 2. Arrays começam em 0.',
        xp: 20,
        successMessage: 'Lembre-se: o índice começa em 0!',
      },
      {
        id: 'arr-code-1',
        type: 'code',
        title: 'Filtre e exiba os aprovados',
        description: 'Filtre os alunos com nota >= 7 e exiba seus nomes na tela.',
        starterCode: `<script>
  const alunos = [
    { nome: 'João', nota: 8.5 },
    { nome: 'Maria', nota: 5.0 },
    { nome: 'Ana', nota: 9.2 },
    { nome: 'Pedro', nota: 6.5 },
    { nome: 'Bia', nota: 7.8 },
  ]

  // filtre os aprovados (nota >= 7) e exiba os nomes
  const aprovados = alunos.filter(a => a.nota >= 7)
  aprovados.forEach(a => {
    document.write('<p>' + a.nome + ': ' + a.nota + '</p>')
  })
</script>`,
        hint: 'Use .filter(a => a.nota >= 7) e depois .forEach() para mostrar os nomes.',
        successMessage: 'Você filtrou dados reais com JavaScript!',
        xp: 15,
      },
      {
        id: 'arr-type-1',
        type: 'type',
        title: 'Digite: acessar propriedade de objeto',
        textToType: 'const pessoa = { nome: "Ana", idade: 25 }\nconsole.log(pessoa.nome)',
        xp: 15,
        successMessage: 'A notação de ponto é a forma mais comum de acessar objetos.',
      },
    ],
  },

  // ─── MÓDULO 15: JS Loops ─────────────────────────────────────────────────
  {
    id: 'modulo-loops',
    number: '15',
    stageId: 'praticante',
    stage: 'JavaScript Avançado',
    title: 'JavaScript: loops',
    description: 'Domine a repetição de código com for, while, for...of e mais.',
    color: '#0ea5e9',
    context: `## O que são loops?

**Loops** (laços) repetem um bloco de código várias vezes. São essenciais para processar listas, contar, buscar dados e automatizar tarefas repetitivas.

## Loop for

O mais clássico — ideal quando você sabe quantas vezes vai repetir:

\`\`\`javascript
for (let i = 0; i < 5; i++) {
  console.log('Iteração: ' + i)
}
// 0, 1, 2, 3, 4
\`\`\`

**Estrutura:** \`for (inicialização; condição; incremento)\`

### Percorrendo um array com for

\`\`\`javascript
const frutas = ['maçã', 'banana', 'laranja']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
}
\`\`\`

## Loop while

Repete enquanto a condição for verdadeira — ideal quando não sabe quantas vezes vai repetir:

\`\`\`javascript
let contador = 0

while (contador < 5) {
  console.log(contador)
  contador++
}
\`\`\`

⚠️ **Cuidado:** se a condição nunca for falsa, o loop é infinito e trava o programa.

## Loop do...while

Executa pelo menos uma vez, depois verifica a condição:

\`\`\`javascript
let n = 0
do {
  console.log(n)
  n++
} while (n < 3)
// executa mesmo se n já for >= 3
\`\`\`

## for...of

Percorre elementos de um array diretamente (mais legível):

\`\`\`javascript
const cores = ['vermelho', 'verde', 'azul']

for (const cor of cores) {
  console.log(cor)
}
\`\`\`

## for...in

Percorre as chaves de um objeto:

\`\`\`javascript
const pessoa = { nome: 'Ana', idade: 25, cidade: 'SP' }

for (const chave in pessoa) {
  console.log(chave + ': ' + pessoa[chave])
}
// nome: Ana
// idade: 25
// cidade: SP
\`\`\`

## break e continue

\`\`\`javascript
// break: para o loop imediatamente
for (let i = 0; i < 10; i++) {
  if (i === 5) break
  console.log(i)  // 0, 1, 2, 3, 4
}

// continue: pula para a próxima iteração
for (let i = 0; i < 5; i++) {
  if (i === 2) continue
  console.log(i)  // 0, 1, 3, 4
}
\`\`\`

## Exemplo prático: somar array

\`\`\`javascript
const numeros = [10, 20, 30, 40, 50]
let soma = 0

for (const num of numeros) {
  soma += num
}

console.log('Soma:', soma)  // 150
\`\`\`

## Loops e o DOM

\`\`\`javascript
const itens = ['HTML', 'CSS', 'JavaScript']
const lista = document.getElementById('lista')

for (const item of itens) {
  const li = document.createElement('li')
  li.textContent = item
  lista.appendChild(li)
}
\`\`\`
`,
    tasks: [
      {
        id: 'loop-quiz-1',
        type: 'quiz',
        title: 'Estrutura do for',
        question: 'Qual a ordem correta das partes do loop for?',
        options: [
          'condição; inicialização; incremento',
          'incremento; condição; inicialização',
          'inicialização; condição; incremento',
          'inicialização; incremento; condição',
        ],
        correct: 2,
        xp: 10,
        successMessage: 'for (inicialização; condição; incremento) — sempre nessa ordem!',
      },
      {
        id: 'loop-quiz-2',
        type: 'quiz',
        title: 'break vs continue',
        question: 'Qual palavra-chave pula para a próxima iteração sem parar o loop?',
        options: ['break', 'stop', 'continue', 'skip'],
        correct: 2,
        xp: 10,
        successMessage: 'continue pula a iteração atual, break termina o loop inteiro.',
      },
      {
        id: 'loop-fill-1',
        type: 'fill',
        title: 'Complete o loop for...of',
        text: 'Para percorrer cada fruta de um array:\n___ (const fruta ___ frutas) {\n  console.log(fruta)\n}',
        blanks: ['for', 'of'],
        xp: 10,
        successMessage: 'for...of é a forma mais limpa de percorrer arrays!',
      },
      {
        id: 'loop-bug-1',
        type: 'bug',
        title: 'Loop infinito',
        description: 'Este while vai travar o programa. Encontre o erro:',
        lines: [
          'let i = 0',
          'while (i < 5) {',
          '  console.log(i)',
          '  i--',
          '}',
        ],
        bugLine: 3,
        explanation: 'i-- diminui o valor, então i nunca chega a 5. Deve ser i++ para incrementar.',
        xp: 20,
        successMessage: 'Loops infinitos travam o browser. Sempre verifique o incremento!',
      },
      {
        id: 'loop-drag-1',
        type: 'drag',
        title: 'Ordene: somar elementos de um array',
        description: 'Ordene o código para somar todos os números de um array:',
        blocks: [
          'const nums = [1, 2, 3, 4, 5]',
          'let soma = 0',
          'for (const n of nums) {',
          '  soma += n',
          '}',
          'console.log(soma)',
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        xp: 20,
        successMessage: 'Soma com for...of dominada!',
      },
      {
        id: 'loop-code-1',
        type: 'code',
        title: 'Tabuada com loop',
        description: 'Use um loop for para exibir a tabuada do 7 (de 1 a 10) na página.',
        starterCode: `<h2>Tabuada do 7</h2>
<div id="resultado"></div>

<script>
  const div = document.getElementById('resultado')
  // seu loop aqui
</script>`,
        hint: 'for (let i = 1; i <= 10; i++) { div.innerHTML += `<p>7 x ${i} = ${7 * i}</p>` }',
        successMessage: 'Loop + DOM funcionando juntos!',
        xp: 15,
      },
    ],
  },

  // ─── MÓDULO 16: JS Funções Avançadas ─────────────────────────────────────
  {
    id: 'modulo-funcoes-avancadas',
    number: '16',
    stageId: 'praticante',
    stage: 'JavaScript Avançado',
    title: 'JavaScript: funções avançadas',
    description: 'Arrow functions, callbacks, escopo e funções de ordem superior.',
    color: '#8b5cf6',
    context: `## Arrow Functions

Arrow functions são uma sintaxe mais curta para escrever funções:

\`\`\`javascript
// função tradicional
function somar(a, b) {
  return a + b
}

// arrow function equivalente
const somar = (a, b) => a + b

// com um parâmetro (parênteses opcionais)
const dobrar = n => n * 2

// sem parâmetros
const saudacao = () => 'Olá!'
\`\`\`

## Retorno implícito

Se o corpo tiver apenas uma expressão, o \`return\` é automático:

\`\`\`javascript
const quadrado = n => n * n         // retorna n*n automaticamente
const maior = (a, b) => a > b ? a : b
\`\`\`

Para retornar um objeto literalmente, use parênteses:

\`\`\`javascript
const criarPessoa = (nome, idade) => ({ nome, idade })
\`\`\`

## Callbacks

Um **callback** é uma função passada como argumento para outra função:

\`\`\`javascript
function executar(callback) {
  console.log('Antes')
  callback()
  console.log('Depois')
}

executar(() => console.log('Sou o callback!'))
// Antes
// Sou o callback!
// Depois
\`\`\`

Você já usou callbacks com forEach, map e filter:

\`\`\`javascript
[1, 2, 3].forEach(n => console.log(n))
//                ↑ isso é um callback
\`\`\`

## Escopo

O **escopo** define onde uma variável pode ser acessada:

\`\`\`javascript
let global = 'global'  // acessível em qualquer lugar

function minhaFuncao() {
  let local = 'local'    // só existe dentro desta função
  console.log(global)    // ✅ pode acessar
}

console.log(local)       // ❌ ReferenceError!
\`\`\`

### var vs let vs const

\`\`\`javascript
// var: escopo de função (evite usar)
var x = 1

// let: escopo de bloco (prefira usar)
let y = 2

// const: escopo de bloco, não pode ser reatribuído
const z = 3
\`\`\`

## Parâmetros padrão

\`\`\`javascript
function cumprimentar(nome = 'visitante') {
  return 'Olá, ' + nome + '!'
}

cumprimentar('Ana')   // 'Olá, Ana!'
cumprimentar()        // 'Olá, visitante!'
\`\`\`

## Rest parameters (...)

Recebe um número variável de argumentos:

\`\`\`javascript
function somar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

somar(1, 2, 3, 4, 5)  // 15
\`\`\`

## Spread operator (...)

Espalha um array em elementos individuais:

\`\`\`javascript
const a = [1, 2, 3]
const b = [4, 5, 6]
const todos = [...a, ...b]  // [1, 2, 3, 4, 5, 6]

Math.max(...a)  // 3
\`\`\`

## Funções de ordem superior (Higher-Order)

Funções que recebem ou retornam outras funções:

\`\`\`javascript
// retorna uma função
function multiplicador(fator) {
  return n => n * fator
}

const dobrar = multiplicador(2)
const triplicar = multiplicador(3)

dobrar(5)     // 10
triplicar(5)  // 15
\`\`\`
`,
    tasks: [
      {
        id: 'func-quiz-1',
        type: 'quiz',
        title: 'Arrow function',
        question: 'Qual é a arrow function equivalente a: function dobrar(n) { return n * 2 }',
        options: [
          'const dobrar = n => { n * 2 }',
          'const dobrar = n => n * 2',
          'const dobrar = (n) { return n * 2 }',
          'arrow dobrar = n => n * 2',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'Arrow function com retorno implícito: n => n * 2',
      },
      {
        id: 'func-quiz-2',
        type: 'quiz',
        title: 'Callbacks',
        question: 'O que é um callback?',
        options: [
          'Um tipo de variável',
          'Uma função passada como argumento para outra função',
          'Um loop especial',
          'Um método de array exclusivo',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'Callbacks são fundamentais em JavaScript — usados em eventos, timers e muito mais.',
      },
      {
        id: 'func-fill-1',
        type: 'fill',
        title: 'Complete a arrow function',
        text: 'Transforme em arrow function:\nfunction quadrado(n) { return n * n }\n\nconst quadrado = ___ => ___ * ___',
        blanks: ['n', 'n', 'n'],
        xp: 10,
        successMessage: 'Arrow function com parâmetro único e retorno implícito!',
      },
      {
        id: 'func-bug-1',
        type: 'bug',
        title: 'Erro de escopo',
        description: 'O código abaixo tem um erro de escopo. Encontre-o:',
        lines: [
          'function calcular() {',
          '  let resultado = 42',
          '}',
          'calcular()',
          'console.log(resultado)',
        ],
        bugLine: 4,
        explanation: '"resultado" é uma variável local — só existe dentro da função. Para usá-la fora, declare-a fora ou use return.',
        xp: 20,
        successMessage: 'Variáveis locais não existem fora do bloco onde foram declaradas.',
      },
      {
        id: 'func-type-1',
        type: 'type',
        title: 'Digite: função com parâmetro padrão',
        textToType: 'const saudar = (nome = "visitante") => `Olá, ${nome}!`',
        xp: 15,
        successMessage: 'Parâmetros padrão evitam erros quando o argumento não é passado!',
      },
      {
        id: 'func-code-1',
        type: 'code',
        title: 'Calculadora funcional',
        description: 'Crie funções de somar, subtrair, multiplicar e dividir e mostre os resultados.',
        starterCode: `<h2>Calculadora</h2>
<div id="resultado"></div>
<script>
  const somar       = (a, b) => a + b
  const subtrair    = (a, b) => a - b
  const multiplicar = (a, b) => a * b
  const dividir     = (a, b) => b !== 0 ? a / b : 'Erro: divisão por zero'

  const div = document.getElementById('resultado')
  div.innerHTML = \`
    <p>10 + 5 = \${somar(10, 5)}</p>
    <p>10 - 5 = \${subtrair(10, 5)}</p>
    <p>10 × 5 = \${multiplicar(10, 5)}</p>
    <p>10 ÷ 5 = \${dividir(10, 5)}</p>
    <p>10 ÷ 0 = \${dividir(10, 0)}</p>
  \`
</script>`,
        hint: 'Arrow functions com retorno implícito são perfeitas para operações matemáticas simples.',
        successMessage: 'Calculadora com arrow functions funcionando!',
        xp: 15,
      },
    ],
  },

  // ─── MÓDULO 17: JS Fetch e APIs ───────────────────────────────────────────
  {
    id: 'modulo-fetch',
    number: '17',
    stageId: 'praticante',
    stage: 'JavaScript Avançado',
    title: 'JavaScript: fetch e APIs',
    description: 'Aprenda a buscar dados externos com fetch, Promises e async/await.',
    color: '#06b6d4',
    context: `## O que é uma API?

**API** (Application Programming Interface) é uma forma de um sistema disponibilizar dados ou funcionalidades para outros programas.

Exemplo: a API do GitHub permite buscar dados de usuários:
\`https://api.github.com/users/torvalds\`

Abra esse link no navegador e veja os dados em formato **JSON**.

## O que é JSON?

**JSON** (JavaScript Object Notation) é o formato padrão para trocar dados na web:

\`\`\`json
{
  "nome": "Linus Torvalds",
  "linguagem": "C",
  "seguidores": 180000
}
\`\`\`

JSON é basicamente um objeto JavaScript em formato de texto.

## fetch()

A função \`fetch()\` faz requisições HTTP e retorna uma **Promise**:

\`\`\`javascript
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())  // converte para objeto JS
  .then(dados => console.log(dados))  // usa os dados
  .catch(erro => console.error(erro)) // trata erros
\`\`\`

## O que são Promises?

Uma **Promise** representa uma operação assíncrona que pode:
- ✅ **Resolver** (ter sucesso) → \`.then()\`
- ❌ **Rejeitar** (falhar) → \`.catch()\`

\`\`\`javascript
const promessa = new Promise((resolve, reject) => {
  // operação assíncrona
  if (sucesso) resolve('funcionou!')
  else reject('deu erro')
})
\`\`\`

## async/await

Uma forma mais legível de trabalhar com Promises:

\`\`\`javascript
async function buscarDados() {
  try {
    const resposta = await fetch('https://api.exemplo.com/dados')
    const dados = await resposta.json()
    console.log(dados)
  } catch (erro) {
    console.error('Erro:', erro)
  }
}

buscarDados()
\`\`\`

- \`async\` marca a função como assíncrona
- \`await\` pausa a execução até a Promise resolver
- \`try/catch\` captura erros

## Exemplo real: buscar usuário do GitHub

\`\`\`javascript
async function buscarUsuario(nome) {
  const resposta = await fetch(\`https://api.github.com/users/\${nome}\`)
  const usuario = await resposta.json()

  document.getElementById('nome').textContent = usuario.name
  document.getElementById('bio').textContent = usuario.bio
  document.getElementById('repos').textContent = usuario.public_repos
}

buscarUsuario('torvalds')
\`\`\`

## Status HTTP

A resposta HTTP sempre tem um código de status:

| Código | Significado |
|---|---|
| 200 | OK (sucesso) |
| 201 | Created (criado) |
| 400 | Bad Request (requisição inválida) |
| 401 | Unauthorized (não autenticado) |
| 404 | Not Found (não encontrado) |
| 500 | Internal Server Error (erro no servidor) |

\`\`\`javascript
const resposta = await fetch(url)

if (!resposta.ok) {
  throw new Error('Erro: ' + resposta.status)
}
\`\`\`

## Métodos HTTP

| Método | Uso |
|---|---|
| GET | Buscar dados |
| POST | Enviar/criar dados |
| PUT | Atualizar dados |
| DELETE | Deletar dados |
`,
    tasks: [
      {
        id: 'fetch-quiz-1',
        type: 'quiz',
        title: 'O que é JSON?',
        question: 'Para que serve o método response.json() no fetch?',
        options: [
          'Cria um arquivo JSON',
          'Converte a resposta HTTP em um objeto JavaScript',
          'Envia dados em formato JSON',
          'Verifica se a resposta é válida',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'response.json() lê o corpo da resposta e converte de texto JSON para objeto JS.',
      },
      {
        id: 'fetch-quiz-2',
        type: 'quiz',
        title: 'async/await',
        question: 'O que acontece quando usamos await antes de uma Promise?',
        options: [
          'Cancela a Promise',
          'Executa a Promise duas vezes',
          'Pausa a função até a Promise resolver',
          'Converte a Promise em callback',
        ],
        correct: 2,
        xp: 10,
        successMessage: 'await "espera" a Promise finalizar antes de continuar a execução.',
      },
      {
        id: 'fetch-fill-1',
        type: 'fill',
        title: 'Complete o async/await',
        text: '___ function buscarDados() {\n  const resposta = ___ fetch(url)\n  const dados = ___ resposta.json()\n  return dados\n}',
        blanks: ['async', 'await', 'await'],
        xp: 10,
        successMessage: 'async marca a função, await espera cada Promise.',
      },
      {
        id: 'fetch-bug-1',
        type: 'bug',
        title: 'Erro no fetch',
        description: 'O código deveria buscar dados mas não funciona corretamente:',
        lines: [
          'async function buscar() {',
          '  const resposta = await fetch("https://api.exemplo.com")',
          '  const dados = resposta.json()',
          '  console.log(dados)',
          '}',
        ],
        bugLine: 2,
        explanation: 'Falta o await antes de resposta.json(). Sem ele, dados será uma Promise não resolvida.',
        xp: 20,
        successMessage: 'Todo await é necessário — não esqueça de "esperar" o json()!',
      },
      {
        id: 'fetch-drag-1',
        type: 'drag',
        title: 'Ordene: função async completa',
        description: 'Ordene o código de uma função que busca e exibe dados:',
        blocks: [
          'async function buscar() {',
          '  try {',
          '    const res = await fetch(url)',
          '    const dados = await res.json()',
          '    console.log(dados)',
          '  } catch (e) { console.error(e) }',
          '}',
        ],
        correctOrder: [0, 1, 2, 3, 4, 5, 6],
        xp: 20,
        successMessage: 'Estrutura async/await com try/catch dominada!',
      },
    ],
  },

  // ─── MÓDULO 18: Projeto Calculadora ──────────────────────────────────────
  {
    id: 'modulo-projeto-calc',
    number: '18',
    stageId: 'construtor',
    stage: 'Projetos',
    title: 'Projeto: Calculadora',
    description: 'Construa uma calculadora funcional com HTML, CSS e JavaScript.',
    color: '#10b981',
    context: `## O que vamos construir?

Uma **calculadora** completa com:
- Display mostrando o número atual e a operação
- Botões para dígitos (0-9), operações (+, -, ×, ÷) e especiais (C, =)
- Lógica em JavaScript puro
- Design limpo com CSS Grid

## Estrutura HTML

\`\`\`html
<div class="calculadora">
  <div class="display">
    <div class="display__operacao">3 +</div>
    <div class="display__valor">4</div>
  </div>
  <div class="teclado">
    <button class="btn-especial">C</button>
    <button class="btn-especial">+/-</button>
    <button class="btn-especial">%</button>
    <button class="btn-operacao">÷</button>
    <!-- ... mais botões ... -->
  </div>
</div>
\`\`\`

## Layout com CSS Grid

O teclado da calculadora é perfeito para Grid:

\`\`\`css
.teclado {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

/* botão zero ocupa 2 colunas */
.btn-zero {
  grid-column: span 2;
}
\`\`\`

## Lógica JavaScript

O estado da calculadora precisa de 3 informações:

\`\`\`javascript
let valorAtual = '0'       // o que está no display
let valorAnterior = ''     // o número antes da operação
let operacao = null        // +, -, *, /
\`\`\`

### Adicionar dígito

\`\`\`javascript
function adicionarDigito(digito) {
  if (valorAtual === '0' || resultado) {
    valorAtual = digito
    resultado = false
  } else {
    valorAtual += digito
  }
  atualizar()
}
\`\`\`

### Selecionar operação

\`\`\`javascript
function selecionarOperacao(op) {
  valorAnterior = valorAtual
  operacao = op
  valorAtual = '0'
  atualizar()
}
\`\`\`

### Calcular resultado

\`\`\`javascript
function calcular() {
  const a = parseFloat(valorAnterior)
  const b = parseFloat(valorAtual)

  switch (operacao) {
    case '+': valorAtual = String(a + b); break
    case '-': valorAtual = String(a - b); break
    case '*': valorAtual = String(a * b); break
    case '/': valorAtual = b !== 0 ? String(a / b) : 'Erro'; break
  }

  operacao = null
  valorAnterior = ''
  atualizar()
}
\`\`\`

## Boas práticas

1. Separe a **lógica** da **interface** — funções JS não devem misturar cálculo com DOM
2. Valide entradas (divisão por zero, ponto decimal duplo)
3. Use \`parseFloat()\` para converter strings em números
4. Mostre feedback visual ao pressionar botões

## Design da calculadora

Cores inspiradas na calculadora do iPhone:
- Fundo: \`#1c1c1e\` (cinza escuro)
- Números: \`#333333\` (cinza médio)
- Operações: \`#ff9f0a\` (laranja)
- Especiais: \`#a5a5a5\` (cinza claro)
- Texto: \`white\`
`,
    tasks: [
      {
        id: 'calc-quiz-1',
        type: 'quiz',
        title: 'parseFloat()',
        question: 'Por que usamos parseFloat() na calculadora?',
        options: [
          'Para formatar o número com casas decimais',
          'Para converter string em número decimal',
          'Para arredondar o resultado',
          'Para verificar se é um número',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'Inputs e DOM trabalham com strings. parseFloat() converte para número.',
      },
      {
        id: 'calc-quiz-2',
        type: 'quiz',
        title: 'switch statement',
        question: 'Para que serve o switch usado na função calcular()?',
        options: [
          'Criar condições independentes para cada operação matemática',
          'Alternar entre modo claro e escuro',
          'Mudar o tipo de variável',
          'Iterar sobre os botões',
        ],
        correct: 0,
        xp: 10,
        successMessage: 'switch é perfeito quando você tem vários casos para um mesmo valor!',
      },
      {
        id: 'calc-fill-1',
        type: 'fill',
        title: 'Complete a lógica de cálculo',
        text: 'Para somar dois valores do display:\nconst a = ___(valorAnterior)\nconst b = ___(valorAtual)\nresultado = ___(a + b)',
        blanks: ['parseFloat', 'parseFloat', 'String'],
        xp: 10,
        successMessage: 'parseFloat para ler, String para exibir!',
      },
      {
        id: 'calc-bug-1',
        type: 'bug',
        title: 'Erro na calculadora',
        description: 'A calculadora está dando erro na divisão. Encontre o problema:',
        lines: [
          'case "/":',
          '  valorAtual = String(a / b)',
          '  break',
        ],
        bugLine: 1,
        explanation: 'Falta verificar se b é zero antes de dividir. Divisão por zero resulta em Infinity.',
        xp: 20,
        successMessage: 'Sempre valide a divisão por zero!',
      },
      {
        id: 'calc-code-1',
        type: 'code',
        title: 'Construa a calculadora',
        description: 'Crie uma calculadora funcional com os 4 botões de operação e o botão de igual.',
        starterCode: `<style>
  body { display: flex; justify-content: center; padding: 24px; background: #000; }
  .calc { background: #1c1c1e; border-radius: 20px; padding: 16px; width: 280px; }
  .display { text-align: right; padding: 12px 16px; margin-bottom: 12px; }
  .display__valor { font-size: 2.5rem; color: white; font-weight: 300; }
  .teclado { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
  button { padding: 18px; border: none; border-radius: 50%; font-size: 1.1rem;
    cursor: pointer; font-weight: 500; }
  .esp { background: #a5a5a5; color: black; }
  .op  { background: #ff9f0a; color: white; }
  .num { background: #333; color: white; }
  .zero { grid-column: span 2; border-radius: 30px; text-align: left; padding-left: 24px; }
</style>
<div class="calc">
  <div class="display">
    <div class="display__valor" id="display">0</div>
  </div>
  <div class="teclado">
    <button class="esp" onclick="limpar()">C</button>
    <button class="esp">+/-</button>
    <button class="esp">%</button>
    <button class="op"  onclick="op('/')">÷</button>
    <button class="num" onclick="dig('7')">7</button>
    <button class="num" onclick="dig('8')">8</button>
    <button class="num" onclick="dig('9')">9</button>
    <button class="op"  onclick="op('*')">×</button>
    <button class="num" onclick="dig('4')">4</button>
    <button class="num" onclick="dig('5')">5</button>
    <button class="num" onclick="dig('6')">6</button>
    <button class="op"  onclick="op('-')">−</button>
    <button class="num" onclick="dig('1')">1</button>
    <button class="num" onclick="dig('2')">2</button>
    <button class="num" onclick="dig('3')">3</button>
    <button class="op"  onclick="op('+')">+</button>
    <button class="num zero" onclick="dig('0')">0</button>
    <button class="num" onclick="dig('.')">.</button>
    <button class="op"  onclick="calcular()">=</button>
  </div>
</div>
<script>
  let atual = '0', anterior = '', operacao = null, novo = true
  const display = document.getElementById('display')

  function dig(d) {
    if (novo || atual === '0') { atual = d; novo = false }
    else if (d === '.' && atual.includes('.')) return
    else atual += d
    display.textContent = atual
  }
  function op(o) { anterior = atual; operacao = o; novo = true }
  function limpar() { atual = '0'; anterior = ''; operacao = null; display.textContent = '0' }
  function calcular() {
    if (!operacao) return
    const a = parseFloat(anterior), b = parseFloat(atual)
    let res
    if (operacao === '+') res = a + b
    else if (operacao === '-') res = a - b
    else if (operacao === '*') res = a * b
    else res = b !== 0 ? a / b : 'Erro'
    atual = String(parseFloat(res.toFixed(10)))
    display.textContent = atual
    operacao = null; novo = true
  }
</script>`,
        hint: 'A calculadora já está completa! Experimente alterar as cores ou adicionar novos botões.',
        successMessage: 'Calculadora completa construída! Este é um projeto de portfólio real.',
        xp: 15,
      },
    ],
  },

  // ─── MÓDULO 19: Projeto Lista de Tarefas ─────────────────────────────────
  {
    id: 'modulo-projeto-todo',
    number: '19',
    stageId: 'construtor',
    stage: 'Projetos',
    title: 'Projeto: Lista de Tarefas',
    description: 'Crie um app de to-do list com localStorage, adição, conclusão e remoção de tarefas.',
    color: '#f97316',
    context: `## O que vamos construir?

Um **app de lista de tarefas** (to-do list) completo com:
- Adicionar tarefas
- Marcar como concluída
- Remover tarefas
- Persistir dados no localStorage (não perde ao recarregar)
- Contador de tarefas pendentes

## Estrutura de dados

Cada tarefa é um objeto:

\`\`\`javascript
{
  id: Date.now(),      // ID único usando timestamp
  texto: 'Estudar JS', // o texto da tarefa
  feita: false,        // se está concluída
}
\`\`\`

A lista é um array de tarefas:

\`\`\`javascript
let tarefas = []
\`\`\`

## localStorage

Para persistir as tarefas:

\`\`\`javascript
// salvar
function salvar() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

// carregar
function carregar() {
  const dados = localStorage.getItem('tarefas')
  tarefas = dados ? JSON.parse(dados) : []
}
\`\`\`

## Adicionar tarefa

\`\`\`javascript
function adicionar(texto) {
  if (!texto.trim()) return // não adiciona tarefa vazia

  const tarefa = {
    id: Date.now(),
    texto: texto.trim(),
    feita: false,
  }

  tarefas.push(tarefa)
  salvar()
  renderizar()
}
\`\`\`

## Marcar como concluída

\`\`\`javascript
function alternarConcluida(id) {
  const tarefa = tarefas.find(t => t.id === id)
  if (tarefa) tarefa.feita = !tarefa.feita
  salvar()
  renderizar()
}
\`\`\`

## Remover tarefa

\`\`\`javascript
function remover(id) {
  tarefas = tarefas.filter(t => t.id !== id)
  salvar()
  renderizar()
}
\`\`\`

## Renderizar a lista

A função \`renderizar()\` reconstrói a lista no DOM:

\`\`\`javascript
function renderizar() {
  const lista = document.getElementById('lista')
  lista.innerHTML = ''  // limpa a lista atual

  tarefas.forEach(tarefa => {
    const li = document.createElement('li')
    li.className = tarefa.feita ? 'feita' : ''
    li.innerHTML = \`
      <span onclick="alternarConcluida(\${tarefa.id})">\${tarefa.texto}</span>
      <button onclick="remover(\${tarefa.id})">×</button>
    \`
    lista.appendChild(li)
  })

  // atualiza contador
  const pendentes = tarefas.filter(t => !t.feita).length
  document.getElementById('contador').textContent = pendentes + ' pendentes'
}
\`\`\`

## Fluxo completo

\`\`\`
Usuário digita → adicionar() → push para array → salvar() → renderizar() → DOM atualizado
\`\`\`

## Boas práticas

1. **Nunca manipule o DOM diretamente** — sempre passe pelo array e re-renderize
2. **Use IDs únicos** — Date.now() é uma boa opção para apps simples
3. **Valide entradas** — não aceite tarefas vazias
4. **Feedback visual** — use classes CSS para tarefas concluídas
5. **Persistência** — salve sempre que o estado mudar

## Melhorias possíveis

- Filtros (todas / ativas / concluídas)
- Editar tarefa (duplo clique)
- Prioridade (alta, média, baixa)
- Data de vencimento
- Categorias
`,
    tasks: [
      {
        id: 'todo-quiz-1',
        type: 'quiz',
        title: 'Persistência de dados',
        question: 'Por que usamos JSON.stringify() ao salvar no localStorage?',
        options: [
          'Para criptografar os dados',
          'localStorage só aceita strings, então precisamos converter o array',
          'Para comprimir os dados',
          'Para validar o formato',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'localStorage só armazena strings. JSON.stringify converte objeto→string e JSON.parse faz o inverso.',
      },
      {
        id: 'todo-quiz-2',
        type: 'quiz',
        title: 'IDs únicos',
        question: 'Por que usar Date.now() como ID de uma tarefa?',
        options: [
          'É mais rápido que outros métodos',
          'Gera um número único baseado no momento atual',
          'É o padrão do localStorage',
          'Funciona apenas com arrays',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'Date.now() retorna o timestamp atual em ms — praticamente único para cada ação!',
      },
      {
        id: 'todo-fill-1',
        type: 'fill',
        title: 'Complete: remover tarefa',
        text: 'Para remover uma tarefa pelo ID:\ntarefas = tarefas.___(t => t.id !== ___)',
        blanks: ['filter', 'id'],
        xp: 10,
        successMessage: 'filter() cria um novo array sem o elemento removido!',
      },
      {
        id: 'todo-bug-1',
        type: 'bug',
        title: 'Erro ao carregar tarefas',
        description: 'As tarefas não carregam ao reabrir a página:',
        lines: [
          'function carregar() {',
          '  const dados = localStorage.getItem("tarefas")',
          '  tarefas = JSON.stringify(dados)',
          '}',
        ],
        bugLine: 2,
        explanation: 'Deve ser JSON.parse(dados), não JSON.stringify. stringify converte para string, parse converte de volta para objeto.',
        xp: 20,
        successMessage: 'stringify = objeto→string | parse = string→objeto. Não confunda!',
      },
      {
        id: 'todo-drag-1',
        type: 'drag',
        title: 'Ordene: fluxo de adicionar tarefa',
        description: 'Ordene as etapas para adicionar uma tarefa corretamente:',
        blocks: [
          'Usuário clica em "Adicionar"',
          'Ler o texto do input',
          'Criar objeto { id, texto, feita: false }',
          'push() no array tarefas',
          'salvar() no localStorage',
          'renderizar() para atualizar o DOM',
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        xp: 20,
        successMessage: 'Fluxo de estado → salvar → renderizar é a base de qualquer app!',
      },
      {
        id: 'todo-code-1',
        type: 'code',
        title: 'Construa o app de tarefas',
        description: 'Crie um to-do list completo com adicionar, concluir e remover tarefas.',
        starterCode: `<style>
  body { font-family: sans-serif; max-width: 400px; margin: 24px auto; padding: 0 16px; }
  h1 { color: #f97316; }
  .input-row { display: flex; gap: 8px; margin-bottom: 16px; }
  input { flex: 1; padding: 10px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; }
  button { padding: 10px 16px; background: #f97316; color: white; border: none;
    border-radius: 8px; cursor: pointer; font-weight: 700; }
  ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
  li { display: flex; align-items: center; gap: 8px; background: #f9fafb;
    padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb; }
  li span { flex: 1; cursor: pointer; }
  li.feita span { text-decoration: line-through; color: #9ca3af; }
  li button { background: #fee2e2; color: #dc2626; padding: 4px 10px; font-size: 0.85rem; }
  #contador { color: #6b7280; font-size: 0.9rem; margin-bottom: 12px; }
</style>

<h1>📝 Minhas Tarefas</h1>
<div class="input-row">
  <input id="input" placeholder="Nova tarefa..." onkeydown="if(event.key==='Enter') add()" />
  <button onclick="add()">Adicionar</button>
</div>
<p id="contador"></p>
<ul id="lista"></ul>

<script>
  let tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]')

  function save() { localStorage.setItem('tarefas', JSON.stringify(tarefas)) }

  function render() {
    const lista = document.getElementById('lista')
    lista.innerHTML = ''
    tarefas.forEach(t => {
      const li = document.createElement('li')
      if (t.feita) li.classList.add('feita')
      li.innerHTML = \`<span onclick="toggle(\${t.id})">\${t.texto}</span>
        <button onclick="remove(\${t.id})">×</button>\`
      lista.appendChild(li)
    })
    const p = tarefas.filter(t => !t.feita).length
    document.getElementById('contador').textContent = p + ' tarefa(s) pendente(s)'
  }

  function add() {
    const input = document.getElementById('input')
    const texto = input.value.trim()
    if (!texto) return
    tarefas.push({ id: Date.now(), texto, feita: false })
    input.value = ''
    save(); render()
  }

  function toggle(id) {
    const t = tarefas.find(t => t.id === id)
    if (t) t.feita = !t.feita
    save(); render()
  }

  function remove(id) {
    tarefas = tarefas.filter(t => t.id !== id)
    save(); render()
  }

  render()
</script>`,
        hint: 'O app já está completo! Experimente adicionar filtros (todas/ativas/concluídas).',
        successMessage: 'App de tarefas com localStorage funcionando! Um projeto real de portfólio.',
        xp: 15,
      },
    ],
  },

  // ─── MÓDULO 20: Projeto Landing Page ─────────────────────────────────────
  {
    id: 'modulo-projeto-landing',
    number: '20',
    stageId: 'construtor',
    stage: 'Projetos',
    title: 'Projeto: Landing Page',
    description: 'Construa uma landing page profissional e responsiva do zero.',
    color: '#6366f1',
    context: `## O que vamos construir?

Uma **landing page profissional** completa com:
- Hero section com headline e CTA
- Seção de features (3 cards)
- Seção de depoimento
- Formulário de contato
- Footer
- Design responsivo
- Animações com CSS

## Estrutura HTML semântica

\`\`\`html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Produto Incrível</title>
</head>
<body>

  <header class="navbar">...</header>

  <main>
    <section class="hero">...</section>
    <section class="features">...</section>
    <section class="depoimento">...</section>
    <section class="contato">...</section>
  </main>

  <footer class="footer">...</footer>

</body>
</html>
\`\`\`

## Hero Section

A primeira coisa que o usuário vê — deve impactar:

\`\`\`html
<section class="hero">
  <div class="hero__content">
    <h1 class="hero__title">Aprenda a programar<br><span>do zero ao emprego</span></h1>
    <p class="hero__sub">O curso mais completo de HTML, CSS e JavaScript em português.</p>
    <a href="#contato" class="btn-primary">Começar agora</a>
  </div>
</section>
\`\`\`

\`\`\`css
.hero {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  padding: 120px 24px;
  text-align: center;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  line-height: 1.15;
}

.hero__title span {
  color: #fbbf24; /* destaque amarelo */
}
\`\`\`

## Seção de Features (Cards)

\`\`\`html
<section class="features">
  <h2>Por que nos escolher?</h2>
  <div class="features__grid">
    <div class="feature-card">
      <span class="feature-card__icon">🎯</span>
      <h3>Prático</h3>
      <p>Projetos reais desde o primeiro dia.</p>
    </div>
    <!-- mais cards... -->
  </div>
</section>
\`\`\`

\`\`\`css
.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  text-align: center;
}
\`\`\`

## Animação de entrada com CSS

\`\`\`css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card {
  animation: fadeInUp 0.6s ease forwards;
}

.feature-card:nth-child(2) { animation-delay: 0.1s; }
.feature-card:nth-child(3) { animation-delay: 0.2s; }
\`\`\`

## Formulário de contato

\`\`\`html
<form id="form" class="form">
  <input type="text"  name="nome"  placeholder="Seu nome"  required />
  <input type="email" name="email" placeholder="Seu e-mail" required />
  <textarea name="msg" placeholder="Sua mensagem" rows="4" required></textarea>
  <button type="submit">Enviar mensagem</button>
</form>
\`\`\`

\`\`\`javascript
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault()
  const nome = this.nome.value
  alert('Obrigado, ' + nome + '! Entraremos em contato em breve.')
  this.reset()
})
\`\`\`

## Checklist de uma boa landing page

- [ ] Meta viewport configurada
- [ ] Título e meta description
- [ ] Hero com CTA claro
- [ ] Design responsivo (mobile-first)
- [ ] Imagens com alt text
- [ ] Formulário com validação
- [ ] Footer com informações de contato
- [ ] Carregamento rápido (imagens otimizadas)
`,
    tasks: [
      {
        id: 'lp-quiz-1',
        type: 'quiz',
        title: 'Hero Section',
        question: 'O que é uma "call to action" (CTA) em uma landing page?',
        options: [
          'O rodapé da página',
          'Um botão ou link que guia o usuário para a ação desejada',
          'O logo da empresa',
          'A cor de fundo da página',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'CTAs como "Começar agora" ou "Saiba mais" guiam o usuário para converter.',
      },
      {
        id: 'lp-quiz-2',
        type: 'quiz',
        title: 'grid-template-columns com auto-fit',
        question: 'O que faz "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))"?',
        options: [
          'Cria exatamente 3 colunas',
          'Cria colunas automáticas que cabem no espaço, com mínimo de 250px',
          'Esconde colunas menores que 250px',
          'Fixa o layout em 250px de largura',
        ],
        correct: 1,
        xp: 10,
        successMessage: 'auto-fit + minmax = grid responsivo sem media queries! Uma das técnicas mais poderosas do CSS.',
      },
      {
        id: 'lp-fill-1',
        type: 'fill',
        title: 'Complete a animação CSS',
        text: '@___ fadeInUp {\n  from { opacity: 0; transform: translateY(30px); }\n  to   { opacity: ___; transform: translateY(0); }\n}',
        blanks: ['keyframes', '1'],
        xp: 10,
        successMessage: '@keyframes define a animação, animation aplica ela no elemento!',
      },
      {
        id: 'lp-bug-1',
        type: 'bug',
        title: 'Formulário não funciona',
        description: 'O formulário recarrega a página ao enviar:',
        lines: [
          'form.addEventListener("submit", function(e) {',
          '  const nome = this.nome.value',
          '  alert("Obrigado, " + nome)',
          '})',
        ],
        bugLine: 0,
        explanation: 'Falta e.preventDefault() para impedir o comportamento padrão (recarregar a página).',
        xp: 20,
        successMessage: 'Sempre use e.preventDefault() em formulários controlados por JavaScript!',
      },
      {
        id: 'lp-drag-1',
        type: 'drag',
        title: 'Ordene: estrutura de uma landing page',
        description: 'Ordene as seções de uma landing page profissional:',
        blocks: [
          '<header> — Navbar com logo e links',
          '<section class="hero"> — Headline e CTA',
          '<section class="features"> — Benefícios/features',
          '<section class="depoimento"> — Prova social',
          '<section class="contato"> — Formulário',
          '<footer> — Rodapé',
        ],
        correctOrder: [0, 1, 2, 3, 4, 5],
        xp: 20,
        successMessage: 'Estrutura de landing page profissional dominada!',
      },
      {
        id: 'lp-code-1',
        type: 'code',
        title: 'Construa sua landing page',
        description: 'Crie uma landing page completa com hero, 3 cards de features e formulário.',
        starterCode: `<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', sans-serif; color: #1e293b; }
  .hero { background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white; padding: 80px 24px; text-align: center; }
  .hero h1 { font-size: clamp(1.8rem, 5vw, 3rem); font-weight: 900;
    line-height: 1.2; margin-bottom: 16px; }
  .hero h1 span { color: #fbbf24; }
  .hero p { font-size: 1.1rem; margin-bottom: 32px; opacity: 0.9; }
  .btn { display: inline-block; background: #fbbf24; color: #1e293b;
    padding: 14px 32px; border-radius: 50px; font-weight: 800;
    text-decoration: none; font-size: 1rem; transition: transform 0.2s; }
  .btn:hover { transform: translateY(-2px); }
  .features { padding: 80px 24px; background: #f8fafc; }
  .features h2 { text-align: center; font-size: 2rem; margin-bottom: 48px;
    font-weight: 800; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px; max-width: 900px; margin: 0 auto; }
  .card { background: white; border-radius: 16px; padding: 32px; text-align: center;
    box-shadow: 0 4px 24px rgba(0,0,0,0.06); }
  .card .icon { font-size: 2.5rem; margin-bottom: 16px; }
  .card h3 { font-size: 1.2rem; margin-bottom: 8px; }
  .card p { color: #64748b; line-height: 1.6; }
  .contato { padding: 80px 24px; max-width: 500px; margin: 0 auto; }
  .contato h2 { font-size: 2rem; font-weight: 800; margin-bottom: 32px; text-align: center; }
  form { display: flex; flex-direction: column; gap: 16px; }
  form input, form textarea { padding: 14px; border: 2px solid #e2e8f0;
    border-radius: 10px; font-size: 1rem; font-family: inherit; outline: none; }
  form input:focus, form textarea:focus { border-color: #6366f1; }
  form button { background: #6366f1; color: white; padding: 14px;
    border: none; border-radius: 10px; font-size: 1rem; font-weight: 700;
    cursor: pointer; }
  footer { background: #1e293b; color: #94a3b8; text-align: center;
    padding: 24px; font-size: 0.9rem; }
</style>

<section class="hero">
  <h1>Aprenda a programar<br><span>do zero ao emprego</span></h1>
  <p>O curso mais completo de desenvolvimento web em português.</p>
  <a href="#contato" class="btn">Começar agora →</a>
</section>

<section class="features">
  <h2>Por que nos escolher?</h2>
  <div class="grid">
    <div class="card">
      <div class="icon">🎯</div>
      <h3>100% Prático</h3>
      <p>Projetos reais desde o primeiro módulo.</p>
    </div>
    <div class="card">
      <div class="icon">⚡</div>
      <h3>Aprenda Rápido</h3>
      <p>Metodologia otimizada para iniciantes.</p>
    </div>
    <div class="card">
      <div class="icon">🏆</div>
      <h3>Certificado</h3>
      <p>Receba um certificado ao concluir.</p>
    </div>
  </div>
</section>

<section class="contato" id="contato">
  <h2>Entre em contato</h2>
  <form id="form">
    <input type="text"  name="nome"  placeholder="Seu nome"   required />
    <input type="email" name="email" placeholder="Seu e-mail" required />
    <textarea name="msg" rows="4"   placeholder="Sua mensagem" required></textarea>
    <button type="submit">Enviar mensagem</button>
  </form>
</section>

<footer>© 2025 Curso Iniciante — Todos os direitos reservados</footer>

<script>
  document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault()
    alert('Obrigado, ' + this.nome.value + '! Entraremos em contato.')
    this.reset()
  })
</script>`,
        hint: 'A landing page já está completa! Personalize as cores, textos e adicione mais seções.',
        successMessage: 'Landing page profissional construída! Você tem um projeto de portfólio pronto.',
        xp: 15,
      },
    ],
  },
]

export const STAGES = [
  {
    id: 'curioso',
    name: 'Curioso',
    subtitle: 'Primeiros passos no mundo da programação',
    icon: '🔍',
    color: '#3b82f6',
  },
  {
    id: 'aprendiz',
    name: 'Aprendiz',
    subtitle: 'Aprendendo HTML e CSS do zero',
    icon: '📚',
    color: '#8b5cf6',
  },
  {
    id: 'estudante',
    name: 'Estudante',
    subtitle: 'Dominando estilos e layout com CSS',
    icon: '🎨',
    color: '#10b981',
  },
  {
    id: 'praticante',
    name: 'Praticante',
    subtitle: 'Introdução ao JavaScript',
    icon: '⚡',
    color: '#f43f5e',
  },
  {
    id: 'construtor',
    name: 'Construtor',
    subtitle: 'Manipulando o DOM e criando projetos reais',
    icon: '🏗️',
    color: '#06b6d4',
  },
]
