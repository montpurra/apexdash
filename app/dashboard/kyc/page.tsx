import { LockedSection } from '@/components/locked/LockedSection'

export default function KYCPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">KYC Verification</h1>
      </div>

      <LockedSection
        title="KYC Verification Locked"
        message="KYC verification is only available for funded traders. Complete a challenge to become a funded trader and access KYC features."
      />
    </div>
  )
}

