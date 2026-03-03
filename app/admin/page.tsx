'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
    const router = useRouter()

    useEffect(() => {
        // Redirigir directamente al dashboard
        // El layout se encargará de verificar si hay sesión o no
        router.replace('/admin/dashboard')
    }, [router])

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
        </div>
    )
}
