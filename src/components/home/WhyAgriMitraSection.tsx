import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  Languages,
  Mic,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

const REASON_ICONS = [Languages, Mic, BookOpenCheck, ShieldCheck];

export function WhyAgriMitraSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2937] text-balance">
            {t.whyAgriMitra.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            {t.whyAgriMitra.sectionSubtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyAgriMitra.reasons.map((reason, idx) => {
            const Icon = REASON_ICONS[idx % REASON_ICONS.length];
            return (
              <div
                key={reason.title}
                className="rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#16803C]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#1F2937]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Focused Bottom Conversion Strip */}
        <div className="mt-12 rounded-2xl bg-[#14532D] text-white p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold tracking-tight text-balance">
              {t.whyAgriMitra.ctaHeading}
            </h3>
            <p className="mt-2 text-base text-[#DCFCE7]/90 leading-relaxed">
              {t.whyAgriMitra.ctaSubtext}
            </p>
          </div>
          <Link
            to="/assistant"
            className="min-h-[48px] px-6 py-3 rounded-xl bg-white hover:bg-[#EAF7EE] text-[#14532D] text-base font-semibold inline-flex items-center gap-2.5 whitespace-nowrap shrink-0"
          >
            <span>{t.whyAgriMitra.ctaButton}</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
