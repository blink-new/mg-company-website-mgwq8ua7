import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Shield, Clock, Award, Users, Wrench, Lightbulb } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const { language } = useLanguage();

  const reasons = [
    {
      id: 1,
      icon: Shield,
      title: {
        en: "Quality Assurance",
        ar: "ضمان الجودة"
      },
      description: {
        en: "We maintain the highest standards of quality in every project, ensuring durability and excellence in construction.",
        ar: "نحافظ على أعلى معايير الجودة في كل مشروع، مما يضمن المتانة والتميز في البناء."
      }
    },
    {
      id: 2,
      icon: Clock,
      title: {
        en: "Timely Delivery",
        ar: "التسليم في الوقت المحدد"
      },
      description: {
        en: "Our efficient project management ensures all projects are completed on schedule without compromising quality.",
        ar: "إدارة المشاريع الفعالة لدينا تضمن إنجاز جميع المشاريع في الموعد المحدد دون التنازل عن الجودة."
      }
    },
    {
      id: 3,
      icon: Award,
      title: {
        en: "Industry Recognition",
        ar: "اعتراف الصناعة"
      },
      description: {
        en: "Award-winning projects and industry recognition for excellence in construction and innovative solutions.",
        ar: "مشاريع حائزة على جوائز واعتراف الصناعة للتميز في البناء والحلول المبتكرة."
      }
    },
    {
      id: 4,
      icon: Users,
      title: {
        en: "Expert Team",
        ar: "فريق خبير"
      },
      description: {
        en: "Highly skilled professionals with extensive experience in construction, engineering, and project management.",
        ar: "محترفون ذوو مهارات عالية مع خبرة واسعة في البناء والهندسة وإدارة المشاريع."
      }
    },
    {
      id: 5,
      icon: Wrench,
      title: {
        en: "Advanced Technology",
        ar: "تقنية متقدمة"
      },
      description: {
        en: "Utilizing cutting-edge construction technology and modern equipment for superior project outcomes.",
        ar: "استخدام تقنيات البناء المتطورة والمعدات الحديثة لتحقيق نتائج مشاريع متفوقة."
      }
    },
    {
      id: 6,
      icon: Lightbulb,
      title: {
        en: "Innovative Solutions",
        ar: "حلول مبتكرة"
      },
      description: {
        en: "Creative problem-solving and innovative approaches to meet unique project requirements and challenges.",
        ar: "حل المشاكل الإبداعي والنهج المبتكر لتلبية متطلبات وتحديات المشاريع الفريدة."
      }
    }
  ];

  const whyChooseUsTranslations = {
    en: {
      title: "Why Choose MG Company",
      subtitle: "Excellence in Every Aspect of Construction"
    },
    ar: {
      title: "لماذا تختار شركة MG",
      subtitle: "التميز في كل جانب من جوانب البناء"
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {whyChooseUsTranslations[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {whyChooseUsTranslations[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <Card key={reason.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {reason.title[language]}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description[language]}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'en' ? 'Ready to Start Your Project?' : 'مستعد لبدء مشروعك؟'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en' 
                ? 'Contact us today to discuss your construction needs and get a personalized quote for your project.'
                : 'اتصل بنا اليوم لمناقشة احتياجاتك الإنشائية والحصول على عرض أسعار مخصص لمشروعك.'
              }
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
              {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;