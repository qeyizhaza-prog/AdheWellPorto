import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { PersonaMode } from '../data/portfolioData';
import { Language, UI_COPY } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onBookSession: (orientation: PersonaMode) => void;
}

export function Navbar({ lang, onLanguageChange, onBookSession }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const copy = UI_COPY[lang].nav;

  const navLinks = [
    { href: '#hero', label: copy.vision },
    { href: '#dual-persona', label: copy.dualPersona },
    { href: '#portfolio', label: copy.portfolio },
    { href: '#contact', label: copy.contact },
  ];

  const handleBookClick = () => {
    setMobileOpen(false);
    onBookSession('healer');
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-emerald-950/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-8">
        <a
          href="#hero"
          className="flex items-center gap-3 group whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#059669] rounded-md"
        >
          <span className="w-9 h-9 rounded-lg bg-[#064E3B] text-[#C5A059] flex items-center justify-center font-display text-lg font-bold border border-[#C5A059]/40 transition-transform duration-200 group-hover:scale-105">
            AW
          </span>
          <span className="font-display tracking-widest text-lg font-bold text-[#064E3B] group-hover:text-[#059669] transition-colors">
            ADHE WELIINGTON
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#064E3B]/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#059669] underline-offset-4 hover:underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#059669] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center p-0.5 rounded-lg bg-emerald-950/5 border border-emerald-950/10 shrink-0"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#064E3B] text-white'
                  : 'text-[#064E3B] hover:bg-white/80'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('id')}
              aria-pressed={lang === 'id'}
              className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'id'
                  ? 'bg-[#064E3B] text-white'
                  : 'text-[#064E3B] hover:bg-white/80'
              }`}
            >
              ID
            </button>
          </div>

          <button
            type="button"
            onClick={handleBookClick}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md bg-[#064E3B] text-white hover:bg-[#059669] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
          >
            <span>{copy.bookSession}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-emerald-950/15 text-[#064E3B] hover:bg-emerald-50 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-emerald-950/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 px-3 rounded-lg text-sm font-medium text-[#064E3B] hover:bg-emerald-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={handleBookClick}
            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-wider font-semibold rounded-lg bg-[#064E3B] text-white hover:bg-[#059669] transition-colors cursor-pointer"
          >
            <span>{copy.bookSession}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      )}
    </header>
  );
}
