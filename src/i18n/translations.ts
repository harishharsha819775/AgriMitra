import { SupportedLanguageCode } from '../types/language';
import { TranslationDictionary } from '../types/i18n';

export const TRANSLATIONS: Record<SupportedLanguageCode, TranslationDictionary> = {
  en: {
    brand: {
      name: 'AgriMitra AI',
      tagline: 'Smart Farming, Simple Solutions.',
    },
    nav: {
      home: 'Home',
      assistant: 'AI Assistant',
      diseaseDetection: 'Disease Detection',
      weather: 'Weather',
      marketPrices: 'Market Prices',
      about: 'About Us',
      contact: 'Contact Us',
      getStarted: 'Get Started',
      openMenu: 'Open navigation menu',
      closeMenu: 'Close navigation menu',
    },
    hero: {
      kicker: 'Multilingual Agricultural Assistance',
      heading: 'Your Smart Farming Partner',
      subheading:
        'Get trusted farming guidance in your own language, whenever you need it.',
      primaryCta: 'Ask AgriMitra AI',
      secondaryCta: 'Explore Services',
      voiceCta: 'Speak Your Question',
      voiceUnsupportedNotice:
        'Voice input is not supported in this browser. You can type your question in the AI Assistant.',
      previewLabel: 'Illustrative Example — Tomato Leaf Care',
      previewQuestion: 'My tomato leaves are turning yellow. What should I do?',
      previewAnswerIntro:
        'Yellowing on tomato leaves often happens due to irregular watering, nitrogen shortage, or early fungal spots.',
      previewSteps: [
        'Check if the lower older leaves or new top leaves are turning yellow first.',
        'Inspect the underside of leaves for tiny insects or brown rings.',
        'Avoid watering directly on leaves during late evening.',
      ],
      previewFollowUp:
        'Are the spots dry and brown, or is the whole leaf fading evenly?',
      previewDisclaimer:
        'Illustrative preview. Live AI guidance connects in Phase 2 using verified ICAR references.',
    },
    services: {
      sectionTitle: 'Practical Tools Built for Everyday Farming',
      sectionSubtitle:
        'Designed for clear reading on mobile phones and desktop screens without complicated charts or technical jargon.',
      cards: {
        assistant: {
          title: 'AI Farming Assistant',
          description:
            'Ask crop, soil, irrigation, or pest questions in simple words or by voice in your regional language.',
          action: 'Open AI Assistant',
        },
        disease: {
          title: 'Crop Disease Detection',
          description:
            'Upload a clear photo of an affected leaf or plant to identify visible symptoms and safe preventive steps.',
          action: 'Check Crop Health',
        },
        weather: {
          title: 'Weather Updates',
          description:
            'View local temperature, humidity, rainfall alerts, and plain-language spraying or irrigation advice.',
          action: 'View Weather',
        },
        market: {
          title: 'Market Prices',
          description:
            'Look up official mandi rates by state, district, market yard, and crop before planning your harvest sale.',
          action: 'Check Mandi Rates',
        },
      },
    },
    howItWorks: {
      sectionTitle: 'How AgriMitra AI Works',
      sectionSubtitle:
        'Four straightforward steps from your field question to practical guidance.',
      steps: [
        {
          number: '01',
          title: 'Select your language',
          description:
            'Choose Kannada, English, Hindi, Tamil, or Telugu from the top bar at any time.',
        },
        {
          number: '02',
          title: 'Ask your farming question',
          description:
            'Type in everyday words or use your phone microphone to describe what you see in the field.',
        },
        {
          number: '03',
          title: 'Get AI-powered guidance',
          description:
            'Receive simple step-by-step suggestions grounded in verified agricultural university publications.',
        },
        {
          number: '04',
          title: 'Make informed farming decisions',
          description:
            'Act early on crop health, plan around local weather, and know when to consult a local Krishi Vigyan Kendra expert.',
        },
      ],
    },
    whyAgriMitra: {
      sectionTitle: 'Why Farmers Choose AgriMitra AI',
      sectionSubtitle:
        'Built specifically for small-scale and village farmers across India, respecting clarity and accuracy.',
      reasons: [
        {
          title: 'Regional language support',
          description:
            'Use Kannada, English, Hindi, Tamil, or Telugu seamlessly while keeping crop names accurate and familiar.',
        },
        {
          title: 'Voice-based interaction',
          description:
            'Built for hands-free voice questions and spoken answers where supported by your phone browser.',
        },
        {
          title: 'Simple agricultural guidance',
          description:
            'Clear step-by-step instructions in plain language, free from confusing laboratory jargon.',
        },
        {
          title: 'Reliable information',
          description:
            'Never invents fake data. Prioritizes ICAR, State Agricultural Universities, and official market datasets with visible sources.',
        },
      ],
      ctaHeading: 'Ready to explore the AgriMitra AI workspace?',
      ctaSubtext:
        'Open the AI Farming Assistant or browse our services to see how each phase works together.',
      ctaButton: 'Ask AgriMitra AI',
    },
    footer: {
      description:
        'Smart Farming, Simple Solutions. Multilingual agricultural guidance designed for rural and small-scale farmers across India.',
      servicesHeading: 'Services',
      companyHeading: 'Information',
      languagesHeading: 'Languages',
      dataIntegrityNote:
        'Committed to factual accuracy: AgriMitra AI never fabricates weather readings, mandi prices, or medical/chemical dosages.',
      copyright: '© 2026 AgriMitra AI. Built for Indian agriculture.',
    },
    pages: {
      assistant: {
        title: 'AI Farming Assistant',
        subtitle:
          'Ask questions about crops, soil care, irrigation, or pests in your preferred language.',
        inputPlaceholder: 'Type your farming question here (for example: Tomato leaves turning yellow)...',
        sendButton: 'Send Question',
        micButton: 'Voice Input',
        clearButton: 'Clear Chat',
        starterHeading: 'Common questions farmers ask',
        starters: [
          'My tomato leaves are turning yellow. What should I do?',
          'When is the best time to irrigate paddy after transplanting?',
          'How do I spot early blight on tomato or potato leaves?',
          'What precautions should I take before spraying in windy weather?',
        ],
        phaseNoticeTitle: 'Phase 1 Frontend Ready — Connect Phase 2 Backend for Live Answers',
        phaseNoticeBody:
          'In Phase 1, the responsive layout, language switcher, and voice capability check are active. Live Gemini API answers and ICAR knowledge citations connect via the Python FastAPI backend in Phases 2 and 3. No fake AI responses are generated.',
      },
      disease: {
        title: 'Crop Disease Detection',
        subtitle:
          'Select or drag a clear photograph of an affected crop leaf to prepare for visual inspection.',
        dropTitle: 'Drop a crop leaf photo here',
        dropHint: 'Supports JPG, PNG, or WEBP images up to 5 MB',
        browseButton: 'Browse Image',
        analyzeButton: 'Analyze Image',
        removeButton: 'Remove Photo',
        photoTipsTitle: 'How to take a helpful leaf photo',
        photoTips: [
          'Take the photo in natural daylight without harsh flash glare.',
          'Hold the camera steady so spots, curl, or insects are clearly sharp.',
          'Include both the affected part and nearby healthy green tissue.',
        ],
        phaseNoticeTitle: 'Gemini Vision Analysis Connects in Phase 5',
        phaseNoticeBody:
          'Your image validation and preview work immediately in the browser. To avoid fabricated disease diagnoses, automated symptom analysis activates once the Phase 5 FastAPI + Gemini Vision endpoint is configured.',
      },
      weather: {
        title: 'Local Weather Information',
        subtitle:
          'Select your state and district to view real-time weather conditions and field advisories.',
        stateLabel: 'State',
        districtLabel: 'District',
        checkButton: 'Check Weather',
        phaseNoticeTitle: 'Live Weather API Connects in Phase 6',
        phaseNoticeBody:
          'AgriMitra AI never displays guessed or hardcoded temperatures. Real-time temperature, humidity, rainfall, and forecast data will appear here once the Phase 6 weather service is connected.',
        checklistTitle: 'General weather checks before field work',
        checklistItems: [
          'Avoid foliar spraying when strong afternoon winds or rain are expected within 4 hours.',
          'Check soil moisture by hand 5 cm below the surface before scheduling irrigation.',
          'Ensure proper field drainage channels are clear ahead of heavy monsoon spells.',
        ],
      },
      market: {
        title: 'Agricultural Market Prices',
        subtitle:
          'Filter by state, district, market yard, and crop to check official mandi rates.',
        stateLabel: 'State',
        districtLabel: 'District',
        marketLabel: 'Market Yard (Mandi)',
        cropLabel: 'Crop Name',
        cropPlaceholder: 'Search crop (e.g. Tomato, Paddy, Ragi, Onion)',
        searchButton: 'Search Prices',
        phaseNoticeTitle: 'Official Mandi Dataset Connects in Phase 7',
        phaseNoticeBody:
          'To protect farmers from misleading numbers, AgriMitra AI does not generate sample market prices. Official government mandi rates and historical price charts will load here in Phase 7.',
      },
      about: {
        title: 'About AgriMitra AI',
        subtitle:
          'Making reliable agricultural knowledge accessible to every farmer in their own language.',
      },
      contact: {
        title: 'Contact Us',
        subtitle:
          'Reach out with feedback, regional language suggestions, or agricultural partnership inquiries.',
      },
    },
  },
  kn: {
    brand: {
      name: 'AgriMitra AI',
      tagline: 'ಚುರುಕು ಕೃಷಿ, ಸರಳ ಪರಿಹಾರಗಳು.',
    },
    nav: {
      home: 'ಮುಖಪುಟ',
      assistant: 'AI ಸಹಾಯಕ',
      diseaseDetection: 'ರೋಗ ಪತ್ತೆ',
      weather: 'ಹವಾಮಾನ',
      marketPrices: 'ಮಾರುಕಟ್ಟೆ ದರ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      getStarted: 'ಪ್ರಾರಂಭಿಸಿ',
      openMenu: 'ಮೆನು ತೆರೆಯಿರಿ',
      closeMenu: 'ಮೆನು ಮುಚ್ಚಿ',
    },
    hero: {
      kicker: 'ಬಹುಭಾಷಾ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ',
      heading: 'ನಿಮ್ಮ ಚುರುಕು ಕೃಷಿ ಸಂಗಾತಿ',
      subheading:
        'ನಿಮಗೆ ಅಗತ್ಯವಿರುವಾಗಲೆಲ್ಲಾ ನಿಮ್ಮದೇ ಭಾಷೆಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
      primaryCta: 'AgriMitra AI ಅನ್ನು ಕೇಳಿ',
      secondaryCta: 'ಸೇವೆಗಳನ್ನು ನೋಡಿ',
      voiceCta: 'ಧ್ವನಿ ಮೂಲಕ ಕೇಳಿ',
      voiceUnsupportedNotice:
        'ಈ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಲಭ್ಯವಿಲ್ಲ. ದಯವಿಟ್ಟು AI ಸಹಾಯಕ ಪುಟದಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ ಕೇಳಿ.',
      previewLabel: 'ಉದಾಹರಣೆ ಮಾರ್ಗದರ್ಶನ — Tomato ಎಲೆಗಳ ಆರೈಕೆ',
      previewQuestion: 'ನನ್ನ Tomato ಬೆಳೆಯ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತಿವೆ. ನಾನು ಏನು ಮಾಡಬೇಕು?',
      previewAnswerIntro:
        'Tomato ಎಲೆಗಳು ಹಳದಿಯಾಗಲು ಅನಿಯಮಿತ ನೀರು, ಸಾರಜನಕದ ಕೊರತೆ ಅಥವಾ ಆರಂಭಿಕ ಶಿಲೀಂಧ್ರ ರೋಗ ಕಾರಣವಾಗಿರಬಹುದು.',
      previewSteps: [
        'ಮೊದಲು ಕೆಳಗಿನ ಹಳೆಯ ಎಲೆಗಳು ಅಥವಾ ಮೇಲಿನ ಹೊಸ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತಿವೆಯೇ ಎಂದು ಗಮನಿಸಿ.',
        'ಎಲೆಗಳ ಕೆಳಭಾಗದಲ್ಲಿ ಸಣ್ಣ ಕೀಟಗಳು ಅಥವಾ ಕಂದು ಚುಕ್ಕೆಗಳಿವೆಯೇ ಎಂದು ಪರೀಕ್ಷಿಸಿ.',
        'ಸಂಜೆ ವೇಳೆಯಲ್ಲಿ ಎಲೆಗಳ ಮೇಲೆ ನೇರವಾಗಿ ನೀರು ಸಿಂಪಡಿಸುವುದನ್ನು ತಪ್ಪಿಸಿ.',
      ],
      previewFollowUp:
        'ಎಲೆಗಳ ಮೇಲೆ ಒಣ ಕಂದು ಚುಕ್ಕೆಗಳಿವೆಯೇ ಅಥವಾ ಇಡೀ ಎಲೆ ಹಳದಿಯಾಗಿದೆಯೇ?',
      previewDisclaimer:
        'ಇದು ಉದಾಹರಣೆ ಮುನ್ನೋಟವಾಗಿದೆ. ಹಂತ 2ರಲ್ಲಿ ICAR ಆಧಾರಿತ ನೈಜ AI ಉತ್ತರಗಳು ಲಭ್ಯವಾಗುತ್ತವೆ.',
    },
    services: {
      sectionTitle: 'ದೈನಂದಿನ ಕೃಷಿಗಾಗಿ ಸರಳ ಮತ್ತು ಉಪಯುಕ್ತ ಸೇವೆಗಳು',
      sectionSubtitle:
        'ಮೊಬೈಲ್ ಫೋನ್‌ಗಳಲ್ಲಿಯೂ ಸುಲಭವಾಗಿ ಓದಲು ಮತ್ತು ಬಳಸಲು ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ.',
      cards: {
        assistant: {
          title: 'AI ಕೃಷಿ ಸಹಾಯಕ',
          description:
            'ಬೆಳೆ, ಮಣ್ಣು, ನೀರಾವರಿ ಅಥವಾ ಕೀಟಗಳ ಕುರಿತು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಸರಳ ಪದಗಳಲ್ಲಿ ಅಥವಾ ಧ್ವನಿ ಮೂಲಕ ಕೇಳಿ.',
          action: 'ಸಹಾಯಕರನ್ನು ತೆರೆಯಿರಿ',
        },
        disease: {
          title: 'ಬೆಳೆ ರೋಗ ಪತ್ತೆ',
          description:
            'ಹಾನಿಗೊಳಗಾದ ಎಲೆ ಅಥವಾ ಬೆಳೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಲಕ್ಷಣಗಳು ಮತ್ತು ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳನ್ನು ತಿಳಿಯಿರಿ.',
          action: 'ಬೆಳೆ ಆರೋಗ್ಯ ಪರೀಕ್ಷಿಸಿ',
        },
        weather: {
          title: 'ಹವಾಮಾನ ಮಾಹಿತಿ',
          description:
            'ಸ್ಥಳೀಯ ತಾಪಮಾನ, ತೇವಾಂಶ, ಮಳೆ ಎಚ್ಚರಿಕೆ ಮತ್ತು ಸಿಂಪಡಣೆಗೆ ಸೂಕ್ತ ಸಲಹೆಗಳನ್ನು ನೋಡಿ.',
          action: 'ಹವಾಮಾನ ನೋಡಿ',
        },
        market: {
          title: 'ಮಾರುಕಟ್ಟೆ ದರಗಳು',
          description:
            'ಬೆಳೆ ಮಾರಾಟಕ್ಕೂ ಮುನ್ನ ರಾಜ್ಯ, ಜಿಲ್ಲೆ ಮತ್ತು ಮಂಡಿ ಪ್ರಕಾರ ಅಧಿಕೃತ ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.',
          action: 'ಮಂಡಿ ದರ ನೋಡಿ',
        },
      },
    },
    howItWorks: {
      sectionTitle: 'AgriMitra AI ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      sectionSubtitle: 'ನಿಮ್ಮ ಹೊಲದ ಪ್ರಶ್ನೆಯಿಂದ ಸರಳ ಪರಿಹಾರದವರೆಗೆ ನಾಲ್ಕು ಸುಲಭ ಹಂತಗಳು.',
      steps: [
        {
          number: '01',
          title: 'ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ',
          description:
            'ಯಾವುದೇ ಸಮಯದಲ್ಲಿ ಮೇಲಿನ ಪಟ್ಟಿಯಿಂದ ಕನ್ನಡ, English, हिन्दी, தமிழ் ಅಥವಾ తెలుగు ಆಯ್ಕೆಮಾಡಿ.',
        },
        {
          number: '02',
          title: 'ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ',
          description:
            'ದೈನಂದಿನ ಪದಗಳಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ಫೋನ್ ಮೈಕ್ ಮೂಲಕ ಹೊಲದ ಪರಿಸ್ಥಿತಿಯನ್ನು ವಿವರಿಸಿ.',
        },
        {
          number: '03',
          title: 'AI ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ',
          description:
            'ವಿಶ್ವಾಸಾರ್ಹ ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾಲಯ ಮತ್ತು ICAR ಮಾಹಿತಿ ಆಧಾರಿತ ಹಂತ-ಹಂತದ ಸಲಹೆ ಪಡೆಯಿರಿ.',
        },
        {
          number: '04',
          title: 'ಸರಿಯಾದ ಕೃಷಿ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ',
          description:
            'ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ ಮತ್ತು ಅಗತ್ಯವಿದ್ದಾಗ ಹತ್ತಿರದ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ (KVK) ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
        },
      ],
    },
    whyAgriMitra: {
      sectionTitle: 'ರೈತರು AgriMitra AI ಅನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡುತ್ತಾರೆ',
      sectionSubtitle:
        'ಭಾರತದ ಸಣ್ಣ ಮತ್ತು ಗ್ರಾಮೀಣ ರೈತರಿಗೆ ಸ್ಪಷ್ಟತೆ ಮತ್ತು ನಿಖರತೆಯನ್ನು ಗಮನದಲ್ಲಿಟ್ಟುಕೊಂಡು ನಿರ್ಮಿಸಲಾಗಿದೆ.',
      reasons: [
        {
          title: 'ಪ್ರಾದೇಶಿಕ ಭಾಷಾ ಬೆಂಬಲ',
          description:
            'ಬೆಳೆಗಳ ಹೆಸರುಗಳು ತಪ್ಪಾಗದಂತೆ ಕನ್ನಡ ಮತ್ತು ಇತರ ಭಾರತೀಯ ಭಾಷೆಗಳಲ್ಲಿ ಸುಲಭ ಬಳಕೆ.',
        },
        {
          title: 'ಧ್ವನಿ ಆಧಾರಿತ ಸಂವಹನ',
          description:
            'ಬ್ರೌಸರ್ ಬೆಂಬಲವಿರುವ ಫೋನ್‌ಗಳಲ್ಲಿ ಮಾತನಾಡಿ ಪ್ರಶ್ನೆ ಕೇಳುವ ಮತ್ತು ಉತ್ತರ ಕೇಳಿಸಿಕೊಳ್ಳುವ ಸೌಲಭ್ಯ.',
        },
        {
          title: 'ಸರಳ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ',
          description:
            'ಕಠಿಣ ತಾಂತ್ರಿಕ ಪದಗಳಿಲ್ಲದೆ ಎಲ್ಲರಿಗೂ ಅರ್ಥವಾಗುವ ಸರಳ ಹಂತ-ಹಂತದ ವಿವರಣೆ.',
        },
        {
          title: 'ವಿಶ್ವಾಸಾರ್ಹ ಮಾಹಿತಿ',
          description:
            'ಯಾವುದೇ ಊಹಾಪೋಹದ ಅಂಕಿಅಂಶಗಳಿಲ್ಲದೆ ICAR ಹಾಗೂ ಅಧಿಕೃತ ಕೃಷಿ ಮೂಲಗಳಿಂದ ಮಾಹಿತಿ.',
        },
      ],
      ctaHeading: 'AgriMitra AI ಬಳಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?',
      ctaSubtext: 'AI ಕೃಷಿ ಸಹಾಯಕ ಪುಟವನ್ನು ತೆರೆಯಿರಿ ಅಥವಾ ನಮ್ಮ ಸೇವೆಗಳನ್ನು ನೋಡಿ.',
      ctaButton: 'AgriMitra AI ಅನ್ನು ಕೇಳಿ',
    },
    footer: {
      description:
        'ಚುರುಕು ಕೃಷಿ, ಸರಳ ಪರಿಹಾರಗಳು. ಭಾರತದ ರೈತರಿಗಾಗಿ ಬಹುಭಾಷಾ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ ವೇದಿಕೆ.',
      servicesHeading: 'ಸೇವೆಗಳು',
      companyHeading: 'ಮಾಹಿತಿ',
      languagesHeading: 'ಭಾಷೆಗಳು',
      dataIntegrityNote:
        'ನಿಖರ ಮಾಹಿತಿಯ ಬದ್ಧತೆ: AgriMitra AI ಎಂದಿಗೂ ನಕಲಿ ಹವಾಮಾನ ಅಥವಾ ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ತೋರಿಸುವುದಿಲ್ಲ.',
      copyright: '© 2026 AgriMitra AI. ಭಾರತೀಯ ಕೃಷಿಗಾಗಿ ನಿರ್ಮಿತ.',
    },
    pages: {
      assistant: {
        title: 'AI ಕೃಷಿ ಸಹಾಯಕ',
        subtitle: 'ಬೆಳೆ, ಮಣ್ಣು, ನೀರಾವರಿ ಅಥವಾ ಕೀಟಗಳ ಕುರಿತು ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಪ್ರಶ್ನೆ ಕೇಳಿ.',
        inputPlaceholder: 'ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆಯನ್ನು ಇಲ್ಲಿ ಟೈಪ್ ಮಾಡಿ...',
        sendButton: 'ಪ್ರಶ್ನೆ ಕಳುಹಿಸಿ',
        micButton: 'ಧ್ವನಿ ಇನ್‌ಪುಟ್',
        clearButton: 'ಸಂಭಾಷಣೆ ಅಳಿಸಿ',
        starterHeading: 'ರೈತರು ಸಾಮಾನ್ಯವಾಗಿ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳು',
        starters: [
          'ನನ್ನ Tomato ಬೆಳೆಯ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತಿವೆ. ನಾನು ಏನು ಮಾಡಬೇಕು?',
          'Paddy ನಾಟಿ ಮಾಡಿದ ನಂತರ ನೀರು ಕೊಡಲು ಉತ್ತಮ ಸಮಯ ಯಾವುದು?',
          'Tomato ಅಥವಾ Potato ಎಲೆಗಳಲ್ಲಿ ಆರಂಭಿಕ ಬ್ಲೈಟ್ ಗುರುತಿಸುವುದು ಹೇಗೆ?',
          'ಗಾಳಿ ಹೆಚ್ಚಿರುವಾಗ ಔಷಧಿ ಸಿಂಪಡಿಸುವ ಮುನ್ನ ಯಾವ ಎಚ್ಚರಿಕೆ ವಹಿಸಬೇಕು?',
        ],
        phaseNoticeTitle: 'ಹಂತ 1 ಮುಂಭಾಗ ಸಿದ್ಧವಾಗಿದೆ — ಹಂತ 2ರಲ್ಲಿ ನೈಜ AI ಉತ್ತರಗಳು',
        phaseNoticeBody:
          'ಪ್ರಸ್ತುತ ಹಂತ 1ರಲ್ಲಿ ಭಾಷಾ ಆಯ್ಕೆ ಮತ್ತು ವಿನ್ಯಾಸ ಸಿದ್ಧವಾಗಿದೆ. ಹಂತ 2 ಮತ್ತು 3ರಲ್ಲಿ FastAPI ಮತ್ತು Gemini API ಮೂಲಕ ನೈಜ ಕೃಷಿ ಉತ್ತರಗಳು ಮತ್ತು ICAR ಮೂಲಗಳು ಸಂಪರ್ಕಗೊಳ್ಳುತ್ತವೆ.',
      },
      disease: {
        title: 'ಬೆಳೆ ರೋಗ ಪತ್ತೆ',
        subtitle: 'ಹಾನಿಗೊಳಗಾದ ಎಲೆಯ ಸ್ಪಷ್ಟ ಫೋಟೋವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಇಲ್ಲಿ ಎಳೆಯಿರಿ.',
        dropTitle: 'ಬೆಳೆ ಎಲೆಯ ಫೋಟೋವನ್ನು ಇಲ್ಲಿ ಹಾಕಿ',
        dropHint: 'JPG, PNG, ಅಥವಾ WEBP ಫೋಟೋಗಳು (ಗರಿಷ್ಠ 5 MB)',
        browseButton: 'ಫೋಟೋ ಆಯ್ಕೆಮಾಡಿ',
        analyzeButton: 'ಫೋಟೋ ಪರಿಶೀಲಿಸಿ',
        removeButton: 'ಫೋಟೋ ತೆಗೆದುಹಾಕಿ',
        photoTipsTitle: 'ಉತ್ತಮ ಫೋಟೋ ತೆಗೆಯುವ ಸಲಹೆಗಳು',
        photoTips: [
          'ಹಗಲಿನ ನೈಸರ್ಗಿಕ ಬೆಳಕಿನಲ್ಲಿ ಫೋಟೋ ತೆಗೆಯಿರಿ.',
          'ಎಲೆಯ ಮೇಲಿನ ಚುಕ್ಕೆಗಳು ಅಥವಾ ಕೀಟಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣುವಂತೆ ಕ್ಯಾಮೆರಾ ಸ್ಥಿರವಾಗಿಡಿ.',
          'ರೋಗಗ್ರಸ್ತ ಭಾಗ ಮತ್ತು ಪಕ್ಕದ ಆರೋಗ್ಯಕರ ಎಲೆಯನ್ನು ಒಟ್ಟಿಗೆ ತೋರಿಸಿ.',
        ],
        phaseNoticeTitle: 'ಹಂತ 5ರಲ್ಲಿ Gemini Vision ವಿಶ್ಲೇಷಣೆ ಸೇರುತ್ತದೆ',
        phaseNoticeBody:
          'ಫೋಟೋ ಆಯ್ಕೆ ಮತ್ತು ಮುನ್ನೋಟ ಈಗಾಗಲೇ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ನಕಲಿ ರೋಗ ನಿರ್ಣಯವನ್ನು ತಪ್ಪಿಸಲು, ಹಂತ 5ರಲ್ಲಿ ಬ್ಯಾಕ್‌ಎಂಡ್ Gemini Vision ಸಂಪರ್ಕಿಸಿದ ನಂತರ ವಿಶ್ಲೇಷಣೆ ಲಭ್ಯವಾಗುತ್ತದೆ.',
      },
      weather: {
        title: 'ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮಾಹಿತಿ',
        subtitle: 'ನಿಮ್ಮ ರಾಜ್ಯ ಮತ್ತು ಜಿಲ್ಲೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಹವಾಮಾನ ಸಲಹೆಗಳನ್ನು ನೋಡಿ.',
        stateLabel: 'ರಾಜ್ಯ',
        districtLabel: 'ಜಿಲ್ಲೆ',
        checkButton: 'ಹವಾಮಾನ ನೋಡಿ',
        phaseNoticeTitle: 'ಹಂತ 6ರಲ್ಲಿ ನೈಜ ಹವಾಮಾನ API ಸಂಪರ್ಕಗೊಳ್ಳುತ್ತದೆ',
        phaseNoticeBody:
          'AgriMitra AI ಎಂದಿಗೂ ಊಹೆಯ ತಾಪಮಾನವನ್ನು ತೋರಿಸುವುದಿಲ್ಲ. ಹಂತ 6ರಲ್ಲಿ ನೈಜ ಹವಾಮಾನ ಸೇವೆ ಸಂಪರ್ಕವಾದ ನಂತರ ಇಲ್ಲಿ ತಾಪಮಾನ, ತೇವಾಂಶ ಮತ್ತು ಮಳೆ ಮಾಹಿತಿ ಕಾಣಿಸುತ್ತದೆ.',
        checklistTitle: 'ಹೊಲದ ಕೆಲಸಕ್ಕೂ ಮುನ್ನ ಹವಾಮಾನ ಪರಿಶೀಲನೆ',
        checklistItems: [
          'ಮುಂದಿನ 4 ಗಂಟೆಗಳಲ್ಲಿ ಮಳೆ ಅಥವಾ ಜೋರು ಗಾಳಿ ಇದ್ದರೆ ಸಿಂಪಡಣೆಯನ್ನು ಮುಂದೂಡಿ.',
          'ನೀರು ಹಾಯಿಸುವ ಮೊದಲು ಮಣ್ಣಿನ 5 ಸೆಂ.ಮೀ ಆಳದಲ್ಲಿ ತೇವಾಂಶ ಪರೀಕ್ಷಿಸಿ.',
          'ಭಾರಿ ಮಳೆಗೆ ಮುನ್ನ ಹೊಲದ ನೀರು ಹರಿಯುವ ಕಾಲುವೆಗಳನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಿ.',
        ],
      },
      market: {
        title: 'ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ದರಗಳು',
        subtitle: 'ಅಧಿಕೃತ ಮಂಡಿ ದರಗಳನ್ನು ನೋಡಲು ರಾಜ್ಯ, ಜಿಲ್ಲೆ ಮತ್ತು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
        stateLabel: 'ರಾಜ್ಯ',
        districtLabel: 'ಜಿಲ್ಲೆ',
        marketLabel: 'ಮಾರುಕಟ್ಟೆ (ಮಂಡಿ)',
        cropLabel: 'ಬೆಳೆ ಹೆಸರು',
        cropPlaceholder: 'ಬೆಳೆ ಹುಡುಕಿ (ಉದಾ: Tomato, Paddy, Ragi, Onion)',
        searchButton: 'ದರ ಹುಡುಕಿ',
        phaseNoticeTitle: 'ಹಂತ 7ರಲ್ಲಿ ಅಧಿಕೃತ ಮಂಡಿ ದರಗಳು ಸಂಪರ್ಕಗೊಳ್ಳುತ್ತವೆ',
        phaseNoticeBody:
          'ತಪ್ಪು ದರಗಳಿಂದ ರೈತರನ್ನು ರಕ್ಷಿಸಲು ನಕಲಿ ಮಾರುಕಟ್ಟೆ ದರಗಳನ್ನು ತೋರಿಸಲಾಗುವುದಿಲ್ಲ. ಹಂತ 7ರಲ್ಲಿ ಸರ್ಕಾರಿ ಮಂಡಿ ಡೇಟಾಸೆಟ್ ಮೂಲಕ ನೈಜ ದರಗಳು ಲಭ್ಯವಾಗುತ್ತವೆ.',
      },
      about: {
        title: 'AgriMitra AI ಬಗ್ಗೆ',
        subtitle: 'ಪ್ರತಿ ರೈತರಿಗೂ ಅವರದೇ ಭಾಷೆಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ಕೃಷಿ ಜ್ಞಾನ ತಲುಪಿಸುವುದು ನಮ್ಮ ಗುರಿ.',
      },
      contact: {
        title: 'ಸಂಪರ್ಕಿಸಿ',
        subtitle: 'ಸಲಹೆಗಳು, ಭಾಷಾ ಬೆಂಬಲ ಅಥವಾ ಸಹಭಾಗಿತ್ವಕ್ಕಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      },
    },
  },
  hi: {
    brand: {
      name: 'AgriMitra AI',
      tagline: 'स्मार्ट खेती, सरल समाधान।',
    },
    nav: {
      home: 'होम',
      assistant: 'AI सहायक',
      diseaseDetection: 'रोग पहचान',
      weather: 'मौसम',
      marketPrices: 'मंडी भाव',
      about: 'हमारे बारे में',
      contact: 'संपर्क करें',
      getStarted: 'शुरू करें',
      openMenu: 'नेविगेशन मेनू खोलें',
      closeMenu: 'नेविगेशन मेनू बंद करें',
    },
    hero: {
      kicker: 'बहुभाषी कृषि मार्गदर्शन',
      heading: 'आपका स्मार्ट खेती साथी',
      subheading:
        'जब भी आपको ज़रूरत हो, अपनी भाषा में भरोसेमंद खेती की सलाह पाएं।',
      primaryCta: 'AgriMitra AI से पूछें',
      secondaryCta: 'सेवाएं देखें',
      voiceCta: 'बोलकर सवाल पूछें',
      voiceUnsupportedNotice:
        'इस ब्राउज़र में वॉइस इनपुट उपलब्ध नहीं है। आप AI सहायक में लिखकर पूछ सकते हैं।',
      previewLabel: 'उदाहरण मार्गदर्शन — Tomato की पत्तियों की देखभाल',
      previewQuestion: 'मेरे Tomato के पत्ते पीले पड़ रहे हैं। मुझे क्या करना चाहिए?',
      previewAnswerIntro:
        'Tomato की पत्तियां पीली पड़ने के मुख्य कारण अनियमित सिंचाई, नाइट्रोजन की कमी या शुरुआती फफूंद संक्रमण हो सकते हैं।',
      previewSteps: [
        'जांचें कि पहले नीचे की पुरानी पत्तियां पीली हो रही हैं या ऊपर की नई पत्तियां।',
        'पत्तियों के निचले हिस्से में छोटे कीड़े या भूरे धब्बे देखें।',
        'शाम के समय पत्तियों पर सीधे पानी डालने से बचें।',
      ],
      previewFollowUp:
        'क्या पत्तियों पर सूखे भूरे धब्बे हैं या पूरी पत्ती एक साथ पीली पड़ रही है?',
      previewDisclaimer:
        'यह उदाहरण झलक है। चरण 2 में ICAR स्रोतों के साथ लाइव AI उत्तर जुड़ेंगे।',
    },
    services: {
      sectionTitle: 'रोज़मर्रा की खेती के लिए व्यावहारिक उपकरण',
      sectionSubtitle:
        'मोबाइल फोन और कंप्यूटर पर आसानी से पढ़ने और समझने के लिए तैयार।',
      cards: {
        assistant: {
          title: 'AI खेती सहायक',
          description:
            'फसल, मिट्टी, सिंचाई या कीटों के बारे में अपनी भाषा में आसान शब्दों या आवाज़ से सवाल पूछें।',
          action: 'AI सहायक खोलें',
        },
        disease: {
          title: 'फसल रोग पहचान',
          description:
            'प्रभावित पत्ती या पौधे की स्पष्ट तस्वीर अपलोड करें और लक्षण व सुरक्षित बचाव के उपाय जानें।',
          action: 'फसल जांचें',
        },
        weather: {
          title: 'मौसम की जानकारी',
          description:
            'स्थानीय तापमान, नमी, बारिश की चेतावनी और सिंचाई या छिड़काव की आसान सलाह देखें।',
          action: 'मौसम देखें',
        },
        market: {
          title: 'मंडी भाव',
          description:
            'फसल बेचने से पहले राज्य, जिले और मंडी के अनुसार आधिकारिक मंडी भाव देखें।',
          action: 'मंडी भाव देखें',
        },
      },
    },
    howItWorks: {
      sectionTitle: 'AgriMitra AI कैसे काम करता है',
      sectionSubtitle: 'खेत के सवाल से सही सलाह तक चार आसान कदम।',
      steps: [
        {
          number: '01',
          title: 'अपनी भाषा चुनें',
          description:
            'ऊपर दिए गए विकल्प से कभी भी अपनी पसंदीदा भाषा चुनें।',
        },
        {
          number: '02',
          title: 'अपना कृषि प्रश्न पूछें',
          description:
            'सरल शब्दों में लिखें या अपने फोन के माइक से खेत की स्थिति बताएं।',
        },
        {
          number: '03',
          title: 'AI आधारित सलाह पाएं',
          description:
            'कृषि विश्वविद्यालयों और ICAR प्रकाशनों पर आधारित चरण-दर-चरण मार्गदर्शन प्राप्त करें।',
        },
        {
          number: '04',
          title: 'सही कृषि निर्णय लें',
          description:
            'समय पर फसल की रक्षा करें और जरूरत पड़ने पर नजदीकी कृषि विज्ञान केंद्र (KVK) विशेषज्ञ से मिलें।',
        },
      ],
    },
    whyAgriMitra: {
      sectionTitle: 'किसान AgriMitra AI क्यों चुनते हैं',
      sectionSubtitle:
        'भारत के छोटे और ग्रामीण किसानों की सुविधा और सटीकता को ध्यान में रखकर बनाया गया।',
      reasons: [
        {
          title: 'क्षेत्रीय भाषा सहायता',
          description:
            'फसलों के नाम बिना बिगाड़े अपनी भाषा में सहज उपयोग।',
        },
        {
          title: 'वॉइस आधारित संवाद',
          description:
            'जहां ब्राउज़र सपोर्ट हो, वहां बोलकर पूछने और उत्तर सुनने की सुविधा।',
        },
        {
          title: 'सरल कृषि मार्गदर्शन',
          description:
            'कठिन तकनीकी शब्दों के बिना स्पष्ट और व्यावहारिक कदम।',
        },
        {
          title: 'विश्वसनीय जानकारी',
          description:
            'कभी भी नकली आंकड़े नहीं दिखाता; ICAR और आधिकारिक स्रोतों को प्राथमिकता देता है।',
        },
      ],
      ctaHeading: 'क्या आप AgriMitra AI का उपयोग करने के लिए तैयार हैं?',
      ctaSubtext:
        'AI खेती सहायक खोलें या हमारी सभी कृषि सेवाएं देखें।',
      ctaButton: 'AgriMitra AI से पूछें',
    },
    footer: {
      description:
        'स्मार्ट खेती, सरल समाधान। भारत भर के किसानों के लिए बहुभाषी कृषि सहायता।',
      servicesHeading: 'सेवाएं',
      companyHeading: 'जानकारी',
      languagesHeading: 'भाषाएं',
      dataIntegrityNote:
        'सटीकता के प्रति प्रतिबद्ध: AgriMitra AI कभी भी नकली मौसम या मंडी भाव नहीं दिखाता।',
      copyright: '© 2026 AgriMitra AI. भारतीय कृषि के लिए निर्मित।',
    },
    pages: {
      assistant: {
        title: 'AI खेती सहायक',
        subtitle: 'अपनी भाषा में फसल, मिट्टी, सिंचाई या कीटों से जुड़े प्रश्न पूछें।',
        inputPlaceholder: 'अपना खेती से जुड़ा सवाल यहां लिखें...',
        sendButton: 'सवाल भेजें',
        micButton: 'वॉइस इनपुट',
        clearButton: 'चैट साफ करें',
        starterHeading: 'किसानों द्वारा पूछे जाने वाले आम सवाल',
        starters: [
          'मेरे Tomato के पत्ते पीले पड़ रहे हैं। मुझे क्या करना चाहिए?',
          'Paddy की रोपाई के बाद सिंचाई का सही समय क्या है?',
          'Tomato या Potato की पत्तियों पर शुरुआती झुलसा रोग कैसे पहचानें?',
          'तेज़ हवा में छिड़काव करने से पहले क्या सावधानियां रखनी चाहिए?',
        ],
        phaseNoticeTitle: 'चरण 1 फ्रंटएंड तैयार — लाइव उत्तर चरण 2 में जुड़ेंगे',
        phaseNoticeBody:
          'चरण 1 में बहुभाषी इंटरफेस तैयार है। चरण 2 और 3 में Python FastAPI और Gemini API के माध्यम से लाइव कृषि उत्तर जुड़ेंगे।',
      },
      disease: {
        title: 'फसल रोग पहचान',
        subtitle: 'प्रभावित पत्ती की स्पष्ट फोटो चुनें या यहां खींचकर छोड़ें।',
        dropTitle: 'फसल की पत्ती की फोटो यहां छोड़ें',
        dropHint: 'JPG, PNG या WEBP फोटो (अधिकतम 5 MB)',
        browseButton: 'फोटो चुनें',
        analyzeButton: 'फोटो जांचें',
        removeButton: 'फोटो हटाएं',
        photoTipsTitle: 'सही फोटो लेने के सुझाव',
        photoTips: [
          'तेज़ फ्लैश के बिना दिन के प्राकृतिक प्रकाश में फोटो लें।',
          'कैमरा स्थिर रखें ताकि धब्बे या कीड़े साफ दिखें।',
          'प्रभावित हिस्से के साथ पास की स्वस्थ हरी पत्ती भी दिखाएं।',
        ],
        phaseNoticeTitle: 'चरण 5 में Gemini Vision जांच जुड़ेगी',
        phaseNoticeBody:
          'फोटो चयन और प्रीव्यू अभी काम कर रहा है। नकली रोग परिणाम से बचने के लिए, असली जांच चरण 5 में बैकएंड जुड़ने के बाद सक्रिय होगी।',
      },
      weather: {
        title: 'स्थानीय मौसम जानकारी',
        subtitle: 'मौसम और खेती की सलाह देखने के लिए अपना राज्य और जिला चुनें।',
        stateLabel: 'राज्य',
        districtLabel: 'जिला',
        checkButton: 'मौसम देखें',
        phaseNoticeTitle: 'चरण 6 में लाइव मौसम API जुड़ेगा',
        phaseNoticeBody:
          'AgriMitra AI कभी भी अंदाज़े से तापमान नहीं दिखाता। चरण 6 में वास्तविक मौसम सेवा जुड़ने पर यहां जानकारी दिखाई देगी।',
        checklistTitle: 'खेत के काम से पहले मौसम जांच',
        checklistItems: [
          'अगले 4 घंटों में बारिश या तेज़ हवा की संभावना हो तो छिड़काव न करें।',
          'सिंचाई से पहले 5 सेमी गहराई पर मिट्टी की नमी जांचें।',
          'भारी बारिश से पहले खेत की जल निकासी नालियां साफ रखें।',
        ],
      },
      market: {
        title: 'कृषि मंडी भाव',
        subtitle: 'आधिकारिक मंडी दरें देखने के लिए राज्य, जिला और फसल चुनें।',
        stateLabel: 'राज्य',
        districtLabel: 'जिला',
        marketLabel: 'मंडी',
        cropLabel: 'फसल का नाम',
        cropPlaceholder: 'फसल खोजें (जैसे Tomato, Paddy, Wheat, Onion)',
        searchButton: 'भाव खोजें',
        phaseNoticeTitle: 'चरण 7 में आधिकारिक मंडी डेटा जुड़ेगा',
        phaseNoticeBody:
          'गलत आंकड़ों से बचाव के लिए कोई नकली मंडी भाव नहीं दिखाया गया है। चरण 7 में सरकारी डेटासेट से असली भाव जुड़ेंगे।',
      },
      about: {
        title: 'AgriMitra AI के बारे में',
        subtitle: 'हर किसान तक उनकी अपनी भाषा में भरोसेमंद कृषि जानकारी पहुंचाना।',
      },
      contact: {
        title: 'संपर्क करें',
        subtitle: 'सुझाव, भाषा सहयोग या साझेदारी के लिए हमसे संपर्क करें।',
      },
    },
  },
  ta: {
    brand: {
      name: 'AgriMitra AI',
      tagline: 'ஸ்மார்ட் விவசாயம், எளிய தீர்வுகள்.',
    },
    nav: {
      home: 'முகப்பு',
      assistant: 'AI உதவியாளர்',
      diseaseDetection: 'நோய் கண்டறிதல்',
      weather: 'வானிலை',
      marketPrices: 'சந்தை விலை',
      about: 'எங்களைப் பற்றி',
      contact: 'தொடர்பு கொள்ள',
      getStarted: 'தொடங்கவும்',
      openMenu: 'மெனுவைத் திறக்கவும்',
      closeMenu: 'மெனுவை மூடவும்',
    },
    hero: {
      kicker: 'பன்மொழி விவசாய வழிகாட்டுதல்',
      heading: 'உங்கள் ஸ்மார்ட் விவசாய துணைவன்',
      subheading:
        'உங்களுக்குத் தேவைப்படும்போது உங்கள் சொந்த மொழியில் நம்பகமான விவசாய வழிகாட்டுதலைப் பெறுங்கள்.',
      primaryCta: 'AgriMitra AI-யிடம் கேளுங்கள்',
      secondaryCta: 'சேவைகளைப் பார்க்க',
      voiceCta: 'குரல் மூலம் கேளுங்கள்',
      voiceUnsupportedNotice:
        'இந்த உலாவியில் குரல் உள்ளீடு ஆதரிக்கப்படவில்லை. AI உதவியாளரில் தட்டச்சு செய்து கேளுங்கள்.',
      previewLabel: 'மாதிரி வழிகாட்டுதல் — Tomato இலை பராமரிப்பு',
      previewQuestion: 'என் Tomato செடியின் இலைகள் மஞ்சளாக மாறுகின்றன. நான் என்ன செய்ய வேண்டும்?',
      previewAnswerIntro:
        'ஒழுங்கற்ற நீர்ப்பாசனம், நைட்ரஜன் குறைபாடு அல்லது ஆரம்பகால பூஞ்சை தொற்று காரணமாக இலைகள் மஞ்சளாகலாம்.',
      previewSteps: [
        'முதலில் கீழ் இலைகள் அல்லது மேல் புதிய இலைகள் மஞ்சளாகின்றனவா என்பதைப் பார்க்கவும்.',
        'இலைகளின் அடிப்பகுதியில் சிறிய பூச்சிகள் அல்லது பழுப்புப் புள்ளிகள் உள்ளனவா எனச் சரிபார்க்கவும்.',
        'மாலை நேரத்தில் இலைகள் மீது நேரடியாகத் தண்ணீர் ஊற்றுவதைத் தவிர்க்கவும்.',
      ],
      previewFollowUp:
        'இலைகளில் உலர்ந்த பழுப்புப் புள்ளிகள் உள்ளனவா அல்லது முழு இலையும் மஞ்சளாகிறதா?',
      previewDisclaimer:
        'இது மாதிரி காட்சி மட்டுமே. நிலை 2-ல் ICAR ஆதாரங்களுடன் நேரடி AI பதில்கள் இணையும்.',
    },
    services: {
      sectionTitle: 'அன்றாட விவசாயத்திற்கான எளிய கருவிகள்',
      sectionSubtitle:
        'மொபைல் போன்களில் எளிதாகப் படிக்கவும் பயன்படுத்தவும் வடிவமைக்கப்பட்டுள்ளது.',
      cards: {
        assistant: {
          title: 'AI விவசாய உதவியாளர்',
          description:
            'பயிர், மண், நீர்ப்பாசனம் அல்லது பூச்சிகள் குறித்து உங்கள் மொழியில் எளிமையாகக் கேளுங்கள்.',
          action: 'உதவியாளரைத் திறக்கவும்',
        },
        disease: {
          title: 'பயிர் நோய் கண்டறிதல்',
          description:
            'பாதிக்கப்பட்ட இலையின் தெளிவான படத்தை பதிவேற்றி அறிகுறிகள் மற்றும் தடுப்பு முறைகளை அறியுங்கள்.',
          action: 'பயிர் நலம் பார்க்க',
        },
        weather: {
          title: 'வானிலை தகவல்',
          description:
            'உள்ளூர் வெப்பநிலை, ஈரப்பதம், மழை எச்சரிக்கை மற்றும் வயல் வேலை ஆலோசனைகளைப் பார்க்கவும்.',
          action: 'வானிலை பார்க்க',
        },
        market: {
          title: 'சந்தை விலைகள்',
          description:
            'அறுவடை விற்பனைக்கு முன் மாநிலம் மற்றும் மாவட்டம் வாரியாக அதிகாரப்பூர்வ சந்தை விலைகளைச் சரிபார்க்கவும்.',
          action: 'சந்தை விலை பார்க்க',
        },
      },
    },
    howItWorks: {
      sectionTitle: 'AgriMitra AI எவ்வாறு செயல்படுகிறது',
      sectionSubtitle: 'உங்கள் வயல் கேள்வியிலிருந்து எளிய தீர்வு வரை நான்கு படிகள்.',
      steps: [
        {
          number: '01',
          title: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
          description: 'மேலே உள்ள பட்டியிலிருந்து எப்போது வேண்டுமானாலும் உங்கள் மொழியை மாற்றலாம்.',
        },
        {
          number: '02',
          title: 'உங்கள் விவசாயக் கேள்வியைக் கேளுங்கள்',
          description: 'எளிய வார்த்தைகளில் தட்டச்சு செய்யவும் அல்லது குரல் மூலம் கேட்கவும்.',
        },
        {
          number: '03',
          title: 'AI வழிகாட்டுதலைப் பெறுங்கள்',
          description: 'ICAR மற்றும் வேளாண் பல்கலைக்கழகத் தகவல்களின் அடிப்படையில் எளிய ஆலோசனை பெறுங்கள்.',
        },
        {
          number: '04',
          title: 'சரியான முடிவுகளை எடுங்கள்',
          description: 'பயிர்களை முன்கூட்டியே பாதுகாத்து, தேவைப்படும்போது KVK நிபுணர்களை அணுகவும்.',
        },
      ],
    },
    whyAgriMitra: {
      sectionTitle: 'விவசாயிகள் ஏன் AgriMitra AI-ஐ தேர்வு செய்கிறார்கள்',
      sectionSubtitle: 'இந்தியாவின் சிறு மற்றும் கிராமப்புற விவசாயிகளுக்காக உருவாக்கப்பட்டது.',
      reasons: [
        {
          title: 'பிராந்திய மொழி ஆதரவு',
          description: 'பயிர் பெயர்கள் மாறாமல் உங்கள் மொழியில் தெளிவான பயன்பாடு.',
        },
        {
          title: 'குரல் வழி தொடர்பு',
          description: 'உலாவி ஆதரிக்கும் சாதனங்களில் பேசி கேள்வி கேட்கும் வசதி.',
        },
        {
          title: 'எளிய விவசாய வழிகாட்டுதல்',
          description: 'சிக்கலான தொழில்நுட்ப சொற்களின்றி படிப்படியான விளக்கம்.',
        },
        {
          title: 'நம்பகமான தகவல்',
          description: 'போலி தரவுகள் இன்றி அதிகாரப்பூர்வ ஆதாரங்களுக்கு முன்னுரிமை.',
        },
      ],
      ctaHeading: 'AgriMitra AI-ஐப் பயன்படுத்தத் தயாரா?',
      ctaSubtext: 'AI விவசாய உதவியாளரைத் திறந்து சேவைகளைப் பாருங்கள்.',
      ctaButton: 'AgriMitra AI-யிடம் கேளுங்கள்',
    },
    footer: {
      description: 'ஸ்மார்ட் விவசாயம், எளிய தீர்வுகள். இந்திய விவசாயிகளுக்கான பன்மொழி வழிகாட்டி.',
      servicesHeading: 'சேவைகள்',
      companyHeading: 'தகவல்',
      languagesHeading: 'மொழிகள்',
      dataIntegrityNote:
        'உண்மைத் தன்மை: AgriMitra AI ஒருபோதும் போலியான வானிலை அல்லது சந்தை விலைகளைக் காட்டாது.',
      copyright: '© 2026 AgriMitra AI. இந்திய விவசாயத்திற்காக உருவாக்கப்பட்டது.',
    },
    pages: {
      assistant: {
        title: 'AI விவசாய உதவியாளர்',
        subtitle: 'பயிர், மண், நீர்ப்பாசனம் அல்லது பூச்சிகள் பற்றி உங்கள் மொழியில் கேளுங்கள்.',
        inputPlaceholder: 'உங்கள் விவசாயக் கேள்வியை இங்கே தட்டச்சு செய்யவும்...',
        sendButton: 'கேள்வி அனுப்பு',
        micButton: 'குரல் உள்ளீடு',
        clearButton: 'உரையாடலை அழி',
        starterHeading: 'விவசாயிகள் கேட்கும் பொதுவான கேள்விகள்',
        starters: [
          'என் Tomato செடியின் இலைகள் மஞ்சளாக மாறுகின்றன. என்ன செய்வது?',
          'Paddy நடவு செய்த பிறகு எப்போது நீர் பாய்ச்ச வேண்டும்?',
          'Tomato இலைகளில் ஆரம்பகால கருகல் நோயை எவ்வாறு கண்டறிவது?',
          'காற்று வீசும்போது மருந்து தெளிப்பதற்கு முன் என்ன முன்னெச்சரிக்கை எடுக்க வேண்டும்?',
        ],
        phaseNoticeTitle: 'நிலை 1 முகப்பு தயார் — நிலை 2-ல் நேரடி AI பதில்கள் இணையும்',
        phaseNoticeBody:
          'நிலை 1-ல் இடைமுகம் மற்றும் மொழி மாற்றம் தயாராக உள்ளது. நிலை 2 மற்றும் 3-ல் FastAPI + Gemini API வழியாக நேரடி பதில்கள் கிடைக்கும்.',
      },
      disease: {
        title: 'பயிர் நோய் கண்டறிதல்',
        subtitle: 'பாதிக்கப்பட்ட இலையின் தெளிவான புகைப்படத்தைத் தேர்ந்தெடுக்கவும்.',
        dropTitle: 'இலையின் புகைப்படத்தை இங்கே விடவும்',
        dropHint: 'JPG, PNG அல்லது WEBP (அதிகபட்சம் 5 MB)',
        browseButton: 'படம் தேர்வு செய்',
        analyzeButton: 'படத்தை ஆய்வு செய்',
        removeButton: 'படத்தை நீக்கு',
        photoTipsTitle: 'தெளிவான படம் எடுப்பதற்கான குறிப்புகள்',
        photoTips: [
          'பகல் வெளிச்சத்தில் பிளாஷ் இல்லாமல் படம் எடுக்கவும்.',
          'புள்ளிகள் தெளிவாகத் தெரிய கேமராவை அசைவின்றி பிடிக்கவும்.',
          'நோய் பாதிக்கப்பட்ட பகுதியுடன் ஆரோக்கியமான இலையையும் காட்டவும்.',
        ],
        phaseNoticeTitle: 'நிலை 5-ல் Gemini Vision ஆய்வு இணையும்',
        phaseNoticeBody:
          'படம் சரிபார்ப்பு மற்றும் முன்னோட்டம் தற்போது செயல்படுகிறது. போலி நோயறிதலைத் தவிர்க்க, நிலை 5-ல் பின்தள இணைப்புக்குப் பிறகு ஆய்வு செயல்படும்.',
      },
      weather: {
        title: 'உள்ளூர் வானிலை தகவல்',
        subtitle: 'உங்கள் மாநிலம் மற்றும் மாவட்டத்தைத் தேர்ந்தெடுக்கவும்.',
        stateLabel: 'மாநிலம்',
        districtLabel: 'மாவட்டம்',
        checkButton: 'வானிலை பார்',
        phaseNoticeTitle: 'நிலை 6-ல் நேரடி வானிலை API இணையும்',
        phaseNoticeBody:
          'AgriMitra AI ஒருபோதும் கற்பனையான வெப்பநிலையைக் காட்டாது. நிலை 6-ல் நேரடி வானிலை சேவை இணையும்.',
        checklistTitle: 'வயல் வேலைக்கு முன் வானிலை சரிபார்ப்பு',
        checklistItems: [
          'அடுத்த 4 மணி நேரத்தில் மழை அல்லது பலத்த காற்று இருந்தால் தெளிப்பதைத் தவிர்க்கவும்.',
          'நீர் பாய்ச்சுவதற்கு முன் மண்ணின் ஈரப்பதத்தை 5 செ.மீ ஆழத்தில் சரிபார்க்கவும்.',
          'பலத்த மழைக்கு முன் வடிகால் கால்வாய்களைச் சுத்தமாக வைக்கவும்.',
        ],
      },
      market: {
        title: 'வேளாண் சந்தை விலைகள்',
        subtitle: 'மாநிலம், மாவட்டம் மற்றும் பயிர் அடிப்படையில் தேடவும்.',
        stateLabel: 'மாநிலம்',
        districtLabel: 'மாவட்டம்',
        marketLabel: 'சந்தை (மண்டி)',
        cropLabel: 'பயிர் பெயர்',
        cropPlaceholder: 'பயிர் தேடு (எ.கா: Tomato, Paddy, Onion)',
        searchButton: 'விலை தேடு',
        phaseNoticeTitle: 'நிலை 7-ல் அதிகாரப்பூர்வ சந்தை தரவு இணையும்',
        phaseNoticeBody:
          'தவறான விலைகளைத் தவிர்க்க மாதிரி விலைகள் காட்டப்படவில்லை. நிலை 7-ல் அரசு சந்தை தரவு இணையும்.',
      },
      about: {
        title: 'AgriMitra AI பற்றி',
        subtitle: 'ஒவ்வொரு விவசாயிக்கும் அவர்களின் சொந்த மொழியில் நம்பகமான வேளாண் அறிவை வழங்குதல்.',
      },
      contact: {
        title: 'தொடர்பு கொள்ள',
        subtitle: 'கருத்துக்கள் அல்லது கூட்டாண்மை விவரங்களுக்கு எங்களைத் தொடர்பு கொள்ளவும்.',
      },
    },
  },
  te: {
    brand: {
      name: 'AgriMitra AI',
      tagline: 'స్మార్ట్ వ్యవసాయం, సులభమైన పరిష్కారాలు.',
    },
    nav: {
      home: 'హోమ్',
      assistant: 'AI సహాయకుడు',
      diseaseDetection: 'తెగులు గుర్తింపు',
      weather: 'వాతావరణం',
      marketPrices: 'మార్కెట్ ధరలు',
      about: 'మా గురించి',
      contact: 'సంప్రదించండి',
      getStarted: 'ప్రారంభించండి',
      openMenu: 'మెనూ తెరవండి',
      closeMenu: 'మెనూ మూయండి',
    },
    hero: {
      kicker: 'బహుభాషా వ్యవసాయ మార్గదర్శకత్వం',
      heading: 'మీ స్మార్ట్ వ్యవసాయ భాగస్వామి',
      subheading:
        'మీకు అవసరమైనప్పుడు మీ స్వంత భాషలో నమ్మకమైన వ్యవసాయ సలహాలు పొందండి.',
      primaryCta: 'AgriMitra AI ని అడగండి',
      secondaryCta: 'సేవలను చూడండి',
      voiceCta: 'మాట్లాడి అడగండి',
      voiceUnsupportedNotice:
        'ఈ బ్రౌజర్‌లో వాయిస్ ఇన్‌పుట్ అందుబాటులో లేదు. మీరు AI సహాయకుడిలో టైప్ చేసి అడగవచ్చు.',
      previewLabel: 'ఉదాహరణ మార్గదర్శకం — Tomato ఆకుల సంరక్షణ',
      previewQuestion: 'నా Tomato ఆకులు పసుపు రంగులోకి మారుతున్నాయి. నేను ఏమి చేయాలి?',
      previewAnswerIntro:
        'సక్రమంగా నీరు పెట్టకపోవడం, నత్రజని లోపం లేదా ప్రారంభ శిలీంధ్ర వ్యాధి వల్ల Tomato ఆకులు పసుపు రంగులోకి మారవచ్చు.',
      previewSteps: [
        'ముందుగా కింది పాత ఆకులు లేదా పై కొత్త ఆకులు పసుపు రంగులోకి మారుతున్నాయో చూడండి.',
        'ఆకుల అడుగు భాగంలో చిన్న పురుగులు లేదా గోధుమ రంగు మచ్చలు ఉన్నాయో పరిశీలించండి.',
        'సాయంత్రం వేళల్లో ఆకులపై నేరుగా నీరు చల్లడం మానుకోండి.',
      ],
      previewFollowUp:
        'ఆకులపై ఎండిన గోధుమ మచ్చలు ఉన్నాయా లేదా ఆకు అంతా పసుపు రంగులోకి మారుతోందా?',
      previewDisclaimer:
        'ఇది ఉదాహరణ ప్రదర్శన మాత్రమే. దశ 2లో ICAR ఆధారిత లైవ్ AI సమాధానాలు అందుతాయి.',
    },
    services: {
      sectionTitle: 'రోజువారీ వ్యవసాయానికి ఉపయోగపడే సాధనాలు',
      sectionSubtitle:
        'మొబైల్ ఫోన్లలో సులభంగా చదవడానికి మరియు ఉపయోగించడానికి రూపొందించబడింది.',
      cards: {
        assistant: {
          title: 'AI వ్యవసాయ సహాయకుడు',
          description:
            'పంట, నేల, నీటిపారుదల లేదా తెగుళ్ల గురించి మీ భాషలో సాధారణ పదాలలో లేదా వాయిస్ ద్వారా అడగండి.',
          action: 'సహాయకుడిని తెరవండి',
        },
        disease: {
          title: 'పంట తెగులు గుర్తింపు',
          description:
            'దెబ్బతిన్న ఆకు స్పష్టమైన ఫోటోను అప్‌లోడ్ చేసి లక్షణాలు మరియు నివారణ చర్యలు తెలుసుకోండి.',
          action: 'పంట ఆరోగ్యం చూడండి',
        },
        weather: {
          title: 'వాతావరణ సమాచారం',
          description:
            'స్థానిక ఉష్ణోగ్రత, తేమ, వర్షపు హెచ్చరికలు మరియు పిచికారీ సలహాలను చూడండి.',
          action: 'వాతావరణం చూడండి',
        },
        market: {
          title: 'మార్కెట్ ధరలు',
          description:
            'పంట అమ్మకానికి ముందు రాష్ట్రం, జిల్లా మరియు మండి వారీగా అధికారిక ధరలను చూడండి.',
          action: 'మండి ధరలు చూడండి',
        },
      },
    },
    howItWorks: {
      sectionTitle: 'AgriMitra AI ఎలా పనిచేస్తుంది',
      sectionSubtitle: 'మీ పొలం ప్రశ్న నుండి సరైన సలహా వరకు నాలుగు సులభమైన దశలు.',
      steps: [
        {
          number: '01',
          title: 'మీ భాషను ఎంచుకోండి',
          description: 'పై మెనూ నుండి ఎప్పుడైనా మీకు నచ్చిన భాషను ఎంచుకోండి.',
        },
        {
          number: '02',
          title: 'మీ వ్యవసాయ ప్రశ్నను అడగండి',
          description: 'సాధారణ పదాలలో టైప్ చేయండి లేదా మైక్ ద్వారా వివరించండి.',
        },
        {
          number: '03',
          title: 'AI మార్గదర్శకత్వం పొందండి',
          description: 'ICAR మరియు వ్యవసాయ విశ్వవిద్యాలయాల సమాచారం ఆధారంగా దశలవారీ సలహాలు పొందండి.',
        },
        {
          number: '04',
          title: 'సరైన వ్యవసాయ నిర్ణయాలు తీసుకోండి',
          description: 'సమయానికి పంటను కాపాడుకోండి మరియు అవసరమైతే KVK నిపుణులను సంప్రదించండి.',
        },
      ],
    },
    whyAgriMitra: {
      sectionTitle: 'రైతులు AgriMitra AI ను ఎందుకు ఎంచుకుంటారు',
      sectionSubtitle: 'భారతదేశంలోని చిన్న మరియు గ్రామీణ రైతుల కోసం ప్రత్యేకంగా రూపొందించబడింది.',
      reasons: [
        {
          title: 'ప్రాంతీయ భాషా మద్దతు',
          description: 'పంట పేర్లు తప్పుగా మారకుండా మీ భాషలో సులభమైన వినియోగం.',
        },
        {
          title: 'వాయిస్ ఆధారిత సంభాషణ',
          description: 'బ్రౌజర్ మద్దతు ఉన్న ఫోన్లలో మాట్లాడి ప్రశ్నలు అడిగే సదుపాయం.',
        },
        {
          title: 'సరళమైన వ్యవసాయ సలహా',
          description: 'కఠినమైన సాంకేతిక పదాలు లేకుండా స్పష్టమైన దశలవారీ సూచనలు.',
        },
        {
          title: 'నమ్మకమైన సమాచారం',
          description: 'నకిలీ గణాంకాలు లేకుండా అధికారిక వ్యవసాయ వనరులకు ప్రాధాన్యత.',
        },
      ],
      ctaHeading: 'AgriMitra AI ఉపయోగించడానికి సిద్ధంగా ఉన్నారా?',
      ctaSubtext: 'AI వ్యవసాయ సహాయకుడిని తెరవండి లేదా మా సేవలను చూడండి.',
      ctaButton: 'AgriMitra AI ని అడగండి',
    },
    footer: {
      description: 'స్మార్ట్ వ్యవసాయం, సులభమైన పరిష్కారాలు. భారతీయ రైతుల కోసం బహుభాషా వేదిక.',
      servicesHeading: 'సేవలు',
      companyHeading: 'సమాచారం',
      languagesHeading: 'భాషలు',
      dataIntegrityNote:
        'ఖచ్చితత్వానికి కట్టుబడి ఉన్నాము: AgriMitra AI ఎప్పుడూ నకిలీ వాతావరణ లేదా మార్కెట్ ధరలను చూపించదు.',
      copyright: '© 2026 AgriMitra AI. భారతీయ వ్యవసాయం కోసం నిర్మించబడింది.',
    },
    pages: {
      assistant: {
        title: 'AI వ్యవసాయ సహాయకుడు',
        subtitle: 'పంట, నేల, నీటిపారుదల లేదా తెగుళ్ల గురించి మీ భాషలో అడగండి.',
        inputPlaceholder: 'మీ వ్యవసాయ ప్రశ్నను ఇక్కడ టైప్ చేయండి...',
        sendButton: 'ప్రశ్న పంపండి',
        micButton: 'వాయిస్ ఇన్‌పుట్',
        clearButton: 'చాట్ క్లియర్ చేయండి',
        starterHeading: 'రైతులు సాధారణంగా అడిగే ప్రశ్నలు',
        starters: [
          'నా Tomato ఆకులు పసుపు రంగులోకి మారుతున్నాయి. ఏమి చేయాలి?',
          'Paddy నాటిన తర్వాత నీరు పెట్టడానికి సరైన సమయం ఏది?',
          'Tomato ఆకులపై ప్రారంభ బ్లైట్‌ను ఎలా గుర్తించాలి?',
          'గాలి ఎక్కువగా ఉన్నప్పుడు పిచికారీ చేసే ముందు ఏ జాగ్రత్తలు తీసుకోవాలి?',
        ],
        phaseNoticeTitle: 'దశ 1 ఫ్రంట్‌ఎండ్ సిద్ధంగా ఉంది — దశ 2లో లైవ్ సమాధానాలు',
        phaseNoticeBody:
          'దశ 1లో భాషా ఎంపిక మరియు లేఅవుట్ సిద్ధంగా ఉన్నాయి. దశ 2 మరియు 3లో FastAPI + Gemini API ద్వారా లైవ్ సమాధానాలు వస్తాయి.',
      },
      disease: {
        title: 'పంట తెగులు గుర్తింపు',
        subtitle: 'దెబ్బతిన్న ఆకు స్పష్టమైన ఫోటోను ఎంచుకోండి లేదా ఇక్కడ వేయండి.',
        dropTitle: 'ఆకు ఫోటోను ఇక్కడ ఉంచండి',
        dropHint: 'JPG, PNG లేదా WEBP (గరిష్టం 5 MB)',
        browseButton: 'ఫోటో ఎంచుకోండి',
        analyzeButton: 'ఫోటో పరిశీలించండి',
        removeButton: 'ఫోటో తొలగించండి',
        photoTipsTitle: 'మంచి ఫోటో తీయడానికి సూచనలు',
        photoTips: [
          'ఫ్లాష్ లేకుండా సహజ పగటి వెలుతురులో ఫోటో తీయండి.',
          'మచ్చలు స్పష్టంగా కనిపించేలా కెమెరాను కదలకుండా పట్టుకోండి.',
          'దెబ్బతిన్న భాగంతో పాటు పక్కనున్న ఆరోగ్యకరమైన ఆకును కూడా చూపించండి.',
        ],
        phaseNoticeTitle: 'దశ 5లో Gemini Vision విశ్లేషణ కలుస్తుంది',
        phaseNoticeBody:
          'ఫోటో ఎంపిక మరియు ప్రివ్యూ ఇప్పుడు పనిచేస్తాయి. నకిలీ నిర్ధారణలను నివారించడానికి, దశ 5లో బ్యాక్‌ఎండ్ కలిపిన తర్వాత విశ్లేషణ అందుబాటులోకి వస్తుంది.',
      },
      weather: {
        title: 'స్థానిక వాతావరణ సమాచారం',
        subtitle: 'వాతావరణం చూడటానికి మీ రాష్ట్రం మరియు జిల్లాను ఎంచుకోండి.',
        stateLabel: 'రాష్ట్రం',
        districtLabel: 'జిల్లా',
        checkButton: 'వాతావరణం చూడండి',
        phaseNoticeTitle: 'దశ 6లో లైవ్ వాతావరణ API కలుస్తుంది',
        phaseNoticeBody:
          'AgriMitra AI ఎప్పుడూ ఊహాజనిత ఉష్ణోగ్రతలను చూపించదు. దశ 6లో లైవ్ వాతావరణ సేవ కలిపిన తర్వాత డేటా కనిపిస్తుంది.',
        checklistTitle: 'పొలం పనికి ముందు వాతావరణ తనిఖీలు',
        checklistItems: [
          'రాబోయే 4 గంటల్లో వర్షం లేదా బలమైన గాలులు ఉంటే పిచికారీ వాయిదా వేయండి.',
          'నీరు పెట్టే ముందు 5 సెం.మీ లోతులో నేల తేమను తనిఖీ చేయండి.',
          'భారీ వర్షాలకు ముందు పొలం నీటి కాలువలను శుభ్రంగా ఉంచండి.',
        ],
      },
      market: {
        title: 'వ్యవసాయ మార్కెట్ ధరలు',
        subtitle: 'అధికారిక మండి ధరలను చూడటానికి రాష్ట్రం, జిల్లా మరియు పంటను ఎంచుకోండి.',
        stateLabel: 'రాష్ట్రం',
        districtLabel: 'జిల్లా',
        marketLabel: 'మార్కెట్ (మండి)',
        cropLabel: 'పంట పేరు',
        cropPlaceholder: 'పంట వెతకండి (ఉదా: Tomato, Paddy, Onion)',
        searchButton: 'ధరలు వెతకండి',
        phaseNoticeTitle: 'దశ 7లో అధికారిక మండి డేటా కలుస్తుంది',
        phaseNoticeBody:
          'తప్పు సమాచారాన్ని నివారించడానికి నకిలీ మార్కెట్ ధరలు చూపించబడవు. దశ 7లో ప్రభుత్వ డేటాసెట్ నుండి ధరలు అందుతాయి.',
      },
      about: {
        title: 'AgriMitra AI గురించి',
        subtitle: 'ప్రతి రైతుకు వారి స్వంత భాషలో నమ్మకమైన వ్యవసాయ జ్ఞానాన్ని అందించడం.',
      },
      contact: {
        title: 'సంప్రదించండి',
        subtitle: 'సలహాలు లేదా భాగస్వామ్యం కోసం మమ్మల్ని సంప్రదించండి.',
      },
    },
  },
};
