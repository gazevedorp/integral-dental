import { useEffect } from 'react';

const GoogleTagManager = () => {
  useEffect(() => {
    // Script do GTM
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-55LP65QV');`;

    // Adiciona o script no head se ainda não existir
    if (!document.querySelector('[data-gtm-script]')) {
      script.setAttribute('data-gtm-script', 'true');
      document.head.appendChild(script);
    }
  }, []);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-55LP65QV"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};

export default GoogleTagManager;
