import Link from 'next/link'
import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-graphite border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-gold">Premium</span>
              <span className="text-2xl font-semibold text-primary-white ml-2">Cars</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tu concesionaria de confianza en Concordia, Entre Ríos. Vehículos seleccionados, 
              verificados y con las mejores condiciones del mercado.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vehiculos" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Vehículos
                </Link>
              </li>
              <li>
                <Link href="/financiacion" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Financiación
                </Link>
              </li>
              <li>
                <Link href="/tomamos-tu-usado" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Tomamos tu Usado
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-primary-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-primary-white mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Av. 25 de Mayo 1234<br />
                  Concordia, Entre Ríos
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  (0343) 455-6677
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <a
                  href="mailto:info@premiumcars.com.ar"
                  className="text-gray-300 hover:text-primary-gold transition-colors"
                >
                  info@premiumcars.com.ar
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <span className="text-gray-300">
                  Lunes a Viernes: 9:00 - 18:00<br />
                  Sábados: 9:00 - 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Premium Cars. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-primary-gold text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-gold text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
