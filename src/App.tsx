/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { AssistantPage } from './pages/AssistantPage';
import { DiseaseDetectionPage } from './pages/DiseaseDetectionPage';
import { WeatherPage } from './pages/WeatherPage';
import { MarketPricesPage } from './pages/MarketPricesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function NotFoundPage() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-md mx-auto bg-white border border-[#DCE7DF] rounded-2xl p-8">
        <h1 className="font-display text-2xl font-bold text-[#1F2937]">
          Page Not Found
        </h1>
        <p className="mt-2 text-base text-[#4B5563]">
          The page you requested could not be found. Return to the AgriMitra AI
          homepage to access all farming tools.
        </p>
        <Link
          to="/"
          className="mt-6 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold inline-flex items-center justify-center"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/assistant" element={<AssistantPage />} />
            <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
            <Route path="/weather" element={<WeatherPage />} />
            <Route path="/market-prices" element={<MarketPricesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}
