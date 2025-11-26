import { motion } from 'framer-motion';
import { Users, Award, CheckCircle, ArrowRight, Heart, Shield, Sparkles, Clock, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlanoIndividual = () => {
  const plans = [
    {
      icon: Users,
      name: 'Integral Controle',
      badge: 'ECONÔMICO',
      subtitle: 'Conforto e amplitude de cobertura',
      description: 'Para quem busca mais conforto e amplitude de cobertura, com coparticipações reduzidas em procedimentos complexos.',
      features: [
        '156 procedimentos odontológicos com coparticipação reduzida',
        'Consultas odontológicas e urgências',
        'Restaurações e aplicação de flúor',
        'Limpeza, selante e remoção de tártaro',
        'Mensalidade individual acessível',
        'Descontos progressivos por número de dependentes'
      ],
      highlight: 'Perfeito para quem busca economia com boa cobertura.',
      popular: false
    },
    {
      icon: Award,
      name: 'Integral Premium',
      badge: 'COMPLETO',
      subtitle: 'Cobertura ampla e benefícios exclusivos',
      description: 'Plano completo para quem deseja cobertura ampla e benefícios exclusivos. Ideal para famílias que valorizam prevenção, estética e segurança.',
      features: [
        '156 procedimentos odontológicos',
        'Consultas, urgências, restaurações e limpezas',
        'Aplicação de flúor, selante e remoção de tártaro',
        'Sem coparticipação em tratamentos de canal',
        'Sem coparticipação em extrações de sisos',
        'Sem coparticipação em radiografias panorâmicas',
        'Descontos progressivos por número de dependentes'
      ],
      highlight: 'Ideal para famílias que valorizam prevenção, estética e segurança.',
      popular: true
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Cobertura Completa',
      description: '156 procedimentos odontológicos para cuidar da sua saúde bucal'
    },
    {
      icon: Shield,
      title: 'Sem Carência',
      description: 'Adesão rápida com cobertura a partir de 2 dias úteis'
    },
    {
      icon: Sparkles,
      title: 'Descontos Progressivos',
      description: 'Quanto mais dependentes, maior o desconto na mensalidade'
    },
    {
      icon: Clock,
      title: 'Adesão Rápida',
      description: 'Processo simplificado e início rápido da cobertura'
    }
  ];

  const whoIsItFor = [
    {
      title: 'Famílias',
      description: 'Proteção completa para toda a família com descontos por dependente'
    },
    {
      title: 'Indivíduos',
      description: 'Plano individual com mensalidade acessível e boa cobertura'
    },
    {
      title: 'Quem valoriza prevenção',
      description: 'Acesso facilitado a consultas e procedimentos preventivos'
    },
    {
      title: 'Quem busca economia',
      description: 'Excelente custo-benefício com coparticipações reduzidas'
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
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Planos Individuais e Familiares</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Cuidado Odontológico para{' '}
                <span className="text-yellow-300">Você e sua Família</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Planos odontológicos acessíveis e completos, com adesão rápida, sem carência
                e cobertura a partir de 2 dias úteis após a contratação.
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
              <span className="text-primary">Planos Individuais?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios pensados para você e sua família
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
              Escolha o{' '}
              <span className="text-primary">Plano Ideal</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planos completos com 156 procedimentos odontológicos
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
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full shadow-xl font-black text-sm z-10">
                    ⭐ Mais Popular
                  </div>
                )}

                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                {/* Card */}
                <div className={`relative bg-white border-2 ${plan.popular ? 'border-primary/50' : 'border-gray-100'} group-hover:border-primary/30 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all h-full flex flex-col`}>
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
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Para quem são esses{' '}
              <span className="text-primary">Planos?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos planos são ideais para diversos perfis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whoIsItFor.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Pronto para cuidar da sua{' '}
              <span className="text-yellow-300">saúde bucal?</span>
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

export default PlanoIndividual;
