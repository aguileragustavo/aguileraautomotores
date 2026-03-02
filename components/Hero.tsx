import Link from 'next/link'
import { ArrowRight, Car } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary-black via-primary-graphite to-primary-black">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary-gold/10 rounded-full">
              <Car className="w-12 h-12 text-primary-gold" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-white mb-6">
            Tu próximo auto
            <span className="block text-primary-gold">comienza aquí</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vehículos seleccionados, verificados y listos para que los disfrutes desde el primer kilómetro.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vehiculos"
              className="inline-flex items-center justify-center gap-2 bg-primary-gold text-primary-black px-8 py-4 rounded-lg font-semibold hover:bg-primary-gold/90 transition-all transform hover:scale-105"
            >
              Ver vehículos
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              href="/financiacion"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-gold text-primary-gold px-8 py-4 rounded-lg font-semibold hover:bg-primary-gold hover:text-primary-black transition-all"
            >
              Simular financiación
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">100+</div>
              <div className="text-gray-300">Vehículos disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">24h</div>
              <div className="text-gray-300">Respuesta garantizada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">5★</div>
              <div className="text-gray-300">Calificación clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
