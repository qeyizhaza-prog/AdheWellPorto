import {
  Terminal,
  Leaf,
  Network,
  Laptop,
  FileText,
  HeartHandshake,
  Wind,
  CalendarCheck,
} from 'lucide-react';
import { PersonaMode } from '../data/portfolioData';
import { Language, UI_COPY } from '../data/translations';

interface DualPersonaSectionProps {
  lang: Language;
  activePersona: PersonaMode;
  onSelectPersona: (persona: PersonaMode) => void;
  onOpenResume: () => void;
  onBookHealing: () => void;
}

export function DualPersonaSection({
  lang,
  activePersona,
  onSelectPersona,
  onOpenResume,
  onBookHealing,
}: DualPersonaSectionProps) {
  const copy = UI_COPY[lang].persona;

  return (
    <section
      id="dual-persona"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-emerald-950/10"
    >
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-widest font-bold text-[#059669]">
          {copy.kicker}
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#064E3B] mt-3 tracking-tight text-balance">
          {copy.title}
        </h2>
        <p className="text-slate-600 mt-3 text-base leading-relaxed">
          {copy.subtitle}
        </p>

        {/* Interactive Tab Switcher */}
        <div
          role="tablist"
          aria-label="Professional profile switcher"
          className="inline-flex flex-wrap sm:flex-nowrap justify-center p-1.5 bg-emerald-900/10 rounded-2xl mt-8 border border-emerald-200 gap-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activePersona === 'it'}
            onClick={() => onSelectPersona('it')}
            className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-display uppercase tracking-wider text-sm font-bold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] ${
              activePersona === 'it'
                ? 'bg-[#064E3B] text-white shadow-md'
                : 'bg-transparent text-[#064E3B] hover:bg-white/70'
            }`}
          >
            <Terminal
              className={`w-4 h-4 ${activePersona === 'it' ? 'text-[#10B981]' : 'text-[#059669]'}`}
              aria-hidden="true"
            />
            <span>{copy.tabIt}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activePersona === 'healer'}
            onClick={() => onSelectPersona('healer')}
            className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-display uppercase tracking-wider text-sm font-bold transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] ${
              activePersona === 'healer'
                ? 'bg-[#064E3B] text-white shadow-md'
                : 'bg-transparent text-[#064E3B] hover:bg-white/70'
            }`}
          >
            <Leaf
              className={`w-4 h-4 ${activePersona === 'healer' ? 'text-[#E8D4A2]' : 'text-[#C5A059]'}`}
              aria-hidden="true"
            />
            <span>{copy.tabHealer}</span>
          </button>
        </div>
      </div>

      {activePersona === 'it' ? (
        <div
          role="tabpanel"
          aria-label={copy.tabIt}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-6">
                <Network className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#064E3B]">
                {copy.itCards.c1Title}
              </h3>
              <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                {copy.itCards.c1Desc}
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              {copy.itCards.c1Stack.join(' · ')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#064E3B]">
                {copy.itCards.c2Title}
              </h3>
              <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                {copy.itCards.c2Desc}
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              {copy.itCards.c2Stack.join(' · ')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#064E3B] to-[#043427] p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-3">
                {copy.itCards.c3Kicker}
              </p>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                {copy.itCards.c3Title}
              </h3>
              <p className="text-emerald-100/85 text-sm mt-2.5 leading-relaxed">
                {copy.itCards.c3Desc}
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#064E3B] font-display uppercase tracking-wider text-sm font-bold hover:bg-emerald-50 transition-colors shadow cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-[#059669]" aria-hidden="true" />
                <span>{copy.itCards.c3Cta}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          role="tabpanel"
          aria-label={copy.tabHealer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#064E3B]">
                {copy.healerCards.c1Title}
              </h3>
              <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                {copy.healerCards.c1Desc}
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              {copy.healerCards.c1Stack.join(' · ')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-emerald-100 hover:border-emerald-300 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C5A059] flex items-center justify-center mb-6">
                <Wind className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#064E3B]">
                {copy.healerCards.c2Title}
              </h3>
              <p className="text-slate-600 text-sm mt-2.5 leading-relaxed">
                {copy.healerCards.c2Desc}
              </p>
            </div>
            <p className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
              {copy.healerCards.c2Stack.join(' · ')}
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#064E3B] via-emerald-900 to-teal-950 p-8 rounded-2xl text-white shadow-xl flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E8D4A2] mb-3">
                {copy.healerCards.c3Kicker}
              </p>
              <h3 className="font-display text-2xl font-bold uppercase text-white">
                {copy.healerCards.c3Title}
              </h3>
              <p className="text-emerald-100/85 text-sm mt-2.5 leading-relaxed">
                {copy.healerCards.c3Desc}
              </p>
            </div>
            <div className="pt-6">
              <button
                type="button"
                onClick={onBookHealing}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C5A059] text-[#043427] font-display uppercase tracking-wider text-sm font-bold hover:bg-[#E8D4A2] transition-colors shadow cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" aria-hidden="true" />
                <span>{copy.healerCards.c3Cta}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
