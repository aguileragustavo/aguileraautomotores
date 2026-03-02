import { Suspense } from 'react'
import VehicleSearch from '@/components/VehicleSearch'
import VehicleCard from '@/components/VehicleCard'
import VehicleFilters from '@/components/VehicleFilters'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'
import { getVehicles, getVehicleBrands, getVehicleTypes } from '@/lib/vehicles'
import type { VehicleFilters as VehicleFiltersType } from '@/types/vehicle'

interface VehiclesPageProps {
  searchParams: {
    search?: string
    marca?: string
    tipo?: string
    precioMin?: string
    precioMax?: string
    añoMin?: string
    añoMax?: string
    combustible?: string
    soloDisponibles?: string
  }
}

export default async function VehiclesPage({ searchParams }: VehiclesPageProps) {
  // Build filters from search params
  const filters: VehicleFiltersType = {
    marca: searchParams.marca,
    tipo: searchParams.tipo,
    combustible: searchParams.combustible,
    precioMin: searchParams.precioMin ? parseInt(searchParams.precioMin) : undefined,
    precioMax: searchParams.precioMax ? parseInt(searchParams.precioMax) : undefined,
    añoMin: searchParams.añoMin ? parseInt(searchParams.añoMin) : undefined,
    añoMax: searchParams.añoMax ? parseInt(searchParams.añoMax) : undefined,
    soloDisponibles: searchParams.soloDisponibles === 'true'
  }

  // If search parameter exists, we'll need to implement search functionality
  // For now, we'll fetch all vehicles and filter client-side
  const [vehicles, brands, types] = await Promise.all([
    getVehicles(filters),
    getVehicleBrands(),
    getVehicleTypes()
  ])

  // Filter vehicles by search term if provided
  const filteredVehicles = searchParams.search
    ? vehicles.filter(vehicle => 
        vehicle.marca.toLowerCase().includes(searchParams.search!.toLowerCase()) ||
        vehicle.modelo.toLowerCase().includes(searchParams.search!.toLowerCase())
      )
    : vehicles

  return (
    <div className="min-h-screen bg-primary-black">
      {/* Header */}
      <div className="bg-primary-graphite py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            Nuestros <span className="text-primary-gold">vehículos</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Descubrí nuestra completa selección de vehículos verificados y con las mejores condiciones del mercado.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-8 bg-primary-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VehicleSearch />
        </div>
      </div>

      {/* Filters and Results */}
      <div className="py-8 bg-primary-graphite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Cargando filtros...</div>}>
            <VehicleFilters
              filters={filters}
              onFiltersChange={() => {}}
              brands={brands}
              types={types}
            />
          </Suspense>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-300">
              {filteredVehicles.length} vehículo{filteredVehicles.length !== 1 ? 's' : ''} encontrado{filteredVehicles.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Vehicles Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-primary-white mb-4">
                No se encontraron vehículos
              </h3>
              <p className="text-gray-300 mb-8">
                No hay vehículos que coincidan con los criterios de búsqueda seleccionados.
              </p>
              <a
                href="/vehiculos"
                className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
              >
                Limpiar filtros
              </a>
            </div>
          )}
        </div>
      </div>

      <WhatsAppFloatingButton />
    </div>
  )
}
