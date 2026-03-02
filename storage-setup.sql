-- Script para configurar el bucket de imágenes de vehículos en Supabase Storage
-- Ejecutar este script en Supabase SQL Editor

-- 1. Crear el bucket para imágenes de vehículos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'vehicle-images', 
  'vehicle-images', 
  true, 
  10485760, -- 10MB
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Configurar políticas de acceso para el bucket
-- Política para que cualquiera pueda subir imágenes (para el admin)
CREATE POLICY "Allow image uploads" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'vehicle-images' AND 
  auth.role() = 'authenticated'
);

-- Política para que cualquiera pueda leer las imágenes (público)
CREATE POLICY "Allow public image access" ON storage.objects
FOR SELECT USING (bucket_id = 'vehicle-images');

-- Política para que el admin pueda actualizar imágenes
CREATE POLICY "Allow image updates" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'vehicle-images' AND 
  auth.role() = 'authenticated'
);

-- Política para que el admin pueda eliminar imágenes
CREATE POLICY "Allow image deletions" ON storage.objects
FOR DELETE USING (
  bucket_id = 'vehicle-images' AND 
  auth.role() = 'authenticated'
);

-- 3. Verificar que el bucket fue creado correctamente
SELECT * FROM storage.buckets WHERE name = 'vehicle-images';
