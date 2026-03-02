'use client'

import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import type { VehicleFilters } from '@/types/vehicle'

interface VehicleFiltersProps {
  filters: VehicleFilters
  onFiltersChange: (filters: VehicleFilters) => void
  brands: string[]
  types: string[]
}

export default function VehicleFilters({ 
  filters, 
  onFiltersChange, 
  brands, 
  types 
}: VehicleFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFilterChange = (key: keyof VehicleFilters, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    })
  }

  const clearFilters = () => {
    onFiltersChange({})
  }

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== undefined && value !== '' && value !== false
  )

  return (
    <div className="bg-primary-graphite rounded-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary-gold" />
          <h3 className="text-lg font-semibold text-primary-white">Filtros</h3>
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-gray-400 hover:text-primary-white transition-colors text-sm"
            >
              Limpiar filtros
            </button>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary-gold hover:text-primary-gold/80 transition-colors"
          >
            {isExpanded ? <X size={20} /> : <Filter size={20} />}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Marca
            </label>
            <select
              value={filters.marca || ''}
              onChange={(e) => handleFilterChange('marca', e.target.value || undefined)}
              className="w-full px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
            >
              <option value="">Todas las marcas</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tipo de vehículo
            </label>
            <select
              value={filters.tipo || ''}
              onChange={(e) => handleFilterChange('tipo', e.target.value || undefined)}
              className="w-full px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
            >
              <option value="">Todos los tipos</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Fuel Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Combustible
            </label>
            <select
              value={filters.combustible || ''}
              onChange={(e) => handleFilterChange('combustible', e.target.value || undefined)}
              className="w-full px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
            >
              <option value="">Todos los combustibles</option>
              <option value="nafta">Nafta</option>
              <option value="diesel">Diesel</option>
              <option value="gnc">GNC</option>
              <option value="híbrido">Híbrido</option>
              <option value="eléctrico">Eléctrico</option>
            </select>
          </div>

          {/* Year Range */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Año
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Desde"
                value={filters.añoMin || ''}
                onChange={(e) => handleFilterChange('añoMin', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-1/2 px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
              <input
                type="number"
                placeholder="Hasta"
                value={filters.añoMax || ''}
                onChange={(e) => handleFilterChange('añoMax', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-1/2 px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
            </div>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Precio
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Mínimo"
                value={filters.precioMin || ''}
                onChange={(e) => handleFilterChange('precioMin', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-1/2 px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
              <input
                type="number"
                placeholder="Máximo"
                value={filters.precioMax || ''}
                onChange={(e) => handleFilterChange('precioMax', e.target.value ? parseInt(e.target.value) : undefined)}
                className="w-1/2 px-3 py-2 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
            </div>
          </div>

          {/* Available Only */}
          <div className="flex items-end">
            <label className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                checked={filters.soloDisponibles || false}
                onChange={(e) => handleFilterChange('soloDisponibles', e.target.checked)}
                className="w-4 h-4 text-primary-gold bg-primary-black border-gray-600 rounded focus:ring-primary-gold"
              />
              <span className="text-sm">Solo disponibles</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
