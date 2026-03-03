import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Check if we have valid Supabase credentials
const isValidSupabaseUrl = supabaseUrl && supabaseUrl !== 'https://demo.supabase.co'
const isValidSupabaseKey = supabaseAnonKey && supabaseAnonKey !== 'demo-key'

// User the service key if available (only on server side)
// Otherwise fallback to the anon key
const keyToUse = typeof window === 'undefined' && supabaseServiceKey
  ? supabaseServiceKey
  : supabaseAnonKey

export const supabase = isValidSupabaseUrl && keyToUse
  ? createClient(supabaseUrl, keyToUse)
  : null

export const isSupabaseConfigured = !!(isValidSupabaseUrl && isValidSupabaseKey)
