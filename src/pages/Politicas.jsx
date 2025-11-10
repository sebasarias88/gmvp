import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Shield, ArrowRight, Clock, Database, CheckCircle2, Phone, MessageCircle,
  Scale, FileText, Lock
} from 'lucide-react'

export default function Politicas() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-50 via-white to-amber-50 py-24 md:py-32 text-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-500">{t('policies.title')}</span> {t('policies.corporate')}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('policies.description')}
            </motion.p>
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-lg font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Shield className="w-6 h-6 mr-3" />
              {t('policies.badge')}
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t('policies.intro.title')}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                {t('policies.intro.description')}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
            </motion.div>
          </div>
        </section>

        {/* Policies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {t('policies.ourPolicies.title')} <span className="text-amber-500">{t('policies.ourPolicies.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-slate-600">
                {t('policies.ourPolicies.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Política de Cobranza */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('policies.collection.title')}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t('policies.collection.description')}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 mb-4">{t('policies.collection.phases')}</h4>
                    {[
                      { days: t('policies.collection.phase1.days'), phase: t('policies.collection.phase1.name'), desc: t('policies.collection.phase1.description') },
                      { days: t('policies.collection.phase2.days'), phase: t('policies.collection.phase2.name'), desc: t('policies.collection.phase2.description') },
                      { days: t('policies.collection.phase3.days'), phase: t('policies.collection.phase3.name'), desc: t('policies.collection.phase3.description') }
                    ].map((phase, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-amber-700">{phase.days}</span>
                          <span className="text-sm font-medium text-amber-600">{phase.phase}</span>
                        </div>
                        <p className="text-sm text-slate-700">{phase.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Política de Manejo de Datos Personales */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('policies.dataHandling.title')}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t('policies.dataHandling.description')}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 mb-4">{t('policies.dataHandling.compliance')}</h4>
                    {t('policies.dataHandling.items', { returnObjects: true }).map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Política de Gestión de Riesgo */}
              <motion.div
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('policies.riskManagement.title')}</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t('policies.riskManagement.description')}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 mb-4">{t('policies.riskManagement.measures')}</h4>
                    {t('policies.riskManagement.items', { returnObjects: true }).map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                {t('policies.compliance.title')} <span className="text-amber-500">{t('policies.compliance.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('policies.compliance.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Scale, title: t('policies.compliance.items.law1581.title'), desc: t('policies.compliance.items.law1581.description') },
                { icon: FileText, title: t('policies.compliance.items.superintendence.title'), desc: t('policies.compliance.items.superintendence.description') },
                { icon: Shield, title: t('policies.compliance.items.riskNorms.title'), desc: t('policies.compliance.items.riskNorms.description') },
                { icon: Lock, title: t('policies.compliance.items.security.title'), desc: t('policies.compliance.items.security.description') }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 text-base leading-tight">{item.title}</h3>
                    <p className="text-sm text-slate-600 flex-grow">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t('policies.cta.title')}
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                {t('policies.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="tel:+573186401900"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  (+57) 318 640 1900
                </motion.a>
                <Link
                  to="/servicio-cliente"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-amber-500 text-amber-600 font-bold rounded-2xl hover:bg-amber-500 hover:text-white transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  {t('policies.cta.contact')}
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Policies Section */}
        <section className="py-12 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-slate-300 mb-4">{t('policies.additional.title')}</p>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <Link to="/politicas-privacidad" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  {t('policies.additional.privacy')}
                </Link>
                <Link to="/politicas-cookies" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  {t('policies.additional.cookies')}
                </Link>
                <Link to="/aviso-legal" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  {t('policies.additional.legal')}
                </Link>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm">{t('policies.additional.copyright')}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

