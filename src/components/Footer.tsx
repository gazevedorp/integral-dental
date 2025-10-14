import { motion } from 'framer-motion';
import { Facebook, Instagram, MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img
                src="/logo-integral-dental.png"
                alt="Integral Dental"
                className="h-16 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-xs-responsive text-gray-400">Desde 1988</p>
            </div>
            <p className="text-body text-gray-400 mb-6 leading-relaxed">
              Mais de 35 anos de tradição e excelência em saúde bucal.
            </p>
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
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-h5 font-black mb-6 relative inline-block">
              Navegação
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/#planos" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Plano Empresarial
                </a>
              </li>
              <li>
                <a href="/#planos" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Plano Familiar
                </a>
              </li>
              <li>
                <a href="/#planos" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Ortodontia
                </a>
              </li>
              <li>
                <a href="http://rede.odontosfera.com.br/RedeCredenciada.aspx?operadora=359394" target="_blank" rel="noopener noreferrer" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Rede Credenciada
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-body text-gray-400 hover:text-white hover:pl-2 transition-all inline-block">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
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
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-small text-gray-400">Ouvidoria</p>
                  <a href="tel:+551621027877" className="text-body font-bold hover:text-primary transition-colors">
                    (16) 2102-7877
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-small text-gray-400">E-mail</p>
                  <a href="mailto:administracao@integraldental.com.br" className="font-bold text-small hover:text-primary transition-colors">
                    administracao@integraldental.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-small text-gray-400">Localização</p>
                  <p className="text-body font-bold">Ribeirão Preto, SP</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-h5 font-black mb-6 relative inline-block">
              Certificações
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full" />
            </h4>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-black text-small">ANS</span>
                  </div>
                  <p className="font-bold text-small">Registrada ANS</p>
                </div>
                <p className="text-xs-responsive text-gray-400">Agência Nacional de Saúde Suplementar</p>
                <div className="mt-2 text-xs-responsive text-gray-400">
                  <p>• CROSP • SINOG • IDSS</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-small text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Ativa desde 1988 (35+ anos)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs-responsive text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Integral Dental. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs-responsive">
              <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                Sobre a Integral
              </a>
              <a href="/duvidas" className="text-gray-400 hover:text-white transition-colors">
                Dúvidas Frequentes
              </a>
              <a href="/ouvidoria" className="text-gray-400 hover:text-white transition-colors">
                Ouvidoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
