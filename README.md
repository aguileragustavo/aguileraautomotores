# Premium Cars - Concesionaria Web App

Aplicación web moderna para una concesionaria de autos y motos en Argentina, desarrollada con Next.js 14, React, TypeScript y Tailwind CSS.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** con diseño personalizado
- **Supabase** como base de datos y storage
- **Responsive Design** (Mobile-first)
- **SEO Optimizado** con metadatos dinámicos
- **WhatsApp Integration** para generación de leads
- **Componentes Reutilizables**
- **Formularios Interactivos**
- **Simulador de Financiación**

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 14, React 18, TypeScript
- **Estilos**: Tailwind CSS con configuración personalizada
- **Base de Datos**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage para imágenes
- **Icons**: Lucide React
- **Deployment**: Vercel (optimizado)

## 📁 Estructura del Proyecto

```
concesionaria-app/
├── app/                          # App Router de Next.js 14
│   ├── contacto/                 # Página de contacto
│   ├── financiacion/              # Página de financiación
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página principal
│   ├── tomamos-tu-usado/        # Página de toma de usados
│   ├── vehiculos/               # Catálogo y detalle de vehículos
│   │   ├── [slug]/             # Página individual de vehículo
│   │   └── page.tsx           # Catálogo de vehículos
│   └── ...                     # Otras páginas
├── components/                   # Componentes React
│   ├── CallToAction.tsx
│   ├── ContactForm.tsx
│   ├── FinancingSimulator.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── SEOMetadata.tsx
│   ├── UsedVehicleForm.tsx
│   ├── VehicleCard.tsx
│   ├── VehicleFilters.tsx
│   ├── VehicleGallery.tsx
│   ├── VehicleSearch.tsx
│   ├── WhatsAppFloatingButton.tsx
│   ├── WhyChooseUs.tsx
│   └── Testimonials.tsx
├── lib/                         # Utilidades y configuración
│   ├── supabase.ts             # Cliente de Supabase
│   ├── utils.ts                 # Funciones utilitarias
│   └── vehicles.ts              # Queries de vehículos
├── types/                       # Tipos TypeScript
│   └── vehicle.ts              # Tipos de vehículos y formularios
├── public/                      # Archivos estáticos
├── .env.local                  # Variables de entorno
├── next.config.js              # Configuración de Next.js
├── tailwind.config.ts          # Configuración de Tailwind
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencias del proyecto
```

## 🎨 Diseño y Colores

El diseño utiliza una paleta de colores minimalista y elegante:

- **Primary Black**: `#0f0f0f`
- **Primary Graphite**: `#1a1a1a`
- **Primary White**: `#f5f5f5`
- **Primary Gold**: `#c8a95e`
- **Font**: Montserrat

## 📋 Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=5493412345678

# Google Maps (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
```

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**:
```bash
git clone <repository-url>
cd concesionaria-app
```

2. **Instalar dependencias**:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**:
```bash
cp .env.example .env.local
# Editar .env.local con tus credenciales
```

4. **Ejecutar servidor de desarrollo**:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**:
```
http://localhost:3000
```

## 🗄️ Base de Datos (Supabase)

### Tablas requeridas:

#### `vehiculos`
```sql
CREATE TABLE vehiculos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  marca TEXT NOT NULL,
  modelo TEXT NOT NULL,
  año INTEGER NOT NULL,
  kilometros INTEGER NOT NULL,
  precio INTEGER NOT NULL,
  combustible TEXT NOT NULL,
  transmision TEXT NOT NULL,
  tipo TEXT NOT NULL,
  ciudad TEXT NOT NULL DEFAULT 'Concordia',
  descripcion TEXT,
  disponible BOOLEAN DEFAULT true,
  destacado BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### `vehiculo_imagenes`
```sql
CREATE TABLE vehiculo_imagenes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vehiculo_id UUID REFERENCES vehiculos(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  orden INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Índices recomendados:
```sql
CREATE INDEX idx_vehiculos_disponibles ON vehiculos(disponible);
CREATE INDEX idx_vehiculos_destacados ON vehiculos(destacado);
CREATE INDEX idx_vehiculos_marca ON vehiculos(marca);
CREATE INDEX idx_vehiculos_tipo ON vehiculos(tipo);
CREATE INDEX idx_vehiculo_imagenes_vehiculo_id ON vehiculo_imagenes(vehiculo_id);
```

## 🚀 Deploy en Vercel

1. **Crear cuenta en [Vercel](https://vercel.com)**

2. **Conectar repositorio**:
   - Importar el repositorio desde GitHub/GitLab/Bitbucket
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configurar variables de entorno**:
   - En Vercel Dashboard → Settings → Environment Variables
   - Agregar todas las variables del archivo `.env.local`

4. **Deploy automático**:
   - Vercel hará deploy automáticamente en cada push a `main`
   - Para deploys manuales: `vercel --prod`

### Configuración específica para Vercel:

El proyecto ya incluye optimizaciones en `next.config.js`:
- Image optimization para Supabase
- Package optimization para mejor performance
- Configuración de headers para caching

## 📱 Características Principales

### 🏠 Página Principal
- Hero section con CTA
- Búsqueda rápida de vehículos
- Vehículos destacados
- Testimonios de clientes
- Beneficios de la concesionaria

### 🚗 Catálogo de Vehículos
- Grid de vehículos con filtros avanzados
- Filtros por marca, tipo, combustible, año, precio
- Paginación infinita
- Búsqueda en tiempo real
- Cards con información clave

### 📄 Detalle de Vehículo
- Galería de imágenes con navegación
- Ficha técnica completa
- Descripción detallada
- Botones de contacto (WhatsApp, formulario)
- Simulador de financiación integrado

### 💰 Financiación
- Simulador interactivo
- Cálculo de cuotas en tiempo real
- Información de requisitos y documentación
- Beneficios de financiar con Premium Cars

### 🔄 Toma de Usados
- Formulario completo para venta
- Upload de fotos
- Proceso paso a paso
- Contacto directo por WhatsApp

### 📞 Contacto
- Formulario de contacto
- Información completa de la concesionaria
- Mapa integrado
- Múltiples canales de comunicación

## 🔧 Scripts Disponibles

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit"
}
```

## 🎯 SEO y Performance

### SEO
- Metadatos dinámicos por página
- Open Graph y Twitter Cards
- Schema.org structured data
- Sitemap automático
- URLs canónicas

### Performance
- Image optimization con Next.js Image
- Lazy loading de componentes
- Code splitting automático
- Caching estratégico
- Bundle optimization

## 📊 Analytics y Monitoreo

Para agregar analytics:

1. **Google Analytics**:
   - Agregar script en `app/layout.tsx`
   - Configurar variables de entorno

2. **Vercel Analytics**:
   - Habilitar en Vercel Dashboard
   - Sin configuración adicional requerida

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch: `git checkout -b feature/nueva-funcionalidad`
3. Commit de cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push al branch: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

## 📝 Licencia

Este proyecto está bajo licencia MIT. Ver archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico:

- **Email**: desarrollo@premiumcars.com.ar
- **WhatsApp**: +54 9 343 455-6677
- **Issues**: [GitHub Issues](https://github.com/tu-usuario/concesionaria-app/issues)

## 🌐 Deploy Status

- **Production**: [https://premiumcars.com.ar](https://premiumcars.com.ar)
- **Staging**: [https://staging.premiumcars.com.ar](https://staging.premiumcars.com.ar)

---

**Desarrollado con ❤️ por [Premium Cars](https://premiumcars.com.ar)**
