'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save, Upload, X, Image as ImageIcon } from 'lucide-react'
import { AdminVehicleForm } from '@/types/vehicle'

export default function NewVehiclePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [formData, setFormData] = useState<AdminVehicleForm>({
    marca: '',
    modelo: '',
    año: new Date().getFullYear(),
    kilometros: 0,
    precio: 0,
    combustible: 'nafta',
    transmision: 'manual',
    tipo: 'auto',
    descripcion: '',
    estado: 'disponible',
    exclusivo: false,
    destacado: false,
    imagenes: []
  })

  const marcas = ['Toyota', 'Volkswagen', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Audi', 'Honda', 'Nissan', 'Peugeot']
  const tipos = ['auto', 'sedán', 'suv', 'pickup', 'coupé', 'convertible', 'van', 'camión', 'moto']
  const combustibles = ['nafta', 'diesel', 'gnc', 'híbrido', 'eléctrico']
  const transmisiones = ['manual', 'automática', 'secuencial']

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    const newImages = files.map(file => URL.createObjectURL(file))
    setPreviewImages([...previewImages, ...newImages])
    setFormData({ ...formData, imagenes: [...formData.imagenes, ...files] })
  }

  const removeImage = (index: number) => {
    const newPreviewImages = previewImages.filter((_, i) => i !== index)
    const newFormImages = formData.imagenes.filter((_, i) => i !== index)
    setPreviewImages(newPreviewImages)
    setFormData({ ...formData, imagenes: newFormImages })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log('Submitting vehicle:', formData)
      
      // Crear FormData para enviar archivos y datos
      const formDataToSend = new FormData()
      
      // Agregar datos del vehículo
      formDataToSend.append('marca', formData.marca)
      formDataToSend.append('modelo', formData.modelo)
      formDataToSend.append('año', formData.año.toString())
      formDataToSend.append('kilometros', formData.kilometros.toString())
      formDataToSend.append('precio', formData.precio.toString())
      formDataToSend.append('combustible', formData.combustible)
      formDataToSend.append('transmision', formData.transmision)
      formDataToSend.append('tipo', formData.tipo)
      formDataToSend.append('descripcion', formData.descripcion)
      formDataToSend.append('estado', formData.estado)
      formDataToSend.append('exclusivo', formData.exclusivo.toString())
      formDataToSend.append('destacado', formData.destacado.toString())
      
      // Agregar imágenes
      formData.imagenes.forEach((file, index) => {
        formDataToSend.append(`image_${index}`, file)
      })
      
      const response = await fetch('/api/admin/vehicles', {
        method: 'POST',
        body: formDataToSend
      })

      const result = await response.json()
      
      if (response.ok) {
        console.log('Vehicle saved successfully:', result)
        alert('¡Vehículo guardado exitosamente!')
        router.push('/admin/dashboard')
      } else {
        console.error('Error saving vehicle:', result)
        alert(`Error al guardar el vehículo: ${result.error}\n\nDetalles: ${result.details || 'Sin detalles adicionales'}\n\nCódigo: ${result.code || 'N/A'}`)
      }
    } catch (error) {
      console.error('Error saving vehicle:', error)
      alert(`Error al guardar el vehículo: ${error instanceof Error ? error.message : 'Error desconocido'}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-[#1a1a1a] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => router.push('/admin/dashboard')}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </button>
              <h1 className="text-xl font-bold text-white">Agregar Vehículo</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Información Básica */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Información Básica</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Marca *
                </label>
                <select
                  value={formData.marca}
                  onChange={(e) => setFormData({ ...formData, marca: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  required
                >
                  <option value="">Seleccionar marca</option>
                  {marcas.map(marca => (
                    <option key={marca} value={marca}>{marca}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Modelo *
                </label>
                <input
                  type="text"
                  value={formData.modelo}
                  onChange={(e) => setFormData({ ...formData, modelo: e.target.value })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Ej: Corolla, Ranger, etc."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Año *
                </label>
                <input
                  type="number"
                  value={formData.año}
                  onChange={(e) => setFormData({ ...formData, año: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  min="2000"
                  max={new Date().getFullYear() + 1}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kilometraje *
                </label>
                <input
                  type="number"
                  value={formData.kilometros}
                  onChange={(e) => setFormData({ ...formData, kilometros: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio *
                </label>
                <input
                  type="number"
                  value={formData.precio}
                  onChange={(e) => setFormData({ ...formData, precio: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="0"
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tipo *
                </label>
                <select
                  value={formData.tipo}
                  onChange={(e) => setFormData({ ...formData, tipo: e.target.value as any })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  {tipos.map(tipo => (
                    <option key={tipo} value={tipo}>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Combustible *
                </label>
                <select
                  value={formData.combustible}
                  onChange={(e) => setFormData({ ...formData, combustible: e.target.value as any })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  required
                >
                  {combustibles.map(combustible => (
                    <option key={combustible} value={combustible}>
                      {combustible.charAt(0).toUpperCase() + combustible.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Transmisión *
                </label>
                <select
                  value={formData.transmision}
                  onChange={(e) => setFormData({ ...formData, transmision: e.target.value as any })}
                  className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 transition-colors"
                  required
                >
                  {transmisiones.map(transmision => (
                    <option key={transmision} value={transmision}>
                      {transmision.charAt(0).toUpperCase() + transmision.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Descripción
              </label>
              <textarea
                value={formData.descripcion}
                onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                placeholder="Describe las características principales del vehículo..."
              />
            </div>
          </div>

          {/* Estado y Características */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Estado y Características</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Estado *
                </label>
                <div className="flex gap-4">
                  {[
                    { value: 'disponible', label: 'Disponible', color: 'green' },
                    { value: 'reservado', label: 'Reservado', color: 'yellow' },
                    { value: 'vendido', label: 'Vendido', color: 'red' }
                  ].map(estado => (
                    <label key={estado.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="estado"
                        value={estado.value}
                        checked={formData.estado === estado.value}
                        onChange={(e) => setFormData({ ...formData, estado: e.target.value as any })}
                        className="w-4 h-4 text-yellow-500 bg-black border-gray-600 focus:ring-yellow-500/20"
                      />
                      <span className="text-gray-300">{estado.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.exclusivo}
                    onChange={(e) => setFormData({ ...formData, exclusivo: e.target.checked })}
                    className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500/20"
                  />
                  <span className="text-gray-300">Vehículo Exclusivo</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.destacado}
                    onChange={(e) => setFormData({ ...formData, destacado: e.target.checked })}
                    className="w-4 h-4 text-yellow-500 bg-black border-gray-600 rounded focus:ring-yellow-500/20"
                  />
                  <span className="text-gray-300">Destacado</span>
                </label>
              </div>
            </div>
          </div>

          {/* Imágenes */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-6">Imágenes</h2>
            
            <div className="space-y-4">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center hover:border-yellow-500/50 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 mb-2">
                    Haz clic para subir imágenes o arrastra y suelta
                  </p>
                  <p className="text-gray-500 text-sm">
                    PNG, JPG, GIF hasta 10MB cada una
                  </p>
                </label>
              </div>

              {/* Preview Images */}
              {previewImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previewImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gray-800">
                        <img
                          src={image}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => router.push('/admin/dashboard')}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancelar
            </button>
            
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold px-6 py-2 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Guardar Vehículo
                </>
              )}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}
