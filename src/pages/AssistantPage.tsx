import React, { useState } from 'react';
import {
  AlertCircle,
  Loader2,
  MessageSquare,
  Mic,
  Send,
  Trash2,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ChatMessage } from '../types/api';
import {
  ApiNotConfiguredError,
  ApiRequestError,
  sendAssistantMessage,
} from '../services/apiClient';
import { checkVoiceCapabilities } from '../services/speechSupport';
import { PageHeader } from '../components/common/PageHeader';
import { PhaseNoticeBanner } from '../components/common/PhaseNoticeBanner';
import { LanguageSelector } from '../components/layout/LanguageSelector';

export function AssistantPage() {
  const { t, language, languageMeta } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [voiceFeedback, setVoiceFeedback] = useState<string | null>(null);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed || isLoading) return;

    setErrorMessage(null);
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      language,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await sendAssistantMessage({
        message: trimmed,
        language,
        conversationHistory: messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      });

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        language: response.language,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        sources: response.sources,
        isVerified: response.sources.length > 0,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      if (error instanceof ApiNotConfiguredError) {
        setErrorMessage(
          'Live Gemini AI responses are not connected yet (Phase 2). Set VITE_API_BASE_URL to your Python FastAPI server to receive real agricultural guidance.'
        );
      } else if (error instanceof ApiRequestError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unable to process your question right now.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoiceCheck = () => {
    const { speechRecognitionSupported } = checkVoiceCapabilities();
    if (!speechRecognitionSupported) {
      setVoiceFeedback(t.hero.voiceUnsupportedNotice);
      return;
    }
    setVoiceFeedback(
      `Browser speech input is supported for ${languageMeta.nativeName} (${languageMeta.speechLocale}). Live speech-to-text transcription activates in Phase 4.`
    );
  };

  const handleClear = () => {
    setMessages([]);
    setErrorMessage(null);
    setVoiceFeedback(null);
  };

  return (
    <>
      <PageHeader
        title={t.pages.assistant.title}
        subtitle={t.pages.assistant.subtitle}
        currentPageLabel={t.nav.assistant}
      />

      <section className="py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <PhaseNoticeBanner
            title={t.pages.assistant.phaseNoticeTitle}
            body={t.pages.assistant.phaseNoticeBody}
          />

          {/* Main Chat Workspace Card */}
          <div className="rounded-2xl bg-white border border-[#DCE7DF] shadow-sm overflow-hidden">
            {/* Chat Toolbar */}
            <div className="px-5 py-4 border-b border-[#DCE7DF] bg-[#F8FAF8] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#1F2937]">
                <MessageSquare
                  className="w-4 h-4 text-[#16803C]"
                  aria-hidden="true"
                />
                <span>
                  {languageMeta.nativeName}
                  {languageMeta.nativeName !== languageMeta.name
                    ? ` (${languageMeta.name})`
                    : ''}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <LanguageSelector compact />
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={messages.length === 0 && !errorMessage && !voiceFeedback}
                  className="min-h-[42px] px-3.5 py-2 rounded-lg border border-[#DCE7DF] bg-white hover:bg-[#EAF7EE] disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-[#1F2937] inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <Trash2 className="w-4 h-4 text-[#4B5563]" aria-hidden="true" />
                  <span>{t.pages.assistant.clearButton}</span>
                </button>
              </div>
            </div>

            {/* Conversation History Area */}
            <div className="p-5 sm:p-6 min-h-[340px] max-h-[520px] overflow-y-auto space-y-4">
              {messages.length === 0 ? (
                <div className="py-6">
                  <h3 className="font-display text-base font-semibold text-[#1F2937] mb-3">
                    {t.pages.assistant.starterHeading}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.pages.assistant.starters.map((starter) => (
                      <button
                        key={starter}
                        type="button"
                        onClick={() => setInputText(starter)}
                        className="text-left p-4 rounded-xl border border-[#DCE7DF] bg-[#F8FAF8] hover:bg-[#EAF7EE] hover:border-[#B6D8C0] text-sm text-[#1F2937] leading-relaxed cursor-pointer"
                      >
                        {starter}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-base leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-[#16803C] text-white'
                          : 'bg-[#EAF7EE] text-[#1F2937] border border-[#C6E3CF]'
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span
                        className={`block mt-1.5 text-xs tabular-nums ${
                          msg.role === 'user' ? 'text-white/80' : 'text-[#4B5563]'
                        }`}
                      >
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))
              )}

              {isLoading && (
                <div className="flex items-center gap-2 text-sm text-[#14532D] py-2">
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>Connecting to AgriMitra AI...</span>
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  className="rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-4 flex items-start gap-3 text-sm text-[#991B1B]"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{errorMessage}</p>
                </div>
              )}

              {voiceFeedback && (
                <div
                  role="status"
                  className="rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] p-4 text-sm text-[#14532D]"
                >
                  {voiceFeedback}
                </div>
              )}
            </div>

            {/* Composer Form */}
            <form
              onSubmit={handleSend}
              className="p-4 sm:p-5 border-t border-[#DCE7DF] bg-[#F8FAF8]"
            >
              <label htmlFor="assistant-question-input" className="sr-only">
                {t.pages.assistant.inputPlaceholder}
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="assistant-question-input"
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={t.pages.assistant.inputPlaceholder}
                  className="flex-1 min-h-[48px] px-4 py-3 rounded-xl border border-[#C6D5CB] bg-white text-base text-[#1F2937] placeholder:text-[#6B7280] focus:border-[#16803C] focus:outline-none"
                />

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={handleVoiceCheck}
                    className="min-h-[48px] px-4 py-3 rounded-xl border border-[#C6E3CF] bg-[#EAF7EE] hover:bg-[#D8F0DF] text-[#14532D] text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <Mic className="w-5 h-5 text-[#16803C]" aria-hidden="true" />
                    <span>{t.pages.assistant.micButton}</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isLoading || !inputText.trim()}
                    className="min-h-[48px] px-5 py-3 rounded-xl bg-[#16803C] hover:bg-[#14532D] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>{t.pages.assistant.sendButton}</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
