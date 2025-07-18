import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    vision: 'Our Vision',
    history: 'Company History',
    services: 'Our Services',
    portfolio: 'Portfolio',
    whyUs: 'Why Choose Us',
    contact: 'Contact Us',
    
    // Hero Section
    heroTitle: 'MG Company',
    heroSubtitle: 'Mohammed Alquraini for Contracting and Trading',
    heroDescription: 'Your trusted partner in construction and trading with over 3 years of excellence in delivering quality projects.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Statistics
    completionRate: 'Completion Rate',
    yearsExperience: 'Years Experience',
    happyClients: 'Happy Clients',
    projectsCompleted: 'Projects Completed',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive construction and trading solutions',
    
    commercialTitle: 'Commercial Construction',
    commercialDesc: 'Professional commercial building construction and renovation services.',
    
    residentialTitle: 'Residential Projects',
    residentialDesc: 'Quality residential construction and home improvement services.',
    
    renovationTitle: 'Renovation & Remodeling',
    renovationDesc: 'Complete renovation and remodeling solutions for all property types.',
    
    tradingTitle: 'Trading Services',
    tradingDesc: 'Import and export trading services for construction materials and equipment.',
    
    // About
    aboutTitle: 'About MG Company',
    aboutDescription: 'MG Company (Mohammed Alquraini for Contracting and Trading) is a leading construction and trading company committed to excellence in every project we undertake.',
    
    // Vision
    visionTitle: 'Our Vision',
    visionDescription: 'To be the leading construction and trading company in the region, known for quality, reliability, and innovation.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Get in touch with us for your construction and trading needs.',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    workingHours: 'Working Hours',
    
    // Footer
    footerDescription: 'Your trusted partner in construction and trading excellence.',
    allRightsReserved: 'All rights reserved.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'من نحن',
    vision: 'رؤيتنا',
    history: 'تاريخ الشركة',
    services: 'خدماتنا',
    portfolio: 'أعمالنا',
    whyUs: 'لماذا تختارنا',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'شركة MG',
    heroSubtitle: 'محمد القريني للمقاولات والتجارة',
    heroDescription: 'شريكك الموثوق في البناء والتجارة مع أكثر من 3 سنوات من التميز في تقديم المشاريع عالية الجودة.',
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    
    // Statistics
    completionRate: 'معدل الإنجاز',
    yearsExperience: 'سنوات الخبرة',
    happyClients: 'عملاء راضون',
    projectsCompleted: 'مشاريع مكتملة',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول شاملة للبناء والتجارة',
    
    commercialTitle: 'البناء التجاري',
    commercialDesc: 'خدمات البناء والتجديد التجاري المهنية.',
    
    residentialTitle: 'المشاريع السكنية',
    residentialDesc: 'خدمات البناء السكني عالية الجودة وتحسين المنازل.',
    
    renovationTitle: 'التجديد والإصلاح',
    renovationDesc: 'حلول التجديد والإصلاح الشاملة لجميع أنواع العقارات.',
    
    tradingTitle: 'خدمات التجارة',
    tradingDesc: 'خدمات الاستيراد والتصدير لمواد ومعدات البناء.',
    
    // About
    aboutTitle: 'حول شركة MG',
    aboutDescription: 'شركة MG (محمد القريني للمقاولات والتجارة) هي شركة رائدة في البناء والتجارة ملتزمة بالتميز في كل مشروع نقوم به.',
    
    // Vision
    visionTitle: 'رؤيتنا',
    visionDescription: 'أن نكون الشركة الرائدة في البناء والتجارة في المنطقة، معروفة بالجودة والموثوقية والابتكار.',
    
    // Contact
    contactTitle: 'اتصل بنا',
    contactDescription: 'تواصل معنا لاحتياجاتك في البناء والتجارة.',
    phone: 'الهاتف',
    email: 'البريد الإلكتروني',
    address: 'العنوان',
    workingHours: 'ساعات العمل',
    
    // Footer
    footerDescription: 'شريكك الموثوق في تميز البناء والتجارة.',
    allRightsReserved: 'جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};