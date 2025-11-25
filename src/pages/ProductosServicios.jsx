import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Shield, ArrowRight, MessageCircle, Star, Clock, Target, Phone,
  CheckCircle2, FileText, Zap
} from 'lucide-react'
import business6 from '../assets/business6.jpg'
import business7 from '../assets/business7.jpg'
import business8 from '../assets/business8.jpg'
import business9 from '../assets/business9.jpg'
import business10 from '../assets/business10.jpg'
import business from '../assets/business.jpg'

export default function ProductosServicios() {
  const { t } = useTranslation()
  const [selectedService, setSelectedService] = useState('asesorias')

  const services = [
    {
      id: 'asesorias',
      title: t('services.serviceCards.asesorias.title'),
      subtitle: t('services.serviceCards.asesorias.subtitle'),
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-amber-500 to-orange-500',
      bgImage: business6
    },
    {
      id: 'asesoriasCrediticias',
      title: t('services.serviceCards.asesoriasCrediticias.title'),
      subtitle: t('services.serviceCards.asesoriasCrediticias.subtitle'),
      icon: FileText,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-500 to-indigo-600',
      bgImage: business10
    }
  ]

  const serviceDetails = {
    asesorias: {
      title: t('services.asesorias.title'),
      subtitle: t('services.asesorias.subtitle'),
      description: t('services.asesorias.description'),
      duration: t('services.asesorias.duration'),
      success: t('services.asesorias.success'),
      icon: Shield,
      iconColor: 'from-blue-500 to-blue-600',
      includes: t('services.asesorias.includes', { returnObjects: true }),
      benefits: t('services.asesorias.benefits', { returnObjects: true }),
      requirements: t('services.asesorias.requirements', { returnObjects: true }),
      whatsappMessage: "Hola%2C%20quiero%20solicitar%20el%20servicio%20de%20Asesor%C3%ADas%20Financieras%20para%20salir%20de%20centrales%20de%20riesgo"
    },
    asesoriasCrediticias: {
      title: t('services.asesoriasCrediticias.title'),
      subtitle: t('services.asesoriasCrediticias.subtitle'),
      description: t('services.asesoriasCrediticias.description'),
      duration: t('services.asesoriasCrediticias.duration'),
      success: t('services.asesoriasCrediticias.success'),
      icon: FileText,
      iconColor: 'from-indigo-500 to-indigo-600',
      includes: t('services.asesoriasCrediticias.includes', { returnObjects: true }),
      benefits: t('services.asesoriasCrediticias.benefits', { returnObjects: true }),
      requirements: t('services.asesoriasCrediticias.requirements', { returnObjects: true }),
      whatsappMessage: "Hola%2C%20quiero%20solicitar%20el%20servicio%20de%20Asesor%C3%ADas%20Crediticias%20para%20mejorar%20mi%20historial%20crediticio"
    }
  }

  const faqs = [
    {
      question: t('services.faq.questions.q1'),
      answer: t('services.faq.questions.a1')
    },
    {
      question: t('services.faq.questions.q2'),
      answer: t('services.faq.questions.a2')
    },
    {
      question: t('services.faq.questions.q3'),
      answer: t('services.faq.questions.a3')
    },
    {
      question: t('services.faq.questions.q4'),
      answer: t('services.faq.questions.a4')
    },
    {
      question: t('services.faq.questions.q5'),
      answer: t('services.faq.questions.a5')
    }
  ]

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
                <Shield className="w-5 h-5 mr-2" />
                {t('services.badge')}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                {t('services.title')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  {t('services.titleHighlight')}
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('services.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="https://wa.me/573186401900?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos%20y%20servicios%20financieros"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {t('services.freeConsultation')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <Link
                  to="/nuestra-compania"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:border-amber-500 hover:text-amber-600 transition-all duration-300 text-lg"
                >
                  {t('services.knowHistory')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="text-amber-500">{t('services.ourServices')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {t('services.selectService')}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: selectedService === service.id ? 1.05 : 1,
                    y: selectedService === service.id ? -5 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`group relative p-8 rounded-3xl text-left transition-all duration-500 border-2 overflow-hidden ${
                    selectedService === service.id
                      ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white border-amber-500 shadow-2xl'
                      : 'hover:bg-gradient-to-br hover:from-slate-50 hover:to-amber-50 text-slate-700 border-slate-200 hover:border-amber-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Background Image */}
                  <div 
                    className={`absolute inset-0 transition-all duration-500 ${
                      selectedService === service.id
                        ? 'opacity-20'
                        : 'opacity-10 group-hover:opacity-15'
                    }`}
                    style={{
                      backgroundImage: `url(${service.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  {/* Overlay Gradient */}
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    selectedService === service.id
                      ? 'bg-gradient-to-br from-amber-500/90 to-orange-500/90'
                      : 'bg-gradient-to-br from-white/80 to-white/60 group-hover:from-white/70 group-hover:to-white/50'
                  }`}></div>
                  <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 z-10 ${
                    selectedService === service.id
                      ? 'bg-white/20'
                      : 'bg-gradient-to-br from-amber-100/50 to-orange-100/50 group-hover:from-amber-200/50 group-hover:to-orange-200/50'
                  }`}></div>
                  <motion.div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-20 ${
                      selectedService === service.id
                        ? 'bg-white/20 backdrop-blur-sm'
                        : `bg-gradient-to-r ${service.color}`
                    }`}
                    animate={{
                      scale: selectedService === service.id ? 1.1 : 1,
                      rotate: selectedService === service.id ? [0, -5, 5, -5, 0] : 0
                    }}
                    transition={{ 
                      scale: { duration: 0.3 },
                      rotate: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <service.icon className={`w-8 h-8 transition-all duration-500 ${
                      selectedService === service.id
                        ? 'text-white'
                        : 'text-white'
                    }`} />
                  </motion.div>
                  <div className="relative z-20">
                    <motion.h3
                      className={`font-bold text-xl mb-2 transition-all duration-500 ${
                        selectedService === service.id
                          ? 'text-white drop-shadow-lg'
                          : 'text-slate-900 group-hover:text-slate-900 drop-shadow-md'
                      }`}
                      animate={{
                        scale: selectedService === service.id ? 1.02 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className={`text-sm mb-4 transition-all duration-500 ${
                        selectedService === service.id
                          ? 'text-white/90 drop-shadow-md'
                          : 'text-slate-700 group-hover:text-slate-800'
                      }`}
                      initial={{ opacity: 0.8 }}
                      animate={{ opacity: selectedService === service.id ? 1 : 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.subtitle}
                    </motion.p>
                  </div>
                  {selectedService !== service.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Service Section */}
        <AnimatePresence mode="wait">
          {selectedService && serviceDetails[selectedService] && (() => {
            const currentService = serviceDetails[selectedService]
            const IconComponent = currentService.icon
            
            return (
              <motion.section
                key={selectedService}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="py-16 bg-gradient-to-br from-slate-50 via-white to-amber-50 relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(${business10})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                  }}
                ></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-slate-200/20 to-slate-300/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Service Info */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <motion.div
                        className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="mb-8">
                          <div className="flex items-center space-x-6 mb-6">
                            <motion.div
                              className={`w-16 h-16 bg-gradient-to-r ${currentService.iconColor} rounded-2xl flex items-center justify-center shadow-lg`}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ 
                                scale: 1, 
                                rotate: [0, -2, 2, -2, 0]
                              }}
                              transition={{ 
                                scale: { duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 },
                                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
                              }}
                              whileHover={{ scale: 1.1, rotate: 0 }}
                            >
                              <IconComponent className="w-8 h-8 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <motion.h2
                                className="text-3xl font-bold text-slate-900 mb-2 leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                              >
                                {currentService.title}
                              </motion.h2>
                              <motion.div
                                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
                              >
                                <Star className="w-4 h-4 mr-1 fill-current" />
                                {currentService.subtitle}
                              </motion.div>
                            </div>
                          </div>
                          <motion.p
                            className="text-lg text-slate-600 leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            {currentService.description}
                          </motion.p>
                          <motion.div
                            className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-4"
                            initial={{ width: 0 }}
                            animate={{ width: 64 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                          ></motion.div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          <motion.div
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mb-3"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Clock className="w-5 h-5 text-white" />
                            </motion.div>
                            <h4 className="font-bold text-slate-900 mb-1 text-base">{t('services.details.duration')}</h4>
                            <motion.p
                              className="text-slate-600 font-semibold text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.9 }}
                            >
                              {currentService.duration}
                            </motion.p>
                          </motion.div>
                          <motion.div
                            className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div
                              className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-3"
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                              <Target className="w-5 h-5 text-white" />
                            </motion.div>
                            <h4 className="font-bold text-slate-900 mb-1 text-base">{t('services.details.success')}</h4>
                            <motion.p
                              className="text-slate-600 font-semibold text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.4, delay: 1.0 }}
                            >
                              {currentService.success}
                            </motion.p>
                          </motion.div>
                        </div>

                        <motion.a
                          href={`https://wa.me/573186401900?text=${currentService.whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base w-full md:w-auto"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Phone className="w-5 h-5 mr-2" />
                          </motion.div>
                          {t('services.details.requestNow')}
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </motion.div>
                        </motion.a>
                      </motion.div>
                    </motion.div>

                    {/* Right Column - Details */}
                    <motion.div
                      className="space-y-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* Qué incluye */}
                      <motion.div
                        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -2, shadow: "xl" }}
                      >
                        <motion.div
                          className="flex items-center mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mr-3"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-bold text-slate-900"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                          >
                            {t('services.details.whatIncludes')}
                          </motion.h3>
                        </motion.div>
                    <ul className="space-y-3">
                      {currentService.includes.map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + (index * 0.1), type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </motion.div>
                          <motion.span
                            className="text-slate-700 text-base font-medium group-hover:text-slate-900 transition-colors duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                          >
                            {item}
                          </motion.span>
                        </motion.li>
                      ))}
                    </ul>
                      </motion.div>

                      {/* Beneficios */}
                      <motion.div
                        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -2, shadow: "xl" }}
                      >
                        <motion.div
                          className="flex items-center mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mr-3"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                          >
                            <Star className="w-5 h-5 text-white" />
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-bold text-slate-900"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                          >
                            {t('services.details.benefits')}
                          </motion.h3>
                        </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentService.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-3 group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 + (index * 0.1), ease: "easeOut" }}
                          whileHover={{ y: -3, scale: 1.02 }}
                        >
                          <motion.div
                            className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.3, delay: 0.9 + (index * 0.1), type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Star className="w-4 h-4 text-white" />
                          </motion.div>
                          <motion.span
                            className="text-slate-700 text-base font-medium group-hover:text-slate-900 transition-colors duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.0 + (index * 0.1) }}
                          >
                            {benefit}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                      </motion.div>

                      {/* Requisitos */}
                      <motion.div
                        className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ y: -2, shadow: "xl" }}
                      >
                        <motion.div
                          className="flex items-center mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-r from-slate-500 to-slate-600 rounded-lg flex items-center justify-center mr-3"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                          >
                            <FileText className="w-5 h-5 text-white" />
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-bold text-slate-900"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.9 }}
                          >
                            {t('services.details.requirements')}
                          </motion.h3>
                        </motion.div>
                    <ul className="space-y-3">
                      {currentService.requirements.map((requirement, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.0 + (index * 0.1), ease: "easeOut" }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            className="w-6 h-6 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full flex items-center justify-center shadow-sm flex-shrink-0"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 1.1 + (index * 0.1), type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FileText className="w-4 h-4 text-white" />
                          </motion.div>
                          <motion.span
                            className="text-slate-700 text-base font-medium group-hover:text-slate-900 transition-colors duration-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                          >
                            {requirement}
                          </motion.span>
                        </motion.li>
                      ))}
                    </ul>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            )
          })()}
        </AnimatePresence>

        {/* FAQ Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${business})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {t('services.faq.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('services.faq.description')}
              </p>
            </motion.div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ shadow: '2xl' }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
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
                {t('services.cta.title')}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                  {t('services.cta.titleHighlight')}
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('services.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="https://wa.me/573186401900?text=Hola%2C%20estoy%20listo%20para%20mejorar%20mi%20situaci%C3%B3n%20financiera%20y%20quiero%20agendar%20una%20consulta%20gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {t('services.cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <Link
                  to="/nuestra-compania"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:border-amber-500 hover:bg-white/10 transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  {t('services.cta.knowHistory')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="mt-16 pt-8 border-t border-slate-700">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span className="text-white font-semibold">Asesoría Especializada</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">Procesos Seguros</span>
                  </div>
                  <div className="hidden sm:block w-px h-6 bg-slate-600"></div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Resultados Garantizados</span>
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

