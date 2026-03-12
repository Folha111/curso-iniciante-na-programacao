function safeMathEval(expr) {
  try {
    const sanitized = String(expr).replace(/[^0-9+\-*/().%\s]/g, '');
    if (!sanitized.trim()) return '0';
    // Use Function constructor in a controlled way - only allows math operators
    // eslint-disable-next-line no-new-func
    const result = new Function('"use strict"; return (' + sanitized + ')')();
    if (!isFinite(result)) return 'Erro';
    return String(result);
  } catch {
    return 'Erro';
  }
}

export const PROJECTS = [
  {
    id: 'cartao-apresentacao',
    title: 'Cartão de Apresentação',
    subtitle: 'Construa um cartão digital profissional com HTML e CSS puro.',
    description: 'Crie um cartão de apresentação digital estilizado que você pode compartilhar com qualquer pessoa. Aprenda estrutura HTML e estilização CSS na prática.',
    level: 'Iniciante',
    tags: ['HTML', 'CSS'],
    time: '30 min',
    color: '#3b82f6',
    icon: '👤',
    steps: [
      {
        id: 'step-1',
        title: 'Criando a estrutura HTML',
        explanation: `Vamos começar pelo começo: a estrutura HTML do cartão.

Todo cartão de apresentação tem informações básicas: **nome**, **cargo/profissão** e uma **bio** curta. Vamos criar exatamente isso.

A estrutura que você vai criar:
- Uma \`<div class="cartao">\` como container principal
- Um \`<h1>\` com seu nome
- Um \`<p class="cargo">\` com seu cargo ou profissão
- Um \`<p class="bio">\` com uma frase sobre você

Substitua os textos de exemplo pelos seus dados reais!`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
  </head>
  <body>

    <!-- Crie sua div.cartao com h1, p.cargo e p.bio -->

  </body>
</html>`,
        validate: (doc) => {
          const cartao = doc.querySelector('.cartao')
          const h1 = doc.querySelector('h1')
          const cargo = doc.querySelector('.cargo')
          const bio = doc.querySelector('.bio')
          return cartao && h1 && h1.textContent.trim().length > 0 && cargo && bio
        },
        hint: 'Crie: <div class="cartao"><h1>Seu Nome</h1><p class="cargo">Sua Profissão</p><p class="bio">Sua descrição aqui.</p></div>',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
  </head>
  <body>
    <div class="cartao">
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-2',
        title: 'Estilizando com CSS',
        explanation: `Ótimo! Agora o cartão tem conteúdo mas ainda parece texto simples. Vamos transformá-lo visualmente com CSS.

Adicione uma tag \`<style>\` no \`<head>\` e aplique os estilos:

**Para o \`body\`:**
- \`display: flex\`, \`justify-content: center\`, \`align-items: center\`, \`min-height: 100vh\`
- \`background-color\` com uma cor suave (ex: \`#f0f4f8\`)
- \`font-family: sans-serif\`

**Para o \`.cartao\`:**
- \`background: white\`
- \`padding: 40px\`
- \`border-radius: 16px\`
- \`box-shadow: 0 4px 24px rgba(0,0,0,0.1)\`
- \`max-width: 360px\`
- \`width: 100%\`
- \`text-align: center\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      /* Adicione seus estilos aqui */

    </style>
  </head>
  <body>
    <div class="cartao">
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('.cartao') && css.includes('border-radius') && css.includes('padding')
        },
        hint: 'body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f4f8; font-family: sans-serif; } .cartao { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); max-width: 360px; width: 100%; text-align: center; }',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f0f4f8;
        font-family: sans-serif;
      }
      .cartao {
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        max-width: 360px;
        width: 100%;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="cartao">
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-3',
        title: 'Cores e tipografia',
        explanation: `O cartão já tem forma! Agora vamos refinar a tipografia e as cores para ficar com visual profissional.

Adicione estilos para:

**\`h1\`** (seu nome):
- \`font-size: 28px\`
- \`font-weight: 800\`
- \`color: #1e293b\`
- \`margin-bottom: 6px\`

**\`.cargo\`** (sua profissão):
- \`font-size: 14px\`
- \`font-weight: 600\`
- \`color: #3b82f6\` (azul destaque)
- \`text-transform: uppercase\`
- \`letter-spacing: 0.08em\`
- \`margin-bottom: 16px\`

**\`.bio\`**:
- \`font-size: 15px\`
- \`color: #64748b\`
- \`line-height: 1.6\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f0f4f8;
        font-family: sans-serif;
      }
      .cartao {
        background: white;
        padding: 40px;
        border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        max-width: 360px;
        width: 100%;
        text-align: center;
      }

      /* Adicione estilos para h1, .cargo e .bio */

    </style>
  </head>
  <body>
    <div class="cartao">
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('h1') && css.includes('.cargo') && css.includes('.bio')
        },
        hint: 'h1 { font-size: 28px; font-weight: 800; color: #1e293b; } .cargo { font-size: 14px; color: #3b82f6; text-transform: uppercase; } .bio { font-size: 15px; color: #64748b; line-height: 1.6; }',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        display: flex; justify-content: center; align-items: center;
        min-height: 100vh; background-color: #f0f4f8; font-family: sans-serif;
      }
      .cartao {
        background: white; padding: 40px; border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.1); max-width: 360px; width: 100%; text-align: center;
      }
      h1 { font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
      .cargo {
        font-size: 14px; font-weight: 600; color: #3b82f6;
        text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;
      }
      .bio { font-size: 15px; color: #64748b; line-height: 1.6; }
    </style>
  </head>
  <body>
    <div class="cartao">
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-4',
        title: 'Avatar com suas iniciais',
        explanation: `Que tal adicionar um avatar com suas iniciais? Fica muito mais profissional!

Adicione antes do \`<h1>\` uma \`<div class="avatar">\` com suas iniciais (ex: "MS" para Maria Silva).

**CSS do avatar:**
\`\`\`css
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
\`\`\`

O \`border-radius: 50%\` transforma qualquer div em um círculo perfeito!`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        display: flex; justify-content: center; align-items: center;
        min-height: 100vh; background-color: #f0f4f8; font-family: sans-serif;
      }
      .cartao {
        background: white; padding: 40px; border-radius: 16px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.1); max-width: 360px; width: 100%; text-align: center;
      }
      h1 { font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
      .cargo { font-size: 14px; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
      .bio { font-size: 15px; color: #64748b; line-height: 1.6; }

      /* Adicione o estilo do .avatar aqui */

    </style>
  </head>
  <body>
    <div class="cartao">
      <!-- Adicione a div.avatar antes do h1 -->
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const avatar = doc.querySelector('.avatar')
          return avatar !== null && avatar.textContent.trim().length > 0
        },
        hint: 'Adicione <div class="avatar">MS</div> antes do h1. No CSS: .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 28px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f4f8; font-family: sans-serif; }
      .cartao { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); max-width: 360px; width: 100%; text-align: center; }
      .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 28px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
      h1 { font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
      .cargo { font-size: 14px; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
      .bio { font-size: 15px; color: #64748b; line-height: 1.6; }
    </style>
  </head>
  <body>
    <div class="cartao">
      <div class="avatar">MS</div>
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-5',
        title: 'Links e toque final',
        explanation: `Último passo! Vamos adicionar links de contato e um divisor visual para separar a bio dos links.

**Adicione no HTML** (após o \`.bio\`):
\`\`\`html
<hr class="divisor" />
<div class="links">
  <a href="mailto:seu@email.com">E-mail</a>
  <a href="#">GitHub</a>
  <a href="#">LinkedIn</a>
</div>
\`\`\`

**CSS para os links:**
\`\`\`css
.divisor { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
.links { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
.links a {
  padding: 8px 16px;
  border-radius: 20px;
  background: #f1f5f9;
  color: #3b82f6;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: background 0.2s;
}
.links a:hover { background: #3b82f6; color: white; }
\`\`\`

**Parabéns — seu cartão está pronto! 🎉**`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f4f8; font-family: sans-serif; }
      .cartao { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); max-width: 360px; width: 100%; text-align: center; }
      .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 28px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
      h1 { font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
      .cargo { font-size: 14px; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
      .bio { font-size: 15px; color: #64748b; line-height: 1.6; }

      /* Adicione estilos para .divisor e .links */

    </style>
  </head>
  <body>
    <div class="cartao">
      <div class="avatar">MS</div>
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis.</p>
      <!-- Adicione hr.divisor e div.links aqui -->
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const links = doc.querySelectorAll('.links a')
          return links.length >= 2
        },
        hint: 'Adicione: <hr class="divisor" /><div class="links"><a href="#">E-mail</a><a href="#">GitHub</a><a href="#">LinkedIn</a></div>. No CSS: .links { display: flex; justify-content: center; gap: 12px; } .links a { padding: 8px 16px; border-radius: 20px; background: #f1f5f9; color: #3b82f6; text-decoration: none; font-weight: 600; }',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Meu Cartão</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f0f4f8; font-family: sans-serif; }
      .cartao { background: white; padding: 40px; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.1); max-width: 360px; width: 100%; text-align: center; }
      .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #3b82f6, #8b5cf6); color: white; font-size: 28px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; }
      h1 { font-size: 28px; font-weight: 800; color: #1e293b; margin-bottom: 6px; }
      .cargo { font-size: 14px; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px; }
      .bio { font-size: 15px; color: #64748b; line-height: 1.6; }
      .divisor { border: none; border-top: 1px solid #e2e8f0; margin: 24px 0; }
      .links { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
      .links a { padding: 8px 16px; border-radius: 20px; background: #f1f5f9; color: #3b82f6; text-decoration: none; font-size: 13px; font-weight: 600; }
    </style>
  </head>
  <body>
    <div class="cartao">
      <div class="avatar">MS</div>
      <h1>Maria Silva</h1>
      <p class="cargo">Desenvolvedora Front-end</p>
      <p class="bio">Apaixonada por criar interfaces bonitas e acessíveis. Transformando café em código desde 2020.</p>
      <hr class="divisor" />
      <div class="links">
        <a href="mailto:maria@email.com">E-mail</a>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
      </div>
    </div>
  </body>
</html>`,
      },
    ],
  },

  {
    id: 'calculadora',
    title: 'Calculadora',
    subtitle: 'Construa uma calculadora funcional com HTML, CSS e JavaScript.',
    description: 'Crie uma calculadora completa do zero. Você vai aprender CSS Grid, manipulação do DOM e lógica de programação aplicada.',
    level: 'Intermediário',
    tags: ['HTML', 'CSS', 'JavaScript'],
    time: '50 min',
    color: '#8b5cf6',
    icon: '🧮',
    steps: [
      {
        id: 'step-1',
        title: 'Estrutura HTML da calculadora',
        explanation: `Vamos construir uma calculadora real! Começamos pela estrutura HTML.

A calculadora terá:
- Uma \`<div class="calc">\` como container
- Um \`<div class="display">\` para mostrar os números
- Um \`<div class="botoes">\` com todos os botões

**Botões necessários:**
- Linha 1: C (limpar), +/- (inverter sinal), % (porcentagem), ÷
- Linha 2: 7, 8, 9, ×
- Linha 3: 4, 5, 6, -
- Linha 4: 1, 2, 3, +
- Linha 5: 0 (largo), ., =

Use \`data-valor\` em cada botão para identificarmos o que foi clicado via JavaScript.`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
  </head>
  <body>
    <div class="calc">

      <div class="display">
        <span id="resultado">0</span>
      </div>

      <div class="botoes">
        <!-- Linha 1: funções -->
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>

        <!-- Adicione as linhas 2, 3, 4 e 5 aqui -->

      </div>
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const botoes = doc.querySelectorAll('button')
          const display = doc.getElementById('resultado')
          return botoes.length >= 16 && display !== null
        },
        hint: 'Adicione os botões 7,8,9,× / 4,5,6,- / 1,2,3,+ / 0,.,= usando a mesma estrutura. O botão 0 pode ter class="btn-zero". O botão = tem class="btn-igual".',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button>
        <button data-valor="8">8</button>
        <button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button>
        <button data-valor="5">5</button>
        <button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button>
        <button data-valor="2">2</button>
        <button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-2',
        title: 'Estilizando com CSS',
        explanation: `Agora vamos fazer a calculadora parecer uma calculadora de verdade!

Vamos usar **CSS Grid** para organizar os botões. É a ferramenta perfeita para layouts em grade.

**Layout principal:**
\`\`\`css
.calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
.display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
#resultado { font-size: 48px; color: white; font-weight: 300; }
\`\`\`

**Grid de botões:**
\`\`\`css
.botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; }
.btn-func { background: #636366; color: white; }
.btn-op   { background: #ff9f0a; color: white; }
.btn-igual{ background: #ff9f0a; color: white; }
button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
.btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
\`\`\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }

      /* Adicione os estilos da calculadora aqui */

    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button>
        <button data-valor="8">8</button>
        <button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button>
        <button data-valor="5">5</button>
        <button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button>
        <button data-valor="2">2</button>
        <button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('grid') && css.includes('.calc') && css.includes('btn-op')
        },
        hint: '.calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; } .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; } button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; } .btn-op { background: #ff9f0a; color: white; }',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; transition: opacity 0.1s; }
      button:active { opacity: 0.7; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button>
        <button data-valor="8">8</button>
        <button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button>
        <button data-valor="5">5</button>
        <button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button>
        <button data-valor="2">2</button>
        <button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-3',
        title: 'Mostrando números no display',
        explanation: `Agora a parte mais empolgante: o JavaScript!

Vamos começar fazendo com que clicar nos números atualize o display.

**A lógica:**
\`\`\`js
let expressao = ''

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function() {
    const val = this.dataset.valor

    if (val === 'C') {
      expressao = ''
      document.getElementById('resultado').textContent = '0'
      return
    }

    if (!isNaN(val) || val === '.') {
      expressao += val
      document.getElementById('resultado').textContent = expressao
    }
  })
})
\`\`\`

Adicione uma tag \`<script>\` antes do \`</body>\` com esse código.

**Como funciona:**
- \`dataset.valor\` lê o atributo \`data-valor\` do botão clicado
- \`isNaN(val)\` verifica se é um número (retorna true se NÃO for número)
- Concatenamos os dígitos na string \`expressao\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; transition: opacity 0.1s; }
      button:active { opacity: 0.7; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button><button data-valor="8">8</button><button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button><button data-valor="5">5</button><button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button><button data-valor="2">2</button><button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>

    <script>
      /* Adicione o código JavaScript aqui */

    </script>
  </body>
</html>`,
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('addEventListener') && s.textContent.includes('dataset')) return true
          }
          return false
        },
        hint: 'let expressao = ""; document.querySelectorAll("button").forEach(btn => { btn.addEventListener("click", function() { const val = this.dataset.valor; if(val==="C"){ expressao=""; document.getElementById("resultado").textContent="0"; return; } if(!isNaN(val)||val==="."){ expressao+=val; document.getElementById("resultado").textContent=expressao; } }); });',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; transition: opacity 0.1s; }
      button:active { opacity: 0.7; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button><button data-valor="8">8</button><button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button><button data-valor="5">5</button><button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button><button data-valor="2">2</button><button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
    <script>
      let expressao = ''
      const display = document.getElementById('resultado')
      document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
          const val = this.dataset.valor
          if (val === 'C') { expressao = ''; display.textContent = '0'; return }
          if (!isNaN(val) || val === '.') {
            expressao += val
            display.textContent = expressao
          }
        })
      })
    </script>
  </body>
</html>`,
      },
      {
        id: 'step-4',
        title: 'Operações e resultado',
        explanation: `Os números já aparecem! Agora vamos fazer os operadores e o botão = funcionarem.

**Adicione ao JavaScript:**
\`\`\`js
// Dentro do forEach, após o tratamento de números:

// Operadores: +, -, *, /
if (['+', '-', '*', '/'].includes(val)) {
  expressao += val
  display.textContent = expressao
}

// Porcentagem
if (val === '%') {
  expressao = String(parseFloat(expressao) / 100)
  display.textContent = expressao
}

// Inverter sinal
if (val === '+/-') {
  expressao = String(parseFloat(expressao) * -1)
  display.textContent = expressao
}

// Calcular resultado
if (val === '=') {
  try {
    expressao = safeMathEval(expressao)
    display.textContent = expressao
  } catch {
    display.textContent = 'Erro'
    expressao = ''
  }
}
\`\`\`

> **Nota:** \`eval()\` avalia uma expressão matemática como string. Em projetos reais evitamos \`eval()\` por segurança, mas aqui é perfeito para aprender!`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button><button data-valor="8">8</button><button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button><button data-valor="5">5</button><button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button><button data-valor="2">2</button><button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
    <script>
      let expressao = ''
      const display = document.getElementById('resultado')
      document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
          const val = this.dataset.valor
          if (val === 'C') { expressao = ''; display.textContent = '0'; return }
          if (!isNaN(val) || val === '.') { expressao += val; display.textContent = expressao }

          /* Adicione os handlers de operadores, % , +/- e = aqui */

        })
      })
    </script>
  </body>
