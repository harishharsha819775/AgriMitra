import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CloudSun,
  IndianRupee,
  MessageSquareText,
  ScanSearch,
} from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SafeImage } from '../common/SafeImage';

const LEAF_IMAGE_PATH =
  '/src/assets/images/crop_leaf_inspection_1794910158894.jpg';
const MANDI_IMAGE_PATH =
  '/src/assets/images/indian_mandi_produce_1794910158987.jpg';

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      number: '01',
      to: '/assistant',
      icon: MessageSquareText,
      title: t.services.cards.assistant.title,
      description: t.services.cards.assistant.description,
      action: t.services.cards.assistant.action,
      featured: true,
    },
    {
      number: '02',
      to: '/disease-detection',
      icon: ScanSearch,
      title: t.services.cards.disease.title,
      description: t.services.cards.disease.description,
      action: t.services.cards.disease.action,
      image: LEAF_IMAGE_PATH,
      imageAlt: 'Healthy tomato and paddy leaves covered with morning dew',
      featured: false,
    },
    {
      number: '03',
      to: '/weather',
      icon: CloudSun,
      title: t.services.cards.weather.title,
      description: t.services.cards.weather.description,
      action: t.services.cards.weather.action,
      featured: false,
    },
    {
      number: '04',
      to: '/market-prices',
      icon: IndianRupee,
      title: t.services.cards.market.title,
      description: t.services.cards.market.description,
      action: t.services.cards.market.action,
      image: MANDI_IMAGE_PATH,
      imageAlt: 'Freshly harvested wheat, tomatoes, onions, and green chilies in baskets at a rural Indian market',
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2937] text-balance">
            {t.services.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#4B5563] leading-relaxed">
            {t.services.sectionSubtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.number}
                className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between shadow-sm ${
                  service.featured
                    ? 'bg-white border-[#B6D8C0]'
                    : 'bg-white border-[#DCE7DF]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#16803C]" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-[#6B7280] tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#1F2937]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-base text-[#4B5563] leading-relaxed">
                    {service.description}
                  </p>

                  {service.image && (
                    <div className="mt-5 rounded-xl overflow-hidden border border-[#DCE7DF] aspect-[16/9]">
                      <SafeImage
                        src={service.image}
                        alt={service.imageAlt || service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-[#EDF3EE]">
                  <Link
                    to={service.to}
                    className={`min-h-[44px] px-5 py-2.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap ${
                      service.featured
                        ? 'bg-[#16803C] hover:bg-[#14532D] text-white'
                        : 'bg-[#EAF7EE] hover:bg-[#D8F0DF] text-[#14532D]'
                    }`}
                  >
                    <span>{service.action}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
