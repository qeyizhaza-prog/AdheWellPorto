import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DualPersonaSection } from './components/DualPersonaSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal, ResumeModal } from './components/Modals';
import {
  PersonaMode,
  PortfolioCategory,
  PortfolioProject,
} from './data/portfolioData';
import { BILINGUAL_PROJECTS, Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved =
      typeof window !== 'undefined' ? window.localStorage.getItem('aw_lang') : null;
    return saved === 'id' ? 'id' : 'en';
  });
  const [activePersona, setActivePersona] = useState<PersonaMode>('it');
  const [portfolioFilter, setPortfolioFilter] = useState<PortfolioCategory>('all');
  const [contactOrientation, setContactOrientation] = useState<PersonaMode>('it');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem('aw_lang', lang);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [lang]);

  const navigateToContact = (orientation?: PersonaMode) => {
    if (orientation) {
      setContactOrientation(orientation);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedProjectData = selectedProjectId
    ? BILINGUAL_PROJECTS.find((p) => p.id === selectedProjectId) ?? null
    : null;

  const localizedSelectedProject: PortfolioProject | null = selectedProjectData
    ? {
        id: selectedProjectData.id,
        category: selectedProjectData.category,
        ...selectedProjectData.translations[lang],
      }
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#111827]">
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onBookSession={(orientation) => navigateToContact(orientation)}
      />

      <main className="flex-1 bg-radial-luxury overflow-x-clip">
        <HeroSection
          lang={lang}
          onConnectClick={(orientation) =>
            navigateToContact(orientation ?? activePersona)
          }
        />

        <DualPersonaSection
          lang={lang}
          activePersona={activePersona}
          onSelectPersona={(persona) => {
            setActivePersona(persona);
            setContactOrientation(persona);
          }}
          onOpenResume={() => setIsResumeOpen(true)}
          onBookHealing={() => navigateToContact('healer')}
        />

        <PortfolioSection
          lang={lang}
          activeFilter={portfolioFilter}
          onFilterChange={setPortfolioFilter}
          onSelectProject={(project) => setSelectedProjectId(project.id)}
        />

        <ContactSection
          lang={lang}
          selectedOrientation={contactOrientation}
          onOrientationChange={setContactOrientation}
        />
      </main>

      <Footer lang={lang} />

      <ResumeModal
        lang={lang}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onInquire={(orientation) => navigateToContact(orientation)}
      />

      <ProjectModal
        lang={lang}
        project={localizedSelectedProject}
        onClose={() => setSelectedProjectId(null)}
        onInquire={(orientation) => navigateToContact(orientation)}
      />
    </div>
  );
}
