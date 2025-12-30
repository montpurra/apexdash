import { Card } from '@/components/ui/Card'
import { Link2, AlertCircle } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      </div>

      {/* Locked Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Analytics Box */}
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="h-96 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-primary-50 to-blue-100 rounded-lg">
            <div className="text-center px-6">
              <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No data available
              </h3>
              <p className="text-gray-700 mb-6 max-w-md text-lg">
                Dashboard is only available for live accounts. To track your performance, please link your account to myfxbook.
              </p>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Link2 className="w-5 h-5" />
                <span className="font-medium">Link myfxbook Account</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Side Info Cards */}
        <div className="space-y-6">
          <Card>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Account Status</h3>
            <p className="text-2xl font-bold text-gray-900">Demo</p>
            <p className="text-sm text-gray-500 mt-1">No live account</p>
          </Card>

          <Card>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Total Trades</h3>
            <p className="text-2xl font-bold text-gray-900">0</p>
          </Card>

          <Card>
            <h3 className="text-sm font-medium text-gray-600 mb-2">Account Balance</h3>
            <p className="text-2xl font-bold text-gray-900">$0.00</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

