import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Heart, Award, CheckCircle, Star, Smile, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage1 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const familyPlans = [
    {
      icon: Shield,
      title: 'Plano Empresarial',
      description: 'Soluções completas para empresas, sindicatos e associações',
      features: ['Cobertura total do ROL ANS', 'Serviços de ponta', 'Moderna e atualizada']
    },
    {
      icon: Users,
      title: 'Plano Familiar',
      description: 'Processo simples e custos acessíveis',
      features: ['Cobertura total do ROL ANS', 'Dentistas criteriosamente selecionados', 'Processo rápido']
    },
    {
      icon: Smile,
      title: 'Plano Ortodontia (Ortoplus)',
      description: 'Plano especial para tratamento ortodôntico',
      features: ['Ideal para aparelho dentário', 'Cobertura completa', 'Atendimento especializado']
    }
  ];

  const benefits = [
    'Mais de 35 anos de tradição',
    'Dentistas criteriosamente selecionados',
    'Cobertura total do ROL de Procedimentos da ANS',
    'Atendimento humanizado',
    'Tecnologia moderna e equipamentos de ponta',
    'Clínicas próprias em Ribeirão Preto'
  ];

  const testimonials = [
    { name: 'Maria Silva', text: 'Atendimento excepcional! Equipe muito atenciosa.', rating: 5 },
    { name: 'João Santos', text: 'Melhores dentistas que já conheci. Recomendo!', rating: 5 },
    { name: 'Ana Paula', text: 'Plano familiar perfeito. Toda família adorou!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Modern Asymmetric Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/40 to-primary/10 rounded-full blur-3xl"
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Content - Takes 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-5 py-2 rounded-full border border-primary/20"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-primary">Mais de 35 anos de tradição</span>
              </motion.div>

              {/* Main Heading with Creative Typography */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] text-gray-900">
                  Saúde<br />
                  <span className="text-primary inline-block relative">
                    Integral
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute bottom-2 left-0 right-0 h-3 bg-secondary/60 -z-10 blur-sm"
                    />
                  </span>
                  <br />
                  <span className="gradient-text">
                    para você
                  </span>
                </h1>
              </div>

              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Planos odontológicos com <span className="font-semibold text-gray-900">mais de 35 anos de tradição</span>,
                oferecendo atendimento humanizado e tecnologia moderna para sua saúde bucal.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="#planos"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-glass-lg hover:shadow-2xl transition-smooth inline-flex items-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Conhecer Planos
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </motion.a>

                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-dark border-2 border-primary/30 text-gray-900 hover:bg-primary/10 px-10 py-5 rounded-2xl font-bold text-lg transition-smooth"
                >
                  Falar com Consultor
                </motion.a>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-200">
                {[
                  { number: '35+', label: 'Anos de Tradição' },
                  { number: '3', label: 'Clínicas Próprias' },
                  { number: '100%', label: 'ROL ANS' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="text-3xl font-black text-primary">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual Element - Takes 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Image with Modern Frame */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-20 blur-2xl" />
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=700&fit=crop" 
                    alt="Profissional de saúde" 
                    className="rounded-2xl w-full h-[600px] object-cover"
                  />
                </div>

                {/* Floating Achievement Card */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Certificada ANS</div>
                      <div className="text-xs text-gray-600 mt-1">Excelência garantida</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Review Card */}
                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-8 bottom-20 bg-white p-5 rounded-2xl shadow-2xl"
                >
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">4.9/5.0</p>
                  <p className="text-xs text-gray-600">Avaliação dos clientes</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Family Plans Section - Premium Cards (from LandingPage3) */}
      <section id="planos" className="py-32 bg-white relative overflow-hidden scroll-mt-24">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary-dark/5 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Escolha o plano{' '}
              <span className="relative inline-block">
                ideal
                <motion.svg
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                >
                  <motion.path
                    d="M0 6 Q50 0, 100 6 T200 6"
                    stroke="#007b83"
                    strokeWidth="3"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Opções flexíveis para cada necessidade da sua família
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {familyPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                {/* Card */}
                <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark opacity-10 rounded-3xl blur-lg group-hover:opacity-30 transition-opacity" />
                      <div className="relative w-24 h-24 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <plan.icon className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-3xl font-black mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-1 relative">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          <div className="relative w-6 h-6 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/button"
                  >
                    Contratar Agora
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </motion.button>

                  {/* Popular Badge (for middle card) */}
                  {index === 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, type: "spring" }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-2xl shadow-xl font-black text-sm"
                    >
                      ⭐ Mais Popular
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Split Design */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/5 to-transparent rounded-l-full" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image Composition */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-[40px] blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&h=500&fit=crop" 
                  alt="Equipe médica" 
                  className="relative rounded-[40px] shadow-2xl w-full object-cover"
                />
              </div>

              {/* Stats Cards Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 grid grid-cols-2 gap-4"
              >
                <div className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
                  <div className="text-4xl font-black text-primary mb-1">100%</div>
                  <div className="text-sm text-gray-600">ROL ANS</div>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary-dark p-6 rounded-2xl shadow-2xl text-white">
                  <div className="text-4xl font-black mb-1">35+</div>
                  <div className="text-sm">Anos</div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Certificado</div>
                    <div className="font-black text-gray-900">ANS</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
                >
                  Por que escolher a Integral?
                </motion.div>

                <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1]">
                  Muito mais que um{' '}
                  <span className="relative inline-block">
                    plano
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="absolute bottom-1 left-0 right-0 h-3 bg-primary/30 -z-10"
                    />
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Mais de 35 anos oferecendo saúde bucal com atendimento humanizado,
                  tecnologia moderna e dentistas criteriosamente selecionados.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">{benefit}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {[
                          'Desde 1988 oferecendo qualidade e confiança',
                          'Profissionais altamente qualificados e experientes',
                          'Todos os procedimentos do rol obrigatório da ANS',
                          'Cuidado próximo, acolhedor e respeitoso',
                          'Equipamentos de última geração e diagnóstico preciso',
                          'Localizadas em Vila Tibério, Campos Elíseos e Nove de Julho'
                        ][index]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,123,131,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all inline-flex items-center gap-2"
              >
                Conhecer Nossa História
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Cards */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,123,131,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Histórias de{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                sorrisos reais
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Veja o que nossos clientes têm a dizer sobre nossa experiência
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                
                {/* Card */}
                <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 h-full transition-all shadow-lg group-hover:shadow-2xl">
                  {/* Quote Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-4xl text-primary">"</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.15 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Cliente desde 2020</p>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full border-2 border-white" />
                ))}
              </div>
              <div className="text-left">
                <div className="font-black text-gray-900">Mais de 35 anos de tradição</div>
                <div className="text-sm text-gray-600">Referência em Ribeirão Preto</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Modern Split */}
      <section className="relative py-32 overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-gray-900" />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000')] bg-cover bg-center opacity-10" />
          
          {/* Animated Shapes */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-[40%_60%_70%_30%/30%_70%_60%_40%]"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-[70%_30%_50%_50%/60%_40%_60%_40%]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6"
                >
                  <span className="text-sm font-bold">✨ Oferta Especial</span>
                </motion.div>

                <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  Pronto para ter o sorriso dos sonhos?
                </h2>
                
                <p className="text-xl text-gray-100 leading-relaxed">
                  Receba uma proposta personalizada em minutos. 
                  Sem compromisso, apenas informação de qualidade.
                </p>
              </div>

              {/* Benefits Pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  '📞 Sem filas',
                  '💰 Preço justo',
                  '⚡ Resposta rápida',
                  '✅ Sem burocracia'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-3 rounded-full text-sm font-bold"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2"
                >
                  Solicitar Proposta Agora
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/50 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-all"
                >
                  Falar no WhatsApp
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-8 border-t border-white/20">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white rounded-full border-2 border-primary-dark" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold">35+ anos de confiança</div>
                  <div className="text-gray-200">Ribeirão Preto e região</div>
                </div>
              </div>
            </motion.div>

            {/* Right - Stats/Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { icon: '🎯', title: 'Cobertura Total', desc: '100% do ROL de Procedimentos da ANS' },
                { icon: '💎', title: 'Dentistas Selecionados', desc: 'Profissionais criteriosamente escolhidos' },
                { icon: '🏆', title: 'Clínicas Próprias', desc: 'Vila Tibério, Campos Elíseos e Nove de Julho' },
                { icon: '⚡', title: 'Tecnologia Moderna', desc: 'Equipamentos de ponta e diagnóstico preciso' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: -10 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* IDSS Section - Certificação ANS */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-bold text-primary">Certificação Oficial ANS</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Qualidade{' '}
                <span className="relative inline-block">
                  Certificada
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="absolute bottom-1 left-0 right-0 h-4 bg-primary/30 -z-10"
                  />
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[2.5rem] p-10 lg:p-12"
            >
              <div className="grid lg:grid-cols-[1fr,300px] gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-6">
                    Índice de Desempenho da Saúde Suplementar - IDSS
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                    O Índice de Desempenho da Saúde Suplementar – IDSS – é a avaliação de desempenho das 
                    operadoras de planos de saúde que compõe o Programa de Qualificação da Saúde Suplementar, 
                    definido pela Agência Nacional de Saúde Suplementar – ANS.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border-2 border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-black text-sm">1</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">359394</p>
                        <p className="text-gray-600 text-sm">INTEGRAL SERVIÇOS ODONTOLÓGICOS LTDA</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border-2 border-primary/20">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-black text-sm">2</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 mb-1">418340</p>
                        <p className="text-gray-600 text-sm">INTEGRAL CONVÊNIO ODONTOLÓGICO LTDA</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="http://www.ans.gov.br/planos-de-saude-e-operadoras/informacoes-e-avaliacoes-de-operadoras/qualificacao-ans"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                  >
                    <span>Para mais informações acesse o site da ANS</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Badge ANS */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 blur-2xl rounded-full" />
                  <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white text-center shadow-2xl">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-2xl font-black mb-2">ANS</p>
                    <p className="text-sm opacity-90 font-bold">Operadora Qualificada</p>
                    <p className="text-xs opacity-75 mt-2">Certificação Oficial</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Últimas Notícias Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-sm font-bold text-primary">Novidades</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Últimas Notícias
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das novidades e atualizações da Integral Dental
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                date: '25 Set 2025',
                title: 'Nova Clínica em São Paulo',
                description: 'Inauguramos mais uma unidade na zona sul de SP para melhor atendê-los.',
                category: 'Expansão'
              },
              {
                date: '18 Set 2025',
                title: 'Tecnologia 3D em Ortodontia',
                description: 'Implementamos scanners 3D em todas as unidades para diagnósticos mais precisos.',
                category: 'Tecnologia'
              },
              {
                date: '10 Set 2025',
                title: 'Campanha Prevenção',
                description: 'Mês da saúde bucal com consultas preventivas gratuitas para novos pacientes.',
                category: 'Campanhas'
              }
            ].map((news, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="glass-card rounded-3xl p-8 h-full hover:shadow-glass-lg transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-gray-500">{news.date}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      {news.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {news.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Ler mais
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              Pronto para começar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="text-3xl font-black text-gray-900 mb-6">Fale Conosco</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
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
                    <p className="text-sm text-gray-600 mb-1">Atendimento ao Cliente</p>
                    <p className="text-xl font-black text-gray-900">(16) 2102-7888</p>
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
                    <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                    <p className="text-xl font-black text-gray-900">(16) 98832-6932</p>
                  </div>
                </a>

                <a
                  href="mailto:administracao@integraldental.com.br"
                  className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 transition-all group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">E-mail</p>
                    <p className="text-lg font-black text-gray-900 break-all">administracao@integraldental.com.br</p>
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
              <form className="space-y-6">
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

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-5 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage1;
