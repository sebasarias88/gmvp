import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Cookie, ArrowRight, ExternalLink } from 'lucide-react'

export default function PoliticasCookies() {
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
                <Cookie className="w-6 h-6 mr-3" />
                {t('cookies.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                {t('cookies.title')} <span className="text-amber-500">{t('cookies.titleHighlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                {t('cookies.description')}
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
              <p className="text-lg text-slate-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t('cookies.intro') }}></p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('cookies.whatAre.title')}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {t('cookies.whatAre.description')}
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('cookies.whyUse.title')}</h2>
              <p className="text-lg text-slate-700 mb-4 font-semibold">
                {t('cookies.whyUse.description')}
              </p>
              <ul className="space-y-3 mb-8">
                {t('cookies.whyUse.items', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 border border-red-200 p-6 rounded-2xl mb-8">
                <p className="text-lg text-slate-700 mb-4 font-semibold text-red-700">
                  {t('cookies.whyUse.neverUse.title')}
                </p>
                <ul className="space-y-3">
                  {t('cookies.whyUse.neverUse.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-slate-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {t('cookies.whyUse.userReject')}
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('cookies.types.title')}</h2>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{t('cookies.types.own.title')}</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="text-slate-700 text-lg font-semibold">{t('cookies.types.own.session.title')}</span>
                    <span className="text-slate-700 text-lg"> {t('cookies.types.own.session.description')}</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <span className="text-slate-700 text-lg font-semibold">{t('cookies.types.own.local.title')}</span>
                    <span className="text-slate-700 text-lg"> {t('cookies.types.own.local.description')}</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{t('cookies.types.other.title')}</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {t('cookies.types.other.description')}
              </p>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-300">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Cookie</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Dominio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cookie: "__cfduid", dominio: "camilasalgadoferrero.com" },
                      { cookie: "_ga", dominio: "camilasalgadoferrero.com" },
                      { cookie: "_gat", dominio: "camilasalgadoferrero.com" },
                      { cookie: "_gid", dominio: "camilasalgadoferrero.com" },
                      { cookie: "cookie_notice_accepted", dominio: "camilasalgadoferrero.com" },
                      { cookie: "wp-settings-1", dominio: "camilasalgadoferrero.com" },
                      { cookie: "wp-settings-time-1", dominio: "camilasalgadoferrero.com" }
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-slate-200">
                        <td className="py-3 px-4 text-slate-700 font-mono">{row.cookie}</td>
                        <td className="py-3 px-4 text-slate-700">{row.dominio}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 mt-8">{t('cookies.types.thirdParty.title')}</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('cookies.types.thirdParty.description') }}></p>

              <div className="space-y-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{t('cookies.types.thirdParty.analytics.title')}</h4>
                  <p className="text-slate-700">
                    {t('cookies.types.thirdParty.analytics.description')}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{t('cookies.types.thirdParty.advertising.title')}</h4>
                  <p className="text-slate-700 mb-4">
                    {t('cookies.types.thirdParty.advertising.description')}
                  </p>
                  <div className="space-y-2">
                    <p className="text-slate-700">
                      {t('cookies.types.thirdParty.advertising.googleDescription')} <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">{t('cookies.types.thirdParty.advertising.googleLink')} <ExternalLink className="w-4 h-4 ml-1" /></a>.
                    </p>
                    <p className="text-slate-700">
                      {t('cookies.types.thirdParty.advertising.adsDescription')} <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">{t('cookies.types.thirdParty.advertising.adsLink')} <ExternalLink className="w-4 h-4 ml-1" /></a>.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{t('cookies.types.thirdParty.social.title')}</h4>
                  <p className="text-slate-700 mb-4">
                    {t('cookies.types.thirdParty.social.description')}
                  </p>
                  <p className="text-slate-700 mb-3 font-semibold">
                    {t('cookies.types.thirdParty.social.description2')}
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">
                        {t('cookies.types.thirdParty.social.links.twitter')} <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">
                        {t('cookies.types.thirdParty.social.links.linkedin')} <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/policies/cookies" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">
                        {t('cookies.types.thirdParty.social.links.facebook')} <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center">
                        {t('cookies.types.thirdParty.social.links.youtube')} <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{t('cookies.types.thirdParty.otherCookies.title')}</h4>
                  <p className="text-slate-700">
                    {t('cookies.types.thirdParty.otherCookies.description')}
                  </p>
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {t('cookies.types.other.description')}
              </p>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">{t('cookies.manage.title')}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {t('cookies.manage.description1')}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {t('cookies.manage.description2')}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {t('cookies.manage.description3')}
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-amber-50 p-6 rounded-2xl border border-slate-200 mb-8">
                <p className="text-lg text-slate-700 mb-4 font-semibold">
                  {t('cookies.manage.browsersTitle')}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: t('cookies.manage.browsers.chrome'), url: "https://support.google.com/chrome/answer/95647" },
                    { name: t('cookies.manage.browsers.ie'), url: "https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" },
                    { name: t('cookies.manage.browsers.firefox'), url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
                    { name: t('cookies.manage.browsers.safari'), url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" }
                  ].map((browser, index) => (
                    <a
                      key={index}
                      href={browser.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center hover:underline"
                    >
                      {browser.name} <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 mt-12">
                <p className="text-slate-700 mb-4">
                  <strong>{t('cookies.additional.title')}</strong>, {t('cookies.additional.description')}
                </p>
                <div className="flex flex-col space-y-2">
                  <Link to="/politicas-privacidad" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t('cookies.additional.privacy')}
                  </Link>
                  <Link to="/aviso-legal" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {t('cookies.additional.legal')}
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

