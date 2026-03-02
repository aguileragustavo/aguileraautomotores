import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, Calendar, Gauge } from 'lucide-react'
import { formatPrice, formatKilometers, generateVehicleSlug } from '@/lib/utils'
import type { VehicleWithImages } from '@/types/vehicle'

interface VehicleCardProps {
  vehicle: VehicleWithImages
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const slug = generateVehicleSlug(vehicle.marca, vehicle.modelo, vehicle.año)
  const mainImage = vehicle.imagenes[0]?.url || '/placeholder-car.jpg'
  const whatsappMessage = `Hola, quiero consultar por este vehículo: ${vehicle.marca} ${vehicle.modelo} ${vehicle.año}.`

  return (
    <div className="bg-primary-graphite rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={mainImage}
          alt={`${vehicle.marca} ${vehicle.modelo} ${vehicle.año}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {vehicle.destacado && (
          <div className="absolute top-4 left-4 bg-primary-gold text-primary-black px-3 py-1 rounded-full text-sm font-semibold">
            Destacado
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <Link href={`/vehiculos/${slug}`}>
          <h3 className="text-xl font-semibold text-primary-white mb-2 hover:text-primary-gold transition-colors">
            {vehicle.marca} {vehicle.modelo}
          </h3>
        </Link>

        {/* Year and KM */}
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{vehicle.año}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge size={16} />
            <span>{formatKilometers(vehicle.kilometros)}</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-primary-gold mb-4">
          {formatPrice(vehicle.precio)}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/vehiculos/${slug}`}
            className="flex-1 bg-primary-black text-primary-white py-2 px-4 rounded-lg text-center hover:bg-primary-black/80 transition-colors"
          >
            Ver detalles
          </Link>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary-gold text-primary-black py-2 px-4 rounded-lg hover:bg-primary-gold/90 transition-colors"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </div>
  )
}
