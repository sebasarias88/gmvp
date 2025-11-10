import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  MessageCircle, ArrowRight, Send, MapPin, Phone, Mail, FileText,
  Facebook, Twitter, Linkedin
} from 'lucide-react'

const colombianDepartments = [
  "Antioquia", "Atlántico", "Bogotá D.C.", "Bolívar", "Boyacá", "Caldas",
  "Caquetá", "Cauca", "Cesar", "Córdoba", "Cundinamarca", "Huila",
  "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander",
  "Quindío", "Risaralda", "Santander", "Sucre", "Tolima", "Valle del Cauca",
  "Arauca", "Casanare", "Putumayo", "San Andrés y Providencia",
  "Amazonas", "Guainía", "Guaviare", "Vaupés", "Vichada"
]

export default function ServicioCliente() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    celular: '',
    ciudad: '',
    departamento: '',
    comentario: '',
    aceptaPoliticas: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Por ahora solo mostramos un alert, pero aquí puedes hacer una petición HTTP
    alert(t('customerService.formSuccess'))
  }

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
              <span className="text-amber-500">{t('customerService.title')}</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('customerService.description')}
            </motion.p>
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-600 border border-amber-200 rounded-full text-lg font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              {t('customerService.service24')}
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('customerService.sendMessage')}</h2>
                    <p className="text-slate-600">
                      {t('customerService.formDescription')}
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t('customerService.form.name')} *
                        </label>
                        <input
                          required
                          type="text"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                          placeholder={t('customerService.form.namePlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t('customerService.form.lastName')}
                        </label>
                        <input
                          type="text"
                          name="apellidos"
                          value={formData.apellidos}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                          placeholder={t('customerService.form.lastNamePlaceholder')}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        {t('customerService.form.email')} *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder={t('customerService.form.emailPlaceholder')}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t('customerService.form.phone')}
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                          placeholder={t('customerService.form.phonePlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t('customerService.form.cellphone')}
                        </label>
                        <input
                          type="tel"
                          name="celular"
                          value={formData.celular}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                          placeholder={t('customerService.form.cellphonePlaceholder')}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t('customerService.form.city')}
                        </label>
                        <input
                          type="text"
                          name="ciudad"
                          value={formData.ciudad}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                          placeholder={t('customerService.form.cityPlaceholder')}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-2">
                          {t('customerService.form.department')}
                        </label>
                        <select
                          name="departamento"
                          value={formData.departamento}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        >
                          <option value="">{t('customerService.form.selectDepartment')}</option>
                          {colombianDepartments.map((dept) => (
                            <option key={dept} value={dept}>{dept}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        {t('customerService.form.comment')} *
                      </label>
                      <textarea
                        required
                        name="comentario"
                        rows="5"
                        value={formData.comentario}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                        placeholder={t('customerService.form.commentPlaceholder')}
                      ></textarea>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        required
                        type="checkbox"
                        name="aceptaPoliticas"
                        checked={formData.aceptaPoliticas}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
                      />
                      <label className="text-sm text-slate-600">
                        {t('customerService.form.acceptPolicies')} <Link to="/politicas" className="text-amber-600 hover:text-amber-700 font-medium">{t('customerService.form.privacyPolicy')}</Link>
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-3" />
                      {t('customerService.form.send')}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Office */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{t('customerService.office')}</h3>
                  </div>
                  <p className="text-slate-600 text-lg">Armenia, Quindío, Colombia</p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('customerService.contactUs')}</h3>

                  {[
                    {
                      icon: Phone,
                      title: t('customerService.contactMethods.phone.title'),
                      primary: t('customerService.contactMethods.phone.primary'),
                      secondary: t('customerService.contactMethods.phone.secondary')
                    },
                    {
                      icon: Mail,
                      title: t('customerService.contactMethods.email.title'),
                      primary: t('customerService.contactMethods.email.primary'),
                      secondary: t('customerService.contactMethods.email.secondary')
                    },
                    {
                      icon: MessageCircle,
                      title: t('customerService.contactMethods.customerService.title'),
                      primary: t('customerService.contactMethods.customerService.primary'),
                      secondary: t('customerService.contactMethods.customerService.secondary')
                    },
                    {
                      icon: FileText,
                      title: t('customerService.contactMethods.legal.title'),
                      primary: t('customerService.contactMethods.legal.primary'),
                      secondary: t('customerService.contactMethods.legal.secondary')
                    }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <contact.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-1">{contact.title}</h4>
                          <p className="text-slate-900 font-semibold mb-1">{contact.primary}</p>
                          <p className="text-sm text-slate-600">{contact.secondary}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('customerService.followUs')}</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
                      { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
                      { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-12 h-12 bg-gradient-to-r from-slate-500 to-slate-600 rounded-xl flex items-center justify-center text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t('customerService.cta.title')}
              </h2>
              <p className="text-xl text-slate-600 mb-10">
                {t('customerService.cta.description')}
              </p>
              <motion.a
                href="https://wa.me/573186401900?text=Hola%2C%20necesito%20ayuda%20con%20mi%20historial%20crediticio%20y%20quiero%20saber%20c%C3%B3mo%20pueden%20ayudarme%20a%20recuperar%20mi%20vida%20crediticia"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                  {t('customerService.chatButton')}
                <ArrowRight className="w-5 h-5 ml-3" />
              </motion.a>
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
              <div className="flex flex-wrap justify-center gap-8 text-sm mb-8">
                <Link to="/politicas-privacidad" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  {t('customerService.additionalPolicies.privacy')}
                </Link>
                <Link to="/politicas-cookies" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  {t('customerService.additionalPolicies.cookies')}
                </Link>
                <Link to="/aviso-legal" className="text-amber-400 hover:text-amber-300 transition-colors duration-300">
                  {t('customerService.additionalPolicies.legal')}
                </Link>
              </div>
              <div className="pt-6 border-t border-slate-700">
                <p className="text-slate-400 text-sm">{t('customerService.additionalPolicies.copyright')}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

