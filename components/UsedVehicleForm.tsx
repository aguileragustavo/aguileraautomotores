'use client'

import { useState } from 'react'
import { Upload, Send, Car, Calendar, Gauge } from 'lucide-react'
import type { UsedVehicleForm } from '@/types/vehicle'

export default function UsedVehicleForm() {
  const [formData, setFormData] = useState<UsedVehicleForm>({
    marca: '',
    modelo: '',
    año: new Date().getFullYear(),
    kilometros: 0,
    descripcion: '',
    fotos: [],
    nombre: '',
    telefono: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (field: keyof UsedVehicleForm, value: string | number | File[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleInputChange('fotos', files)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitMessage('¡Gracias por tu consulta! Nos pondremos en contacto contigo a la brevedad.')
      setFormData({
        marca: '',
        modelo: '',
        año: new Date().getFullYear(),
        kilometros: 0,
        descripcion: '',
        fotos: [],
        nombre: '',
        telefono: ''
      })
    } catch (error) {
      setSubmitMessage('Hubo un error al enviar el formulario. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, quiero consultar por la venta de mi vehículo usado:\n\n` +
    `Marca: ${formData.marca}\n` +
    `Modelo: ${formData.modelo}\n` +
    `Año: ${formData.año}\n` +
    `Kilometraje: ${formData.kilometros} km\n` +
    `Descripción: ${formData.descripcion}\n\n` +
    `Mi nombre: ${formData.nombre}\n` +
    `Teléfono: ${formData.telefono}`
  )

  return (
    <div className="bg-primary-graphite rounded-lg p-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-primary-white mb-6 text-center">
        Cotizá tu vehículo usado
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Marca */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Marca *
            </label>
            <input
              type="text"
              value={formData.marca}
              onChange={(e) => handleInputChange('marca', e.target.value)}
              placeholder="Ej: Toyota, Volkswagen, Ford"
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          {/* Modelo */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Modelo *
            </label>
            <input
              type="text"
              value={formData.modelo}
              onChange={(e) => handleInputChange('modelo', e.target.value)}
              placeholder="Ej: Hilux, Gol, Ranger"
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          {/* Año */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Año *
            </label>
            <input
              type="number"
              value={formData.año}
              onChange={(e) => handleInputChange('año', parseInt(e.target.value))}
              min="1990"
              max={new Date().getFullYear() + 1}
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          {/* Kilometraje */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Kilometraje *
            </label>
            <div className="relative">
              <input
                type="number"
                value={formData.kilometros}
                onChange={(e) => handleInputChange('kilometros', parseInt(e.target.value))}
                placeholder="0"
                min="0"
                required
                className="w-full pr-12 px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                km
              </span>
            </div>
          </div>
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Descripción del vehículo *
          </label>
          <textarea
            value={formData.descripcion}
            onChange={(e) => handleInputChange('descripcion', e.target.value)}
            placeholder="Describe el estado general del vehículo, características especiales, mantenimiento reciente, etc."
            rows={4}
            required
            className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
          />
        </div>

        {/* Fotos */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Fotos del vehículo
          </label>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-300 mb-2">
              Arrastrá las fotos o hacé clic para seleccionarlas
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Máximo 10 fotos. Formatos: JPG, PNG (máx. 5MB cada una)
            </p>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-4 py-2 rounded-lg font-medium hover:bg-primary-gold/90 transition-colors cursor-pointer"
            >
              <Upload size={16} />
              Seleccionar fotos
            </label>
            
            {formData.fotos.length > 0 && (
              <p className="mt-3 text-sm text-primary-gold">
                {formData.fotos.length} foto{formData.fotos.length !== 1 ? 's' : ''} seleccionada{formData.fotos.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>

        {/* Datos Personales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tu nombre *
            </label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
              placeholder="Nombre completo"
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              value={formData.telefono}
              onChange={(e) => handleInputChange('telefono', e.target.value)}
              placeholder="Ej: 0343 455-6677"
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-black border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send size={18} />
                Enviar consulta
              </>
            )}
          </button>

          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 border-2 border-primary-gold text-primary-gold px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold hover:text-primary-black transition-all"
          >
            <Car size={18} />
            Consultar por WhatsApp
          </a>
        </div>
      </form>

      {/* Submit Message */}
      {submitMessage && (
        <div className={`mt-4 p-4 rounded-lg text-center ${
          submitMessage.includes('Gracias') 
            ? 'bg-green-900/50 text-green-300 border border-green-700' 
            : 'bg-red-900/50 text-red-300 border border-red-700'
        }`}>
          {submitMessage}
        </div>
      )}

      {/* Info */}
      <div className="mt-6 p-4 bg-primary-black rounded-lg">
        <h4 className="font-semibold text-primary-white mb-2">¿Cómo funciona?</h4>
        <ol className="space-y-2 text-sm text-gray-300">
          <li>1. Completá el formulario con los datos de tu vehículo</li>
          <li>2. Adjuntá fotos claras del estado general</li>
          <li>3. Te contactaremos a la brevedad con una cotización</li>
          <li>4. Si aceptás, coordinamos una inspección</li>
          <li>5. Cerramos el negocio y te pagamos al contado</li>
        </ol>
      </div>
    </div>
  )
}
