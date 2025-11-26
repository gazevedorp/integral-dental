import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
