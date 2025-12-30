import { AccountSize } from '@/types'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface AccountSizeCardProps {
  size: AccountSize
  selected: boolean
  onSelect: () => void
}

const sizeLabels: Record<AccountSize, string> = {
  '5000': '$5,000',
  '10000': '$10,000',
  '25000': '$25,000',
  '50000': '$50,000',
  '100000': '$100,000',
}

export function AccountSizeCard({
  size,
  selected,
  onSelect,
}: AccountSizeCardProps) {
  return (
    <Card
      onClick={onSelect}
      className={cn(
        'cursor-pointer transition-all hover:shadow-lg text-center',
        selected
          ? 'ring-2 ring-blue-600 bg-blue-50'
          : 'hover:bg-gray-50'
      )}
    >
      <div className="py-4">
        <h3 className="text-2xl font-bold text-gray-900">
          {sizeLabels[size]}
        </h3>
        <p className="text-sm text-gray-600 mt-2">Account Size</p>
      </div>
    </Card>
  )
}