</html>`,
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('eval') || s.textContent.includes("'='")) return true
          }
          return false
        },
        hint: 'if(["+","-","*","/"].includes(val)){expressao+=val;display.textContent=expressao;} if(val==="="){try{expressao=safeMathEval(expressao);display.textContent=expressao;}catch{display.textContent="Erro";expressao="";}}',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; transition: opacity 0.1s; }
      button:active { opacity: 0.7; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button><button data-valor="8">8</button><button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button><button data-valor="5">5</button><button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button><button data-valor="2">2</button><button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
    <script>
      let expressao = ''
      const display = document.getElementById('resultado')
      document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
          const val = this.dataset.valor
          if (val === 'C') { expressao = ''; display.textContent = '0'; return }
          if (!isNaN(val) || val === '.') { expressao += val; display.textContent = expressao; return }
          if (['+', '-', '*', '/'].includes(val)) { expressao += val; display.textContent = expressao; return }
          if (val === '%') { expressao = String(parseFloat(expressao) / 100); display.textContent = expressao; return }
          if (val === '+/-') { expressao = String(parseFloat(expressao) * -1); display.textContent = expressao; return }
          if (val === '=') { try { expressao = safeMathEval(expressao); display.textContent = expressao } catch { display.textContent = 'Erro'; expressao = '' } }
        })
      })
    </script>
  </body>
</html>`,
      },
      {
        id: 'step-5',
        title: 'Polimento e suporte ao teclado',
        explanation: `A calculadora já funciona! Vamos adicionar o toque final: **suporte ao teclado**.

Adicione após o loop de botões:
\`\`\`js
document.addEventListener('keydown', function(e) {
  const teclas = {
    '0':'0','1':'1','2':'2','3':'3','4':'4',
    '5':'5','6':'6','7':'7','8':'8','9':'9',
    '+':'+','-':'-','*':'*','/':'/',
    '.':'.','Enter':'=','Backspace':'C','Escape':'C'
  }
  const val = teclas[e.key]
  if (!val) return

  const btn = document.querySelector(\`[data-valor="\${val}"]\`)
  if (btn) {
    btn.click()
    btn.style.opacity = '0.7'
    setTimeout(() => btn.style.opacity = '1', 100)
  }
})
\`\`\`

Isso mapeia cada tecla do teclado para um botão e o "clica" programaticamente — reutilizando toda a lógica que já criamos!

**Parabéns — você construiu uma calculadora completa! 🎉**`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; transition: opacity 0.1s; }
      button:active { opacity: 0.7; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button><button data-valor="8">8</button><button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button><button data-valor="5">5</button><button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button><button data-valor="2">2</button><button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
    <script>
      let expressao = ''
      const display = document.getElementById('resultado')
      document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
          const val = this.dataset.valor
          if (val === 'C') { expressao = ''; display.textContent = '0'; return }
          if (!isNaN(val) || val === '.') { expressao += val; display.textContent = expressao; return }
          if (['+', '-', '*', '/'].includes(val)) { expressao += val; display.textContent = expressao; return }
          if (val === '%') { expressao = String(parseFloat(expressao) / 100); display.textContent = expressao; return }
          if (val === '+/-') { expressao = String(parseFloat(expressao) * -1); display.textContent = expressao; return }
          if (val === '=') { try { expressao = safeMathEval(expressao); display.textContent = expressao } catch { display.textContent = 'Erro'; expressao = '' } }
        })
      })

      /* Adicione o suporte ao teclado aqui */

    </script>
  </body>
