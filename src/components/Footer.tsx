import { Linkedin, Github, Instagram, MessageCircle } from 'lucide-react';
import { Language, UI_COPY } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const copy = UI_COPY[lang].footer;

  return (
    <footer className="bg-[#043427] text-white border-t border-emerald-900 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#064E3B] text-[#C5A059] flex items-center justify-center font-display text-sm font-bold border border-[#C5A059]/35">
            AW
          </div>
          <div>
            <span className="font-display tracking-widest text-sm font-bold uppercase text-white">
              ADHE WELIINGTON
            </span>
            <p className="text-[11px] text-emerald-200/75">{copy.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-emerald-200/80">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#10B981] transition-colors"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#10B981] transition-colors"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#10B981] transition-colors"
          >
            <Instagram className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-[#10B981] transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>

        <p className="text-xs text-emerald-300/70">{copy.copyright}</p>
      </div>
    </footer>
  );
}
