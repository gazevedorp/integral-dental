import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowRight, Briefcase, DollarSign, Heart, Star, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlanoPME = () => {
  const plan = {
    icon: Users,
    name: 'Integral MEI',
    badge: 'MEI & PME',
    subtitle: 'Para MEI e pequenas empresas',
    description: 'Solução completa para empresas MEI e PME com cobertura e condições diferenciadas.',
    features: [
      'Cobertura total do Rol de Procedimentos da ANS',
      'Consultas, urgências, limpezas, restaurações',
      'Tratamentos de canal, extrações e radiografias',
      'Atendimento em clínicas credenciadas exclusivas',
      'Adesão simplificada com inclusão de dependentes',
      'Apenas 11 procedimentos com coparticipação'
    ],
    highlight: 'Ideal para MEI e PME que desejam benefício com excelente custo-benefício.'
  };

  const benefits = [
    {
      icon: Briefcase,
      title: 'Perfeito para MEI e PME',
      description: 'Plano desenvolvido especialmente para microempreendedores e pequenas empresas'
    },
    {
      icon: DollarSign,
      title: 'Excelente Custo-Benefício',
      description: 'Cobertura completa com condições especiais para pequenos negócios'
    },
    {
      icon: Heart,
      title: 'Cobertura Total ANS',
      description: 'Todos os procedimentos do Rol da ANS com apenas 11 procedimentos com coparticipação'
    },
    {
      icon: Star,
      title: 'Adesão Simplificada',
      description: 'Processo rápido e fácil, com inclusão de dependentes sem complicação'
    }
  ];

  const differentials = [
    'Plano específico para microempreendedores individuais',
    'Condições especiais para pequenas empresas',
    'Rede credenciada exclusiva e de qualidade',
    'Suporte dedicado para MEI e PME',
    'Sem burocracia na contratação',
    'Flexibilidade na inclusão de dependentes'
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
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Plano PME / MEI</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Plano Odontológico para{' '}
                <span className="text-yellow-300">MEI e Pequenas Empresas</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Solução completa com cobertura total do Rol da ANS e condições especiais
                para microempreendedores individuais e pequenas empresas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#plano"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Conhecer o Plano
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
              Por que escolher o{' '}
              <span className="text-primary">Integral MEI?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios pensados especialmente para microempreendedores e pequenas empresas
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

      {/* Plan Section */}
      <section id="plano" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Conheça o{' '}
              <span className="text-primary">Integral MEI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plano completo com cobertura total do Rol de Procedimentos da ANS
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

              {/* Card */}
              <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all">
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl shadow-lg font-black text-sm">
                  {plan.badge}
                </div>

                {/* Icon */}
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                    <plan.icon className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-xl text-primary font-bold mb-4">{plan.subtitle}</p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="bg-primary/5 rounded-xl p-6 mb-8">
                  <p className="text-lg text-gray-700 italic leading-relaxed text-center">{plan.highlight}</p>
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
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Diferenciais do{' '}
              <span className="text-primary">Integral MEI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vantagens exclusivas para microempreendedores e pequenas empresas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentials.map((differential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all flex items-start gap-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium leading-relaxed">{differential}</span>
              </motion.div>
            ))}
          </div>
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
              Pronto para contratar o{' '}
              <span className="text-yellow-300">melhor plano</span> para seu negócio?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Entre em contato conosco e solicite uma proposta personalizada
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

export default PlanoPME;
