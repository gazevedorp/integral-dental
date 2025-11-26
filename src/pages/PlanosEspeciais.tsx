import { motion } from "framer-motion";
import {
  Smile,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  Award,
  Phone,
  Mail,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlanosEspeciais = () => {
  const ortoplusFeatures = [
    "Planos mensais sem carência",
    "Dentistas especializados em ortodontia e estética",
    "Inclui cobertura clínica",
    "Atendimento em clínicas credenciadas Integral Dental",
    "Custo acessível e acompanhamento contínuo",
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Sem Carência",
      description:
        "Comece seu tratamento ortodôntico imediatamente após a contratação",
    },
    {
      icon: Star,
      title: "Especialistas Qualificados",
      description:
        "Profissionais especializados em ortodontia e estética dental",
    },
    {
      icon: Clock,
      title: "Acompanhamento Contínuo",
      description:
        "Monitoramento regular do seu tratamento para melhores resultados",
    },
    {
      icon: Award,
      title: "Cobertura Clínica Incluída",
      description:
        "Além da ortodontia, você tem acesso a procedimentos clínicos",
    },
  ];

  const whyOrthodontics = [
    {
      title: "Saúde",
      description:
        "Dentes alinhados facilitam a higienização e previnem doenças bucais",
    },
    {
      title: "Autoestima",
      description: "Um sorriso bonito aumenta a confiança e bem-estar pessoal",
    },
    {
      title: "Oportunidades",
      description:
        "Um sorriso alinhado abre portas no mercado de trabalho e relações sociais",
    },
    {
      title: "Funcionalidade",
      description: "Melhora a mastigação, fala e respiração",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary via-primary-dark to-primary-darker overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <Smile className="w-5 h-5 text-white" />
                <span className="text-white font-bold">Planos Especiais</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                Transforme seu Sorriso com{" "}
                <span className="text-yellow-300">Ortodontia</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                Planos especializados em ortodontia e implantes dentários para
                você conquistar o sorriso dos seus sonhos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#ortoplus"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Conhecer Ortoplus
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Vantagens dos nossos{" "}
              <span className="text-primary">Planos Especiais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefícios exclusivos para tratamentos especializados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ortoplus Section */}
      <section id="ortoplus" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              <span className="text-primary">Integral Ortoplus</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especializado em ortodontia para alinhar seu sorriso
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

              {/* Card */}
              <div className="relative bg-white border-2 border-gray-100 group-hover:border-primary/30 rounded-3xl p-8 md:p-12 hover:shadow-2xl transition-all">
                {/* Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl shadow-lg font-black text-sm">
                  ORTODONTIA
                </div>

                {/* Icon */}
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mx-auto">
                    <Smile className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <div className="text-center mb-8">
                  <h3 className="text-4xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Ortoplus
                  </h3>
                  <p className="text-xl text-primary font-bold mb-4">
                    Especializado em ortodontia
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    O Plano Integral Ortoplus é a escolha perfeita para quem
                    deseja alinhar o sorriso com aparelhos ortodônticos.
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {ortoplusFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Highlight */}
                <div className="bg-primary/5 rounded-xl p-6 mb-8">
                  <p className="text-lg text-gray-700 italic leading-relaxed text-center">
                    Mais do que estética: um sorriso alinhado é sinônimo de
                    saúde, autoestima e novas oportunidades.
                  </p>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-5 rounded-xl font-bold text-lg text-center shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Orthodontics Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Por que investir em{" "}
              <span className="text-primary">Ortodontia?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um sorriso alinhado vai muito além da estética
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyOrthodontics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-black text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implants Section */}
      <section id="implantes" className="py-20 md:py-32 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              <span className="text-primary">Implantes Dentários</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recupere seu sorriso com segurança e qualidade
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary-dark rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-primary/5 to-primary-dark/5 border-2 border-primary/20 group-hover:border-primary/40 rounded-3xl p-12 md:p-16 hover:shadow-2xl transition-all text-center">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg mx-auto">
                    <Smile className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl font-black text-gray-900 mb-6">
                  Implantes Dentários
                </h3>
                <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Recupere seu sorriso com segurança e qualidade. Entre em
                  contato conosco para mais informações sobre nossos planos de
                  implantes dentários.
                </p>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-black text-gray-900 mb-2">
                      Qualidade Garantida
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Materiais de primeira linha e procedimentos seguros
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-black text-gray-900 mb-2">
                      Profissionais Especializados
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Equipe experiente em implantodontia
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h4 className="font-black text-gray-900 mb-2">
                      Acompanhamento Completo
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Do planejamento à manutenção
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5516988326932&text=Gostaria%20de%20saber%20mais%20sobre%20implantes%20dent%C3%A1rios"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Entre em Contato
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary-darker">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Pronto para transformar seu{" "}
              <span className="text-yellow-300">sorriso?</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Entre em contato conosco e saiba mais sobre nossos planos
              especiais
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="https://api.whatsapp.com/send?phone=5516988326932"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-primary px-8 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Solicitar Proposta
              </motion.a>

              <motion.a
                href="mailto:contato@integraldental.com.br"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
                contato@integraldental.com.br
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanosEspeciais;
