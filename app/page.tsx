import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">EA Exam Prep</h1>
          <p className="text-gray-600 mt-2">Your complete resource for Enrolled Agent exam preparation</p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Study Resources</h2>
          <p className="text-gray-700 mb-3">
            Access comprehensive study guides, downloadable materials, and exam strategies to help you prepare.
          </p>
          <Link href="/resources" className="text-blue-600 hover:underline">
            View Resources →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Practice Tests</h2>
          <p className="text-gray-700 mb-3">
            Test your knowledge with practice questions and full-length simulated exams for all three parts.
          </p>
          <Link href="/practice" className="text-blue-600 hover:underline">
            Start Practicing →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Simulated Exams</h2>
          <p className="text-gray-700 mb-3">
            Take full-length timed exams that simulate the real EA test environment and experience.
          </p>
          <Link href="/simulated-exam" className="text-blue-600 hover:underline">
            Take Exam →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Daily Challenges</h2>
          <p className="text-gray-700 mb-3">
            Keep your skills sharp with daily practice questions covering a variety of EA exam topics.
          </p>
          <Link href="/daily-challenge" className="text-blue-600 hover:underline">
            Today's Challenge →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Your Dashboard</h2>
          <p className="text-gray-700 mb-3">
            Track your progress, view your performance statistics, and manage your study plan.
          </p>
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            My Dashboard →
          </Link>
        </div>
      </div>
    </div>
  )
} 