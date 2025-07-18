import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: {
        en: "Ahmed Al-Rashid",
        ar: "أحمد الراشد"
      },
      position: {
        en: "CEO, Al-Rashid Holdings",
        ar: "الرئيس التنفيذي، مجموعة الراشد القابضة"
      },
      content: {
        en: "MG Company delivered exceptional quality on our commercial project. Their attention to detail and professional approach exceeded our expectations. Highly recommended for any construction needs.",
        ar: "قدمت شركة MG جودة استثنائية في مشروعنا التجاري. اهتمامهم بالتفاصيل ونهجهم المهني فاق توقعاتنا. أوصي بهم بشدة لأي احتياجات إنشائية."
      },
      rating: 5,
      project: {
        en: "Office Complex",
        ar: "مجمع مكاتب"
      }
    },
    {
      id: 2,
      name: {
        en: "Sarah Al-Mahmoud",
        ar: "سارة المحمود"
      },
      position: {
        en: "Property Developer",
        ar: "مطورة عقارية"
      },
      content: {
        en: "Working with MG Company was a pleasure. They completed our residential project on time and within budget. The quality of workmanship is outstanding, and their team is highly professional.",
        ar: "كان العمل مع شركة MG متعة حقيقية. أنجزوا مشروعنا السكني في الوقت المحدد وضمن الميزانية. جودة العمل متميزة وفريقهم محترف للغاية."
      },
      rating: 5,
      project: {
        en: "Residential Villas",
        ar: "فلل سكنية"
      }
    },
    {
      id: 3,
      name: {
        en: "Mohammed Al-Zahra",
        ar: "محمد الزهراء"
      },
      position: {
        en: "Facility Manager",
        ar: "مدير المرافق"
      },
      content: {
        en: "The renovation work done by MG Company transformed our facility completely. Their innovative solutions and quality execution made a significant difference. Excellent service from start to finish.",
        ar: "أعمال التجديد التي قامت بها شركة MG غيرت منشأتنا بالكامل. حلولهم المبتكرة والتنفيذ عالي الجودة أحدث فرقاً كبيراً. خدمة ممتازة من البداية للنهاية."
      },
      rating: 5,
      project: {
        en: "Facility Renovation",
        ar: "تجديد المرافق"
      }
    }
  ];

  const testimonialsTranslations = {
    en: {
      title: "What Our Clients Say",
      subtitle: "Trusted by Leading Organizations",
      project: "Project:"
    },
    ar: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "موثوق من قبل المؤسسات الرائدة",
      project: "المشروع:"
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {testimonialsTranslations[language].title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {testimonialsTranslations[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content[language]}"
                </blockquote>
                
                <div className="border-t pt-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                      {testimonial.name[language].charAt(0)}
                    </div>
                    <div className={`ml-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name[language]}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position[language]}
                      </p>
                      <p className="text-sm text-blue-600 mt-1">
                        {testimonialsTranslations[language].project} {testimonial.project[language]}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;