'use client'

import { useState } from 'react'
import { ChallengeType, AccountSize } from '@/types'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

// Pricing configuration
const pricing: Record<ChallengeType, Record<AccountSize, number>> = {
  'one-step': {
    '5000': 49,
    '10000': 69,
    '25000': 189,
    '50000': 319,
    '100000': 549,
  },
  'two-steps': {
    '5000': 29,
    '10000': 49,
    '25000': 139,
    '50000': 259,
    '100000': 479,
  },
}

const accountSizeLabels: Record<AccountSize, string> = {
  '5000': '$5,000.00',
  '10000': '$10,000.00',
  '25000': '$25,000.00',
  '50000': '$50,000.00',
  '100000': '$100,000.00',
}

export default function ChallengesPage() {
  const [selectedChallengeType, setSelectedChallengeType] = useState<ChallengeType | null>(null)
  const [selectedAccountSize, setSelectedAccountSize] = useState<AccountSize | null>(null)

  const accountSizes: AccountSize[] = ['5000', '10000', '25000', '50000', '100000']

  const getPrice = (): number | null => {
    if (selectedChallengeType && selectedAccountSize) {
      return pricing[selectedChallengeType][selectedAccountSize]
    }
    return null
  }

  const price = getPrice()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">New Challenge</h1>
        </div>
        <p className="text-gray-600 mt-2">Select your challenge type and account size</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Challenge Configuration */}
        <div className="lg:col-span-2 space-y-8">
          {/* Challenge Type */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Challenge Type</h2>
            <p className="text-sm text-gray-600 mb-4">Choose the type of challenge you want to take</p>
            <div className="flex gap-4">
              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="challengeType"
                  value="one-step"
                  checked={selectedChallengeType === 'one-step'}
                  onChange={() => setSelectedChallengeType('one-step')}
                  className="sr-only"
                />
                <div
                  className={cn(
                    'border-2 rounded-lg p-4 text-center transition-all',
                    selectedChallengeType === 'one-step'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  )}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                        selectedChallengeType === 'one-step'
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      )}
                    >
                      {selectedChallengeType === 'one-step' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-base">One Step</span>
                </div>
              </label>

              <label className="flex-1 cursor-pointer">
                <input
                  type="radio"
                  name="challengeType"
                  value="two-steps"
                  checked={selectedChallengeType === 'two-steps'}
                  onChange={() => setSelectedChallengeType('two-steps')}
                  className="sr-only"
                />
                <div
                  className={cn(
                    'border-2 rounded-lg p-4 text-center transition-all',
                    selectedChallengeType === 'two-steps'
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  )}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div
                      className={cn(
                        'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                        selectedChallengeType === 'two-steps'
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      )}
                    >
                      {selectedChallengeType === 'two-steps' && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      )}
                    </div>
                  </div>
                  <span className="font-semibold text-gray-900 text-base">Two Steps</span>
                </div>
              </label>
            </div>
          </div>

          {/* Account Size */}
          {selectedChallengeType && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Account Size</h2>
              <p className="text-sm text-gray-600 mb-4">Choose your preferred account size</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {accountSizes.map((size) => (
                  <label key={size} className="cursor-pointer">
                    <input
                      type="radio"
                      name="accountSize"
                      value={size}
                      checked={selectedAccountSize === size}
                      onChange={() => setSelectedAccountSize(size)}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        'border-2 rounded-lg p-4 text-center transition-all',
                        selectedAccountSize === size
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      )}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <div
                          className={cn(
                            'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                            selectedAccountSize === size
                              ? 'border-blue-600 bg-blue-600'
                              : 'border-gray-300'
                          )}
                        >
                          {selectedAccountSize === size && (
                            <div className="w-2.5 h-2.5 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <div className="text-base font-semibold text-gray-900">
                        {accountSizeLabels[size]}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Section - Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

            {selectedChallengeType && selectedAccountSize ? (
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-sm text-gray-600 mb-1">Challenge</div>
                  <div className="font-semibold text-gray-900">
                    {accountSizeLabels[selectedAccountSize]} - {selectedChallengeType === 'one-step' ? 'One Step' : 'Two Steps'}
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Price</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${price?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-gray-900">
                      ${price?.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>

                  <Button
                    className="w-full"
                    variant="primary"
                    disabled={!selectedChallengeType || !selectedAccountSize}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Select challenge type and account size to see pricing</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
