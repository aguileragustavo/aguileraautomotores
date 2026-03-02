# Instrucciones de Deploy en Vercel

## 🚀 Estado Actual del Deploy

✅ **Proyecto desplegado exitosamente en Vercel**

- **URL Principal**: https://concesionaria-app-three.vercel.app
- **URL de Inspección**: https://vercel.com/aguileragustavos-projects/concesionaria-app/ArrXeHbwcZsMDHqq4xJ1urbcsMDk
- **Repositorio GitHub**: https://github.com/aguileragustavo/aguileraautomotores

## ⚙️ Configuración de Variables de Entorno

Para que la aplicación funcione correctamente con Supabase, necesitas configurar las siguientes variables de entorno en el dashboard de Vercel:

### Paso 1: Ir al Dashboard de Vercel
1. Ve a: https://vercel.com/aguileragustavos-projects/concesionaria-app
2. Haz clic en la pestaña "Settings"
3. Selecciona "Environment Variables"

### Paso 2: Agregar las siguientes variables

#### Variable 1: NEXT_PUBLIC_SUPABASE_URL
- **Nombre**: `NEXT_PUBLIC_SUPABASE_URL`
- **Valor**: `https://qyhjztsidlyeazsobmgz.supabase.co`
- **Entornos**: Production, Preview
- **Tipo**: No sensible (pública)

#### Variable 2: NEXT_PUBLIC_SUPABASE_ANON_KEY
- **Nombre**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Valor**: `sb_publishable_TKliFR9B7FoAbr3F-3CR4g_moBKCtIT`
- **Entornos**: Production, Preview
- **Tipo**: No sensible (pública)

#### Variable 3: NEXT_PUBLIC_WHATSAPP_NUMBER
- **Nombre**: `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **Valor**: `5493434556677`
- **Entornos**: Production, Preview
- **Tipo**: No sensible (pública)

### Paso 3: Redeploy
Después de configurar las variables, Vercel hará un redeploy automático o puedes hacerlo manualmente desde el dashboard.

## 🗄️ Configuración de Base de Datos Supabase

### Paso 1: Ejecutar el Script SQL
Ve al dashboard de Supabase: https://supabase.com/dashboard/project/qyhjztsidlyeazsobmgz

1. Ve a la sección "SQL Editor"
2. Crea una nueva consulta
3. Copia y pega el contenido del archivo `supabase-setup.sql`
4. Ejecuta el script

### Paso 2: Verificar Tablas
El script creará:
- Tabla `vehiculos` con datos de ejemplo
- Tabla `vehiculo_imagenes` con imágenes de ejemplo
- Índices para mejor rendimiento
- Políticas RLS para seguridad

## 🌐 URLs de la Aplicación

### URLs de Producción
- **Principal**: https://concesionaria-app-three.vercel.app
- **Catálogo**: https://concesionaria-app-three.vercel.app/vehiculos
- **Financiación**: https://concesionaria-app-three.vercel.app/financiacion
- **Toma de Usados**: https://concesionaria-app-three.vercel.app/tomamos-tu-usado
- **Contacto**: https://concesionaria-app-three.vercel.app/contacto

### URLs de Preview (para futuros cambios)
- **Preview**: https://concesionaria-q2usuhxlm-aguileragustavos-projects.vercel.app

## 📱 Características Implementadas

✅ **Páginas Completas**
- Página principal con hero y vehículos destacados
- Catálogo de vehículos con filtros avanzados
- Detalle individual de vehículo con galería
- Página de financiación con simulador
- Página de toma de usados con formulario
- Página de contacto completo

✅ **Funcionalidades**
- Búsqueda y filtrado de vehículos
- Galería de imágenes con navegación
- Simulador de financiación interactivo
- Formularios funcionales
- Integración con WhatsApp
- Diseño responsive (mobile-first)

✅ **Tecnología**
- Next.js 14 con App Router
- TypeScript para type safety
- Tailwind CSS con diseño personalizado
- Supabase para base de datos
- Optimización de imágenes
- SEO básico implementado

## 🔄 Flujo de Trabajo Futuro

### Para hacer cambios:
1. Hacer cambios en el código local
2. Commit y push a GitHub:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push origin main
   ```
3. Vercel hará deploy automático

### Para actualizar vehículos:
1. Ve al dashboard de Supabase
2. Usa el SQL Editor o la tabla visual
3. Agrega/actualiza/elimina vehículos
4. Los cambios se reflejarán inmediatamente en la web

## 🎯 Próximos Pasos Opcionales

1. **Dominio Personalizado**: Configurar un dominio personalizado en Vercel
2. **Analytics**: Agregar Google Analytics o Vercel Analytics
3. **SEO Avanzado**: Implementar sitemap y metadatos más detallados
4. **Formularios**: Conectar formularios a un backend real
5. **Pagos**: Integrar pasarelas de pago para reservas

## 📞 Soporte

Si necesitas ayuda:
- **Vercel**: https://vercel.com/docs
- **Supabase**: https://supabase.com/docs
- **Next.js**: https://nextjs.org/docs
- **Proyecto**: Revisa el README.md completo

---

**¡Tu concesionaria web está lista y funcionando! 🎉**
