import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { SUPPORTED_LANGUAGES, SupportedLanguageCode } from '../types/language';
import { submitContactMessage } from '../services/apiClient';
import { PageHeader } from '../components/common/PageHeader';

export function ContactPage() {
  const { t, language } = useLanguage();

  const [name, setName] = useState('');
  const [villageOrDistrict, setVillageOrDistrict] = useState('');
  const [preferredLanguage, setPreferredLanguage] =
    useState<SupportedLanguageCode>(language);
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedState, setSubmittedState] = useState<{
    deliveredToServer: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!villageOrDistrict.trim()) {
      nextErrors.villageOrDistrict = 'Please enter your village, taluk, or district.';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please enter your message (at least 10 characters).';
    }
    if (contactInfo.trim()) {
      const val = contactInfo.trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      const isPhone = /^[+\d\s()-]{8,15}$/.test(val);
      if (!isEmail && !isPhone) {
        nextErrors.contactInfo =
          'Enter a valid phone number or email address, or leave blank.';
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await submitContactMessage({
        name: name.trim(),
        villageOrDistrict: villageOrDistrict.trim(),
        preferredLanguage,
        contactInfo: contactInfo.trim(),
        message: message.trim(),
      });
      setSubmittedState(response);
      setName('');
      setVillageOrDistrict('');
      setContactInfo('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title={t.pages.contact.title}
        subtitle={t.pages.contact.subtitle}
        currentPageLabel={t.nav.contact}
      />

      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#DCE7DF] p-6 sm:p-8 shadow-sm">
            {submittedState ? (
              <div className="py-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] flex items-center justify-center">
                  <CheckCircle2
                    className="w-6 h-6 text-[#16803C]"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="font-display text-2xl font-bold text-[#14532D]">
                  Thank you for writing to AgriMitra AI
                </h2>
                <p className="text-base text-[#4B5563] leading-relaxed">
                  {submittedState.deliveredToServer
                    ? 'Your inquiry has been received by our team.'
                    : 'Your message passed validation in the Phase 1 frontend. Once the Phase 2 FastAPI server is connected, submissions will be stored directly on the backend.'}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmittedState(null)}
                  className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                  >
                    Full Name <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-sm text-[#B91C1C]">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                    >
                      Village / District <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      value={villageOrDistrict}
                      onChange={(e) => setVillageOrDistrict(e.target.value)}
                      placeholder="e.g. Mandya, Karnataka"
                      className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                    />
                    {errors.villageOrDistrict && (
                      <p className="mt-1.5 text-sm text-[#B91C1C]">
                        {errors.villageOrDistrict}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-language"
                      className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                    >
                      Preferred Language
                    </label>
                    <select
                      id="contact-language"
                      value={preferredLanguage}
                      onChange={(e) =>
                        setPreferredLanguage(e.target.value as SupportedLanguageCode)
                      }
                      className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                    >
                      {SUPPORTED_LANGUAGES.map((lang) => (
                        <option key={lang.code} value={lang.code}>
                          {lang.nativeName} ({lang.name})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-info"
                    className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                  >
                    Phone or Email (Optional)
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="Phone number or email if you would like a reply"
                    className="w-full min-h-[46px] px-4 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                  />
                  {errors.contactInfo && (
                    <p className="mt-1.5 text-sm text-[#B91C1C]">
                      {errors.contactInfo}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                  >
                    Message or Feedback <span className="text-[#DC2626]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your feedback, crop guidance request, or language suggestion..."
                    className="w-full px-4 py-3 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-[#B91C1C]">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="min-h-[48px] px-6 py-3 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-base font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Support Details */}
          <aside className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm space-y-4">
              <h2 className="font-display text-lg font-semibold text-[#1F2937]">
                Farmer Support & Partnerships
              </h2>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                We welcome feedback from farmers, Krishi Vigyan Kendra (KVK)
                advisors, agricultural universities, and regional language
                volunteers across India.
              </p>

              <div className="pt-3 border-t border-[#DCE7DF] space-y-3 text-sm text-[#1F2937]">
                <div className="flex items-start gap-3">
                  <Mail
                    className="w-4 h-4 text-[#16803C] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>support@agrimitra.ai</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-[#16803C] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Serving rural farming communities across India</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
