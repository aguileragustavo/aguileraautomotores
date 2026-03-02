import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CallToAction() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const message = encodeURIComponent('Hola, quiero consultar por los vehículos disponibles.')

  return (
    <section className="py-16 bg-gradient-to-r from-primary-gold to-primary-gold/90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
          ¿Listo para encontrar tu próximo vehículo?
        </h2>
        <p className="text-lg text-primary-black/80 mb-8 max-w-2xl mx-auto">
          Contactanos ahora y recibí asesoramiento personalizado. Nuestro equipo está listo para ayudarte a encontrar el auto perfecto para vos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary-black text-primary-gold px-8 py-4 rounded-lg font-semibold hover:bg-primary-black/90 transition-all transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar por WhatsApp
          </a>
          
          <Link
            href="/vehiculos"
            className="inline-flex items-center justify-center gap-2 bg-primary-black text-primary-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-black/90 transition-all"
          >
            Ver todos los vehículos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-primary-black/70">
          <p className="text-sm">
            También podés llamarnos al <strong>(0343) 455-6677</strong> o visitarnos en Av. 25 de Mayo 1234, Concordia
          </p>
        </div>
      </div>
    </section>
  )
}
