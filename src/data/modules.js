export const MODULES = [
  {
    id: 'modulo-1',
    number: '01',
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

Mas antes de tudo isso, o mais importante é entender: programar é uma habilidade. Como qualquer habilidade, ela se desenvolve com prática e paciência.`,
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
    ],
  },
  {
    id: 'modulo-2',
    number: '02',
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

A tag \`<img>\` não tem fechamento (é uma tag vazia).`,
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
    ],
  },
  {
    id: 'modulo-3',
    number: '03',
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
- Mantenha a indentação organizada para facilitar a leitura`,
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
    ],
  },
]
