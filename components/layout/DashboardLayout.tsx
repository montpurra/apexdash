import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-20">
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

