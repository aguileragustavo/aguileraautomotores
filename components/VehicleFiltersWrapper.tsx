'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import VehicleFilters from './VehicleFilters'
import type { VehicleFilters as VehicleFiltersType } from '@/types/vehicle'

interface VehicleFiltersWrapperProps {
  initialFilters: VehicleFiltersType
  brands: string[]
  types: string[]
}

export default function VehicleFiltersWrapper({ 
  initialFilters, 
  brands, 
  types 
}: VehicleFiltersWrapperProps) {
  const [filters, setFilters] = useState<VehicleFiltersType>(initialFilters)
  const searchParams = useSearchParams()

  const handleFiltersChange = (newFilters: VehicleFiltersType) => {
    setFilters(newFilters)
    
    // Update URL with new filters
    const params = new URLSearchParams(searchParams.toString())
    
    // Clear existing filter params
    const filterKeys = ['marca', 'tipo', 'combustible', 'precioMin', 'precioMax', 'añoMin', 'añoMax', 'soloDisponibles']
    filterKeys.forEach(key => params.delete(key))
    
    // Add new filter params
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== false) {
        params.set(key, value.toString())
      }
    })
    
    // Update URL without page reload
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <VehicleFilters
      filters={filters}
      onFiltersChange={handleFiltersChange}
      brands={brands}
      types={types}
    />
  )
}
