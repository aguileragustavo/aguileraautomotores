import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    vehicle: 'Toyota Hilux 2021',
    rating: 5,
    comment: 'Excelente atención, muy profesionales el equipo. Me ayudaron a encontrar la camioneta que necesitaba para mi trabajo. 100% recomendables.'
  },
  {
    name: 'María González',
    vehicle: 'Volkswagen Gol 2020',
    rating: 5,
    comment: 'Compré mi primer auto con ellos y la experiencia fue increíble. Me explicaron todo detalladamente y el vehículo está en perfectas condiciones.'
  },
  {
    name: 'Juan Pérez',
    vehicle: 'Ford Ranger 2022',
    rating: 5,
    comment: 'La mejor concesionaria de Concordia. Trato transparente, precios justos y vehículos de calidad. Sin duda volvería a comprar con ellos.'
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-primary-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            Opiniones de nuestros <span className="text-primary-gold">clientes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubrí por qué somos la concesionaria más confiable de la región.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-black rounded-lg p-6 relative hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-primary-gold/20" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-primary-gold fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-primary-white">
                  {testimonial.name}
                </div>
                <div className="text-sm text-primary-gold">
                  {testimonial.vehicle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
