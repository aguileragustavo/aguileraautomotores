-- Script para actualizar la base de datos existente
-- Ejecutar este script en Supabase SQL Editor

-- 1. Agregar columnas faltantes si no existen
ALTER TABLE vehiculos 
ADD COLUMN IF NOT EXISTS exclusivo BOOLEAN DEFAULT FALSE;

ALTER TABLE vehiculos 
ADD COLUMN IF NOT EXISTS estado TEXT DEFAULT 'disponible' CHECK (estado IN ('disponible', 'reservado', 'vendido'));

-- 2. Actualizar valores existentes
UPDATE vehiculos 
SET exclusivo = FALSE 
WHERE exclusivo IS NULL;

UPDATE vehiculos 
SET estado = 'disponible' 
WHERE estado IS NULL;

-- 3. Verificar la estructura de la tabla
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'vehiculos' 
ORDER BY ordinal_position;

-- 4. Mostrar vehículos existentes
SELECT id, marca, modelo, año, disponible, exclusivo, estado, created_at
FROM vehiculos 
ORDER BY created_at DESC;

-- 5. Insertar vehículo de prueba si no hay datos
INSERT INTO vehiculos (marca, modelo, año, kilometros, precio, combustible, transmision, tipo, descripcion, disponible, exclusivo, estado)
VALUES (
  'Toyota', 
  'Corolla', 
  2023, 
  15000, 
  25000000, 
  'nafta', 
  'manual', 
  'sedán', 
  'Toyota Corolla 2023 en excelente estado, full equipo.', 
  true, 
  false, 
  'disponible'
)
ON CONFLICT DO NOTHING;
