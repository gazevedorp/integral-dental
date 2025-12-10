import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Users, Shield, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import type { LucideIcon } from 'lucide-react';
import type { HeroImage, HeroFloatingCard } from '../../types/hero';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Shield,
};

const HeroSection = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [heroImages, setHeroImages] = useState<HeroImage[]>([]);
  const [floatingCards, setFloatingCards] = useState<HeroFloatingCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const { data: images, error: imagesError } = await supabase
          .from('hero_images')
          .select('*')
          .order('display_order', { ascending: true });

        if (imagesError) throw imagesError;

        const { data: cards, error: cardsError } = await supabase
          .from('hero_floating_cards')
          .select('*');

        if (cardsError) throw cardsError;

        setHeroImages(images || []);
        setFloatingCards(cards || []);
      } catch (error) {
        console.error('Erro ao carregar dados do hero:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  useEffect(() => {
    if (heroImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-10 md:pt-20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-secondary/40 to-primary/10 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >

            {/* Main Heading with Creative Typography */}
            <div className="space-y-4 mt-10">
              <h1 className="text-h1 font-black leading-[0.9] text-gray-900">
                Saúde<br />
                <span className="text-primary inline-block relative">
                  Integral
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-secondary/60 -z-10 blur-sm"
                  />
                </span>
                <br />
                <span className="gradient-text">
                  para você
                </span>
              </h1>
            </div>

            <p className="text-lead text-gray-600 max-w-xl leading-relaxed">
              <span className="font-semibold text-gray-900">Desde 1990</span>,
              oferecendo atendimento humanizado e tecnologia moderna para sua saúde bucal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pt-4">
              <motion.a
                href="#planos"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-premium text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-glass-lg hover:shadow-2xl transition-smooth inline-flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Conhecer Planos
                  <ArrowRight className="w-5 h-5" />
                </span>
              </motion.a>

              <motion.a
                href="https://api.whatsapp.com/send?phone=5516988326932&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20consultor."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="glass-dark border-2 border-primary/30 text-gray-900 hover:bg-primary/10 px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-smooth text-center"
              >
                Falar com Consultor
              </motion.a>
            </div>
          </motion.div>

          {/* Visual Element - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Main Image Carousel with Modern Frame */}
              <div className="relative">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-br from-primary to-primary-dark rounded-2xl md:rounded-3xl opacity-20 blur-2xl" />
                <div className="relative bg-white rounded-2xl md:rounded-3xl p-1 md:p-2 shadow-2xl overflow-hidden">
                  {loading ? (
                    <div className="rounded-xl md:rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="flex flex-col items-center gap-4">
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="text-sm font-medium text-gray-600">Carregando imagens...</p>
                      </div>
                    </div>
                  ) : heroImages.length > 0 ? (
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageSlide}
                        src={heroImages[currentImageSlide].image_url}
                        alt={heroImages[currentImageSlide].alt_text || 'Integral Dental'}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-xl md:rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                      />
                    </AnimatePresence>
                  ) : (
                    <div className="rounded-xl md:rounded-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary-dark/5">
                      <p className="text-sm font-medium text-gray-500">Nenhuma imagem disponível</p>
                    </div>
                  )}
                </div>

                {/* Image Navigation Controls */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageSlide(index)}
                      className={`transition-all ${
                        index === currentImageSlide
                          ? 'w-8 h-2 bg-white'
                          : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                      } rounded-full`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImageSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={nextImageSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 z-10"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>

                {/* Floating Cards - Hidden on small screens */}
                {!loading && heroImages.length > 0 && floatingCards
                  .filter(card => card.hero_image_id === heroImages[currentImageSlide].id)
                  .map((card) => {
                    const Icon = iconMap[card.icon_name];
                    const isLeft = card.position === 'left';

                    return (
                      <motion.div
                        key={card.id}
                        animate={{ y: [0, isLeft ? -15 : 15, 0] }}
                        transition={{
                          duration: isLeft ? 4 : 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: isLeft ? 0 : 1
                        }}
                        className={`hidden md:block absolute ${
                          isLeft
                            ? '-left-4 lg:-left-8 top-1/4 -translate-y-1/2 max-w-[160px] lg:max-w-[250px]'
                            : '-right-4 lg:-right-8 bottom-20'
                        } bg-white p-4 lg:p-${isLeft ? '6' : '5'} rounded-2xl shadow-2xl`}
                      >
                        <div className="flex items-start gap-2 lg:gap-3">
                          <div className="bg-primary/10 p-2 lg:p-3 rounded-xl">
                            <Icon className="w-6 lg:w-8 h-6 lg:h-8 text-primary" />
                          </div>
                          <div>
                            <div className="text-xs lg:text-sm font-semibold text-gray-900">{card.title}</div>
                            <div className="text-[10px] lg:text-xs text-gray-600 mt-1">{card.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
