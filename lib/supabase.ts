import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if we have valid Supabase credentials
const isValidSupabaseUrl = supabaseUrl && supabaseUrl !== 'https://demo.supabase.co'
const isValidSupabaseKey = supabaseAnonKey && supabaseAnonKey !== 'demo-key'

export const supabase = isValidSupabaseUrl && isValidSupabaseKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = isValidSupabaseUrl && isValidSupabaseKey
