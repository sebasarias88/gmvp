import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Calendar, ArrowRight, Newspaper } from 'lucide-react'
import business1 from '../assets/business1.jpg'
import business2 from '../assets/business2.jpg'
import business3 from '../assets/business3.jpg'
import business4 from '../assets/business4.jpg'
import business5 from '../assets/business5.jpg'
import business6 from '../assets/business6.jpg'

export default function Noticias() {
  const { t } = useTranslation()

  // Noticias de ejemplo (valores quemados)
  const noticias = [
    {
      id: 1,
      image: business1,
      title: t('news.items.item1.title'),
      description: t('news.items.item1.description'),
      date: '15 de Enero, 2024',
      category: t('news.categories.financial')
    },
    {
      id: 2,
      image: business2,
      title: t('news.items.item2.title'),
      description: t('news.items.item2.description'),
      date: '12 de Enero, 2024',
      category: t('news.categories.credit')
    },
    {
      id: 3,
      image: business3,
      title: t('news.items.item3.title'),
      description: t('news.items.item3.description'),
      date: '10 de Enero, 2024',
      category: t('news.categories.tips')
    },
    {
      id: 4,
      image: business4,
      title: t('news.items.item4.title'),
      description: t('news.items.item4.description'),
      date: '8 de Enero, 2024',
      category: t('news.categories.financial')
    },
    {
      id: 5,
      image: business5,
      title: t('news.items.item5.title'),
      description: t('news.items.item5.description'),
      date: '5 de Enero, 2024',
      category: t('news.categories.credit')
    },
    {
      id: 6,
      image: business6,
      title: t('news.items.item6.title'),
      description: t('news.items.item6.description'),
      date: '3 de Enero, 2024',
      category: t('news.categories.tips')
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70 backdrop-blur-sm"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-400/30 rounded-full text-sm font-medium mb-8">
                <Newspaper className="w-5 h-5 mr-2" />
                {t('news.badge')}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                {t('news.title')}
              </h1>
              <p className="text-xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                {t('news.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Noticias Grid Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url(${business1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid de Noticias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {noticias.map((noticia, index) => (
                <motion.article
                  key={noticia.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-amber-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Imagen */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Categoría */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {noticia.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    {/* Fecha */}
                    <div className="flex items-center text-slate-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {noticia.date}
                    </div>

                    {/* Título */}
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {noticia.title}
                    </h2>

                    {/* Descripción */}
                    <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                      {noticia.description}
                    </p>

                    {/* Leer más */}
                    <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors">
                      <span>{t('news.readMore')}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

