'use client'

import { useState, useEffect } from 'react'
import { Star, Crown, Sparkles } from 'lucide-react'
import { VehicleWithImages } from '@/types/vehicle'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'

export default function ExclusiveVehicles() {
  const [vehicles, setVehicles] = useState<VehicleWithImages[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExclusiveVehicles = async () => {
      try {
        // Mock data para demostración
        const mockExclusiveVehicles: VehicleWithImages[] = [
          {
            id: '1',
            marca: 'BMW',
            modelo: 'Serie 3',
            año: 2023,
            kilometros: 8000,
            precio: 85000000,
            combustible: 'nafta',
            transmision: 'automática',
            tipo: 'sedán',
            ciudad: 'Concordia',
            descripcion: 'BMW Serie 3 330i, deportivo y elegante. Motor 2.0L turbo.',
            destacado: true,
            exclusivo: true,
            estado: 'disponible',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            imagenes: [
              {
                id: '1-1',
                vehiculo_id: '1',
                url: 'https://images.unsplash.com/photo-1552519507-da3b142c5e3d?w=800&h=600&fit=crop'
              }
            ]
          },
          {
            id: '2',
            marca: 'Mercedes-Benz',
            modelo: 'Clase C',
            año: 2023,
            kilometros: 12000,
            precio: 92000000,
            combustible: 'nafta',
            transmision: 'automática',
            tipo: 'sedán',
            ciudad: 'Concordia',
            descripcion: 'Mercedes-Benz C 300, lujo y tecnología alemana.',
            destacado: true,
            exclusivo: true,
            estado: 'disponible',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            imagenes: [
              {
                id: '2-1',
                vehiculo_id: '2',
                url: 'https://images.unsplash.com/photo-1617654112368-30792180b1a2?w=800&h=600&fit=crop'
              }
            ]
          }
        ]
        
        setVehicles(mockExclusiveVehicles)
      } catch (error) {
        console.error('Error fetching exclusive vehicles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchExclusiveVehicles()
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-yellow-500" />
              <span className="text-yellow-500 font-medium tracking-wider">SELECCIÓN EXCLUSIVA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Unidades seleccionadas para quienes buscan algo superior
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-yellow-900/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (vehicles.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-transparent to-yellow-900/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="relative">
              <Crown className="w-8 h-8 text-yellow-500" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-yellow-500 font-medium tracking-wider text-lg">SELECCIÓN EXCLUSIVA</span>
            <div className="relative">
              <Crown className="w-8 h-8 text-yellow-500" />
              <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -left-1 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unidades seleccionadas para quienes buscan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              algo superior
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección exclusiva de vehículos premium, cuidadosamente seleccionados 
            para ofrecer la máxima calidad y experiencia de conducción.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-yellow-900/20 overflow-hidden transition-all duration-500 hover:border-yellow-600/40 hover:shadow-2xl hover:shadow-yellow-500/10">
                
                {/* Exclusive Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4" />
                    EXCLUSIVO
                  </div>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={vehicle.imagenes[0]?.url || '/images/placeholder.jpg'}
                    alt={`${vehicle.marca} ${vehicle.modelo}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Price Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-500/20">
                      <p className="text-yellow-400 font-bold text-lg">
                        {formatPrice(vehicle.precio)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                      {vehicle.marca} {vehicle.modelo}
                    </h3>
                    <p className="text-gray-400">
                      {vehicle.año} • {vehicle.kilometros.toLocaleString()} km
                    </p>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {vehicle.descripcion}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-black/50 border border-gray-700 rounded-lg text-xs text-gray-300">
                      {vehicle.transmision}
                    </span>
                    <span className="px-2 py-1 bg-black/50 border border-gray-700 rounded-lg text-xs text-gray-300">
                      {vehicle.combustible}
                    </span>
                    <span className="px-2 py-1 bg-black/50 border border-gray-700 rounded-lg text-xs text-gray-300">
                      {vehicle.tipo}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/vehiculos/${vehicle.marca.toLowerCase()}-${vehicle.modelo.toLowerCase().replace(/\s+/g, '-')}-${vehicle.año}`}
                    className="block w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold py-3 px-4 rounded-lg text-center hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            ¿Buscas algo específico? Tenemos acceso a unidades exclusivas bajo pedido.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            <Crown className="w-5 h-5" />
            Consultar por unidades exclusivas
          </Link>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
