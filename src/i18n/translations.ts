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
      platforms: 'Platforms',
      solutions: 'Services',
      videos: 'Videos',
      mission: 'Mission',
      whyUs: 'Why Us',
      contact: 'Contact',
      cta: 'Get in touch',
    },
    hero: {
      intro: brand.description,
      badge: `Licensed IT-enabled Services & Educational Consultancy · ${brand.primaryMarket}`,
      title: 'Smart digital platforms for',
      titleHighlight: 'education & beyond',
      ctaPrimary: 'Partner with us',
      ctaSecondary: 'Explore services',
      industry: 'Industry',
      primaryMarket: 'Primary market',
      mission: 'Mission',
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
        tagline: 'Trusted matrimonial platform for Bangladeshi Muslims — at home and abroad',
        description:
          'EasyMatch BD is a live, respectful online matrimonial service where members create profiles, discover compatible matches, and connect through structured packages — with verified profiles, privacy-conscious design, and support for families seeking suitable partners.',
        highlights: [
          'Registration & profile-based matching',
          'Verified members and premium packages',
          'Express interest, gallery & contact features',
          'Designed for Bangladeshi Muslim communities worldwide',
        ],
      },
    },
    solutions: {
      eyebrow: 'What we do',
      title: 'Our services & future platforms',
      intro:
        'Beyond our flagship product, NextGen builds custom digital solutions and plans specialised platforms — combining education expertise with modern technology.',
      items: [
        {
          title: 'Custom Software Development',
          description:
            'Tailored web portals, mobile apps and software solutions designed to the precise needs of educational institutions, businesses and social-impact organisations.',
        },
        {
          title: 'Education Consultancy',
          description:
            'Expert guidance on digital transformation, curriculum integration, e-learning strategy and institutional capacity-building for schools, colleges and universities.',
        },
        {
          title: 'Content Development',
          description:
            'High-quality digital learning content — structured courses, exam-focused materials, and multimedia modules aligned with Bangladeshi curricula and professional exams.',
        },
        {
          title: 'Future platforms',
          description:
            'We continue to invest in new digital products for Bangladesh — building on live platforms like All Exam Success and EasyMatch BD, with more specialised services to follow.',
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
      title: 'Ready to work with NextGen?',
      intro:
        'Whether you need a custom platform, education consultancy, content development, or want to partner with us — we would love to hear from you.',
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
      platforms: 'প্ল্যাটফর্ম',
      solutions: 'সেবাসমূহ',
      videos: 'ভিডিও',
      mission: 'লক্ষ্য',
      whyUs: 'কেন আমরা',
      contact: 'যোগাযোগ',
      cta: 'যোগাযোগ করুন',
    },
    hero: {
      intro:
        'নেক্সটজেন লার্নিং টেকনোলজিস একটি লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ প্রতিষ্ঠান যা শিক্ষা, ক্যারিয়ার প্রস্তুতি, সফটওয়্যার সেবা এবং সামাজিক প্রভাব সমাধানের জন্য স্মার্ট ডিজিটাল প্ল্যাটফর্ম তৈরি করে।',
      badge: `লাইসেন্সপ্রাপ্ত আইটি-সক্ষম সেবা ও শিক্ষামূলক পরামর্শ · বাংলাদেশ`,
      title: 'শিক্ষা ও অগ্রগতির জন্য',
      titleHighlight: 'স্মার্ট ডিজিটাল প্ল্যাটফর্ম',
      ctaPrimary: 'আমাদের সাথে অংশীদার হন',
      ctaSecondary: 'সেবা দেখুন',
      industry: 'শিল্প',
      primaryMarket: 'প্রাথমিক বাজার',
      mission: 'লক্ষ্য',
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
        tagline: 'বাংলাদেশি মুসলিমদের জন্য বিশ্বস্ত ও সম্মানজনক বৈবাহিক প্ল্যাটফর্ম — দেশে ও প্রবাসে',
        description:
          'ইজিম্যাচ বিডি একটি লাইভ অনলাইন বৈবাহিক সেবা যেখানে সদস্যরা প্রোফাইল তৈরি করে, উপযুক্ত জোড়া খুঁজে পায় এবং প্যাকেজের মাধ্যমে যোগাযোগ করে — যাচাইকৃত প্রোফাইল, গোপনীয়তা-সচেতন নকশা ও উপযুক্ত জীবনসঙ্গী খোঁজা পরিবারের জন্য সহায়তা সহ।',
        highlights: [
          'নিবন্ধন ও প্রোফাইল ভিত্তিক ম্যাচিং',
          'যাচাইকৃত সদস্য ও প্রিমিয়াম প্যাকেজ',
          'ইন্টারেস্ট, গ্যালারি ও যোগাযোগের সুবিধা',
          'বিশ্বজুড়ে বাংলাদেশি মুসলিম সম্প্রদায়ের জন্য',
        ],
      },
    },
    solutions: {
      eyebrow: 'আমরা যা করি',
      title: 'আমাদের সেবা ও ভবিষ্যৎ প্ল্যাটফর্ম',
      intro:
        'ফ্ল্যাগশিপ পণ্যের বাইরেও নেক্সটজেন কাস্টম ডিজিটাল সমাধান তৈরি করে এবং বিশেষায়িত প্ল্যাটফর্ম পরিকল্পনা করে — শিক্ষা বিশেষজ্ঞতা ও আধুনিক প্রযুক্তির সমন্বয়ে।',
      items: [
        {
          title: 'কাস্টম সফটওয়্যার ডেভেলপমেন্ট',
          description:
            'শিক্ষা প্রতিষ্ঠান, ব্যবসা ও সামাজিক প্রভাব সংগঠনের জন্য তৈরি ওয়েব পোর্টাল, মোবাইল অ্যাপ ও সফটওয়্যার সমাধান।',
        },
        {
          title: 'শিক্ষা পরামর্শ',
          description:
            'ডিজিটাল রূপান্তর, পাঠ্যক্রম একীভূতকরণ, ই-লার্নিং কৌশল ও প্রাতিষ্ঠানিক সক্ষমতা বৃদ্ধিতে বিশেষজ্ঞ নির্দেশনা।',
        },
        {
          title: 'কন্টেন্ট ডেভেলপমেন্ট',
          description:
            'বাংলাদেশি পাঠ্যক্রম ও পেশাদার পরীক্ষার সাথে সামঞ্জস্যপূর্ণ মানসম্পন্ন ডিজিটাল লার্নিং কন্টেন্ট — কোর্স, পরীক্ষামূলক উপকরণ ও মাল্টিমিডিয়া মডিউল।',
        },
        {
          title: 'ভবিষ্যৎ প্ল্যাটফর্ম',
          description:
            'আমরা বাংলাদেশের জন্য নতুন ডিজিটাল পণ্যে বিনিয়োগ চালিয়ে যাই — অল এক্সাম সাকসেস ও ইজিম্যাচ বিডির মতো লাইভ প্ল্যাটফর্মের ওপর ভিত্তি করে আরও বিশেষায়িত সেবা আসছে।',
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
      title: 'নেক্সটজেনের সাথে কাজ করতে প্রস্তুত?',
      intro:
        'আপনার কাস্টম প্ল্যাটফর্ম, শিক্ষা পরামর্শ, কন্টেন্ট ডেভেলপমেন্ট প্রয়োজন হোক বা অংশীদারিত্ব করতে চান — আমরা শুনতে চাই।',
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
