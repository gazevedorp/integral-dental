import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ChevronDown, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import iconWhatsApp from '../assets/icon-whatsapp.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [restrictedOpen, setRestrictedOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();

  // Se não estiver na home, sempre usar fundo branco
  const isHome = location.pathname === '/';
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    isHome ? ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)'] : ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Se o href começa com /#, é uma âncora da home
    if (href.startsWith('/#')) {
      e.preventDefault();
      const anchor = href.substring(2); // Remove o /#
      
      // Se já estamos na home, apenas scroll
      if (location.pathname === '/') {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Se não estamos na home, navega primeiro e depois scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      setIsOpen(false);
    }
  };

  const menuItems = [
    { label: 'Quem Somos', href: '/sobre' },
    { label: 'Planos', href: '/#planos' },
    { label: 'Notícias', href: '/noticias' },
    { label: 'Contato', href: '/#contato' },
    { label: 'FAQ', href: '/duvidas' },
  ];

  const restrictedAreas = [
    { label: 'Área do Representante', href: 'http://prestador.odontosfera.com.br/login.aspx?operadora=359394' },
    { label: 'Área do Dentista', href: 'http://prestador.odontosfera.com.br/login.aspx?operadora=359394' },
    { label: 'Área para Empresas', href: 'http://cliente.odontosfera.com.br/login.aspx?operadora=359394' },
    { label: 'Área do Beneficiário', href: 'http://cliente.odontosfera.com.br/login.aspx?operadora=359394' }
  ];

  const downloadsMenu = [
    { label: 'Para Dentistas', href: '/para-dentistas' },
    { label: 'Para Pacientes', href: '/para-pacientes' }
  ];

  return (
    <>
      {/* Top Bar - Downloads, Canal Ético, Rede Credenciada e Área Restrita */}
      <div className="bg-gray-900 text-gray-300 text-xs-responsive border-b border-gray-800 fixed top-0 left-0 right-0 z-[100]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-10 gap-1">
            {/* Desktop - Downloads */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setDownloadsOpen(true)}
              onMouseLeave={() => setDownloadsOpen(false)}
            >
              <button className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors text-xs-responsive">
                <span className="font-medium">Downloads</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${downloadsOpen ? 'rotate-180' : ''}`} />
              </button>

              {downloadsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-0 w-56 bg-gray-800 border border-gray-700 rounded-b-lg shadow-2xl overflow-hidden z-50"
                >
                  {downloadsMenu.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Desktop - Canal Ético */}
            <a
              href="/canal-etico"
              className="hidden md:flex items-center gap-2 px-3 py-2 hover:text-white transition-colors text-xs-responsive font-medium"
            >
              Canal Ético
            </a>

            {/* Desktop - Rede Credenciada */}
            <a
              href="http://rede.odontosfera.com.br/RedeCredenciada.aspx?operadora=359394"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-3 py-2 hover:text-white transition-colors text-xs-responsive font-medium"
            >
              Rede Credenciada
            </a>

            {/* Desktop - Área Restrita */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setRestrictedOpen(true)}
              onMouseLeave={() => setRestrictedOpen(false)}
            >
              <button className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors text-xs-responsive">
                <span className="font-medium">Área Restrita</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${restrictedOpen ? 'rotate-180' : ''}`} />
              </button>

              {restrictedOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-0 w-56 bg-gray-800 border border-gray-700 rounded-b-lg shadow-2xl overflow-hidden z-50"
                >
                  {restrictedAreas.map((area, index) => (
                    <a
                      key={index}
                      href={area.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0"
                    >
                      {area.label}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mobile - Menu compacto */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDownloadsOpen(!downloadsOpen);
                  setRestrictedOpen(false);
                }}
                className="flex items-center gap-1 px-2 py-2 hover:text-white transition-colors text-xs-responsive"
                type="button"
              >
                <span className="font-medium text-[10px]">Downloads</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${downloadsOpen ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setRestrictedOpen(!restrictedOpen);
                  setDownloadsOpen(false);
                }}
                className="flex items-center gap-1 px-2 py-2 hover:text-white transition-colors text-xs-responsive"
                type="button"
              >
                <span className="font-medium text-[10px]">Área Restrita</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${restrictedOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Downloads Menu Dropdown - Portal style */}
      {downloadsOpen && (
        <div className="md:hidden fixed top-10 left-0 right-0 z-[110]">
          {/* Backdrop para fechar ao clicar fora */}
          <div
            className="fixed inset-0 bg-black/30 z-[105]"
            onClick={(e) => {
              e.stopPropagation();
              setDownloadsOpen(false);
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-[110] mx-4 mt-0 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden"
          >
            {downloadsMenu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.stopPropagation();
                  setDownloadsOpen(false);
                }}
                className="block px-4 py-4 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0 text-small font-medium active:bg-gray-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/canal-etico"
              onClick={(e) => {
                e.stopPropagation();
                setDownloadsOpen(false);
              }}
              className="block px-4 py-4 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0 text-small font-medium active:bg-gray-600"
            >
              Canal Ético
            </a>
            <a
              href="http://rede.odontosfera.com.br/RedeCredenciada.aspx?operadora=359394"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                setDownloadsOpen(false);
              }}
              className="block px-4 py-4 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0 text-small font-medium active:bg-gray-600"
            >
              Rede Credenciada
            </a>
          </motion.div>
        </div>
      )}

      {/* Mobile Restricted Menu Dropdown - Portal style */}
      {restrictedOpen && (
        <div className="md:hidden fixed top-10 left-0 right-0 z-[110]">
          {/* Backdrop para fechar ao clicar fora */}
          <div
            className="fixed inset-0 bg-black/30 z-[105]"
            onClick={(e) => {
              e.stopPropagation();
              setRestrictedOpen(false);
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-[110] mx-4 mt-0 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl overflow-hidden"
          >
            {restrictedAreas.map((area, index) => (
              <a
                key={index}
                href={area.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  setRestrictedOpen(false);
                }}
                className="block px-4 py-4 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0 text-small font-medium active:bg-gray-600"
              >
                {area.label}
              </a>
            ))}
          </motion.div>
        </div>
      )}

      {/* Main Header */}
      <motion.header
        style={{ backgroundColor: headerBg }}
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || !isHome ? 'glass-card shadow-glass-lg' : ''
        }`}
      >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <img
              src="/logo-integral-dental.png"
              alt="Integral Dental"
              className="h-12 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-700 hover:text-primary transition-colors font-medium relative group px-4 py-2 rounded-xl hover:bg-primary/5"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2 mr-2">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://pt-br.facebook.com/integralconvenio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                title="Facebook"
              >
                <Facebook className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.instagram.com/integraldentaloficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                title="Instagram"
              >
                <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
              </motion.a>
            </div>

            <motion.a
              href={`https://api.whatsapp.com/send?phone=5516988326932&text=${encodeURIComponent('Oi! Tudo bem? Acessei o site da Integral Dental e queria entender melhor os planos disponíveis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium text-white px-7 py-3 rounded-xl font-bold text-small shadow-glass hover:shadow-glass-lg transition-smooth flex items-center gap-2"
            >
              <img src={iconWhatsApp} alt="WhatsApp" className="w-4 h-4" />
              Solicitar Proposta
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-dark text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 space-y-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                }}
                className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-semibold"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              {/* Social Media - Mobile */}
              <div className="flex justify-center gap-3 pb-2">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://pt-br.facebook.com/integralconvenio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                  title="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/integraldental_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://api.whatsapp.com/send?phone=5516988326932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all group"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </motion.a>
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=5516988326932&text=${encodeURIComponent('Oi! Tudo bem? Acessei o site da Integral Dental e queria entender melhor os planos disponíveis.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-lg"
              >
                <img src={iconWhatsApp} alt="WhatsApp" className="w-4 h-4" />
                Solicitar Proposta
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
    </>
  );
};

export default Header;
