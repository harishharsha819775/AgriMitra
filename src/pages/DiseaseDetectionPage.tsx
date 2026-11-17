import React, { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ImagePlus,
  Loader2,
  ScanSearch,
  Trash2,
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { DiseaseAnalysisResult } from '../types/api';
import {
  analyzeCropDisease,
  ApiNotConfiguredError,
  ApiRequestError,
  validateCropImageFile,
} from '../services/apiClient';
import { PageHeader } from '../components/common/PageHeader';
import { PhaseNoticeBanner } from '../components/common/PhaseNoticeBanner';

export function DiseaseDetectionPage() {
  const { t, language } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [result, setResult] = useState<DiseaseAnalysisResult | null>(null);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleFileSelection = (file: File | undefined) => {
    if (!file) return;
    setErrorMessage(null);
    setResult(null);

    const validation = validateCropImageFile(file);
    if (!validation.valid) {
      setErrorMessage(validation.error || 'Unsupported file.');
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelection(e.dataTransfer.files?.[0]);
  };

  const handleRemove = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setSelectedFile(null);
    setPreviewUrl(null);
    setErrorMessage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile || isAnalyzing) return;
    setIsAnalyzing(true);
    setErrorMessage(null);

    try {
      const data = await analyzeCropDisease(selectedFile, language);
      setResult(data);
    } catch (error) {
      if (error instanceof ApiNotConfiguredError) {
        setErrorMessage(
          'Gemini Vision backend is not configured yet (Phase 5). To avoid fabricated diagnoses, disease results are only displayed once the FastAPI vision endpoint is connected.'
        );
      } else if (error instanceof ApiRequestError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Unable to analyze image right now.');
      }
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <PageHeader
        title={t.pages.disease.title}
        subtitle={t.pages.disease.subtitle}
        currentPageLabel={t.nav.diseaseDetection}
      />

      <section className="py-8 sm:py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <PhaseNoticeBanner
            title={t.pages.disease.phaseNoticeTitle}
            body={t.pages.disease.phaseNoticeBody}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Upload & Preview Column */}
            <div className="lg:col-span-7 rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => handleFileSelection(e.target.files?.[0])}
                className="hidden"
                aria-label={t.pages.disease.browseButton}
              />

              {!previewUrl ? (
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`rounded-xl border-2 border-dashed p-8 sm:p-10 text-center transition-colors ${
                    isDragging
                      ? 'border-[#16803C] bg-[#EAF7EE]'
                      : 'border-[#C6D5CB] bg-[#F8FAF8]'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7DF] flex items-center justify-center mx-auto mb-4">
                    <ImagePlus
                      className="w-6 h-6 text-[#16803C]"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="font-display text-lg font-semibold text-[#1F2937]">
                    {t.pages.disease.dropTitle}
                  </h2>
                  <p className="mt-1.5 text-sm text-[#4B5563]">
                    {t.pages.disease.dropHint}
                  </p>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-6 min-h-[46px] px-6 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] text-white text-sm font-semibold cursor-pointer"
                  >
                    {t.pages.disease.browseButton}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden border border-[#DCE7DF] bg-[#F8FAF8] aspect-[4/3]">
                    <img
                      src={previewUrl}
                      alt="Selected crop leaf preview"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {selectedFile && (
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#4B5563]">
                      <span className="font-medium text-[#1F2937]">
                        {selectedFile.name}
                      </span>
                      <span className="tabular-nums">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="min-h-[46px] px-5 py-2.5 rounded-xl bg-[#16803C] hover:bg-[#14532D] disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                    >
                      {isAnalyzing ? (
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      ) : (
                        <ScanSearch className="w-4 h-4" aria-hidden="true" />
                      )}
                      <span>{t.pages.disease.analyzeButton}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleRemove}
                      className="min-h-[46px] px-4 py-2.5 rounded-xl border border-[#DCE7DF] bg-white hover:bg-[#F8FAF8] text-sm font-medium text-[#1F2937] inline-flex items-center gap-2 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4 text-[#4B5563]" aria-hidden="true" />
                      <span>{t.pages.disease.removeButton}</span>
                    </button>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div
                  role="alert"
                  className="mt-4 rounded-xl bg-[#FEF2F2] border border-[#FECACA] p-4 flex items-start gap-3 text-sm text-[#991B1B]"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                  <p>{errorMessage}</p>
                </div>
              )}

              {result && (
                <div className="mt-5 rounded-xl bg-[#EAF7EE] border border-[#C6E3CF] p-5 space-y-3">
                  <h3 className="font-display text-lg font-bold text-[#14532D]">
                    {result.possibleIssue}
                  </h3>
                  <p className="text-sm text-[#1F2937]">{result.whenToConsultExpert}</p>
                </div>
              )}
            </div>

            {/* Photography Tips Column */}
            <aside className="lg:col-span-5 rounded-2xl bg-white border border-[#DCE7DF] p-6 shadow-sm">
              <h2 className="font-display text-lg font-semibold text-[#1F2937] mb-4">
                {t.pages.disease.photoTipsTitle}
              </h2>
              <ul className="space-y-3.5">
                {t.pages.disease.photoTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[#4B5563]">
                    <CheckCircle2
                      className="w-5 h-5 text-[#16803C] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
