import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import type { IDSSCategory, IDSSDocument, IDSSCategoryWithDocuments } from '../../types/idss';

const IDSSSection = () => {
  const [openIDSS, setOpenIDSS] = useState<string | null>(null);
  const [idssData, setIdssData] = useState<IDSSCategoryWithDocuments[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIDSSData = async () => {
      try {
        const { data: categories, error: categoriesError } = await supabase
          .from('idss_categories')
          .select('*')
          .order('display_order', { ascending: true });

        if (categoriesError) throw categoriesError;

        const { data: documents, error: documentsError } = await supabase
          .from('idss_documents')
          .select('*')
          .order('display_order', { ascending: true });

        if (documentsError) throw documentsError;

        const categoriesWithDocuments: IDSSCategoryWithDocuments[] = (categories || []).map((category: IDSSCategory) => ({
          ...category,
          documents: (documents || []).filter((doc: IDSSDocument) => doc.category_id === category.id)
        }));

        setIdssData(categoriesWithDocuments);
      } catch (error) {
        console.error('Erro ao carregar dados IDSS:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIDSSData();
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-primary">Certificação Oficial ANS</span>
            </div>

            <h2 className="text-h2 font-black text-gray-900 mb-6">
              Qualidade{' '}
              <span className="relative inline-block">
                Certificada
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute bottom-1 left-0 right-0 h-4 bg-primary/30 -z-10"
                />
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-10 lg:p-12"
          >
            <div className="grid lg:grid-cols-[1fr,300px] gap-12 items-start">
              <div>
                <h3 className="text-h3 font-black text-gray-900 mb-6">
                  Índice de Desempenho da Saúde Suplementar - IDSS
                </h3>

                <p className="text-gray-700 leading-relaxed mb-8 text-body">
                  O Índice de Desempenho da Saúde Suplementar – IDSS – é a avaliação de desempenho das
                  operadoras de planos de saúde que compõe o Programa de Qualificação da Saúde Suplementar,
                  definido pela Agência Nacional de Saúde Suplementar – ANS.
                </p>

                <div className="space-y-4 mb-8">
                  {!loading && idssData.map((operator, index) => (
                    <div key={operator.id} className="border-2 border-primary/20 rounded-2xl overflow-hidden">
                      {/* Accordion Header */}
                      <button
                        onClick={() => setOpenIDSS(openIDSS === operator.id ? null : operator.id)}
                        className="w-full flex items-center justify-between gap-3 p-4 bg-primary/5 hover:bg-primary/10 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-white font-black text-sm">{index + 1}</span>
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900 mb-1">{operator.code}</p>
                            <p className="text-gray-600 text-sm">{operator.name}</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {openIDSS === operator.id ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </button>

                      {/* Accordion Content */}
                      <AnimatePresence>
                        {openIDSS === operator.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 bg-white space-y-3">
                              {operator.documents.map((doc) => (
                                <a
                                  key={doc.id}
                                  href={doc.file_path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                                >
                                  <span className="text-gray-700 font-medium">{doc.title}</span>
                                  <span className="text-primary font-bold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                                    Visualizar
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </span>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <a
                  href="http://www.ans.gov.br/planos-de-saude-e-operadoras/informacoes-e-avaliacoes-de-operadoras/qualificacao-ans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
                >
                  <span>Para mais informações acesse o site da ANS</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Badge ANS */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 blur-2xl rounded-full" />
                <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white text-center shadow-2xl">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-2xl font-black mb-2">ANS</p>
                  <p className="text-sm opacity-90 font-bold">Operadora Qualificada</p>
                  <p className="text-xs opacity-75 mt-2">Certificação Oficial</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IDSSSection;
