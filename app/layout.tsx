import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavBar from '../components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EA Exam Prep',
  description: 'Preparation resources for the Enrolled Agent (EA) examination',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} min-h-full`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow pt-safe-top">{children}</main>
          <footer className="bg-white py-6 mt-auto border-t border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-600">© 2023 EA Exam Prep. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <Link href="/terms" className="text-gray-600 hover:text-primary">Terms</Link>
                  <Link href="/privacy" className="text-gray-600 hover:text-primary">Privacy</Link>
                  <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
} 