import { useState } from 'react';
import {
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
  Mail,
  Code2,
  Sparkles,
} from 'lucide-react';
import { HERO_VISUAL_URL, PersonaMode } from '../data/portfolioData';
import { Language, UI_COPY } from '../data/translations';

interface HeroSectionProps {
  lang: Language;
  onConnectClick: (orientation?: PersonaMode) => void;
}

export function HeroSection({ lang, onConnectClick }: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);
  const copy = UI_COPY[lang].hero;

  const socialLinks = [
    {
      id: 'linkedin',
      label: copy.social.linkedin,
      href: 'https://linkedin.com',
      icon: Linkedin,
      highlighted: true,
      external: true,
    },
    {
      id: 'github',
      label: copy.social.github,
      href: 'https://github.com',
      icon: Github,
      highlighted: false,
      external: true,
    },
    {
      id: 'instagram',
      label: copy.social.instagram,
      href: 'https://instagram.com',
      icon: Instagram,
      highlighted: false,
      external: true,
    },
    {
      id: 'whatsapp',
      label: copy.social.whatsapp,
      href: 'https://wa.me/',
      icon: MessageCircle,
      highlighted: false,
      external: true,
    },
    {
      id: 'email',
      label: copy.social.email,
      href: 'mailto:adhe.weliington@example.com',
      icon: Mail,
      highlighted: false,
      external: false,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-6 pb-12 lg:pt-10 lg:pb-16 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto"
    >
      {/* Asymmetric 3-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Vertical Social & Quick Links Stack */}
        <div className="lg:col-span-3 flex lg:flex-col flex-wrap gap-2.5 pt-2 lg:pt-4 order-2 lg:order-1">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-3 p-1.5 pr-4 rounded-lg border transition-all duration-200 w-fit whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] ${
                  item.highlighted
                    ? 'bg-emerald-50 border-emerald-300 text-[#059669] hover:bg-emerald-100/80'
                    : 'bg-white/90 border-slate-200/90 text-slate-800 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-[#064E3B]'
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-md flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
                    item.highlighted
                      ? 'bg-[#059669] text-white shadow-sm'
                      : 'bg-[#064E3B] text-white group-hover:bg-[#059669]'
                  }`}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </span>
                <span
                  className={`font-display font-semibold tracking-wider text-xs uppercase ${
                    item.highlighted
                      ? 'text-[#064E3B] group-hover:text-[#059669]'
                      : 'text-slate-700 group-hover:text-[#064E3B]'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Center Column: Hero Centerpiece Visual with Ambient Aura & Bottom Fade */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2">
          <div
            aria-hidden="true"
            className="absolute inset-0 max-w-sm mx-auto h-[460px] bg-gradient-to-t from-emerald-200/40 via-emerald-100/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
          />

          <div className="relative w-full max-w-[420px] aspect-[3/4] flex items-end justify-center">
            {!imageError ? (
              <img
                src={HERO_VISUAL_URL}
                alt="Adhe Weliington — IT Specialist & Holistic Healer"
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="portrait-fade-mask object-cover object-top w-full h-full drop-shadow-xl select-none rounded-t-2xl"
              />
            ) : (
              <div className="portrait-fade-mask w-full h-full rounded-t-2xl bg-gradient-to-b from-[#064E3B] via-[#043427] to-white flex flex-col items-center justify-center text-center p-8 border border-[#C5A059]/40">
                <div className="w-20 h-20 rounded-2xl border border-[#C5A059]/60 bg-white/10 flex items-center justify-center font-display text-3xl font-bold text-[#E8D4A2] mb-4">
                  AW
                </div>
                <p className="font-display uppercase tracking-widest text-white text-lg">
                  Adhe Weliington
                </p>
                <p className="text-xs text-emerald-200/80 mt-1">{copy.portraitSub}</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Editorial Value Proposition & Connect CTA */}
        <div className="lg:col-span-3 flex flex-col items-start pt-2 lg:pt-4 order-3">
          <div className="space-y-4 max-w-xs">
            <div className="w-8 h-0.5 bg-[#C5A059]" aria-hidden="true" />
            <p className="text-sm md:text-base leading-relaxed text-slate-700 font-normal">
              {copy.valueProp}
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onConnectClick()}
                className="inline-flex items-center gap-4 bg-[#064E3B] hover:bg-[#043427] text-white pl-6 pr-2.5 py-2.5 rounded-xl shadow-lg shadow-emerald-950/20 border border-emerald-700/40 group transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                <span className="font-display uppercase tracking-widest text-base font-semibold">
                  {copy.connect}
                </span>
                <span className="w-8 h-8 rounded-lg bg-emerald-800/80 border border-[#C5A059]/60 text-[#E8D4A2] flex items-center justify-center group-hover:bg-[#059669] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-[#059669] shrink-0" aria-hidden="true" />
                <span>{copy.cred1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059] shrink-0" aria-hidden="true" />
                <span>{copy.cred2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Central Headline Overlapping Bottom Fade */}
      <div className="mt-6 lg:-mt-14 z-20 text-center pointer-events-none">
        <h1 className="hero-title-clamp font-display font-bold uppercase tracking-tight text-[#064E3B] leading-none mx-auto max-w-5xl">
          <span className="text-[#059669]">{copy.headlineLead}</span> {copy.headlineMid}
          <br className="hidden sm:inline" />{' '}
          <span className="text-[#064E3B]">{copy.headlineEnd}</span>
        </h1>
      </div>
    </section>
  );
}
