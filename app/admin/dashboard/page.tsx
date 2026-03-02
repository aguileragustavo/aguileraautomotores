'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Car, 
  Plus, 
  Edit, 
  Trash2, 
  Star, 
  DollarSign, 
  Package, 
  LogOut,
  Search,
  Filter,
  Eye,
  EyeOff
} from 'lucide-react'
import { VehicleWithImages } from '@/types/vehicle'

export default function AdminDashboard() {
  const [vehicles, setVehicles] = useState<VehicleWithImages[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filterStatus, setFilterStatus] = useState('todos')
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticación
    const auth = localStorage.getItem('adminAuth')
    if (!auth) {
      router.push('/admin/login')
      return
    }

    // Cargar vehículos
    fetchVehicles()
  }, [router])

  const fetchVehicles = async () => {
    try {
      const response = await fetch('/api/admin/vehicles')
      if (response.ok) {
        const data = await response.json()
        setVehicles(data)
      } else {
        // Fallback a getAllVehicles si no hay API
        const { getAllVehicles } = await import('@/lib/vehicles')
        const data = await getAllVehicles()
        setVehicles(data)
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    router.push('/admin/login')
  }

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.modelo.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterStatus === 'todos' || 
                         (filterStatus === 'disponibles' && vehicle.estado === 'disponible') ||
                         (filterStatus === 'reservados' && vehicle.estado === 'reservado') ||
                         (filterStatus === 'vendidos' && vehicle.estado === 'vendido') ||
                         (filterStatus === 'exclusivos' && vehicle.exclusivo)
    
    return matchesSearch && matchesFilter
  })

  const stats = {
    total: vehicles.length,
    disponibles: vehicles.filter(v => v.estado === 'disponible').length,
    reservados: vehicles.filter(v => v.estado === 'reservado').length,
    vendidos: vehicles.filter(v => v.estado === 'vendido').length,
    exclusivos: vehicles.filter(v => v.exclusivo).length
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-black" />
              </div>
              <h1 className="text-xl font-bold text-white">Panel de Administración</h1>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total</p>
                <p className="text-2xl font-bold text-white">{stats.total}</p>
              </div>
              <Package className="w-8 h-8 text-gray-600" />
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Disponibles</p>
                <p className="text-2xl font-bold text-green-400">{stats.disponibles}</p>
              </div>
              <Car className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Reservados</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.reservados}</p>
              </div>
              <Eye className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Vendidos</p>
                <p className="text-2xl font-bold text-red-400">{stats.vendidos}</p>
              </div>
              <DollarSign className="w-8 h-8 text-red-600" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-800/30 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-400 text-sm">Exclusivos</p>
                <p className="text-2xl font-bold text-yellow-300">{stats.exclusivos}</p>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => router.push('/admin/vehicles/new')}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all"
            >
              <Plus className="w-4 h-4" />
              Agregar Vehículo
            </button>
            
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por marca o modelo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex flex-wrap gap-2">
                {[
                  { value: 'todos', label: 'Todos' },
                  { value: 'disponibles', label: 'Disponibles' },
                  { value: 'reservados', label: 'Reservados' },
                  { value: 'vendidos', label: 'Vendidos' },
                  { value: 'exclusivos', label: 'Exclusivos' }
                ].map(filter => (
                  <button
                    key={filter.value}
                    onClick={() => setFilterStatus(filter.value)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      filterStatus === filter.value
                        ? 'bg-yellow-500 text-black'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Vehicles Table */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black/50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Vehículo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Precio
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Especial
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredVehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-4">
                      <div>
                        <div className="text-white font-medium">
                          {vehicle.marca} {vehicle.modelo}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {vehicle.año} • {vehicle.kilometros.toLocaleString()} km
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-4 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        vehicle.estado === 'disponible' 
                          ? 'bg-green-900/30 text-green-400 border border-green-800/50'
                          : vehicle.estado === 'reservado'
                          ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50'
                          : 'bg-red-900/30 text-red-400 border border-red-800/50'
                      }`}>
                        {vehicle.estado === 'disponible' ? 'Disponible' : 
                         vehicle.estado === 'reservado' ? 'Reservado' : 'Vendido'}
                      </span>
                    </td>
                    
                    <td className="px-4 py-4">
                      <div className="text-white font-medium">
                        ${vehicle.precio.toLocaleString()}
                      </div>
                    </td>
                    
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        {vehicle.exclusivo && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 text-yellow-400 border border-yellow-700/50">
                            <Star className="w-3 h-3" />
                            Exclusivo
                          </span>
                        )}
                        {vehicle.destacado && (
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-blue-900/30 text-blue-400 border border-blue-800/50">
                            Destacado
                          </span>
                        )}
                      </div>
                    </td>
                    
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => router.push(`/admin/vehicles/${vehicle.id}/edit`)}
                          className="p-1 text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredVehicles.length === 0 && (
            <div className="text-center py-12">
              <Car className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                {searchTerm || filterStatus !== 'todos' 
                  ? 'No se encontraron vehículos con los filtros aplicados'
                  : 'No hay vehículos registrados'
                }
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
