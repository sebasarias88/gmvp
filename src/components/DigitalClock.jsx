import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function DigitalClock({ variant = 'default', className = '' }) {
  const { i18n } = useTranslation()
  const [time, setTime] = useState(new Date())
  const [date, setDate] = useState(new Date())

  // Detectar el idioma actual
  const currentLanguage = i18n.language || 'es'
  const isEnglish = currentLanguage === 'en'

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      setTime(now)
      setDate(now)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Formatear fecha según el idioma, usando la hora local del usuario
  const formatDate = (date) => {
    const locale = isEnglish ? 'en-US' : 'es-CO'
    return date.toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Obtener horas, minutos y segundos en formato de 12 horas (AM/PM) para ambos idiomas
  // En Latinoamérica se usa formato de 12 horas, no de 24
  const hour12 = time.getHours() % 12 || 12
  const hours = hour12.toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM'

  // Variantes de diseño
  const variants = {
    default: {
      container: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4",
      time: "text-white font-mono",
      date: "text-white/80 text-xs"
    },
    header: {
      container: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2",
      time: "text-slate-700 font-mono text-sm",
      date: "text-slate-500 text-xs"
    },
    footer: {
      container: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4",
      time: "text-white font-mono",
      date: "text-gray-400 text-xs"
    },
    hero: {
      container: "bg-amber-500/20 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-6 shadow-lg",
      time: "text-white font-mono",
      date: "text-amber-200 text-sm"
    },
    floating: {
      container: "bg-gradient-to-br from-amber-500/90 to-orange-500/90 backdrop-blur-xl border border-amber-400/50 rounded-xl p-3 shadow-2xl",
      time: "text-white font-mono",
      date: "text-amber-100 text-xs"
    }
  }

  const style = variants[variant] || variants.default

  return (
    <motion.div
      className={`${style.container} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex-shrink-0"
        >
          <Clock className={`${variant === 'floating' ? 'w-4 h-4' : 'w-5 h-5'} text-amber-400`} />
        </motion.div>
        <div className="flex-1">
          <motion.div
            key={`${hours}${minutes}${seconds}${ampm}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`${style.time} ${variant === 'floating' ? 'text-lg' : 'text-2xl'} font-bold tracking-wider flex items-center`}
          >
            {hours}:{minutes}
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mx-1"
            >
              :
            </motion.span>
            {seconds}
            <span className="ml-2 text-sm font-semibold">{ampm}</span>
          </motion.div>
          {(variant === 'hero' || variant === 'floating') && (
            <motion.p
              className={style.date}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {formatDate(date)}
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

