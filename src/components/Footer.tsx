import { motion } from 'framer-motion';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import iconWhatsApp from '../assets/icon-whatsapp.png';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">


        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/logo-integral-dental.png"
                alt="Integral Dental"
                className="h-16 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-xs-responsive text-gray-400">Desde 1990</p>
            </div>
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://pt-br.facebook.com/integralconvenio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://www.instagram.com/integraldental_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                href="https://api.whatsapp.com/send?phone=5516988326932"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all"
              >
                <img src={iconWhatsApp} alt="WhatsApp" className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Menu Principal */}
          <div>
            <h4 className="text-h5 font-black mb-6 relative inline-block">
              Navegação
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/sobre" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="/#planos" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Planos
                </a>
              </li>
              <li>
                <span className="text-body text-gray-500 opacity-50 cursor-not-allowed inline-block" title="Em breve">
                  Notícias
                </span>
              </li>
              <li>
                <a href="/#contato" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Contato
                </a>
              </li>
              <li>
                <a href="/duvidas" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Downloads e Recursos */}
          <div>
            <h4 className="text-h5 font-black mb-6 relative inline-block">
              Recursos
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/para-dentistas" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Para Dentistas
                </a>
              </li>
              <li>
                <a href="/para-pacientes" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Para Pacientes
                </a>
              </li>
              <li>
                <a href="/canal-etico" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Canal Ético
                </a>
              </li>
              <li>
                <a href="http://rede.odontosfera.com.br/RedeCredenciada.aspx?operadora=359394" target="_blank" rel="noopener noreferrer" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Rede Credenciada
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-h5 font-black mb-6 relative inline-block">
              Contato
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-small text-gray-400">Atendimento</p>
                  <a href="tel:+551621027888" className="text-body font-bold hover:text-primary transition-colors">
                    (16) 2102-7888
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-small text-gray-400">E-mail</p>
                  <a href="mailto:contato@integraldental.com.br" className="w-72 font-bold text-small hover:text-primary transition-colors block break-all">
                    contato@integraldental.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs-responsive text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Integral Dental. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
