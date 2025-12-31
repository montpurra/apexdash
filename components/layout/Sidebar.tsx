'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Home,
  Trophy,
  Wallet,
  FileText,
  Settings,
  LogOut,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const navigation = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Challenges', href: '/dashboard/challenges', icon: Trophy },
  { name: 'Payout', href: '/dashboard/payout', icon: Wallet },
  { name: 'KYC', href: '/dashboard/kyc', icon: FileText },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 h-screen fixed left-0 top-0">
      {/* Logo */}
      <div className="mb-8">
        <Link href="/dashboard" className="block">
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.svg"
              alt="Apex Fund Traders"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 w-full px-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center justify-center w-full h-12 rounded-lg transition-colors
                ${isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
                }
              `}
              title={item.name}
            >
              <item.icon className="w-6 h-6" />
            </Link>
          )
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="space-y-2 w-full px-2">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full h-12 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          title="Logout"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

