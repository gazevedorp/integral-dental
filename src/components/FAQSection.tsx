import { motion } from 'framer-motion';
import { HelpCircle, ArrowRight } from 'lucide-react';

const FAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-gray-600" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-h4 font-bold text-gray-900 mb-2">
                  Ficou com alguma dúvida?
                </h3>
                <p className="text-small text-gray-600">
                  Confira nossa seção de perguntas frequentes com as principais dúvidas sobre nossos planos
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/duvidas"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 inline-flex items-center gap-2 bg-gray-900 hover:bg-primary text-white px-6 py-3 rounded-xl font-semibold text-small transition-all"
              >
                Ver FAQ
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
