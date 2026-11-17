import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES } from '../../types/language';

interface LanguageSelectorProps {
  compact?: boolean;
}

export function LanguageSelector({ compact = false }: LanguageSelectorProps) {
  const { language, languageMeta, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select preferred language"
        className="inline-flex items-center gap-2 min-h-[42px] px-3 py-2 rounded-lg border border-[#DCE7DF] bg-white hover:bg-[#EAF7EE] hover:border-[#B6D8C0] text-sm font-medium text-[#1F2937] whitespace-nowrap shrink-0 cursor-pointer"
      >
        <Globe className="w-4 h-4 text-[#16803C] shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap">
          {compact ? languageMeta.nativeName : `${languageMeta.nativeName}`}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#4B5563] transition-transform duration-150 shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Supported languages"
          className="absolute right-0 mt-2 w-52 rounded-xl bg-white border border-[#DCE7DF] shadow-lg py-1.5 z-50"
        >
          {SUPPORTED_LANGUAGES.map((option) => {
            const isSelected = option.code === language;
            return (
              <li key={option.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    setLanguage(option.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-sm cursor-pointer ${
                    isSelected
                      ? 'bg-[#EAF7EE] text-[#14532D] font-semibold'
                      : 'text-[#1F2937] hover:bg-[#F8FAF8]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>{option.nativeName}</span>
                    {option.nativeName !== option.name && (
                      <span className="text-xs text-[#6B7280]">({option.name})</span>
                    )}
                  </span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[#16803C] shrink-0" aria-hidden="true" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
