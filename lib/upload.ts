import { supabase } from './supabase'

export async function uploadVehicleImage(file: File, vehicleId: string): Promise<string> {
  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  // Validar el archivo
  if (!file.type.startsWith('image/')) {
    throw new Error('El archivo debe ser una imagen')
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB
    throw new Error('La imagen no puede superar los 10MB')
  }

  // Generar un nombre único para el archivo
  const fileExt = file.name.split('.').pop()
  const fileName = `${vehicleId}/${Date.now()}.${fileExt}`

  try {
    // Subir el archivo al bucket
    const { data, error } = await supabase.storage
      .from('vehicle-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      console.error('Error uploading image:', error)
      throw new Error(`Error al subir la imagen: ${error.message}`)
    }

    // Obtener la URL pública
    const { data: { publicUrl } } = supabase.storage
      .from('vehicle-images')
      .getPublicUrl(fileName)

    return publicUrl
  } catch (error) {
    console.error('Error in uploadVehicleImage:', error)
    throw error
  }
}

export async function saveVehicleImageUrls(vehicleId: string, imageUrls: string[]): Promise<void> {
  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  try {
    // Insertar las URLs en la tabla vehiculo_imagenes
    const imageData = imageUrls.map(url => ({
      vehiculo_id: vehicleId,
      url: url
    }))

    const { error } = await supabase
      .from('vehiculo_imagenes')
      .insert(imageData)

    if (error) {
      console.error('Error saving image URLs:', error)
      throw new Error(`Error al guardar las URLs de las imágenes: ${error.message}`)
    }
  } catch (error) {
    console.error('Error in saveVehicleImageUrls:', error)
    throw error
  }
}

export async function deleteVehicleImage(imageUrl: string): Promise<void> {
  if (!supabase) {
    throw new Error('Supabase not configured')
  }

  try {
    // Extraer el path de la URL
    const url = new URL(imageUrl)
    const pathParts = url.pathname.split('/vehicle-images/')
    if (pathParts.length < 2) {
      throw new Error('URL de imagen inválida')
    }

    const filePath = pathParts[1]

    // Eliminar del storage
    const { error } = await supabase.storage
      .from('vehicle-images')
      .remove([filePath])

    if (error) {
      console.error('Error deleting image:', error)
      throw new Error(`Error al eliminar la imagen: ${error.message}`)
    }
  } catch (error) {
    console.error('Error in deleteVehicleImage:', error)
    throw error
  }
}
