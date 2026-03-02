'use client'

import { useState } from 'react'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'

interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  asunto: string
  mensaje: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Here you would typically send data to your backend
      // For now, we'll simulate submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitMessage('¡Mensaje enviado con éxito! Te responderemos a la brevedad.')
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      })
    } catch (error) {
      setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Form */}
      <div>
        <h3 className="text-2xl font-bold text-primary-white mb-6">
          Envianos un mensaje
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              value={formData.nombre}
              onChange={(e) => handleInputChange('nombre', e.target.value)}
              placeholder="Tu nombre completo"
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="tu@email.com"
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

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Asunto *
            </label>
            <select
              value={formData.asunto}
              onChange={(e) => handleInputChange('asunto', e.target.value)}
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
            >
              <option value="">Seleccioná un asunto</option>
              <option value="consulta-vehiculo">Consulta por vehículo</option>
              <option value="financiacion">Financiación</option>
              <option value="toma-usado">Toma de usado</option>
              <option value="servicio">Servicio técnico</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Mensaje *
            </label>
            <textarea
              value={formData.mensaje}
              onChange={(e) => handleInputChange('mensaje', e.target.value)}
              placeholder="Contanos en qué podemos ayudarte..."
              rows={6}
              required
              className="w-full px-4 py-3 bg-primary-black border border-gray-600 rounded-lg text-primary-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-black border-t-transparent rounded-full animate-spin"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send size={18} />
                Enviar mensaje
              </>
            )}
          </button>
        </form>

        {/* Submit Message */}
        {submitMessage && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            submitMessage.includes('éxito') 
              ? 'bg-green-900/50 text-green-300 border border-green-700' 
              : 'bg-red-900/50 text-red-300 border border-red-700'
          }`}>
            {submitMessage}
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="text-2xl font-bold text-primary-white mb-6">
          Información de contacto
        </h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-gold/10 rounded-lg">
              <MapPin className="w-6 h-6 text-primary-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-primary-white mb-1">Dirección</h4>
              <p className="text-gray-300">
                Av. 25 de Mayo 1234<br />
                Concordia, Entre Ríos<br />
                Argentina
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-gold/10 rounded-lg">
              <Phone className="w-6 h-6 text-primary-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-primary-white mb-1">Teléfono</h4>
              <p className="text-gray-300">
                (0343) 455-6677<br />
                (0343) 155-123456
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-gold/10 rounded-lg">
              <Mail className="w-6 h-6 text-primary-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-primary-white mb-1">Email</h4>
              <p className="text-gray-300">
                info@premiumcars.com.ar<br />
                ventas@premiumcars.com.ar
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-gold/10 rounded-lg">
              <Clock className="w-6 h-6 text-primary-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-primary-white mb-1">Horarios de atención</h4>
              <p className="text-gray-300">
                Lunes a Viernes: 8:00 a 18:00<br />
                Sábados: 9:00 a 13:00<br />
                Domingos: Cerrado
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 p-6 bg-primary-graphite rounded-lg">
          <h4 className="font-semibold text-primary-white mb-3">¿Necesitas respuesta rápida?</h4>
          <p className="text-gray-300 mb-4">
            Contactanos directamente por WhatsApp y te responderemos en minutos.
          </p>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, tengo una consulta desde la web.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
          >
            <Send size={18} />
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
