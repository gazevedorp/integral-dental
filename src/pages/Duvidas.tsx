import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';
import type { FAQCategory, FAQQuestion, FAQCategoryWithQuestions } from '../types/faq';

const Duvidas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaqs] = useState<FAQCategoryWithQuestions[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const { data: categories, error: categoriesError } = await supabase
          .from('faq_categories')
          .select('*')
          .order('display_order', { ascending: true });

        if (categoriesError) throw categoriesError;

        const { data: questions, error: questionsError } = await supabase
          .from('faq_questions')
          .select('*')
          .order('display_order', { ascending: true });

        if (questionsError) throw questionsError;

        const categoriesWithQuestions: FAQCategoryWithQuestions[] = (categories || []).map((category: FAQCategory) => ({
          ...category,
          questions: (questions || []).filter((q: FAQQuestion) => q.category_id === category.id)
        }));

        setFaqs(categoriesWithQuestions);
      } catch (error) {
        console.error('Erro ao carregar FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6"
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-small font-bold text-primary">Central de Ajuda</span>
            </motion.div>

            <h1 className="text-h1 font-black text-gray-900 mb-6">
              Dúvidas{' '}
              <span className="gradient-text">Frequentes</span>
            </h1>

            <p className="text-lead text-gray-600 leading-relaxed">
              Encontre respostas rápidas para as perguntas mais comuns sobre nossos planos e serviços
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {!loading && faqs.map((category, catIndex) => {
              let globalIndex = catIndex * 100;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                >
                  <h2 className="text-h3 font-black text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-primary rounded-full" />
                    {category.name}
                  </h2>

                  <div className="space-y-4">
                    {category.questions.map((faq) => {
                      const currentIndex = globalIndex++;
                      const isOpen = openIndex === currentIndex;

                      return (
                        <motion.div
                          key={faq.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
                        >
                          <button
                            onClick={() => toggleFAQ(currentIndex)}
                            className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                          >
                            <span className="text-h5 font-bold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? 'auto' : 0,
                              opacity: isOpen ? 1 : 0
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-5 bg-gray-50 border-t-2 border-gray-100">
                              <p className="text-body text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Duvidas;
