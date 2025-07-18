import { useLanguage } from '@/contexts/LanguageContext'
import { Building2, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">
                {language === 'ar' ? 'شركة محمد القريني' : 'MG Company'}
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('footerDescription')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+966556444809</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>mgcompany84@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>{language === 'ar' ? 'الرياض، السعودية' : 'Riyadh, Saudi Arabia'}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('services')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('constructionTitle')}</li>
              <li>{t('renovationTitle')}</li>
              <li>{t('consultingTitle')}</li>
              <li>{t('maintenanceTitle')}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {language === 'ar' ? 'شركة محمد القريني للمقاولات والتجارة' : 'Mohammed Alquraini Contracting & Trading Company'}. {t('allRightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  )
}