import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);
  const [restrictedOpen, setRestrictedOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
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
    { label: 'Início', href: '/' },
    { label: 'Planos', href: '/#planos' },
    { label: 'Rede Credenciada', href: 'http://rede.odontosfera.com.br/RedeCredenciada.aspx?operadora=359394', external: true },
    { label: 'Contato', href: '/#contato' },
  ];

  const sobreSubmenu = [
    { label: 'Sobre a Integral', href: '/sobre' },
    { label: 'Dúvidas Frequentes', href: '/duvidas' },
    { label: 'Planos Atendidos', href: '/planos-atendidos' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Ouvidoria', href: '/ouvidoria' },
  ];

  const restrictedAreas = [
    { label: 'Área do Representante', href: 'http://prestador.odontosfera.com.br/login.aspx?operadora=359394' },
    { label: 'Área do Prestador', href: 'http://prestador.odontosfera.com.br/login.aspx?operadora=359394' },
    { label: 'Área para Empresas', href: 'http://cliente.odontosfera.com.br/login.aspx?operadora=359394' },
    { label: 'Área do Cliente', href: 'http://cliente.odontosfera.com.br/login.aspx?operadora=359394' }
  ];

  return (
    <>
      {/* Top Bar - Área Restrita */}
      <div className="bg-gray-900 text-gray-300 text-xs-responsive border-b border-gray-800 fixed top-0 left-0 right-0 z-[100]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end h-10">
            {/* Desktop */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setRestrictedOpen(true)}
              onMouseLeave={() => setRestrictedOpen(false)}
            >
              <button className="flex items-center gap-2 px-4 py-2 hover:text-white transition-colors text-xs-responsive">
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

            {/* Mobile */}
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setRestrictedOpen(!restrictedOpen);
                }}
                className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors text-xs-responsive"
                type="button"
              >
                <span className="font-medium">Área Restrita</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${restrictedOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

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
          scrolled ? 'glass-card shadow-glass-lg' : ''
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
                onClick={(e) => !item.external && handleNavClick(e, item.href)}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-700 hover:text-primary transition-colors font-medium relative group px-4 py-2 rounded-xl hover:bg-primary/5"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-dark group-hover:w-[calc(100%-2rem)] transition-all duration-300 rounded-full" />
              </motion.a>
            ))}

            {/* Submenu Sobre */}
            <div
              className="relative group/sobre"
              onMouseEnter={() => setSobreOpen(true)}
              onMouseLeave={() => setSobreOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary transition-colors font-medium relative px-4 py-2 rounded-xl hover:bg-primary/5 flex items-center gap-1">
                <span>Sobre</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${sobreOpen ? 'rotate-180' : ''}`} />
              </button>

              {sobreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 pt-2 w-56"
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    {sobreSubmenu.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors font-medium text-small"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </nav>

          {/* CTA & Contact */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+551621027888"
              className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium px-4 py-2 rounded-xl hover:bg-gray-50"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <span className="text-small font-medium">(16) 2102-7888</span>
            </a>

            <motion.a
              href="https://api.whatsapp.com/send?phone=5516988326932"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium text-white px-7 py-3 rounded-xl font-bold text-small shadow-glass hover:shadow-glass-lg transition-smooth"
            >
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
                  if (!item.external) {
                    handleNavClick(e, item.href);
                  } else {
                    setIsOpen(false);
                  }
                }}
                target={item.external ? '_blank' : '_self'}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-semibold"
              >
                {item.label}
              </a>
            ))}
            {sobreSubmenu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 pl-8 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors font-medium text-small"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:+551621027888"
                className="flex items-center gap-3 py-3 px-4 text-primary bg-primary/5 rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4" />
                (16) 2102-7888
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5516988326932"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl font-bold shadow-lg text-center"
              >
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
