export interface TranslationDictionary {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    home: string;
    assistant: string;
    diseaseDetection: string;
    weather: string;
    marketPrices: string;
    about: string;
    contact: string;
    getStarted: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    kicker: string;
    heading: string;
    subheading: string;
    primaryCta: string;
    secondaryCta: string;
    voiceCta: string;
    voiceUnsupportedNotice: string;
    previewLabel: string;
    previewQuestion: string;
    previewAnswerIntro: string;
    previewSteps: string[];
    previewFollowUp: string;
    previewDisclaimer: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    cards: {
      assistant: {
        title: string;
        description: string;
        action: string;
      };
      disease: {
        title: string;
        description: string;
        action: string;
      };
      weather: {
        title: string;
        description: string;
        action: string;
      };
      market: {
        title: string;
        description: string;
        action: string;
      };
    };
  };
  howItWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  whyAgriMitra: {
    sectionTitle: string;
    sectionSubtitle: string;
    reasons: Array<{
      title: string;
      description: string;
    }>;
    ctaHeading: string;
    ctaSubtext: string;
    ctaButton: string;
  };
  footer: {
    description: string;
    servicesHeading: string;
    companyHeading: string;
    languagesHeading: string;
    dataIntegrityNote: string;
    copyright: string;
  };
  pages: {
    assistant: {
      title: string;
      subtitle: string;
      inputPlaceholder: string;
      sendButton: string;
      micButton: string;
      clearButton: string;
      starterHeading: string;
      starters: string[];
      phaseNoticeTitle: string;
      phaseNoticeBody: string;
    };
    disease: {
      title: string;
      subtitle: string;
      dropTitle: string;
      dropHint: string;
      browseButton: string;
      analyzeButton: string;
      removeButton: string;
      photoTipsTitle: string;
      photoTips: string[];
      phaseNoticeTitle: string;
      phaseNoticeBody: string;
    };
    weather: {
      title: string;
      subtitle: string;
      stateLabel: string;
      districtLabel: string;
      checkButton: string;
      phaseNoticeTitle: string;
      phaseNoticeBody: string;
      checklistTitle: string;
      checklistItems: string[];
    };
    market: {
      title: string;
      subtitle: string;
      stateLabel: string;
      districtLabel: string;
      marketLabel: string;
      cropLabel: string;
      cropPlaceholder: string;
      searchButton: string;
      phaseNoticeTitle: string;
      phaseNoticeBody: string;
    };
    about: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      subtitle: string;
    };
  };
}
