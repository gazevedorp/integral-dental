import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { News as NewsType } from '../types/news';
import Header from '../components/Header';
import Footer from '../components/Footer';

const News = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('news')
          .select('*')
          .order('published_at', { ascending: false });

        if (fetchError) throw fetchError;

        setNews(data || []);
      } catch (err) {
        console.error('Erro ao buscar notícias:', err);
        setError('Não foi possível carregar as notícias.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,123,131,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-sm font-bold text-primary">Blog</span>
            </div>

            <h1 className="text-h1 font-black text-gray-900 mb-4 md:mb-6">
              Notícias e{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Novidades
              </span>
            </h1>
            <p className="text-lead text-gray-600 px-4">
              Fique por dentro das últimas novidades e acontecimentos da Integral Dental
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-red-600 text-lg mb-6 font-semibold">{error}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg"
              >
                Tentar novamente
              </motion.button>
            </motion.div>
          )}

          {/* News Grid */}
          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {news.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <Link to={`/noticias/${item.slug}`}>
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />

                    <div className="relative glass-card rounded-3xl overflow-hidden h-full hover:shadow-glass-lg transition-all">
                      {/* Image */}
                      {item.image_url ? (
                        <div className="relative h-56 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                          <img
                            src={item.image_url}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="relative h-56 bg-gradient-to-br from-primary/10 to-primary-dark/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-dark/20 transition-colors">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                          <span className="text-6xl relative z-10">📰</span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-4">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={item.published_at}>
                            {formatDate(item.published_at)}
                          </time>
                        </div>

                        {/* Title */}
                        <h2 className="text-h3 font-black text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                          {item.title}
                        </h2>

                        {/* Summary */}
                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                          {item.summary}
                        </p>

                        {/* Read More */}
                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all">
                          Ler mais
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && news.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg font-semibold">
                Nenhuma notícia disponível no momento.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
