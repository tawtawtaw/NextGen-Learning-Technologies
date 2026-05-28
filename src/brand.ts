/**
 * Edit company facts and contact details here — the site reads from this file.
 */
export const brand = {
  name: 'NextGen Learning Technologies',
  shortName: 'NextGen',
  tagline: 'Learning Technologies',
  industry: 'IT-enabled Services & Educational Consultancy',
  primaryMarket: 'Bangladesh',
  mission:
    'Empowering students and institutions through intelligent learning technology.',
  description:
    'NextGen Learning Technologies is a licensed IT-enabled services and Educational Consultancy company developing smart digital platforms for education, career preparation, software services and social-impact solutions.',

  /**
   * Self-hosted videos — place MP4 files in public/videos/
   * `product`: groups the gallery (all-exam-success | easy-match-bd). Subsection titles come from i18n.
   */
  videos: {
    featured: {
      src: '/videos/NextGen.mp4',
      poster: '',
      title: 'NextGen Learning Technologies — Services Overview',
      subtitle: 'See how we build smart digital platforms for education and beyond.',
    },
    gallery: [
      {
        product: 'all-exam-success' as const,
        src: '/videos/aes-walkthrough.mp4',
        poster: '/videos/posters/aes-walkthrough.jpg',
        title: 'All Exam Success — Platform Walkthrough',
      },
      {
        product: 'all-exam-success' as const,
        src: '/videos/aes-ai-practice.mp4',
        poster: '/videos/posters/aes-ai-practice.jpg',
        title: 'All Exam Success — AI Practice Features',
      },
      {
        product: 'all-exam-success' as const,
        src: '/videos/aes-mobile-app.mp4',
        poster: '/videos/posters/aes-mobile-app.jpg',
        title: 'All Exam Success — Mobile App Demo',
      },
      {
        product: 'easy-match-bd' as const,
        src: '',
        poster: '',
        title: 'EasyMatch BD — How it works',
      },
      {
        product: 'easy-match-bd' as const,
        src: '/videos/em-profile-matching.mp4',
        poster: '',
        title: 'EasyMatch BD — Profiles & matching',
      },
      {
        product: 'easy-match-bd' as const,
        src: '',
        poster: '',
        title: 'EasyMatch BD — Premium packages',
      },
    ],
  },

  /** Live platforms under NextGen — URLs and optional app store links */
  subsidiaries: [
    {
      id: 'all-exam-success',
      name: 'All Exam Success',
      webUrl: 'https://allexamsuccess.com',
      playStoreUrl: '',
      appStoreUrl: '',
      helpline: '',
      facebookUrl: 'https://www.facebook.com/allexamsuccessbd/',
      youtubeUrl: '',
    },
    {
      id: 'easy-match-bd',
      name: 'EasyMatch BD',
      webUrl: 'https://www.easymatchbd.com',
      playStoreUrl: '',
      appStoreUrl: '',
      helpline: '+8801558416067',
      facebookUrl: 'https://www.facebook.com/share/1bJGvuXb5i/',
      youtubeUrl: 'https://www.youtube.com/@easymatchbd-matrimoni',
    },
  ],

  /** Replace with your real contact information */
  contact: {
    email: 'info@nextgenlearning.bd',
    demoEmail: 'demo@nextgenlearning.bd',
    phone: '+8801700000000',
    phoneDisplay: '+880 1700-000000',
    whatsapp: '8801700000000',
    addressLine1: 'Banani, Dhaka 1213',
    addressLine2: 'Bangladesh',
    hours: 'Sun–Thu, 9:00 AM – 6:00 PM (BST)',
  },
} as const
