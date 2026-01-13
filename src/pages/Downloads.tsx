import { motion } from 'framer-motion';
import { Download, FileText, Users, Stethoscope } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import GoogleTagManager from '../components/GoogleTagManager';

const Downloads = () => {
  const dentistDocuments = [
    {
      title: 'Manual do Credenciado',
      description: 'Guia completo para profissionais credenciados',
      url: 'http://integraldental.com.br/wp-content/uploads/2018/12/Manual_Credenciado.pdf'
    },
    {
      title: 'Exame Periodontal Simplificado',
      description: 'Protocolo para exame periodontal',
      url: 'http://integraldental.com.br/wp-content/uploads/2018/12/PSR_site.pdf'
    },
    {
      title: 'Guia de Tratamento Odontológico',
      description: 'Diretrizes para tratamentos odontológicos',
      url: 'http://integraldental.com.br/wp-content/uploads/2018/12/Guia_de_Tratamento_Odontologico_site.pdf'
    },
    {
      title: 'Manual do Aplicativo Integral',
      description: 'Como utilizar o aplicativo para dentistas',
      url: 'http://integraldental.com.br/wp-content/uploads/2018/12/manual_aplicativo_integral.pdf'
    }
  ];

  const beneficiaryDocuments = [
    {
      title: 'Manual de Contratação de Planos',
      description: 'Guia completo para contratar seu plano',
      url: 'http://integraldental.com.br/wp-content/uploads/2018/12/manual_contratacao_planos__1_.pdf'
    },
    {
      title: 'Guia de Leitura Contratual',
      description: 'Entenda os termos do seu contrato',
      url: 'http://integraldental.com.br/wp-content/uploads/2018/12/guia_leitura_contratual.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <GoogleTagManager />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-white to-primary-dark/5">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary-dark/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-5 py-2 rounded-full border border-primary/20 mb-8"
            >
              <Download className="w-4 h-4 text-primary" />
              <span className="text-small font-semibold text-primary">Área de Downloads</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-h2 font-black text-gray-900 mb-6"
            >
              Downloads
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lead text-gray-600 leading-relaxed"
            >
              Acesse manuais, guias e documentos importantes para dentistas e beneficiários
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Dentistas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-h2 font-black text-gray-900">Para você Dentista</h2>
                <p className="text-body text-gray-600">Documentos e manuais para profissionais credenciados</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {dentistDocuments.map((doc, index) => (
              <motion.a
                key={doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white border-2 border-gray-100 hover:border-primary/30 rounded-2xl p-6 hover:shadow-2xl transition-all"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-h4 font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-small text-gray-600 mb-4">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-small">
                      <Download className="w-4 h-4" />
                      <span>Baixar PDF</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Beneficiários Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-h2 font-black text-gray-900">Para você Beneficiário</h2>
                <p className="text-body text-gray-600">Guias e manuais para nossos clientes</p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {beneficiaryDocuments.map((doc, index) => (
              <motion.a
                key={doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white border-2 border-gray-100 hover:border-primary/30 rounded-2xl p-6 hover:shadow-2xl transition-all"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

                <div className="relative flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-h4 font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-small text-gray-600 mb-4">
                      {doc.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-small">
                      <Download className="w-4 h-4" />
                      <span>Baixar PDF</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="flex-shrink-0"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  );
};

export default Downloads;
