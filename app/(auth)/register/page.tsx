'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Card } from '@/components/ui/Card'
import { countries } from '@/lib/countries'

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    if (!firstName.trim()) {
      setError('First name is required')
      return
    }

    if (!lastName.trim()) {
      setError('Last name is required')
      return
    }

    setLoading(true)

    try {
      const supabase = createClient()
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (authError) throw authError

      if (authData.user) {
        // Wait a bit for the trigger to create the profile, then update it
        await new Promise(resolve => setTimeout(resolve, 500))
        
        // Use upsert to create or update the profile
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: authData.user.id,
            user_id: authData.user.id,
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            phone_number: phoneNumber.trim() || null,
            address: address.trim() || null,
            country: country || null,
            updated_at: new Date().toISOString(),
          }, {
            onConflict: 'id'
          })

        if (profileError) {
          console.error('Error saving profile:', profileError)
          // Try update as fallback
          const { error: updateError } = await supabase
            .from('profiles')
            .update({
              first_name: firstName.trim(),
              last_name: lastName.trim(),
              phone_number: phoneNumber.trim() || null,
              address: address.trim() || null,
              country: country || null,
              updated_at: new Date().toISOString(),
            })
            .eq('id', authData.user.id)
          
          if (updateError) {
            console.error('Error updating profile:', updateError)
          }
        }
      }

      router.push('/dashboard')
      router.refresh()
    } catch (error: any) {
      setError(error.message || 'An error occurred during registration')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-primary-50 px-4 py-8">
      <Card className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Apex Fund Traders
          </h1>
          <p className="text-gray-600">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="John"
            />
            <Input
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              placeholder="Doe"
            />
          </div>

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
          />

          <Input
            label="Phone Number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1234567890"
          />

          <Input
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street address"
          />

          <Select
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </Select>

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />

          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="••••••••"
          />

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
