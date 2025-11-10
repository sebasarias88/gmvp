import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Building2, ArrowRight, CheckCircle2, Star, Heart, Shield, Zap, Award, Target,
  Globe
} from 'lucide-react'
import business4 from '../assets/business4.jpg'
import business5 from '../assets/business5.jpg'
import business6 from '../assets/business6.jpg'
import business7 from '../assets/business7.jpg'
import business8 from '../assets/business8.jpg'
import business9 from '../assets/business9.jpg'
import business10 from '../assets/business10.jpg'
import business from '../assets/business.jpg'

export default function NuestraCompania() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-8">
                <Building2 className="w-5 h-5 mr-2" />
                {t('company.badge')}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                {t('company.title')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  {t('company.titleHighlight')}
                </span>
                {t('company.titleSuffix')}
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('company.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/servicio-cliente"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  {t('company.knowTeam')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/productos-servicios"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-lg"
                >
                  {t('company.viewServices')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Misión y Visión Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url(${business4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Misión */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  {t('company.mission.title')} <span className="text-amber-500">{t('company.mission.title')}</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {t('company.mission.description')}
                </p>
                <div className="space-y-4">
                  {t('company.mission.items', { returnObjects: true }).map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visión */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  {t('company.vision.title')} <span className="text-amber-500">{t('company.vision.title')}</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {t('company.vision.description')}
                </p>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-200 relative overflow-hidden">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `url(${business9})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 to-orange-50/95"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('company.vision.teamAttitude')}</h3>
                    <ul className="space-y-3">
                    {t('company.vision.items', { returnObjects: true }).map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                      ))}
                  </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url(${business5})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('company.values.title')} <span className="text-amber-500">{t('company.values.title')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto">
                {t('company.values.description')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: t('company.values.passion.title'), desc: t('company.values.passion.description'), color: "from-red-500 to-red-600" },
                { icon: Shield, title: t('company.values.commitment.title'), desc: t('company.values.commitment.description'), color: "from-blue-500 to-blue-600" },
                { icon: Zap, title: t('company.values.innovation.title'), desc: t('company.values.innovation.description'), color: "from-purple-500 to-purple-600" },
                { icon: Award, title: t('company.values.trust.title'), desc: t('company.values.trust.description'), color: "from-green-500 to-green-600" },
                { icon: Target, title: t('company.values.agility.title'), desc: t('company.values.agility.description'), color: "from-orange-500 to-orange-600" }
              ].map((valor, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${valor.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <valor.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{valor.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{valor.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Historia Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${business8})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          ></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('company.history.title')} <span className="text-amber-500">{t('company.history.title')}</span>
              </h2>
              <p className="text-xl text-slate-600">
                {t('company.history.description')}
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500"></div>
              <div className="space-y-12">
                {[
                  { year: "2015", title: t('company.history.milestones.2015.title'), desc: t('company.history.milestones.2015.description'), icon: Building2, align: "right" },
                  { year: "2016", title: t('company.history.milestones.2016.title'), desc: t('company.history.milestones.2016.description'), icon: Shield, align: "left" },
                  { year: "2018", title: t('company.history.milestones.2018.title'), desc: t('company.history.milestones.2018.description'), icon: Globe, align: "right" },
                  { year: "2020", title: t('company.history.milestones.2020.title'), desc: t('company.history.milestones.2020.description'), icon: Award, align: "left" },
                  { year: "2025", title: t('company.history.milestones.2025.title'), desc: t('company.history.milestones.2025.description'), icon: Globe, align: "right" }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    className={`relative flex items-center ${milestone.align === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: milestone.align === 'right' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center z-10">
                      <milestone.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className={`w-1/2 ${milestone.align === 'right' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 relative overflow-hidden">
                        {/* Background Image */}
                        <div 
                          className="absolute inset-0 opacity-5"
                          style={{
                            backgroundImage: `url(${[business6, business7, business9, business10, business][index]})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90"></div>
                        <div className="relative z-10">
                          <div className="text-amber-600 font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-slate-900 mb-4">{milestone.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{milestone.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-lighten filter blur-2xl opacity-20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/20">
                <Zap className="w-5 h-5 mr-2" />
                {t('company.cta.needHelp')}
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                {t('company.cta.haveQuestions')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {t('company.cta.questions')}
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('company.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/573186401900?text=Hola%2C%20tengo%20preguntas%20sobre%20GMVP%20y%20quiero%20contactar%20con%20un%20asesor%20financiero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {t('company.cta.contactNow')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/productos-servicios"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  {t('company.cta.ourServices')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="mt-16 pt-8 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-white font-semibold">{t('company.cta.specializedAdvisory')}</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">{t('company.cta.secureProcesses')}</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">{t('company.cta.guaranteedResults')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

