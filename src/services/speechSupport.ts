/**
 * Checks real browser Web Speech API capabilities without faking recognition.
 */
export interface VoiceCapabilityStatus {
  speechRecognitionSupported: boolean;
  speechSynthesisSupported: boolean;
}

export function checkVoiceCapabilities(): VoiceCapabilityStatus {
  if (typeof window === 'undefined') {
    return {
      speechRecognitionSupported: false,
      speechSynthesisSupported: false,
    };
  }

  const win = window as unknown as {
    SpeechRecognition?: unknown;
    webkitSpeechRecognition?: unknown;
  };

  return {
    speechRecognitionSupported: Boolean(
      win.SpeechRecognition || win.webkitSpeechRecognition
    ),
    speechSynthesisSupported:
      'speechSynthesis' in window && typeof window.speechSynthesis?.speak === 'function',
  };
}
