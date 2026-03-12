import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TermosDeUso.css'

export default function TermosDeUso() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main className="termos">
        <div className="termos__container">
          <div className="termos__header">
            <p className="termos__eyebrow">Legal</p>
            <h1 className="termos__title">Termos de Uso</h1>
            <p className="termos__updated">Última atualização: março de 2026</p>
          </div>

          <div className="termos__content">

            <section className="termos__section">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao acessar ou utilizar a plataforma <strong>Curso Iniciante em Programação</strong>
                {' '}("Plataforma"), você concorda integralmente com estes Termos de Uso. Se não concordar
                com qualquer disposição, não utilize a Plataforma.
              </p>
              <p>
                Estes termos regem a relação entre você ("Usuário") e o responsável pela Plataforma
                ("Curso Iniciante"), aplicando-se a todas as páginas, funcionalidades e conteúdos
                disponibilizados.
              </p>
            </section>

            <section className="termos__section">
              <h2>2. Descrição do Serviço</h2>
              <p>
                O Curso Iniciante em Programação é uma plataforma educacional online que oferece:
              </p>
              <ul>
                <li>21 módulos progressivos de HTML, CSS e JavaScript</li>
                <li>Mais de 200 tarefas interativas (quiz, código, drag & drop, entre outros)</li>
                <li>Sistema de gamificação com XP, streaks e conquistas</li>
                <li>Jogos educativos, quiz interativo e modo foco</li>
                <li>Certificado digital de conclusão</li>
                <li>Acesso vitalício ao conteúdo adquirido</li>
              </ul>
            </section>

            <section className="termos__section">
              <h2>3. Cadastro e Conta</h2>
              <p>
                Para acessar o conteúdo completo da Plataforma, é necessário criar uma conta com
                nome, endereço de e-mail válido e senha. Você é responsável por:
              </p>
              <ul>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Todas as atividades realizadas com sua conta</li>
                <li>Notificar imediatamente o Curso Iniciante em caso de acesso não autorizado</li>
              </ul>
              <p>
                É proibido compartilhar sua conta com terceiros. Cada acesso é pessoal e
                intransferível. O Curso Iniciante reserva-se o direito de encerrar contas que
                violem esta regra sem direito a reembolso.
              </p>
            </section>

            <section className="termos__section">
              <h2>4. Pagamento e Acesso</h2>
              <p>
                O acesso ao curso é concedido mediante pagamento único de <strong>R$&nbsp;39,99</strong>,
                processado via Mercado Pago (cartão de crédito, débito, PIX ou boleto).
              </p>
              <ul>
                <li>O pagamento é único — sem mensalidades ou cobranças recorrentes</li>
                <li>O acesso é liberado imediatamente após a confirmação do pagamento</li>
                <li>Pagamentos via PIX são confirmados em até 30 minutos</li>
                <li>Em caso de pagamento por boleto, o acesso é liberado após compensação bancária (até 3 dias úteis)</li>
              </ul>
              <p>
                O Curso Iniciante não armazena dados de cartão de crédito. Todas as transações
                financeiras são processadas diretamente pelo Mercado Pago, sujeitas aos termos e
                políticas desta plataforma de pagamentos.
              </p>
            </section>

            <section className="termos__section">
              <h2>5. Garantia e Reembolso</h2>
              <p>
                O Curso Iniciante oferece <strong>garantia incondicional de 7 (sete) dias</strong> a
                partir da data da compra. Se por qualquer motivo você não estiver satisfeito,
                devolveremos 100% do valor pago, sem perguntas.
              </p>
              <p>
                Para solicitar o reembolso, entre em contato pelo WhatsApp ou pelo e-mail de suporte
                dentro do prazo de 7 dias. O valor será estornado em até 10 dias úteis, conforme
                a política do meio de pagamento utilizado.
              </p>
              <p>
                Após o período de 7 dias, não são realizados reembolsos, salvo nas hipóteses
                previstas no Código de Defesa do Consumidor (Lei nº 8.078/1990).
              </p>
            </section>

            <section className="termos__section">
              <h2>6. Acesso Vitalício</h2>
              <p>
                O acesso ao conteúdo adquirido é <strong>vitalício</strong>, enquanto a Plataforma
                estiver em operação. O Curso Iniciante compromete-se a manter o serviço ativo e a
                notificar os usuários com antecedência mínima de 90 (noventa) dias em caso de
                encerramento das atividades.
              </p>
              <p>
                Atualizações de conteúdo e melhorias na plataforma são fornecidas gratuitamente
                aos usuários que já adquiriram o curso.
              </p>
            </section>

            <section className="termos__section">
              <h2>7. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo disponibilizado na Plataforma — incluindo textos, vídeos, imagens,
                código-fonte, layouts, exercícios e materiais didáticos — é de propriedade exclusiva
                do Curso Iniciante ou de seus licenciantes, protegido pela legislação de direitos
                autorais (Lei nº 9.610/1998).
              </p>
              <p>
                É <strong>expressamente proibido</strong>:
              </p>
              <ul>
                <li>Reproduzir, copiar ou distribuir o conteúdo sem autorização prévia e por escrito</li>
                <li>Compartilhar o acesso à conta com terceiros</li>
                <li>Revender ou sublicenciar o acesso ao curso</li>
                <li>Utilizar o conteúdo para fins comerciais sem autorização</li>
                <li>Fazer engenharia reversa da plataforma ou de seus sistemas</li>
              </ul>
              <p>
                O Usuário possui licença pessoal, não exclusiva e intransferível para acessar
                e utilizar o conteúdo exclusivamente para fins de aprendizado pessoal.
              </p>
            </section>

            <section className="termos__section">
              <h2>8. Conduta do Usuário</h2>
              <p>
                O Usuário concorda em não utilizar a Plataforma para:
              </p>
              <ul>
                <li>Publicar conteúdo ofensivo, discriminatório, ilegal ou que viole direitos de terceiros</li>
                <li>Tentar burlar sistemas de segurança ou proteção da Plataforma</li>
                <li>Interferir no funcionamento normal do serviço para outros usuários</li>
                <li>Utilizar scripts, bots ou ferramentas automatizadas sem autorização</li>
                <li>Fazer uso indevido dos comentários e notas para divulgação de spam</li>
              </ul>
              <p>
                O descumprimento destas regras pode resultar no encerramento imediato da conta,
                sem direito a reembolso após o período de garantia.
              </p>
            </section>

            <section className="termos__section">
              <h2>9. Privacidade e Dados</h2>
              <p>
                O Curso Iniciante coleta e utiliza dados pessoais conforme descrito na Política de
                Privacidade. Em resumo:
              </p>
              <ul>
                <li><strong>Dados coletados:</strong> nome, e-mail, dados de progresso no curso e informações de pagamento (processadas pelo Mercado Pago)</li>
                <li><strong>Finalidade:</strong> prestação do serviço, suporte ao usuário, melhorias na plataforma e envio de comunicações relacionadas ao curso</li>
                <li><strong>Armazenamento:</strong> dados de autenticação armazenados via Supabase; dados de progresso e preferências armazenados localmente no seu navegador (localStorage)</li>
                <li><strong>Compartilhamento:</strong> seus dados não são vendidos ou compartilhados com terceiros, exceto quando necessário para a prestação do serviço (ex.: processamento de pagamentos)</li>
              </ul>
              <p>
                Em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018),
                você pode solicitar acesso, correção ou exclusão de seus dados pessoais a qualquer
                momento pelo e-mail de suporte.
              </p>
            </section>

            <section className="termos__section">
              <h2>10. Disponibilidade do Serviço</h2>
              <p>
                O Curso Iniciante envida esforços para manter a Plataforma disponível 24 horas por
                dia, 7 dias por semana. No entanto, não garantimos disponibilidade ininterrupta,
                podendo ocorrer indisponibilidades decorrentes de:
              </p>
              <ul>
                <li>Manutenções programadas (avisadas com antecedência)</li>
                <li>Falhas de infraestrutura de terceiros (servidores, provedores de internet)</li>
                <li>Casos fortuitos ou de força maior</li>
              </ul>
            </section>

            <section className="termos__section">
              <h2>11. Limitação de Responsabilidade</h2>
              <p>
                O conteúdo da Plataforma tem finalidade exclusivamente educacional. O Curso Iniciante
                não garante empregabilidade, resultado financeiro ou qualquer outro resultado
                específico decorrente do uso do curso.
              </p>
              <p>
                Em nenhuma hipótese o Curso Iniciante será responsável por danos indiretos,
                incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso
                da Plataforma, além do valor pago pelo Usuário.
              </p>
            </section>

            <section className="termos__section">
              <h2>12. Alterações nos Termos</h2>
              <p>
                O Curso Iniciante reserva-se o direito de alterar estes Termos de Uso a qualquer
                tempo. Alterações relevantes serão comunicadas por e-mail com antecedência mínima
                de 15 (quinze) dias. O uso continuado da Plataforma após as alterações implica
                aceitação dos novos termos.
              </p>
            </section>

            <section className="termos__section">
              <h2>13. Contato e Suporte</h2>
              <p>
                Para dúvidas, suporte ou solicitações relacionadas a estes Termos, entre em contato:
              </p>
              <ul>
                <li><strong>WhatsApp:</strong> disponível no botão de suporte na Plataforma</li>
                <li><strong>Horário de atendimento:</strong> segunda a sexta, das 9h às 18h (horário de Brasília)</li>
              </ul>
            </section>

            <section className="termos__section">
              <h2>14. Lei Aplicável e Foro</h2>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Para dirimir
                quaisquer controvérsias decorrentes destes Termos, fica eleito o foro da comarca
                do domicílio do Usuário, conforme previsto no artigo 101, inciso I, do Código
                de Defesa do Consumidor.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