</html>`,
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('keydown')) return true
          }
          return false
        },
        hint: 'document.addEventListener("keydown", function(e){ const teclas={"0":"0","1":"1","Enter":"=","Backspace":"C","Escape":"C","+":"+","-":"-","*":"*","/":"/",".":","}; const val=teclas[e.key]; if(!val)return; const btn=document.querySelector(`[data-valor="${val}"]`); if(btn)btn.click(); })',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Calculadora</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #000; font-family: -apple-system, sans-serif; }
      .calc { background: #1c1c1e; border-radius: 24px; padding: 20px; width: 280px; }
      .display { text-align: right; padding: 16px 8px 8px; margin-bottom: 12px; }
      #resultado { font-size: 48px; color: white; font-weight: 300; display: block; }
      .botoes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
      button { height: 64px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; transition: opacity 0.1s; }
      button:active { opacity: 0.7; }
      .btn-func { background: #636366; color: white; }
      .btn-op, .btn-igual { background: #ff9f0a; color: white; }
      button:not(.btn-func):not(.btn-op):not(.btn-igual):not(.btn-zero) { background: #3a3a3c; color: white; }
      .btn-zero { grid-column: span 2; border-radius: 32px; text-align: left; padding-left: 24px; background: #3a3a3c; color: white; }
    </style>
  </head>
  <body>
    <div class="calc">
      <div class="display"><span id="resultado">0</span></div>
      <div class="botoes">
        <button data-valor="C" class="btn-func">C</button>
        <button data-valor="+/-" class="btn-func">+/-</button>
        <button data-valor="%" class="btn-func">%</button>
        <button data-valor="/" class="btn-op">÷</button>
        <button data-valor="7">7</button><button data-valor="8">8</button><button data-valor="9">9</button>
        <button data-valor="*" class="btn-op">×</button>
        <button data-valor="4">4</button><button data-valor="5">5</button><button data-valor="6">6</button>
        <button data-valor="-" class="btn-op">-</button>
        <button data-valor="1">1</button><button data-valor="2">2</button><button data-valor="3">3</button>
        <button data-valor="+" class="btn-op">+</button>
        <button data-valor="0" class="btn-zero">0</button>
        <button data-valor=".">.</button>
        <button data-valor="=" class="btn-igual">=</button>
      </div>
    </div>
    <script>
      let expressao = ''
      const display = document.getElementById('resultado')
      document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
          const val = this.dataset.valor
          if (val === 'C') { expressao = ''; display.textContent = '0'; return }
          if (!isNaN(val) || val === '.') { expressao += val; display.textContent = expressao; return }
          if (['+', '-', '*', '/'].includes(val)) { expressao += val; display.textContent = expressao; return }
          if (val === '%') { expressao = String(parseFloat(expressao) / 100); display.textContent = expressao; return }
          if (val === '+/-') { expressao = String(parseFloat(expressao) * -1); display.textContent = expressao; return }
          if (val === '=') { try { expressao = safeMathEval(expressao); display.textContent = expressao } catch { display.textContent = 'Erro'; expressao = '' } }
        })
      })
      document.addEventListener('keydown', function(e) {
        const map = {'0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','+':'+','-':'-','*':'*','/':'/','.':'.','Enter':'=','Backspace':'C','Escape':'C'}
        const val = map[e.key]
        if (!val) return
        const btn = document.querySelector('[data-valor="' + val + '"]')
        if (btn) { btn.click(); btn.style.opacity='0.7'; setTimeout(()=>btn.style.opacity='1',100) }
      })
    </script>
  </body>
</html>`,
      },
    ],
  },

  {
    id: 'lista-tarefas',
    title: 'Lista de Tarefas',
    subtitle: 'Crie um app de to-do list com localStorage para salvar os dados.',
    description: 'Construa uma lista de tarefas completa com adicionar, concluir e deletar itens. Os dados são salvos no navegador e persistem ao recarregar.',
    level: 'Intermediário',
    tags: ['HTML', 'CSS', 'JavaScript'],
    time: '60 min',
    color: '#10b981',
    icon: '✅',
    steps: [
      {
        id: 'step-1',
        title: 'Estrutura HTML',
        explanation: `Vamos criar um app de lista de tarefas (to-do list) — um dos projetos mais clássicos para aprender JavaScript!

**Estrutura do HTML:**
- Um \`<header>\` com o título
- Um \`<div class="form-add">\` com input + botão para adicionar
- Um \`<ul id="lista-tarefas">\` para exibir os itens
- Um \`<p id="vazio">\` com mensagem quando não há tarefas

O app terá funcionalidades de: **adicionar**, **marcar como feita** e **deletar** tarefas.`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Lista de Tarefas</title>
  </head>
  <body>

    <div class="app">
      <header class="app-header">
        <h1>Minhas Tarefas</h1>
        <p id="contador">0 tarefas pendentes</p>
      </header>

      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>

      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>

  </body>
</html>`,
        validate: (doc) => {
          const input = doc.getElementById('input-tarefa')
          const btn = doc.getElementById('btn-add')
          const lista = doc.getElementById('lista-tarefas')
          return input && btn && lista
        },
        hint: 'Verifique se você tem: <input id="input-tarefa">, <button id="btn-add"> e <ul id="lista-tarefas">',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Lista de Tarefas</title>
  </head>
  <body>
    <div class="app">
      <header class="app-header">
        <h1>Minhas Tarefas</h1>
        <p id="contador">0 tarefas pendentes</p>
      </header>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-2',
        title: 'Estilizando o app',
        explanation: `Vamos transformar o HTML numa interface bonita e moderna!

**Cores e variáveis:**
\`\`\`css
:root {
  --verde: #10b981;
  --bg: #f0fdf4;
  --branco: #ffffff;
  --texto: #1e293b;
  --cinza: #94a3b8;
}
\`\`\`

**Layout principal:**
\`\`\`css
body { background: var(--bg); font-family: sans-serif; min-height: 100vh; margin: 0; padding: 20px; }
.app { max-width: 480px; margin: 0 auto; }
.app-header { margin-bottom: 24px; }
h1 { font-size: 28px; font-weight: 800; color: var(--texto); }
#contador { color: var(--cinza); font-size: 14px; margin-top: 4px; }
\`\`\`

**Formulário:**
\`\`\`css
.form-add { display: flex; gap: 10px; margin-bottom: 20px; }
#input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
#input-tarefa:focus { border-color: var(--verde); }
#btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; }
\`\`\`

**Lista:**
\`\`\`css
#lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
#vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
\`\`\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Lista de Tarefas</title>
    <style>
      /* Adicione seus estilos aqui */

    </style>
  </head>
  <body>
    <div class="app">
      <header class="app-header">
        <h1>Minhas Tarefas</h1>
        <p id="contador">0 tarefas pendentes</p>
      </header>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
  </body>
</html>`,
        validate: (doc) => {
          const style = doc.querySelector('style')
          if (!style) return false
          const css = style.textContent
          return css.includes('.form-add') && css.includes('#btn-add') && css.includes('border-radius')
        },
        hint: '.form-add { display: flex; gap: 10px; margin-bottom: 20px; } #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; } #btn-add { padding: 12px 20px; background: #10b981; color: white; border: none; border-radius: 10px; cursor: pointer; }',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      .app-header { margin-bottom: 24px; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); }
      #contador { color: var(--cinza); font-size: 14px; margin-top: 4px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; font-size: 15px; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
    </style>
  </head>
  <body>
    <div class="app">
      <header class="app-header">
        <h1>Minhas Tarefas</h1>
        <p id="contador">0 tarefas pendentes</p>
      </header>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
  </body>
</html>`,
      },
      {
        id: 'step-3',
        title: 'Adicionando tarefas',
        explanation: `Agora a lógica! Vamos fazer o botão "Adicionar" criar itens na lista.

**Estrutura de cada item:**
\`\`\`html
<li class="item">
  <span class="item-texto">Nome da tarefa</span>
  <button class="btn-del">🗑</button>
</li>
\`\`\`

**JavaScript:**
\`\`\`js
const input = document.getElementById('input-tarefa')
const btnAdd = document.getElementById('btn-add')
const lista = document.getElementById('lista-tarefas')
const vazio = document.getElementById('vazio')

function adicionarTarefa() {
  const texto = input.value.trim()
  if (texto === '') return   // ignora se vazio

  const li = document.createElement('li')
  li.className = 'item'
  li.innerHTML = \`
    <span class="item-texto">\${texto}</span>
    <button class="btn-del">🗑</button>
  \`
  lista.appendChild(li)
  input.value = ''
  atualizarVazio()
}

function atualizarVazio() {
  vazio.style.display = lista.children.length === 0 ? 'block' : 'none'
}

btnAdd.addEventListener('click', adicionarTarefa)
input.addEventListener('keydown', e => { if (e.key === 'Enter') adicionarTarefa() })
\`\`\`

**CSS dos itens:**
\`\`\`css
.item { background: white; padding: 14px 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
.item-texto { flex: 1; font-size: 15px; }
.btn-del { background: none; border: none; cursor: pointer; font-size: 16px; opacity: 0.4; }
.btn-del:hover { opacity: 1; }
\`\`\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 4px; }
      #contador { color: var(--cinza); font-size: 14px; margin-bottom: 24px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; font-size: 15px; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }

      /* Adicione estilos para .item, .item-texto, .btn-del */

    </style>
  </head>
  <body>
    <div class="app">
      <h1>Minhas Tarefas</h1>
      <p id="contador">0 tarefas pendentes</p>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
    <script>
      /* Adicione o JavaScript aqui */

    </script>
  </body>
</html>`,
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('createElement') && s.textContent.includes('appendChild')) return true
          }
          return false
        },
        hint: 'function adicionarTarefa(){ const texto=input.value.trim(); if(!texto)return; const li=document.createElement("li"); li.className="item"; li.innerHTML=`<span class="item-texto">${texto}</span><button class="btn-del">🗑</button>`; lista.appendChild(li); input.value=""; } btnAdd.addEventListener("click", adicionarTarefa)',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 4px; }
      #contador { color: var(--cinza); font-size: 14px; margin-bottom: 24px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; font-size: 15px; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
      .item { background: white; padding: 14px 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
      .item-texto { flex: 1; font-size: 15px; }
      .btn-del { background: none; border: none; cursor: pointer; font-size: 16px; opacity: 0.4; }
      .btn-del:hover { opacity: 1; }
    </style>
  </head>
  <body>
    <div class="app">
      <h1>Minhas Tarefas</h1>
      <p id="contador">0 tarefas pendentes</p>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
    <script>
      const input = document.getElementById('input-tarefa')
      const btnAdd = document.getElementById('btn-add')
      const lista = document.getElementById('lista-tarefas')
      const vazio = document.getElementById('vazio')
      function atualizarVazio() { vazio.style.display = lista.children.length === 0 ? 'block' : 'none' }
      function adicionarTarefa() {
        const texto = input.value.trim()
        if (!texto) return
        const li = document.createElement('li')
        li.className = 'item'
        li.innerHTML = '<span class="item-texto">' + texto + '</span><button class="btn-del">🗑</button>'
        lista.appendChild(li)
        input.value = ''
        atualizarVazio()
      }
      btnAdd.addEventListener('click', adicionarTarefa)
      input.addEventListener('keydown', e => { if (e.key === 'Enter') adicionarTarefa() })
      atualizarVazio()
    </script>
  </body>
</html>`,
      },
      {
        id: 'step-4',
        title: 'Marcar como concluída e deletar',
        explanation: `Agora vamos adicionar as ações de **marcar como feita** (clicando no texto) e **deletar** (clicando na lixeira).

**Usando Event Delegation** no pai da lista para capturar cliques nos filhos:

\`\`\`js
lista.addEventListener('click', function(e) {
  const item = e.target.closest('.item')
  if (!item) return

  // Clicou no botão de deletar
  if (e.target.classList.contains('btn-del')) {
    item.remove()
    atualizarVazio()
    atualizarContador()
    return
  }

  // Clicou no texto: marcar/desmarcar
  item.classList.toggle('feita')
  atualizarContador()
})
\`\`\`

**CSS para item concluído:**
\`\`\`css
.item.feita .item-texto {
  text-decoration: line-through;
  color: #94a3b8;
}
.item.feita {
  opacity: 0.7;
}
\`\`\`

**Função contador:**
\`\`\`js
function atualizarContador() {
  const total = lista.querySelectorAll('.item').length
  const feitas = lista.querySelectorAll('.item.feita').length
  const pendentes = total - feitas
  document.getElementById('contador').textContent =
    pendentes + ' tarefa' + (pendentes !== 1 ? 's' : '') + ' pendente' + (pendentes !== 1 ? 's' : '')
}
\`\`\``,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 4px; }
      #contador { color: var(--cinza); font-size: 14px; margin-bottom: 24px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
      .item { background: white; padding: 14px 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); cursor: pointer; }
      .item-texto { flex: 1; font-size: 15px; }
      .btn-del { background: none; border: none; cursor: pointer; font-size: 16px; opacity: 0.4; }
      .btn-del:hover { opacity: 1; }
      /* Adicione .item.feita styles aqui */
    </style>
  </head>
  <body>
    <div class="app">
      <h1>Minhas Tarefas</h1>
      <p id="contador">0 tarefas pendentes</p>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
    <script>
      const input = document.getElementById('input-tarefa')
      const lista = document.getElementById('lista-tarefas')
      const vazio = document.getElementById('vazio')
      function atualizarVazio() { vazio.style.display = lista.children.length === 0 ? 'block' : 'none' }
      function adicionarTarefa() {
        const texto = input.value.trim(); if (!texto) return
        const li = document.createElement('li'); li.className = 'item'
        li.innerHTML = '<span class="item-texto">' + texto + '</span><button class="btn-del">🗑</button>'
        lista.appendChild(li); input.value = ''; atualizarVazio()
      }
      document.getElementById('btn-add').addEventListener('click', adicionarTarefa)
      input.addEventListener('keydown', e => { if (e.key === 'Enter') adicionarTarefa() })

      /* Adicione o event delegation e atualizarContador aqui */

    </script>
  </body>
