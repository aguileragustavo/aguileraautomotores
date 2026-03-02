'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-primary-black/95 backdrop-blur-sm z-50 border-b border-primary-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary-gold">Premium</span>
            <span className="text-2xl font-semibold text-primary-white ml-2">Cars</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-white hover:text-primary-gold transition-colors">
              Inicio
            </Link>
            <Link href="/vehiculos" className="text-primary-white hover:text-primary-gold transition-colors">
              Vehículos
            </Link>
            <Link href="/financiacion" className="text-primary-white hover:text-primary-gold transition-colors">
              Financiación
            </Link>
            <Link href="/tomamos-tu-usado" className="text-primary-white hover:text-primary-gold transition-colors">
              Tomamos tu Usado
            </Link>
            <Link href="/contacto" className="text-primary-white hover:text-primary-gold transition-colors">
              Contacto
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary-gold text-primary-black px-4 py-2 rounded-lg hover:bg-primary-gold/90 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-white hover:text-primary-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary-graphite rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-primary-white hover:text-primary-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/vehiculos"
                className="block px-3 py-2 text-primary-white hover:text-primary-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Vehículos
              </Link>
              <Link
                href="/financiacion"
                className="block px-3 py-2 text-primary-white hover:text-primary-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Financiación
              </Link>
              <Link
                href="/tomamos-tu-usado"
                className="block px-3 py-2 text-primary-white hover:text-primary-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Tomamos tu Usado
              </Link>
              <Link
                href="/contacto"
                className="block px-3 py-2 text-primary-white hover:text-primary-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary-gold text-primary-black px-3 py-2 rounded-lg hover:bg-primary-gold/90 transition-colors mx-3"
              >
                <Phone size={18} />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
