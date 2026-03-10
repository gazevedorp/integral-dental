import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, Clock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import { sendEmail, isValidEmail, isValidPhone } from '../utils/sendEmail';
import GoogleTagManager from '../components/GoogleTagManager';
import TurnstileWidget from '../components/TurnstileWidget';

const CanalEtico = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const responsabilidades = [
    'Receber demandas (reclamações, consultas, sugestões e elogios) relacionadas ao desempenho das diversas áreas da Integral',
    'Propor recomendações para promover qualidade e eficiência',
    'Exercer o acompanhamento das ações e do desempenho da Integral'
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check — se preenchido, é bot
    const honeypot = formData.get('website') as string;
    if (honeypot) {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
      return;
    }

    // Validação de CAPTCHA
    if (!turnstileToken) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, complete a verificação de segurança.');
      setIsSubmitting(false);
      return;
    }

    const data = {
      nome: formData.get('nome') as string,
      email: formData.get('email') as string,
      telefone: formData.get('telefone') as string,
      tipo: formData.get('tipo') as string,
      mensagem: formData.get('mensagem') as string,
    };

    // Validação de email e telefone
    if (!isValidEmail(data.email)) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido.');
      setIsSubmitting(false);
      return;
    }

    if (!isValidPhone(data.telefone)) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, insira um telefone válido (10 ou 11 dígitos).');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await sendEmail({
        formType: 'canalEtico',
        data,
        turnstileToken,
      });

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
        setTurnstileToken(null);
        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Erro ao enviar manifestação');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <GoogleTagManager />
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
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-bold text-primary">Canal de Comunicação</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6">
              Canal Ético{' '}
              <span className="gradient-text">Integral</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Seu canal direto para sugestões, elogios, reclamações e esclarecimentos.
              Estamos aqui para ouvir você e melhorar continuamente nossos serviços.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O que é o Canal Ético */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              <div>
                <h2 className="text-4xl font-black text-gray-900 mb-6">
                  O que é o Canal Ético?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  O Canal Ético da Integral Dental é um canal de comunicação independente
                  criado para ouvir você e promover melhorias contínuas em nossos serviços.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Através do Canal Ético, você pode registrar reclamações, sugestões, elogios
                  e dúvidas, contribuindo diretamente para o aprimoramento da gestão
                  institucional e desenvolvimento da organização.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-10 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-black">Prazo de Resposta</h3>
                </div>
                <p className="text-4xl font-black mb-3">7 dias úteis</p>
                <p className="text-lg text-white/90">
                  A partir da data de registro no Canal Ético, você receberá um retorno
                  sobre sua demanda.
                </p>
              </div>
            </motion.div>

            {/* Responsabilidades */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                Responsabilidades do Canal Ético
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {responsabilidades.map((resp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {resp}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Entre em Contato com o Canal Ético
              </h2>
              <p className="text-xl text-gray-600">
                Escolha o canal mais conveniente para você
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.a
                href="tel:+551621027877"
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Telefone do Canal Ético</h3>
                <p className="text-3xl font-black text-primary mb-2">(16) 2102-7877</p>
                <p className="text-gray-600">Atendimento em horário comercial</p>
              </motion.a>

              <motion.a
                href="mailto:contato@integraldental.com.br"
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">E-mail</h3>
                <p className="text-lg font-black text-primary mb-2">
                  administracao@integraldental.com.br
                </p>
                <p className="text-gray-600">Resposta em até 7 dias úteis</p>
              </motion.a>
            </div>

            {/* Atendimento Adicional */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border-2 border-primary/20">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                Atendimento ao Cliente
              </h3>
              <p className="text-gray-700 mb-6">
                Para dúvidas gerais e atendimento rápido, você também pode entrar em contato
                com nossa Central de Atendimento:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+551621027888"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-all"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  (16) 2102-7888
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5516988326932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-bold text-gray-900 hover:bg-gray-50 transition-all"
                >
                  <MessageSquare className="w-5 h-5 text-primary" />
                  (16) 98832-6932
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Formulário Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                Registre sua Manifestação
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário abaixo e entraremos em contato em até 7 dias úteis
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border-2 border-gray-100">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Honeypot - campo invisível anti-bot */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="ce-website">Website</label>
                  <input
                    type="text"
                    id="ce-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-bold text-gray-900 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-bold text-gray-900 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="tipo" className="block text-sm font-bold text-gray-900 mb-2">
                    Tipo de Manifestação *
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="elogio">Elogio</option>
                    <option value="duvida">Dúvida</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-bold text-gray-900 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Descreva sua manifestação de forma detalhada..."
                  />
                </div>

                {/* Cloudflare Turnstile CAPTCHA */}
                <TurnstileWidget
                  onVerify={handleTurnstileVerify}
                  onExpire={handleTurnstileExpire}
                />

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-sm font-semibold text-green-800">
                      Manifestação enviada com sucesso! Retornaremos em até 7 dias úteis.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 bg-red-50 border-2 border-red-200 rounded-xl"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <p className="text-sm font-semibold text-red-800">
                      {errorMessage}
                    </p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full bg-gradient-to-r from-primary to-primary-dark text-white py-5 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Manifestação
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  * Campos obrigatórios. Sua manifestação será respondida em até 7 dias úteis.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  );
};

export default CanalEtico;
