import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../types/language';

export function Footer() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer className="bg-[#14532D] text-white border-t border-[#16803C]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 whitespace-nowrap"
            >
              <span className="w-9 h-9 rounded-lg bg-white text-[#16803C] flex items-center justify-center shrink-0">
                <Sprout className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                {t.brand.name}
              </span>
            </Link>

            <p className="mt-4 text-sm text-[#DCFCE7]/90 leading-relaxed max-w-md">
              {t.footer.description}
            </p>

            <p className="mt-4 text-xs text-[#BBF7D0]/85 leading-relaxed max-w-md">
              {t.footer.dataIntegrityNote}
            </p>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              {t.footer.servicesHeading}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#DCFCE7]/90">
              <li>
                <Link to="/assistant" className="hover:text-white hover:underline">
                  {t.nav.assistant}
                </Link>
              </li>
              <li>
                <Link
                  to="/disease-detection"
                  className="hover:text-white hover:underline"
                >
                  {t.nav.diseaseDetection}
                </Link>
              </li>
              <li>
                <Link to="/weather" className="hover:text-white hover:underline">
                  {t.nav.weather}
                </Link>
              </li>
              <li>
                <Link to="/market-prices" className="hover:text-white hover:underline">
                  {t.nav.marketPrices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              {t.footer.companyHeading}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#DCFCE7]/90">
              <li>
                <Link to="/" className="hover:text-white hover:underline">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Languages Quick Switch */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold text-white mb-4">
              {t.footer.languagesHeading}
            </h3>
            <ul className="space-y-2 text-sm">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <li key={lang.code}>
                  <button
                    type="button"
                    onClick={() => setLanguage(lang.code)}
                    className={`text-left cursor-pointer hover:underline ${
                      language === lang.code
                        ? 'text-white font-semibold'
                        : 'text-[#DCFCE7]/85 hover:text-white'
                    }`}
                  >
                    {lang.nativeName}
                    {lang.nativeName !== lang.name ? ` · ${lang.name}` : ''}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#DCFCE7]/80">
          <p>{t.footer.copyright}</p>
          <p>{t.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
