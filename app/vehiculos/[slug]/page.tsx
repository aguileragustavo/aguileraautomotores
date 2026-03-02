import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, MapPin, MessageCircle } from 'lucide-react'
import VehicleGallery from '@/components/VehicleGallery'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import { getVehicleBySlug } from '@/lib/vehicles'
import { formatPrice, formatKilometers, generateWhatsAppMessage } from '@/lib/utils'

interface VehiclePageProps {
  params: {
    slug: string
  }
}

export default async function VehiclePage({ params }: VehiclePageProps) {
  const vehicle = await getVehicleBySlug(params.slug)

  if (!vehicle) {
    notFound()
  }

  const images = vehicle.imagenes.map(img => img.url)
  const title = `${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`
  const whatsappMessage = generateWhatsAppMessage(vehicle)

  return (
    <div className="min-h-screen bg-primary-black">
      {/* Breadcrumb */}
      <div className="bg-primary-graphite py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-primary-white transition-colors">
              Inicio
            </Link>
            <span className="text-gray-600">/</span>
            <Link href="/vehiculos" className="text-gray-400 hover:text-primary-white transition-colors">
              Vehículos
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-primary-white">{title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Gallery */}
          <div>
            <VehicleGallery images={images} title={title} />
          </div>

          {/* Right Column - Vehicle Info */}
          <div>
            {/* Title and Price */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-white mb-2">
                {title}
              </h1>
              <div className="text-3xl md:text-4xl font-bold text-primary-gold">
                {formatPrice(vehicle.precio)}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-primary-graphite rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Calendar size={16} />
                  <span className="text-sm">Año</span>
                </div>
                <div className="text-xl font-semibold text-primary-white">{vehicle.año}</div>
              </div>
              
              <div className="bg-primary-graphite rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Gauge size={16} />
                  <span className="text-sm">Kilometraje</span>
                </div>
                <div className="text-xl font-semibold text-primary-white">
                  {formatKilometers(vehicle.kilometros)}
                </div>
              </div>
              
              <div className="bg-primary-graphite rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Fuel size={16} />
                  <span className="text-sm">Combustible</span>
                </div>
                <div className="text-xl font-semibold text-primary-white capitalize">
                  {vehicle.combustible}
                </div>
              </div>
              
              <div className="bg-primary-graphite rounded-lg p-4">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Settings size={16} />
                  <span className="text-sm">Transmisión</span>
                </div>
                <div className="text-xl font-semibold text-primary-white capitalize">
                  {vehicle.transmision}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-primary-graphite rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-primary-white mb-4">Ficha Técnica</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Marca:</span>
                  <span className="text-primary-white font-medium">{vehicle.marca}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Modelo:</span>
                  <span className="text-primary-white font-medium">{vehicle.modelo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tipo:</span>
                  <span className="text-primary-white font-medium capitalize">{vehicle.tipo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ubicación:</span>
                  <span className="text-primary-white font-medium flex items-center gap-1">
                    <MapPin size={14} />
                    {vehicle.ciudad}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-white mb-4">Descripción</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {vehicle.descripcion}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-primary-gold text-primary-black py-4 px-6 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
              
              <Link
                href="/contacto"
                className="w-full flex items-center justify-center gap-2 border-2 border-primary-gold text-primary-gold py-4 px-6 rounded-lg font-semibold hover:bg-primary-gold hover:text-primary-black transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Volver al listado
              </Link>
            </div>
          </div>
        </div>

        {/* Financing Section */}
        <div className="mt-16 bg-primary-graphite rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-white mb-4">
              ¿Interesado en este vehículo?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Te ofrecemos las mejores opciones de financiación. Consultá por nuestras cuotas y planes especiales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">20%</div>
              <div className="text-gray-300">Anticipo mínimo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">84</div>
              <div className="text-gray-300">Cuotas máximas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-gold mb-2">24h</div>
              <div className="text-gray-300">Aprobación</div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/financiacion"
              className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-8 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
            >
              Simular financiación
            </Link>
          </div>
        </div>
      </div>

      <WhatsAppFloatingButton />
    </div>
  )
}
