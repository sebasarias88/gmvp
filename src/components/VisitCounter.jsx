import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// ID único para el contador (puedes cambiarlo si quieres)
const COUNTER_ID = 'gmvp-visits'

export default function VisitCounter({ variant = 'default', className = '' }) {
  const { t } = useTranslation()
  const [visitCount, setVisitCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const registerVisit = async () => {
      try {
        // Verificar si ya se contó esta visita en esta sesión
        const sessionVisited = sessionStorage.getItem('sessionVisited')
        
        if (!sessionVisited) {
          // Incrementar el contador en el servidor (CountAPI)
          const incrementResponse = await fetch(
            `https://api.countapi.xyz/hit/${COUNTER_ID}`
          )
          
          if (incrementResponse.ok) {
            const incrementData = await incrementResponse.json()
            setVisitCount(incrementData.value)
            
            // Marcar esta sesión como visitada
            sessionStorage.setItem('sessionVisited', 'true')
            
            setIsAnimating(true)
            setTimeout(() => setIsAnimating(false), 1000)
          } else {
            // Si falla, intentar obtener el valor actual
            const getResponse = await fetch(
              `https://api.countapi.xyz/get/${COUNTER_ID}`
            )
            if (getResponse.ok) {
              const getData = await getResponse.json()
              setVisitCount(getData.value || 0)
            }
          }
        } else {
          // Si ya se contó en esta sesión, solo obtener el valor actual
          const getResponse = await fetch(
            `https://api.countapi.xyz/get/${COUNTER_ID}`
          )
          if (getResponse.ok) {
            const getData = await getResponse.json()
            setVisitCount(getData.value || 0)
          }
        }
      } catch (error) {
        console.error('Error al obtener contador de visitas:', error)
        // En caso de error, intentar usar localStorage como fallback
        const storedCount = localStorage.getItem('visitCount')
        setVisitCount(storedCount ? parseInt(storedCount, 10) : 0)
      } finally {
        setIsLoading(false)
      }
    }

    registerVisit()
  }, [])

  // Formatear número con separadores de miles
  const formatNumber = (num) => {
    return num.toLocaleString('es-CO')
  }

  // Variantes de diseño
  const variants = {
    default: {
      container: "bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10",
      icon: "text-amber-400",
      number: "text-white",
      label: "text-gray-400"
    },
    hero: {
      container: "bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20",
      icon: "text-amber-300",
      number: "text-white",
      label: "text-slate-300"
    },
    card: {
      container: "bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-4 border border-amber-400/20",
      icon: "text-amber-400",
      number: "text-white",
      label: "text-gray-300"
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
      <div className="flex items-center space-x-2 mb-2">
        <motion.div
          animate={isAnimating ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Eye className={`w-5 h-5 ${style.icon}`} />
        </motion.div>
        <motion.span
          key={visitCount}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`text-lg font-bold ${style.number}`}
        >
          {isLoading ? '...' : formatNumber(visitCount)}
        </motion.span>
      </div>
      <p className={`text-sm ${style.label}`}>
        {t('common.visits')}
      </p>
    </motion.div>
  )
}

