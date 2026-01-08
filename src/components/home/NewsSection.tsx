import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { News } from '../../types/news';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const NewsSection = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('published_at', { ascending: false })
          .limit(5);

        if (error) throw error;

        setNews(data || []);
      } catch (err) {
        console.error('Erro ao buscar notícias:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        ) : (
          <div className="relative max-w-7xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {news.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  >
                    <Link to={`/noticias/${item.slug}`} className="block h-full group">
                      <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-glass-lg transition-all transform group-hover:-translate-y-2">
                        {/* Image */}
                        <div className="relative h-56 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                          {item.image_url ? (
                            <img
                              src={item.image_url}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                              <span className="text-6xl">📰</span>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <span className="text-sm font-bold text-gray-500 mb-4 block">
                            {formatDate(item.published_at)}
                          </span>

                          <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                            {item.title}
                          </h3>

                          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                            {item.summary}
                          </p>

                          <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                            Ler mais
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {news.length > 1 && (
              <>
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Notícia anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Próxima notícia"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </>
            )}
          </div>
        )}

        {/* Ver Todas Button */}
        {!loading && news.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors"
            >
              Ver todas as notícias
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
