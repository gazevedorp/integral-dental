import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Users, Award, CheckCircle, Star, Smile, Phone, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

const Home = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [openIDSS, setOpenIDSS] = useState<number | null>(null);
  const [selectedPlanCategory, setSelectedPlanCategory] = useState<'empresarial' | 'pme' | 'individual' | 'especiais'>('individual');

  const heroImages = [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&h=700&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&h=700&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const plansData = {
    empresarial: [
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
    ],
    pme: [
      {
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
      }
    ],
    individual: [
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
        highlight: 'Perfeito para quem busca economia com boa cobertura.'
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
        highlight: 'Ideal para famílias que valorizam prevenção, estética e segurança.'
      }
    ],
    especiais: [
      {
        icon: Smile,
        name: 'Ortoplus',
        badge: 'ORTODONTIA',
        subtitle: 'Especializado em ortodontia',
        description: 'O Plano Integral Ortoplus é a escolha perfeita para quem deseja alinhar o sorriso com aparelhos ortodônticos.',
        features: [
          'Planos mensais sem carência',
          'Dentistas especializados em ortodontia e estética',
          'Inclui cobertura clínica',
          'Atendimento em clínicas credenciadas Integral Dental',
          'Custo acessível e acompanhamento contínuo'
        ],
        highlight: 'Mais do que estética: um sorriso alinhado é sinônimo de saúde, autoestima e novas oportunidades.'
      }
    ]
  };

  const benefits = [
    'Mais de 35 anos de tradição',
    'Rede ampla de profissionais e clínicas credenciadas',
    'Cobertura total do ROL de Procedimentos da ANS',
    'Atendimento humanizado',
    'Tecnologia de ponta e aperfeiçoamento técnico constante',
    'Atendimento em todas as especialidades'
  ];

  const testimonials = [
    { name: 'Maria Silva', text: 'Atendimento excepcional! Equipe muito atenciosa.', rating: 5 },
    { name: 'João Santos', text: 'Melhores dentistas que já conheci. Recomendo!', rating: 5 },
    { name: 'Ana Paula', text: 'Plano familiar perfeito. Toda família adorou!', rating: 5 },
  ];

  const idssData = [
    {
      id: 1,
      code: '359394',
      name: 'INTEGRAL SERVIÇOS ODONTOLÓGICOS LTDA',
      documents: [
        { year: 'IDSS 2018 ANO BASE 2017', url: 'https://www.integraldental.com.br/wp-content/uploads/2021/07/2018-ANO-BASE-2017Operadora-359394.pdf' },
        { year: 'IDSS 2019 ANO BASE 2018', url: 'https://www.integraldental.com.br/wp-content/uploads/2021/01/2019-ANO-BASE-2018-Operadora_359394.pdf' },
        { year: 'IDSS 2020 ANO BASE 2019', url: 'https://www.integraldental.com.br/wp-content/uploads/2021/04/359394-idss-base-2019.pdf' },
        { year: 'IDSS 2021 ANO BASE 2020', url: 'https://www.integraldental.com.br/wp-content/uploads/2022/01/359394-IDSS-2019-Ano-Base-2020.pdf' },
        { year: 'IDSS 2022 ANO BASE 2021', url: 'https://www.integraldental.com.br/wp-content/uploads/2023/01/359394-IDSS-2022-Ano-Base-2021.docx' },
        { year: 'IDSS 2023 ANO BASE 2022', url: 'https://www.integraldental.com.br/wp-content/uploads/2024/01/ans.gov_.br_qualificacao_consumidor_informacoes_operadora.asp_co_operadora_param359394cd_processamento_param20230102consulta_idss.pdf' },
        { year: 'IDSS 2024 ANO BASE 2023', url: 'https://www.integraldental.com.br/wp-content/uploads/2025/01/359394-sevicos.pdf' },
        { year: 'IDSS 2025 ANO BASE 2024', url: 'https://www.integraldental.com.br/wp-content/uploads/2025/04/359394-sevicos-2025-2024.pdf' }
      ]
    },
    {
      id: 2,
      code: '418340',
      name: 'INTEGRAL CONVÊNIO ODONTOLÓGICO LTDA',
      documents: [
        { year: 'IDSS 2018 ANO BASE 2017', url: 'https://www.integraldental.com.br/wp-content/uploads/2021/07/2018-ANO-BASE-2017-Operadora-418340.pdf' },
        { year: 'IDSS 2019 ANO BASE 2018', url: 'https://www.integraldental.com.br/wp-content/uploads/2021/01/2019-ANO-BASE-2018-Operadora_418340.pdf' },
        { year: 'IDSS 2020 ANO BASE 2019', url: 'https://www.integraldental.com.br/wp-content/uploads/2021/04/418340-idss-base-2019.pdf' },
        { year: 'IDSS 2021 ANO BASE 2020', url: 'https://www.integraldental.com.br/wp-content/uploads/2022/01/418340-IDSS-2019-Ano-Base-2020.pdf' },
        { year: 'IDSS 2022 ANO BASE 2021', url: 'https://www.integraldental.com.br/wp-content/uploads/2023/01/418340-IDSS-2022-Ano-Base-2021.docx' },
        { year: 'IDSS 2023 ANO BASE 2022', url: 'https://www.integraldental.com.br/wp-content/uploads/2024/01/ans.gov_.br_qualificacao_consumidor_informacoes_operadora.asp_co_operadora_param418340cd_processamento_param20230102consulta_idss.pdf' },
        { year: 'IDSS 2024 ANO BASE 2023', url: 'https://www.integraldental.com.br/wp-content/uploads/2025/01/418340-convenio.pdf' },
        { year: 'IDSS 2025 ANO BASE 2024', url: 'https://www.integraldental.com.br/wp-content/uploads/2025/04/418340-convenio-2025-2024.pdf' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Carousel */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-10 md:pt-20">
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.2, 1, 1.2]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-secondary/40 to-primary/10 rounded-full blur-3xl"
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >

              {/* Main Heading with Creative Typography */}
              <div className="space-y-4 mt-10">
                <h1 className="text-h1 font-black leading-[0.9] text-gray-900">
                  Saúde<br />
                  <span className="text-primary inline-block relative">
                    Integral
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-secondary/60 -z-10 blur-sm"
                    />
                  </span>
                  <br />
                  <span className="gradient-text">
                    para você
                  </span>
                </h1>
              </div>

              <p className="text-lead text-gray-600 max-w-xl leading-relaxed">
                <span className="font-semibold text-gray-900">Desde 1990</span>,
                oferecendo atendimento humanizado e tecnologia moderna para sua saúde bucal.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
                <motion.a
                  href="#planos"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-glass-lg hover:shadow-2xl transition-smooth inline-flex items-center justify-center gap-2"
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
                  className="glass-dark border-2 border-primary/30 text-gray-900 hover:bg-primary/10 px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-smooth text-center"
                >
                  Falar com Consultor
                </motion.a>
              </div>
            </motion.div>

            {/* Visual Element - Image Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative mt-8 lg:mt-0"
              >
                {/* Main Image Carousel with Modern Frame */}
                <div className="relative">
                  <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl md:rounded-3xl opacity-20 blur-2xl" />
                  <div className="relative bg-white rounded-2xl md:rounded-3xl p-1 md:p-2 shadow-2xl overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageSlide}
                        src={heroImages[currentImageSlide]}
                        alt="Integral Dental"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl md:rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                      />
                    </AnimatePresence>
                  </div>

                  {/* Image Navigation Controls */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageSlide(index)}
                        className={`transition-all ${
                          index === currentImageSlide
                            ? 'w-8 h-2 bg-white'
                            : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                        } rounded-full`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImageSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    onClick={nextImageSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 z-10"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </button>

                  {/* Floating Achievement Card - Hidden on small screens */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="hidden md:block absolute -left-4 lg:-left-8 top-1/4 -translate-y-1/2 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl max-w-[160px] lg:max-w-[250px]"
                  >
                    <div className="flex items-start gap-2 lg:gap-3">
                      <div className="bg-primary/10 p-2 lg:p-3 rounded-xl">
                        <Award className="w-6 lg:w-8 h-6 lg:h-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs lg:text-sm font-semibold text-gray-900">Certificada ANS</div>
                        <div className="text-[10px] lg:text-xs text-gray-600 mt-1">Excelência garantida</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Review Card - Hidden on small screens */}
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="hidden md:block absolute -right-4 lg:-right-8 bottom-20 bg-white p-4 lg:p-5 rounded-2xl shadow-2xl"
                  >
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 lg:w-4 h-3 lg:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs lg:text-sm font-semibold text-gray-900">4.9/5.0</p>
                    <p className="text-[10px] lg:text-xs text-gray-600">Avaliação dos clientes</p>
                  </motion.div>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section - Tabs Selector */}
      <section id="planos" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden scroll-mt-24">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-tr from-primary-dark/5 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-h2 font-black text-gray-900 mb-4 md:mb-6">
              Planos Odontológicos{' '}
              <span className="relative inline-block">
                Integral Dental
              </span>
            </h2>
            <p className="text-lead text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
              A Integral Dental oferece soluções completas em saúde bucal para empresas, famílias e pessoas físicas,
              com planos acessíveis e ampla cobertura. Todos os nossos planos possuem cobertura total do Rol de Procedimentos da ANS.
            </p>
          </motion.div>

          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPlanCategory('empresarial')}
              className={`flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all ${
                selectedPlanCategory === 'empresarial'
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Empresarial</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPlanCategory('pme')}
              className={`flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all ${
                selectedPlanCategory === 'pme'
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>PME / MEI</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPlanCategory('individual')}
              className={`flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all ${
                selectedPlanCategory === 'individual'
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Individual / Familiar</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPlanCategory('especiais')}
              className={`flex items-center justify-center gap-3 px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all ${
                selectedPlanCategory === 'especiais'
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Smile className="w-5 h-5" />
              <span>Especiais</span>
            </motion.button>
          </motion.div>

          {/* Category Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlanCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-12 text-center max-w-4xl mx-auto"
            >
              {selectedPlanCategory === 'empresarial' && (
                <div>
                  <h3 className="text-h3 font-black text-gray-900 mb-4">Planos Empresariais</h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    Ideal para empresas, sindicatos e associações que desejam oferecer um benefício de alto valor agregado aos seus colaboradores,
                    com ampla rede credenciada e excelente custo-benefício.
                  </p>
                </div>
              )}
              {selectedPlanCategory === 'pme' && (
                <div>
                  <h3 className="text-h3 font-black text-gray-900 mb-4">Planos PME / MEI</h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    Solução completa para empresas MEI e PME com cobertura e condições diferenciadas,
                    ideal para pequenas empresas que valorizam qualidade com excelente custo-benefício.
                  </p>
                </div>
              )}
              {selectedPlanCategory === 'individual' && (
                <div>
                  <h3 className="text-h3 font-black text-gray-900 mb-4">Planos Individuais e Familiares</h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    A Integral Dental oferece planos acessíveis e completos para você e sua família,
                    com adesão rápida, sem carência e cobertura a partir de 2 dias úteis após a contratação.
                  </p>
                </div>
              )}
              {selectedPlanCategory === 'especiais' && (
                <div>
                  <h3 className="text-h3 font-black text-gray-900 mb-4">Planos Especiais</h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    Soluções específicas para necessidades especiais, incluindo ortodontia e implantes dentários.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Plans Grid - Conditional Rendering */}
          <AnimatePresence mode="wait">
            {/* Empresarial */}
            {selectedPlanCategory === 'empresarial' && (
              <motion.div
                key="empresarial"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
              >
                {plansData.empresarial.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                    {/* Card */}
                    <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 hover:shadow-2xl transition-all h-full flex flex-col">
                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-xl shadow-lg font-black text-xs">
                        {plan.badge}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <plan.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-h4 font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {plan.name}
                      </h4>
                      <p className="text-small text-primary font-bold mb-4">{plan.subtitle}</p>
                      <p className="text-body text-gray-600 mb-6">{plan.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-small text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight */}
                      <div className="bg-primary/5 rounded-xl p-4 mb-6">
                        <p className="text-small text-gray-700 italic">{plan.highlight}</p>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href="https://api.whatsapp.com/send?phone=5516988326932"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        Solicitar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* PME / MEI */}
            {selectedPlanCategory === 'pme' && (
              <motion.div
                key="pme"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid gap-6 md:gap-8 max-w-2xl mx-auto"
              >
                {plansData.pme.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                    {/* Card */}
                    <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 hover:shadow-2xl transition-all h-full flex flex-col">
                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-xl shadow-lg font-black text-xs">
                        {plan.badge}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <plan.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-h4 font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {plan.name}
                      </h4>
                      <p className="text-small text-primary font-bold mb-4">{plan.subtitle}</p>
                      <p className="text-body text-gray-600 mb-6">{plan.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-small text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight */}
                      <div className="bg-primary/5 rounded-xl p-4 mb-6">
                        <p className="text-small text-gray-700 italic">{plan.highlight}</p>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href="https://api.whatsapp.com/send?phone=5516988326932"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        Solicitar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Individual / Familiar */}
            {selectedPlanCategory === 'individual' && (
              <motion.div
                key="individual"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
              >
                {plansData.individual.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    {/* Popular Badge for Premium */}
                    {plan.badge === 'COMPLETO' && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full shadow-xl font-black text-sm z-10">
                        ⭐ Mais Popular
                      </div>
                    )}

                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                    {/* Card */}
                    <div className={`relative bg-white border-2 ${plan.badge === 'COMPLETO' ? 'border-primary/50' : 'border-gray-100'} group-hover:border-primary/30 rounded-3xl p-8 hover:shadow-2xl transition-all h-full flex flex-col`}>
                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-xl shadow-lg font-black text-xs">
                        {plan.badge}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <plan.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-h4 font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {plan.name}
                      </h4>
                      <p className="text-small text-primary font-bold mb-4">{plan.subtitle}</p>
                      <p className="text-body text-gray-600 mb-6">{plan.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-small text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight */}
                      <div className="bg-primary/5 rounded-xl p-4 mb-6">
                        <p className="text-small text-gray-700 italic">{plan.highlight}</p>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href="https://api.whatsapp.com/send?phone=5516988326932"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        Solicitar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Especiais */}
            {selectedPlanCategory === 'especiais' && (
              <motion.div
                key="especiais"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
              >
                {plansData.especiais.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    {/* Hover Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                    {/* Card */}
                    <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 hover:shadow-2xl transition-all h-full flex flex-col">
                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-xl shadow-lg font-black text-xs">
                        {plan.badge}
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <plan.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="text-h4 font-black text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {plan.name}
                      </h4>
                      <p className="text-small text-primary font-bold mb-4">{plan.subtitle}</p>
                      <p className="text-body text-gray-600 mb-6">{plan.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-small text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlight */}
                      <div className="bg-primary/5 rounded-xl p-4 mb-6">
                        <p className="text-small text-gray-700 italic">{plan.highlight}</p>
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href="https://api.whatsapp.com/send?phone=5516988326932"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                      >
                        Solicitar Proposta
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                ))}

                {/* Implantes - Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-primary/5 to-primary-dark/5 border-2 border-primary/20 group-hover:border-primary/40 rounded-3xl p-8 hover:shadow-2xl transition-all h-full flex flex-col items-center justify-center text-center">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg">
                        <Smile className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-h3 font-black text-gray-900 mb-4">Implantes Dentários</h4>
                    <p className="text-body text-gray-700 mb-8 max-w-sm">
                      Recupere seu sorriso com segurança e qualidade. Entre em contato conosco para mais informações sobre nossos planos de implantes.
                    </p>

                    {/* CTA Button */}
                    <motion.a
                      href="https://api.whatsapp.com/send?phone=5516988326932&text=Gostaria%20de%20saber%20mais%20sobre%20implantes%20dent%C3%A1rios"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                      Entre em Contato
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section - Split Design */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-gradient-to-l from-primary/5 to-transparent rounded-l-full" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 items-center">
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

                <h2 className="text-h2 font-black text-gray-900 mb-6 leading-[1.1]">
                  Cuidando do seu sorriso desde{' '}
                  <span className="relative inline-block">
                    1990
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="absolute bottom-1 left-0 right-0 h-3 bg-primary/30 -z-10"
                    />
                  </span>
                </h2>

                <p className="text-lead text-gray-600 leading-relaxed mb-6">
                  Atendimento humanizado, tecnologia de ponta e ampla rede de profissionais credenciados.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-body text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Modern Cards */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,123,131,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-h2 font-black text-gray-900 mb-4 md:mb-6">
              Histórias de{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                sorrisos reais
              </span>
            </h2>
            <p className="text-lead text-gray-600 px-4">
              Veja o que nossos clientes têm a dizer sobre nossa experiência
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
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
                  <p className="text-gray-700 text-body leading-relaxed mb-8 italic">
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


        </div>
      </section>

      {/* CTA Section - Simplified */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-gray-900" />

          {/* Animated Shapes */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-20 right-10 md:right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-[40%_60%_70%_30%/30%_70%_60%_40%]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-20 left-10 md:left-20 w-40 md:w-80 h-40 md:h-80 bg-white/5 rounded-[70%_30%_50%_50%/60%_40%_60%_40%]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white space-y-8"
            >
              <div>
                <h2 className="text-h2 font-black mb-6 leading-tight">
                  Pronto para ter o sorriso dos sonhos?
                </h2>

                <p className="text-lead text-gray-100 leading-relaxed max-w-2xl mx-auto">
                  Fale com um consultor e receba uma proposta personalizada
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-2"
                >
                  Solicitar Proposta
                  <ArrowRight className="w-6 h-6" />
                </motion.a>

                <motion.a
                  href="tel:+551621027888"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/50 backdrop-blur-sm text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-white hover:text-primary transition-all text-center"
                >
                  (16) 2102-7888
                </motion.a>
              </div>
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

              <h2 className="text-h2 font-black text-gray-900 mb-6">
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
                  <h3 className="text-h3 font-black text-gray-900 mb-6">
                    Índice de Desempenho da Saúde Suplementar - IDSS
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-8 text-body">
                    O Índice de Desempenho da Saúde Suplementar – IDSS – é a avaliação de desempenho das
                    operadoras de planos de saúde que compõe o Programa de Qualificação da Saúde Suplementar,
                    definido pela Agência Nacional de Saúde Suplementar – ANS.
                  </p>

                  <div className="space-y-4 mb-8">
                    {idssData.map((operator) => (
                      <div key={operator.id} className="border-2 border-primary/20 rounded-2xl overflow-hidden">
                        {/* Accordion Header */}
                        <button
                          onClick={() => setOpenIDSS(openIDSS === operator.id ? null : operator.id)}
                          className="w-full flex items-center justify-between gap-3 p-4 bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white font-black text-sm">{operator.id}</span>
                            </div>
                            <div className="text-left">
                              <p className="font-bold text-gray-900 mb-1">{operator.code}</p>
                              <p className="text-gray-600 text-sm">{operator.name}</p>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            {openIDSS === operator.id ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary" />
                            )}
                          </div>
                        </button>

                        {/* Accordion Content */}
                        <AnimatePresence>
                          {openIDSS === operator.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="p-6 bg-white space-y-3">
                                {operator.documents.map((doc, index) => (
                                  <a
                                    key={index}
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                  >
                                    <span className="text-gray-700 font-medium">{doc.year}</span>
                                    <span className="text-primary font-bold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                                      Visualizar
                                      <ArrowRight className="w-4 h-4" />
                                    </span>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
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

            <h2 className="text-h2 font-black text-gray-900 mb-6">
              Últimas Notícias
            </h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das novidades e atualizações da Integral Dental
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                date: '25 Set 2025',
                title: 'Nova Clínica em São Paulo',
                description: 'Inauguramos mais uma unidade na zona sul de SP para melhor atendê-los.',
                category: 'Expansão',
                image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop'
              },
              {
                date: '18 Set 2025',
                title: 'Tecnologia 3D em Ortodontia',
                description: 'Implementamos scanners 3D em todas as unidades para diagnósticos mais precisos.',
                category: 'Tecnologia',
                image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
              },
              {
                date: '10 Set 2025',
                title: 'Campanha Prevenção',
                description: 'Mês da saúde bucal com consultas preventivas gratuitas para novos pacientes.',
                category: 'Campanhas',
                image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop'
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
                <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-glass-lg transition-all">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full">
                      {news.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span className="text-sm font-bold text-gray-500 mb-4 block">{news.date}</span>

                    <h3 className="text-h3 font-black text-gray-900 mb-4 group-hover:text-primary transition-colors">
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA Section */}
      <FAQSection />

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

export default Home;
