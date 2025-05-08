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
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  EA Exam Prep
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center space-x-6">
                  <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors">
                    Resources
                  </Link>
                  <Link href="/practice" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors">
                    Practice Tests
                  </Link>
                  <Link href="/simulated-exam" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors">
                    Simulated Exam
                  </Link>
                  <Link href="/daily-challenge" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors">
                    Daily Challenge
                  </Link>
                  <Link href="/dashboard" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium">
                    My Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          {children}
        </main>
        <footer className="bg-white py-6 mt-12 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600">© {new Date().getFullYear()} EA Exam Prep. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 