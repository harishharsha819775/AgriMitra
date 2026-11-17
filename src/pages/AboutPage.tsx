import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { PageHeader } from '../components/common/PageHeader';
import { SafeImage } from '../components/common/SafeImage';

const HERO_IMAGE_PATH =
  '/src/assets/images/hero_indian_farmland_1794910158224.jpg';

const ROADMAP_PHASES = [
  {
    phase: 'Phase 1',
    title: 'Multilingual Frontend & Navigation Architecture',
    status: 'Completed',
  },
  {
    phase: 'Phase 2',
    title: 'FastAPI Backend & Gemini AI Farming Assistant',
    status: 'Next Milestone',
  },
  {
    phase: 'Phase 3',
    title: 'ICAR & Agricultural University RAG Citations',
    status: 'Planned',
  },
  {
    phase: 'Phase 4',
    title: 'Voice Speech-to-Text & Spoken Answers',
    status: 'Planned',
  },
  {
    phase: 'Phase 5',
    title: 'Crop Leaf Photo Inspection (Gemini Vision)',
    status: 'Planned',
  },
  {
    phase: 'Phase 6',
    title: 'Live Local Weather & Spraying Advisories',
    status: 'Planned',
  },
  {
    phase: 'Phase 7',
    title: 'Official Mandi Price Dataset Integration',
    status: 'Planned',
  },
];

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        title={t.pages.about.title}
        subtitle={t.pages.about.subtitle}
        currentPageLabel={t.nav.about}
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#DCE7DF] aspect-[16/10] lg:aspect-auto">
              <SafeImage
                src={HERO_IMAGE_PATH}
                alt="Green agricultural fields in rural India at sunrise"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-white border border-[#DCE7DF] p-7 sm:p-8 flex flex-col justify-center space-y-4">
              <h2 className="font-display text-2xl font-bold text-[#1F2937]">
                Built for Clarity in Rural Fields
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                AgriMitra AI is designed around a straightforward belief: farmers
                should never have to struggle through complicated software or
                technical jargon to get reliable answers about their crops.
              </p>
              <p className="text-base text-[#4B5563] leading-relaxed">
                By combining regional Indian languages, voice accessibility, and
                verified agricultural research from ICAR and State Agricultural
                Universities, AgriMitra AI gives farmers practical guidance they
                can trust and verify.
              </p>
              <div className="pt-2">
                <Link
                  to="/assistant"
                  className="min-h-[46px] px-5 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold inline-flex items-center gap-2"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Core Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6">
              <Globe className="w-6 h-6 text-[#16803C] mb-3" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#1F2937]">
                Regional Language First
              </h3>
              <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                Starting with Kannada and English alongside Hindi, Tamil, and
                Telugu, preserving familiar crop names without mistranslation.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6">
              <BookOpen className="w-6 h-6 text-[#16803C] mb-3" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-[#1F2937]">
                Verified Knowledge Sources
              </h3>
              <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                Retrieval-Augmented Generation prioritizes ICAR handbooks,
                agricultural university bulletins, and official government records.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6">
              <ShieldCheck
                className="w-6 h-6 text-[#16803C] mb-3"
                aria-hidden="true"
              />
              <h3 className="font-display text-lg font-semibold text-[#1F2937]">
                Zero Fabricated Data
              </h3>
              <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                If live weather, market prices, or vision analysis are not
                connected, AgriMitra AI tells you clearly instead of guessing.
              </p>
            </div>
          </div>

          {/* Phased Rollout Table */}
          <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-[#1F2937] mb-5">
              Phased Development Architecture
            </h2>
            <div className="divide-y divide-[#DCE7DF]">
              {ROADMAP_PHASES.map((item) => (
                <div
                  key={item.phase}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[#16803C] w-20 shrink-0 tabular-nums">
                      {item.phase}
                    </span>
                    <span className="text-base font-medium text-[#1F2937]">
                      {item.title}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      item.status === 'Completed'
                        ? 'text-[#14532D]'
                        : 'text-[#6B7280]'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
