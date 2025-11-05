import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Duvidas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Sobre o Plano',
      questions: [
        {
          q: 'O que é o Senior?',
          a: 'Plano odontológico com mais de 80 procedimentos cobertos e coparticipações.'
        },
        {
          q: 'Antes de contratar o que devo fazer?',
          a: 'Basta entrar em contato conosco pelo (16) 2102-7888 ou através de nosso site, munido de CPF e RG e um comprovante de residência.'
        },
        {
          q: 'Quando receberei minha carteirinha?',
          a: 'A Integral disponibiliza a carteirinha de forma virtual, através do nosso APP e imediatamente após a adesão.'
        },
        {
          q: 'Qual é a data de vencimento para minha fatura referente ao plano?',
          a: 'A Integral oferece três opções de vencimento, sendo dia 10, 15 ou 20 de cada mês.'
        },
        {
          q: 'Quais são os possíveis métodos de pagamento para o plano?',
          a: 'Contamos com pagamento via boleto bancário ou cartão de crédito e débito.'
        },
        {
          q: 'Quem pode ser considerado dependente?',
          a: 'Dependentes seriam qualquer pessoa com vínculo familiar e também possibilitamos a inclusão de agregados como avós, tios, sobrinhos, netos, etc.'
        },
        {
          q: 'Como faço alteração cadastral?',
          a: 'Quaisquer alterações pedimos que seja feito um contato através de nossos canais de comunicação, como telefone, email ou site.'
        }
      ]
    },
    {
      category: 'Sobre Atendimento',
      questions: [
        {
          q: 'Como faço para marcar uma consulta?',
          a: 'Entre em contato diretamente com o dentista credenciado de sua preferência, apresentando sua carteirinha e documento de identificação.'
        },
        {
          q: 'Posso escolher o dentista?',
          a: 'Sim! Você tem liberdade total para escolher qualquer dentista da nossa rede credenciada.'
        },
        {
          q: 'O que fazer em caso de emergência?',
          a: 'Em casos de emergência, procure imediatamente um dentista da rede credenciada. Nosso plano cobre atendimentos de urgência 24 horas.'
        },
        {
          q: 'Como consulto a rede credenciada?',
          a: 'Acesse nossa página de Rede Credenciada no menu principal ou entre em contato conosco pelo telefone (16) 2102-7888.'
        }
      ]
    },
    {
      category: 'Sobre Cobertura',
      questions: [
        {
          q: 'Quais procedimentos estão cobertos?',
          a: 'Nossos planos cobrem 100% do ROL de Procedimentos da ANS, incluindo consultas, limpeza, radiografias, restaurações, tratamento de canal, cirurgias e muito mais.'
        },
        {
          q: 'Existe carência?',
          a: 'Sim, alguns procedimentos possuem período de carência conforme regulamentação da ANS. Consulte nossa central para mais informações sobre carências específicas.'
        },
        {
          q: 'O plano cobre ortodontia?',
          a: 'Sim! Temos o Plano Ortodontia (Ortoplus) específico para tratamento ortodôntico com aparelhos fixos e móveis.'
        },
        {
          q: 'Próteses e implantes estão cobertos?',
          a: 'A cobertura de próteses e implantes depende do plano contratado. Entre em contato para conhecer as opções disponíveis.'
        }
      ]
    },
    {
      category: 'Sobre Pagamento e Cancelamento',
      questions: [
        {
          q: 'Como faço para cancelar meu plano?',
          a: 'Para cancelamento, entre em contato através de nossos canais de atendimento: telefone (16) 2102-7888, email contato@integraldental.com.br ou através do nosso site.'
        },
        {
          q: 'O que acontece se eu atrasar o pagamento?',
          a: 'Em caso de atraso no pagamento, o plano pode ser suspenso temporariamente. Recomendamos manter as mensalidades em dia para garantir a continuidade do seu atendimento.'
        },
        {
          q: 'Posso mudar a forma de pagamento?',
          a: 'Sim! Entre em contato conosco para solicitar a alteração da forma de pagamento de boleto para cartão ou vice-versa.'
        },
        {
          q: 'Como solicito segunda via do boleto?',
          a: 'A segunda via pode ser solicitada através do nosso site, por telefone ou por email. O boleto será enviado rapidamente.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6"
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-small font-bold text-primary">Central de Ajuda</span>
            </motion.div>

            <h1 className="text-h1 font-black text-gray-900 mb-6">
              Dúvidas{' '}
              <span className="gradient-text">Frequentes</span>
            </h1>

            <p className="text-lead text-gray-600 leading-relaxed">
              Encontre respostas rápidas para as perguntas mais comuns sobre nossos planos e serviços
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h2 className="text-h3 font-black text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq) => {
                    const currentIndex = globalIndex++;
                    const isOpen = openIndex === currentIndex;

                    return (
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
                      >
                        <button
                          onClick={() => toggleFAQ(currentIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                        >
                          <span className="text-h5 font-bold text-gray-900 pr-4">
                            {faq.q}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-5 bg-gray-50 border-t-2 border-gray-100">
                            <p className="text-body text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Duvidas;
