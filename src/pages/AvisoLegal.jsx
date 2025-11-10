import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Scale, ArrowRight, Mail, DollarSign } from 'lucide-react'

export default function AvisoLegal() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50 py-24 md:py-32 text-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-lg font-medium mb-8">
                <Scale className="w-6 h-6 mr-3" />
                {t('legal.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                {t('legal.title')} <span className="text-amber-500">{t('legal.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                {t('legal.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12"
            >
              <p className="text-lg text-slate-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('legal.intro1') }}></p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {t('legal.intro2')}
              </p>

              <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {t('legal.warning')}
                </p>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('legal.termination') }}></p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('legal.companyInfo.title')}</h2>
              <p className="text-lg text-slate-700 mb-4" dangerouslySetInnerHTML={{ __html: t('legal.companyInfo.description') }}></p>
              <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-2xl border border-slate-200 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">{t('legal.companyInfo.fiscalAddress')}</strong>
                      <p className="text-slate-700">{t('legal.companyInfo.fiscalAddressValue')}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">{t('legal.companyInfo.contact')}</strong>
                      <p className="text-slate-700">{t('legal.companyInfo.contactValue')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('legal.revenue.title')}</h2>
              <p className="text-lg text-slate-700 mb-4">
                {t('legal.revenue.description')}
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-slate-900">{t('legal.revenue.advertising.title')}</h3>
                  </div>
                  <p className="text-slate-700">
                    {t('legal.revenue.advertising.description')}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-slate-900">{t('legal.revenue.services.title')}</h3>
                  </div>
                  <p className="text-slate-700">
                    {t('legal.revenue.services.description')}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 mt-12">
                <p className="text-slate-700 mb-4">
                  <strong>{t('legal.additional.title')}</strong>, {t('legal.additional.description')}
                </p>
                <div className="flex flex-col space-y-2">
                  <Link to="/politicas-privacidad" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t('legal.additional.privacy')}
                  </Link>
                  <Link to="/politicas-cookies" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t('legal.additional.cookies')}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

