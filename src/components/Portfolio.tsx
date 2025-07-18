import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Portfolio: React.FC = () => {
  const { language, translations } = useLanguage();

  const projects = [
    {
      id: 1,
      title: {
        en: "Luxury Residential Complex",
        ar: "مجمع سكني فاخر"
      },
      description: {
        en: "Modern residential complex with 50 luxury apartments featuring contemporary design and premium amenities.",
        ar: "مجمع سكني حديث يضم 50 شقة فاخرة بتصميم عصري ووسائل راحة متميزة."
      },
      category: {
        en: "Residential",
        ar: "سكني"
      },
      year: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: {
        en: "Commercial Office Tower",
        ar: "برج مكاتب تجاري"
      },
      description: {
        en: "25-story commercial tower with modern office spaces and state-of-the-art facilities in the business district.",
        ar: "برج تجاري من 25 طابقاً يضم مساحات مكتبية حديثة ومرافق متطورة في الحي التجاري."
      },
      category: {
        en: "Commercial",
        ar: "تجاري"
      },
      year: "2022",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: {
        en: "Shopping Mall Renovation",
        ar: "تجديد مركز تسوق"
      },
      description: {
        en: "Complete renovation of a major shopping center including modern facades, interior design, and infrastructure upgrades.",
        ar: "تجديد شامل لمركز تسوق رئيسي يشمل واجهات حديثة وتصميم داخلي وتحديث البنية التحتية."
      },
      category: {
        en: "Renovation",
        ar: "تجديد"
      },
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: {
        en: "Industrial Warehouse Complex",
        ar: "مجمع مستودعات صناعية"
      },
      description: {
        en: "Large-scale industrial facility with advanced logistics systems and sustainable construction practices.",
        ar: "منشأة صناعية واسعة النطاق مع أنظمة لوجستية متقدمة وممارسات بناء مستدامة."
      },
      category: {
        en: "Industrial",
        ar: "صناعي"
      },
      year: "2022",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: {
        en: "Healthcare Facility",
        ar: "منشأة رعاية صحية"
      },
      description: {
        en: "Modern medical center with specialized departments and cutting-edge medical equipment installations.",
        ar: "مركز طبي حديث مع أقسام متخصصة وتركيب معدات طبية متطورة."
      },
      category: {
        en: "Healthcare",
        ar: "رعاية صحية"
      },
      year: "2023",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: {
        en: "Educational Campus",
        ar: "حرم تعليمي"
      },
      description: {
        en: "University campus expansion including lecture halls, laboratories, and student facilities with sustainable design.",
        ar: "توسعة حرم جامعي تشمل قاعات محاضرات ومختبرات ومرافق طلابية بتصميم مستدام."
      },
      category: {
        en: "Educational",
        ar: "تعليمي"
      },
      year: "2022",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const portfolioTranslations = {
    en: {
      title: "Our Portfolio",
      subtitle: "Showcasing Excellence in Construction",
      viewAll: "View All Projects",
      year: "Year"
    },
    ar: {
      title: "أعمالنا",
      subtitle: "عرض التميز في البناء",
      viewAll: "عرض جميع المشاريع",
      year: "السنة"
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {portfolioTranslations[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {portfolioTranslations[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {project.category[language]}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title[language]}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {portfolioTranslations[language].year} {project.year}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
            {portfolioTranslations[language].viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;