import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const { t, language } = useLanguage()

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '+966 50 123 4567',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'info@mgcompany.sa',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: MapPin,
      label: t('address'),
      value: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      label: t('workingHours'),
      value: language === 'ar' ? 'الأحد - الخميس: 8:00 ص - 6:00 م' : 'Sun - Thu: 8:00 AM - 6:00 PM',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('contactTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 ${item.color}`} />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {item.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center font-medium">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {language === 'ar' ? 'هل أنت مستعد لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                {language === 'ar' 
                  ? 'تواصل معنا اليوم للحصول على استشارة مجانية وتقدير تكلفة مشروعك'
                  : 'Contact us today for a free consultation and project cost estimate'
                }
              </p>
              <a 
                href="tel:+966501234567"
                className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {language === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}