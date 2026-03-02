import Hero from '@/components/Hero'
import VehicleSearch from '@/components/VehicleSearch'
import VehicleCard from '@/components/VehicleCard'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import { getFeaturedVehicles } from '@/lib/vehicles'
import Link from 'next/link'

export default async function HomePage() {
  const featuredVehicles = await getFeaturedVehicles()

  return (
    <main>
      <Hero />
      
      {/* Vehicle Search Section */}
      <section className="py-16 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VehicleSearch />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-primary-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
              Vehículos <span className="text-primary-gold">destacados</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Descubrí nuestra selección de vehículos en excelente estado y con las mejores condiciones del mercado.
            </p>
          </div>

          {featuredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg mb-4">
                No hay vehículos destacados disponibles en este momento.
              </p>
              <Link
                href="/vehiculos"
                className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
              >
                Ver todos los vehículos
              </Link>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/vehiculos"
              className="inline-flex items-center gap-2 border-2 border-primary-gold text-primary-gold px-8 py-3 rounded-lg font-semibold hover:bg-primary-gold hover:text-primary-black transition-all"
            >
              Ver todos los vehículos
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      
      {/* Financing Preview */}
      <section className="py-16 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
                Financiación <span className="text-primary-gold">facilitada</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Te ofrecemos las mejores opciones de financiación para que puedas llevar tu vehículo sin complicaciones. 
                Trabajamos con las entidades financieras más importantes del país.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                  Cuotas fijas y en pesos
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                  Aprobación en 24 horas
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                  Hasta 84 cuotas para planes
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                  Anticipo desde el 20%
                </li>
              </ul>

              <Link
                href="/financiacion"
                className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
              >
                Simular financiación
              </Link>
            </div>
            
            <div className="bg-primary-graphite rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary-white mb-4">
                ¿Buscás vender tu vehículo usado?
              </h3>
              <p className="text-gray-300 mb-6">
                Te ofrecemos el mejor precio del mercado y pago al contado. 
                Nos encargamos de toda la documentación.
              </p>
              <Link
                href="/tomamos-tu-usado"
                className="inline-flex items-center gap-2 border-2 border-primary-gold text-primary-gold px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold hover:text-primary-black transition-all"
              >
                Cotizar mi usado
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
      
      <WhatsAppFloatingButton />
    </main>
  )
}
