import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { News } from '../types/news';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchArticle = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('news')
          .select('*')
          .eq('slug', slug)
          .single();

        if (fetchError) throw fetchError;

        setArticle(data);
      } catch (err) {
        console.error('Erro ao buscar notícia:', err);
        setError('Não foi possível carregar a notícia.');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatContent = (content: string) => {
    // Convert markdown-style headers to HTML
    let formatted = content
      .replace(/^## (.+)$/gm, '<h2 class="text-h2 font-black text-gray-900 mt-12 mb-6 first:mt-0">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-h3 font-bold text-gray-900 mt-8 mb-4">$1</h3>');

    // Convert bullet points to list items
    formatted = formatted.replace(/^• (.+)$/gm, '<li class="ml-6 mb-2">$1</li>');

    // Wrap consecutive list items in ul tags
    formatted = formatted.replace(/(<li class="ml-6 mb-2">.+<\/li>\n?)+/g, '<ul class="list-disc mb-6 space-y-2 text-gray-700">$&</ul>');

    // Convert paragraphs (text blocks separated by double newlines)
    const paragraphs = formatted.split('\n\n');
    formatted = paragraphs
      .map(p => {
        if (p.startsWith('<h') || p.startsWith('<ul')) {
          return p;
        }
        return `<p class="mb-6 leading-relaxed text-gray-700 text-lg">${p.replace(/\n/g, '<br/>')}</p>`;
      })
      .join('\n');

    return formatted;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex flex-col justify-center items-center pt-40 pb-32">
          <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
          <p className="text-gray-600 font-medium">Carregando notícia...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 pt-40 pb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-red-600 text-lg mb-8 font-semibold">
              {error || 'Notícia não encontrada.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/noticias')}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para notícias
            </motion.button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <article className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,123,131,0.05),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 max-w-4xl mx-auto"
          >
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Voltar para notícias
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-12"
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <span className="text-sm font-bold text-primary">Notícia</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-6">
              <Calendar className="w-5 h-5" />
              <time dateTime={article.published_at}>
                {formatDate(article.published_at)}
              </time>
            </div>

            {/* Title */}
            <h1 className="text-h1 font-black text-gray-900 mb-8 leading-tight">
              {article.title}
            </h1>

            {/* Summary */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary-dark rounded-full" />
              <p className="text-lead text-gray-600 leading-relaxed">
                {article.summary}
              </p>
            </div>
          </motion.div>

          {/* Featured Image */}
          {article.image_url && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-5xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 shadow-glass-lg">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
              />
            </div>
          </motion.div>

          {/* Back Button Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mt-12 pt-12 border-t-2 border-gray-100"
          >
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-bold text-lg group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              Voltar para todas as notícias
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NewsArticle;
