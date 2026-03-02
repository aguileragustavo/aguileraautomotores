'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    // Verificar autenticación en cada cambio de ruta
    const checkAuth = () => {
      const auth = localStorage.getItem('adminAuth')
      if (!auth && window.location.pathname !== '/admin/login') {
        router.push('/admin/login')
      }
    }

    checkAuth()
    
    // Escuchar cambios de storage (para detectar logout)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'adminAuth' && !e.newValue) {
        router.push('/admin/login')
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [router])

  return <>{children}</>
}
