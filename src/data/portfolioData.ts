export const HERO_VISUAL_URL =
  '/assets/aistudio/Luxurious_Golden_Geometric_QR_Emblem_0b7f2e27.png';

export const VCARD_QR_URL =
  '/assets/aistudio/Luxurious_Golden_Geometric_QR_Emblem_0b7f2e27.png';

export type PersonaMode = 'it' | 'healer';
export type PortfolioCategory = 'all' | 'it' | 'healing';

export interface PortfolioProject {
  id: string;
  category: 'it' | 'healing';
  discipline: string;
  year: string;
  title: string;
  summary: string;
  result: string;
  challenge: string;
  approach: string;
  capabilities: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'fintech-core',
    category: 'it',
    discipline: 'Enterprise Cloud',
    year: '2025',
    title: 'High-Availability FinTech Core Engine',
    summary:
      'Architected a distributed event-driven payment processing infrastructure supporting 99.999% uptime with sub-50ms latency.',
    result: 'Zero Outages · 1M+ Txn/day',
    challenge:
      'Legacy monolithic payment clearing experienced cascading timeouts during peak settlement windows across regional banking partners.',
    approach:
      'Designed an idempotent Kafka-backed ledger pipeline on multi-region Kubernetes clusters with automated circuit breaking and deterministic failover.',
    capabilities: ['AWS Multi-Region', 'Kubernetes', 'Go / TypeScript', 'PostgreSQL', 'Zero Trust IAM'],
  },
  {
    id: 'executive-retreat',
    category: 'healing',
    discipline: 'Mindful Recovery',
    year: '2026',
    title: 'Executive De-Stress & Vitality Retreat',
    summary:
      'Facilitated multi-day somatic energy harmonizing and breathwork retreats for C-level founders experiencing acute fatigue.',
    result: '84% Stress Reduction Index',
    challenge:
      'Senior engineering leaders and founders faced chronic sympathetic nervous system overload, insomnia, and decision fatigue.',
    approach:
      'Curated a structured protocol pairing vagus nerve breathwork, Tibetan sound resonance, and biofield realignment sessions over three days.',
    capabilities: ['Somatic Breathwork', 'Biofield Clearing', 'Sound Resonance', 'Vagus Nerve Reset'],
  },
  {
    id: 'healthcare-llm',
    category: 'it',
    discipline: 'AI Integration',
    year: '2025',
    title: 'Healthcare Data Pipeline & LLM Automation',
    summary:
      'Designed secure HIPAA-compliant vector retrieval system for automated medical research document summarization.',
    result: '70% Time-to-Insight Boost',
    challenge:
      'Clinical analysts spent hours manually cross-referencing unstructured trial PDFs across isolated internal repositories.',
    approach:
      'Implemented encrypted hybrid RAG ingestion with strict PII redaction gates, citation verification, and deterministic audit logging.',
    capabilities: ['Python / Node.js', 'Vector Search', 'HIPAA Security', 'Terraform', 'Audit Pipelines'],
  },
  {
    id: 'energy-clinic',
    category: 'healing',
    discipline: 'Energy Clinic',
    year: 'Ongoing',
    title: '1-on-1 Energy Realignment Clinic',
    summary:
      'Personalized bio-field cleansing, sound therapy, and chakra balancing sessions conducted in person and remotely.',
    result: 'Over 450+ Sessions Held',
    challenge:
      'Individuals navigating emotional burnout and energetic stagnation often lack grounded, practical restoration frameworks.',
    approach:
      'Conducted 60-minute structured intake, subtle energetic scanning, Reiki harmonization, and tailored daily grounding routines.',
    capabilities: ['Reiki Master', 'Pranic Harmonization', 'Chakra Tuning', 'Remote & In-Person'],
  },
  {
    id: 'luxury-wellness-web',
    category: 'it',
    discipline: 'Modern Web',
    year: '2026',
    title: 'Luxury Lifestyle & Wellness Platform',
    summary:
      'Custom headless e-commerce and member booking portal built with Next.js, Stripe, and edge-rendered microservices.',
    result: 'Lighthouse Score 99/100',
    challenge:
      'A boutique wellness collective needed sub-second page transitions paired with real-time practitioner calendar synchronization.',
    approach:
      'Built an edge-cached React storefront integrated with Stripe subscriptions, webhook-driven scheduling, and editorial motion polish.',
    capabilities: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Edge Caching'],
  },
  {
    id: 'binaural-soundwave',
    category: 'healing',
    discipline: 'Mind-Tech Lab',
    year: '2026',
    title: 'Binaural Soundwave Generator',
    summary:
      'Engineered an interactive browser-based theta frequency generator for instant desk-side relaxation and deep state meditation.',
    result: '25k+ Active Listeners',
    challenge:
      'Knowledge workers needed an accessible, zero-friction tool to transition from intense analytical focus into restorative calm.',
    approach:
      'Synthesized pure Web Audio API sine oscillators with subtle harmonic overtones and timed breath-pacing intervals.',
    capabilities: ['Web Audio API', 'Theta & Alpha Waves', 'Breath Pacing', 'Zero-Latency DSP'],
  },
];

export interface ResumeExperience {
  period: string;
  role: string;
  organization: string;
  highlights: string[];
}

export const IT_EXPERIENCE: ResumeExperience[] = [
  {
    period: '2022 — Present',
    role: 'Principal Systems Architect & Technology Advisor',
    organization: 'Weliington Advisory & Enterprise Partners',
    highlights: [
      'Led cloud modernization and zero-trust security architecture for fintech and healthcare platforms handling 1M+ daily transactions.',
      'Designed resilient AI retrieval pipelines and full-stack TypeScript web platforms achieving 99.99% production availability.',
    ],
  },
  {
    period: '2018 — 2022',
    role: 'Senior Full-Stack & Cloud Infrastructure Lead',
    organization: 'Nusantara Digital Core',
    highlights: [
      'Architected microservices orchestration on AWS/GCP with Terraform and Kubernetes, reducing deployment lead times by 62%.',
      'Mentored 18 engineers across backend distributed systems, API security, and modern frontend craftsmanship.',
    ],
  },
  {
    period: '2015 — 2018',
    role: 'Software Systems Engineer',
    organization: 'Meridian Enterprise Solutions',
    highlights: [
      'Built core PostgreSQL data engines and responsive operational dashboards for regional logistics and financial clients.',
    ],
  },
];

export const IT_CERTIFICATIONS = [
  'AWS Certified Solutions Architect — Professional',
  'Certified Kubernetes Administrator (CKA)',
  'HashiCorp Certified Terraform Associate',
  'Zero Trust & Cloud Security Architecture Specialist',
];

export const HEALER_CREDENTIALS = [
  'Certified Reiki Master & Biofield Practitioner',
  'Pranic Energy Harmonization & Chakra Alignment',
  'Somatic Breathwork & Vagus Nerve Regulation Facilitator',
  'Tibetan Singing Bowl & Acoustic Resonance Therapy',
];
