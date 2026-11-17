import { useLanguage } from '../../i18n/LanguageContext';
import { SafeImage } from '../common/SafeImage';

const FARMER_PHONE_IMAGE_PATH =
  '/src/assets/images/farmer_smartphone_field_1794910160296.jpg';

export function HowItWorksSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#DCE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Farmer Portrait */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2937] text-balance">
                {t.howItWorks.sectionTitle}
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#4B5563] leading-relaxed">
                {t.howItWorks.sectionSubtitle}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#DCE7DF] aspect-[4/3] lg:flex-1">
              <SafeImage
                src={FARMER_PHONE_IMAGE_PATH}
                alt="Indian farmer smiling while holding a smartphone next to green agricultural fields"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right Column: 4 Sequential Steps */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="divide-y divide-[#DCE7DF] border-y border-[#DCE7DF]">
              {t.howItWorks.steps.map((step) => (
                <div
                  key={step.number}
                  className="py-6 sm:py-7 flex items-start gap-5 sm:gap-6"
                >
                  <span className="w-11 h-11 rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] text-[#14532D] font-display font-bold text-base flex items-center justify-center shrink-0 tabular-nums">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#1F2937]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-base text-[#4B5563] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