</html>`,
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('classList.toggle') && s.textContent.includes('.remove')) return true
          }
          return false
        },
        hint: 'lista.addEventListener("click", function(e){ const item=e.target.closest(".item"); if(!item)return; if(e.target.classList.contains("btn-del")){ item.remove(); atualizarVazio(); return; } item.classList.toggle("feita"); })',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 4px; }
      #contador { color: var(--cinza); font-size: 14px; margin-bottom: 24px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
      .item { background: white; padding: 14px 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); cursor: pointer; }
      .item-texto { flex: 1; font-size: 15px; transition: all 0.2s; }
      .btn-del { background: none; border: none; cursor: pointer; font-size: 16px; opacity: 0.4; }
      .btn-del:hover { opacity: 1; }
      .item.feita .item-texto { text-decoration: line-through; color: var(--cinza); }
      .item.feita { opacity: 0.7; }
    </style>
  </head>
  <body>
    <div class="app">
      <h1>Minhas Tarefas</h1>
      <p id="contador">0 tarefas pendentes</p>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
    <script>
      const input = document.getElementById('input-tarefa')
      const lista = document.getElementById('lista-tarefas')
      const vazio = document.getElementById('vazio')
      const contador = document.getElementById('contador')
      function atualizarVazio() { vazio.style.display = lista.children.length === 0 ? 'block' : 'none' }
      function atualizarContador() {
        const total = lista.querySelectorAll('.item').length
        const feitas = lista.querySelectorAll('.item.feita').length
        const p = total - feitas
        contador.textContent = p + (p !== 1 ? ' tarefas pendentes' : ' tarefa pendente')
      }
      function adicionarTarefa() {
        const texto = input.value.trim(); if (!texto) return
        const li = document.createElement('li'); li.className = 'item'
        li.innerHTML = '<span class="item-texto">' + texto + '</span><button class="btn-del">🗑</button>'
        lista.appendChild(li); input.value = ''; atualizarVazio(); atualizarContador()
      }
      document.getElementById('btn-add').addEventListener('click', adicionarTarefa)
      input.addEventListener('keydown', e => { if (e.key === 'Enter') adicionarTarefa() })
      lista.addEventListener('click', function(e) {
        const item = e.target.closest('.item'); if (!item) return
        if (e.target.classList.contains('btn-del')) { item.remove(); atualizarVazio(); atualizarContador(); return }
        item.classList.toggle('feita'); atualizarContador()
      })
      atualizarVazio()
    </script>
  </body>
</html>`,
      },
      {
        id: 'step-5',
        title: 'Salvando com localStorage',
        explanation: `Último passo: salvar as tarefas no navegador para que **não se percam ao recarregar a página!**

Vamos usar o \`localStorage\` para persistir os dados.

**Estratégia:**
1. Guardar um array de objetos \`{ texto, feita }\` no localStorage
2. Ao adicionar/deletar/marcar: atualizar o array e salvar
3. Ao carregar a página: ler o localStorage e renderizar

\`\`\`js
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function salvar() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function renderizar() {
  lista.innerHTML = ''
  tarefas.forEach((t, i) => {
    const li = document.createElement('li')
    li.className = 'item' + (t.feita ? ' feita' : '')
    li.dataset.index = i
    li.innerHTML = '<span class="item-texto">' + t.texto + '</span><button class="btn-del">🗑</button>'
    lista.appendChild(li)
  })
  atualizarVazio()
  atualizarContador()
}

// Adapte adicionarTarefa:
function adicionarTarefa() {
  const texto = input.value.trim(); if (!texto) return
  tarefas.push({ texto, feita: false })
  salvar(); renderizar(); input.value = ''
}

// Adapte o event delegation:
lista.addEventListener('click', function(e) {
  const item = e.target.closest('.item'); if (!item) return
  const i = parseInt(item.dataset.index)
  if (e.target.classList.contains('btn-del')) {
    tarefas.splice(i, 1)
  } else {
    tarefas[i].feita = !tarefas[i].feita
  }
  salvar(); renderizar()
})

renderizar() // carrega ao iniciar
\`\`\`

**Parabéns — seu to-do list completo está pronto! 🎉**`,
        starterCode: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 4px; }
      #contador { color: var(--cinza); font-size: 14px; margin-bottom: 24px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
      .item { background: white; padding: 14px 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); cursor: pointer; }
      .item-texto { flex: 1; font-size: 15px; transition: all 0.2s; }
      .btn-del { background: none; border: none; cursor: pointer; font-size: 16px; opacity: 0.4; }
      .item.feita .item-texto { text-decoration: line-through; color: var(--cinza); }
      .item.feita { opacity: 0.7; }
    </style>
  </head>
  <body>
    <div class="app">
      <h1>Minhas Tarefas</h1>
      <p id="contador">0 tarefas pendentes</p>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
    <script>
      /* Reescreva o JavaScript usando localStorage */

    </script>
  </body>
