-- SCRIPT DE EMERGENCIA: CORRECCIÓN DE GUARDADO DE VEHÍCULOS
-- Ejecuta este código en el SQL Editor de tu Dashboard de Supabase

-- 1. Eliminar políticas antiguas que bloqueaban el acceso
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON vehiculos;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON vehiculo_imagenes;

-- 2. Crear nuevas políticas que permiten insertar (necesario para nuestra configuración actual)
CREATE POLICY "Enable insert for all users" ON vehiculos FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable insert for all users" ON vehiculo_imagenes FOR INSERT WITH CHECK (true);

-- 3. Asegurar que las políticas de actualización y borrado también permitan trabajar sin Auth formal
DROP POLICY IF EXISTS "Enable update for authenticated users" ON vehiculos;
CREATE POLICY "Enable update for all users" ON vehiculos FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Enable delete for authenticated users" ON vehiculos;
CREATE POLICY "Enable delete for all users" ON vehiculos FOR DELETE USING (true);

-- Mensaje de confirmación: Políticas actualizadas exitosamente.
