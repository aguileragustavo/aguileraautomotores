-- Crear tabla de vehículos
CREATE TABLE IF NOT EXISTS vehiculos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  marca TEXT NOT NULL,
  modelo TEXT NOT NULL,
  año INTEGER NOT NULL,
  kilometros INTEGER NOT NULL,
  precio INTEGER NOT NULL,
  combustible TEXT NOT NULL CHECK (combustible IN ('nafta', 'diesel', 'gnc', 'híbrido', 'eléctrico')),
  transmision TEXT NOT NULL CHECK (transmision IN ('manual', 'automática', 'secuencial')),
  tipo TEXT NOT NULL CHECK (tipo IN ('auto', 'moto', 'suv', 'pickup', 'van', 'camión', 'sedán', 'coupé', 'convertible')),
  ciudad TEXT NOT NULL DEFAULT 'Concordia',
  descripcion TEXT,
  disponible BOOLEAN DEFAULT true,
  destacado BOOLEAN DEFAULT false,
  exclusivo BOOLEAN DEFAULT false,
  estado TEXT NOT NULL DEFAULT 'disponible' CHECK (estado IN ('disponible', 'reservado', 'vendido')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de imágenes de vehículos
CREATE TABLE IF NOT EXISTS vehiculo_imagenes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vehiculo_id UUID REFERENCES vehiculos(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_vehiculos_disponibles ON vehiculos(disponible);
CREATE INDEX IF NOT EXISTS idx_vehiculos_destacados ON vehiculos(destacado);
CREATE INDEX IF NOT EXISTS idx_vehiculos_marca ON vehiculos(marca);
CREATE INDEX IF NOT EXISTS idx_vehiculos_tipo ON vehiculos(tipo);
CREATE INDEX IF NOT EXISTS idx_vehiculo_imagenes_vehiculo_id ON vehiculo_imagenes(vehiculo_id);

-- Insertar datos de ejemplo
INSERT INTO vehiculos (marca, modelo, año, kilometros, precio, combustible, transmision, tipo, descripcion, destacado, exclusivo, estado) VALUES
('Toyota', 'Hilux', 2023, 15000, 45000000, 'diesel', 'manual', 'pickup', 'Toyota Hilux 4x4 en excelente estado, full equipo.', true, true, 'disponible'),
('Volkswagen', 'Gol Trend', 2022, 25000, 28000000, 'nafta', 'manual', 'auto', 'Volkswagen Gol Trend, muy económico y confiable.', false, false, 'disponible'),
('Ford', 'Ranger', 2023, 20000, 48000000, 'diesel', 'manual', 'pickup', 'Ford Ranger XL 4x4, impecable.', true, false, 'disponible'),
('Chevrolet', 'Cruze', 2022, 30000, 32000000, 'nafta', 'automática', 'sedán', 'Chevrolet Cruze LT, excelente estado.', false, false, 'disponible'),
('BMW', 'Serie 3', 2023, 8000, 85000000, 'nafta', 'automática', 'sedán', 'BMW Serie 3 330i, deportivo y elegante. Motor 2.0L turbo.', true, true, 'disponible'),
('Mercedes-Benz', 'Clase C', 2023, 12000, 92000000, 'nafta', 'automática', 'sedán', 'Mercedes-Benz C 300, lujo y tecnología alemana.', true, true, 'reservado');

-- Insertar imágenes de ejemplo
INSERT INTO vehiculo_imagenes (vehiculo_id, url) VALUES
((SELECT id FROM vehiculos WHERE marca = 'Toyota' AND modelo = 'Hilux' LIMIT 1), 'https://images.unsplash.com/photo-1563412064-9a31d73a5c3c?w=800&h=600&fit=crop'),
((SELECT id FROM vehiculos WHERE marca = 'Toyota' AND modelo = 'Hilux' LIMIT 1), 'https://images.unsplash.com/photo-1606664535564-1e530a18b7fa?w=800&h=600&fit=crop'),
((SELECT id FROM vehiculos WHERE marca = 'Volkswagen' AND modelo = 'Gol Trend' LIMIT 1), 'https://images.unsplash.com/photo-1552519507-da3b142c5e3d?w=800&h=600&fit=crop'),
((SELECT id FROM vehiculos WHERE marca = 'Ford' AND modelo = 'Ranger' LIMIT 1), 'https://images.unsplash.com/photo-1605559424842-6e7e4a2c9c7b?w=800&h=600&fit=crop'),
((SELECT id FROM vehiculos WHERE marca = 'Chevrolet' AND modelo = 'Cruze' LIMIT 1), 'https://images.unsplash.com/photo-1606664535564-1e530a18b7fa?w=800&h=600&fit=crop');

-- Configurar Row Level Security (RLS)
ALTER TABLE vehiculos ENABLE ROW LEVEL SECURITY;
ALTER TABLE vehiculo_imagenes ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para lectura pública
CREATE POLICY "Enable read access for all users" ON vehiculos FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON vehiculo_imagenes FOR SELECT USING (true);

-- Políticas RLS para insert (solo autenticados si es necesario)
CREATE POLICY "Enable insert for authenticated users" ON vehiculos FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Enable insert for authenticated users" ON vehiculo_imagenes FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Políticas RLS para update (solo autenticados si es necesario)
CREATE POLICY "Enable update for authenticated users" ON vehiculos FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable update for authenticated users" ON vehiculo_imagenes FOR UPDATE USING (auth.role() = 'authenticated');

-- Políticas RLS para delete (solo autenticados si es necesario)
CREATE POLICY "Enable delete for authenticated users" ON vehiculos FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Enable delete for authenticated users" ON vehiculo_imagenes FOR DELETE USING (auth.role() = 'authenticated');
