import { ArrowUpRight } from 'lucide-react';
import { PortfolioCategory, PortfolioProject } from '../data/portfolioData';
import { BILINGUAL_PROJECTS, Language, UI_COPY } from '../data/translations';

interface PortfolioSectionProps {
  lang: Language;
  activeFilter: PortfolioCategory;
  onFilterChange: (filter: PortfolioCategory) => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export function PortfolioSection({
  lang,
  activeFilter,
  onFilterChange,
  onSelectProject,
}: PortfolioSectionProps) {
  const copy = UI_COPY[lang].portfolio;

  const filterOptions: { value: PortfolioCategory; label: string }[] = [
    { value: 'all', label: copy.filters.all },
    { value: 'it', label: copy.filters.it },
    { value: 'healing', label: copy.filters.healing },
  ];

  const localizedProjects: PortfolioProject[] = BILINGUAL_PROJECTS.map((item) => ({
    id: item.id,
    category: item.category,
    ...item.translations[lang],
  }));

  const filteredProjects =
    activeFilter === 'all'
      ? localizedProjects
      : localizedProjects.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-emerald-950/10"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-[#059669]">
            {copy.kicker}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#064E3B] tracking-tight mt-1">
            {copy.title}
          </h2>
        </div>

        {/* Interactive Filter Controls */}
        <div
          role="group"
          aria-label="Filter portfolio engagements"
          className="flex items-center gap-2 flex-wrap"
        >
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onFilterChange(option.value)}
                className={`px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669] ${
                  isActive
                    ? 'bg-[#064E3B] text-white'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#059669] hover:text-[#064E3B]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Portfolio Grid with Thin Emerald Borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-white rounded-2xl p-7 border border-[#D1FAE5] hover:border-[#059669]/50 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-4">
                <span
                  className={`font-semibold uppercase tracking-wider ${
                    project.category === 'it' ? 'text-[#059669]' : 'text-[#92702A]'
                  }`}
                >
                  {project.discipline}
                </span>
                <span className="text-slate-500 font-mono tabular-nums">
                  {project.year}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-[#064E3B] group-hover:text-[#059669] transition-colors text-balance">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#059669] rounded"
                >
                  {project.title}
                </button>
              </h3>

              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <span className="text-xs text-[#064E3B] font-semibold tabular-nums">
                {project.result}
              </span>
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                aria-label={`${copy.details}: ${project.title}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#059669] hover:text-[#064E3B] transition-colors shrink-0 cursor-pointer"
              >
                <span>{copy.details}</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
