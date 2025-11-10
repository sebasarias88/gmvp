import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, Globe } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'

export default function Header() {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const languageMenuRef = useRef(null)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setShowLanguageMenu(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setShowLanguageMenu(false)
      }
    }

    if (showLanguageMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showLanguageMenu])

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={logo} 
                alt="GMVP Credifinanzas S.A.S - Asesoramiento financiero y crediticio" 
                className="h-20 w-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isActive('/')
                  ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              {t('header.home')}
            </Link>
            <Link
              to="/nuestra-compania"
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isActive('/nuestra-compania')
                  ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              {t('header.company')}
            </Link>
            <Link
              to="/productos-servicios"
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isActive('/productos-servicios')
                  ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              {t('header.services')}
            </Link>
            <Link
              to="/politicas"
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isActive('/politicas')
                  ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              {t('header.policies')}
            </Link>
            <Link
              to="/servicio-cliente"
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isActive('/servicio-cliente')
                  ? 'text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg shadow-amber-500/25'
                  : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50'
              }`}
            >
              {t('header.customerService')}
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative" ref={languageMenuRef}>
              <motion.button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-slate-700 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4 mr-2" />
                {i18n.language === 'es' ? 'ES' : 'EN'}
              </motion.button>
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50"
                  >
                    <button
                      onClick={() => changeLanguage('es')}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                        i18n.language === 'es'
                          ? 'bg-amber-50 text-amber-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {t('common.spanish')}
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                        i18n.language === 'en'
                          ? 'bg-amber-50 text-amber-600'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {t('common.english')}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a
              href="https://wa.me/573186401900?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita%20sobre%20sus%20servicios%20financieros"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2 text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('header.freeConsultation')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

