import { supabase, isSupabaseConfigured } from './supabase'
import type { Vehicle, VehicleWithImages, VehicleFilters } from '@/types/vehicle'

export async function getVehicles(filters?: VehicleFilters): Promise<VehicleWithImages[]> {
  if (!isSupabaseConfigured || !supabase) {
    // Return mock data if Supabase is not configured
    return []
  }

  let query = supabase
    .from('vehiculos')
    .select(`
      *,
      vehiculo_imagenes (
        id,
        url
      )
    `)
    .order('created_at', { ascending: false })

  if (filters) {
    if (filters.marca) {
      query = query.eq('marca', filters.marca)
    }
    if (filters.tipo) {
      query = query.eq('tipo', filters.tipo)
    }
    if (filters.combustible) {
      query = query.eq('combustible', filters.combustible)
    }
    if (filters.precioMin) {
      query = query.gte('precio', filters.precioMin)
    }
    if (filters.precioMax) {
      query = query.lte('precio', filters.precioMax)
    }
    if (filters.añoMin) {
      query = query.gte('año', filters.añoMin)
    }
    if (filters.añoMax) {
      query = query.lte('año', filters.añoMax)
    }
    if (filters.exclusivo) {
      query = query.eq('exclusivo', true)
    }
    if (filters.destacado) {
      query = query.eq('destacado', true)
    }
  }

  const { data, error } = await query

  if (error) {
    console.error('Error fetching vehicles:', error)
    return []
  }

  return data.map(vehicle => ({
    ...vehicle,
    imagenes: vehicle.vehiculo_imagenes || []
  }))
}

export async function getVehicleBySlug(slug: string): Promise<VehicleWithImages | null> {
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  const [marca, modelo, año] = slug.split('-')
  const añoNum = parseInt(año)

  const { data, error } = await supabase
    .from('vehiculos')
    .select(`
      *,
      vehiculo_imagenes (
        id,
        url
      )
    `)
    .eq('marca', marca)
    .eq('modelo', modelo)
    .eq('año', añoNum)
    .eq('disponible', true)
    .single()

  if (error) {
    console.error('Error fetching vehicle:', error)
    return null
  }

  return {
    ...data,
    imagenes: data.vehiculo_imagenes || []
  }
}

export async function getExclusiveVehicles(): Promise<VehicleWithImages[]> {
  if (!isSupabaseConfigured || !supabase) {
    return []
  }

  const { data, error } = await supabase
    .from('vehiculos')
    .select(`
      *,
      vehiculo_imagenes (
        id,
        url
      )
    `)
    .eq('exclusivo', true)
    .eq('estado', 'disponible')
    .order('created_at', { ascending: false })
    .limit(6)

  if (error) {
    console.error('Error fetching exclusive vehicles:', error)
    return []
  }

  return data.map(vehicle => ({
    ...vehicle,
    imagenes: vehicle.vehiculo_imagenes || []
  }))
}

export async function getVehicleBrands(): Promise<string[]> {
  if (!isSupabaseConfigured || !supabase) {
    return ['Toyota', 'Volkswagen', 'Ford', 'Chevrolet', 'Honda']
  }

  const { data, error } = await supabase
    .from('vehiculos')
    .select('marca')
    .not('marca', 'is', null)

  if (error) {
    console.error('Error fetching brands:', error)
    return []
  }

  const brands = Array.from(new Set(data.map(item => item.marca)))
  return brands.sort()
}

export async function getVehicleTypes(): Promise<string[]> {
  if (!isSupabaseConfigured || !supabase) {
    return ['auto', 'pickup', 'suv', 'moto']
  }

  const { data, error } = await supabase
    .from('vehiculos')
    .select('tipo')
    .not('tipo', 'is', null)

  if (error) {
    console.error('Error fetching types:', error)
    return []
  }

  const types = Array.from(new Set(data.map(item => item.tipo)))
  return types.sort()
}
