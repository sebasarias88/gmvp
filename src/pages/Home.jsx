import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Phone, ArrowRight, Star, Globe, Play, TrendingUp, Shield, CreditCard, Users,
  Zap, Target, DollarSign, Award
} from 'lucide-react'
import business1 from '../assets/business1.jpg'
import business2 from '../assets/business2.jpg'
import business3 from '../assets/business3.jpg'
import business6 from '../assets/business6.jpg'
import business7 from '../assets/business7.jpg'
import business8 from '../assets/business8.jpg'
import business9 from '../assets/business9.jpg'
import business10 from '../assets/business10.jpg'
import business from '../assets/business.jpg'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <main className="pt-20 ">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-20">
          {/* Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 backdrop-blur-sm"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  {t('home.badge')}
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  {t('home.title')}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    {t('home.titleHighlight')}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl text-slate-200 mb-12 max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                  {t('home.description')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <motion.a
                    href="https://wa.me/573186401900?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20financieros"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>{t('home.freeConsultation')}</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <Link
                    to="/productos-servicios"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    {t('home.viewServices')}
                  </Link>
                </div>

                {/* Social Proof */}
                <div className="flex flex-col sm:flex-row items-center gap-8 text-slate-300">
                  <div className="flex items-center">
                    <div className="flex -space-x-1 mr-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-white">{t('home.rating')}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-slate-300" />
                    <span className="text-lg text-white">{t('home.location')}</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Credit Evolution Chart */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                  {/* Pattern Background */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <motion.div 
                      className="flex items-center justify-between mb-8"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{t('home.creditEvolution')}</h3>
                        <p className="text-white/80 text-sm">{t('home.progress')}</p>
                      </div>
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 200 }}
                      >
                        <TrendingUp className="w-8 h-8 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Chart Container */}
                    <div className="relative h-64 rounded-2xl p-6 border border-white/20 overflow-hidden bg-white/5 backdrop-blur-sm">
                      {/* Chart Grid */}
                      <motion.div 
                        className="absolute inset-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className="absolute inset-0 flex flex-col justify-between">
                          {[850, 750, 650, 550, 450].map((value, index) => (
                            <motion.div 
                              key={value} 
                              className="flex items-center"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                            >
                              <div className="w-full border-t border-white/20"></div>
                              <span className="text-white/70 text-xs ml-2 w-8">{value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Chart Line */}
                      <svg className="absolute inset-6 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="tradingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area under curve - animated fill (continuous) */}
                        <motion.path 
                          d="M 0,75 Q 10,75 20,70 Q 30,65 40,60 Q 50,45 60,40 Q 70,30 80,20 Q 90,15 100,15 L 100,100 L 0,100 Z" 
                          fill="url(#areaGradient)"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.3, 0.3, 0] }}
                          transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.8, 1]
                          }}
                        />
                        
                        {/* Main line - continuous animated drawing */}
                        <motion.path 
                          d="M 0,75 Q 10,76.15 20,71.15 Q 30,66.15 40,61.15 Q 50,46.15 60,41.15 Q 70,31.15 80,21.15 Q 90,16.15 100,16.15" 
                          stroke="url(#tradingGradient)" 
                          strokeWidth="2.5" 
                          fill="none" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ 
                            pathLength: [0, 1, 1, 0],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 1]
                          }}
                        />
                        
                        {/* End point circles - continuous pulse */}
                        <motion.circle 
                          cx="100" 
                          cy="15" 
                          r="3" 
                          fill="#10b981"
                          animate={{ 
                            scale: [0, 1, 1, 0],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 1]
                          }}
                        />
                        <motion.circle 
                          cx="100" 
                          cy="15" 
                          r="6" 
                          fill="#10b981" 
                          opacity="0.3"
                          animate={{ 
                            scale: [0, 1.2, 1.2, 0],
                            opacity: [0, 0.3, 0.3, 0]
                          }}
                          transition={{ 
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 1]
                          }}
                        />
                      </svg>

                      {/* Live Indicator */}
                      <motion.div 
                        className="absolute top-4 left-4 flex items-center space-x-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        <span className="text-green-400 text-xs font-medium">{t('home.live')}</span>
                      </motion.div>

                      {/* Current Score */}
                      <motion.div 
                        className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl px-4 py-2 shadow-lg"
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
                      >
                        <div className="flex items-center space-x-2">
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <TrendingUp className="w-4 h-4 text-white rotate-45" />
                          </motion.div>
                          <motion.span 
                            className="text-white font-bold text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.6 }}
                          >
                            {t('home.currentScore')}
                          </motion.span>
                        </div>
                      </motion.div>

                      {/* Time Labels */}
                      <motion.div 
                        className="absolute bottom-0 left-6 right-6 flex justify-between text-white/60 text-xs"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                      >
                        {[t('home.timeLabels.6mAgo'), t('home.timeLabels.4mAgo'), t('home.timeLabels.2mAgo'), t('home.timeLabels.now')].map((label, index) => (
                          <motion.span
                            key={label}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                          >
                            {label}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between mt-8">
                      {[
                        { value: 580, label: t('home.stats.initial'), color: "text-red-400", delay: 1.5 },
                        { value: 665, label: t('home.stats.improvement'), color: "text-amber-400", delay: 1.7 },
                        { value: 750, label: t('home.stats.final'), color: "text-green-400", delay: 1.9 }
                      ].map((stat, index) => (
                        <motion.div 
                          key={index}
                          className="text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: stat.delay }}
                        >
                          <motion.div 
                            className={`text-3xl font-bold ${stat.color}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: stat.delay + 0.2,
                              type: "spring",
                              stiffness: 200
                            }}
                          >
                            {stat.value}
                          </motion.div>
                          <motion.div 
                            className="text-white/70 text-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: stat.delay + 0.3 }}
                          >
                            {stat.label}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url(${business1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('home.services')} <span className="text-amber-500">{t('home.services')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('home.servicesDescription')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Shield, title: t('home.serviceItems.financial.title'), desc: t('home.serviceItems.financial.description'), color: "from-blue-500 to-blue-600" },
                { icon: CreditCard, title: t('home.serviceItems.insurance.title'), desc: t('home.serviceItems.insurance.description'), color: "from-green-500 to-green-600" },
                { icon: TrendingUp, title: t('home.serviceItems.portfolio.title'), desc: t('home.serviceItems.portfolio.description'), color: "from-purple-500 to-purple-600" },
                { icon: Users, title: t('home.serviceItems.revolving.title'), desc: t('home.serviceItems.revolving.description'), color: "from-orange-500 to-orange-600" }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-300 overflow-hidden"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-10 group-hover:opacity-15 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${[business6, business7, business8, business9][index]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/85 group-hover:from-white/90 group-hover:to-white/80 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url(${business2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('home.whyChoose')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('home.whyChooseDescription')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Zap, title: t('home.features.fast.title'), desc: t('home.features.fast.description') },
                { icon: Target, title: t('home.features.personalized.title'), desc: t('home.features.personalized.description') },
                { icon: DollarSign, title: t('home.features.transparent.title'), desc: t('home.features.transparent.description') },
                { icon: Award, title: t('home.features.guaranteed.title'), desc: t('home.features.guaranteed.description') }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${business10})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('home.testimonials')} <span className="text-amber-500">{t('home.testimonials')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('home.testimonialsDescription')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { initials: t('home.testimonial1.initials'), name: t('home.testimonial1.name'), role: t('home.testimonial1.role'), quote: t('home.testimonial1.quote'), result: t('home.testimonial1.result'), featured: true },
                { initials: t('home.testimonial2.initials'), name: t('home.testimonial2.name'), role: t('home.testimonial2.role'), quote: t('home.testimonial2.quote'), result: t('home.testimonial2.result'), featured: false },
                { initials: t('home.testimonial3.initials'), name: t('home.testimonial3.name'), role: t('home.testimonial3.role'), quote: t('home.testimonial3.quote'), result: t('home.testimonial3.result'), featured: false }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-300 cursor-pointer overflow-hidden ${testimonial.featured ? 'ring-2 ring-amber-500 scale-105' : ''}`}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                    style={{
                      backgroundImage: `url(${[business3, business6, business7][index]})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 group-hover:from-white/90 group-hover:to-white/85 transition-all duration-500"></div>
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors duration-300 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="text-2xl font-bold text-green-500">{testimonial.result}</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&#39;60&#39; height=&#39;60&#39; viewBox=&#39;0 0 60 60&#39; xmlns=&#39;http://www.w3.org/2000/svg&#39;%3E%3Cg fill=&#39;none&#39; fill-rule=&#39;evenodd&#39;%3E%3Cg fill=&#39;%23F59E0B&#39; fill-opacity=&#39;0.05&#39;%3E%3Ccircle cx=&#39;30&#39; cy=&#39;30&#39; r=&#39;2&#39;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                {t('home.cta.title')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {t('home.cta.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('home.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="https://wa.me/573186401900?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20financieros%20y%20quiero%20transformar%20mi%20futuro%20financiero"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {t('home.cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <Link
                  to="/productos-servicios"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  {t('home.cta.viewServices')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

