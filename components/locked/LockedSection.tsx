import { ReactNode } from 'react'
import Link from 'next/link'
import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface LockedSectionProps {
  title: string
  message: string
  actionLabel?: string
  actionHref?: string
  icon?: ReactNode
}

export function LockedSection({
  title,
  message,
  actionLabel,
  actionHref,
  icon,
}: LockedSectionProps) {
  return (
    <Card className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="mb-6">
        {icon || (
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-gray-400" />
          </div>
        )}
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button>{actionLabel}</Button>
        </Link>
      )}
    </Card>
  )
}

