import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/home/HeroSection';
import BenefitsSection from '../components/home/BenefitsSection';
import PlansSection from '../components/home/PlansSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import IDSSSection from '../components/home/IDSSSection';
import NewsSection from '../components/home/NewsSection';
import ContactSection from '../components/home/ContactSection';
import PartnersSection from '../components/home/PartnersSection';
import GoogleTagManager from '../components/GoogleTagManager';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <GoogleTagManager />
      <Header />

      <HeroSection />

      <PlansSection />

      <BenefitsSection />

      <TestimonialsSection />

      <CTASection />

      <IDSSSection />

      <NewsSection />

      <FAQSection />

      <ContactSection />

      <PartnersSection />

      <Footer />
    </div>
  );
};

export default Home;
