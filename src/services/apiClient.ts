import {
  AssistantChatRequest,
  AssistantChatResponse,
  ContactSubmission,
  DiseaseAnalysisResult,
  MarketPriceEntry,
  MarketPriceQuery,
  WeatherResponse,
} from '../types/api';
import { API_CONFIG } from './config';

export class ApiNotConfiguredError extends Error {
  public readonly phaseRequired: number;

  constructor(message: string, phaseRequired: number) {
    super(message);
    this.name = 'ApiNotConfiguredError';
    this.phaseRequired = phaseRequired;
  }
}

export class ApiRequestError extends Error {
  public readonly statusCode?: number;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'ApiRequestError';
    this.statusCode = statusCode;
  }
}

const ALLOWED_IMAGE_MIME_TYPES = new Set([
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
]);

const MAX_IMAGE_BYTES = 5 * 1024 * 1024; // 5 MB

export interface FileValidationResult {
  valid: boolean;
  error?: string;
}

export function validateCropImageFile(file: File): FileValidationResult {
  if (!ALLOWED_IMAGE_MIME_TYPES.has(file.type.toLowerCase())) {
    return {
      valid: false,
      error: 'Please upload a JPG, PNG, or WEBP image file.',
    };
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return {
      valid: false,
      error: 'Image size must be 5 MB or smaller for reliable village network uploads.',
    };
  }
  return { valid: true };
}

async function requestJson<T>(
  endpoint: string,
  options: RequestInit,
  phaseRequired: number
): Promise<T> {
  if (!API_CONFIG.isBackendConfigured) {
    throw new ApiNotConfiguredError(
      `Backend endpoint (${endpoint}) is scheduled for Phase ${phaseRequired}. Configure VITE_API_BASE_URL to connect the FastAPI server.`,
      phaseRequired
    );
  }

  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), API_CONFIG.timeoutMs);

  try {
    const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      throw new ApiRequestError(
        `Server returned status ${response.status}`,
        response.status
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiNotConfiguredError || error instanceof ApiRequestError) {
      throw error;
    }
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiRequestError('The request timed out. Please check your internet connection.');
    }
    throw new ApiRequestError('Unable to reach the AgriMitra server right now.');
  } finally {
    window.clearTimeout(timer);
  }
}

/**
 * Phase 2 & 3: Send farmer question to FastAPI -> Gemini + ICAR RAG.
 */
export async function sendAssistantMessage(
  payload: AssistantChatRequest
): Promise<AssistantChatResponse> {
  const trimmed = payload.message.trim();
  if (!trimmed) {
    throw new ApiRequestError('Please enter a farming question before sending.');
  }
  return requestJson<AssistantChatResponse>(
    '/chat',
    {
      method: 'POST',
      body: JSON.stringify({ ...payload, message: trimmed }),
    },
    2
  );
}

/**
 * Phase 5: Upload validated crop leaf image to FastAPI -> Gemini Vision.
 */
export async function analyzeCropDisease(
  file: File,
  language: string
): Promise<DiseaseAnalysisResult> {
  const validation = validateCropImageFile(file);
  if (!validation.valid) {
    throw new ApiRequestError(validation.error || 'Invalid image file.');
  }

  if (!API_CONFIG.isBackendConfigured) {
    throw new ApiNotConfiguredError(
      'Crop disease image analysis activates in Phase 5 when the FastAPI Gemini Vision endpoint is connected.',
      5
    );
  }

  const formData = new FormData();
  formData.append('image', file);
  formData.append('language', language);

  const response = await fetch(`${API_CONFIG.baseUrl}/disease-detect`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new ApiRequestError(`Image analysis failed (${response.status}).`, response.status);
  }

  return (await response.json()) as DiseaseAnalysisResult;
}

/**
 * Phase 6: Retrieve live weather and farming advisories.
 */
export async function fetchWeatherByLocation(
  state: string,
  district: string
): Promise<WeatherResponse> {
  const params = new URLSearchParams({ state, district });
  return requestJson<WeatherResponse>(
    `/weather?${params.toString()}`,
    { method: 'GET' },
    6
  );
}

/**
 * Phase 7: Retrieve official agricultural market prices.
 */
export async function fetchMarketPrices(
  query: MarketPriceQuery
): Promise<MarketPriceEntry[]> {
  const params = new URLSearchParams({
    state: query.state,
    district: query.district,
    market: query.market,
    crop: query.cropQuery.trim(),
  });
  return requestJson<MarketPriceEntry[]>(
    `/market-prices?${params.toString()}`,
    { method: 'GET' },
    7
  );
}

/**
 * Contact inquiry submission prepared for backend API or local acknowledgment.
 */
export async function submitContactMessage(
  payload: ContactSubmission
): Promise<{ deliveredToServer: boolean }> {
  if (!API_CONFIG.isBackendConfigured) {
    return { deliveredToServer: false };
  }

  await requestJson<{ ok: boolean }>(
    '/contact',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
    2
  );
  return { deliveredToServer: true };
}
