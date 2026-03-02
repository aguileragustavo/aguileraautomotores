import Link from 'next/link'
import { MessageCircle, CheckCircle, Clock, DollarSign, Shield } from 'lucide-react'
import UsedVehicleForm from '@/components/UsedVehicleForm'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'

export default function UsedVehiclePage() {
  return (
    <div className="min-h-screen bg-primary-black">
      {/* Header */}
      <div className="bg-primary-graphite py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            Tomamos tu <span className="text-primary-gold">vehículo usado</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Te ofrecemos el mejor precio del mercado y pago al contado. 
            Nos encargamos de toda la documentación para que el proceso sea simple y rápido.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Form */}
        <div className="mb-16">
          <UsedVehicleForm />
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-white mb-8 text-center">
            ¿Por qué vender tu vehículo con <span className="text-primary-gold">Premium Cars</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <DollarSign className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Precio Justo
              </h3>
              <p className="text-gray-300">
                Te ofrecemos el mejor valor de mercado según el estado y kilometraje de tu vehículo.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <CheckCircle className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Pago al Contado
              </h3>
              <p className="text-gray-300">
                Transferencia inmediata una vez acordado el precio. Sin esperas ni demoras.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <Shield className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Papelización Simple
              </h3>
              <p className="text-gray-300">
                Nos encargamos de toda la documentación y trámites de transferencia.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <Clock className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Proceso Rápido
              </h3>
              <p className="text-gray-300">
                Cotización en 24 horas y cierre de negocio en menos de 48 horas.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-primary-graphite rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-white mb-6">
              Nuestro Proceso
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-gold text-primary-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-primary-white mb-1">Contacto y Cotización</h4>
                  <p className="text-gray-300 text-sm">
                    Completás el formulario y te enviamos una cotización preliminar dentro de 24 horas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-gold text-primary-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-primary-white mb-1">Inspección del Vehículo</h4>
                  <p className="text-gray-300 text-sm">
                    Coordinamos una visita para evaluar el estado real del vehículo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-gold text-primary-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-primary-white mb-1">Oferta Final</h4>
                  <p className="text-gray-300 text-sm">
                    Te presentamos nuestra oferta final basada en la inspección realizada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-gold text-primary-black rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-primary-white mb-1">Cierre y Pago</h4>
                  <p className="text-gray-300 text-sm">
                    Si aceptás, realizamos la transferencia y te pagamos al instante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-graphite rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-white mb-6">
              Vehículos que Compramos
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-300">Autos y pickups de todos los años</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-300">Motos de mediana y alta cilindrada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-300">Vehículos con documentación al día</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-300">Un solo dueño preferentemente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-300">Kilometraje razonable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full"></div>
                <span className="text-gray-300">Buen estado general</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary-black rounded-lg">
              <p className="text-sm text-primary-gold text-center">
                ¿Tu vehículo no cumple con estos requisitos? Consultanos igual, 
                podemos evaluar casos particulares.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-gold to-primary-gold/90 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-black mb-4">
            ¿Listo para vender tu vehículo?
          </h2>
          <p className="text-primary-black/80 text-lg mb-6 max-w-2xl mx-auto">
            Completá el formulario o contactanos directamente por WhatsApp. 
            Te responderemos a la brevedad con la mejor cotización del mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero consultar por la venta de mi vehículo usado.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-black text-primary-gold px-8 py-4 rounded-lg font-semibold hover:bg-primary-black/90 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
            
            <Link
              href="/vehiculos"
              className="inline-flex items-center justify-center gap-2 bg-primary-black text-primary-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-black/90 transition-all"
            >
              Ver vehículos disponibles
            </Link>
          </div>
        </div>
      </div>

      <WhatsAppFloatingButton />
    </div>
  )
}
