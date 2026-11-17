import { SupportedLanguageCode } from './language';

export interface KnowledgeSource {
  id: string;
  title: string;
  publisher: string;
  url?: string;
  publishedYear?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  language: SupportedLanguageCode;
  timestamp: string;
  sources?: KnowledgeSource[];
  isVerified?: boolean;
}

export interface AssistantChatRequest {
  message: string;
  language: SupportedLanguageCode;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export interface AssistantChatResponse {
  reply: string;
  language: SupportedLanguageCode;
  sources: KnowledgeSource[];
  followUpQuestions?: string[];
  disclaimer?: string;
}

export interface DiseaseAnalysisResult {
  possibleIssue: string;
  visibleSymptoms: string[];
  preventiveSteps: string[];
  whenToConsultExpert: string;
  confidenceNote: string;
  sources: KnowledgeSource[];
}

export interface WeatherForecastDay {
  date: string;
  condition: string;
  minTempC: number;
  maxTempC: number;
  humidityPercent: number;
  rainProbabilityPercent: number;
}

export interface WeatherResponse {
  locationName: string;
  stateName: string;
  currentTempC: number;
  condition: string;
  humidityPercent: number;
  rainfallMm?: number;
  farmingGuidance: string[];
  forecast: WeatherForecastDay[];
  lastUpdatedIso: string;
  sourceName: string;
}

export interface MarketPriceEntry {
  cropName: string;
  variety: string;
  marketName: string;
  district: string;
  state: string;
  minPriceInrPerQuintal: number;
  maxPriceInrPerQuintal: number;
  modalPriceInrPerQuintal: number;
  arrivalDate: string;
  sourceName: string;
}

export interface MarketPriceQuery {
  state: string;
  district: string;
  market: string;
  cropQuery: string;
}

export interface ContactSubmission {
  name: string;
  villageOrDistrict: string;
  preferredLanguage: SupportedLanguageCode;
  contactInfo: string;
  message: string;
}

export interface ApiErrorPayload {
  code: string;
  message: string;
  phaseRequired?: number;
}
