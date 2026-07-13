import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import StatsSection from './components/StatsSection';
import IntegrationsSection from './components/IntegrationsSection';
import TemplatesSection from './components/TemplatesSection';
import CTASection from './components/CTASection';
import ChangelogSection from './components/ChangelogSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <IntegrationsSection />
        <TemplatesSection />
        <CTASection />
        <ChangelogSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
