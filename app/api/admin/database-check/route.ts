import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    if (!supabase) {
      return NextResponse.json(
        { error: 'Supabase not configured' },
        { status: 500 }
      )
    }

    // Verificar si la tabla existe y su estructura
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type, is_nullable, column_default')
      .eq('table_name', 'vehiculos')
      .order('ordinal_position')

    if (tablesError) {
      console.error('Error checking table structure:', tablesError)
      
      // Alternativa: intentar una consulta simple para ver si la tabla existe
      const { data: testData, error: testError } = await supabase
        .from('vehiculos')
        .select('id, marca, modelo')
        .limit(1)

      if (testError) {
        return NextResponse.json({
          error: 'Table does not exist or no access',
          details: testError.message,
          code: testError.code
        }, { status: 500 })
      }

      return NextResponse.json({
        message: 'Table exists but could not check structure',
        sampleData: testData
      })
    }

    // Verificar si hay datos
    const { data: vehicles, error: vehiclesError } = await supabase
      .from('vehiculos')
      .select('id, marca, modelo, año, disponible, exclusivo, estado')
      .limit(5)

    return NextResponse.json({
      tableStructure: tables,
      existingVehicles: vehicles || [],
      vehicleCount: vehicles?.length || 0,
      hasError: !!vehiclesError,
      error: vehiclesError?.message
    })

  } catch (error) {
    console.error('Error checking database:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
