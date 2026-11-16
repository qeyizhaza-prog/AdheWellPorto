import { useEffect } from 'react';
import { X, Printer, ArrowRight } from 'lucide-react';
import {
  HEALER_CREDENTIALS,
  IT_CERTIFICATIONS,
  PersonaMode,
  PortfolioProject,
} from '../data/portfolioData';
import {
  BILINGUAL_IT_EXPERIENCE,
  Language,
  UI_COPY,
} from '../data/translations';

interface ResumeModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (orientation: PersonaMode) => void;
}

export function ResumeModal({
  lang,
  isOpen,
  onClose,
  onInquire,
}: ResumeModalProps) {
  const copy = UI_COPY[lang].modals;
  const experience = BILINGUAL_IT_EXPERIENCE[lang];

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[88vh] overflow-y-auto border border-emerald-200 shadow-2xl p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#059669]">
              {copy.cvKicker}
            </p>
            <h2
              id="resume-modal-title"
              className="font-display text-3xl font-bold uppercase text-[#064E3B] mt-1"
            >
              Adhe Weliington
            </h2>
            <p className="text-sm text-slate-600 mt-1">{copy.cvSubtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#064E3B] text-white hover:bg-[#059669] transition-colors cursor-pointer whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{copy.printPdf}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={copy.close}
              className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 space-y-8">
          <div>
            <h3 className="font-display text-lg font-bold uppercase text-[#064E3B] mb-4">
              {copy.expHeading}
            </h3>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div
                  key={exp.period}
                  className="pb-4 border-b border-slate-100 last:border-b-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-slate-900 text-sm">{exp.role}</h4>
                    <span className="text-xs font-mono text-[#059669] font-semibold tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {exp.organization}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc pl-4">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
            <div>
              <h3 className="font-display text-base font-bold uppercase text-[#064E3B] mb-2.5">
                {copy.itCertHeading}
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {IT_CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="leading-relaxed">
                    · {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold uppercase text-[#064E3B] mb-2.5">
                {copy.healerCredHeading}
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {HEALER_CREDENTIALS.map((cred) => (
                  <li key={cred} className="leading-relaxed">
                    · {cred}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">{copy.cvFooterNote}</p>
          <button
            type="button"
            onClick={() => {
              onClose();
              onInquire('it');
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#064E3B] text-white text-xs font-display uppercase tracking-wider font-bold hover:bg-[#059669] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>{copy.discussCta}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  lang: Language;
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (orientation: PersonaMode) => void;
}

export function ProjectModal({
  lang,
  project,
  onClose,
  onInquire,
}: ProjectModalProps) {
  const copy = UI_COPY[lang].modals;

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-emerald-200 shadow-2xl p-6 sm:p-9"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#059669]">
              {project.discipline} · {project.year}
            </p>
            <h2
              id="project-modal-title"
              className="font-display text-3xl font-bold uppercase text-[#064E3B] mt-1 text-balance"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.close}
            className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1.5">
              {copy.challengeHeading}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1.5">
              {copy.approachHeading}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.approach}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <p className="text-[11px] uppercase tracking-wider font-bold text-[#059669]">
              {copy.impactHeading}
            </p>
            <p className="text-base font-bold text-[#064E3B] mt-0.5 tabular-nums">
              {project.result}
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-1.5">
              {copy.stackHeading}
            </h3>
            <p className="text-xs font-medium text-slate-700">
              {project.capabilities.join(' · ')}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            {copy.close}
          </button>
          <button
            type="button"
            onClick={() => {
              const orientation: PersonaMode =
                project.category === 'it' ? 'it' : 'healer';
              onClose();
              onInquire(orientation);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#064E3B] text-white text-xs font-display uppercase tracking-wider font-bold hover:bg-[#059669] transition-colors cursor-pointer"
          >
            <span>{copy.inquireSimilar}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
