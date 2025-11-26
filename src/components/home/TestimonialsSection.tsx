import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import type { Testimonial } from '../../types/testimonial';

const TestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('testimonials')
          .select('*')
          .order('created_at', { ascending: false });

        if (fetchError) throw fetchError;

        setTestimonials(data || []);
      } catch (err) {
        console.error('Erro ao buscar depoimentos:', err);
        setError('Não foi possível carregar os depoimentos.');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
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

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {/* Testimonials Grid */}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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
                <div className="mb-8">
                  <p className="text-gray-700 text-body leading-relaxed italic">
                    "{truncateText(testimonial.text, 200)}"
                  </p>
                  {testimonial.text.length > 200 && (
                    <button
                      onClick={() => setSelectedTestimonial(index)}
                      className="mt-3 text-primary hover:text-primary-dark font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                      Ver mais
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
          </div>
        )}
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-12 relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-2xl text-gray-600">&times;</span>
                </button>

                {/* Quote Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-5xl text-primary">"</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Full Testimonial Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonials[selectedTestimonial].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t-2 border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-2xl">
                    {testimonials[selectedTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonials[selectedTestimonial].name}</p>
                    <p className="text-gray-500">{testimonials[selectedTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialsSection;
