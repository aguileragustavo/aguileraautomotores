'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // No verificar autenticación en la página de login
    if (pathname === '/admin/login') {
      return
    }

    // Verificar autenticación en las demás páginas de admin
    const checkAuth = () => {
      const auth = localStorage.getItem('adminAuth')
      if (!auth) {
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
  }, [router, pathname])

  return <>{children}</>
}
