import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Shield, ArrowRight, Mail, FileText } from 'lucide-react'

export default function PoliticasPrivacidad() {
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
                <Shield className="w-6 h-6 mr-3" />
                {t('privacy.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                {t('privacy.title')} <span className="text-amber-500">{t('privacy.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                {t('privacy.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12"
              >
                <p className="text-lg text-slate-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('privacy.intro') }}></p>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.howDataObtained.title')}</h2>
                <p className="text-lg text-slate-700 mb-4">{t('privacy.howDataObtained.description')}</p>
                <ul className="space-y-3 mb-8">
                  {t('privacy.howDataObtained.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.whatInfoCollected.title')}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('privacy.whatInfoCollected.description') }}></p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-amber-600" />
                    {t('privacy.cookiePolicy.title')}
                  </h3>
                  <p className="text-slate-700 mb-4">
                    {t('privacy.cookiePolicy.description')} <Link to="/politicas-cookies" className="text-amber-600 hover:text-amber-700 font-semibold">{t('privacy.cookiePolicy.link')}</Link>.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.useOfInfo.title')}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {t('privacy.useOfInfo.description1')}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {t('privacy.useOfInfo.description2')}
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.rights.title')}</h2>
                <p className="text-lg text-slate-700 mb-4">
                  {t('privacy.rights.description')}
                </p>
                <p className="text-lg text-slate-700 mb-4 font-semibold">
                  {t('privacy.rights.rightsTitle')}
                </p>
                <ul className="space-y-3 mb-8">
                  {t('privacy.rights.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.dataRetention.title')}</h2>
                <p className="text-lg text-slate-700 mb-4 font-semibold">
                  {t('privacy.dataRetention.description')}
                </p>
                <ul className="space-y-3 mb-8">
                  {t('privacy.dataRetention.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.acceptance.title')}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {t('privacy.acceptance.description1')}
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {t('privacy.acceptance.description2')} <Link to="/aviso-legal" className="text-amber-600 hover:text-amber-700 font-semibold">{t('privacy.acceptance.legalNotice')}</Link>.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.dataController.title')}</h2>
                <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-2xl border border-slate-200 mb-8">
                  <div className="space-y-4">
                    <div>
                      <strong className="text-slate-900">{t('privacy.dataController.identity')}</strong>
                      <p className="text-slate-700">{t('privacy.dataController.identityValue')}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">{t('privacy.dataController.commercialName')}</strong>
                      <p className="text-slate-700">{t('privacy.dataController.commercialNameValue')}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">{t('privacy.dataController.address')}</strong>
                      <p className="text-slate-700">{t('privacy.dataController.addressValue')}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900">{t('privacy.dataController.email')}</strong>
                      <p className="text-slate-700">{t('privacy.dataController.emailValue')}</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('privacy.thirdPartyLinks.title')}</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {t('privacy.thirdPartyLinks.description')}
                </p>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 mt-12">
                  <p className="text-slate-700 mb-4">
                    <strong>{t('privacy.additional.title')}</strong>, {t('privacy.additional.description')}
                  </p>
                  <div className="flex flex-col space-y-2">
                    <Link to="/politicas-cookies" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {t('privacy.additional.cookies')}
                    </Link>
                    <Link to="/aviso-legal" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {t('privacy.additional.legal')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

