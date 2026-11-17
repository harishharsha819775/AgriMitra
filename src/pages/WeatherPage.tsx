import { useState } from 'react';
import { AlertCircle, CloudSun, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { INDIA_AGRI_REGIONS } from '../services/regionCatalog';
import {
  ApiNotConfiguredError,
  ApiRequestError,
  fetchWeatherByLocation,
} from '../services/apiClient';
import { WeatherResponse } from '../types/api';
import { PageHeader } from '../components/common/PageHeader';
import { PhaseNoticeBanner } from '../components/common/PhaseNoticeBanner';

export function WeatherPage() {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState(INDIA_AGRI_REGIONS[0].name);
  const currentStateObj =
    INDIA_AGRI_REGIONS.find((s) => s.name === selectedState) ?? INDIA_AGRI_REGIONS[0];
  const [selectedDistrict, setSelectedDistrict] = useState(
    currentStateObj.districts[0].name
  );

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  const handleStateChange = (newState: string) => {
    setSelectedState(newState);
    const nextStateObj =
      INDIA_AGRI_REGIONS.find((s) => s.name === newState) ?? INDIA_AGRI_REGIONS[0];
    setSelectedDistrict(nextStateObj.districts[0].name);
    setWeather(null);
    setErrorMessage(null);
  };

  const handleFetchWeather = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const data = await fetchWeatherByLocation(selectedState, selectedDistrict);
      setWeather(data);
    } catch (error) {
      if (error instanceof ApiNotConfiguredError) {
        setErrorMessage(
          `Weather API is not connected yet (Phase 6). Live readings for ${selectedDistrict}, ${selectedState} will load once the Phase 6 weather endpoint is enabled.`
        );
      } else if (error instanceof ApiRequestError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unable to fetch weather data right now.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        title={t.pages.weather.title}
        subtitle={t.pages.weather.subtitle}
        currentPageLabel={t.nav.weather}
      />

      <section className="py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <PhaseNoticeBanner
            title={t.pages.weather.phaseNoticeTitle}
            body={t.pages.weather.phaseNoticeBody}
          />

          {/* Location Selector Card */}
          <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
              <div>
                <label
                  htmlFor="weather-state"
                  className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                >
                  {t.pages.weather.stateLabel}
                </label>
                <select
                  id="weather-state"
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
                  htmlFor="weather-district"
                  className="block text-sm font-semibold text-[#1F2937] mb-1.5"
                >
                  {t.pages.weather.districtLabel}
                </label>
                <select
                  id="weather-district"
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setErrorMessage(null);
                  }}
                  className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937]"
                >
                  {currentStateObj.districts.map((d) => (
                    <option key={d.name} value={d.name}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={handleFetchWeather}
                disabled={isLoading}
                className="min-h-[46px] px-5 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                ) : (
                  <CloudSun className="w-4 h-4" aria-hidden="true" />
                )}
                <span>{t.pages.weather.checkButton}</span>
              </button>
            </div>

            {errorMessage && (
              <div
                role="alert"
                className="mt-5 rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-4 flex items-start gap-3 text-sm text-[#991B1B]"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <p>{errorMessage}</p>
              </div>
            )}

            {weather && (
              <div className="mt-6 pt-6 border-t border-[#DCE7DF]">
                <p className="text-sm text-[#4B5563]">
                  {weather.locationName}, {weather.stateName} · Updated{' '}
                  {new Date(weather.lastUpdatedIso).toLocaleString()}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-[#14532D] tabular-nums">
                  {weather.currentTempC}°C · {weather.condition}
                </p>
              </div>
            )}
          </div>

          {/* General Weather Preparedness Checklist */}
          <div className="rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm">
            <h2 className="font-display text-lg font-semibold text-[#1F2937] mb-4">
              {t.pages.weather.checklistTitle}
            </h2>
            <ul className="space-y-3">
              {t.pages.weather.checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#4B5563]">
                  <CheckCircle2
                    className="w-5 h-5 text-[#16803C] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
