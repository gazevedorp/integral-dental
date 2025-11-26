import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    'Mais de 35 anos de tradição',
    'Rede ampla de profissionais e clínicas credenciadas',
    'Cobertura total do ROL de Procedimentos da ANS',
    'Atendimento humanizado',
    'Tecnologia de ponta e aperfeiçoamento técnico constante',
    'Atendimento em todas as especialidades'
  ];

  return (
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
  );
};

export default BenefitsSection;
