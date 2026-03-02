import { CheckCircle, Shield, Clock, Users } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'Vehículos Verificados',
    description: 'Todos nuestros vehículos pasan por una inspección mecánica completa de 200 puntos.'
  },
  {
    icon: Shield,
    title: 'Garantía de Confianza',
    description: 'Ofrecemos garantía en todos nuestros vehículos para tu tranquilidad.'
  },
  {
    icon: Clock,
    title: 'Respuesta Rápida',
    description: 'Atención personalizada y respuesta en menos de 24 horas.'
  },
  {
    icon: Users,
    title: 'Experiencia',
    description: 'Más de 15 años en el mercado automotor de Entre Ríos.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            ¿Por qué elegir <span className="text-primary-gold">Premium Cars</span>?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Somos tu mejor opción para comprar tu próximo vehículo con confianza y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full group-hover:bg-primary-gold/10 transition-colors">
                  <reason.icon className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
