import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, Sprout, X } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const primaryNavItems = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/assistant', label: t.nav.assistant, end: false },
    { to: '/disease-detection', label: t.nav.diseaseDetection, end: false },
    { to: '/weather', label: t.nav.weather, end: false },
    { to: '/market-prices', label: t.nav.marketPrices, end: false },
  ];

  const secondaryNavItems = [
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#DCE7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:rounded-lg"
          >
            <span className="w-9 h-9 rounded-lg bg-[#16803C] text-white flex items-center justify-center shrink-0">
              <Sprout className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-[#14532D] whitespace-nowrap">
              {t.brand.name}
            </span>
          </Link>

          {/* Zone 2: Primary Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `py-2 text-sm font-medium whitespace-nowrap shrink-0 border-b-2 transition-colors ${
                    isActive
                      ? 'text-[#14532D] border-[#16803C] font-semibold'
                      : 'text-[#4B5563] border-transparent hover:text-[#16803C] hover:border-[#B6D8C0]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Language Selector + Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <LanguageSelector compact />
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/assistant');
              }}
              className="min-h-[42px] px-5 py-2 rounded-lg bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.nav.getStarted}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2 shrink-0">
            <LanguageSelector compact />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="w-11 h-11 inline-flex items-center justify-center rounded-lg border border-[#DCE7DF] bg-white text-[#1F2937] hover:bg-[#EAF7EE] cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#DCE7DF] bg-white">
          <nav
            aria-label="Mobile navigation"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
          >
            {[...primaryNavItems, ...secondaryNavItems].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `min-h-[44px] px-4 py-2.5 rounded-lg flex items-center text-base font-medium ${
                    isActive
                      ? 'bg-[#EAF7EE] text-[#14532D] font-semibold'
                      : 'text-[#1F2937] hover:bg-[#F8FAF8]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-[#DCE7DF] md:hidden">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/assistant');
                }}
                className="w-full min-h-[46px] px-5 py-3 rounded-lg bg-[#16803C] hover:bg-[#14532D] text-white text-base font-semibold cursor-pointer"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
