import { brand } from '../brand'

export type Locale = 'en' | 'bn'

export const translations = {
  en: {
    brand: {
      name: brand.name,
      logoLine1: brand.shortName,
      logoLine2: brand.tagline,
      tagline: brand.tagline,
      industry: brand.industry,
      primaryMarket: brand.primaryMarket,
      mission: brand.mission,
    },
    nav: {
      about: 'About',
      platforms: 'Products',
      solutions: 'Services',
      aes: 'All Exam Success',
      news: 'Updates',
      videos: 'Videos',
      mission: 'Mission',
      whyUs: 'Why Us',
      contact: 'Contact',
      exploreAes: 'Explore All Exam Success',
      cta: "Let's build together",
      leadership: 'Leadership',
      studyAbroad: 'Admission',
    },
    hero: {
      intro:
        'NextGen Learning Technologies develops smart digital platforms, web portals, mobile applications and education consultancy solutions for students, job seekers, institutions and service-based organisations.',
      badge: `Licensed IT-enabled Services & Educational Consultancy · ${brand.primaryMarket}`,
      title: 'AI-Powered Learning, Software and',
      titleHighlight: 'Digital Solutions for Bangladesh',
      ctaPrimary: 'Partner with us',
      ctaSecondary: 'Explore services',
      industry: 'Industry',
      primaryMarket: 'Primary market',
      mission: 'Mission',
    },
    heroSlider: {
      headline: 'NextGen Learning Technologies Bangladesh',
      exploreAes: 'Explore All Exam Success',
      slides: [
        {
          title: 'AI-Powered Learning, Software and Digital Solutions for Bangladesh',
          subtitle:
            'Smart digital platforms for education, career preparation, software services and social-impact solutions.',
          cta: 'Explore Services',
          ctaHref: '#solutions',
        },
        {
          title: 'Prepare Smart. Succeed Faster.',
          subtitle: 'All Exam Success — AI-driven BCS, Bank, Job & University Admission preparation.',
          cta: 'Visit All Exam Success',
          ctaHref: 'https://allexamsuccess.com',
        },
        {
          title: 'Web Portals, Mobile Apps & Custom Software',
          subtitle: 'Custom web portals, admin dashboards, databases and learning platforms for your organisation.',
          cta: 'Request Consultation',
          ctaHref: '#contact',
        },
        {
          title: 'Helping Institutions Build Better Learning Systems',
          subtitle: 'Education consultancy, question banks, content strategy and digital platform design.',
          cta: 'Partner With Us',
          ctaHref: '#partners',
        },
        {
          title: 'EasyMatch BD — Privacy-Focused Matrimonial Platform',
          subtitle: 'An upcoming philanthropic platform — launching after legal, privacy and operational readiness.',
          cta: 'Coming Soon',
          ctaHref: '#subsidiaries',
        },
      ],
    },
    trustBar: {
      label: 'Trust signals',
      items: [
        'Licensed IT-enabled Services & Educational Consultancy',
        'Bangladesh-focused digital solutions',
        'AI-driven learning platforms',
        'Secure, responsible digital service',
        'Official product links — All Exam Success & EasyMatch BD',
      ],
    },
    visionMissionValues: {
      eyebrow: 'Vision, Mission & Values',
      title: 'What drives NextGen',
      visionTitle: 'Vision',
      vision:
        'To become Bangladesh\'s most trusted partner for AI-powered learning, software development and education consultancy — empowering students, institutions and communities through accessible digital innovation.',
      missionTitle: 'Mission',
      mission: brand.mission,
      valuesTitle: 'Our values',
      values: [
        { title: 'Innovation', text: 'Smart technology that solves real education and service challenges.' },
        { title: 'Integrity', text: 'Licensed, accountable and transparent in everything we build.' },
        { title: 'Accessibility', text: 'Affordable, user-friendly platforms for Bangladesh.' },
        { title: 'Quality', text: 'Expert-reviewed content and reliable software standards.' },
        { title: 'Social Impact', text: 'Products that create opportunity and serve communities.' },
      ],
    },
    aesProduct: {
      eyebrow: 'Flagship product',
      title: 'All Exam Success',
      intro:
        'All Exam Success is the flagship product of NextGen Learning Technologies — an AI-driven exam preparation web portal and mobile app for BCS, Bank, Government Job and University Admission candidates in Bangladesh.',
      ctaVisit: 'Visit All Exam Success',
      ctaYoutube: 'YouTube Channel',
      featuresTitle: 'Platform features',
      examCards: {
        bcs: { title: 'BCS', text: 'Comprehensive civil service exam preparation' },
        bank: { title: 'Bank', text: 'Bank recruitment and financial sector exams' },
        job: { title: 'Government Job', text: 'Structured prep for public sector recruitment' },
        admission: { title: 'University Admission', text: 'Admission test practice and model exams' },
      },
      features: [
        { title: 'Smart Question Bank', text: 'Subject-wise and topic-wise MCQ practice' },
        { title: 'Model Tests', text: 'Timed tests for exam readiness' },
        { title: 'AI Explanation', text: 'Clear answer explanations and learning support' },
        { title: 'Current Affairs', text: 'Daily updates for competitive exams' },
        { title: 'Progress Dashboard', text: 'Track performance and weak areas' },
        { title: 'Teacher Review', text: 'Human expert-supported content quality' },
      ],
      seoHidden:
        'EdTech Bangladesh, AI Learning Platform, BCS Preparation App, Software Development Bangladesh, Education Consultancy Bangladesh',
    },
    positioning: {
      eyebrow: 'Who we are',
      title: 'NextGen Learning Technologies',
      description: brand.description,
      company: 'Company',
      industry: 'Industry',
      primaryMarket: 'Primary market',
      mission: 'Mission',
    },
    missionSection: {
      eyebrow: 'Mission',
      supporting: `${brand.name} is a licensed IT-enabled services and Educational Consultancy company. We develop smart digital platforms for education, career preparation, software services, and social-impact solutions — serving students, institutions, and organisations across ${brand.primaryMarket}.`,
    },
    subsidiaries: {
      eyebrow: 'Live platforms',
      title: 'Products & services',
      intro:
        'NextGen operates trusted digital platforms for Bangladesh — from AI-driven exam preparation to a respectful matrimonial service for families at home and abroad.',
      subsidiaryBadge: 'NextGen Learning Technologies',
      flagshipBadge: 'Flagship product',
      liveBadge: 'Live platform',
      webPortal: 'Web portal',
      mobileApp: 'Mobile app',
      helpline: 'Help line',
      facebook: 'Facebook',
      visitFacebook: 'Follow on Facebook',
      youtube: 'YouTube',
      visitYouTube: 'Watch on YouTube',
      visitWeb: 'Visit website',
      getAndroid: 'Get on Google Play',
      getIos: 'Download on App Store',
      comingSoon: 'App links coming soon',
      allExamSuccess: {
        name: 'All Exam Success',
        tagline: 'AI-driven exam preparation for BCS, Bank, Job & University Admission',
        description:
          'All Exam Success is an AI-driven web portal and mobile app that helps Bangladeshi students prepare for BCS, Bank, Job and University Admission examinations — with structured content, AI-powered practice, and detailed progress tracking.',
        highlights: [
          'BCS, Bank, Job & University Admission prep',
          'AI-driven practice & personalised paths',
          'Web portal — study from any device',
          'Mobile app — learn on the go',
        ],
      },
      easyMatchBd: {
        name: 'EasyMatch BD',
        tagline: 'Upcoming privacy-focused matrimonial platform',
        description:
          'EasyMatch BD is an upcoming philanthropic matrimonial service platform in advanced development. Privacy, family involvement, confidentiality and responsible verification are at the centre. The service will launch only after legal, privacy and operational readiness.',
        highlights: [
          'Privacy-first profile and matching design',
          'Family involvement and confidentiality',
          'Responsible verification approach',
          'Launch after full legal and operational readiness',
        ],
      },
    },
    solutions: {
      eyebrow: 'What we do',
      title: 'Our services',
      intro:
        'From flagship products to custom software and education consultancy — NextGen delivers end-to-end digital solutions for Bangladesh.',
      items: [
        {
          title: 'Web Portal Development',
          description: 'Custom web portals, dashboards and public-facing platforms for education, business and social-impact organisations.',
        },
        {
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications for learning, services and customer engagement.',
        },
        {
          title: 'Custom Software',
          description: 'Tailored software, admin systems, databases and integrations built to your requirements.',
        },
        {
          title: 'Education Consultancy',
          description: 'Course planning, digital learning strategy, institutional capacity-building and platform design support.',
        },
        {
          title: 'Content & Question Bank Development',
          description: 'Structured courses, MCQ banks, exam materials and multimedia learning content for Bangladeshi curricula.',
        },
        {
          title: 'Digital Platform Launch Support',
          description: 'End-to-end support to design, build, test and launch your digital product with confidence.',
        },
      ],
      softwareTitle: 'Software development',
      softwareBody:
        'We develop custom web portals, mobile apps, admin dashboards, database systems, learning platforms and service-based software solutions for education, business and social-impact organisations.',
      educationTitle: 'Education consultancy',
      educationBody:
        'We support coaching centres, education entrepreneurs, training institutions and digital learning initiatives with course planning, question bank development, content strategy, resource person engagement and digital platform design.',
      seoHidden:
        'EdTech Bangladesh, AI Learning Platform, BCS Preparation App, Software Development Bangladesh, Education Consultancy Bangladesh',
    },
    industries: {
      eyebrow: 'Industries we serve',
      title: 'Sector-focused solutions',
      intro: 'Purpose-built digital services across education, exam preparation, business and future social platforms.',
      items: [
        {
          title: 'Education & Learning',
          description: 'Digital platforms, LMS-style portals and learning content for schools, colleges and training providers.',
        },
        {
          title: 'Exam Preparation',
          description: 'AI-driven practice, question banks and progress tracking — led by All Exam Success.',
        },
        {
          title: 'Software for SMEs & NGOs',
          description: 'Affordable custom software, portals and admin tools for small businesses and non-profits.',
        },
        {
          title: 'Future Social Platforms',
          description: 'Privacy-conscious, community-serving platforms including EasyMatch BD and upcoming initiatives.',
        },
      ],
    },
    studyAbroad: {
      eyebrow: 'Education consultancy',
      title: 'Study abroad & admission counselling',
      intro:
        'NextGen supports students and families with admission counselling, university pathways, IELTS preparation guidance, scholarship awareness and study abroad planning — alongside our digital learning platforms.',
      highlights: [
        'University admission counselling',
        'IELTS and language preparation guidance',
        'Scholarship and destination planning',
        'Study abroad pathway support',
      ],
      cta: 'Request counselling',
      services: [
        {
          title: 'Admission counselling',
          description: 'Structured guidance for university admission decisions, applications and preparation.',
        },
        {
          title: 'IELTS & scholarships',
          description: 'Support for language requirements, scholarship options and competitive applications.',
        },
        {
          title: 'University connections',
          description: 'Pathway planning with domestic and international university options.',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Our work & pipeline',
      status: { live: 'Live', coming: 'Coming soon', pipeline: 'In pipeline' },
      items: [
        {
          title: 'All Exam Success',
          description: 'Flagship AI exam prep platform — BCS, Bank, Job & Admission.',
          status: 'live' as const,
        },
        {
          title: 'EasyMatch BD',
          description: 'Philanthropic matrimonial platform — advanced development stage.',
          status: 'coming' as const,
        },
        {
          title: 'Education Consultancy',
          description: 'Institutional advisory, content and platform design services.',
          status: 'pipeline' as const,
        },
        {
          title: 'Software Development',
          description: 'Custom portals, apps and systems for clients and partners.',
          status: 'pipeline' as const,
        },
      ],
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What our users will say',
      intro: 'Partner, teacher and student feedback coming soon.',
      placeholder: 'Partner / Teacher / Student feedback coming soon — we are gathering stories as our platforms grow.',
      slots: [
        { role: 'Partner feedback', text: 'Institution and business partner testimonials coming soon.' },
        { role: 'Teacher feedback', text: 'Educator and reviewer testimonials coming soon.' },
        { role: 'Student feedback', text: 'Learner success stories coming soon.' },
      ],
    },
    news: {
      eyebrow: 'Latest updates',
      title: 'News & updates',
      items: [
        {
          tag: 'Product',
          title: 'All Exam Success platform development progressing',
          summary: 'Continued feature rollout for BCS, Bank, Job and Admission preparation modules.',
          date: '2026',
        },
        {
          tag: 'Recruitment',
          title: 'Resource persons and teacher reviewers welcome',
          summary: 'Join our content and review network — apply via our partner form.',
          date: '2026',
        },
        {
          tag: 'EasyMatch BD',
          title: 'EasyMatch BD — pre-launch readiness',
          summary: 'Platform in developed stage; launch planned after legal and privacy compliance.',
          date: '2026',
        },
        {
          tag: 'Current affairs',
          title: 'Sample current affairs content on All Exam Success',
          summary: 'Daily competitive exam updates available for registered learners.',
          date: '2026',
        },
      ],
    },
    partners: {
      eyebrow: 'For partners & teachers',
      title: 'Join our educator network',
      intro:
        'We invite resource persons, content contributors and teacher reviewers to help build quality learning products for Bangladesh.',
      roles: ['Resource person', 'Content contributor', 'Teacher reviewer'],
      cta: 'Apply via Google Form',
    },
    leadership: {
      eyebrow: 'Leadership',
      title: 'Our leadership team',
      intro:
        'NextGen is led by a team combining education expertise, software engineering and social-impact commitment — building trusted platforms for Bangladesh.',
      members: [
        {
          name: 'Mohammed Tareq Aziz',
          role: 'Managing Director',
          bio: 'Leads company strategy, flagship products and partnerships across NextGen Learning Technologies.',
        },
        {
          name: 'Md Khaled Morshed',
          role: 'Director, Technology',
          bio: 'Oversees software architecture, web and mobile platform development, and technical delivery.',
        },
        {
          name: 'Sayeed Mohammed Asaduzzaman',
          role: 'Director, Education & Content',
          bio: 'Guides education consultancy, question bank development and teacher reviewer networks.',
        },
        {
          name: 'Anika Nurin',
          role: 'Lead, Product & Operations',
          bio: 'Drives product planning, user experience and day-to-day platform operations.',
        },
        {
          name: 'Noorsiah Zohrat Asad',
          role: 'Director, Social Impact',
          bio: 'Leads social-impact initiatives including EasyMatch BD and community-focused platform design.',
        },
      ],
    },
    policies: {
      eyebrow: 'Legal',
      title: 'Policies & disclaimer',
      intro: 'Important information before using our services or products. Full legal review in progress.',
      items: [
        {
          id: 'privacy-policy',
          title: 'Privacy Policy',
          body: 'NextGen Learning Technologies respects your privacy. We collect only information necessary to provide our services and products. Full privacy policy will be published before any paid service launch.',
        },
        {
          id: 'terms-of-service',
          title: 'Terms of Service',
          body: 'Use of NextGen websites and platforms is subject to our terms of service. Detailed terms will be published prior to commercial launch of paid features.',
        },
        {
          id: 'refund-policy',
          title: 'Refund Policy',
          body: 'Refund terms for paid products and services will be clearly stated at purchase. Policy details forthcoming with product launch.',
        },
        {
          id: 'ip-policy',
          title: 'Intellectual Property Policy',
          body: 'All content, software, branding and materials on NextGen platforms are protected. Unauthorised reproduction is prohibited.',
        },
        {
          id: 'disclaimer',
          title: 'Disclaimer',
          body: 'Information on this website is for general purposes. Exam preparation content is for educational support and does not guarantee specific results.',
        },
      ],
    },
    contactForm: {
      subjectPrefix: 'Website inquiry',
      nameLabel: 'Your name',
      emailLabel: 'Your email',
      categoryLabel: 'Inquiry type',
      messageLabel: 'Message',
      submit: 'Send inquiry',
      categories: [
        'All Exam Success',
        'Software Development',
        'Education Consultancy',
        'Resource Person',
        'Partnership',
        'EasyMatch BD',
        'Other',
      ],
    },
    footer: {
      tagline: "Let's build smart digital solutions together.",
      company: 'Company',
      products: 'Products',
      policies: 'Policies',
      companyLinks: [
        { label: 'About', href: '#positioning' },
        { label: 'Services', href: '#solutions' },
        { label: 'Mission & Values', href: '#mission' },
        { label: 'Leadership', href: '#leadership' },
        { label: 'Contact', href: '#contact' },
      ],
      productLinks: [
        { label: 'All Exam Success', href: 'https://allexamsuccess.com', external: true },
        { label: 'EasyMatch BD', href: 'https://www.easymatchbd.com', external: true },
        { label: 'Partner application', href: brand.links.partnerForm, external: true },
      ],
      policyLinks: [
        { label: 'Privacy Policy', href: '#privacy-policy' },
        { label: 'Terms of Service', href: '#terms-of-service' },
        { label: 'Refund Policy', href: '#refund-policy' },
        { label: 'IP Policy', href: '#ip-policy' },
        { label: 'Disclaimer', href: '#disclaimer' },
      ],
    },
    seoContent: {
      eyebrow: 'Our expertise',
      title: 'EdTech, software and education services in Bangladesh',
      topics: [
        {
          heading: 'EdTech Bangladesh',
          text: 'Licensed digital learning platforms and education technology solutions built for Bangladeshi students and institutions.',
        },
        {
          heading: 'AI Learning Platform',
          text: 'Intelligent practice, explanations and progress tracking through All Exam Success and custom learning products.',
        },
        {
          heading: 'BCS Preparation App',
          text: 'Structured BCS, bank, job and admission preparation via web portal and mobile app — flagship All Exam Success.',
        },
        {
          heading: 'Software Development Bangladesh',
          text: 'Custom web portals, mobile apps, admin systems and databases for education, business and NGOs.',
        },
        {
          heading: 'Education Consultancy Bangladesh',
          text: 'Course design, question banks, admission counselling, study abroad guidance and institutional digital strategy.',
        },
        {
          heading: 'Digital Platform Launch',
          text: 'End-to-end support to design, build and launch trusted platforms for Bangladesh and beyond.',
        },
      ],
    },
    whyUs: {
      eyebrow: 'Why NextGen',
      title: 'Your partner in digital transformation',
      intro:
        'We combine licensed IT expertise, education domain knowledge, and a social-impact mindset to build products Bangladesh can rely on.',
      items: [
        {
          title: 'Licensed & trusted',
          text: 'A formally licensed IT-enabled services and Educational Consultancy company operating with accountability in Bangladesh.',
        },
        {
          title: 'AI-powered products',
          text: 'Our platforms use intelligent technology to personalise learning, improve outcomes, and scale impact for millions of students.',
        },
        {
          title: 'Full-spectrum services',
          text: 'From exam prep to custom software, education consultancy to content development — one partner across your digital journey.',
        },
        {
          title: 'Social-impact focus',
          text: 'We build products that create real change — career opportunities, better exam results, and platforms that serve communities.',
        },
      ],
    },
    videos: {
      eyebrow: 'Watch & learn',
      title: 'Videos',
      intro: 'Watch our services overview and feature videos — hosted on this site for All Exam Success, EasyMatch BD, and other NextGen platforms.',
      featuredLabel: 'NextGen services overview',
      galleryLabel: 'Feature videos',
      galleryAllExamSuccess: 'All Exam Success',
      galleryEasyMatchBd: 'EasyMatch BD',
    },
    contact: {
      title: "Let's build smart digital solutions together",
      intro:
        'Whether you need All Exam Success, custom software, education consultancy or a partnership — we would love to hear from you.',
      responseTime: 'We respond within 1–2 business days.',
      email: 'Email us',
      phone: 'Call us',
      whatsapp: 'WhatsApp',
      demo: 'Request a demo',
      location: 'Our office',
      hours: brand.contact.hours,
      serving: 'Serving students, institutions and organisations across Bangladesh',
    },
    lang: { switchTo: 'বাংলা', current: 'EN' },
  },
  bn: {
    brand: {
      name: 'নেক্সটজেন লার্নিং টেকনোলজিস',
      logoLine1: 'নেক্সটজেন',
      logoLine2: 'লার্নিং টেকনোলজিস',
      tagline: 'লার্নিং টেকনোলজিস',
      industry: 'আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ',
      primaryMarket: 'বাংলাদেশ',
      mission:
        'বুদ্ধিমান লার্নিং প্রযুক্তির মাধ্যমে শিক্ষার্থী ও প্রতিষ্ঠানকে ক্ষমতায়ন করা।',
    },
    nav: {
      about: 'আমাদের সম্পর্কে',
      platforms: 'পণ্য',
      solutions: 'সেবাসমূহ',
      aes: 'অল এক্সাম সাকসেস',
      news: 'আপডেট',
      videos: 'ভিডিও',
      mission: 'লক্ষ্য',
      whyUs: 'কেন আমরা',
      contact: 'যোগাযোগ',
      exploreAes: 'অল এক্সাম সাকসেস দেখুন',
      cta: 'একসাথে গড়ি',
      leadership: 'নেতৃত্ব',
      studyAbroad: 'ভর্তি পরামর্শ',
    },
    hero: {
      intro:
        'নেক্সটজেন লার্নিং টেকনোলজিস শিক্ষার্থী, চাকরিপ্রার্থী, প্রতিষ্ঠান ও সেবামূলক সংগঠনের জন্য স্মার্ট ডিজিটাল প্ল্যাটফর্ম, ওয়েব পোর্টাল, মোবাইল অ্যাপ ও শিক্ষা পরামর্শ সমাধান তৈরি করে।',
      badge: `লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ · বাংলাদেশ`,
      title: 'এআই-চালিত লার্নিং, সফটওয়্যার ও',
      titleHighlight: 'বাংলাদেশের ডিজিটাল সমাধান',
      ctaPrimary: 'আমাদের সাথে অংশীদার হন',
      ctaSecondary: 'সেবা দেখুন',
      industry: 'শিল্প',
      primaryMarket: 'প্রাথমিক বাজার',
      mission: 'লক্ষ্য',
    },
    heroSlider: {
      headline: 'NextGen Learning Technologies Bangladesh',
      exploreAes: 'সব পরীক্ষার প্রস্তুতির জন্য ভিজিট করুন – All Exam Success',
      slides: [
        {
          title: 'এআই-চালিত লার্নিং, সফটওয়্যার ও বাংলাদেশের ডিজিটাল সমাধান',
          subtitle: 'শিক্ষা, ক্যারিয়ার প্রস্তুতি, সফটওয়্যার সেবা ও সামাজিক প্রভাব সমাধানের স্মার্ট ডিজিটাল প্ল্যাটফর্ম।',
          cta: 'সেবা দেখুন',
          ctaHref: '#solutions',
        },
        {
          title: 'স্মার্ট প্রস্তুতি। দ্রুত সাফল্য।',
          subtitle: 'অল এক্সাম সাকসেস — বিসিএস, ব্যাংক, চাকরি ও ভর্তির এআই-চালিত প্রস্তুতি।',
          cta: 'অল এক্সাম সাকসেস দেখুন',
          ctaHref: 'https://allexamsuccess.com',
        },
        {
          title: 'ওয়েব পোর্টাল, মোবাইল অ্যাপ ও কাস্টম সফটওয়্যার',
          subtitle: 'আপনার প্রতিষ্ঠানের জন্য কাস্টম ওয়েব পোর্টাল, অ্যাডমিন ড্যাশবোর্ড ও লার্নিং প্ল্যাটফর্ম।',
          cta: 'পরামর্শ চান',
          ctaHref: '#contact',
        },
        {
          title: 'উন্নত শিক্ষা ব্যবস্থা গড়তে সহায়তা',
          subtitle: 'শিক্ষা পরামর্শ, প্রশ্ন ব্যাংক, কন্টেন্ট কৌশল ও ডিজিটাল প্ল্যাটফর্ম ডিজাইন।',
          cta: 'অংশীদার হন',
          ctaHref: '#partners',
        },
        {
          title: 'ইজিম্যাচ বিডি — গোপনীয়তা-কেন্দ্রিক বৈবাহিক প্ল্যাটফর্ম',
          subtitle: 'আসন্ন দাতব্য প্ল্যাটফর্ম — আইনি, গোপনীয়তা ও পরিচালনাগত প্রস্তুতির পর চালু হবে।',
          cta: 'শীঘ্রই আসছে',
          ctaHref: '#subsidiaries',
        },
      ],
    },
    trustBar: {
      label: 'বিশ্বাসের সূচক',
      items: [
        'লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ',
        'বাংলাদেশ-কেন্দ্রিক ডিজিটাল সমাধান',
        'এআই-চালিত লার্নিং প্ল্যাটফর্ম',
        'নিরাপদ ও দায়িত্বশীল ডিজিটাল সেবা',
        'অফিসিয়াল পণ্য লিংক — অল এক্সাম সাকসেস ও ইজিম্যাচ বিডি',
      ],
    },
    visionMissionValues: {
      eyebrow: 'দৃষ্টি, লক্ষ্য ও মূল্যবোধ',
      title: 'নেক্সটজেনকে যা পরিচালিত করে',
      visionTitle: 'দৃষ্টি',
      vision:
        'এআই-চালিত লার্নিং, সফটওয়্যার ও শিক্ষা পরামর্শে বাংলাদেশের সবচেয়ে বিশ্বস্ত ডিজিটাল অংশীদার হওয়া — শিক্ষার্থী, প্রতিষ্ঠান ও সম্প্রদায়কে ক্ষমতায়ন করা.',
      missionTitle: 'লক্ষ্য',
      mission: 'বুদ্ধিমান লার্নিং প্রযুক্তির মাধ্যমে শিক্ষার্থী ও প্রতিষ্ঠানকে ক্ষমতায়ন করা।',
      valuesTitle: 'আমাদের মূল্যবোধ',
      values: [
        { title: 'উদ্ভাবন', text: 'বাস্তব শিক্ষা ও সেবা সমস্যার স্মার্ট প্রযুক্তি সমাধান।' },
        { title: 'সততা', text: 'লাইসেন্সপ্রাপ্ত, জবাবদিহিমূলক ও স্বচ্ছ।' },
        { title: 'প্রবেশযোগ্যতা', text: 'বাংলাদেশের জন্য সাশ্রয়ী ও ব্যবহারবান্ধব প্ল্যাটফর্ম।' },
        { title: 'মান', text: 'বিশেষজ্ঞ-পর্যালোচিত কন্টেন্ট ও নির্ভরযোগ্য সফটওয়্যার।' },
        { title: 'সামাজিক প্রভাব', text: 'সুযোগ সৃষ্টি ও সম্প্রদায়ের সেবার পণ্য।' },
      ],
    },
    aesProduct: {
      eyebrow: 'ফ্ল্যাগশিপ পণ্য',
      title: 'অল এক্সাম সাকসেস',
      intro:
        'অল এক্সাম সাকসেস নেক্সটজেন লার্নিং টেকনোলজিসের ফ্ল্যাগশিপ পণ্য — বাংলাদেশে বিসিএস, ব্যাংক, সরকারি চাকরি ও বিশ্ববিদ্যালয় ভর্তি প্রার্থীদের জন্য এআই-চালিত পরীক্ষার প্রস্তুতি ওয়েব পোর্টাল ও মোবাইল অ্যাপ।',
      ctaVisit: 'অল এক্সাম সাকসেস দেখুন',
      ctaYoutube: 'ইউটিউব চ্যানেল',
      featuresTitle: 'প্ল্যাটফর্মের বৈশিষ্ট্য',
      examCards: {
        bcs: { title: 'বিসিএস', text: 'পূর্ণাঙ্গ সিভিল সার্ভিস পরীক্ষার প্রস্তুতি' },
        bank: { title: 'ব্যাংক', text: 'ব্যাংক নিয়োগ ও আর্থিক খাতের পরীক্ষা' },
        job: { title: 'সরকারি চাকরি', text: 'পাবলিক সেক্টর নিয়োগের কাঠামোবদ্ধ প্রস্তুতি' },
        admission: { title: 'বিশ্ববিদ্যালয় ভর্তি', text: 'ভর্তি পরীক্ষার অনুশীলন ও মডেল টেস্ট' },
      },
      features: [
        { title: 'স্মার্ট প্রশ্ন ব্যাংক', text: 'বিষয় ও টপিকভিত্তিক MCQ অনুশীলন' },
        { title: 'মডেল টেস্ট', text: 'সময়-bound পরীক্ষার প্রস্তুতি' },
        { title: 'এআই ব্যাখ্যা', text: 'উত্তরের স্পষ্ট ব্যাখ্যা ও শেখার সহায়তা' },
        { title: 'কারেন্ট অ্যাফেয়ার্স', text: 'প্রতিযোগিতামূলক পরীক্ষার দৈনিক আপডেট' },
        { title: 'অগ্রগতি ড্যাশবোর্ড', text: 'পারফরম্যান্স ও দুর্বল ক্ষেত্র ট্র্যাক করুন' },
        { title: 'শিক্ষক পর্যালোচনা', text: 'বিশেষজ্ঞ-সমর্থিত কন্টেন্ট মান' },
      ],
      seoHidden:
        'EdTech Bangladesh, AI Learning Platform, BCS Preparation App, Software Development Bangladesh, Education Consultancy Bangladesh',
    },
    positioning: {
      eyebrow: 'আমরা কারা',
      title: 'নেক্সটজেন লার্নিং টেকনোলজিস',
      description:
        'নেক্সটজেন লার্নিং টেকনোলজিস একটি লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ প্রতিষ্ঠান যা শিক্ষা, ক্যারিয়ার প্রস্তুতি, সফটওয়্যার সেবা ও সামাজিক প্রভাব সমাধানের জন্য স্মার্ট ডিজিটাল প্ল্যাটফর্ম তৈরি করে।',
      company: 'কোম্পানি',
      industry: 'শিল্প',
      primaryMarket: 'প্রাথমিক বাজার',
      mission: 'লক্ষ্য',
    },
    missionSection: {
      eyebrow: 'লক্ষ্য',
      supporting:
        'নেক্সটজেন লার্নিং টেকনোলজিস একটি লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ প্রতিষ্ঠান। আমরা শিক্ষা, ক্যারিয়ার প্রস্তুতি, সফটওয়্যার সেবা ও সামাজিক প্রভাব সমাধানের জন্য স্মার্ট ডিজিটাল প্ল্যাটফর্ম তৈরি করি — বাংলাদেশ জুড়ে শিক্ষার্থী, প্রতিষ্ঠান ও সংগঠনের সেবায়।',
    },
    subsidiaries: {
      eyebrow: 'লাইভ প্ল্যাটফর্ম',
      title: 'পণ্য ও সেবা',
      intro:
        'নেক্সটজেন বাংলাদেশের জন্য বিশ্বস্ত ডিজিটাল প্ল্যাটফর্ম পরিচালনা করে — এআই-চালিত পরীক্ষার প্রস্তুতি থেকে শুরু করে দেশে ও প্রবাসে পরিবারের জন্য সম্মানজনক বৈবাহিক সেবা পর্যন্ত।',
      subsidiaryBadge: 'নেক্সটজেন লার্নিং টেকনোলজিস',
      flagshipBadge: 'ফ্ল্যাগশিপ পণ্য',
      liveBadge: 'লাইভ প্ল্যাটফর্ম',
      webPortal: 'ওয়েব পোর্টাল',
      mobileApp: 'মোবাইল অ্যাপ',
      helpline: 'হেল্প লাইন',
      facebook: 'ফেসবুক',
      visitFacebook: 'ফেসবুকে অনুসরণ করুন',
      youtube: 'ইউটিউব',
      visitYouTube: 'ইউটিউবে দেখুন',
      visitWeb: 'ওয়েবসাইট দেখুন',
      getAndroid: 'গুগল প্লে থেকে ডাউনলোড',
      getIos: 'অ্যাপ স্টোরে ডাউনলোড',
      comingSoon: 'অ্যাপ লিংক শীঘ্রই যোগ করা হবে',
      allExamSuccess: {
        name: 'অল এক্সাম সাকসেস',
        tagline: 'বিসিএস, ব্যাংক, চাকরি ও বিশ্ববিদ্যালয় ভর্তির জন্য এআই-চালিত প্রস্তুতি',
        description:
          'অল এক্সাম সাকসেস একটি এআই-চালিত ওয়েব পোর্টাল ও মোবাইল অ্যাপ যা বাংলাদেশি শিক্ষার্থীদের বিসিএস, ব্যাংক, চাকরি ও বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্রস্তুতিতে কাঠামোবদ্ধ কন্টেন্ট, এআই-চালিত অনুশীলন ও বিস্তারিত অগ্রগতি ট্র্যাকিংয়ে সহায়তা করে।',
        highlights: [
          'বিসিএস, ব্যাংক, চাকরি ও ভর্তি পরীক্ষার প্রস্তুতি',
          'এআই-চালিত অনুশীলন ও ব্যক্তিগতকৃত পথ',
          'ওয়েব পোর্টাল — যেকোনো ডিভাইস থেকে পড়াশোনা',
          'মোবাইল অ্যাপ — চলতে চলতে শিখুন',
        ],
      },
      easyMatchBd: {
        name: 'ইজিম্যাচ বিডি',
        tagline: 'আসন্ন গোপনীয়তা-কেন্দ্রিক বৈবাহিক প্ল্যাটফর্ম',
        description:
          'ইজিম্যাচ বিডি একটি আসন্ন দাতব্য বৈবাহিক সেবা প্ল্যাটফর্ম — উন্নত পর্যায়ে। গোপনীয়তা, পরিবারের সম্পৃক্ততা, গোপনীয়তা রক্ষা ও দায়িত্বশীল যাচাইকরণ কেন্দ্রে। আইনি, গোপনীয়তা ও পরিচালনাগত প্রস্তুতির পর চালু হবে।',
        highlights: [
          'গোপনীয়তা-প্রথম প্রোফাইল ও ম্যাচিং',
          'পরিবারের সম্পৃক্ততা ও গোপনীয়তা',
          'দায়িত্বশীল যাচাইকরণ',
          'পূর্ণ আইনি ও পরিচালনাগত প্রস্তুতির পর চালু',
        ],
      },
    },
    solutions: {
      eyebrow: 'আমরা যা করি',
      title: 'আমাদের সেবা',
      intro: 'ফ্ল্যাগশিপ পণ্য থেকে কাস্টম সফটওয়্যার ও শিক্ষা পরামর্শ — বাংলাদেশের জন্য সম্পূর্ণ ডিজিটাল সমাধান।',
      items: [
        { title: 'ওয়েব পোর্টাল ডেভেলপমেন্ট', description: 'শিক্ষা, ব্যবসা ও সামাজিক প্রভাব সংগঠনের জন্য কাস্টম ওয়েব পোর্টাল ও ড্যাশবোর্ড।' },
        { title: 'মোবাইল অ্যাপ ডেভেলপমেন্ট', description: 'লার্নিং, সেবা ও গ্রাহক যোগাযোগের জন্য মোবাইল অ্যাপ্লিকেশন।' },
        { title: 'কাস্টম সফটওয়্যার', description: 'আপনার প্রয়োজন অনুযায়ী তৈরি সফটওয়্যার, অ্যাডমিন সিস্টেম ও ডাটাবেস।' },
        { title: 'শিক্ষা পরামর্শ', description: 'কোর্স পরিকল্পনা, ডিজিটাল লার্নিং কৌশল ও প্রতিষ্ঠানগত সক্ষমতা বৃদ্ধি।' },
        { title: 'কন্টেন্ট ও প্রশ্ন ব্যাংক', description: 'কোর্স, MCQ ব্যাংক, পরীক্ষামূলক উপকরণ ও মাল্টিমিডিয়া কন্টেন্ট।' },
        { title: 'ডিজিটাল প্ল্যাটফর্ম লঞ্চ সাপোর্ট', description: 'ডিজাইন, তৈরি, পরীক্ষা ও চালু — সম্পূর্ণ প্ল্যাটফর্ম লঞ্চ সহায়তা।' },
      ],
      softwareTitle: 'সফটওয়্যার ডেভেলপমেন্ট',
      softwareBody:
        'আমরা শিক্ষা, ব্যবসা ও সামাজিক প্রভাব সংগঠনের জন্য কাস্টম ওয়েব পোর্টাল, মোবাইল অ্যাপ, অ্যাডমিন ড্যাশবোর্ড, ডাটাবেস সিস্টেম ও লার্নিং প্ল্যাটফর্ম তৈরি করি।',
      educationTitle: 'শিক্ষা পরামর্শ',
      educationBody:
        'আমরা কোচিং সেন্টার, শিক্ষা উদ্যোক্তা, প্রশিক্ষণ প্রতিষ্ঠান ও ডিজিটাল লার্নিং উদ্যোগকে কোর্স পরিকল্পনা, প্রশ্ন ব্যাংক, কন্টেন্ট কৌশল, রিসোর্স পারসন ও প্ল্যাটফর্ম ডিজাইনে সহায়তা করি।',
      seoHidden:
        'EdTech Bangladesh, AI Learning Platform, BCS Preparation App, Software Development Bangladesh, Education Consultancy Bangladesh',
    },
    industries: {
      eyebrow: 'আমরা যে খাতে কাজ করি',
      title: 'খাতভিত্তিক সমাধান',
      intro: 'শিক্ষা, পরীক্ষার প্রস্তুতি, ব্যবসা ও ভবিষ্যৎ সামাজিক প্ল্যাটফর্মে বিশেষায়িত সেবা।',
      items: [
        { title: 'শিক্ষা ও লার্নিং', description: 'স্কুল, কলেজ ও প্রশিক্ষণ প্রতিষ্ঠানের জন্য ডিজিটাল প্ল্যাটফর্ম ও কন্টেন্ট।' },
        { title: 'পরীক্ষার প্রস্তুতি', description: 'এআই-চালিত অনুশীলন ও প্রশ্ন ব্যাংক — অল এক্সাম সাকসেসের নেতৃত্বে।' },
        { title: 'এসএমই ও এনজিওর সফটওয়্যার', description: 'ছোট ব্যবসা ও অলাভজনক সংস্থার জন্য সাশ্রয়ী কাস্টম সফটওয়্যার।' },
        { title: 'ভবিষ্যৎ সামাজিক প্ল্যাটফর্ম', description: 'ইজিম্যাচ বিডি সহ গোপনীয়তা-সচেতন, সম্প্রদায়-সেবার প্ল্যাটফর্ম।' },
      ],
    },
    studyAbroad: {
      eyebrow: 'শিক্ষা পরামর্শ',
      title: 'বিদেশে পড়াশোনা ও ভর্তি পরামর্শ',
      intro:
        'নেক্সটজেন শিক্ষার্থী ও পরিবারকে ভর্তি পরামর্শ, বিশ্ববিদ্যালয় পথ, IELTS প্রস্তুতি, বৃত্তি সচেতনতা ও বিদেশে পড়াশোনার পরিকল্পনায় সহায়তা করে — ডিজিটাল লার্নিং প্ল্যাটফর্মের পাশাপাশি।',
      highlights: [
        'বিশ্ববিদ্যালয় ভর্তি পরামর্শ',
        'IELTS ও ভাষা প্রস্তুতি নির্দেশনা',
        'বৃত্তি ও গন্তব্য পরিকল্পনা',
        'বিদেশে পড়াশোনার পথ সহায়তা',
      ],
      cta: 'পরামর্শ চান',
      services: [
        {
          title: 'ভর্তি পরামর্শ',
          description: 'বিশ্ববিদ্যালয় ভর্তি সিদ্ধান্ত, আবেদন ও প্রস্তুতির কাঠামোবদ্ধ নির্দেশনা।',
        },
        {
          title: 'IELTS ও বৃত্তি',
          description: 'ভাষাগত প্রয়োজনীয়তা, বৃত্তি সুযোগ ও প্রতিযোগিতামূলক আবেদনে সহায়তা।',
        },
        {
          title: 'বিশ্ববিদ্যালয় সংযোগ',
          description: 'দেশে ও বিদেশে বিশ্ববিদ্যালয় বিকল্প নিয়ে পথ পরিকল্পনা।',
        },
      ],
    },
    portfolio: {
      eyebrow: 'পোর্টফোলিও',
      title: 'আমাদের কাজ ও পরিকল্পনা',
      status: { live: 'লাইভ', coming: 'শীঘ্রই', pipeline: 'পipeline-এ' },
      items: [
        { title: 'অল এক্সাম সাকসেস', description: 'ফ্ল্যাগশিপ এআই পরীক্ষার প্রস্তুতি প্ল্যাটফর্ম।', status: 'live' as const },
        { title: 'ইজিম্যাচ বিডি', description: 'দাতব্য বৈবাহিক প্ল্যাটফর্ম — উন্নত পর্যায়ে।', status: 'coming' as const },
        { title: 'শিক্ষা পরামর্শ', description: 'প্রতিষ্ঠানগত পরামর্শ, কন্টেন্ট ও প্ল্যাটফর্ম ডিজাইন।', status: 'pipeline' as const },
        { title: 'সফটওয়্যার ডেভেলপমেন্ট', description: 'ক্লায়েন্ট ও অংশীদারদের জন্য কাস্টম পোর্টাল ও অ্যাপ।', status: 'pipeline' as const },
      ],
    },
    testimonials: {
      eyebrow: 'প্রশংসাপত্র',
      title: 'আমাদের ব্যবহারকারীরা যা বলবেন',
      intro: 'অংশীদার, শিক্ষক ও শিক্ষার্থীর মতামত শীঘ্রই আসছে।',
      placeholder: 'অংশীদার / শিক্ষক / শিক্ষার্থীর মতামত শীঘ্রই — প্ল্যাটফর্ম বাড়ার সাথে আমরা গল্প সংগ্রহ করছি।',
      slots: [
        { role: 'অংশীদারের মতামত', text: 'প্রতিষ্ঠান ও ব্যবসায়িক অংশীদারদের প্রশংসাপত্র শীঘ্রই।' },
        { role: 'শিক্ষকের মতামত', text: 'শিক্ষক ও পর্যালোচকদের মতামত শীঘ্রই।' },
        { role: 'শিক্ষার্থীর মতামত', text: 'শিক্ষার্থীর সাফল্যের গল্প শীঘ্রই।' },
      ],
    },
    news: {
      eyebrow: 'সর্বশেষ আপডেট',
      title: 'খবর ও আপডেট',
      items: [
        { tag: 'পণ্য', title: 'অল এক্সাম সাকসেস প্ল্যাটফর্ম উন্নয়ন চলছে', summary: 'বিসিএস, ব্যাংক, চাকরি ও ভর্তি মডিউলে নতুন ফিচার।', date: '২০২৬' },
        { tag: 'নিয়োগ', title: 'রিসোর্স পারসন ও শিক্ষক পর্যালোচক প্রয়োজন', summary: 'আমাদের পার্টনার ফর্মের মাধ্যমে আবেদন করুন।', date: '২০২৬' },
        { tag: 'ইজিম্যাচ বিডি', title: 'ইজিম্যাচ বিডি — প্রি-লঞ্চ প্রস্তুতি', summary: 'প্ল্যাটফর্ম উন্নত পর্যায়ে; আইনি ও গোপনীয়তা compliance-এর পর চালু।', date: '২০২৬' },
        { tag: 'কারেন্ট অ্যাফেয়ার্স', title: 'অল এক্সাম সাকসেসে নমুনা কারেন্ট অ্যাফেয়ার্স', summary: 'নিবন্ধিত শিক্ষার্থীদের জন্য দৈনিক প্রতিযোগিতামূলক আপডেট।', date: '২০২৬' },
      ],
    },
    partners: {
      eyebrow: 'অংশীদার ও শিক্ষকদের জন্য',
      title: 'আমাদের শিক্ষক নেটওয়ার্কে যোগ দিন',
      intro: 'রিসোর্স পারসন, কন্টেন্ট কন্ট্রিবিউটর ও শিক্ষক পর্যালোচকদের আমন্ত্রণ জানাই।',
      roles: ['রিসোর্স পারসন', 'কন্টেন্ট কন্ট্রিবিউটর', 'শিক্ষক পর্যালোচক'],
      cta: 'Google Form-এ আবেদন করুন',
    },
    leadership: {
      eyebrow: 'নেতৃত্ব',
      title: 'আমাদের নেতৃত্ব দল',
      intro:
        'শিক্ষা বিশেষজ্ঞতা, সফটওয়্যার প্রকৌশল ও সামাজিক প্রভাবের প্রতিশ্রুতি নিয়ে নেক্সটজেনের নেতৃত্ব — বাংলাদেশের জন্য বিশ্বস্ত প্ল্যাটফর্ম গড়ে তোলে।',
      members: [
        {
          name: 'Mohammed Tareq Aziz',
          role: 'ম্যানেজিং ডিরেক্টর',
          bio: 'কোম্পানির কৌশল, ফ্ল্যাগশিপ পণ্য ও অংশীদারিত্বের নেতৃত্ব দেন।',
        },
        {
          name: 'Md Khaled Morshed',
          role: 'ডিরেক্টর, প্রযুক্তি',
          bio: 'সফটওয়্যার আর্কিটেকচার, ওয়েব ও মোবাইল প্ল্যাটফর্ম ডেভেলপমেন্ট ও technical delivery তদারক করেন।',
        },
        {
          name: 'Sayeed Mohammed Asaduzzaman',
          role: 'ডিরেক্টর, শিক্ষা ও কন্টেন্ট',
          bio: 'শিক্ষা পরামর্শ, প্রশ্ন ব্যাংক ও শিক্ষক পর্যালোচক নেটওয়ার্ক পরিচালনা করেন।',
        },
        {
          name: 'Anika Nurin',
          role: 'লিড, পণ্য ও পরিচালনা',
          bio: 'পণ্য পরিকল্পনা, ব্যবহারকারী অভিজ্ঞতা ও দৈনন্দিন প্ল্যাটফর্ম পরিচালনায় নেতৃত্ব দেন।',
        },
        {
          name: 'Noorsiah Zohrat Asad',
          role: 'ডিরেক্টর, সামাজিক প্রভাব',
          bio: 'ইজিম্যাচ বিডি সহ সামাজিক প্রভাবমূলক উদ্যোগ ও কমিউনিটি-কেন্দ্রিক প্ল্যাটফর্ম ডিজাইনে নেতৃত্ব দেন।',
        },
      ],
    },
    policies: {
      eyebrow: 'আইনি',
      title: 'নীতিমালা ও দাবিত্যাগ',
      intro: 'আমাদের সেবা ব্যবহারের আগে গুরুত্বপূর্ণ তথ্য। সম্পূর্ণ আইনি পর্যালোচনা চলছে।',
      items: [
        { id: 'privacy-policy', title: 'গোপনীয়তা নীতি', body: 'নেক্সটজেন লার্নিং টেকনোলজিস আপনার গোপনীয়তাকে সম্মান করে। পaid সেবা চালু হওয়ার আগে সম্পূর্ণ নীতি প্রকাশ করা হবে।' },
        { id: 'terms-of-service', title: 'সেবার শর্তাবলী', body: 'আমাদের ওয়েবসাইট ও প্ল্যাটফর্ম ব্যবহার আমাদের শর্তাবলীর অধীন। বিস্তারিত শীঘ্রই প্রকাশিত হবে।' },
        { id: 'refund-policy', title: 'রিফান্ড নীতি', body: 'paid পণ্য ও সেবার রিফান্ড শর্ত ক্রয়ের সময় স্পষ্টভাবে জানানো হবে।' },
        { id: 'ip-policy', title: 'মেধাস্বত্ব নীতি', body: 'নেক্সটজেন প্ল্যাটফর্মের সকল কন্টেন্ট, সফটওয়্যার ও ব্র্যান্ড সুরক্ষিত।' },
        { id: 'disclaimer', title: 'দাবিত্যাগ', body: 'এই ওয়েবসাইটের তথ্য সাধারণ উদ্দেশ্যে। পরীক্ষার প্রস্তুতি কন্টেন্ট শিক্ষামূলক সহায়তা — নির্দিষ্ট ফলাফলের গ্যারান্টি নয়।' },
      ],
    },
    contactForm: {
      subjectPrefix: 'ওয়েবসাইট অনুসন্ধান',
      nameLabel: 'আপনার নাম',
      emailLabel: 'আপনার ইমেইল',
      categoryLabel: 'অনুসন্ধানের ধরন',
      messageLabel: 'বার্তা',
      submit: 'অনুসন্ধান পাঠান',
      categories: [
        'অল এক্সাম সাকসেস',
        'সফটওয়্যার ডেভেলপমেন্ট',
        'শিক্ষা পরামর্শ',
        'রিসোর্স পারসন',
        'অংশীদারিত্ব',
        'ইজিম্যাচ বিডি',
        'অন্যান্য',
      ],
    },
    footer: {
      tagline: 'একসাথে স্মার্ট ডিজিটাল সমাধান গড়ি।',
      company: 'কোম্পানি',
      products: 'পণ্য',
      policies: 'নীতিমালা',
      companyLinks: [
        { label: 'আমাদের সম্পর্কে', href: '#positioning' },
        { label: 'সেবা', href: '#solutions' },
        { label: 'লক্ষ্য ও মূল্যবোধ', href: '#mission' },
        { label: 'নেতৃত্ব', href: '#leadership' },
        { label: 'যোগাযোগ', href: '#contact' },
      ],
      productLinks: [
        { label: 'অল এক্সাম সাকসেস', href: 'https://allexamsuccess.com', external: true },
        { label: 'ইজিম্যাচ বিডি', href: 'https://www.easymatchbd.com', external: true },
        { label: 'পার্টনার আবেদন', href: brand.links.partnerForm, external: true },
      ],
      policyLinks: [
        { label: 'গোপনীয়তা নীতি', href: '#privacy-policy' },
        { label: 'সেবার শর্তাবলী', href: '#terms-of-service' },
        { label: 'রিফান্ড নীতি', href: '#refund-policy' },
        { label: 'মেধাস্বত্ব নীতি', href: '#ip-policy' },
        { label: 'দাবিত্যাগ', href: '#disclaimer' },
      ],
    },
    seoContent: {
      eyebrow: 'আমাদের দক্ষতা',
      title: 'বাংলাদেশে EdTech, সফটওয়্যার ও শিক্ষা সেবা',
      topics: [
        {
          heading: 'EdTech Bangladesh',
          text: 'বাংলাদেশi শিক্ষার্থী ও প্রতিষ্ঠানের জন্য লাইসেন্সপ্রাপ্ত ডিজিটাল লার্নিং ও EdTech সমাধান।',
        },
        {
          heading: 'AI Learning Platform',
          text: 'অল এক্সাম সাকসেস ও কাস্টম পণ্যের মাধ্যমে বুদ্ধিমান অনুশীলন, ব্যাখ্যা ও অগ্রগতি ট্র্যাকিং।',
        },
        {
          heading: 'BCS Preparation App',
          text: 'ওয়েব পোর্টাল ও মোবাইল অ্যাপে বিসিএস, ব্যাংক, চাকরি ও ভর্তির কাঠামোবদ্ধ প্রস্তুতি।',
        },
        {
          heading: 'Software Development Bangladesh',
          text: 'শিক্ষা, ব্যবসা ও এনজিওর জন্য কাস্টম ওয়েব পোর্টাল, মোবাইল অ্যাপ ও ডাটাবেস।',
        },
        {
          heading: 'Education Consultancy Bangladesh',
          text: 'কোর্স ডিজাইন, প্রশ্ন ব্যাংক, ভর্তি পরামর্শ, বিদেশে পড়াশোনা ও প্রতিষ্ঠানগত ডিজিটাল কৌশল।',
        },
        {
          heading: 'Digital Platform Launch',
          text: 'বাংলাদেশ ও এর বাইরে বিশ্বস্ত প্ল্যাটফর্ম ডিজাইন, তৈরি ও চালু করার end-to-end সহায়তা।',
        },
      ],
    },
    whyUs: {
      eyebrow: 'কেন নেক্সটজেন',
      title: 'ডিজিটাল রূপান্তরে আপনার অংশীদার',
      intro:
        'আমরা লাইসেন্সপ্রাপ্ত আইটি দক্ষতা, শিক্ষা ডোমেইন জ্ঞান ও সামাজিক প্রভাবের মানসিকতা একত্র করে বাংলাদেশের জন্য বিশ্বাসযোগ্য পণ্য তৈরি করি।',
      items: [
        {
          title: 'লাইসেন্সপ্রাপ্ত ও বিশ্বস্ত',
          text: 'বাংলাদেশে জবাবদিহিতার সাথে পরিচালিত একটি আনুষ্ঠানিকভাবে লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ প্রতিষ্ঠান।',
        },
        {
          title: 'এআই-চালিত পণ্য',
          text: 'আমাদের প্ল্যাটফর্ম বুদ্ধিমান প্রযুক্তি ব্যবহার করে শেখাকে ব্যক্তিগতকৃত করে, ফলাফল উন্নত করে এবং লক্ষ লক্ষ শিক্ষার্থীর জন্য প্রভাব বৃদ্ধি করে।',
        },
        {
          title: 'পূর্ণ পরিসরের সেবা',
          text: 'পরীক্ষার প্রস্তুতি থেকে কাস্টম সফটওয়্যার, শিক্ষা পরামর্শ থেকে কন্টেন্ট ডেভেলপমেন্ট — ডিজিটাল যাত্রায় একটি অংশীদার।',
        },
        {
          title: 'সামাজিক প্রভাব কেন্দ্রিক',
          text: 'আমরা এমন পণ্য তৈরি করি যা বাস্তব পরিবর্তন আনে — ক্যারিয়ারের সুযোগ, ভালো পরীক্ষার ফলাফল ও সম্প্রদায়ের সেবার প্ল্যাটফর্ম।',
        },
      ],
    },
    videos: {
      eyebrow: 'দেখুন ও শিখুন',
      title: 'ভিডিও',
      intro: 'আমাদের সেবার ওভারভিউ ও ফিচার ভিডিও দেখুন — অল এক্সাম সাকসেস, ইজিম্যাচ বিডি ও অন্যান্য নেক্সটজেন প্ল্যাটফর্মের জন্য সরাসরি এই সাইটে হোস্ট করা।',
      featuredLabel: 'নেক্সটজেন সেবার ওভারভিউ',
      galleryLabel: 'ফিচার ভিডিও',
      galleryAllExamSuccess: 'অল এক্সাম সাকসেস',
      galleryEasyMatchBd: 'ইজিম্যাচ বিডি',
    },
    contact: {
      title: 'একসাথে স্মার্ট ডিজিটাল সমাধান গড়ি',
      intro:
        'অল এক্সাম সাকসেস, কাস্টম সফটওয়্যার, শিক্ষা পরামর্শ বা অংশীদারিত্ব — আমরা শুনতে চাই।',
      responseTime: 'আমরা ১–২ কর্মদিবসের মধ্যে উত্তর দিই।',
      email: 'ইমেইল করুন',
      phone: 'ফোন করুন',
      whatsapp: 'হোয়াটসঅ্যাপ',
      demo: 'ডেমো অনুরোধ করুন',
      location: 'অফিস',
      hours: brand.contact.hours,
      serving: 'বাংলাদেশ জুড়ে শিক্ষার্থী, প্রতিষ্ঠান ও সংগঠনের সেবায়',
    },
    lang: { switchTo: 'English', current: 'বাং' },
  },
} as const

export type Translation = (typeof translations)[Locale]
