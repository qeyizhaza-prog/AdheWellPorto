import { PortfolioProject, ResumeExperience } from './portfolioData';

export type Language = 'en' | 'id';

export interface LocalizedProjectFields {
  discipline: string;
  year: string;
  title: string;
  summary: string;
  result: string;
  challenge: string;
  approach: string;
  capabilities: string[];
}

export interface BilingualPortfolioProject {
  id: string;
  category: 'it' | 'healing';
  translations: Record<Language, LocalizedProjectFields>;
}

export const BILINGUAL_PROJECTS: BilingualPortfolioProject[] = [
  {
    id: 'fintech-core',
    category: 'it',
    translations: {
      en: {
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
      id: {
        discipline: 'Cloud Korporat',
        year: '2025',
        title: 'Mesin Inti FinTech Ketersediaan Tinggi',
        summary:
          'Merancang infrastruktur pemrosesan pembayaran terdistribusi berbasis event yang mendukung uptime 99,999% dengan latensi di bawah 50ms.',
        result: 'Nol Gangguan · 1 Juta+ Transaksi/hari',
        challenge:
          'Sistem kliring pembayaran monolitik sebelumnya kerap mengalami timeout beruntun saat jam puncak penyelesaian transaksi antar bank mitra.',
        approach:
          'Membangun pipeline buku besar idempoten berbasis Kafka di atas klaster Kubernetes multi-wilayah dengan circuit breaker otomatis dan failover deterministik.',
        capabilities: ['AWS Multi-Wilayah', 'Kubernetes', 'Go / TypeScript', 'PostgreSQL', 'Zero Trust IAM'],
      },
    },
  },
  {
    id: 'executive-retreat',
    category: 'healing',
    translations: {
      en: {
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
      id: {
        discipline: 'Pemulihan Mindful',
        year: '2026',
        title: 'Retret Vitalitas & Reduksi Stres Eksekutif',
        summary:
          'Memfasilitasi retret penyelarasan energi somatik dan olah napas multi-hari bagi para pendiri perusahaan dan eksekutif yang mengalami kelelahan akut.',
        result: '84% Indeks Penurunan Stres',
        challenge:
          'Pemimpin teknologi dan eksekutif senior mengalami ketegangan sistem saraf kronis, insomnia, serta kelelahan pengambilan keputusan.',
        approach:
          'Menyusun protokol terstruktur yang memadukan teknik napas saraf vagus, resonansi mangkuk suara Tibet, dan sesi penyelarasan medan energi selama tiga hari.',
        capabilities: ['Olah Napas Somatik', 'Pembersihan Biofield', 'Resonansi Suara', 'Reset Saraf Vagus'],
      },
    },
  },
  {
    id: 'healthcare-llm',
    category: 'it',
    translations: {
      en: {
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
      id: {
        discipline: 'Integrasi AI',
        year: '2025',
        title: 'Pipeline Data Kesehatan & Otomasi LLM',
        summary:
          'Merancang sistem pencarian vektor aman berstandar HIPAA untuk perangkuman otomatis dokumen riset medis.',
        result: '70% Percepatan Analisis',
        challenge:
          'Analis klinis menghabiskan berjam-jam mencocokkan dokumen PDF uji klinis secara manual di berbagai repositori internal yang terpisah.',
        approach:
          'Mengimplementasikan alur RAG hibrida terenkripsi dengan penyaringan PII ketat, verifikasi sitasi, serta pencatatan audit deterministik.',
        capabilities: ['Python / Node.js', 'Pencarian Vektor', 'Keamanan HIPAA', 'Terraform', 'Pipeline Audit'],
      },
    },
  },
  {
    id: 'energy-clinic',
    category: 'healing',
    translations: {
      en: {
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
      id: {
        discipline: 'Klinik Energi',
        year: 'Berjalan',
        title: 'Klinik Penyelarasan Energi 1-on-1',
        summary:
          'Sesi pembersihan biofield personal, terapi suara, dan penyeimbangan cakra yang dilakukan secara tatap muka maupun jarak jauh.',
        result: 'Lebih dari 450+ Sesi Terlaksana',
        challenge:
          'Individu yang menghadapi kelelahan emosional dan stagnasi energi kerap belum memiliki kerangka pemulihan yang membumi dan praktis.',
        approach:
          'Melakukan konsultasi terstruktur 60 menit, pemetaan energi halus, harmonisasi Reiki, serta panduan praktik grounding harian yang dipersonalisasi.',
        capabilities: ['Reiki Master', 'Harmonisasi Prana', 'Penyelarasan Cakra', 'Tatap Muka & Jarak Jauh'],
      },
    },
  },
  {
    id: 'luxury-wellness-web',
    category: 'it',
    translations: {
      en: {
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
      id: {
        discipline: 'Web Modern',
        year: '2026',
        title: 'Platform Gaya Hidup & Wellness Premium',
        summary:
          'Portal e-commerce headless dan reservasi anggota khusus yang dibangun menggunakan Next.js, Stripe, dan layanan mikro berbasis edge.',
        result: 'Skor Lighthouse 99/100',
        challenge:
          'Sebuah kolektif wellness butik membutuhkan perpindahan halaman di bawah satu detik yang terhubung langsung dengan kalender praktisi real-time.',
        approach:
          'Membangun storefront React berbasis edge-cache yang terintegrasi dengan langganan Stripe, penjadwalan webhook, dan animasi editorial yang halus.',
        capabilities: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe API', 'Edge Caching'],
      },
    },
  },
  {
    id: 'binaural-soundwave',
    category: 'healing',
    translations: {
      en: {
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
      id: {
        discipline: 'Lab Mind-Tech',
        year: '2026',
        title: 'Generator Gelombang Suara Binaural',
        summary:
          'Merancang generator frekuensi theta interaktif berbasis browser untuk relaksasi instan di meja kerja dan meditasi mendalam.',
        result: '25rb+ Pendengar Aktif',
        challenge:
          'Pekerja profesional membutuhkan alat praktis tanpa hambatan untuk beralih dari fokus analitis intens menuju ketenangan restoratif.',
        approach:
          'Mensintesis osilator gelombang sinus murni melalui Web Audio API dengan overtone harmonik halus dan pengatur tempo napas terjadwal.',
        capabilities: ['Web Audio API', 'Gelombang Theta & Alpha', 'Tempo Napas', 'DSP Latensi Nol'],
      },
    },
  },
];

export const BILINGUAL_IT_EXPERIENCE: Record<Language, ResumeExperience[]> = {
  en: [
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
  ],
  id: [
    {
      period: '2022 — Sekarang',
      role: 'Principal Systems Architect & Technology Advisor',
      organization: 'Weliington Advisory & Enterprise Partners',
      highlights: [
        'Memimpin modernisasi cloud dan arsitektur keamanan zero-trust untuk platform fintech dan kesehatan dengan lebih dari 1 juta transaksi harian.',
        'Merancang pipeline AI retrieval yang tangguh dan platform web full-stack TypeScript dengan ketersediaan produksi 99,99%.',
      ],
    },
    {
      period: '2018 — 2022',
      role: 'Senior Full-Stack & Cloud Infrastructure Lead',
      organization: 'Nusantara Digital Core',
      highlights: [
        'Merancang orkestrasi microservices di AWS/GCP menggunakan Terraform dan Kubernetes, memangkas waktu deployment hingga 62%.',
        'Membimbing 18 engineer dalam pengembangan sistem terdistribusi backend, keamanan API, dan frontend modern.',
      ],
    },
    {
      period: '2015 — 2018',
      role: 'Software Systems Engineer',
      organization: 'Meridian Enterprise Solutions',
      highlights: [
        'Membangun mesin basis data PostgreSQL inti dan dasbor operasional responsif bagi klien logistik serta keuangan regional.',
      ],
    },
  ],
};

export const UI_COPY = {
  en: {
    nav: {
      vision: 'Vision',
      dualPersona: 'Dual-Persona CV',
      portfolio: 'Portfolio',
      contact: 'Contact',
      bookSession: 'Book Session',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      social: {
        linkedin: 'LINKEDIN',
        github: 'GITHUB / IT REPO',
        instagram: 'INSTAGRAM',
        whatsapp: 'WHATSAPP',
        email: 'INQUIRY EMAIL',
      },
      valueProp:
        'From architecting resilient enterprise IT systems to guiding holistic energy healing, I bridge technical precision with mindful transformation.',
      connect: 'Connect',
      cred1: 'Enterprise Cloud, AI & Infrastructure',
      cred2: 'Certified Energy Healer & Mindfulness Guide',
      headlineLead: 'I ENGINEER,',
      headlineMid: 'HEAL, AND',
      headlineEnd: 'BRING BALANCE TO LIFE.',
      portraitSub: 'IT Architect · Holistic Healer',
    },
    persona: {
      kicker: 'The Convergence of Logic & Vitality',
      title: 'Two Callings. One Integrated Vision.',
      subtitle:
        'Technology requires analytical clarity and rigorous design. Healing requires empathy and balanced flow. Explore both dimensions of my practice below.',
      tabIt: 'IT & Technology Architect',
      tabHealer: 'Holistic Energy Healer',
      itCards: {
        c1Title: 'Systems & Architecture',
        c1Desc:
          'Designing fault-tolerant backend architectures, microservices orchestration, and secure cloud frameworks that scale effortlessly.',
        c1Stack: ['AWS / GCP', 'Kubernetes', 'Terraform', 'Zero Trust Security'],
        c2Title: 'Fullstack Engineering',
        c2Desc:
          'Crafting end-to-end digital web platforms, API ecosystems, and modern UI solutions with clean, maintainable code standards.',
        c2Stack: ['TypeScript', 'Next.js / Node', 'PostgreSQL', 'Tailwind CSS'],
        c3Kicker: 'Enterprise Experience',
        c3Title: '10+ Years Technical Leadership',
        c3Desc:
          'Consulted for high-growth tech ventures, fintech platforms, and established enterprises needing robust digital transformation.',
        c3Cta: 'View & Print IT Resume (PDF)',
      },
      healerCards: {
        c1Title: 'Energy Alignment',
        c1Desc:
          'Gentle biofield assessment and subtle energy clearing to dissolve somatic blockages, fatigue, and restore innate vital balance.',
        c1Stack: ['Reiki Master', 'Pranic Harmonization', 'Chakra Tuning'],
        c2Title: 'Breath & Sound Healing',
        c2Desc:
          'Neurological reset through intentional conscious breathing, Tibetan singing bowl resonance, and grounding guided meditation.',
        c2Stack: ['Pranayama', 'Vagus Nerve Reset', 'Sound Baths'],
        c3Kicker: 'Executive & Personal Care',
        c3Title: 'Restoring Equilibrium',
        c3Desc:
          'Specialized programs for high-performing professionals and executives seeking mental calm, burnout recovery, and emotional resilience.',
        c3Cta: 'Reserve 1-on-1 Sanctuary Session',
      },
    },
    portfolio: {
      kicker: 'Selected Engagements',
      title: 'Featured Works & Impact',
      filters: {
        all: 'All',
        it: 'IT Systems',
        healing: 'Holistic Care',
      },
      details: 'Details',
    },
    contact: {
      kicker: 'Initiate Contact',
      title: "Let's Build or Restore Harmony.",
      subtitle:
        'Whether you need senior technical consulting for your digital infrastructure or a restorative 1-on-1 holistic healing session, I am at your service.',
      emailLabel: 'Email Directly',
      copy: 'Copy',
      copied: 'Copied',
      whatsappLabel: 'Instant WhatsApp / Booking',
      vcardBadge: 'Scan to Connect',
      vcardTitle: 'Digital vCard & Direct Line',
      vcardDesc: "Scan using your phone's camera or save my contact card directly.",
      vcardDownload: 'Download vCard (.vcf)',
      formTitle: 'Send an Inquiry',
      formSubtitle: 'Select your primary area of interest to ensure the swiftest response.',
      orientationLabel: 'Service Orientation *',
      itOptionTitle: 'IT Architecture / Tech',
      itOptionDesc: 'Consulting, hiring, or dev contracts',
      healerOptionTitle: 'Holistic Healing Session',
      healerOptionDesc: '1-on-1 realignment or corporate wellness',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Adrian Prasetya',
      emailInputLabel: 'Email Address *',
      emailPlaceholder: 'name@company.com',
      subjectLabel: 'Subject / Engagement Summary',
      subjectPlaceholderIt: 'e.g. Cloud Modernization Project / Architecture Audit',
      subjectPlaceholderHealer: 'e.g. 1-on-1 Energy Realignment / Executive Breathwork',
      messageLabel: 'Message / Details *',
      messagePlaceholder: 'Share your timeline, current obstacles, or specific wellness needs...',
      submit: 'Send Message',
      thankYouPrefix: 'Thank you,',
      thankYouMid: 'Your',
      thankYouIt: 'IT Architecture',
      thankYouHealer: 'Holistic Healing',
      thankYouSuffix:
        'inquiry has been recorded for Adhe Weliington (response within 24 hours).',
      dismiss: 'Dismiss',
    },
    modals: {
      cvKicker: 'Curriculum Vitae',
      cvSubtitle: 'Principal IT Architect · Full-Stack Systems Engineer · Holistic Energy Healer',
      printPdf: 'Print / PDF',
      expHeading: 'Technical Leadership & Experience',
      itCertHeading: 'IT Certifications',
      healerCredHeading: 'Holistic Practice Credentials',
      cvFooterNote: 'Available for advisory retainers, architecture audits, and executive wellness.',
      discussCta: 'Discuss an Engagement',
      challengeHeading: 'Context & Challenge',
      approachHeading: 'Architecture & Methodology',
      impactHeading: 'Measured Impact',
      stackHeading: 'Stack & Modalities',
      close: 'Close',
      inquireSimilar: 'Inquire About Similar Work',
    },
    footer: {
      tagline: 'Bridging Technological Precision & Holistic Mindfulness',
      copyright: '© 2026 Adhe Weliington. All Rights Reserved.',
    },
  },
  id: {
    nav: {
      vision: 'Visi',
      dualPersona: 'CV Dual-Peran',
      portfolio: 'Portofolio',
      contact: 'Kontak',
      bookSession: 'Jadwalkan Sesi',
      openMenu: 'Buka menu navigasi',
      closeMenu: 'Tutup menu navigasi',
    },
    hero: {
      social: {
        linkedin: 'LINKEDIN',
        github: 'GITHUB / REPO IT',
        instagram: 'INSTAGRAM',
        whatsapp: 'WHATSAPP',
        email: 'EMAIL PERTANYAAN',
      },
      valueProp:
        'Dari merancang arsitektur sistem IT enterprise yang tangguh hingga memandu pemulihan energi holistik, saya menjembatani presisi teknis dengan transformasi yang penuh kesadaran.',
      connect: 'Hubungi',
      cred1: 'Cloud Enterprise, AI & Infrastruktur',
      cred2: 'Praktisi Energy Healing & Pemandu Mindfulness Bersertifikat',
      headlineLead: 'SAYA MERANCANG,',
      headlineMid: 'MEMULIHKAN, DAN',
      headlineEnd: 'MENGHADIRKAN KESEIMBANGAN.',
      portraitSub: 'Arsitek IT · Praktisi Holistik',
    },
    persona: {
      kicker: 'Pertemuan Logika & Vitalitas',
      title: 'Dua Panggilan. Satu Visi Terpadu.',
      subtitle:
        'Teknologi menuntut ketajaman analitis dan desain yang presisi. Penyembuhan menuntut empati dan aliran energi yang selaras. Jelajahi kedua dimensi praktik saya di bawah ini.',
      tabIt: 'Arsitek IT & Teknologi',
      tabHealer: 'Praktisi Penyembuhan Holistik',
      itCards: {
        c1Title: 'Sistem & Arsitektur',
        c1Desc:
          'Merancang arsitektur backend tahan gangguan, orkestrasi microservices, dan kerangka cloud aman yang mudah diskalakan.',
        c1Stack: ['AWS / GCP', 'Kubernetes', 'Terraform', 'Keamanan Zero Trust'],
        c2Title: 'Rekayasa Fullstack',
        c2Desc:
          'Membangun platform web digital menyeluruh, ekosistem API, dan antarmuka modern dengan standar kode yang bersih dan terukur.',
        c2Stack: ['TypeScript', 'Next.js / Node', 'PostgreSQL', 'Tailwind CSS'],
        c3Kicker: 'Pengalaman Korporat',
        c3Title: '10+ Tahun Kepemimpinan Teknis',
        c3Desc:
          'Menjadi konsultan bagi perusahaan rintisan bertumbuh cepat, platform fintech, dan korporasi besar yang membutuhkan transformasi digital.',
        c3Cta: 'Lihat & Cetak CV IT (PDF)',
      },
      healerCards: {
        c1Title: 'Penyelarasan Energi',
        c1Desc:
          'Asesmen biofield lembut dan pembersihan energi halus untuk mengurai hambatan somatik, kelelahan, serta memulihkan keseimbangan vital alami.',
        c1Stack: ['Reiki Master', 'Harmonisasi Prana', 'Penyelarasan Cakra'],
        c2Title: 'Terapi Napas & Suara',
        c2Desc:
          'Pemulihan sistem saraf melalui olah napas sadar, resonansi mangkuk suara Tibet, dan meditasi terpandu yang menenangkan.',
        c2Stack: ['Pranayama', 'Reset Saraf Vagus', 'Terapi Suara'],
        c3Kicker: 'Layanan Eksekutif & Personal',
        c3Title: 'Memulihkan Keseimbangan',
        c3Desc:
          'Program khusus bagi profesional berkinerja tinggi dan eksekutif yang mencari ketenangan mental, pemulihan burnout, dan ketangguhan emosional.',
        c3Cta: 'Reservasi Sesi Pemulihan 1-on-1',
      },
    },
    portfolio: {
      kicker: 'Karya & Keterlibatan Pilihan',
      title: 'Karya Unggulan & Dampak',
      filters: {
        all: 'Semua',
        it: 'Sistem IT',
        healing: 'Perawatan Holistik',
      },
      details: 'Detail',
    },
    contact: {
      kicker: 'Mulai Percakapan',
      title: 'Mari Membangun atau Memulihkan Harmoni.',
      subtitle:
        'Baik Anda membutuhkan konsultasi teknis senior untuk infrastruktur digital maupun sesi penyembuhan holistik 1-on-1 yang menenangkan, saya siap membantu.',
      emailLabel: 'Email Langsung',
      copy: 'Salin',
      copied: 'Tersalin',
      whatsappLabel: 'WhatsApp / Reservasi Cepat',
      vcardBadge: 'Pindai untuk Terhubung',
      vcardTitle: 'vCard Digital & Jalur Langsung',
      vcardDesc: 'Pindai dengan kamera ponsel Anda atau simpan kartu kontak secara langsung.',
      vcardDownload: 'Unduh vCard (.vcf)',
      formTitle: 'Kirim Pertanyaan',
      formSubtitle: 'Pilih fokus kebutuhan Anda agar saya dapat merespons dengan cepat dan tepat.',
      orientationLabel: 'Orientasi Layanan *',
      itOptionTitle: 'Arsitektur IT / Teknologi',
      itOptionDesc: 'Konsultasi, rekrutmen, atau kontrak pengembangan',
      healerOptionTitle: 'Sesi Penyembuhan Holistik',
      healerOptionDesc: 'Penyelarasan 1-on-1 atau wellness perusahaan',
      nameLabel: 'Nama Anda *',
      namePlaceholder: 'cth. Adrian Prasetya',
      emailInputLabel: 'Alamat Email *',
      emailPlaceholder: 'nama@perusahaan.com',
      subjectLabel: 'Subjek / Ringkasan Kebutuhan',
      subjectPlaceholderIt: 'cth. Proyek Modernisasi Cloud / Audit Arsitektur',
      subjectPlaceholderHealer: 'cth. Penyelarasan Energi 1-on-1 / Olah Napas Eksekutif',
      messageLabel: 'Pesan / Detail *',
      messagePlaceholder: 'Ceritakan lini masa, tantangan saat ini, atau kebutuhan wellness Anda...',
      submit: 'Kirim Pesan',
      thankYouPrefix: 'Terima kasih,',
      thankYouMid: 'Permintaan layanan',
      thankYouIt: 'Arsitektur IT',
      thankYouHealer: 'Penyembuhan Holistik',
      thankYouSuffix:
        'Anda telah dicatat untuk Adhe Weliington (respons maksimal dalam 24 jam).',
      dismiss: 'Tutup',
    },
    modals: {
      cvKicker: 'Daftar Riwayat Hidup',
      cvSubtitle: 'Principal IT Architect · Insinyur Sistem Full-Stack · Praktisi Penyembuhan Holistik',
      printPdf: 'Cetak / PDF',
      expHeading: 'Kepemimpinan Teknis & Pengalaman',
      itCertHeading: 'Sertifikasi IT',
      healerCredHeading: 'Kredensial Praktik Holistik',
      cvFooterNote: 'Tersedia untuk pendampingan arsitektur sistem, audit teknologi, dan wellness eksekutif.',
      discussCta: 'Diskusikan Kolaborasi',
      challengeHeading: 'Konteks & Tantangan',
      approachHeading: 'Arsitektur & Metodologi',
      impactHeading: 'Dampak Terukur',
      stackHeading: 'Teknologi & Modalitas',
      close: 'Tutup',
      inquireSimilar: 'Tanyakan Proyek Serupa',
    },
    footer: {
      tagline: 'Menjembatani Presisi Teknologi & Kesadaran Holistik',
      copyright: '© 2026 Adhe Weliington. Hak Cipta Dilindungi.',
    },
  },
} as const;
