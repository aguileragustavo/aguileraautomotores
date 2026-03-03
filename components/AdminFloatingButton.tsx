'use client'

import { Settings } from 'lucide-react'

export default function AdminFloatingButton() {
  return (
    <a
      href="/admin/dashboard"
      className="fixed bottom-24 right-6 bg-primary-gold text-primary-black p-4 rounded-full shadow-lg hover:bg-primary-gold/90 transition-all z-40"
      aria-label="Panel de Administración"
    >
      <Settings className="w-6 h-6" />
    </a>
  )
}
