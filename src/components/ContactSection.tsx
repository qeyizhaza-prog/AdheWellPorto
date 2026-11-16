import { FormEvent, useState } from 'react';
import {
  Mail,
  MessageCircle,
  Send,
  Check,
  Copy,
  Download,
  QrCode,
} from 'lucide-react';
import { PersonaMode, VCARD_QR_URL } from '../data/portfolioData';
import { Language, UI_COPY } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
  selectedOrientation: PersonaMode;
  onOrientationChange: (orientation: PersonaMode) => void;
}

export function ContactSection({
  lang,
  selectedOrientation,
  onOrientationChange,
}: ContactSectionProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submittedSummary, setSubmittedSummary] = useState<{
    name: string;
    orientation: PersonaMode;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [qrImageError, setQrImageError] = useState(false);
  const copy = UI_COPY[lang].contact;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('adhe.weliington@example.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleDownloadVCard = () => {
    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Weliington;Adhe;;;',
      'FN:Adhe Weliington',
      'TITLE:IT Specialist & Holistic Healer',
      'EMAIL;TYPE=INTERNET:adhe.weliington@example.com',
      'TEL;TYPE=CELL:+6281288009355',
      'NOTE:Enterprise Cloud & AI Architecture | Certified Energy Healer',
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Adhe_Weliington.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedSummary({
      name: name.trim(),
      orientation: selectedOrientation,
    });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-emerald-950/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Narrative, Direct Contacts & Digital vCard QR */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold text-[#059669]">
              {copy.kicker}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase text-[#064E3B] mt-3 tracking-tight text-balance">
              {copy.title}
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed text-sm sm:text-base">
              {copy.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-white border border-emerald-100">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-200 shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      {copy.emailLabel}
                    </div>
                    <a
                      href="mailto:adhe.weliington@example.com"
                      className="text-sm font-bold text-[#064E3B] hover:text-[#059669] transition-colors truncate block"
                    >
                      adhe.weliington@example.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label={copy.copy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#064E3B] bg-emerald-50 hover:bg-emerald-100 transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                      <span>{copy.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{copy.copy}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-emerald-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-200 shrink-0">
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    {copy.whatsappLabel}
                  </div>
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#064E3B] hover:text-[#059669] transition-colors tabular-nums"
                  >
                    +62 (812) 8800-WELIINGTON
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Digital vCard Card with Hotlinked QR Graphic */}
          <div className="p-5 bg-white rounded-2xl border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-[#C5A059]/40 bg-emerald-950/5 flex items-center justify-center">
              {!qrImageError ? (
                <img
                  src={VCARD_QR_URL}
                  alt="Adhe Weliington Digital vCard QR Code"
                  referrerPolicy="no-referrer"
                  onError={() => setQrImageError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <QrCode className="w-10 h-10 text-[#064E3B]" aria-hidden="true" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-widest uppercase text-[#92702A]">
                {copy.vcardBadge}
              </p>
              <h3 className="font-display font-bold uppercase text-[#064E3B] text-base mt-0.5">
                {copy.vcardTitle}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {copy.vcardDesc}
              </p>
              <button
                type="button"
                onClick={handleDownloadVCard}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:text-[#064E3B] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{copy.vcardDownload}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Consultation Form */}
        <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-emerald-200/90 shadow-xl">
          <h3 className="font-display text-2xl font-bold uppercase text-[#064E3B] mb-1.5">
            {copy.formTitle}
          </h3>
          <p className="text-xs text-slate-500 mb-6">{copy.formSubtitle}</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <span className="block text-xs uppercase tracking-wider font-bold text-slate-700 mb-2">
                {copy.orientationLabel}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    selectedOrientation === 'it'
                      ? 'bg-emerald-50 border-[#059669]'
                      : 'border-emerald-200 hover:bg-emerald-50/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="service_type"
                    value="it"
                    checked={selectedOrientation === 'it'}
                    onChange={() => onOrientationChange('it')}
                    className="accent-[#059669] w-4 h-4 shrink-0"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#064E3B] uppercase">
                      {copy.itOptionTitle}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {copy.itOptionDesc}
                    </span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    selectedOrientation === 'healer'
                      ? 'bg-emerald-50 border-[#059669]'
                      : 'border-emerald-200 hover:bg-emerald-50/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="service_type"
                    value="healer"
                    checked={selectedOrientation === 'healer'}
                    onChange={() => onOrientationChange('healer')}
                    className="accent-[#059669] w-4 h-4 shrink-0"
                  />
                  <div>
                    <span className="block text-xs font-bold text-[#064E3B] uppercase">
                      {copy.healerOptionTitle}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {copy.healerOptionDesc}
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5"
                >
                  {copy.nameLabel}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={copy.namePlaceholder}
                  className="w-full text-sm rounded-xl border border-slate-200 focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20 py-2.5 px-3.5"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5"
                >
                  {copy.emailInputLabel}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={copy.emailPlaceholder}
                  className="w-full text-sm rounded-xl border border-slate-200 focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20 py-2.5 px-3.5"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5"
              >
                {copy.subjectLabel}
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={
                  selectedOrientation === 'it'
                    ? copy.subjectPlaceholderIt
                    : copy.subjectPlaceholderHealer
                }
                className="w-full text-sm rounded-xl border border-slate-200 focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20 py-2.5 px-3.5"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs uppercase tracking-wider font-semibold text-slate-700 mb-1.5"
              >
                {copy.messageLabel}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={copy.messagePlaceholder}
                className="w-full text-sm rounded-xl border border-slate-200 focus:border-[#059669] focus:outline-none focus:ring-2 focus:ring-[#059669]/20 py-2.5 px-3.5"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-[#064E3B] hover:bg-[#043427] text-white font-display uppercase tracking-widest text-sm font-bold shadow-lg shadow-emerald-950/20 border border-[#C5A059]/40 flex items-center justify-center gap-3 group transition-colors cursor-pointer"
            >
              <span>{copy.submit}</span>
              <Send
                className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 transition-transform"
                aria-hidden="true"
              />
            </button>

            {submittedSummary && (
              <div
                role="status"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-medium text-[#064E3B] p-3.5 bg-emerald-50 rounded-xl border border-emerald-200"
              >
                <span>
                  {copy.thankYouPrefix} <strong>{submittedSummary.name}</strong>.{' '}
                  {copy.thankYouMid}{' '}
                  {submittedSummary.orientation === 'it'
                    ? copy.thankYouIt
                    : copy.thankYouHealer}{' '}
                  {copy.thankYouSuffix}
                </span>
                <button
                  type="button"
                  onClick={() => setSubmittedSummary(null)}
                  className="text-[#059669] underline font-semibold shrink-0 cursor-pointer text-left"
                >
                  {copy.dismiss}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
