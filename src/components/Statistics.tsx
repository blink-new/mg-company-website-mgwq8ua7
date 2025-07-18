import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TrendingUp, Clock, Users, CheckCircle } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, suffix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-blue-100 rounded-full">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-gray-900 mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

export const Statistics: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      value: 98,
      label: t('completionRate'),
      suffix: '%'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      value: 3,
      label: t('yearsExperience'),
      suffix: '+'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      value: 150,
      label: t('happyClients'),
      suffix: '+'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      value: 75,
      label: t('projectsCompleted'),
      suffix: '+'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};