import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Star, Award, Phone, Mail, ArrowRight, Facebook, Twitter, Instagram, Linkedin
} from 'lucide-react'
import logo from '../../assets/logo.png'
import VisitCounter from '../VisitCounter'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="GMVP Asesoramiento Financiero y Crediticio" 
                  className="h-16 w-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 blur-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{t('footer.companyName')}</h3>
                <p className="text-amber-400 text-sm font-medium">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              {t('footer.description')}
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-lg font-bold text-white">4.9/5</span>
                </div>
                <p className="text-gray-400 text-sm">{t('footer.reviews')}</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  <span className="text-lg font-bold text-white">95%</span>
                </div>
                <p className="text-gray-400 text-sm">{t('footer.successRate')}</p>
              </div>
              <VisitCounter variant="default" className="col-span-2 lg:col-span-1" />
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{t('footer.phone')}</p>
                  <p className="text-sm text-gray-400">{t('footer.schedule')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">{t('footer.email')}</p>
                  <p className="text-sm text-gray-400">{t('footer.responseTime')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: t('header.home') },
                { href: "/nuestra-compania", label: t('header.company') },
                { href: "/productos-servicios", label: t('header.services') },
                { href: "/politicas", label: t('header.policies') },
                { href: "/servicio-cliente", label: t('header.customerService') }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">{t('footer.ourServices')}</h4>
            <ul className="space-y-3 text-gray-300 mb-8">
              {t('footer.services', { returnObjects: true }).map((service, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            
            <div>
              <h5 className="text-lg font-semibold mb-4 text-white">{t('footer.followUs')}</h5>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://facebook.com/", color: "hover:from-blue-600 hover:to-blue-700" },
                  { icon: Twitter, href: "https://twitter.com/", color: "hover:from-sky-500 hover:to-sky-600" },
                  { icon: Instagram, href: "https://instagram.com/", color: "hover:from-pink-500 hover:to-pink-600" },
                  { icon: Linkedin, href: "https://linkedin.com/", color: "hover:from-blue-700 hover:to-blue-800" }
                ].map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all border border-white/10 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>{t('footer.copyright')}</p>
            </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/politicas-privacidad" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
                <Link to="/politicas-cookies" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {t('footer.cookiePolicy')}
                </Link>
                <Link to="/aviso-legal" className="text-gray-400 hover:text-amber-400 transition-colors">
                  {t('footer.legalNotice')}
                </Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

