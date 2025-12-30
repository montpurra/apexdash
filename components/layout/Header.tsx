'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'

export function Header() {
  const [user, setUser] = useState<User | null>(null)
  const [firstName, setFirstName] = useState<string | null>(null)

  useEffect(() => {
    const loadUserData = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        setUser(user)
        
        // Load first name from profile
        const { data: profileData } = await supabase
          .from('profiles')
          .select('first_name')
          .eq('id', user.id)
          .single()

        if (profileData?.first_name) {
          setFirstName(profileData.first_name)
        }
      }
    }

    loadUserData()
  }, [])

  const getUserInitial = () => {
    if (firstName) return firstName.charAt(0).toUpperCase()
    if (user?.email) return user.email.charAt(0).toUpperCase()
    return 'U'
  }

  const getDisplayName = () => {
    if (firstName) return firstName
    return user?.email?.split('@')[0] || 'Trader'
  }

  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">{getUserInitial()}</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Hey, {getDisplayName()}
              </h2>
              <p className="text-sm text-gray-600">Apex Fund Traders</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Trader Summary</p>
            <p className="text-lg font-semibold text-gray-900">Total Allocation: $0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

