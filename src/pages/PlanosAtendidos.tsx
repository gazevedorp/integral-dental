import { motion } from 'framer-motion';
import { Shield, CheckCircle, FileCheck, Building2, Users, User, Award, Heart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

const PlanosAtendidos = () => {
  // Agrupamento estruturado por categoria de plano
  const planCategories = [
    {
      category: 'Plano Integral Básico',
      description: 'Cobertura essencial com qualidade',
      color: 'from-primary to-primary-dark',
      icon: Shield,
      plans: [
        { registry: '471852146', type: 'COLETIVO POR ADESÃO' },
        { registry: '471851148', type: 'COLETIVO EMPRESARIAL' },
        { registry: '471855141', type: 'INDIVIDUAL OU FAMILIAR' }
      ]
    },
    {
      category: 'Plano Integral Master',
      description: 'Cobertura premium completa',
      color: 'from-primary to-primary-dark',
      icon: Award,
      plans: [
        { registry: '471853144', type: 'COLETIVO POR ADESÃO' },
        { registry: '471854142', type: 'COLETIVO EMPRESARIAL' },
        { registry: '471856149', type: 'INDIVIDUAL OU FAMILIAR' }
      ]
    },
    {
      category: 'Integral Senior',
      description: 'Plano exclusivo para idade sênior',
      color: 'from-primary to-primary-dark',
      icon: Heart,
      plans: [
        { registry: '046130010', type: 'COLETIVO POR ADESÃO' },
        { registry: '461300107', type: 'COLETIVO POR ADESÃO' },
        { registry: '046129910', type: 'COLETIVO EMPRESARIAL' },
        { registry: '461299100', type: 'COLETIVO EMPRESARIAL' },
        { registry: '461299100', type: 'COLETIVO EMPRESARIAL (duplicata)' },
        { registry: '400500987', type: 'MÚLTIPLAS MODALIDADES*' }
      ]
    },
    {
      category: 'Integral',
      description: 'Plano tradicional da Integral Dental',
      color: 'from-primary to-primary-dark',
      icon: CheckCircle,
      plans: [
        { registry: '461298101', type: 'COLETIVO POR ADESÃO' },
        { registry: '461297103', type: 'COLETIVO EMPRESARIAL' },
        { registry: '461300107', type: 'COLETIVO POR ADESÃO (duplicata)' },
        { registry: '400499980', type: 'MÚLTIPLAS MODALIDADES*' }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    if (type.includes('EMPRESARIAL')) return Building2;
    if (type.includes('ADESÃO')) return Users;
    if (type.includes('INDIVIDUAL') || type.includes('FAMILIAR')) return User;
    return Shield;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-20 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 md:w-20 h-16 md:h-20 bg-gray-100 rounded-xl md:rounded-2xl mb-4 md:mb-6"
            >
              <Shield className="w-8 md:w-10 h-8 md:h-10 text-primary" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-h2 font-black text-gray-900 mb-4 md:mb-6"
            >
              Planos Atendidos
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lead text-gray-600 leading-relaxed px-4"
            >
              Conheça todos os nossos 24 registros de planos odontológicos ativos na ANS
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Plans Categories Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {planCategories.map((category, catIndex) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                    className="bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Cabeçalho da Categoria */}
                    <div className="bg-gray-50 border-b border-gray-200 p-4 md:p-6">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="p-2 md:p-3 bg-white border border-gray-200 rounded-lg flex-shrink-0">
                          <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-h4 font-bold text-gray-900 truncate">{category.category}</h3>
                          <p className="text-small text-gray-600 mt-1">{category.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Lista de Registros */}
                    <div className="p-4 md:p-6">
                      <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {category.plans.map((plan, planIndex) => {
                          const TypeIcon = getTypeIcon(plan.type);
                          return (
                            <motion.div
                              key={planIndex}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: (catIndex * 0.1) + (planIndex * 0.05) }}
                              className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all bg-white"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-gray-50 rounded-lg">
                                  <TypeIcon className="w-5 h-5 text-gray-700" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2">
                                    <FileCheck className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                    <span className="text-small font-mono text-gray-900 font-semibold">
                                      {plan.registry}
                                    </span>
                                  </div>
                                  <p className="text-xs-responsive text-gray-600 leading-relaxed">
                                    {plan.type}
                                  </p>
                                  <div className="flex items-center gap-1 mt-2">
                                    <CheckCircle className="w-3 h-3 text-gray-400" />
                                    <span className="text-xs-responsive font-medium text-gray-500">
                                      ATIVO
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                      
                      {/* Nota de rodapé para múltiplas modalidades */}
                      {category.plans.some(p => p.type.includes('MÚLTIPLAS')) && (
                        <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                          <p className="text-xs-responsive text-gray-700">
                            <strong>*Múltiplas Modalidades:</strong> Este registro atende Coletivo Empresarial, Coletivo por Adesão e Individual/Familiar
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-h4 font-black text-gray-900 mb-2">
                    Registro ANS (Agência Nacional de Saúde Suplementar)
                  </h3>
                  <p className="text-body text-gray-600 leading-relaxed">
                    A Integral Dental possui 24 registros de planos ativos devidamente cadastrados na ANS, garantindo segurança,
                    transparência e qualidade no atendimento aos nossos beneficiários. Todos os nossos planos seguem as
                    diretrizes e regulamentações da Agência Nacional de Saúde Suplementar.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  );
};

export default PlanosAtendidos;
