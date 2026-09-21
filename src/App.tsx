import { useScrollSpy } from './hooks/useScrollSpy';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './sections/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { FeaturedProject } from './sections/FeaturedProject';
import { CertificatesSection } from './sections/CertificatesSection';
import { DesignCodeBridge } from './sections/DesignCodeBridge';
import { SkillsSection } from './sections/SkillsSection';
import { EducationSection } from './sections/EducationSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

export function App() {
  const activeSection = useScrollSpy([
    'hero',
    'work',
    'about',
    'certificates',
    'design-code',
    'skills',
    'education',
    'achievements',
    'contact',
  ]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#111111] dark:text-[#F5F5F5] font-sans antialiased selection:bg-blue-100 selection:text-blue-900 transition-colors duration-200">
        {/* Sticky Top Navigation */}
        <Navbar activeSection={activeSection} />

        {/* Main Portfolio Sections */}
        <main>
          <HeroSection />
          <FeaturedProject />
          <AboutSection />
          <CertificatesSection />
          <DesignCodeBridge />
          <SkillsSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
