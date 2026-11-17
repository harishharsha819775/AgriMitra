/**
 * Backend integration configuration for AgriMitra AI.
 * All external API keys (Gemini, Weather, Mandi datasets) remain strictly on the
 * Python FastAPI server. The frontend only reads the public backend base URL.
 */

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined;

export const API_CONFIG = {
  baseUrl: rawBaseUrl ? rawBaseUrl.replace(/\/+$/, '') : '',
  timeoutMs: 15000,
  isBackendConfigured: Boolean(rawBaseUrl && rawBaseUrl.trim().length > 0),
};

export const PHASE_READINESS = {
  phase1Layout: true,
  phase2Assistant: API_CONFIG.isBackendConfigured,
  phase3RagSources: API_CONFIG.isBackendConfigured,
  phase4Voice: true, // Browser capability-dependent
  phase5DiseaseVision: API_CONFIG.isBackendConfigured,
  phase6Weather: API_CONFIG.isBackendConfigured,
  phase7MarketPrices: API_CONFIG.isBackendConfigured,
} as const;
