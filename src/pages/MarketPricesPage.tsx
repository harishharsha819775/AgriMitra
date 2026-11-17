import React, { useState } from 'react';
import { AlertCircle, Loader2, Search } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { INDIA_AGRI_REGIONS } from '../services/regionCatalog';
import {
  ApiNotConfiguredError,
  ApiRequestError,
  fetchMarketPrices,
} from '../services/apiClient';
import { MarketPriceEntry } from '../types/api';
import { PageHeader } from '../components/common/PageHeader';
import { PhaseNoticeBanner } from '../components/common/PhaseNoticeBanner';

export function MarketPricesPage() {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState(INDIA_AGRI_REGIONS[0].name);
  const currentStateObj =
    INDIA_AGRI_REGIONS.find((s) => s.name === selectedState) ?? INDIA_AGRI_REGIONS[0];

  const [selectedDistrict, setSelectedDistrict] = useState(
    currentStateObj.districts[0].name
  );
  const currentDistrictObj =
    currentStateObj.districts.find((d) => d.name === selectedDistrict) ??
    currentStateObj.districts[0];

  const [selectedMarket, setSelectedMarket] = useState(
    currentDistrictObj.markets[0]
  );
  const [cropQuery, setCropQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [prices, setPrices] = useState<MarketPriceEntry[]>([]);

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    const nextStateObj =
      INDIA_AGRI_REGIONS.find((s) => s.name === newState) ?? INDIA_AGRI_REGIONS[0];
    const nextDistrict = nextStateObj.districts[0];
    setSelectedDistrict(nextDistrict.name);
    setSelectedMarket(nextDistrict.markets[0]);
    setErrorMessage(null);
  };

  const handleDistrictChange = (newDistrict: string) => {
    setSelectedDistrict(newDistrict);
    const nextDistrict =
      currentStateObj.districts.find((d) => d.name === newDistrict) ??
      currentStateObj.districts[0];
    setSelectedMarket(nextDistrict.markets[0]);
    setErrorMessage(null);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const results = await fetchMarketPrices({
        state: selectedState,
        district: selectedDistrict,
        market: selectedMarket,
        cropQuery,
      });
      setPrices(results);
    } catch (error) {
      if (error instanceof ApiNotConfiguredError) {
        setErrorMessage(
          `Official mandi dataset endpoint is scheduled for Phase 7. Once connected, live rates for ${selectedMarket} (${selectedDistrict}, ${selectedState}) will display here.`
        );
      } else if (error instanceof ApiRequestError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unable to fetch market prices right now.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title={t.pages.market.title}
        subtitle={t.pages.market.subtitle}
        currentPageLabel={t.nav.marketPrices}
      />

      <section className="py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <PhaseNoticeBanner
            title={t.pages.market.phaseNoticeTitle}
            body={t.pages.market.phaseNoticeBody}
          />

          <form
            onSubmit={handleSearch}
            className="rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="market-state"
                  className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                >
                  {t.pages.market.stateLabel}
                </label>
                <select
                  id="market-state"
                  value={selectedState}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                >
                  {INDIA_AGRI_REGIONS.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="market-district"
                  className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                >
                  {t.pages.market.districtLabel}
                </label>
                <select
                  id="market-district"
                  value={selectedDistrict}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                >
                  {currentStateObj.districts.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="market-yard"
                  className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                >
                  {t.pages.market.marketLabel}
                </label>
                <select
                  id="market-yard"
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                >
                  {currentDistrictObj.markets.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="market-crop"
                  className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                >
                  {t.pages.market.cropLabel}
                </label>
                <input
                  id="market-crop"
                  type="text"
                  value={cropQuery}
                  onChange={(e) => setCropQuery(e.target.value)}
                  placeholder={t.pages.market.cropPlaceholder}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937] placeholder:text-[#6B7280]"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="min-h-[46px] px-6 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                ) : (
                  <Search className="w-4 h-4" aria-hidden="true" />
                )}
                <span>{t.pages.market.searchButton}</span>
              </button>
            </div>
          </form>

          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-4 flex items-start gap-3 text-sm text-[#991B1B]"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
              <p>{errorMessage}</p>
            </div>
          )}

          {prices.length > 0 && (
            <div className="rounded-2xl bg-white border border-[#DCE7DF] overflow-x-auto shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#DCE7DF] bg-[#F8FAF8] text-xs font-semibold text-[#4B5563]">
                    <th className="py-3.5 px-4">Crop</th>
                    <th className="py-3.5 px-4">Variety</th>
                    <th className="py-3.5 px-4">Market</th>
                    <th className="py-3.5 px-4 text-right">Min (₹/q)</th>
                    <th className="py-3.5 px-4 text-right">Max (₹/q)</th>
                    <th className="py-3.5 px-4 text-right">Modal (₹/q)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDF3EE] text-sm text-[#1F2937]">
                  {prices.map((row, idx) => (
                    <tr key={`${row.cropName}-${idx}`}>
                      <td className="py-3.5 px-4 font-semibold">{row.cropName}</td>
                      <td className="py-3.5 px-4 text-[#4B5563]">{row.variety}</td>
                      <td className="py-3.5 px-4">{row.marketName}</td>
                      <td className="py-3.5 px-4 text-right tabular-nums">
                        ₹{row.minPriceInrPerQuintal}
                      </td>
                      <td className="py-3.5 px-4 text-right tabular-nums">
                        ₹{row.maxPriceInrPerQuintal}
                      </td>
                      <td className="py-3.5 px-4 text-right font-semibold text-[#14532D] tabular-nums">
                        ₹{row.modalPriceInrPerQuintal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
