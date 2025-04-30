import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'EA Exam Prep',
  description: 'Complete preparation resources for the Enrolled Agent exam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                  EA Exam Prep
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <Link href="/resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                    Resources
                  </Link>
                  <Link href="/practice" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                    Practice Tests
                  </Link>
                  <Link href="/simulated-exam" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                    Simulated Exam
                  </Link>
                  <Link href="/daily-challenge" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">
                    Daily Challenge
                  </Link>
                  <Link href="/dashboard" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    My Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
} 