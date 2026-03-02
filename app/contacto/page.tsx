import ContactForm from '@/components/ContactForm'
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      {/* Header */}
      <div className="bg-primary-graphite py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-white mb-4">
            Contactate con <span className="text-primary-gold">Premium Cars</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Estamos para ayudarte a encontrar el vehículo perfecto o responder cualquier consulta que tengas. 
            Comunicate con nosotros por el medio que prefieras.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-primary-graphite rounded-lg overflow-hidden">
            <div className="h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-white mb-2">
                  Av. 25 de Mayo 1234, Concordia
                </h3>
                <p className="text-gray-300 mb-4">
                  Visitá nuestro showroom o coordiná una visita
                </p>
                <a
                  href="https://maps.google.com/?q=Av.+25+de+Mayo+1234+Concordia+Entre+Rios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-gold text-primary-black px-6 py-3 rounded-lg font-semibold hover:bg-primary-gold/90 transition-colors"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <ContactForm />
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-primary-graphite rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-white mb-2">
              Respuesta Rápida
            </h3>
            <p className="text-gray-300">
              Te respondemos todas las consultas en menos de 24 horas hábiles.
            </p>
          </div>

          <div className="bg-primary-graphite rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-white mb-2">
              Asesoramiento Personal
            </h3>
            <p className="text-gray-300">
              Nuestro equipo de expertos te guiará en todo el proceso.
            </p>
          </div>

          <div className="bg-primary-graphite rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-primary-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-white mb-2">
              Atención Personalizada
            </h3>
            <p className="text-gray-300">
              Tratamos cada cliente como único, con soluciones a medida.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppFloatingButton />
    </div>
  )
}
