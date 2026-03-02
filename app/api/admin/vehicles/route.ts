import { NextResponse } from 'next/server'
import { getAllVehicles } from '@/lib/vehicles'
import { supabase } from '@/lib/supabase'
import { uploadVehicleImage, saveVehicleImageUrls } from '@/lib/upload'

export async function GET() {
  try {
    const vehicles = await getAllVehicles()
    return NextResponse.json(vehicles)
  } catch (error) {
    console.error('Error fetching admin vehicles:', error)
    return NextResponse.json(
      { error: 'Error fetching vehicles' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    
    console.log('Received form data')
    
    if (!supabase) {
      console.error('Supabase not configured')
      return NextResponse.json(
        { error: 'Supabase not configured' },
        { status: 500 }
      )
    }
    
    // Extraer datos del formulario
    const vehicleData = {
      marca: formData.get('marca') as string,
      modelo: formData.get('modelo') as string,
      año: parseInt(formData.get('año') as string),
      kilometros: parseInt(formData.get('kilometros') as string),
      precio: parseInt(formData.get('precio') as string),
      combustible: formData.get('combustible') as string,
      transmision: formData.get('transmision') as string,
      tipo: formData.get('tipo') as string,
      descripcion: formData.get('descripcion') as string || '',
      disponible: formData.get('estado') === 'disponible',
      exclusivo: formData.get('exclusivo') === 'true',
      destacado: formData.get('destacado') === 'true',
      ciudad: 'Concordia'
    }
    
    console.log('Prepared vehicle data:', vehicleData)
    
    // Insertar el vehículo primero
    const { data: vehicle, error: vehicleError } = await supabase
      .from('vehiculos')
      .insert([vehicleData])
      .select()
      .single()

    if (vehicleError) {
      console.error('Supabase error creating vehicle:', vehicleError)
      return NextResponse.json(
        { 
          error: 'Error creating vehicle', 
          details: vehicleError.message,
          code: vehicleError.code
        },
        { status: 500 }
      )
    }

    console.log('Vehicle created successfully:', vehicle)

    // Procesar imágenes si existen
    const imageUrls: string[] = []
    const imagePromises: Promise<string>[] = []

    // Encontrar todas las imágenes en el FormData
    const keys = Array.from(formData.keys())
    for (const key of keys) {
      const value = formData.get(key)
      if (key.startsWith('image_') && value instanceof File) {
        console.log(`Processing image: ${key}, size: ${value.size}`)
        imagePromises.push(uploadVehicleImage(value, vehicle.id))
      }
    }

    if (imagePromises.length > 0) {
      try {
        const uploadedUrls = await Promise.all(imagePromises)
        imageUrls.push(...uploadedUrls)
        console.log('All images uploaded successfully:', uploadedUrls)

        // Guardar las URLs en la tabla vehiculo_imagenes
        await saveVehicleImageUrls(vehicle.id, imageUrls)
        console.log('Image URLs saved successfully')
      } catch (imageError) {
        console.error('Error processing images:', imageError)
        
        // Si hay error con las imágenes, eliminar el vehículo creado
        await supabase
          .from('vehiculos')
          .delete()
          .eq('id', vehicle.id)
        
        return NextResponse.json(
          { 
            error: 'Error uploading images', 
            details: imageError instanceof Error ? imageError.message : 'Unknown error'
          },
          { status: 500 }
        )
      }
    }

    return NextResponse.json({
      ...vehicle,
      images: imageUrls
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error in POST /api/admin/vehicles:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
