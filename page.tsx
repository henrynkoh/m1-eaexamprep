import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">EA Exam Prep</h1>
          <p className="text-gray-600 text-lg">Your complete resource for Enrolled Agent exam preparation</p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Study Resources</h2>
            <p className="text-gray-600 mb-4">
              Access comprehensive study guides, downloadable materials, and exam strategies to help you prepare.
            </p>
            <Link href="/resources" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Resources
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Practice Tests</h2>
            <p className="text-gray-600 mb-4">
              Test your knowledge with practice questions and full-length simulated exams for all three parts.
            </p>
            <Link href="/practice" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              Start Practicing
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Simulated Exams</h2>
            <p className="text-gray-600 mb-4">
              Take full-length timed exams that simulate the real EA test environment and experience.
            </p>
            <Link href="/simulated-exam" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              Take Exam
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Daily Challenges</h2>
            <p className="text-gray-600 mb-4">
              Keep your skills sharp with daily practice questions covering a variety of EA exam topics.
            </p>
            <Link href="/daily-challenge" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              Today's Challenge
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Tax Updates</h2>
            <p className="text-gray-600 mb-4">
              Stay current with the latest tax law changes and updates that may appear on the EA exam.
            </p>
            <Link href="/resources/2025-updates" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              2025 Updates
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Your Dashboard</h2>
            <p className="text-gray-600 mb-4">
              Track your progress, view your performance statistics, and manage your study plan.
            </p>
            <Link href="/dashboard" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              My Dashboard
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-3">Ready to become an Enrolled Agent?</h2>
          <p className="text-gray-600 mb-4">
            EA Exam Prep provides everything you need to pass the Special Enrollment Examination and start your career as an Enrolled Agent.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/resources/exam-strategy" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Study Strategy
            </Link>
            <Link href="/dashboard" className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 