</html>`,
        validate: (doc) => {
          const scripts = doc.querySelectorAll('script')
          for (const s of scripts) {
            if (s.textContent.includes('localStorage') && s.textContent.includes('JSON.stringify')) return true
          }
          return false
        },
        hint: 'let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; function salvar(){ localStorage.setItem("tarefas", JSON.stringify(tarefas)); } Ao adicionar: tarefas.push({texto, feita: false}); salvar(); renderizar();',
        solution: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" /><title>Lista de Tarefas</title>
    <style>
      :root { --verde: #10b981; --bg: #f0fdf4; --texto: #1e293b; --cinza: #94a3b8; }
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: var(--bg); font-family: sans-serif; min-height: 100vh; padding: 40px 20px; }
      .app { max-width: 480px; margin: 0 auto; }
      h1 { font-size: 28px; font-weight: 800; color: var(--texto); margin-bottom: 4px; }
      #contador { color: var(--cinza); font-size: 14px; margin-bottom: 24px; }
      .form-add { display: flex; gap: 10px; margin-bottom: 20px; }
      #input-tarefa { flex: 1; padding: 12px 16px; border: 2px solid #e2e8f0; border-radius: 10px; font-size: 15px; outline: none; }
      #input-tarefa:focus { border-color: var(--verde); }
      #btn-add { padding: 12px 20px; background: var(--verde); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer; }
      #lista-tarefas { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 8px; }
      #vazio { text-align: center; color: var(--cinza); padding: 40px 0; }
      .item { background: white; padding: 14px 16px; border-radius: 10px; display: flex; align-items: center; gap: 12px; box-shadow: 0 1px 4px rgba(0,0,0,0.06); cursor: pointer; }
      .item-texto { flex: 1; font-size: 15px; transition: all 0.2s; }
      .btn-del { background: none; border: none; cursor: pointer; font-size: 16px; opacity: 0.4; }
      .item.feita .item-texto { text-decoration: line-through; color: var(--cinza); }
      .item.feita { opacity: 0.7; }
    </style>
  </head>
  <body>
    <div class="app">
      <h1>Minhas Tarefas</h1>
      <p id="contador">0 tarefas pendentes</p>
      <div class="form-add">
        <input type="text" id="input-tarefa" placeholder="Nova tarefa..." />
        <button id="btn-add">Adicionar</button>
      </div>
      <ul id="lista-tarefas"></ul>
      <p id="vazio">Nenhuma tarefa ainda. Adicione uma acima!</p>
    </div>
    <script>
      const input = document.getElementById('input-tarefa')
      const lista = document.getElementById('lista-tarefas')
      const vazio = document.getElementById('vazio')
      const contador = document.getElementById('contador')
      let tarefas = JSON.parse(localStorage.getItem('tarefas_app')) || []
      function salvar() { localStorage.setItem('tarefas_app', JSON.stringify(tarefas)) }
      function atualizarVazio() { vazio.style.display = tarefas.length === 0 ? 'block' : 'none' }
      function atualizarContador() {
        const p = tarefas.filter(t => !t.feita).length
        contador.textContent = p + (p !== 1 ? ' tarefas pendentes' : ' tarefa pendente')
      }
      function renderizar() {
        lista.innerHTML = ''
        tarefas.forEach((t, i) => {
          const li = document.createElement('li')
          li.className = 'item' + (t.feita ? ' feita' : '')
          li.dataset.index = i
          li.innerHTML = '<span class="item-texto">' + t.texto + '</span><button class="btn-del">🗑</button>'
          lista.appendChild(li)
        })
        atualizarVazio(); atualizarContador()
      }
      function adicionarTarefa() {
        const texto = input.value.trim(); if (!texto) return
        tarefas.push({ texto, feita: false }); salvar(); renderizar(); input.value = ''
      }
      document.getElementById('btn-add').addEventListener('click', adicionarTarefa)
      input.addEventListener('keydown', e => { if (e.key === 'Enter') adicionarTarefa() })
      lista.addEventListener('click', function(e) {
        const item = e.target.closest('.item'); if (!item) return
        const i = parseInt(item.dataset.index)
        if (e.target.classList.contains('btn-del')) { tarefas.splice(i, 1) }
        else { tarefas[i].feita = !tarefas[i].feita }
        salvar(); renderizar()
      })
      renderizar()
    </script>
  </body>
</html>`,
      },
    ],
  },
  {
    id: 'portfolio-vscode',
    type: 'local',
    title: 'Portfólio Pessoal',
    subtitle: 'Crie seu portfólio do zero no VSCode e publique online.',
    description: 'Construa um portfólio profissional com HTML e CSS no seu próprio computador, usando o VSCode como editor. Cada passo você executa localmente.',
    level: 'Iniciante',
    tags: ['HTML', 'CSS', 'VSCode'],
    time: '1h',
    color: '#8b5cf6',
    icon: '💼',
    steps: [
      {
        id: 'step-1',
        title: 'Instale o VSCode e crie a pasta do projeto',
        explanation: `Vamos começar do zero, igual a um dev de verdade.

**1. Instale o VSCode**

Acesse **code.visualstudio.com** e baixe a versão para o seu sistema operacional. A instalação é simples — avance em tudo.

**2. Crie uma pasta para o projeto**

Crie uma pasta chamada \`meu-portfolio\` em algum lugar fácil de achar (Área de Trabalho, Documentos, etc.).

**3. Abra a pasta no VSCode**

Abra o VSCode, vá em **File → Open Folder** (ou arraste a pasta para o VSCode). Você vai ver a pasta no painel lateral esquerdo.

**4. Crie o arquivo principal**

No painel lateral, clique no ícone de **novo arquivo** e crie um arquivo chamado \`index.html\`.

Pronto! Sua estrutura inicial está criada.`,
        hint: 'Se não encontrar o ícone de novo arquivo, clique com o botão direito dentro do painel lateral e escolha "New File".',
        snippets: [],
      },
      {
        id: 'step-2',
        title: 'Escreva a estrutura HTML base',
        explanation: `Com o \`index.html\` aberto no VSCode, vamos escrever a estrutura inicial.

**Atalho útil:** dentro do arquivo vazio, digite \`!\` e aperte **Tab** — o VSCode gera automaticamente o esqueleto HTML completo.

Ou escreva manualmente o código abaixo. Substitua "Seu Nome" pelo seu nome real.`,
        hint: 'O atalho ! + Tab funciona porque o VSCode tem o Emmet integrado. Muito usado no dia a dia.',
        snippets: [
          {
            label: 'index.html',
            language: 'html',
            code: `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfólio — Seu Nome</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>

    <header>
      <h1>Seu Nome</h1>
      <p>Desenvolvedor(a) Front-end em formação</p>
    </header>

    <main>
      <section id="sobre">
        <h2>Sobre mim</h2>
        <p>Escreva aqui um parágrafo sobre você.</p>
      </section>

      <section id="projetos">
        <h2>Projetos</h2>
        <p>Em breve...</p>
      </section>

      <section id="contato">
        <h2>Contato</h2>
        <p>seuemail@exemplo.com</p>
      </section>
    </main>

    <footer>
      <p>Feito com HTML e CSS por Seu Nome</p>
    </footer>

  </body>
</html>`,
          },
        ],
      },
      {
        id: 'step-3',
        title: 'Abra no navegador e instale o Live Server',
        explanation: `Agora vamos ver o resultado no navegador — e configurar atualização automática.

**Ver no navegador (sem extensão):**

Clique duas vezes no arquivo \`index.html\` no seu explorador de arquivos. Ele vai abrir no browser.

**Instalar o Live Server (recomendado):**

O Live Server atualiza o browser automaticamente toda vez que você salva o arquivo — igual ao que acontece nessa plataforma.

1. No VSCode, vá em **Extensions** (ícone de blocos no painel esquerdo, ou \`Ctrl+Shift+X\`)
2. Pesquise **Live Server** (por Ritwick Dey)
3. Clique em **Install**
4. Após instalar, clique com botão direito no \`index.html\` no painel lateral → **Open with Live Server**

Uma aba vai abrir no browser com seu site. Qualquer alteração que você salvar (\`Ctrl+S\`) atualiza automaticamente.`,
        hint: 'Atalho para salvar: Ctrl+S (Windows/Linux) ou Cmd+S (Mac). Acostume-se a salvar com frequência.',
        snippets: [],
      },
      {
        id: 'step-4',
        title: 'Crie o arquivo style.css e estilize o header',
        explanation: `Crie um novo arquivo chamado \`style.css\` na mesma pasta do \`index.html\`.

Adicione os estilos abaixo. Fique à vontade para mudar as cores — use qualquer cor hexadecimal que preferir.

Após colar o código, salve com \`Ctrl+S\` e veja a transformação no browser.`,
        hint: 'Quer escolher cores bonitas? Acesse coolors.co para gerar paletas harmoniosas.',
        snippets: [
          {
            label: 'style.css',
            language: 'css',
            code: `/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
  line-height: 1.6;
}

/* Header */
header {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  text-align: center;
  padding: 60px 20px;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 8px;
}

header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Main */
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* Sections */
section h2 {
  font-size: 1.5rem;
  color: #3b82f6;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e2e8f0;
}

/* Footer */
footer {
  text-align: center;
  padding: 24px;
  font-size: 0.875rem;
  color: #94a3b8;
  border-top: 1px solid #e2e8f0;
}`,
          },
        ],
      },
      {
        id: 'step-5',
        title: 'Adicione seus projetos com cards',
        explanation: `Vamos transformar a seção de projetos em algo visual — cards que mostram seus projetos.

**No \`index.html\`**, substitua a seção \`#projetos\` pelo código abaixo (coloque seus próprios projetos ou use os exemplos por enquanto).

**No \`style.css\`**, adicione os estilos dos cards no final do arquivo.`,
        hint: 'Não tem projetos reais ainda? Use os projetos que você fez aqui na plataforma (Cartão de Apresentação, Calculadora, Lista de Tarefas).',
        snippets: [
          {
            label: 'index.html — seção projetos',
            language: 'html',
            code: `<section id="projetos">
  <h2>Projetos</h2>
  <div class="projetos-grid">

    <div class="projeto-card">
      <h3>Cartão de Apresentação</h3>
      <p>Cartão digital com HTML e CSS puro.</p>
      <div class="projeto-tags">
        <span>HTML</span>
        <span>CSS</span>
      </div>
    </div>

    <div class="projeto-card">
      <h3>Calculadora</h3>
      <p>Calculadora funcional com operações básicas.</p>
      <div class="projeto-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
      </div>
    </div>

    <div class="projeto-card">
      <h3>Lista de Tarefas</h3>
      <p>App para gerenciar tarefas com localStorage.</p>
      <div class="projeto-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
      </div>
    </div>

  </div>
</section>`,
          },
          {
            label: 'style.css — cards (adicione no final)',
            language: 'css',
            code: `.projetos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.projeto-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: transform 0.2s, box-shadow 0.2s;
}

.projeto-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.10);
}

.projeto-card h3 {
  font-size: 1rem;
  color: #1e293b;
}

.projeto-card p {
  font-size: 0.875rem;
  color: #64748b;
  flex: 1;
}

.projeto-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.projeto-tags span {
  font-size: 0.75rem;
  font-weight: 600;
  background: #ede9fe;
  color: #7c3aed;
  padding: 2px 10px;
  border-radius: 999px;
}`,
          },
        ],
      },
      {
        id: 'step-6',
        title: 'Personalize e finalize o portfólio',
        explanation: `Agora é hora de colocar sua identidade no portfólio. Faça as seguintes personalizações:

**1. Informações reais**
- Troque "Seu Nome" pelo seu nome
- Escreva uma bio real na seção "Sobre mim"
- Coloque seu e-mail real na seção "Contato"

**2. Foto de perfil (opcional)**
Adicione uma foto sua no header. Crie uma pasta \`imagens\` dentro do projeto, coloque sua foto lá e adicione no HTML:

**3. Responsividade**
Adicione no \`style.css\` para funcionar bem no celular:

**4. Abra e confira tudo no browser antes de considerar pronto!**`,
        hint: 'Quer publicar online de graça? O GitHub Pages permite hospedar sites estáticos sem custo. Pesquise "github pages tutorial" quando estiver pronto.',
        snippets: [
          {
            label: 'Foto de perfil no header',
            language: 'html',
            code: `<!-- Adicione dentro do <header>, antes do <h1> -->
<img
  src="imagens/foto.jpg"
  alt="Foto de Seu Nome"
  style="width:100px; height:100px; border-radius:50%; object-fit:cover; border:3px solid white; margin-bottom:16px;"
/>`,
          },
          {
            label: 'Responsividade (adicione no final do style.css)',
            language: 'css',
            code: `@media (max-width: 600px) {
  header h1 {
    font-size: 1.8rem;
  }

  .projetos-grid {
    grid-template-columns: 1fr;
  }

  main {
    padding: 24px 16px;
  }
}`,
          },
        ],
      },
    ],
  },
]
