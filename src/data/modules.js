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
      {
        id: 'task-5',
        type: 'type',
        question: 'Como se chama a habilidade de pensar em sequências ordenadas de passos para resolver um problema?',
        answer: ['lógica de programação', 'lógica'],
        placeholder: 'Digite sua resposta...',
        hint: 'É a base de qualquer linguagem de programação.',
        explanation: 'Lógica de programação é a habilidade de decompor um problema em passos e organizá-los em sequência. É fundamental antes de aprender qualquer linguagem.',
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
    ],
  },
  {
    id: 'modulo-4',
    number: '04',
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
| \`#titulo\` | elemento com id="titulo" |`,
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
    ],
  },
  {
    id: 'modulo-5',
    number: '05',
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
\`\`\``,
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
    ],
  },
  {
    id: 'modulo-6',
    number: '06',
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
\`\`\``,
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
    ],
  },
  {
    id: 'modulo-7',
    number: '07',
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
    ],
  },
  {
    id: 'modulo-8',
    number: '08',
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

O próximo passo é praticar cada vez mais. Todo grande desenvolvedor começou exatamente onde você está agora.`,
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
    ],
  },
]
