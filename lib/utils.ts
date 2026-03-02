import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatKilometers(km: number): string {
  return new Intl.NumberFormat('es-AR').format(km) + ' km'
}

export function generateVehicleSlug(marca: string, modelo: string, año: number): string {
  return `${marca.toLowerCase().replace(/\s+/g, '-')}-${modelo.toLowerCase().replace(/\s+/g, '-')}-${año}`
}

export function generateWhatsAppMessage(vehicle?: Vehicle): string {
  if (vehicle) {
    return `Hola, quiero consultar por este vehículo: ${vehicle.marca} ${vehicle.modelo} ${vehicle.año}.`
  }
  return 'Hola, quiero consultar por los vehículos disponibles.'
}

export function calculateMonthlyPayment(data: {
  precio: number
  anticipo: number
  cuotas: number
  tasa: number
}): number {
  const montoFinanciar = data.precio - data.anticipo
  const tasaMensual = data.tasa / 100 / 12
  const cuota = montoFinanciar * (tasaMensual * Math.pow(1 + tasaMensual, data.cuotas)) / (Math.pow(1 + tasaMensual, data.cuotas) - 1)
  return Math.round(cuota)
}

import type { Vehicle } from '@/types/vehicle'
