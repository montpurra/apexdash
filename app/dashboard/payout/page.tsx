import { LockedSection } from '@/components/locked/LockedSection'

export default function PayoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payout</h1>
      </div>

      <LockedSection
        title="Payout Section Locked"
        message="This section is only available for funded traders. Please purchase a challenge to unlock access to payout features."
        actionLabel="View Challenges"
        actionHref="/dashboard/challenges"
      />
    </div>
  )
}

