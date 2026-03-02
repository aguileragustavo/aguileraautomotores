'use client'

import { useState } from 'react'
import { formatPrice, calculateMonthlyPayment } from '@/lib/utils'
import type { FinancingData } from '@/types/vehicle'

export default function FinancingSimulator() {
  const [financingData, setFinancingData] = useState<FinancingData>({
    precio: 0,
    anticipo: 0,
    cuotas: 12,
    tasa: 45
  })

  const [monthlyPayment, setMonthlyPayment] = useState<number>(0)

  const handleInputChange = (field: keyof FinancingData, value: string | number) => {
    const newData = {
      ...financingData,
      [field]: field === 'precio' || field === 'anticipo' || field === 'cuotas' 
        ? Number(value) 
        : value
    }
    setFinancingData(newData)
    
    // Calculate monthly payment
    if (newData.precio > 0 && newData.anticipo >= 0 && newData.cuotas > 0) {
      const payment = calculateMonthlyPayment(newData)
      setMonthlyPayment(payment)
    }
  }

  const montoFinanciar = financingData.precio - financingData.anticipo
  const anticipoPercentage = financingData.precio > 0 
    ? (financingData.anticipo / financingData.precio) * 100 
    : 0

  return (
    <div className="bg-primary-graphite rounded-lg p-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-primary-white mb-6 text-center">
        Simulador de Financiación
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Precio del Vehículo */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Precio del vehículo
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="number"
              value={financingData.precio || ''}
              onChange={(e) => handleInputChange('precio', e.target.value)}
              placeholder="0"
              className="w-full pl-8 pr-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>
        </div>

        {/* Anticipo */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Anticipo ({anticipoPercentage.toFixed(1)}%)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              $
            </span>
            <input
              type="number"
              value={financingData.anticipo || ''}
              onChange={(e) => handleInputChange('anticipo', e.target.value)}
              placeholder="0"
              className="w-full pl-8 pr-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>
        </div>

        {/* Cuotas */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Cantidad de cuotas
          </label>
          <select
            value={financingData.cuotas}
            onChange={(e) => handleInputChange('cuotas', e.target.value)}
            className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
          >
            <option value={6}>6 cuotas</option>
            <option value={12}>12 cuotas</option>
            <option value={18}>18 cuotas</option>
            <option value={24}>24 cuotas</option>
            <option value={36}>36 cuotas</option>
            <option value={48}>48 cuotas</option>
            <option value={60}>60 cuotas</option>
            <option value={72}>72 cuotas</option>
            <option value={84}>84 cuotas</option>
          </select>
        </div>

        {/* Tasa Anual */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tasa anual (TNA)
          </label>
          <div className="relative">
            <input
              type="number"
              value={financingData.tasa}
              onChange={(e) => handleInputChange('tasa', e.target.value)}
              step="0.1"
              className="w-full pr-8 px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              %
            </span>
          </div>
        </div>
      </div>

      {/* Results */}
      {monthlyPayment > 0 && (
        <div className="bg-primary-black rounded-lg p-6 border border-primary-gold">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">Monto a financiar</div>
              <div className="text-2xl font-bold text-primary-white">
                {formatPrice(montoFinanciar)}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Cuota mensual</div>
              <div className="text-3xl font-bold text-primary-gold">
                {formatPrice(monthlyPayment)}
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-400 mb-1">Total a pagar</div>
              <div className="text-2xl font-bold text-primary-white">
                {formatPrice(monthlyPayment * financingData.cuotas + financingData.anticipo)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-400">
          * Esta simulación es referencial y no constituye una oferta de financiación. 
          Las condiciones finales pueden variar según el análisis crediticio.
        </p>
      </div>
    </div>
  )
}
