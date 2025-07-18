import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building, Home, Wrench, Truck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Building className="h-12 w-12 text-blue-600" />,
      title: t('commercialTitle'),
      description: t('commercialDesc'),
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Home className="h-12 w-12 text-amber-600" />,
      title: t('residentialTitle'),
      description: t('residentialDesc'),
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-600" />,
      title: t('renovationTitle'),
      description: t('renovationDesc'),
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <Truck className="h-12 w-12 text-purple-600" />,
      title: t('tradingTitle'),
      description: t('tradingDesc'),
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};