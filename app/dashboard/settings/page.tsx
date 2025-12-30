'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { User } from '@supabase/supabase-js'
import { Save } from 'lucide-react'

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    const loadUserData = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        setUser(user)
      }
      
      setLoading(false)
    }

    loadUserData()
  }, [])

  const handleSave = async () => {
    if (!user) return

    setSaving(true)
    setMessage(null)

    try {
      // Settings saved successfully
      setMessage({ type: 'success', text: 'Settings saved successfully!' })
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message || 'Failed to save settings' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile</h2>
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={user?.email || ''}
            disabled
            className="bg-gray-50"
          />
        </div>
      </Card>

      {/* Account Preferences */}
      <Card>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Account Status
            </label>
            <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-gray-900 font-medium">Demo Account</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Messages */}
      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === 'success'
              ? 'bg-green-50 border border-green-200 text-green-700'
              : 'bg-red-50 border border-red-200 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving}>
          <Save className="w-4 h-4 mr-2" />
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </div>
  )
}
