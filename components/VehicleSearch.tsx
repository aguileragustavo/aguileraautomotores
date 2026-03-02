'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function VehicleSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/vehiculos?search=${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <div className="bg-primary-graphite rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-primary-white mb-6 text-center">
        Buscá tu próximo vehículo
      </h2>
      
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por marca, modelo..."
            className="w-full pl-10 pr-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold focus:border-transparent"
          />
        </div>
        
        <button
          type="submit"
          className="bg-primary-gold text-primary-black px-8 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
        >
          Buscar
        </button>
      </form>

      {/* Quick Links */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        <span className="text-gray-400 text-sm">Búsquedas populares:</span>
        {['Toyota Hilux', 'Volkswagen Gol', 'Ford Ranger', 'Chevrolet Cruze'].map((term) => (
          <button
            key={term}
            onClick={() => {
              setSearchTerm(term)
              router.push(`/vehiculos?search=${encodeURIComponent(term)}`)
            }}
            className="text-primary-gold hover:text-primary-gold/80 text-sm underline"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  )
}
