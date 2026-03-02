import Link from 'next/link'
import { MessageCircle, CheckCircle, Clock, Shield, Users } from 'lucide-react'
import FinancingSimulator from '@/components/FinancingSimulator'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      {/* Header */}
      <div className="bg-primary-graphite py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            Financiación <span className="text-primary-gold">facilitada</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Te ofrecemos las mejores opciones de financiación para que puedas llevar tu vehículo sin complicaciones. 
            Trabajamos con las entidades financieras más importantes del país.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Financing Simulator */}
        <div className="mb-16">
          <FinancingSimulator />
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-white mb-8 text-center">
            ¿Por qué financiar con <span className="text-primary-gold">Premium Cars</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <CheckCircle className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Cuotas Fijas
              </h3>
              <p className="text-gray-300">
                Cuotas en pesos sin ajustes por inflación para que planifiques con tranquilidad.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <Clock className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Aprobación Rápida
              </h3>
              <p className="text-gray-300">
                Respuesta en menos de 24 horas y papelización simplificada.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <Shield className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Tasas Competitivas
              </h3>
              <p className="text-gray-300">
                Las mejores tasas del mercado gracias a nuestra relación con las financieras.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary-graphite rounded-full">
                  <Users className="w-8 h-8 text-primary-gold" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-white mb-2">
                Asesoramiento Personal
              </h3>
              <p className="text-gray-300">
                Te ayudamos a encontrar la mejor opción según tu perfil y posibilidades.
              </p>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-primary-graphite rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-white mb-6">
              Requisitos para Aprobación
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Ser mayor de 18 años</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">DNI argentino en vigencia</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Comprobante de ingresos (recibos de sueldo o monotributo)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Domicilio comprobable</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Anticipo mínimo del 20%</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary-graphite rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary-white mb-6">
              Documentación Necesaria
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">DNI (frente y dorso)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Último recibo de sueldo</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Servicios a tu nombre (luz, agua, gas)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Constancia de CUIT o CUIL</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-gold rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300">Referencia bancaria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-gold to-primary-gold/90 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-black mb-4">
            ¿Listo para financiar tu próximo vehículo?
          </h2>
          <p className="text-primary-black/80 text-lg mb-6 max-w-2xl mx-auto">
            Contactanos ahora y recibí asesoramiento personalizado. Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor opción de financiación para vos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero consultar por opciones de financiación.')}`}
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
