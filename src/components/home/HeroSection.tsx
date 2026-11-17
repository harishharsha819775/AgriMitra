import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  MessageSquare,
  Mic,
  Volume2,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { checkVoiceCapabilities } from '../../services/speechSupport';
import { SafeImage } from '../common/SafeImage';

const HERO_IMAGE_PATH =
  '/src/assets/images/hero_indian_farmland_1794910158224.jpg';

export function HeroSection() {
  const { t, languageMeta } = useLanguage();
  const navigate = useNavigate();
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  const handleVoiceClick = () => {
    const { speechRecognitionSupported } = checkVoiceCapabilities();
    if (!speechRecognitionSupported) {
      setVoiceNotice(t.hero.voiceUnsupportedNotice);
      return;
    }
    navigate('/assistant?voice=ready');
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-white border-b border-[#DCE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition & Primary Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold text-[#16803C] tracking-tight mb-3">
              {t.hero.kicker}
              <span className="mx-2 text-[#9CA3AF]" aria-hidden="true">
                ·
              </span>
              <span className="text-[#4B5563] font-medium">
                {languageMeta.nativeName}
              </span>
            </p>

            <h1
              className="font-display font-bold tracking-tight text-[#1F2937] text-balance leading-[1.1]"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
            >
              {t.hero.heading}
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-[#4B5563] leading-relaxed max-w-xl">
              {t.hero.subheading}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => navigate('/assistant')}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-base font-semibold inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleExploreServices}
                className="min-h-[48px] px-5 py-3 rounded-xl bg-white hover:bg-[#EAF7EE] text-[#14532D] border border-[#C6E3CF] text-base font-semibold whitespace-nowrap shrink-0 cursor-pointer"
              >
                {t.hero.secondaryCta}
              </button>

              <button
                type="button"
                onClick={handleVoiceClick}
                className="min-h-[48px] px-4 py-3 rounded-xl bg-[#EAF7EE] hover:bg-[#D8F0DF] text-[#14532D] text-base font-medium inline-flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Mic className="w-5 h-5 text-[#16803C] shrink-0" aria-hidden="true" />
                <span>{t.hero.voiceCta}</span>
              </button>
            </div>

            {voiceNotice && (
              <p
                role="status"
                className="mt-4 text-sm text-[#14532D] bg-[#EAF7EE] border border-[#C6E3CF] rounded-lg px-4 py-3 max-w-xl"
              >
                {voiceNotice}
              </p>
            )}

            {/* Quick Language Availability Summary (Clean unboxed metadata) */}
            <div className="mt-8 pt-6 border-t border-[#DCE7DF] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-[#4B5563]">
              <span className="font-medium text-[#1F2937]">Available in:</span>
              <span>ಕನ್ನಡ (Kannada)</span>
              <span aria-hidden="true">·</span>
              <span>English</span>
              <span aria-hidden="true">·</span>
              <span>हिन्दी (Hindi)</span>
              <span aria-hidden="true">·</span>
              <span>தமிழ் (Tamil)</span>
              <span aria-hidden="true">·</span>
              <span>తెలుగు (Telugu)</span>
            </div>
          </div>

          {/* Right Column: Farmland Photography + Grounded Assistant Example Preview */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="rounded-2xl overflow-hidden border border-[#DCE7DF] bg-[#EAF7EE] aspect-[16/9]">
              <SafeImage
                src={HERO_IMAGE_PATH}
                alt="Farmer inspecting lush green crops during morning sunlight on an Indian farm"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Visual Preview of the AI Assistant */}
            <div className="rounded-2xl bg-[#F8FAF8] border border-[#DCE7DF] p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#DCE7DF]">
                <span className="text-xs font-semibold text-[#14532D]">
                  {t.hero.previewLabel}
                </span>
                <button
                  type="button"
                  onClick={() => navigate('/assistant')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16803C] hover:text-[#14532D] whitespace-nowrap cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" aria-hidden="true" />
                  <span>{t.nav.assistant}</span>
                </button>
              </div>

              {/* Farmer Question */}
              <div className="mt-4 bg-white border border-[#DCE7DF] rounded-xl px-4 py-3">
                <p className="text-sm sm:text-base font-semibold text-[#1F2937]">
                  “{t.hero.previewQuestion}”
                </p>
              </div>

              {/* Structured AI Guidance Preview */}
              <div className="mt-3 bg-[#EAF7EE] border border-[#C6E3CF] rounded-xl px-4 py-3.5 text-sm text-[#1F2937]">
                <p className="font-medium text-[#14532D]">
                  {t.hero.previewAnswerIntro}
                </p>
                <ol className="mt-2.5 space-y-1.5 list-decimal list-inside text-[#1F2937]/90">
                  {t.hero.previewSteps.map((step, index) => (
                    <li key={index} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ol>
                <p className="mt-2.5 text-xs font-medium text-[#14532D]">
                  {t.hero.previewFollowUp}
                </p>
              </div>

              <p className="mt-3 text-xs text-[#6B7280] leading-relaxed">
                {t.hero.previewDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
