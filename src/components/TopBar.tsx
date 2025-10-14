import { motion } from 'framer-motion';
import { ChevronDown, Lock } from 'lucide-react';
import { useState } from 'react';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const restrictedAreas = [
    {
      label: 'Área do Representante',
      href: 'http://prestador.odontosfera.com.br/login.aspx?operadora=359394'
    },
    {
      label: 'Área do Prestador',
      href: 'http://prestador.odontosfera.com.br/login.aspx?operadora=359394'
    },
    {
      label: 'Área para Empresas',
      href: 'http://cliente.odontosfera.com.br/login.aspx?operadora=359394'
    },
    {
      label: 'Área do Cliente',
      href: 'http://cliente.odontosfera.com.br/login.aspx?operadora=359394'
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-300 text-xs border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-10">
          {/* Desktop */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center gap-2 px-4 py-2 hover:text-white transition-colors">
              <Lock className="w-3 h-3" />
              <span className="font-medium">Área Restrita</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
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
          <div className="relative md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors"
            >
              <Lock className="w-3 h-3" />
              <span className="font-medium">Área Restrita</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
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
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors border-b border-gray-700 last:border-b-0"
                  >
                    {area.label}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
