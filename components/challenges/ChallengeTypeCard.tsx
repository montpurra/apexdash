import { ChallengeType } from '@/types'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface ChallengeTypeCardProps {
  type: ChallengeType
  label: string
  selected: boolean
  onSelect: () => void
}

export function ChallengeTypeCard({
  type,
  label,
  selected,
  onSelect,
}: ChallengeTypeCardProps) {
  return (
    <Card
      onClick={onSelect}
      className={cn(
        'cursor-pointer transition-all hover:shadow-lg',
        selected
          ? 'ring-2 ring-blue-600 bg-blue-50'
          : 'hover:bg-gray-50'
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{label}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {type === 'one-step'
              ? 'Single evaluation phase'
              : 'Two evaluation phases'}
          </p>
        </div>
        <div
          className={cn(
            'w-6 h-6 rounded-full border-2 flex items-center justify-center',
            selected
              ? 'border-blue-600 bg-blue-600'
              : 'border-gray-300'
          )}
        >
          {selected && (
            <div className="w-3 h-3 rounded-full bg-white" />
          )}
        </div>
      </div>
    </Card>
  )
}



