import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Award, Smile, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const PlansSection = () => {
  const [selectedPlanCategory, setSelectedPlanCategory] = useState<'empresarial' | 'pme' | 'individual' | 'especiais'>('individual');

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
          '<b>Planos sem coparticipação</b>'
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
          '<b>Sem coparticipação em tratamentos de canal</b>',
          '<b>Sem coparticipação em extrações de sisos</b>',
          '<b>Sem coparticipação em radiografias panorâmicas</b>',
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

  return (
    <>
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
                            <span className="text-small text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
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

            {/* Saiba Mais Button for Empresarial */}
            {selectedPlanCategory === 'empresarial' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <motion.a
                  href="/plano-empresarial"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
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
                            <span className="text-small text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
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

            {/* Saiba Mais Button for PME */}
            {selectedPlanCategory === 'pme' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <motion.a
                  href="/plano-pme"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
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
                            <span className="text-small text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
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

            {/* Saiba Mais Button for Individual */}
            {selectedPlanCategory === 'individual' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <motion.a
                  href="/plano-individual"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
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
                            <span className="text-small text-gray-700" dangerouslySetInnerHTML={{ __html: feature }} />
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

            {/* Saiba Mais Button for Especiais */}
            {selectedPlanCategory === 'especiais' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mt-8"
              >
                <motion.a
                  href="/planos-especiais"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary text-primary rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-xl"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default PlansSection;
