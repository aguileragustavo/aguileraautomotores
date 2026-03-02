import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  keywords?: string[]
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website' as const,
  keywords,
  noIndex = false
}: SEOProps): Metadata {
  const siteName = 'Premium Cars'
  const baseUrl = 'https://premiumcars.com.ar'
  const defaultImage = `${baseUrl}/images/og-default.jpg`
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImage = image ? `${baseUrl}${image}` : defaultImage
  
  const metaDescription = description || 
    'Vehículos seleccionados, verificados y listos para que los disfrutes desde el primer kilómetro. Autos y motos en Concordia, Entre Ríos.'
  
  const metaKeywords = keywords?.join(', ') || 
    'concesionaria, autos usados, autos nuevos, motos, financiación, Concordia, Entre Ríos, Argentina, Premium Cars'

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: metaKeywords,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    openGraph: {
      type,
      locale: 'es_AR',
      url: fullUrl,
      title: fullTitle,
      description: metaDescription,
      siteName,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Schema.org structured data generators
export function generateVehicleSchema(vehicle: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Vehicle',
    name: `${vehicle.marca} ${vehicle.modelo}`,
    description: vehicle.descripcion,
    brand: {
      '@type': 'Brand',
      name: vehicle.marca,
    },
    model: vehicle.modelo,
    year: vehicle.año,
    mileage: {
      '@type': 'QuantitativeValue',
      value: vehicle.kilometros,
      unitCode: 'KMT',
    },
    fuelType: vehicle.combustible,
    vehicleTransmission: vehicle.transmision,
    offers: {
      '@type': 'Offer',
      price: vehicle.precio,
      priceCurrency: 'ARS',
      availability: vehicle.disponible ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'AutomotiveBusiness',
        name: 'Premium Cars',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. 25 de Mayo 1234',
          addressLocality: 'Concordia',
          addressRegion: 'Entre Ríos',
          addressCountry: 'AR',
          postalCode: '3200',
        },
        telephone: '+543434556677',
        email: 'info@premiumcars.com.ar',
      },
    },
    image: vehicle.imagenes?.[0]?.url || '/images/vehicle-placeholder.jpg',
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'Premium Cars',
    description: 'Concesionaria de autos y motos en Concordia, Entre Ríos. Vehículos seleccionados, verificados y listos para que los disfrutes desde el primer kilómetro.',
    url: 'https://premiumcars.com.ar',
    logo: 'https://premiumcars.com.ar/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. 25 de Mayo 1234',
      addressLocality: 'Concordia',
      addressRegion: 'Entre Ríos',
      addressCountry: 'AR',
      postalCode: '3200',
    },
    telephone: '+543434556677',
    email: 'info@premiumcars.com.ar',
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 09:00-13:00',
    ],
    sameAs: [
      'https://www.facebook.com/premiumcarsconcordia',
      'https://www.instagram.com/premiumcarsconcordia',
    ],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Premium Cars',
    description: 'Concesionaria de autos y motos en Concordia, Entre Ríos. Vehículos seleccionados, verificados y listos para que los disfrutes desde el primer kilómetro.',
    url: 'https://premiumcars.com.ar',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://premiumcars.com.ar/vehiculos?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}
