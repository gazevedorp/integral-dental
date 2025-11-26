import { motion } from 'framer-motion';
import { Shield, CheckCircle, ArrowRight, Building2, Users, TrendingUp, Award, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlanoEmpresarial = () => {
  const plans = [
    {
      icon: Shield,
      name: 'Integral Master',
      badge: 'PREMIUM',
      subtitle: 'Empresas que valorizam excelência',
      description: 'Solução completa para empresas que desejam oferecer aos colaboradores atendimento odontológico de alta qualidade.',
      features: [
        'Cobertura total do Rol de Procedimentos da ANS',
        'Consultas, urgências, limpezas, restaurações',
        'Tratamentos de canal, extrações e radiografias',
        'Atendimento em clínicas credenciadas Integral Dental',
        'Adesão simplificada com inclusão de dependentes',
        'Planos sem coparticipação'
      ],
      highlight: 'Ideal para empresas que valorizam a qualidade e desejam um benefício completo.'
    },
    {
      icon: Shield,
      name: 'Integral Sênior',
      badge: 'CUSTO-BENEFÍCIO',
      subtitle: 'Qualidade com economia',
      description: 'Solução completa com cobertura integral e condições diferenciadas.',
      features: [
        'Cobertura total do Rol de Procedimentos da ANS',
        'Consultas, urgências, limpezas, restaurações',
        'Tratamentos de canal, extrações e radiografias',
        'Atendimento em clínicas credenciadas exclusivas',
        'Adesão simplificada com inclusão de dependentes',
        'Coparticipação apenas em alguns procedimentos'
      ],
      highlight: 'Ideal para empresas que desejam benefício robusto com excelente custo-benefício.'
    }
  ];

  const benefits = [
    {
      icon: Building2,
      title: 'Para sua Empresa',
      description: 'Benefício valorizado pelos colaboradores que aumenta a satisfação e retenção de talentos'
    },
    {
      icon: Users,
      title: 'Para seus Colaboradores',
      description: 'Acesso facilitado a cuidados odontológicos de qualidade para toda a família'
    },
    {
      icon: TrendingUp,
      title: 'Excelente Custo-Benefício',
      description: 'Investimento acessível com retorno em produtividade e bem-estar'
    },
    {
      icon: Award,
      title: 'Ampla Rede Credenciada',
      description: 'Mais de 1.000 clínicas parceiras em todo o Brasil'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary via-primary-dark to-primary-darker overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <Shield className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Planos Empresariais</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Cuide da Saúde Bucal dos seus{' '}
                <span className="text-yellow-300">Colaboradores</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Planos odontológicos empresariais completos, com ampla rede credenciada
                e excelente custo-benefício. Ideal para empresas, sindicatos e associações.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#planos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Ver Planos
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Por que escolher nossos{' '}
              <span className="text-primary">Planos Empresariais?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios que fazem a diferença para sua empresa e seus colaboradores
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Conheça nossos{' '}
              <span className="text-primary">Planos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para sua empresa. Todos com cobertura total do Rol de Procedimentos da ANS.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                {/* Card */}
                <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all h-full flex flex-col">
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl shadow-lg font-black text-sm">
                    {plan.badge}
                  </div>

                  {/* Icon */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <plan.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-lg text-primary font-bold mb-4">{plan.subtitle}</p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlight */}
                  <div className="bg-primary/5 rounded-xl p-6 mb-8">
                    <p className="text-base text-gray-700 italic leading-relaxed">{plan.highlight}</p>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=5516988326932"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-5 rounded-xl font-bold text-lg text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    Solicitar Proposta
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* External Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <motion.a
              href="https://www.integraldental.com.br/empresarial/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl"
            >
              Saiba Mais no Site Oficial
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Pronto para oferecer o melhor{' '}
              <span className="text-yellow-300">benefício</span> aos seus colaboradores?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Entre em contato conosco e solicite uma proposta personalizada para sua empresa
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="https://api.whatsapp.com/send?phone=5516988326932"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Solicitar Proposta
              </motion.a>

              <motion.a
                href="mailto:contato@integraldental.com.br"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                contato@integraldental.com.br
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanoEmpresarial;
