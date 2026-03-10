import { motion } from 'framer-motion';
import { Phone, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
import { sendEmail, isValidEmail, isValidPhone } from '../../utils/sendEmail';
import TurnstileWidget from '../TurnstileWidget';

const ContactSection = () => {
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
      // Finge sucesso para não alertar o bot
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
      assunto: formData.get('assunto') as string,
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
        formType: 'contact',
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
        setErrorMessage(result.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Erro inesperado. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-32 bg-white relative overflow-hidden scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary">Entre em Contato</span>
          </div>

          <h2 className="text-h2 font-black text-gray-900 mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lead text-gray-600 max-w-2xl mx-auto">
            Preencha o formulário ou entre em contato diretamente pelo WhatsApp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-h3 font-black text-gray-900 mb-6">Fale Conosco</h3>
              <p className="text-body text-gray-600 leading-relaxed mb-8">
                Nossa equipe está pronta para atendê-lo e esclarecer todas as suas dúvidas sobre nossos planos odontológicos.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+551621027888"
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-small text-gray-600 mb-1">Atendimento ao Cliente</p>
                  <p className="text-h4 font-black text-gray-900">(16) 2102-7888</p>
                </div>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=5516988326932"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-primary/5 rounded-2xl hover:bg-primary/10 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-small text-gray-600 mb-1">WhatsApp</p>
                  <p className="text-h4 font-black text-gray-900">(16) 98832-6932</p>
                </div>
              </a>

              <a
                href="mailto:contato@integraldental.com.br"
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-small text-gray-600 mb-1">E-mail</p>
                  <p className="text-body font-black text-gray-900 break-all">contato@integraldental.com.br</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border-2 border-gray-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Honeypot - campo invisível anti-bot */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="nome" className="block text-sm font-bold text-gray-900 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    E-mail
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
                  <label htmlFor="telefone" className="block text-sm font-bold text-gray-900 mb-2">
                    Telefone
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
                <label htmlFor="assunto" className="block text-sm font-bold text-gray-900 mb-2">
                  Assunto
                </label>
                <select
                  id="assunto"
                  name="assunto"
                  required
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="plano-empresarial">Plano Empresarial</option>
                  <option value="plano-familiar">Plano Familiar</option>
                  <option value="ortodontia">Ortodontia</option>
                  <option value="duvidas">Dúvidas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-bold text-gray-900 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos como podemos ajudá-lo..."
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
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
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
                    Enviar Mensagem
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
