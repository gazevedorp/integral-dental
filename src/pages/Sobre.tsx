import { motion } from 'framer-motion';
import { Award, Target, Heart, Users, Building2, MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

const Sobre = () => {
  const valores = [
    {
      icon: Heart,
      title: 'Compromisso e Responsabilidade',
      description: 'Dedicação total à saúde bucal dos nossos beneficiários'
    },
    {
      icon: Award,
      title: 'Competência e Inovação',
      description: 'Tecnologia avançada e profissionais altamente qualificados'
    },
    {
      icon: Users,
      title: 'Parceria Respeitosa',
      description: 'Relacionamento sólido com clientes e colaboradores'
    },
    {
      icon: Target,
      title: 'Ética e Transparência',
      description: 'Compromisso com a verdade e clareza em todas as ações'
    }
  ];

  const timeline = [
    { year: '1988', event: 'Fundação da Integral Dental em Ribeirão Preto' },
    { year: '1994', event: 'Expansão e consolidação no mercado regional' },
    { year: '2010', event: 'Modernização da estrutura operacional' },
    { year: '2025', event: 'Mais de 35 anos de tradição e excelência' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:100px_100px]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6"
            >
              <Building2 className="w-5 h-5 text-primary" />
              <span className="text-small font-bold text-primary">Sobre a Integral Dental</span>
            </motion.div>

            <h1 className="text-h1 font-black text-gray-900 mb-6">
              Mais de 35 anos cuidando do seu{' '}
              <span className="gradient-text">sorriso</span>
            </h1>

            <p className="text-lead text-gray-600 leading-relaxed">
              Fundada em 1988 em Ribeirão Preto, a Integral Dental é reconhecida pela
              excelência em tratamentos odontológicos e pelo compromisso com a satisfação total dos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-12 rounded-3xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-h3 font-black">Nossa Missão</h2>
              </div>
              <p className="text-lead leading-relaxed text-white/95">
                "Entregar qualidade em saúde bucal e garantir a satisfação total do cliente,
                estabelecendo um relacionamento sólido que resulte em proteção ao serviço de
                saúde odontológica e excelência odontológica para os beneficiários."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-h2 font-black text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam todas as nossas ações e decisões
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <valor.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-h4 font-black text-gray-900 mb-3">
                  {valor.title}
                </h3>
                <p className="text-body text-gray-600 leading-relaxed">
                  {valor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-h2 font-black text-gray-900 mb-6">
              Nossa Trajetória
            </h2>
            <p className="text-lead text-gray-600 max-w-2xl mx-auto">
              Uma história de crescimento e dedicação à saúde bucal
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="w-32 flex-shrink-0 text-right">
                  <div className="inline-block bg-primary text-white px-6 py-3 rounded-xl font-black text-h4">
                    {item.year}
                  </div>
                </div>
                <div className="relative flex-1 pb-12">
                  <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-primary/20" />
                  <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full -ml-[7px]" />
                  <div className="ml-8 bg-gray-50 p-6 rounded-xl border-2 border-gray-100">
                    <p className="text-h5 text-gray-700 font-medium">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-h2 font-black text-gray-900 mb-6">
                Por que escolher a Integral?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-h1 font-black text-primary mb-3">35+</div>
                <h3 className="text-h4 font-black text-gray-900 mb-2">Anos de Experiência</h3>
                <p className="text-body text-gray-600">Desde 1988 no mercado de planos odontológicos</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-h1 font-black text-primary mb-3">100%</div>
                <h3 className="text-h4 font-black text-gray-900 mb-2">Cobertura ROL ANS</h3>
                <p className="text-body text-gray-600">Todos os procedimentos obrigatórios cobertos</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-h1 font-black text-primary mb-3">3</div>
                <h3 className="text-h4 font-black text-gray-900 mb-2">Clínicas Próprias</h3>
                <p className="text-body text-gray-600">Em Ribeirão Preto com estrutura moderna</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-h2 font-black text-gray-900 mb-6">
                Informações Administrativas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-black text-gray-900 mb-2">Endereço da Sede</h3>
                    <p className="text-body text-gray-600">
                      Rua Santos Dummont 766<br />
                      Vila Tibério<br />
                      Ribeirão Preto – SP
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-black text-gray-900 mb-2">Contato</h3>
                    <p className="text-body text-gray-600">
                      Telefone: (16) 2102-7877<br />
                      WhatsApp: (16) 98832-6932
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-black text-gray-900 mb-2">E-mail</h3>
                    <p className="text-body text-gray-600 break-all">
                      administracao@integraldental.com.br
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-h5 font-black text-gray-900 mb-2">Responsável Técnico</h3>
                    <p className="text-body text-gray-600">
                      Dr. Ricardo Negrão Lutti<br />
                      CRO-SP 61439
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </div>
  );
};

export default Sobre;
