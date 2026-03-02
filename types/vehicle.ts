export interface Vehicle {
  id: string
  marca: string
  modelo: string
  año: number
  precio: number
  kilometros: number
  combustible: 'nafta' | 'diesel' | 'gnc' | 'híbrido' | 'eléctrico'
  transmision: 'manual' | 'automática' | 'secuencial'
  tipo: 'auto' | 'moto' | 'suv' | 'pickup' | 'van' | 'camión' | 'sedán' | 'coupé' | 'convertible'
  descripcion: string
  ciudad: string
  destacado: boolean
  exclusivo: boolean
  estado: 'disponible' | 'reservado' | 'vendido'
  created_at: string
  updated_at: string
}

export interface VehicleImage {
  id: string
  vehiculo_id: string
  url: string
}

export interface VehicleWithImages extends Vehicle {
  imagenes: VehicleImage[]
}

export interface VehicleFilters {
  marca?: string
  precioMin?: number
  precioMax?: number
  añoMin?: number
  añoMax?: number
  tipo?: string
  combustible?: string
  soloDisponibles?: boolean
  exclusivo?: boolean
  destacado?: boolean
}

export interface UsedVehicleForm {
  marca: string
  modelo: string
  año: number
  kilometros: number
  descripcion: string
  fotos: File[]
  nombre: string
  telefono: string
}

export interface FinancingData {
  precio: number
  anticipo: number
  cuotas: number
  tasa: number
}

export interface AdminVehicleForm {
  marca: string
  modelo: string
  año: number
  kilometros: number
  precio: number
  combustible: 'nafta' | 'diesel' | 'gnc' | 'híbrido' | 'eléctrico'
  transmision: 'manual' | 'automática' | 'secuencial'
  tipo: 'auto' | 'moto' | 'suv' | 'pickup' | 'van' | 'camión' | 'sedán' | 'coupé' | 'convertible'
  descripcion: string
  estado: 'disponible' | 'reservado' | 'vendido'
  exclusivo: boolean
  destacado: boolean
  imagenes: File[]
}
