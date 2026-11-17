import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  currentPageLabel: string;
}

export function PageHeader({ title, subtitle, currentPageLabel }: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-white border-b border-[#DCE7DF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-[#4B5563] mb-4"
        >
          <Link to="/" className="hover:text-[#16803C] font-medium">
            {t.nav.home}
          </Link>
          <ChevronRight className="w-4 h-4 text-[#9CA3AF]" aria-hidden="true" />
          <span className="text-[#14532D] font-medium">{currentPageLabel}</span>
        </nav>

        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1F2937] text-balance max-w-3xl">
          {title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#4B5563] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
