import { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TermosDeUso.css'

export default function Privacidade() {
  const sectionsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('termos__section--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionsRef.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main className="termos">
        <div className="termos__container">
          <div className="termos__header">
            <p className="termos__eyebrow">Legal</p>
            <h1 className="termos__title">Política de Privacidade</h1>
            <p className="termos__updated">Última atualização: março de 2026</p>
          </div>

          <div className="termos__content">

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>1. Quem somos</h2>
              <p>
                O <strong>Curso Iniciante em Programação</strong> é uma plataforma educacional online
                responsável pelo tratamento dos dados pessoais descritos nesta Política. Esta Política
                se aplica a todos os usuários da plataforma acessível em{' '}
                <strong>curso-iniciante-na-programacao.vercel.app</strong>.
              </p>
              <p>
                Esta Política foi elaborada em conformidade com a{' '}
                <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>2. Dados que coletamos</h2>
              <p>Coletamos os seguintes dados pessoais:</p>
              <ul>
                <li><strong>Nome completo</strong> — fornecido no cadastro ou via Google</li>
                <li><strong>Endereço de e-mail</strong> — usado para autenticação e comunicações</li>
                <li><strong>Dados de pagamento</strong> — processados diretamente pelo Mercado Pago; não armazenamos dados de cartão</li>
                <li><strong>Dados de progresso</strong> — módulos concluídos, XP, streaks e conquistas, armazenados localmente no seu navegador (localStorage)</li>
                <li><strong>Dados técnicos</strong> — endereço IP e informações de navegador, coletados automaticamente pelo Supabase para segurança</li>
              </ul>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>3. Como usamos seus dados</h2>
              <p>Seus dados são utilizados exclusivamente para:</p>
              <ul>
                <li>Criar e gerenciar sua conta de acesso à plataforma</li>
                <li>Processar e confirmar pagamentos</li>
                <li>Liberar e manter seu acesso ao conteúdo adquirido</li>
                <li>Enviar comunicações relacionadas ao curso (confirmação de compra, recuperação de senha, atualizações importantes)</li>
                <li>Melhorar a experiência da plataforma com base no uso agregado e anônimo</li>
                <li>Cumprir obrigações legais</li>
              </ul>
              <p>
                Não utilizamos seus dados para fins publicitários de terceiros nem os vendemos
                a nenhuma empresa.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>4. Base legal para o tratamento</h2>
              <p>Tratamos seus dados com base nas seguintes hipóteses legais previstas na LGPD:</p>
              <ul>
                <li><strong>Execução de contrato</strong> — para fornecer o serviço que você contratou (art. 7º, V)</li>
                <li><strong>Legítimo interesse</strong> — para segurança da plataforma e melhorias do serviço (art. 7º, IX)</li>
                <li><strong>Cumprimento de obrigação legal</strong> — quando exigido por lei (art. 7º, II)</li>
                <li><strong>Consentimento</strong> — para envio de comunicações opcionais (art. 7º, I)</li>
              </ul>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>5. Armazenamento e segurança</h2>
              <p>
                Os dados de autenticação (nome e e-mail) são armazenados com segurança no{' '}
                <strong>Supabase</strong>, plataforma que segue padrões internacionais de segurança
                (SOC 2 Type II) e criptografia em repouso e em trânsito.
              </p>
              <p>
                Os dados de progresso (módulos concluídos, XP, conquistas) ficam armazenados
                localmente no seu navegador via <strong>localStorage</strong> e não são transmitidos
                para nossos servidores.
              </p>
              <p>
                Os dados de pagamento são processados exclusivamente pelo{' '}
                <strong>Mercado Pago</strong>, certificado PCI DSS. Não temos acesso aos dados
                completos do seu cartão.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>6. Compartilhamento de dados</h2>
              <p>
                Seus dados pessoais podem ser compartilhados apenas nas seguintes situações:
              </p>
              <ul>
                <li><strong>Mercado Pago</strong> — nome e e-mail para processamento do pagamento</li>
                <li><strong>Supabase</strong> — infraestrutura de autenticação e banco de dados</li>
                <li><strong>Autoridades competentes</strong> — quando exigido por lei ou decisão judicial</li>
              </ul>
              <p>
                Não compartilhamos seus dados com terceiros para fins de marketing, publicidade
                ou qualquer finalidade diferente das descritas acima.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>7. Seus direitos (LGPD)</h2>
              <p>Como titular de dados pessoais, você tem direito a:</p>
              <ul>
                <li><strong>Acesso</strong> — solicitar uma cópia dos seus dados pessoais que tratamos</li>
                <li><strong>Correção</strong> — solicitar a correção de dados incompletos ou incorretos</li>
                <li><strong>Exclusão</strong> — solicitar a exclusão dos seus dados, respeitados os prazos legais de retenção</li>
                <li><strong>Portabilidade</strong> — receber seus dados em formato estruturado</li>
                <li><strong>Revogação do consentimento</strong> — retirar consentimentos previamente dados</li>
                <li><strong>Informação</strong> — saber com quais entidades compartilhamos seus dados</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo WhatsApp disponível
                na plataforma ou pelo e-mail de suporte. Respondemos em até 15 dias úteis.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>8. Retenção de dados</h2>
              <p>
                Mantemos seus dados pelo tempo necessário para a prestação do serviço e cumprimento
                de obrigações legais:
              </p>
              <ul>
                <li><strong>Conta ativa:</strong> enquanto sua conta existir na plataforma</li>
                <li><strong>Após exclusão da conta:</strong> até 5 anos para dados fiscais e de pagamento, conforme exigência legal</li>
                <li><strong>Dados de progresso (localStorage):</strong> armazenados no seu dispositivo; são excluídos ao limpar os dados do navegador</li>
              </ul>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>9. Cookies e tecnologias similares</h2>
              <p>
                A plataforma utiliza cookies essenciais para autenticação e manutenção da sessão
                (gerenciados pelo Supabase). Não utilizamos cookies de rastreamento ou publicidade.
              </p>
              <p>
                O localStorage do navegador é usado para armazenar preferências (tema, idioma) e
                dados de progresso do curso. Você pode limpar esses dados a qualquer momento nas
                configurações do navegador.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Alterações
                significativas serão comunicadas por e-mail com antecedência mínima de 15 dias.
                A data da última atualização aparece no topo desta página.
              </p>
            </section>

            <section className="termos__section" ref={el => sectionsRef.current.push(el)}>
              <h2>11. Contato e DPO</h2>
              <p>
                Para dúvidas, solicitações ou reclamações relacionadas ao tratamento dos seus
                dados pessoais, entre em contato:
              </p>
              <ul>
                <li><strong>WhatsApp:</strong> disponível no botão de suporte na Plataforma</li>
                <li><strong>Horário de atendimento:</strong> segunda a sexta, das 9h às 18h (horário de Brasília)</li>
              </ul>
              <p>
                Você também pode apresentar reclamação à{' '}
                <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong> pelo site gov.br/anpd.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
