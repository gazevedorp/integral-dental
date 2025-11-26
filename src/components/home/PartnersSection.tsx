const PartnersSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          {/* ANS Logo */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 md:p-10 h-full flex items-center justify-center">
            <div className="relative w-full h-32 flex items-center justify-center">
              <img
                src="/ans.png"
                alt="ANS - Agência Nacional de Saúde Suplementar"
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* CROSP Logo */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 md:p-10 h-full flex items-center justify-center">
            <div className="relative w-full h-32 flex items-center justify-center">
              <img
                src="/crosp.png"
                alt="CROSP - Conselho Regional de Odontologia de São Paulo"
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* SINOG Logo */}
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 md:p-10 h-full flex items-center justify-center">
            <div className="relative w-full h-32 flex items-center justify-center">
              <img
                src="/sinog.png"
                alt="SINOG - Sindicato das Empresas de Odontologia de Grupo"
                className="max-w-full max-h-full object-contain filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
