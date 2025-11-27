import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'
import DigitalClock from './components/DigitalClock'
import Home from './pages/Home'
import NuestraCompania from './pages/NuestraCompania'
import ProductosServicios from './pages/ProductosServicios'
import Politicas from './pages/Politicas'
import PoliticasPrivacidad from './pages/PoliticasPrivacidad'
import PoliticasCookies from './pages/PoliticasCookies'
import AvisoLegal from './pages/AvisoLegal'
import ServicioCliente from './pages/ServicioCliente'
import Noticias from './pages/Noticias'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nuestra-compania" element={<NuestraCompania />} />
          <Route path="/productos-servicios" element={<ProductosServicios />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/politicas-privacidad" element={<PoliticasPrivacidad />} />
          <Route path="/politicas-cookies" element={<PoliticasCookies />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/servicio-cliente" element={<ServicioCliente />} />
        </Routes>
        <Footer />
        
        {/* Floating Digital Clock */}
        <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <DigitalClock variant="floating" />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
