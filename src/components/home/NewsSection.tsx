import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { News } from '../../types/news';

const NewsSection = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('published_at', { ascending: false })
          .limit(3);

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
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={`/noticias/${item.slug}`}>
                  <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-glass-lg transition-all">
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

                      <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-4">
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
